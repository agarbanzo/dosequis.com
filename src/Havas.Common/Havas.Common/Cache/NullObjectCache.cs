using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Cache
{
    class NullObjectCache : ICacheStorage
    {
        public void Remove(string key)
        {
            // Do nothing
        }
        public void Store(string key, object data, int expireDate)
        {
            // Do nothing
        }
        public T Retrieve<T>(string storageKey)
        {
            return default(T);
        }
    }
}
