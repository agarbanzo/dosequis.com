using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Extensions
{
    public static class DateTimeExtensions
    {
        public static bool IsOfAge(this DateTime dob, int age)
        {
            var minimumDate = DateTime.Now.AddYears(-age);
            return dob <= minimumDate;
        }

        public static double GetUnixEpoch(this DateTime dateTime)
        {
            var unixTime = dateTime.ToUniversalTime() -
                new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

            return unixTime.TotalSeconds;
        }

    }
}
