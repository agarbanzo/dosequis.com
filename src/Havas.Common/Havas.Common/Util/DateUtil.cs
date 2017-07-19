using System;
using System.Collections.Generic;
using System.Text;
using Havas.Common.Constants;

namespace Havas.Common.Util
{
    public class DateUtil
    {
        /// <summary>
        /// Coverts a UnixTimeStamp to local DateTime.
        /// </summary>
        /// <param name="unixTimeStamp"></param>
        /// <returns></returns>
        public static DateTime UnixTimeStampToDateTime(double unixTimeStamp)
        {
            // Unix timestamp is seconds past epoch
            var dtDateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0);
            dtDateTime = dtDateTime.AddSeconds(unixTimeStamp).ToLocalTime();
            return dtDateTime;
        }

        public static double DateTimeToUnixTimeStamp(DateTime dateTime)
        {

            DateTime unixStart = new DateTime(1970, 1, 1, 0, 0, 0, 0, System.DateTimeKind.Utc);
            long unixTimeStampInTicks = (dateTime.ToUniversalTime() - unixStart).Ticks;
            return (double)unixTimeStampInTicks / TimeSpan.TicksPerSecond;

        }

        ///<summary>
        /// Gets the date in EST
        ///</summary>
        ///<returns></returns>
        public static DateTime GetTodaysDateEastern()
        {
            TimeZoneInfo utcTimeZone = TimeZoneInfo.FindSystemTimeZoneById("UTC");
            TimeZoneInfo estTimeZone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
            DateTime easternNow = TimeZoneInfo.ConvertTime(DateTime.UtcNow, utcTimeZone, estTimeZone);
            return easternNow;
        }

        /// <summary>
        /// Gets the name of the month.
        /// </summary>
        /// <param name="month">The month number.</param>
        /// <returns></returns>
        public static string GetMonthName(int month)
        {
            string monthName = null;
            switch (month)
            {
                case 1:
                    monthName = Month.January.ToString();
                    break;
                case 2:
                    monthName = Month.February.ToString();
                    break;
                case 3:
                    monthName = Month.March.ToString();
                    break;
                case 4:
                    monthName = Month.April.ToString();
                    break;
                case 5:
                    monthName = Month.May.ToString();
                    break;
                case 6:
                    monthName = Month.June.ToString();
                    break;
                case 7:
                    monthName = Month.July.ToString();
                    break;
                case 8:
                    monthName = Month.August.ToString();
                    break;
                case 9:
                    monthName = Month.September.ToString();
                    break;
                case 10:
                    monthName = Month.October.ToString();
                    break;
                case 11:
                    monthName = Month.November.ToString();
                    break;
                case 12:
                    monthName = Month.December.ToString();
                    break;
                default:
                    break;
            }

            return monthName;

        }// end of function

        /// <summary>
        /// Gets value of the month by name.
        /// </summary>
        /// <param name="month">The month.</param>
        /// <returns></returns>
        public static int GetMonthByName(string monthName)
        {
            //string monthName = null;
            //common.constants.Month month = Month.January;
            int month;

            switch (monthName)
            {
                case "January":
                    month = 1;
                    break;
                case "February":
                    month = 2;
                    break;
                case "March":
                    month = 3;
                    break;
                case "April":
                    month = 4;
                    break;
                case "May":
                    month = 5;
                    break;
                case "June":
                    month = 6;
                    break;
                case "July":
                    month = 7;
                    break;
                case "August":
                    month = 8;
                    break;
                case "September":
                    month = 9;
                    break;
                case "October":
                    month = 10;
                    break;
                case "November":
                    month = 11;
                    break;
                case "December":
                    month = 12;
                    break;
                default:
                    throw new AppException("Invalid month name");
                   
            }

            return month;

        }// end of function

        public static bool CheckAge(DateTime DOB, int minimumAge)
        {
            var minimumDate = DateTime.Now.AddYears(-minimumAge);

            if (DOB.CompareTo(minimumDate) < 0)
                return true;
            else
                return false;          
        }


    }//end of class
}