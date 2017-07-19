using Newtonsoft.Json.Linq;

namespace DosEquis.Com.Core.Entities
{
    public class MarkerModel
    {
        public string title { get; set; }
        public JRaw position { get; set; }
        public string icon { get; set; }
    }
}