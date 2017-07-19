namespace DosEquis.Com.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CiRegistration")]
    public partial class CiRegistration
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long FacebookId { get; set; }

        [Required]
        [StringLength(22)]
        public string PubKey { get; set; }

        [Required]
        [StringLength(254)]
        public string Email { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Required]
        [StringLength(1000)]
        public string AuthToken { get; set; }

        public string MemeUrl { get; set; }

        public string ImageConfig { get; set; }

        [StringLength(20)]
        public string Gender { get; set; }

        public bool IsModerated { get; set; }

        public bool IsBanned { get; set; }

        public DateTime Add_Dttm { get; set; }

        public DateTime Upd_Dttm { get; set; }
    }
}
