using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using DosEquis.Com.Models.Services;

namespace DosEquis.Com.Core.Entities
{
    public class MapModel
    {
        [Required]
        public string SearchZip { get; set; }
        public string SearchLatitude { get; set; }
        public string SearchLongitude { get; set; }
        public bool chached { get; set; }
        public double SearchRadiusInMiles { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
        public float PageRadiusInMiles { get; set; }

        public int BarCount { get; set; }

        public List<DosEquis.Com.Core.Entities.LocationModel> SearchResults { get; set; }

        public string MarkerJSON { get; set; }
        public string MarkerInfoJSON { get; set; }
    }
}