using System;
using System.Collections.Generic;
using Havas.Social.Aggregator.Service;
using Havas.Social.Aggregator.Model;
using Havas.Social.Aggregator.Entities;
using Havas.Social.Aggregator.Helper;

namespace DosEquis.Com.Core.Repositories
{
    public class SocialFeedRepository : ISocialFeedRepository
    {
        private readonly List<ApiConfig> configs;
        private readonly IFeedSubscriptionService feedSubscriptionService;

        public SocialFeedRepository()
        {
            configs = ApiConfigLoader.LoadConfigFromAppConfig("feeds.xml");
            feedSubscriptionService = new FeedSubscriptionService(configs, new DatabaseFeedRecorder());
        }

        public List<SocialFeed> RetrieveFeedByPage(string pageName, List<FeedRequest> feedRequestList, int page, DateTime startDate)
        {
            return feedSubscriptionService.RetrieveFeedByPage(pageName, feedRequestList, page, startDate);
        }
    }
}