using System;

namespace Havas.Common.Extensions
{
    public static class LinqExtensions
    {
        public static TSource Set<TSource>(this TSource input,
            Action<TSource> updater)
        {
            updater(input);
            return input;
        }
    }
}