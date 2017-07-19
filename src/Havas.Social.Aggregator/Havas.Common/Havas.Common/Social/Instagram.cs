using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Havas.Common.Social.Models;
using System.Net;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Havas.Common.Cache;
using System.Configuration;


namespace Havas.Common.Social
{
    public class Instagram
    {
        JToken instagramArray = null;


        /**
         * UserID = who instragram tags to return as long as profile is not proviate 
         * expirationTime = the limit of time to hold the results in cache 
         * 
         */
        public List<InstagramFeed> ReturnInstagramResultsByUser(string userid, int cachekey, int? expirationTime = 100)
        {

            string getUserIdbyName = ConfigurationManager.AppSettings["InstragramIDByName"];
            string getInstagramFeedsByUserid = ConfigurationManager.AppSettings["InstagramFeedsByUserid"];

            List<InstagramFeed> instagramFeed = new List<InstagramFeed>();

            using (WebClient client = new WebClient())
            {

                string json = client.DownloadString(String.Format(getUserIdbyName, userid));
                instagramArray = JsonConvert.DeserializeObject<JToken>(json);
                string id = instagramArray["data"][0]["id"].ToString();


                json = client.DownloadString(String.Format(getInstagramFeedsByUserid, id));
                instagramArray = JsonConvert.DeserializeObject<JToken>(json);


                ICacheStorage cacheAdapter = CacheFactory.ReturnCache(cachekey);

                if (cacheAdapter.Retrieve<List<InstagramFeed>>("instagramFeedbyUser") == null)
                {

                    for (int i = 0; i < instagramArray["data"].Count(); i++)
                    {
                        instagramFeed.Add(new InstagramFeed
                        {
                            Id = instagramArray["data"][i]["id"].ToString(),
                            low_res_image = instagramArray["data"][0]["images"]["low_resolution"]["url"].ToString(),
                            med_res_image = instagramArray["data"][0]["images"]["standard_resolution"]["url"].ToString(),
                            thumbnails = instagramArray["data"][0]["images"]["thumbnail"]["url"].ToString(),
                            text = instagramArray["data"][0]["text"] == null ? "" : instagramArray["data"][0]["caption"]["text"].ToString()
                        });

                    }

                    cacheAdapter.Store("instagramFeedbyUser", instagramFeed, expirationTime.Value);
                }
                else
                {
                    instagramFeed = cacheAdapter.Retrieve<List<InstagramFeed>>("instagramFeedbyUser");
                }


            }

            return instagramFeed;
        }

        /**
          * UserID = who instragram tags to return as long as profile is not proviate 
          * expirationTime = the limit of time to hold the results in cache 
          * 
          */
        public List<InstagramFeed> ReturnInstagramResultsByTags(string tag, int cachekey, int? expirationTime = 100)
        {
            List<InstagramFeed> instagramFeed = new List<InstagramFeed>();

            string instagramTagAPI = "https://api.instagram.com/v1/tags/{0}/media/recent?access_token=42578844.ab103e5.1fded3da5a5b480980f41392d9b52a1b";

            using (WebClient client = new WebClient())
            {

                string json = client.DownloadString(String.Format(instagramTagAPI, tag));
                instagramArray = JsonConvert.DeserializeObject<JToken>(json);

                ICacheStorage cacheAdapter = CacheFactory.ReturnCache(cachekey);

                if (cacheAdapter.Retrieve<List<InstagramFeed>>("instagramFeedbyTags") == null)
                {

                    for (int i = 0; i < instagramArray["data"].Count(); i++)
                    {
                        instagramFeed.Add(new InstagramFeed
                        {
                            Id = instagramArray["data"][i]["id"].ToString(),
                            low_res_image = instagramArray["data"][0]["images"]["low_resolution"]["url"].ToString(),
                            med_res_image = instagramArray["data"][0]["images"]["standard_resolution"]["url"].ToString(),
                            thumbnails = instagramArray["data"][0]["images"]["thumbnail"]["url"].ToString(),
                            text = instagramArray["data"][0]["text"] == null ? "" : instagramArray["data"][0]["caption"]["text"].ToString()

                        });

                    }

                    cacheAdapter.Store("instagramFeedbyTags", instagramFeed, expirationTime.Value);
                }
                else
                {
                    instagramFeed = cacheAdapter.Retrieve<List<InstagramFeed>>("instagramFeedbyTags");
                }

            }
            return instagramFeed;
        }
            
    }
}
