using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using Havas.Common.Social.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Havas.Common.Cache;
using LinqToTwitter;
using System.Configuration;

namespace Havas.Common.Social
{
    public class Twitter
    {
        public List<TwitterFeed> ReturnTwitterResultsByUser(string userid, int cachekey,  int count = 100, int expirationTime = 100)
        {

            var auth = new SingleUserAuthorizer
            {
                Credentials = new InMemoryCredentials
                {
                    ConsumerKey = ConfigurationManager.AppSettings["twitterConsumerKey"],
                    ConsumerSecret = ConfigurationManager.AppSettings["twitterConsumerSecret"],
                    OAuthToken = ConfigurationManager.AppSettings["twitterOAuthToken"],
                    AccessToken = ConfigurationManager.AppSettings["twitterAccessToken"]
                }
            };


            List<TwitterFeed> twitterFeed = new List<TwitterFeed>();


            using (var twitterCtx = new TwitterContext(auth))
            {

                var userresults = (from tweet in twitterCtx.Status
                                   where tweet.Type == StatusType.User
                                  && tweet.ScreenName == userid
                        select tweet);


                ICacheStorage cacheAdapter = CacheFactory.ReturnCache(cachekey);


                if (cacheAdapter.Retrieve<List<TwitterFeed>>("twitterFeedbyUsers") == null)
                {

                    foreach (var twitterArray in userresults.ToArray())
                    {
                        twitterFeed.Add(new TwitterFeed
                        {
                            Id = twitterArray.UserID,
                            Text = twitterArray.Text,
                            Name = twitterArray.ScreenName,
                            Image = twitterArray.User.ProfileImageUrl,
                            Created_at = twitterArray.CreatedAt.ToString()

                        });

                    }

                    cacheAdapter.Store("twitterFeedbyUsers", twitterFeed, expirationTime);

                }
                else
                {
                    twitterFeed = cacheAdapter.Retrieve<List<TwitterFeed>>("twitterFeedbyUsers");
                }


            }

            return twitterFeed;
        }

    }
}
