namespace Havas.Social.Aggregator.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("InstagramTag")]
    public partial class InstagramTag
    {
        [Key]
        [StringLength(50)]
        public string FeedId { get; set; }

        [StringLength(500)]
        public string LastTagId { get; set; }
    }
}
