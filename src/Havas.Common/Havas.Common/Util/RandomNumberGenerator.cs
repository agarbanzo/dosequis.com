using System;
using System.Security.Cryptography;

namespace Havas.Common.Util
{
    public static class RandomNumberGenerator
    {
        public static int GetInt(int minimum, int maximum)
        {
            if (minimum > maximum) throw new ArgumentException("Maximum must be greater than minimum.", "maximum");
            
            var difference = maximum - minimum;
            return Convert.ToInt32(Math.Floor(difference * GetRandomPercent())) + minimum;
        }
        
        private static double GetRandomPercent()
        {
            using (var rng = new RNGCryptoServiceProvider())
            {
                var randomNumber = new byte[8];
                rng.GetBytes(randomNumber);
                var value = BitConverter.ToUInt32(randomNumber, 0);
                return (double)value / uint.MaxValue;
            }
        }
    }
}
