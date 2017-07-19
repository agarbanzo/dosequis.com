using System;
using System.Collections.Generic;
using System.Linq;
using Havas.Social.Aggregator.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Net;
using Havas.Social.Aggregator.Constant;
using Havas.Common.Util;
using Havas.Common.Extensions;
using Havas.Social.Aggregator.Entities;
using System.Data.Entity.Infrastructure;

namespace Havas.Social.Aggregator.Service
{
    public class InstagramFeedService : IFeedService
    {
        private IFeedRecorder _recorder;
        private ApiConfig _config;
        private string endpoint;

        public ApiConfig Config
        {
            get { return _config; }
        }

        public IFeedRecorder Recorder
        {
            get { return _recorder; }
        }

        public InstagramFeedService(ApiConfig config)
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
            if (_config.Source == Constant.FeedSource.BrandPage)
                endpoint = Helper.ApiLoader.GetInstagramUserEndPoint(_config.BrandPageId);
            else if (_config.Source == Constant.FeedSource.HashTags)//instagram only support one hashtag search
                endpoint = Helper.ApiLoader.GetInstagramHashTagEndPoint(_config.HashTags.FirstOrDefault().ToString());

        }

        public List<SocialFeed> RetrieveFeed()
        {
            if (_recorder == null)
                throw new Exception("a recorder hasn't been set");

            List<SocialFeed> feeds = new List<SocialFeed>();

            //if (_config.Source == Constant.FeedSource.HashTags)
            //    feeds = GetByHashTag();
            //else
                feeds = GetByUser();

            _recorder.RecordFeeds(feeds);
            return feeds;

        }
        private List<SocialFeed> GetByUser()
        {


            List<SocialFeed> feeds = new List<SocialFeed>();

            bool isUpdated = false;

            //break as soon as there is a record found in db
            while (!isUpdated)
            {
                //or break if there is no more records to be found
                if (endpoint == string.Empty) break;

                //return set number of item
                if (_recorder.Type == RecorderTypes.None)
                {
                    var resultcount = Helper.RecorderLoader.GetResultCount();
                    if (feeds.Count >= resultcount)
                        return feeds.Take(resultcount).ToList();
                }

                using (WebClient client = new WebClient())
                {
                    string json = client.DownloadString(endpoint);
                    JToken instagramArray = JsonConvert.DeserializeObject<JToken>(json);
                    endpoint = instagramArray["pagination"]["next_url"] == null ? string.Empty : instagramArray["pagination"]["next_url"].ToString();

                    var item = instagramArray["data"].FirstOrDefault();
                    if (item == null) break;
                    
                    var postId = item["id"].ToString();
                    using (var db = new SocialFeedEntities())
                    {
                        var post = db.SocialFeeds.FirstOrDefault(x => x.FeedId == _config.FeedId && x.PostId == postId);
                        if (post != null)
                            isUpdated = true;

                    }
                    feeds.AddRange(LoadFeedFromJson(instagramArray));
                }

            }

            return feeds;
        }

        private List<SocialFeed> GetByHashTag()
        {
            List<SocialFeed> feeds = new List<SocialFeed>();
            Int64 lastTagId;
            //default value and skip the first max tag id
            //Int64 maxTagId = 99990000000000000;

            //update the min_tag_id in the db first
            using (var db = new SocialFeedEntities())
            {
                string last_post_id = null;
                using (WebClient client = new WebClient())
                {
                    string json = client.DownloadString(endpoint);
                    JToken instagramArray = JsonConvert.DeserializeObject<JToken>(json);
                    var dataArray = instagramArray["data"];

                    if (dataArray[0] != null) last_post_id = dataArray[0]["id"].ToString();                   
                    
                }


                var lastTag = db.InstagramTags.FirstOrDefault(x => x.FeedId == _config.FeedId);

                if (lastTag == null)
                {

                    var newfeed = new InstagramTag { FeedId = _config.FeedId, LastTagId = last_post_id };
                    db.InstagramTags.Add(newfeed);
                    db.SaveChanges();
                    
                }
                else
                {
                   
                    lastTag.LastTagId = last_post_id;
                    db.SaveChanges();

                }

            }

            var is_last_post_id_reached = false;

            while ((is_last_post_id_reached) && (endpoint != string.Empty))
            {
                //return set number of item
                if (_recorder.Type == RecorderTypes.None)
                {
                    var resultcount = Helper.RecorderLoader.GetResultCount();
                    if (feeds.Count >= resultcount)
                        return feeds.Take(resultcount).ToList();
                }

                using (WebClient client = new WebClient())
                {

                    string json = client.DownloadString(endpoint);
                    JToken instagramArray = JsonConvert.DeserializeObject<JToken>(json);
                    //maxTagId = (instagramArray["pagination"]["next_max_tag_id"] == null) ? lastTagId : Convert.ToInt64(instagramArray["pagination"]["next_max_tag_id"].ToString());
                    endpoint = instagramArray["pagination"]["next_url"] != null ? instagramArray["pagination"]["next_url"].ToString() : string.Empty;
                    feeds.AddRange(LoadFeedFromJson(instagramArray));

                }
            }
            return feeds;

        }

        private List<SocialFeed> LoadFeedFromJson(JToken instagramArray)
        {

            List<SocialFeed> feeds = new List<SocialFeed>();
            foreach (JToken instagram in instagramArray["data"])
            {

                var feed = new SocialFeed
                {
                    Approved = false,
                    Featured = false,
                    FeedId = _config.FeedId,
                    PostId = instagram["id"].ToString(),
                    SocialNetwork = SocialNetworks.Instagram.GetStringValue(),
                    FeedType = instagram["type"].ToString() == "video" ? FeedTypes.Video.GetStringValue() : FeedTypes.Image.GetStringValue(),
                    ImageUrl = instagram["images"]["standard_resolution"]["url"].ToString(),
                    Link = instagram["link"].ToString(),
                    LinkToProfile = instagram["user"]["profile_picture"].ToString(),
                    PostedOn = DateUtil.UnixTimeStampToDateTime(Convert.ToDouble(instagram["created_time"].ToString())),
                    UserName = instagram["user"]["username"].ToString(),
                    UserProfileImageUrl = string.Format("http://instagram.com/{0}", instagram["user"]["username"].ToString()),
                    Text = !String.IsNullOrEmpty(instagram["caption"].ToString()) ? instagram["caption"]["text"].ToString().RemoveDiacritics() : string.Empty,
                    VideoUrl = instagram["type"].ToString() == "video" ? instagram["videos"]["low_resolution"]["url"].ToString() : string.Empty
                };

                feeds.Add(feed);
            }

            return feeds;


        }



    }
}
