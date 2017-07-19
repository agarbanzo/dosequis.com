using System.Configuration;
using System.Web.Mvc;

namespace Havas.Common.Web.MVC.Filters
{
    public class MobileRedirectFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var url = filterContext.RequestContext.HttpContext.Request.Url;
            var domain = url.Host;
            var userAgent = filterContext.RequestContext.HttpContext.Request.UserAgent;

            var shouldGetMobile = IsIPhone(userAgent) || IsAndroidMobile(userAgent);

            // if user should get mobile view and is not on mobile domain
            if (shouldGetMobile && !domain.StartsWith("m."))
            {
                var overrideCookie = filterContext.RequestContext.HttpContext.Request.Cookies["domainOverride"];

                // if user doesn't have override cookie
                if (overrideCookie == null || (overrideCookie != null && overrideCookie.Value != "1"))
                {
                    var baseUrl = ConfigurationManager.AppSettings["Url.Mobile"];
                    filterContext.Result = new RedirectResult("http://" + baseUrl + url.PathAndQuery);
                }
            }
        }

        private static bool IsIPhone(string userAgent)
        {
            return userAgent.ToLower().Contains("iphone");
        }

        private static bool IsAndroidMobile(string userAgent)
        {
            // should include android phones but not android tablets
            return userAgent.ToLower().Contains("android") && userAgent.ToLower().Contains("mobile");
        }
    }
}
