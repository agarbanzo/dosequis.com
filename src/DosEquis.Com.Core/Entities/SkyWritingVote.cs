namespace DosEquis.Com.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SkyWritingVote")]
    public partial class SkyWritingVote
    {
        public int Id { get; set; }

        public int SkyWritingContestId { get; set; }

        [Required]
        [StringLength(128)]
        public string FacebookUsername { get; set; }

        [Column(TypeName = "smalldatetime")]
        public DateTime CreatedDate { get; set; }

        public virtual SkyWritingContest SkyWritingContest { get; set; }
    }
}
