using System.Text.RegularExpressions;

namespace Havas.Common.Util
{
    public class ReplaceLinkUtil
    {
        public static string ReplaceLinks(string arg)
        //Replaces web and email addresses in text with hyperlinks
        {
            Regex urlregex = new Regex(@"(^|[\n ])(?<url>(www|ftp)\.[^ ,""\s<]*)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
            arg = urlregex.Replace(arg, " <a href=\"http://${url}\" target=\"_blank\">${url}</a>");
            Regex httpurlregex = new Regex(@"(^|[\n ])(?<url>(http://www\.|http://|https://)[^ ,""\s<]*)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
            arg = httpurlregex.Replace(arg, " <a href=\"${url}\" target=\"_blank\">${url}</a>");
            Regex emailregex = new Regex(@"(?<url>[a-zA-Z_0-9.-]+\@[a-zA-Z_0-9.-]+\.\w+\s)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
            arg = emailregex.Replace(arg, " <a href=\"mailto:${url}\">${url}</a> ");
            return arg;
        }
    }
}