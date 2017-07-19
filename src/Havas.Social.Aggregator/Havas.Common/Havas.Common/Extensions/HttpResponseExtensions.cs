using System.Web;

namespace Havas.Common.Extensions
{
    public static class HttpResponseExtensions
    {
        public static void RedirectPermanent(this HttpResponse response, string location)
        {
            response.Redirect(location, false);
            response.StatusCode = 301;
            response.End();
        }
    }
}
