using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Havas.Social.Aggregator.Model
{
    public class FeedRequest
    {
        public string SearchType { get; set; }
        public string FeedId { get; set; }
        public string FeedType { get; set; }
        public string HashTag {get; set;}
        public string NumberOfPosts { get; set; }
        public string PageSize { get; set; }
    }
}