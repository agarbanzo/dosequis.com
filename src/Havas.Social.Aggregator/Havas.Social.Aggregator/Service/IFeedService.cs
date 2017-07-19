using System.Collections.Generic;
using Havas.Social.Aggregator.Model;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Service
{
    public interface IFeedService
    {
        void AuthenticateToApi();
        List<SocialFeed> RetrieveFeed();
        void SetRecorder(IFeedRecorder recorder);
        ApiConfig Config { get;}
        IFeedRecorder Recorder { get; }
    }
}
