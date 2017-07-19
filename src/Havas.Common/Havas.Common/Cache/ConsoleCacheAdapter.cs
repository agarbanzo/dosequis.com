using System;
using System.Collections.Generic;

namespace Havas.Common.Cache
{
    public class ConsoleCacheAdapter : ICacheStorage
    {
        private readonly Dictionary<string, CacheItem> _cache = new Dictionary<string, CacheItem>();
        private DateTime _maxCachingDateTime;

        /// <summary>
        /// Creates a cache which holds the cached values for an infinite time.
        /// </summary>
        public ConsoleCacheAdapter()
            : this(DateTime.MaxValue)
        {
        }

        /// <summary>
        /// Creates a cache which holds the cached values for a limited time only.
        /// </summary>
        /// <param name="maxCachingTime">Maximum time for which the a value is to be hold in the cache.</param>
        public ConsoleCacheAdapter(DateTime maxCachingDateTime)
        {
            _maxCachingDateTime = maxCachingDateTime;
        }

        public void Remove(string key)
        {
            _cache.Remove(key);
        }

        public void Store(string key, object data, int expireDate)
        {
            _cache[key] = new CacheItem((object)data);
        }

        public T Retrieve<T>(string key)
        {

            CacheItem cacheItem;
            if (_cache.TryGetValue(key, out cacheItem))
            {
                return (T)Convert.ChangeType(cacheItem.Item, typeof(T));
            }

            return default(T);

        }


        private struct CacheItem
        {
            public CacheItem(object item)
                : this()
            {
                Item = item;
                CacheTime = DateTime.Now;
            }

            public object Item { get; private set; }
            public DateTime CacheTime { get; private set; }
        }
    }
}
