using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Havas.Social.Aggregator;
using Havas.Social.Aggregator.Model;

namespace Havas.Social.Aggregator.Moderate.Models
{
    public class FeedModel:BaseModel
    {
        public List<SocialFeedModel> Feeds { get; set; }
        public string FeedId;
        
        

    }
}