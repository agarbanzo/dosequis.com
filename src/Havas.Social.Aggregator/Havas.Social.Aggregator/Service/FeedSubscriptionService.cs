using System;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Versioning;
using System.Text;
using System.Threading.Tasks;
using Havas.Social.Aggregator.Service;
using Havas.Social.Aggregator.Model;
using Havas.Social.Aggregator.Constant;
using Havas.Common.Extensions;
using Havas.Social.Aggregator.Helper;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Service
{
    public class FeedSubscriptionService : IFeedSubscriptionService
    {
        private IFeedRecorder _recorder;
        private List<ApiConfig> _configs;
        private List<IFeedService> _subscriptionlist;

        public List<IFeedService> Services
        {

            get { return _subscriptionlist; }

        }


        public FeedSubscriptionService(List<ApiConfig> configs, IFeedRecorder recorder)
        {
            _configs = configs;
            _recorder = recorder;
            _subscriptionlist = new List<IFeedService>();
            Register();

        }

        private void Register()
        {
            foreach (var config in _configs)
            {
                IFeedService service = null;
                //todo: add facebook and twitter implementations
                if (config.SocialNetwork == SocialNetworks.Instagram)
                    service = new InstagramFeedService(config);
                if (config.SocialNetwork == SocialNetworks.Facebook)
                    service = new FacebookFeedService(config);
                if (config.SocialNetwork == SocialNetworks.Twitter)
                    service = new TwitterFeedService(config);

                //todo: add none database recorder according to key in the appsetting
                service.SetRecorder(_recorder);
                _subscriptionlist.Add(service);
            }

        }
        public void FetchFeeds()
        {
            foreach (var service in _subscriptionlist)
            {
                Console.WriteLine("Begin retrieving feed:" + service.Config.FeedId);

                service.RetrieveFeed();
            }

        }

        public List<SocialFeed> AggregateAllFeeds()
        {
            if (Helper.RecorderLoader.GetRecorderType() == RecorderTypes.None)
            {
                List<SocialFeed> feeds = new List<SocialFeed>();
                foreach (var service in _subscriptionlist)
                {
                    feeds.AddRange(service.RetrieveFeed());
                }

                Console.WriteLine(string.Format("Total feeds returned: {0}", feeds.Count.ToString()));
                return feeds;
            }
            else
            {

                using (var db = new SocialFeedEntities())
                {
                    return db.SocialFeeds.Where(x => x.Approved == true).OrderByDescending(x => x.PostedOn).ToList();
                }
            }
        }

        public List<SocialFeed> RetrieveFeedByPage(string pageName, List<FeedRequest> feedRequestList, int page, DateTime startDate)
        {
            IFeedService service = _subscriptionlist.FirstOrDefault();

            if (service == null) throw new Exception("feed not found");
            int tempPageSize = Convert.ToInt16(feedRequestList[0].PageSize);
            if (RecorderLoader.GetRecorderType() == RecorderTypes.None)
            {
                return service.RetrieveFeed().Skip((page - 1) * tempPageSize).Take(tempPageSize).ToList();
            }
            else
            {
                using (var db = new SocialFeedEntities())
                {
                    List<SocialFeed> pageData = new List<SocialFeed>();
                    var query = new List<SocialFeed>();


                    foreach (FeedRequest fr in feedRequestList)
                    {
                        var feedId = fr.FeedId;
                        var feedType = fr.FeedType;
                        var hashTag = fr.HashTag;
                        var pageSize = Convert.ToInt32(fr.PageSize);
                        int numberOfPosts = Convert.ToInt16(fr.NumberOfPosts);
                        if (fr.SearchType == "Feed")
                            if (fr.FeedType == "All")
                                pageData.AddRange(page > 1 
                                    ? db.SocialFeeds.AsNoTracking().Where(x => x.Approved == true && (x.PostedOn <= startDate) && x.FeedId == feedId).OrderByDescending(x => x.Featured).ThenByDescending(x => x.PostedOn).Skip((page - 1) * pageSize).Take(numberOfPosts).ToList()
                                    : db.SocialFeeds
                                        .Where(x => x.Approved == true 
                                            && (x.PostedOn <= startDate) 
                                            && x.FeedId == feedId)
                                            .OrderByDescending(x => x.Featured)
                                            .ThenByDescending(x => x.PostedOn)
                                            .Take(numberOfPosts)
                                            .ToList());
                            else
                                pageData.AddRange(page > 1 
                                    ? db.SocialFeeds.AsNoTracking().Where(x => x.Approved == true && (x.PostedOn <= startDate) && x.FeedId == feedId && x.FeedType == feedType).OrderByDescending(x => x.Featured).ThenByDescending(x => x.PostedOn).Skip((page - 1) * pageSize).Take(numberOfPosts).ToList()
                                    : db.SocialFeeds
                                        .Where(x => x.Approved == true 
                                            && (x.PostedOn <= startDate) 
                                            && x.FeedId == feedId 
                                            && x.FeedType == feedType)
                                            .OrderByDescending(x => x.Featured)
                                            .ThenByDescending(x => x.PostedOn)
                                            .Take(numberOfPosts)
                                            .ToList());
                        else
                            pageData.AddRange(page > 1 
                                ? db.SocialFeeds.AsNoTracking()
                                    .Where(x => x.Approved == true 
                                        && (x.PostedOn <= startDate) 
                                        && x.FeedId == feedId 
                                        && x.Text.Contains(hashTag) 
                                        && x.FeedType == feedType)
                                        .OrderByDescending(x => x.Featured)
                                        .ThenByDescending(x => x.PostedOn)
                                        .Skip((page - 1) * pageSize)
                                        .Take(numberOfPosts)
                                        .ToList()
                                : db.SocialFeeds
                                    .Where(x => x.Approved == true 
                                        && (x.PostedOn <= startDate) 
                                        && x.FeedId == feedId 
                                        && x.Text.Contains(hashTag))
                                        .OrderByDescending(x => x.Featured)
                                        .ThenByDescending(x => x.PostedOn)
                                        .Take(numberOfPosts)
                                        .ToList());
                    }
                    return pageData;
                }

            }
        }

        public List<SocialFeed> AggregateAllFeedsSince(DateTime since)
        {
            return AggregateAllFeeds().Where(x => x.PostedOn > since).ToList();
        }

        public List<SocialFeed> RetrieveFeedById(string feedId, int count)
        {
            IFeedService service = _subscriptionlist.FirstOrDefault(x => x.Config.FeedId == feedId);

            if (service == null) throw new Exception("feed not found");


            if (Helper.RecorderLoader.GetRecorderType() == RecorderTypes.None)
            {
                return service.RetrieveFeed().Take(count).ToList();
            }
            else
            {
                using (var db = new SocialFeedEntities())
                {
                    return db.SocialFeeds.Where(x => x.Approved == true && x.FeedId == feedId).OrderByDescending(x => x.PostedOn).Take(count).ToList();
                }

            }
        }

        public List<SocialFeed> RetrieveFeedById(string feedId, int count, FeedTypes type)
        {
            IFeedService service = _subscriptionlist.FirstOrDefault(x => x.Config.FeedId == feedId);

            if (service == null) throw new Exception("feed not found");


            if (Helper.RecorderLoader.GetRecorderType() == RecorderTypes.None)
            {
                return service.RetrieveFeed().Where(x => x.FeedType == type.GetStringValue()).OrderByDescending(x => x.PostedOn).Take(count).ToList();
            }
            else
            {
                //todo pull entries from DB
                using (var db = new SocialFeedEntities())
                {
                    return db.SocialFeeds.Where(x => x.Approved == true && x.FeedId == feedId && x.FeedType == type.GetStringValue()).OrderByDescending(x => x.PostedOn).Take(count).ToList();
                }

            }
        }

        //for moderation tool
        public List<SocialFeed> RetrieveFeedById(string feedId, int page, int pageSize, out int total)
        {
            IFeedService service = _subscriptionlist.FirstOrDefault(x => x.Config.FeedId == feedId);

            if (service == null)
            {
                feedId = _subscriptionlist.First().Config.FeedId;
            }


            using (var db = new SocialFeedEntities())
            {
                total = db.SocialFeeds.AsNoTracking().Count(x => x.FeedId == feedId);
                total = total > (pageSize * 100) ? (pageSize * 100) : total;

                var feeds = page > 1 ? db.SocialFeeds.AsNoTracking().Where(x => x.FeedId == feedId).OrderByDescending(x => x.PostedOn).Skip((page - 1) * pageSize).Take(pageSize).ToList() : db.SocialFeeds.Where(x => x.FeedId == feedId).OrderByDescending(x => x.PostedOn).Take(pageSize).ToList();

                return feeds;
            }

        }


        public List<SocialFeed> RetrieveFeedByNetwork(SocialNetworks socialNetwork, FeedTypes type, DateTime startDate, DateTime endDate)
        {

            IFeedService service = _subscriptionlist.FirstOrDefault(x => x.Config.SocialNetwork == socialNetwork);

            if (service == null)
                throw new Exception("feed not found");

            using (var db = new SocialFeedEntities())
            {
                var socialNetworkString = socialNetwork.GetStringValue();
                var feedType = type.GetStringValue();
                var feeds =
                    db.SocialFeeds.AsNoTracking()
                        .Where(x => x.SocialNetwork == socialNetworkString && x.FeedType == feedType && x.PostedOn >= startDate && x.PostedOn <= endDate)
                        .ToList();

                return feeds;
            }

        }


    }


}
