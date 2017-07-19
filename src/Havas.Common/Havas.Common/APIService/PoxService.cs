using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Web;
using System.Xml.Linq;
using Havas.Common.Extensions;

namespace Havas.Common.APIService
{
    public class PoxService : IPoxService
    {
        public IPoxServiceRecorder recorder;

        public PoxService() { }

        public PoxService(IPoxServiceRecorder recorder)
        {
            this.recorder = recorder;
        }

        private int RecordRequest(string Method, string Url, string Body)
        {

            if (recorder == null) return int.MinValue;

            return recorder.RecordRequest(Method, Url, Body);
        }

        private void RecordResponse(int ConversationId, string body, int StatusCode, bool Success)
        {
            if (recorder == null) return;
            if (ConversationId == int.MinValue) return;

            recorder.RecordResponse(ConversationId, body, StatusCode, Success);
        }

        private static string ReadStreamToEnd(Stream stream)
        {
            if (stream == null) return string.Empty;

            string body;
            using (var reader = new StreamReader(stream))
            {
                body = reader.ReadToEnd();
            }

            return body;
        }

        public string BuildPostData(Dictionary<string, string> data)
        {
            var builder = new StringBuilder();

            foreach (var pair in data)
            {
                builder.Append(string.Format("{0}={1}&", pair.Key, pair.Value.StraightenQuotes().MapUnicodeDiacritics().UrlEncode()));
            }
            return builder.ToString();
        }

        public byte[] BuildPostData(Dictionary<string, string> data, byte[] image, string boundary, string filename)
        {
            var byteList = new List<byte>();

            foreach (var pair in data)
            {
                byteList.AddRange(Encoding.ASCII.GetBytes(string.Format("--{0}\r\n", boundary)));
                byteList.AddRange(Encoding.ASCII.GetBytes(string.Format("Content-Disposition: form-data; name=\"{0}\"\r\n\r\n", pair.Key)));
                byteList.AddRange(Encoding.ASCII.GetBytes(pair.Value.StraightenQuotes().MapUnicodeDiacritics()));  // .UrlEncode()
                byteList.AddRange(Encoding.ASCII.GetBytes("\r\n"));
            }

            byteList.AddRange(Encoding.ASCII.GetBytes(string.Format("--{0}\r\n", boundary)));
            byteList.AddRange(Encoding.ASCII.GetBytes(string.Format("Content-Disposition: form-data; name=\"photo\"; filename=\"{0}\"\r\n", filename)));
            byteList.AddRange(Encoding.ASCII.GetBytes("Content-Type: application/octet-stream\r\n\r\n"));
            byteList.AddRange(image);
            byteList.AddRange(Encoding.ASCII.GetBytes("\r\n"));

            byteList.AddRange(Encoding.ASCII.GetBytes(string.Format("--{0}--", boundary)));

            return byteList.ToArray();
        }

        public byte[] BuildUtf8PostData(Dictionary<string, string> data)
        {
            var byteList = new List<byte>();
            foreach (var pair in data)
            {
                byteList.AddRange(Encoding.ASCII.GetBytes(pair.Key + "="));
                if (!string.IsNullOrEmpty(pair.Value))
                {
                    var toEncode = pair.Value.StraightenQuotes();
                    toEncode = toEncode.MapUnicodeDiacritics();

                    byte[] value = Encoding.UTF8.GetBytes(toEncode);
                    value = HttpUtility.UrlEncodeToBytes(value);
                    byteList.AddRange(value);
                }
                byteList.AddRange(Encoding.ASCII.GetBytes("&"));
            }

            return byteList.ToArray();
        }

        public PoxResponse Get(string url)
        {
            PoxResponse poxResponse;

            var conversationId = RecordRequest("GET", url, "");

            try
            {
                var request = (HttpWebRequest)WebRequest.Create(url);

                using (var response = (HttpWebResponse)request.GetResponse())
                {
                    var body = ReadStreamToEnd(response.GetResponseStream());
                    RecordResponse(conversationId, body, (int)response.StatusCode, true);
                    poxResponse = new PoxResponse { StatusCode = response.StatusCode, ContentType = response.ContentType };
                    if (response.ContentType.ToLower().Contains("xml"))
                    {
                        poxResponse.ResponseDocument = XDocument.Parse(body);
                    }
                }
            }
            catch (WebException webException)
            {
                using (var response = (HttpWebResponse)webException.Response)
                {
                    var body = ReadStreamToEnd(response.GetResponseStream());
                    RecordResponse(conversationId, body, (int)response.StatusCode, false);
                }
                throw;
            }
            return poxResponse;
        }

        public PoxResponse PostUtf8(string url, byte[] data)
        {
            const string contentType = "application/x-www-form-urlencoded";

            return Post(url, data, contentType);
        }

        public PoxResponse Post(string url, string data)
        {
            var postData = new UTF8Encoding().GetBytes(data);
            const string contentType = "application/x-www-form-urlencoded";

            return Post(url, postData, contentType);
        }

        public PoxResponse PostMultipartForm(string url, byte[] data, string boundary)
        {
            string contentType = string.Format("multipart/form-data; boundary={0}", boundary);

            return Post(url, data, contentType);
        }

        private PoxResponse Post(string url, byte[] data, string contentType)
        {
            PoxResponse poxResponse;

            var request = (HttpWebRequest)WebRequest.Create(url);

            request.Method = "POST";
            request.ContentType = contentType;
            request.ContentLength = data.Length;

            var conversationId = RecordRequest("POST", url, Encoding.ASCII.GetString(data));
            try
            {
                using (var requestStream = request.GetRequestStream())
                {
                    requestStream.Write(data, 0, data.Length);

                    using (var response = (HttpWebResponse)request.GetResponse())
                    {
                        var body = ReadStreamToEnd(response.GetResponseStream());
                        RecordResponse(conversationId, body, (int)response.StatusCode, true);
                        poxResponse = new PoxResponse { StatusCode = response.StatusCode, ContentType = response.ContentType };
                        if (response.GetResponseStream() != null)
                        {
                            poxResponse.Location = response.Headers["Location"] ?? "";

                            if (response.ContentType.ToLower().Contains("xml"))
                            {
                                poxResponse.ResponseDocument = XDocument.Parse(body);
                            }
                        }
                    }
                }
            }
            catch (WebException ex)
            {
                using (var response = (HttpWebResponse)ex.Response)
                {
                    var body = ReadStreamToEnd(response.GetResponseStream());
                    RecordResponse(conversationId, body, (int)response.StatusCode, false);
                    var doc = XDocument.Parse(body);
                    throw new Exception(doc.ToString(), ex);
                }
            }
            return poxResponse;
        }
    }
}