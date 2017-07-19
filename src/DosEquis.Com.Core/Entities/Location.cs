using System.Collections.Generic;

namespace DosEquis.Com.Core.Entities
{
    public class Location
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Locality { get; set; }
        public string Region { get; set; }
        public string StoreType { get; set; }
        public GeoPoint Coordinates { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public string Telephone { get; set; }
        public string PostalCode { get; set; }
        public string SearchBrands { get; set; }
        public List<string> Brands { get; set; }
        public float Distance { get; set; }
    }
}
