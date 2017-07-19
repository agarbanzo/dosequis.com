using System;
using System.Collections.Generic;
using System.Web.Caching;
using Havas.Common.Cache;
using System.Configuration;
using Havas.Social.Aggregator.Constant;
using Havas.Common.Extensions;
using Havas.Social.Aggregator.Model;
using System.Threading.Tasks;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Service
{
    public class WebCachedFeedSubscriptionService : WebCacheServiceBase, IFeedSubscriptionService
    {
        private readonly IFeedSubscriptionService _service;

        private int cacheDurationMin;

        public List<IFeedService> Services
        {

            get { return _service.Services; }

        }

        public WebCachedFeedSubscriptionService(Cache httpCache, IFeedSubscriptionService service)
            : base(httpCache)
        {
            _service = service;

            cacheDurationMin = ConfigurationManager.AppSettings["cachedurationmin"] != null ? Convert.ToInt32(ConfigurationManager.AppSettings["cachedurationmin"].ToString()) : 10;

        }

     
        public void FetchFeeds()
        {
            _service.FetchFeeds();            
        }

        public List<SocialFeed> AggregateAllFeeds()
        {
            return ExecuteAndCache("AggregateAllFeeds", () => _service.AggregateAllFeeds(), cacheDurationMin);
        }

        public List<SocialFeed> AggregateAllFeedsSince(DateTime since)
        {
            return ExecuteAndCache(string.Format("AggregateAllFeedsSince-{0}", since), () => _service.AggregateAllFeedsSince(since), cacheDurationMin);
        }

        public List<SocialFeed> RetrieveFeedById(string feedId, int count)
        {
            return ExecuteAndCache(string.Format("FeedById-{0}{1}", feedId, count ), () => _service.RetrieveFeedById(feedId,count), cacheDurationMin);
        }

        public List<SocialFeed> RetrieveFeedById(string feedId, int count, FeedTypes type)
        {
            return ExecuteAndCache(string.Format("FeedById-{0}{1}{3}", feedId, count, type.GetStringValue()), () => _service.RetrieveFeedById(feedId, count, type), cacheDurationMin);
        }

        public List<SocialFeed> RetrieveFeedByPage(string pageName ,List<FeedRequest> feedRequestList,int page, DateTime startDate)
        {
               return ExecuteAndCache(string.Format("FeedByPage-{0}{1}{2}", pageName,startDate, page), () => _service.RetrieveFeedByPage(pageName,feedRequestList, page, startDate), cacheDurationMin);
        }

        public List<SocialFeed> RetrieveFeedByNetwork(SocialNetworks socialNetwork, FeedTypes type, DateTime startDate, DateTime endDate)
        {
            return null;
        }

        public Task<List<SocialFeed>> RetrieveFeedByPageAsync(string pageName, List<FeedRequest> feedRequestList, int page, DateTime startDate)
        {
            throw new NotImplementedException();
        }
    }
}
