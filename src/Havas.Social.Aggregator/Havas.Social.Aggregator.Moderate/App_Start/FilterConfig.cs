using System.Web;
using System.Web.Mvc;

namespace Havas.Social.Aggregator.Moderate
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}