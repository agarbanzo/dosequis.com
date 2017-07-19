﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Havas.Social.Aggregator;
using Havas.Common.Filesystem;
using Havas.Social.Aggregator.Service;
using Havas.Social.Aggregator.Model;
using Havas.Social.Aggregator.Helper;

namespace Havas.Social.Aggregator.Moderate.Repositories
{
    public class SocialFeedRepository
    {
        public List<ApiConfig> configs {get; set;}

        private FeedSubscriptionService feedService;

        public SocialFeedRepository()
        {
            configs = ApiConfigLoader.LoadConfigFromAppConfig("feeds.xml");

            feedService = new FeedSubscriptionService(configs, new DatabaseFeedRecorder());        


        }

        public List<SocialFeed> GetFeedsByPage(string feedId, int page, int pageSize, out int total)
        {
            return feedService.RetrieveFeedById(feedId, page, pageSize, out total);
        
        }

        public void UpdateFeedStatus(int feedId, bool status)
        {
            DatabaseFeedUpdater.UpdateStatus(feedId, status);
        }

    }
}