using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using Facebook;
using Havas.Social.Aggregator.Model;
using Havas.Social.Aggregator.Constant;
using Havas.Common.Extensions;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Service
{
    public class FacebookFeedService : IFeedService
    {
        private IFeedRecorder _recorder;
        private ApiConfig _config;
        private string _accessToken;
        private FacebookClient client;

        public ApiConfig Config
        {
            get { return _config; }        
        }

        public IFeedRecorder Recorder
        {
            get { return _recorder; }
        }


        public FacebookFeedService(ApiConfig config)
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
            _accessToken = ConfigurationManager.AppSettings["FacebookPageAccessToken"];
            client = new FacebookClient(_accessToken);
        }

        public List<SocialFeed> RetrieveFeed()
        {
            List<SocialFeed> feeds = new List<SocialFeed>();
            string facebookAPI = null;           

            using (var db = new SocialFeedEntities())
            {
               var fbTag = db.FacebookTags.FirstOrDefault(x => x.FeedId == _config.FeedId);

                if (fbTag == null)
                {
                    fbTag = new FacebookTag { FeedId = _config.FeedId, SinceDateTime = new DateTime(1970, 1, 1) };
                    db.FacebookTags.Add(fbTag);
                }

                var unixSinceDateTime = Facebook.DateTimeConvertor.ToUnixTime(fbTag.SinceDateTime);

                if (_config.Source == Constant.FeedSource.HashTags)
                {
                    foreach (string hashTag in _config.HashTags)
                    {
                        facebookAPI = "/search?q=" + hashTag + "&fields=id,from,link,created_time,message,picture,source,type&limit=100&since=";
                        feeds.AddRange(RetrieveFeedBy(facebookAPI, unixSinceDateTime));
                    }
                }
                else if (_config.Source == Constant.FeedSource.GroupPage)
                {
                    facebookAPI = "?fields=feed.since(" + unixSinceDateTime + "){from,message,created_time,id,link,picture,source}";
                    feeds = RetrieveFeedByGroup(facebookAPI);
                }
                else
                {
                    var unixUntilDateTime = DateTimeConvertor.ToUnixTime(DateTime.Now);
                    facebookAPI =
                        "/posts?fields=id,from,link,created_time,message,picture,source,type,is_published,object_id&limit=100&since=";
                    feeds = RetrieveFeedBy(facebookAPI, unixSinceDateTime, unixUntilDateTime);
                }

                if (feeds.Count > 0)
                    fbTag.SinceDateTime = feeds.Max(SocialFeed => SocialFeed.PostedOn.Value);

                db.SaveChanges();
            }
            _recorder.RecordFeeds(feeds);    
            return feeds;
        }

        private string RetrieveFeedSourceImageUrl(string postId)
        {
            string sourceImageUrl = null;

            // Get the post 
            dynamic fbFeed = client.Get(postId);

            // Get the object_id (which is the image id)
            dynamic result = client.Get(fbFeed.object_id);

            sourceImageUrl = result.source;

            return sourceImageUrl;
        }

        public void UpdateFeedsImageUrl(ICollection<SocialFeed> feeds)
        {
            using (var db = new SocialFeedEntities())
            {
                int countUpdated = 0;
                foreach (var socialFeed in feeds)
                {
                    try
                    {
                        var sourceImageUrl = RetrieveFeedSourceImageUrl(socialFeed.PostId);

                        if (!sourceImageUrl.Equals(socialFeed.ImageUrl))
                        {
                            Console.WriteLine("Updating Post: " + socialFeed.PostId + "...");

                            Console.WriteLine("Old Image Url: " + socialFeed.ImageUrl);

                            db.SocialFeeds.Attach(socialFeed);

                            socialFeed.ImageUrl = sourceImageUrl;

                            db.SaveChanges();

                            Console.WriteLine("Mew Image Url: " + socialFeed.ImageUrl);

                            countUpdated++;

                            Console.WriteLine("Total Updated: " + countUpdated);
                        }

                    }
                    catch (Exception)
                    {
                        Console.WriteLine("Error Updating Post: " + socialFeed.PostId + "...");
                    }
                }

            }
        }

        private List<SocialFeed> RetrieveFeedByGroup(string facebookAPI)
        {
            List<SocialFeed> feeds = new List<SocialFeed>();

            dynamic fbFeed = client.Get(_config.BrandPageId + facebookAPI);

            if (fbFeed.feed != null)
            {
                foreach (dynamic data in fbFeed.feed.data)
                {
                    SocialFeed socialFeed = new SocialFeed();
                    socialFeed.SocialNetwork = SocialNetworks.Facebook.GetStringValue();
                    socialFeed.FeedType = CheckFeedType(data);
                    socialFeed.PostId = data.id;
                    socialFeed.FeedId = _config.FeedId;
                    socialFeed.UserName = data.from.name;
                    socialFeed.UserProfileImageUrl = "http://graph.facebook.com/" + data.from.id + "/picture";
                    socialFeed.Link = data.link;
                    socialFeed.LinkToProfile = "www.facebook.com/" + data.from.id;
                    socialFeed.PostedOn = Convert.ToDateTime(data.created_time);
                    socialFeed.Text = data.message != null ? Truncate(data.message, 1000) : string.Empty;
                    socialFeed.ImageUrl = data.picture != null
                        ? ((String) data.picture).Replace("_s.", "_n.")
                        : string.Empty;
                    socialFeed.VideoUrl = data.source;
                    socialFeed.Approved = false;
                    socialFeed.Featured = false;

                    if (socialFeed.FeedType.Equals(FeedTypes.Image.GetStringValue()))
                    {
                        var facebookPhotoAPI = data.object_id + "?fields=id,images,picture,source";
                        dynamic result = client.Get(facebookPhotoAPI);
                        socialFeed.ImageUrl = result.source;
                    }

                    if (data.message != null || data.picture != null || data.source != null)
                    {
                        feeds.Add(socialFeed);
                    }

                }
            }

            return feeds;
        }

        private List<SocialFeed> RetrieveFeedBy(string facebookAPI, double unixSinceDateTime, double? unixUntilDateTime = null)
        {
            List<SocialFeed> feeds = new List<SocialFeed>();
            var apiUrl = _config.BrandPageId + facebookAPI + unixSinceDateTime;
            if (unixUntilDateTime.HasValue)
            {
                apiUrl += "&until=" + unixUntilDateTime;
            }
            dynamic fbFeed = client.Get(apiUrl);

                foreach (dynamic data in fbFeed.data)
                {                   
                    SocialFeed socialFeed = new SocialFeed();
                    socialFeed.SocialNetwork = SocialNetworks.Facebook.GetStringValue();
                    socialFeed.FeedType = CheckFeedType(data);
                    socialFeed.PostId = data.id;
                    socialFeed.FeedId = _config.FeedId;
                    socialFeed.UserName = data.from.name;
                    socialFeed.UserProfileImageUrl = "http://graph.facebook.com/" + data.from.id + "/picture";
                    socialFeed.Link = data.link;
                    socialFeed.LinkToProfile = "www.facebook.com/" + data.from.id;
                    socialFeed.PostedOn = Convert.ToDateTime(data.created_time);
                    socialFeed.Text =  data.message != null ? Truncate(data.message, 1000) : string.Empty;
                    socialFeed.ImageUrl = data.picture != null ? ((String)data.picture).Replace("_s.","_n.") : string.Empty;
                    socialFeed.VideoUrl = data.source;
                    socialFeed.Approved = false;
                    socialFeed.Featured = false;

                    if (socialFeed.FeedType.Equals(FeedTypes.Image.GetStringValue()))
                    {
                        var facebookPhotoAPI = data.object_id + "?fields=id,images,picture,source";
                        dynamic result = client.Get(facebookPhotoAPI);
                        socialFeed.ImageUrl = result.source;
                    }

                    if (data.message != null || data.picture != null || data.source != null)
                    {
                        feeds.Add(socialFeed);
                    }

                }

            return feeds;
        }

        private string CheckFeedType(dynamic data)
        {
            string feedType;
            switch ((string)data.type)
            {
                case "photo":
                    feedType = FeedTypes.Image.GetStringValue();
                    break;
                case "video":
                    feedType = FeedTypes.Video.GetStringValue();
                    break;
                default:
                    feedType = FeedTypes.Text.GetStringValue();
                    break;
            }
            return feedType;
        }

        private string Truncate(string checkString,int length)
        {
            if (checkString.Length > length)
                return checkString.Substring(0, length);

            return checkString;
        }
        
    }
}
