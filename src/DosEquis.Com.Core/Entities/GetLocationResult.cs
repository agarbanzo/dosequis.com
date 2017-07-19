using System.Collections.Generic;

namespace DosEquis.Com.Core.Entities
{
    public class GetLocationResult
    {
        public List<Location> Locations { get; set; }
        public int Total { get; set; }
    }
}
