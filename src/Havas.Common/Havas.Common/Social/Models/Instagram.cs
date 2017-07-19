using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Social.Models
{
    public class InstagramFeed
    {
        public string Id { get; set; }
        public string low_res_image { get; set; }
        public string med_res_image { get; set; }
        public string thumbnails { get; set; }
        public string text { get; set; }
    }
}
