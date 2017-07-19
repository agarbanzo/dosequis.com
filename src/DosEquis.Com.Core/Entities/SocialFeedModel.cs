using System;
using Havas.Common.Extensions;

namespace Havas.Social.Aggregator.Moderate.Models
{
    public class SocialFeedModel
    {
        public int Id { get; set; }
        public string SocialNetwork { get; set; }
        public string FeedType { get; set; }
        public string FeedId { get; set; }
        public string UserName { get; set; }
        public string UserProfileImageUrl { get; set; }
        public string Link { get; set; }
        public string LinkToProfile { get; set; }
        public DateTime? PostedOn { get; set; }

        private string _text;
        public string Text
        {

            get
            {
                if (!_text.IsNullOrWhitespace())
                {
                    return _text.Length < 200 ? _text : _text.Substring(0, 199) + "...";

                }
                return string.Empty;
            }

            set { _text = value; }
        }
        public string ImageUrl { get; set; }
        public string VideoUrl { get; set; }
        public bool? Approved { get; set; }
        public bool? Featured { get; set; }
        public string PostId { get; set; }

    }
}