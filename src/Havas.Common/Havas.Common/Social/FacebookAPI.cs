using System;
using System.Web;
using System.Net;
using System.IO;
using System.Configuration;
using System.Collections.Specialized;
using Havas.Common.Social.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
namespace Havas.Common.Social
{

    class FacebookAPI
    {

        string facebook_urlAuthorize_base = "https://graph.facebook.com/oauth/authorize";
        //string facebook_urlGetToken_base = "https://graph.facebook.com/oauth/access_token";
        string facebook_AppID = ConfigurationManager.AppSettings["facebook:AppID"]; //get appID Key
        string facebook_AppSecret = ConfigurationManager.AppSettings["facebook:AppSecret"]; //get app secret key


        public List<FaceBookFriends> Facebook_ListFriends(string username, string pAccessToken)
        {
            List<FaceBookFriends> listFriends = new List<FaceBookFriends>();

            string dataType = "friends";
            string urlGetFriends = "https://graph.facebook.com/" + username + "/" + dataType + "?access_token=" + pAccessToken;
            string jsonFriends = RequestResponse(urlGetFriends);
            if (jsonFriends == "")
            {
                new Exception("Problems finding friends");
            }

            List<FaceBookFriends> friends = JsonConvert.DeserializeObject<List<FaceBookFriends>>(jsonFriends); 

            foreach (var friend in friends) 
            {
                listFriends.Add(new FaceBookFriends {
                    
                   id = friend.id,
                   name = friend.name
                });
            }

            return listFriends;
        }



        public void Facebook_WriteWall(string username, string pAccessToken, string pMessage, string picture, string link)
        {
            //In this function we will write to the users Facebook wall by posting the message through the Facebook Graph API

            string datatype = "feed";
            string urlWriteWall = "https://graph.facebook.com/" + username + "/" + datatype + "?access_token=" + pAccessToken;

            string entityMessage = "message=" + pMessage;
            entityMessage += "&picture=" + picture;
            entityMessage += "&link=" + link;
            entityMessage += "&name=" + username;
            entityMessage += "&caption=Writing to Facebook wall";

            HttpPost(urlWriteWall, entityMessage); //we write HttpPost a little later
        }

        public void Facebook_AuthorizeApplication()
        {
            //In this function we ask the user to authorize our Facebook application using an authorization request url

            //the authorization request url need to be appended
            //1) Our AppID
            //2) The permission scope (here publish_stream)
            //3) A Url that Facebook can redirect the users browser to then Facebook is finish asking the user whether permission can be granted

            string scope = "publish_stream"; //see: http://developers.facebook.com/docs/authentication/permissions/ for extended permissions
            string urlAuthorize = facebook_urlAuthorize_base;
            urlAuthorize += "?client_id=" + facebook_AppID;
            urlAuthorize += "&redirect_uri=" + Facebook_GetRedirectUri();
            urlAuthorize += "&scope=" + scope;

            HttpContext.Current.Response.Redirect(urlAuthorize, false);
        }


        #region Private Methods
        private string Facebook_GetRedirectUri()
        {

            string urlCurrentPage = HttpContext.Current.Request.Url.AbsoluteUri.IndexOf('?') == -1 ? HttpContext.Current.Request.Url.AbsoluteUri : HttpContext.Current.Request.Url.AbsoluteUri.Substring(0, HttpContext.Current.Request.Url.AbsoluteUri.IndexOf('?'));
            NameValueCollection nvc = new NameValueCollection();
            foreach (string key in HttpContext.Current.Request.QueryString) { if (key != "code") { nvc.Add(key, HttpContext.Current.Request.QueryString[key]); } }
            string qs = "";
            foreach (string key in nvc)
            {
                qs += qs == "" ? "?" : "&";
                qs += key + "=" + nvc[key];
            }
            string redirect_uri = urlCurrentPage + qs; //urlCallback have to be exactly the same each time it is used (that's why the code key is removed)

            return redirect_uri;
        }

        private string HttpPost(string pUrl, string pPostData)
        {
            HttpWebRequest webRequest = (HttpWebRequest)HttpWebRequest.Create(pUrl);
            webRequest.ContentType = "application/x-www-form-urlencoded";
            webRequest.Method = "POST";
            byte[] bytes = System.Text.Encoding.UTF8.GetBytes(pPostData);
            Stream requestWriter = webRequest.GetRequestStream(); //GetRequestStream
            requestWriter.Write(bytes, 0, bytes.Length);
            requestWriter.Close();

            Stream responseStream = null;
            StreamReader responseReader = null;
            string responseData = "";
            try
            {
                WebResponse webResponse = webRequest.GetResponse();
                responseStream = webResponse.GetResponseStream();
                responseReader = new StreamReader(responseStream);
                responseData = responseReader.ReadToEnd();
            }
            catch (Exception exc)
            {
                throw new Exception("could not post : " + exc.Message);
            }
            finally
            {
                if (responseStream != null)
                {
                    responseStream.Close();
                    responseReader.Close();
                }
            }

            return responseData;
        }

        private string RequestResponse(string pUrl)
        {
            HttpWebRequest webRequest = System.Net.WebRequest.Create(pUrl) as HttpWebRequest;
            webRequest.Method = "GET";
            webRequest.ServicePoint.Expect100Continue = false;
            webRequest.Timeout = 20000;

            Stream responseStream = null;
            StreamReader responseReader = null;
            string responseData = "";
            try
            {
                WebResponse webResponse = webRequest.GetResponse();
                responseStream = webResponse.GetResponseStream();
                responseReader = new StreamReader(responseStream);
                responseData = responseReader.ReadToEnd();
            }
            catch (Exception exc)
            {
                throw new Exception("Something went wrong: " + exc.Message);
            }
            finally
            {
                if (responseStream != null)
                {
                    responseStream.Close();
                    responseReader.Close();
                }
            }

            return responseData;
        }

        #endregion

    }
}
