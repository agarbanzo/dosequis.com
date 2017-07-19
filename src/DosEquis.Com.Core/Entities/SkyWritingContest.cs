namespace DosEquis.Com.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SkyWritingContest")]
    public partial class SkyWritingContest
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SkyWritingContest()
        {
            SkyWritingVotes = new HashSet<SkyWritingVote>();
        }

        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string ImageId { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required]
        [StringLength(255)]
        public string Email { get; set; }

        public DateTime DateEntered { get; set; }

        public bool Finalist { get; set; }

        public bool Approved { get; set; }

        public bool Winner { get; set; }

        public bool OptIn { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SkyWritingVote> SkyWritingVotes { get; set; }
    }
}
