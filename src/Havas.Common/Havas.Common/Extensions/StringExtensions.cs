using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Reflection;
using System.ComponentModel;
using System.Threading;
using System.Web;
using System.Text.RegularExpressions;
using System.Net;
using System.IO;

namespace Havas.Common.Extensions
{
    public static class StringExtensions
    {
                   

        /// <summary>
        /// Will get the string value for a given enums value, this will
        /// only work if you assign the StringValue attribute to
        /// the items in your enum.
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static string GetStringValue(this Enum value)
        {
            // Get the type
            Type type = value.GetType();

            // Get fieldinfo for this type
            FieldInfo fieldInfo = type.GetField(value.ToString());

            // Get the stringvalue attributes
            StringValueAttribute[] attribs = fieldInfo.GetCustomAttributes(
                typeof(StringValueAttribute), false) as StringValueAttribute[];

            // Return the first if there was a match.
            return attribs.Length > 0 ? attribs[0].Value : null;
        }

        /// <summary>
        /// Gets the description.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns></returns>
        public static string GetDescription(this Enum value)
        {
            // Get the Description attribute value for the enum value
            FieldInfo fi = value.GetType().GetField(value.ToString());
            DescriptionAttribute[] attributes =
                (DescriptionAttribute[])fi.GetCustomAttributes(
                    typeof(DescriptionAttribute), false);

            if (attributes.Length > 0)
            {
                return attributes[0].Description;
            }
            else
            {
                return value.ToString();
            }
        }

        public static string HtmlEncode(this string text)
        {
            return HttpUtility.HtmlEncode(text);
           
           
        }

        public static string ConvertReturnsToBreaks(this string text)
        {
            return text.Replace("\r", "<br/>");
        }

        /*public static bool IsNullOrEmpty(this string text)
        {
            return string.IsNullOrEmpty(text);
        }*/

        public static bool IsNullOrWhitespace(this string text)
        {
            return text == null || string.IsNullOrEmpty(text.Trim());

           
           
        }

        public static string ToTinyUrl(this string Url)
        {
            try
            {
                if (Url.Length <= 12)
                    return Url;
                if (!Url.ToLower().StartsWith("http") && !Url.ToLower().StartsWith("ftp"))
                    Url = "http://" + Url;
                WebResponse webResponse = WebRequest.Create("http://tinyurl.com/api-create.php?url=" + Url).GetResponse();
                using (StreamReader reader = new StreamReader(webResponse.GetResponseStream()))
                    return reader.ReadToEnd();
            }
            catch
            {
                return Url;
            }
        }




        public static string UrlEncode(this string text)
        {
            return HttpUtility.UrlEncode(text);

            
           
        }

        public static string UrlDecode(this string text)
        {
            return HttpUtility.UrlDecode(text);
        }

        public static string ReplaceLinks(this string arg)
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


        /// <summary>
        /// Manually Maps Unicode characters with diacritic marks to their UTF-8 equivalent.
        /// </summary>
        public static string MapUnicodeDiacritics(this string s)
        {
            if (string.IsNullOrEmpty(s))
                return string.Empty;

            //var sb = new StringBuilder();
            var sb = new char[s.Length * 2];

            // Known Character Mappings (UTF-16)
            var pos = 0;
            for (var i = 0; i < s.Length; i++)
            {
                var c = s[i];
                var a = (int)c;
                var n = c.ToString();
                switch (a)
                {
                    case 0x100:
                    case 0x102:
                    case 0x104:
                    case 0x1CD:
                    case 0x1FA:
                    case 0x1EA0:
                    case 0x1EA2:
                    case 0x1EA4:
                    case 0x1EA6:
                    case 0x1EA8:
                    case 0x1EAA:
                    case 0x1EAC:
                    case 0x1EAE:
                    case 0x1EB0:
                    case 0x1EB2:
                    case 0x1EB4:
                    case 0x1EB6:
                        n = "A";
                        break;
                    case 0x01FC:
                        n = "AE";
                        break;
                    case 0x1FD:
                        n = "ae";
                        break;
                    case 0x101:
                    case 0x103:
                    case 0x105:
                    case 0x1CE:
                    case 0x1FB:
                    case 0x1EA5:
                    case 0x1EA7:
                    case 0x1EA9:
                    case 0x1EAB:
                    case 0x1EAD:
                    case 0x1EAF:
                    case 0x1EB1:
                    case 0x1EB3:
                    case 0x1EB5:
                    case 0x1EB7:
                        n = "a";
                        break;
                    case 0x106:
                    case 0x108:
                    case 0x10A:
                    case 0x10C:
                        n = "C";
                        break;
                    case 0x107:
                    case 0x109:
                    case 0x10B:
                    case 0x10D:
                        n = "c";
                        break;
                    case 0x10E:
                    case 0x110:
                        n = "D";
                        break;
                    case 0x10F:
                    case 0x111:
                        n = "d";
                        break;
                    case 0x112:
                    case 0x114:
                    case 0x116:
                    case 0x118:
                    case 0x11A:
                    case 0x1EB8:
                    case 0x1EBA:
                    case 0x1EBC:
                    case 0x1EBE:
                    case 0x1EC0:
                    case 0x1EC2:
                    case 0x1EC4:
                    case 0x1EC6:
                        n = "E";
                        break;
                    case 0x113:
                    case 0x115:
                    case 0x117:
                    case 0x119:
                    case 0x11B:
                    case 0x18F:
                    case 0x259:
                    case 0x1EB9:
                    case 0x1EBB:
                    case 0x1EBD:
                    case 0x1EBF:
                    case 0x1EC1:
                    case 0x1EC3:
                    case 0x1EC5:
                    case 0x1EC7:
                        n = "e";
                        break;
                    case 0x192:
                        n = "f";
                        break;
                    case 0x11C:
                    case 0x11E:
                    case 0x120:
                    case 0x122:
                        n = "G";
                        break;
                    case 0x11D:
                    case 0x11F:
                    case 0x121:
                    case 0x123:
                        n = "g";
                        break;
                    case 0x124:
                    case 0x126:
                        n = "H";
                        break;
                    case 0x125:
                    case 0x127:
                        n = "h";
                        break;
                    case 0x128:
                    case 0x12A:
                    case 0x12C:
                    case 0x12E:
                    case 0x130:
                    case 0x1CF:
                    case 0x1EC8:
                    case 0x1ECA:
                        n = "I";
                        break;
                    case 0x129:
                    case 0x12B:
                    case 0x12D:
                    case 0x12F:
                    case 0x131:
                    case 0x1D0:
                    case 0x1EC9:
                    case 0x1ECB:
                        n = "i";
                        break;
                    case 0x132:
                        n = "IJ";
                        break;
                    case 0x133:
                        n = "ij";
                        break;
                    case 0x134:
                        n = "J";
                        break;
                    case 0x135:
                        n = "j";
                        break;
                    case 0x136:
                        n = "K";
                        break;
                    case 0x137:
                    case 0x138:
                        n = "k";
                        break;
                    case 0x139:
                    case 0x13B:
                    case 0x13D:
                    case 0x13F:
                    case 0x141:
                        n = "L";
                        break;
                    case 0x13A:
                    case 0x13C:
                    case 0x13E:
                    case 0x140:
                    case 0x142:
                        n = "l";
                        break;
                    case 0x143:
                    case 0x145:
                    case 0x147:
                    case 0x14A:
                        n = "N";
                        break;
                    case 0x144:
                    case 0x146:
                    case 0x148:
                    case 0x149:
                    case 0x14B:
                        n = "n";
                        break;
                    case 0x14C:
                    case 0x14E:
                    case 0x150:
                    case 0x1A0:
                    case 0x1D1:
                    case 0x1FE:
                    case 0x1ECC:
                    case 0x1ECE:
                    case 0x1ED0:
                    case 0x1ED2:
                    case 0x1ED4:
                    case 0x1ED6:
                    case 0x1ED8:
                    case 0x1EDA:
                    case 0x1EDC:
                    case 0x1EDE:
                    case 0x1EE0:
                    case 0x1EE2:
                        n = "O";
                        break;
                    case 0x14D:
                    case 0x14F:
                    case 0x151:
                    case 0x1A1:
                    case 0x1D2:
                    case 0x1FF:
                    case 0x1ECD:
                    case 0x1ECF:
                    case 0x1ED1:
                    case 0x1ED3:
                    case 0x1ED5:
                    case 0x1ED7:
                    case 0x1ED9:
                    case 0x1EDB:
                    case 0x1EDD:
                    case 0x1EDF:
                    case 0x1EE1:
                    case 0x1EE3:
                        n = "o";
                        break;
                    case 0x152:
                        n = "OE";
                        break;
                    case 0x153:
                        n = "oe";
                        break;
                    case 0x154:
                    case 0x156:
                    case 0x158:
                        n = "R";
                        break;
                    case 0x155:
                    case 0x157:
                    case 0x159:
                        n = "r";
                        break;
                    case 0x15A:
                    case 0x15C:
                    case 0x15E:
                    case 0x160:
                        n = "S";
                        break;
                    case 0x15B:
                    case 0x15D:
                    case 0x15F:
                    case 0x161:
                    case 0x17F:
                        n = "s";
                        break;
                    case 0x162:
                    case 0x164:
                    case 0x166:
                        n = "T";
                        break;
                    case 0x163:
                    case 0x165:
                    case 0x167:
                        n = "t";
                        break;
                    case 0x168:
                    case 0x16A:
                    case 0x16C:
                    case 0x16E:
                    case 0x170:
                    case 0x172:
                    case 0x1AF:
                    case 0x1D3:
                    case 0x1D5:
                    case 0x1D7:
                    case 0x1D9:
                    case 0x1DB:
                    case 0x1EE4:
                    case 0x1EE6:
                    case 0x1EE8:
                    case 0x1EEA:
                    case 0x1EEC:
                    case 0x1EEE:
                    case 0x1EF0:
                        n = "U";
                        break;
                    case 0x169:
                    case 0x16B:
                    case 0x16D:
                    case 0x16F:
                    case 0x171:
                    case 0x173:
                    case 0x1B0:
                    case 0x1D4:
                    case 0x1D6:
                    case 0x1D8:
                    case 0x1DA:
                    case 0x1DC:
                    case 0x1EE5:
                    case 0x1EE7:
                    case 0x1EE9:
                    case 0x1EEB:
                    case 0x1EED:
                    case 0x1EEF:
                    case 0x1EF1:
                        n = "u";
                        break;
                    case 0x174:
                    case 0x1E80:
                    case 0x1E82:
                    case 0x1E84:
                        n = "W";
                        break;
                    case 0x175:
                    case 0x1E81:
                    case 0x1E83:
                    case 0x1E85:
                        n = "w";
                        break;
                    case 0x176:
                    case 0x178:
                    case 0x1EF2:
                    case 0x1EF4:
                    case 0x1EF6:
                    case 0x1EF8:
                        n = "Y";
                        break;
                    case 0x177:
                    case 0x1EF3:
                    case 0x1EF5:
                    case 0x1EF7:
                    case 0x1EF9:
                        n = "y";
                        break;
                    case 0x179:
                    case 0x17B:
                    case 0x17D:
                        n = "Z";
                        break;
                    case 0x17A:
                    case 0x17C:
                    case 0x17E:
                        n = "z";
                        break;
                }
                for (var j = 0; j < n.Length; j++)
                    sb[pos++] = n[j];
            }
            return new string(sb, 0, pos);
        }

        public static String RemoveDiacritics(this string s)
        {
            if (string.IsNullOrEmpty(s))
                return string.Empty;

            s = s.MapUnicodeDiacritics();

            var strFormD = s.Normalize(NormalizationForm.FormD);
            var sb = new char[strFormD.Length * 2];
            var pos = 0;

            for (var i = 0; i < strFormD.Length; i++)
            {
                var c = strFormD[i];
                var uc = CharUnicodeInfo.GetUnicodeCategory(c);
                if ((uc != UnicodeCategory.NonSpacingMark) && (uc != UnicodeCategory.ModifierLetter))
                    sb[pos++] = c;
            }

            s = new string(sb, 0, pos).Normalize(NormalizationForm.FormC);

            return s;
        }

        private static readonly Dictionary<char, string> SmartQuoteReplacementTable = new Dictionary<char, string>
		                                                                              	{
		                                                                              		{(char) 0x2018, "\'"},
		                                                                              		{(char) 0x2019, "\'"},
		                                                                              		{(char) 0x201A, "\'"},
		                                                                              		{(char) 0x201B, "\'"},
		                                                                              		{(char) 0x201C, "\""},
		                                                                              		{(char) 0x201D, "\""},
		                                                                              		{(char) 0x201E, "\""},
		                                                                              		{(char) 0x2013, "-"},
		                                                                              		{(char) 0x2014, "-"},
		                                                                              		{(char) 0x2015, "-"},
		                                                                              		{(char) 0x202A, "|"},
		                                                                              		{(char) 0x202B, "|"},
		                                                                              		{(char) 0x202C, "|"},
		                                                                              		{(char) 0x202D, "|"},
		                                                                              		{(char) 0x202E, "|"},
		                                                                              		{(char) 0x00A0, " "},
		                                                                              		{(char) 0x2026, "..."},
		                                                                              		{(char) 0x2122, "(TM)"},
		                                                                              		{(char) 0xF0DF, "<--"},
		                                                                              		{(char) 0xF0E0, "-->"},
		                                                                              		{(char) 0xF0E7, "<=="},
		                                                                              		{(char) 0xF0E8, "==>"},
		                                                                              		{(char) 0xF0F3, "<=>"},
		                                                                              	};

        /// <summary>
        /// Replaces MS-Word &quot;smart-quotes&quot; and other formatting (Auto-Correct) with the UTF-8 equivalents.
        /// </summary>
        /// <param name="s"></param>
        /// <returns></returns>
        public static string StraightenQuotes(this string s)
        {
            if (string.IsNullOrEmpty(s))
                return s;

            var sb = new StringBuilder(s.Length);
            for (var i = 0; i < s.Length; i++)
            {
                var c = s[i];
                if (SmartQuoteReplacementTable.ContainsKey(c))
                    sb.Append(SmartQuoteReplacementTable[c]);
                else
                    sb.Append(c);
            }

            return sb.ToString();
        }

        public static string RemoveUrlReservedChars(this string s)
        {
            string result = s;

            for (int i = 0; i < result.Length; i++)
            {
                string c = result[i].ToString();
                if (c.UrlEncode() != c || c == "'")	//UrlEncode function does not encode single quote
                {
                    result = result.Remove(i, 1);
                    i--;
                }
            }

            return result;
        }

        public static string ToTitleCase(this string s)
        {
            var textInfo = Thread.CurrentThread.CurrentCulture.TextInfo;

            return textInfo.ToTitleCase(s);
        }
    }
}
