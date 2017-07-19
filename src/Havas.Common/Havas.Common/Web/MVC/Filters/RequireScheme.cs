using System;
using System.Configuration;
using System.Web.Mvc;
using Havas.Common.Extensions;

namespace Havas.Common.Web.MVC.Filters
{
    public enum Scheme
    {
        Ignore,
        Http,
        Https,
    }

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = false)]
    public class RequireScheme : FilterAttribute, IAuthorizationFilter
    {
        private readonly Scheme scheme;

        public RequireScheme(Scheme scheme)
        {
            this.scheme = scheme;
        }

        public void OnAuthorization(AuthorizationContext filterContext)
        {
            if ((scheme == Scheme.Https) && !filterContext.HttpContext.Request.IsSecureConnection)
                filterContext.Result = GetResult(filterContext, "https");
            else if ((scheme == Scheme.Http) && filterContext.HttpContext.Request.IsSecureConnection)
                filterContext.Result = GetResult(filterContext, "http");
        }

        private static RedirectResult GetResult(AuthorizationContext filterContext, string scheme)
        {
            var port = (scheme == "https" ? ConfigurationManager.AppSettings["SslRedirectorModule_HTTPSPort"] : ConfigurationManager.AppSettings["SslRedirectorModule_HTTPPort"]);

            var builder = new UriBuilder()
            {
                Scheme = scheme,
                Host = filterContext.HttpContext.Request.Url.Host,
                Path = filterContext.HttpContext.Request.Url.AbsolutePath,
                Query = filterContext.HttpContext.Request.Url.Query.Replace("?", "")
            };

            if (!port.IsNullOrWhitespace())
            {
                builder.Port = int.Parse(port);
            }

            return new RedirectResult(builder.ToString());
        }
    }
}