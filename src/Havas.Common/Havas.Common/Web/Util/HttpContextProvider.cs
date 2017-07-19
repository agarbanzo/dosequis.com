using System.Web;

namespace Havas.Common.Web.Util
{
    public class HttpContextProvider : IHttpContextProvider
    {
        public HttpContextBase GetCurrentContext()
        {
            return new HttpContextWrapper(HttpContext.Current);
        }
    }

    public interface IHttpContextProvider
    {
        HttpContextBase GetCurrentContext();
    }
}
