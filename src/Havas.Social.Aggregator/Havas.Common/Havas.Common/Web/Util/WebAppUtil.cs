using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using Havas.Common.Constants;
using System.Configuration;
using Havas.Common.Extensions;

namespace Havas.Common.Web.Util
{
    public class WebAppUtil
    {

		public static string GetFullyQualifiedUnsecuredUrl(string path) {
			return GetFullyQualifiedUrl(path, "http");
		}

		public static string GetFullyQualifiedSecuredUrl(string path) {
			var enforceHttps = ShouldEnforceHttps();
			return GetFullyQualifiedUrl(path, enforceHttps ? "https": "http");
		}

		public static string GetFullyQualifiedUrl(string path, string scheme) {
			var httpsPort = ConfigurationManager.AppSettings["SslRedirectorModule_HTTPSPort"] ?? "";
			var httpPort = ConfigurationManager.AppSettings["SslRedirectorModule_HTTPPort"] ?? "";

			var hostName = HttpContext.Current.Request.Url.Host;
			var port = (scheme == "https" ? httpsPort : httpPort);
			if (!port.IsNullOrWhitespace()) {
				hostName += ":" + port;
			}

			path = path.TrimStart('/');

			return string.Format("{0}://{1}/{2}", scheme,hostName,path);
		}

		public static bool ShouldEnforceHttps() {
			bool httpsRequired;

			var setting = ConfigurationManager.AppSettings["EnforceHTTPS"];
			if (!bool.TryParse(setting, out httpsRequired)) {
				httpsRequired = true;
			}

			return httpsRequired;
		}


        /// <summary>
        /// Sets the no cache.
        /// </summary>
        public static void SetNoCache()
        {
            HttpResponse response = HttpContext.Current.Response;

            response.CacheControl = "no-cache";
            response.Expires = -1;
            response.Cache.SetNoStore();
            response.AddHeader("Pragma", "no-cache");
        }

		public static string GetCookieValue(string key) {
			var request = HttpContext.Current.Request;
			var cookie = request.Cookies[key];

			return cookie == null ? "" : request.Cookies[key].Value;
		}

		public static void SetCookieValue(string key, string value, DateTime? expiration, string domain = null) {
			var response = HttpContext.Current.Response;
			var request = HttpContext.Current.Request;

            var cookie = request.Cookies[key];

            if (cookie != null)
               cookie.Value = value;
            else
               cookie =  new HttpCookie(key, value);

			if (expiration != null) {
				cookie.Expires = expiration.Value;
			}

            if (domain != null)
            {
                cookie.Domain = domain;
            }

			response.Cookies.Add(cookie);
		}

        public static string GetHostName()
        {
            return string.Empty;
        }
    }
}
