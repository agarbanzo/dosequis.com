using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Havas.Social.Aggregator.Moderate.Models
{
    public class BasePagenationModel
    {
        public int TotalCount { get; set; }
        public int CurrentPage { get; set; }
        public int PageSize = 80;
        public int Pages { get { return (TotalCount % PageSize) > 0 ? TotalCount / PageSize + 1 : TotalCount / PageSize; } }
    }
}