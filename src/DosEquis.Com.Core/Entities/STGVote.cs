namespace DosEquis.Com.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("STGVote")]
    public partial class STGVote
    {
        public int Id { get; set; }

        public int STGContestId { get; set; }

        [Required]
        [StringLength(64)]
        public string Voter { get; set; }

        public int Round { get; set; }

        public DateTime DateEntered { get; set; }

        public virtual STGContest STGContest { get; set; }
    }
}
