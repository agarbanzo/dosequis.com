using System;
using System.Collections.Generic;
using Havas.Social.Aggregator.Model;
using Havas.Social.Aggregator.Entities;

namespace DosEquis.Com.Core.Repositories
{
    public interface ISocialFeedRepository
    {
        List<SocialFeed> RetrieveFeedByPage(string pageName, List<FeedRequest> feedRequestList, int page, DateTime startDate); 
    }
}
