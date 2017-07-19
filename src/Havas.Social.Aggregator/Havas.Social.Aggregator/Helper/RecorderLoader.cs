using System;
using Havas.Social.Aggregator.Constant;
using Havas.Social.Aggregator.Service;
using System.Configuration;
using Havas.Common.Extensions;

namespace Havas.Social.Aggregator.Helper
{
    public class RecorderLoader
    {
        public static IFeedRecorder CreateRecorderFromAppConfig()
        {
            if (ConfigurationManager.AppSettings["SocialFeedRecorder"] == null) throw new Exception("Feed recorder type not specified in app/web.config");

            string recordertype = ConfigurationManager.AppSettings["SocialFeedRecorder"].ToString();

            if (recordertype == RecorderTypes.Database.GetStringValue())
                return new DatabaseFeedRecorder();

            else if (recordertype == RecorderTypes.None.GetStringValue())
                return new NullFeedRecorder();
            else
            return null;
            
        }

        public static RecorderTypes GetRecorderType()
        {
            if (ConfigurationManager.AppSettings["SocialFeedRecorder"] == null) throw new Exception("Feed recorder type not specified in app/web.config");

            string recordertype = ConfigurationManager.AppSettings["SocialFeedRecorder"].ToString();

            if (recordertype == RecorderTypes.Database.GetStringValue())
                return RecorderTypes.Database;

            else 
                return RecorderTypes.None;
            
        
        }

        public static int GetResultCount()
        {
            if (ConfigurationManager.AppSettings["NoneRecorderResultCount"] == null) throw new Exception("None recorder result count not specified in app/web.config");

            return Convert.ToInt32(ConfigurationManager.AppSettings["NoneRecorderResultCount"].ToString());
        }
    }
}
