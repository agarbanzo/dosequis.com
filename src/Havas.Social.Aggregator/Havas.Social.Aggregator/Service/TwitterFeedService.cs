using System;
using System.Collections.Generic;
using System.Linq;
using Havas.Social.Aggregator.Constant;
using Havas.Common.Extensions;
using Havas.Social.Aggregator.Model;
using LinqToTwitter;
using System.Configuration;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Service
{
    public class TwitterFeedService : IFeedService
    {
        private IFeedRecorder _recorder;
        private ApiConfig _config;
        private SingleUserAuthorizer auth;

        public ApiConfig Config { get { return _config; } }

        public IFeedRecorder Recorder
        {
            get { return _recorder; }
        }

        public TwitterFeedService(ApiConfig config)
        {
            _config = config;
            AuthenticateToApi();
        }

        public void SetRecorder(IFeedRecorder recorder)
        {
            _recorder = recorder;
        }

        public void AuthenticateToApi()
        {
            auth = new SingleUserAuthorizer
            {
                CredentialStore = new SingleUserInMemoryCredentialStore
                {
                    ConsumerKey = ConfigurationManager.AppSettings["twitterConsumerKey"],
                    ConsumerSecret = ConfigurationManager.AppSettings["twitterConsumerSecret"],
                    AccessToken = ConfigurationManager.AppSettings["twitteraccessToken"],
                    AccessTokenSecret = ConfigurationManager.AppSettings["twitteraccessTokenSecret"]
                }
            };

        }

        public List<SocialFeed> RetrieveFeed()
        {
            if (_recorder == null)
                throw new Exception("a recorder hasn't been set");

            List<SocialFeed> feeds = new List<SocialFeed>();

            feeds = GetFeeds();

            _recorder.RecordFeeds(feeds);

            return feeds;
        }




        private List<SocialFeed> GetFeeds()
        {
            string hashtags = string.Empty;


            List<SocialFeed> feeds = new List<SocialFeed>();


            using (var db = new SocialFeedEntities())
            {
                ulong sinceId = ulong.MinValue;
                ulong maxId = ulong.MaxValue;

                //before paging, obtain the latest tweet to get the maxId
                List<Status> latestTweet;

                using (var twitterCtx = new TwitterContext(auth))
                {


                    if (_config.Source == FeedSource.BrandPage)
                    {
                        latestTweet = (from tweet in twitterCtx.Status
                                       where tweet.Type == StatusType.User
                                       where tweet.Count == 1
                                       where tweet.ScreenName == _config.BrandPageId
                                       select tweet).ToList();
                        if (latestTweet.Count > 0)
                            maxId = latestTweet.Min(status => status.StatusID);
                    }
                    else
                    {
                        foreach (var temp in _config.HashTags)
                        {
                            hashtags += temp;

                        }
                        //no latest tweet needed since Twitter appeared to have changed their API with MaxId
                        /* latestTweet =
                             (from search in twitterCtx.Search
                              where search.Type == SearchType.Search &&
                                    search.Query == hashtags &&
                                    search.Count == 100 &&
                                    search.MaxID == maxId &&
                                    search.ResultType == ResultType.Recent
                              select search)
                             .SingleOrDefault().Statuses;         */

                    }



                }




                var tag = db.TwitterTags.FirstOrDefault(x => x.FeedId == _config.FeedId);
                //retrieve last pull tweet id
                bool firstloop = true;
                if (tag != null)
                {
                    sinceId = Convert.ToUInt64(tag.SinceId);
                }
                else
                {   //insert an entry into db
                    var newtag = new TwitterTag { FeedId = _config.FeedId, SinceId = Convert.ToString(ulong.MinValue) };
                    db.TwitterTags.Add(newtag);
                    db.SaveChanges();

                }

                List<Status> results = null;


                using (var twitterCtx = new TwitterContext(auth))
                {
                    do
                    {
                        if (_config.Source == FeedSource.HashTags)
                        {

                            results =
                            (from search in twitterCtx.Search
                             where search.Type == SearchType.Search &&
                                   search.Query == hashtags &&
                                   search.Count == 100 &&
                                   search.MaxID == maxId &&
                                   search.ResultType == ResultType.Recent
                             select search)
                            .SingleOrDefault().Statuses;
                        }
                        else
                            results =
                            (from tweet in twitterCtx.Status
                             where tweet.Type == StatusType.User
                                   && tweet.Count == 200
                                   && tweet.ScreenName == _config.BrandPageId
                                   && tweet.MaxID == maxId

                             select tweet).ToList();

                        if ((results != null) && (results.Count > 0))
                        {


                            if (firstloop)
                            {

                                var temp = db.TwitterTags.FirstOrDefault(x => x.FeedId == _config.FeedId);
                                temp.SinceId = results[0].StatusID.ToString();
                                db.SaveChanges();
                                firstloop = false;
                            }

                            var tempmaxId = Convert.ToUInt64(results[results.Count - 1].StatusID);
                            //reached the end 
                            if (maxId == tempmaxId) break; else maxId = tempmaxId;




                        }
                        else
                        {


                            break;
                        }
                        //Console.WriteLine(maxId);
                        feeds.AddRange(LoadFeedFromResults(results));

                        //return set number of item for none recorder type
                        if (_recorder.Type == RecorderTypes.None)
                        {
                            var resultcount = Helper.RecorderLoader.GetResultCount();
                            if (feeds.Count >= resultcount)
                                return feeds.Take(resultcount).ToList();
                        }
                    }
                    while ((results != null) && (results.Count > 0) && (maxId > sinceId));
                }
            }

            return feeds;
        }

        private List<SocialFeed> LoadFeedFromResults(List<Status> results)
        {

            List<SocialFeed> feeds = new List<SocialFeed>();
            foreach (Status status in results)
            {
                var t = status.Entities.MediaEntities;
                var feedtype = t.Count == 1 ? FeedTypes.Image.GetStringValue() : FeedTypes.Text.GetStringValue();

                var feed = new SocialFeed
                {
                    Approved = false,
                    Featured = false,
                    FeedId = _config.FeedId,
                    PostId = status.StatusID.ToString(),
                    SocialNetwork = SocialNetworks.Twitter.GetStringValue(),
                    FeedType = feedtype,
                    ImageUrl = feedtype == FeedTypes.Image.GetStringValue() ? ((MediaEntity)t[0]).MediaUrl : string.Empty,
                    Link = string.Format("https://www.twitter.com/statuses/{0}", status.StatusID.ToString()),
                    LinkToProfile = string.Format("https://www.twitter.com/{0}", status.User.ScreenNameResponse.ToString()),
                    PostedOn = status.CreatedAt,
                    UserName = status.User.ScreenNameResponse.ToString(),
                    UserProfileImageUrl = status.User.ProfileImageUrl.ToString(),
                    Text = status.Text,
                    VideoUrl = string.Empty
                };

                feeds.Add(feed);
            }

            return feeds;


        }



    }
}
