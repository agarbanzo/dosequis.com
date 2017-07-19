using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Havas.Social.Aggregator.Model;
using Havas.Social.Aggregator.Constant;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Service
{
    public interface IFeedSubscriptionService
    {
       
       
        void FetchFeeds();
        
        List<IFeedService> Services { get; }
        
        List<SocialFeed> AggregateAllFeeds();
        
        List<SocialFeed> AggregateAllFeedsSince(DateTime since);
        
        List<SocialFeed> RetrieveFeedById(string feedId, int count);
        
        List<SocialFeed> RetrieveFeedById(string feedId, int count, Constant.FeedTypes type);
        
        List<SocialFeed> RetrieveFeedByNetwork(SocialNetworks socialNetwork, Constant.FeedTypes type, DateTime startDate,DateTime endDate);
        
        List<SocialFeed> RetrieveFeedByPage(string pageName,List<FeedRequest> feedRequestList,int page, DateTime startDate);

    }
}
