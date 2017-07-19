namespace DosEquis.Com.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ZipCode")]
    public partial class ZipCode
    {
        [Key]
        public int ZipId { get; set; }

        [Column("ZipCode")]
        [Required]
        [StringLength(5)]
        public string ZipCode1 { get; set; }

        [StringLength(50)]
        public string City { get; set; }

        [StringLength(50)]
        public string State { get; set; }

        [StringLength(50)]
        public string County { get; set; }

        public decimal Latitude { get; set; }

        public decimal Longitude { get; set; }

        public DateTime Add_Dttm { get; set; }

        public DateTime? Upd_Dttm { get; set; }
    }
}
