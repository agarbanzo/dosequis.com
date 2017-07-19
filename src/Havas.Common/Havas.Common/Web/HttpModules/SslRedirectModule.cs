using System;
using System.Collections.Specialized;
using System.Configuration;
using System.IO;
using System.Security.Policy;
using System.Web;
using Havas.Common.Extensions;

namespace Havas.Common.Web.HttpModules
{
    public class SslRedirectorModule : IHttpModule
    {
        private string httpPort = null;
        private string httpsPort = null;

        public SslRedirectorModule()
        {
            httpsPort = ConfigurationManager.AppSettings["SslRedirectorModule_HTTPSPort"];
            httpPort = ConfigurationManager.AppSettings["SslRedirectorModule_HTTPPort"];
        }

        public void Init(HttpApplication context)
        {
            context.PreRequestHandlerExecute += new EventHandler(context_PreRequestHandlerExecute);
        }

        void context_PreRequestHandlerExecute(object sender, EventArgs e)
        {
            var application = (HttpApplication)sender;
            var context = HttpContext.Current;
            var url = context.Request.Url;
            var sslPaths = (NameValueCollection)ConfigurationManager.GetSection("RequiresSSL/RequiresSSL_Paths");
            var requiresSsl = false;
            var pathOnly = url.AbsolutePath;

            if (!IsPage(pathOnly))
            {
                return;
            }

            bool ignoreRedirect = false; //for facebook app where both http and https need to be supported

            requiresSsl = IsInCollection(pathOnly, sslPaths, ref ignoreRedirect);

            if (!ignoreRedirect)
            {
                if (requiresSsl && !context.Request.IsSecureConnection)
                {
                    context.Response.Redirect(ChangeScheme(url, "https"));
                }

                if (!requiresSsl && context.Request.IsSecureConnection)
                {
                    context.Response.Redirect(ChangeScheme(url, "http"));
                }
            }

        }

        private string ChangeScheme(Uri url, string scheme)
        {
            var port = (scheme == "https" ? httpsPort : httpPort);

            var host = url.Host;
            if (!String.IsNullOrEmpty(port))
            {
                host += ":" + port;
            }

            var moddedUrl = string.Format("{0}://{1}{2}", scheme, host, url.PathAndQuery);
            return moddedUrl;
        }

        private bool IsLocal(string host)
        {
            return (host == "localhost" || host.EndsWith("local"));
        }

        private bool IsPage(string path)
        {
            var extension = Path.GetExtension(path);
            if (extension == null)
            {
                return true;
            }

            switch (extension.ToLower())
            {
                case ".asp":
                case ".aspx":
                case ".htm":
                case ".html":
                case "":
                    return true;
                default:
                    return false;
            }
        }

        private bool IsInCollection(string path, NameValueCollection collection, ref bool ignoreRedirect)
        {
            var lowerPath = path.ToLower();

            foreach (string item in collection)
            {

                var itemvalue = collection[item].ToLower();

                if (lowerPath.StartsWith(item.ToLower()) && (itemvalue != "false"))
                {
                    return true;
                }

                if (lowerPath.StartsWith(item.ToLower()) && (itemvalue == "false"))
                {
                    ignoreRedirect = true;
                    return false;
                }
            }
            return false;
        }

        public void Dispose()
        {

        }
    }
}