using System;
using System.Web;
using System.Web.Mvc;
using Havas.Common.Web.Util;
using System.Configuration;

namespace Havas.Common.Web.MVC.Filters
{

    public class AgeGateCheckFilterAttribute : ActionFilterAttribute
    {
        HttpRequest request = System.Web.HttpContext.Current.Request;
   
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {           
            base.OnActionExecuting(filterContext);

            if ( WebAppUtil.GetCookieValue("legalage") == "true")
                filterContext.Controller.ViewBag.AgeGateVerified = "true";
            else
                filterContext.Controller.ViewBag.AgeGateVerified = "false";

            if (WebAppUtil.GetCookieValue("passthrough") == "true")
                filterContext.Controller.ViewBag.PassThroughVerified = "true";
            else
                filterContext.Controller.ViewBag.PassThroughVerified = CheckPassThrough(filterContext);

        }


        private string CheckPassThrough(ActionExecutingContext filterContext)
        {
            string referralUrl = filterContext.HttpContext.Request.UrlReferrer != null ? filterContext.HttpContext.Request.UrlReferrer.AbsoluteUri : string.Empty;
            string[] passThroughUrls = ConfigurationManager.AppSettings["PassThroughUrls"].Split(',');
            string isPassThrough = "false";

            //check pass through url, if yes set cookie
            if (referralUrl != string.Empty)
            {
                for (int i = 0; i < passThroughUrls.Length; i++)
                {
                    if (referralUrl.Contains(passThroughUrls[i]))
                    {
                        isPassThrough = "true";

                        string domain = ConfigurationManager.AppSettings["ageGateCookieDomain"];
                        
                        WebAppUtil.SetCookieValue("passthrough", "true", DateTime.Now.AddDays(0), domain);
                        WebAppUtil.SetCookieValue("legalage", "true", null, domain);

                        break;
                    }
                }
            }
            return isPassThrough;
        }


    }
  
}