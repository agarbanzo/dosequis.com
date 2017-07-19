using System.Collections.Generic;
using Havas.Social.Aggregator.Constant;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Service
{
    public interface IFeedRecorder
    {
        RecorderTypes Type { get; set; }   
        void RecordFeeds(List<SocialFeed> feeds);
    }
}
