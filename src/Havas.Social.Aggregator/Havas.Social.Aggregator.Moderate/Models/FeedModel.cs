using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Havas.Social.Aggregator;

namespace Havas.Social.Aggregator.Moderate.Models
{
    public class FeedModel:BaseModel
    {
        public List<SocialFeed> Feeds { get; set; }
        public string FeedId;
        public int TotalCount { get; set; }
        public int CurrentPage { get; set; }
        public int PageSize = 80;
        public int Pages { get { return (TotalCount % PageSize) > 0 ? TotalCount/PageSize + 1 : TotalCount/PageSize; } }

    }
}