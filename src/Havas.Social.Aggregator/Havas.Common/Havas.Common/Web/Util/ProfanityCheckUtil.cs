using System;
using System.Configuration;
using System.IO;
using System.Net;
using System.Xml;

namespace Havas.Common.Web.Util
{
    public class ProfanityCheckUtil
    {
        /// <summary>
        /// Performs the profanity check and return true or false to indicate if any bad words found. NOTE: function might throw exception due to various reasons. Function will read "WebPurifyUrl" and "WebPurifyApiKey" from the AppSettings
        /// in the application config file.
        /// </summary>
        /// <param name="input">The input.</param>
        /// <returns>boolean variable</returns>
        public static bool CheckProfanity(string input)
        {
            string webPurifyBaseUrl = ConfigurationManager.AppSettings["WebPurifyUrl"];
            string webPurifyApiKey = ConfigurationManager.AppSettings["WebPurifyApiKey"];

            return CheckProfanity(input, webPurifyBaseUrl, webPurifyApiKey);
        }

        /// <summary>
        /// Performs the profanity check and return true or false to indicate if any bad words found. Note function might throw exception due to various reasons.
        /// </summary>
        /// <param name="input">Input text</param>
        /// <param name="webPurifyBaseUrl">web purify base url</param>
        /// <param name="webPurifyApiKey">web purify api key</param>
        /// <returns>boolean variable</returns>
        public static bool CheckProfanity(string input, string webPurifyBaseUrl, string webPurifyApiKey)
        {
            string method = "webpurify.live.return";
            string sUrl = webPurifyBaseUrl + "?method=" + method + "&api_key=" + webPurifyApiKey + "&text=" + input;

            bool isFound = true;
            string badWords = "";

            HttpWebRequest myRequest = (HttpWebRequest)WebRequest.Create(sUrl);
            WebResponse myResponse = myRequest.GetResponse();
            StreamReader sr = new StreamReader(myResponse.GetResponseStream());
            string sResponse = sr.ReadToEnd();
            XmlDocument m_xmld = new XmlDocument();

            m_xmld.LoadXml(sResponse);
            XmlNodeList m_nodelist = null;
            m_nodelist = m_xmld.SelectNodes("/rsp");

            for (Int32 i = 0; i <= m_nodelist[0].ChildNodes.Count - 1; i++)
            {
                //********************* Read the found node***********************
                if (m_nodelist[0].ChildNodes[i].Name == "found")
                {
                    if (m_nodelist[0].ChildNodes[i].InnerText == "0")
                    {
                        isFound = false;
                    }
                }
                //********************* Read the expletive node***********************
                if (m_nodelist[0].ChildNodes[i].Name == "expletive")
                {
                    badWords += m_nodelist[0].ChildNodes[i].InnerText + ",";

                }
            }
            return isFound;
        }
    }
}
