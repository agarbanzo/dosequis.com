using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using Havas.Common.Extensions;
using Havas.Common.Util;

namespace Havas.Common.Web.Util
{
	public class SecurityUtil
	{
		public static string GetPasswordResetUrl(string path, string emailAddress) {
			var createdDateTime = DateTime.Now.ToUniversalTime().ToString("G");
			var rawData = string.Format("{0}-{1}", emailAddress,createdDateTime);

			var encryptedData = CryptoUtil.Encrypt(rawData);
			var queryString = "?data=" + encryptedData.UrlEncode();
			
			if (path.IsNullOrWhitespace()) {
				return queryString;
			}

			return WebAppUtil.GetFullyQualifiedSecuredUrl(path) + encryptedData.UrlEncode();
		}

		public static string GetEmailFromPasswordResetData(string data) {
			var decryptedData = CryptoUtil.Decrypt(data);
			var parts = decryptedData.Split('-');
			var createdDate = DateTime.Parse(parts[1]);

			if ((DateTime.Now.ToUniversalTime() - createdDate).TotalMinutes > GetMaximumPasswordResetUrlAge()) {
				// Url older than 10 minutes
				return null;
			}

			return parts[0];
		}

		public static int GetLoginFailureCount() {
			var value = WebAppUtil.GetCookieValue("failurecount");
			int failures;

			if (!int.TryParse(value, out failures)) {
				failures = 0;
			}

			return failures;
		}

		public static void IncrementLoginFailureCount() {
			SetLoginFailureCount(GetLoginFailureCount() + 1);
		}

		public static void ResetLoginFailureCount() {
			SetLoginFailureCount(0);
		}

		public static void SetLoginFailureCount(int count) {
            WebAppUtil.SetCookieValue("failurecount", count.ToString(), null);
		}

		private static int GetMaximumPasswordResetUrlAge() {
			var maxAgeSetting = ConfigurationManager.AppSettings["MaximumPasswordResetUrlAge"];
			int maxAge;

			if (!int.TryParse(maxAgeSetting, out maxAge)) {
				maxAge = 10;
			}

			return maxAge;
		}
	}
}
