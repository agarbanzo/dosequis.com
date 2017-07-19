namespace DosEquis.Com.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("vwCiRegistrationRank")]
    public partial class vwCiRegistrationRank
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long FacebookId { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(22)]
        public string PubKey { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(254)]
        public string Email { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Key]
        [Column(Order = 3)]
        [StringLength(1000)]
        public string AuthToken { get; set; }

        public string MemeUrl { get; set; }

        public string ImageConfig { get; set; }

        [StringLength(20)]
        public string Gender { get; set; }

        [Key]
        [Column(Order = 4)]
        public bool IsModerated { get; set; }

        [Key]
        [Column(Order = 5)]
        public bool IsBanned { get; set; }

        [Key]
        [Column(Order = 6)]
        public DateTime Add_Dttm { get; set; }

        [Key]
        [Column(Order = 7)]
        public DateTime Upd_Dttm { get; set; }

        [Key]
        [Column(Order = 8)]
        public double Rank { get; set; }
    }
}
