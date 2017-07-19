namespace Havas.Social.Aggregator.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SocialFeed")]
    public partial class SocialFeed
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string SocialNetwork { get; set; }

        [StringLength(50)]
        public string FeedType { get; set; }

        [StringLength(50)]
        public string PostId { get; set; }

        [StringLength(50)]
        public string FeedId { get; set; }

        [StringLength(50)]
        public string UserName { get; set; }

        [StringLength(300)]
        public string UserProfileImageUrl { get; set; }

        [StringLength(200)]
        public string Link { get; set; }

        [StringLength(200)]
        public string LinkToProfile { get; set; }

        public DateTime? PostedOn { get; set; }

        [StringLength(1000)]
        public string Text { get; set; }

        [StringLength(500)]
        public string ImageUrl { get; set; }

        [StringLength(500)]
        public string VideoUrl { get; set; }

        public bool? Approved { get; set; }

        public bool? Featured { get; set; }
    }
}
