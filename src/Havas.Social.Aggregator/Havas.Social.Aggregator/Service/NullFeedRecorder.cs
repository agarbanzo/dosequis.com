using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Havas.Social.Aggregator.Constant;
using Havas.Social.Aggregator.Model;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Service
{
    public class NullFeedRecorder:IFeedRecorder
    {
        public RecorderTypes Type { get; set;}

        public NullFeedRecorder()
        {
            Type = RecorderTypes.None;        
        }

        public void RecordFeeds(List<SocialFeed> feeds)
        {
            //not implemented   
        }
    
    }
}
