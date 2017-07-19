namespace Havas.Social.Aggregator.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FacebookTag")]
    public partial class FacebookTag
    {
        [Key]
        [StringLength(50)]
        public string FeedId { get; set; }

        public DateTime SinceDateTime { get; set; }
    }
}
