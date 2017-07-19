using System;

namespace Havas.Common.Cache
{
    public abstract class WebCacheServiceBase
    {
        public readonly System.Web.Caching.Cache HttpCache;

        public WebCacheServiceBase(System.Web.Caching.Cache httpCache)
        {
            HttpCache = httpCache;
        }

        public T GetFromCache<T>(string key)
        {
            return (T)HttpCache.Get(key);
        }

        public void PutInCache(object objectToCache, string key, long cacheDurationMins)
        {
            if (objectToCache != null)
            {
                HttpCache.Add(key, objectToCache, null, DateTime.Now.AddMinutes(cacheDurationMins), System.Web.Caching.Cache.NoSlidingExpiration, System.Web.Caching.CacheItemPriority.Normal, null);
            }
        }

        public T ExecuteAndCache<T>(string key, Func<T> serviceCall, long cacheDurationMins) where T : class
        {
            var data = GetFromCache<T>(key);

            if (data == null)
            {
                data = serviceCall.Invoke();
                PutInCache(data, key, cacheDurationMins);
            }

            return data;
        }
    }
}
