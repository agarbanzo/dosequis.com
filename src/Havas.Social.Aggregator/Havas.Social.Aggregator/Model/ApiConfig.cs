using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Havas.Social.Aggregator.Constant;

namespace Havas.Social.Aggregator.Model
{
    public class ApiConfig
    {
        public string FeedId { get; set; }
        public SocialNetworks SocialNetwork { get; set; }
        public FeedSource Source { get; set; }
        public string BrandPageId { get; set; }
        public List<string> HashTags { get; set; }
    }
}
