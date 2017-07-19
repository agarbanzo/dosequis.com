using System.Web;

namespace Havas.Common.Cache
{
    public class HttpContextCacheAdapter : ICacheStorage
    {
        public void Remove(string key)
        {
            HttpContext.Current.Cache.Remove(key);
        }
        
        public void Store(string key, object data, int expireDate)
        {
            HttpContext.Current.Cache.Insert(key, data, null, System.Web.Caching.Cache.NoAbsoluteExpiration, new System.TimeSpan(0, expireDate, 0));
        }
        
        public T Retrieve<T>(string key)
        {
            T itemStored = (T)HttpContext.Current.Cache.Get(key);
            if (itemStored == null)
                itemStored = default(T);
            return itemStored;
        }
    }
}

