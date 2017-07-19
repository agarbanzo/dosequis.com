using System.Xml.Linq;
using System.Net;

namespace Havas.Common.APIService
{
    public class PoxResponse
    {
        public XDocument ResponseDocument { get; set; }
        public HttpStatusCode StatusCode { get; set; }
        public string ContentType { get; set; }
        public string Location { get; set; }
    }
}
