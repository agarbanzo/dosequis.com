namespace DosEquis.Com.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("STGContest")]
    public partial class STGContest
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public STGContest()
        {
            STGVotes = new HashSet<STGVote>();
        }

        public int Id { get; set; }

        [Required]
        [StringLength(64)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(64)]
        public string LastName { get; set; }

        [StringLength(64)]
        public string EmailAddress { get; set; }

        [Required]
        [StringLength(64)]
        public string VideoTitle { get; set; }

        [Required]
        [StringLength(128)]
        public string YoutubeLink { get; set; }

        [StringLength(64)]
        public string Address1 { get; set; }

        [StringLength(16)]
        public string Address2 { get; set; }

        [StringLength(16)]
        public string Address3 { get; set; }

        [StringLength(2)]
        public string State { get; set; }

        [StringLength(5)]
        public string ZipCode { get; set; }

        [StringLength(16)]
        public string PhoneNumber { get; set; }

        public bool? IsOptedIn { get; set; }

        public bool? IsApproved { get; set; }

        public bool? IsFinalist { get; set; }

        public bool? IsWinner { get; set; }

        public int Round { get; set; }

        public bool? IsRejected { get; set; }

        public bool IsFeatured { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? CreatedDate { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<STGVote> STGVotes { get; set; }
    }
}
