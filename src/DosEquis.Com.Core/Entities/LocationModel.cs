using System.Collections.Generic;

namespace DosEquis.Com.Core.Entities
{
    public class LocationModel
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string StoreType { get; set; }
        public string ZipCode { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public string ImageName { get; set; }
        public List<string> Brands { get; set; }
        public List<string> DosBrands { get; set; }
        public float Distance { get; set; }
    }
}