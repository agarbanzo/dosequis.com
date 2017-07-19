namespace Havas.Social.Aggregator.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TwitterTag")]
    public partial class TwitterTag
    {
        [Key]
        [StringLength(50)]
        public string FeedId { get; set; }

        [StringLength(50)]
        public string SinceId { get; set; }
    }
}
