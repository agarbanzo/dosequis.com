using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Havas.Social.Aggregator.Model;

namespace Havas.Social.Aggregator.Moderate.Models
{
    public class BaseModel:BasePagenationModel
    {
        public List<ApiConfig> FeedConfig { get; set; }

    }
}