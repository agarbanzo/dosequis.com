using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using System.Diagnostics;
using Havas.Social.Aggregator.Moderate.Models;
using Havas.Social.Aggregator.Helper;

namespace Havas.Social.Aggregator.Moderate.Controllers
{
    public class BaseController : Controller
    {
        private readonly Stopwatch _stopwatch = new Stopwatch();



        public BaseController()
        {
            _stopwatch.Start();
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.HttpContext.Response.AddHeader("P3P", "CP=\"CAO PSA OUR\"");
                                    

            ViewBag.BodyId = (filterContext.RouteData.Values["action"].ToString()).ToLower();

            base.OnActionExecuting(filterContext);
        }

       

        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            var viewResult = filterContext.Result as ViewResult;

            if (viewResult == null) return;

            var baseModel = viewResult.ViewData.Model as BaseModel;
            if (baseModel != null)
            {
                var controller = filterContext.Controller.ValueProvider.GetValue("controller").RawValue.ToString();
                var viewname = filterContext.ActionDescriptor.ActionName;
                PopulateMasterModel(baseModel, controller, viewname);

            }

            _stopwatch.Stop();
            ViewData["ExecutionTime"] = _stopwatch.ElapsedMilliseconds;


            base.OnActionExecuted(filterContext);
        }

        protected void PopulateMasterModel(BaseModel model, string controller, string view)
        {
            model.FeedConfig = Helper.ApiConfigLoader.LoadConfigFromAppConfig("feeds.xml");   

        }

        protected JsonResult GetJsonResultWithException(Exception ex)
        {
            if (Request.IsLocal)
            {
                return Json(new ServiceResult("ERROR", ex.Message), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new ServiceResult("ERROR", "Server side error"), JsonRequestBehavior.AllowGet);
            }
        }

        /// <summary>
        /// Gets the hostname in (ex: www.abc.com)
        /// </summary>
        /// <returns></returns>
        public string GetHostName()
        {
            string hostname = "";

            var CurrentContext = this.HttpContext;


            if (CurrentContext.Request.Url != null)
            {
                if (CurrentContext.Request.Url.Port == 80)
                {
                    hostname = CurrentContext.Request.Url.Host;
                }
                else
                {
                    hostname = CurrentContext.Request.Url.Host + ":" + CurrentContext.Request.Url.Port;
                }
            }

            return hostname;
        }

    }
}
