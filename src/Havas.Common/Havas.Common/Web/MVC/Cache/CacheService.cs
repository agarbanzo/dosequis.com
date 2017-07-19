using System;
using System.Threading.Tasks;
using System.Web;
using Catch = System.Web.Caching.Cache;

namespace Havas.Common.Web.MVC.Cache
{
    public class CacheService : ICacheService
    {
        public T Get<T>(string cacheId) where T : class
        {
            return HttpContext.Current.Cache.Get(cacheId) as T;
        }

        public T Set<T>(string cacheId, double expirationMinutes, T item) where T : class
        {
            try
            {
                var expires = DateTime.Now.Add(TimeSpan.FromMinutes(expirationMinutes));
                HttpContext.Current.Cache.Insert(cacheId, item, null, expires, Catch.NoSlidingExpiration);
                return item;
            }
            catch (ArgumentNullException)
            {
                return default(T);
            }
        }

        public static T Get<T>(string cacheId, double expiration, Func<T> getItemCallback) where T : class
        {
            T item = HttpRuntime.Cache.Get(cacheId) as T;
            if (item == null)
            {
                item = getItemCallback();
                try
                {
                    HttpContext.Current.Cache.Insert(cacheId, item, null, DateTime.Now.Add(TimeSpan.FromMinutes(expiration)), Catch.NoSlidingExpiration);
                }
                catch (ArgumentNullException)
                {
                    return null;
                }
            }
            return item;
        }

        public async static Task<T> GetAsync<T>(string cacheId, double expiration, Func<Task<T>> getItemCallbackAsync) where T : class
        {
            T item = HttpRuntime.Cache.Get(cacheId) as T;
            if (item == null)
            {
                item = await getItemCallbackAsync();
                try
                {
                    HttpContext.Current.Cache.Insert(cacheId, item, null, DateTime.Now.Add(TimeSpan.FromMinutes(expiration)), Catch.NoSlidingExpiration);
                }
                catch (ArgumentNullException)
                {
                    return null;
                }
            }
            return item;
        }

        public static T Set<T>(string cacheId, double expiration, Func<T> getItemCallback) where T : class
        {
            T item = getItemCallback();
            try
            {
                HttpContext.Current.Cache.Insert(cacheId, item, null, DateTime.Now.Add(TimeSpan.FromMinutes(expiration)), Catch.NoSlidingExpiration);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            return item;
        }
    }
}
