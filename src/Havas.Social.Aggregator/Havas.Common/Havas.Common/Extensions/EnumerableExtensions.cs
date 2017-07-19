using Havas.Common.Util;
using System.Collections.Generic;
using System.Linq;

namespace Havas.Common.Extensions
{
    public static class EnumerableExtensions
    {
        public static IEnumerable<T> Randomize<T>(this IEnumerable<T> enumerable)
        {
            var list = enumerable.ToList();
            var result = new List<T>();

            while (list.Any())
            {
                var index = RandomNumberGenerator.GetInt(0, list.Count - 1);
                result.Add(list[index]);
                list.RemoveAt(index);
            }
            return result;
        }
    }
}
