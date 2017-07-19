using System.Web.Mvc;
using System.Web.Routing;

namespace Havas.Social.Aggregator.Moderate
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}/{page}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional, page = UrlParameter.Optional }
            );
        }
    }
}