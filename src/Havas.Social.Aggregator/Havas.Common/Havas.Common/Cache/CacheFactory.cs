using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Cache
{
    public class CacheFactory
    {


        public static ICacheStorage ReturnCache(int cacheKey)
        {
            switch (cacheKey)
            {
                case 0: return new NullObjectCache();
                case 1: return new HttpContextCacheAdapter();
                default: return new NullObjectCache();
            }

        }
    }
}