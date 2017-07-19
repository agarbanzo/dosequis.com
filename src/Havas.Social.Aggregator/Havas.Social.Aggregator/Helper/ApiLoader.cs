using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Havas.Social.Aggregator.Constant;
using System.Configuration;

namespace Havas.Social.Aggregator.Helper
{
    public class ApiLoader
    {
        public static string GetInstagramUserEndPoint(string tag)
        {
            return string.Format("https://api.instagram.com/v1/users/{0}/media/recent?access_token={1}", tag, ConfigurationManager.AppSettings["InstagramAccessToken"]);
        }

        public static string GetInstagramHashTagEndPoint(string username)
        {
            return string.Format("https://api.instagram.com/v1/tags/{0}/media/recent?access_token={1}&count=30", username, ConfigurationManager.AppSettings["InstagramAccessToken"]);
        }

    }
}
