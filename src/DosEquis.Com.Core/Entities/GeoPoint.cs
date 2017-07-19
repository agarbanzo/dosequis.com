namespace DosEquis.Com.Core.Entities
{
    public class GeoPoint
    {
        public GeoPoint(float latitude, float longitude)
        {
            Latitude = latitude;
            Longitude = longitude;
        }

        public float Latitude { get; set; }

        public float Longitude { get; set; }
    }
}