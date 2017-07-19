using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace Havas.Common.Cache
{
    public interface ICacheStorage
    {
        void Remove(string key);
        void Store(string key, object data, int expireDate);
        T Retrieve<T>(string key);
    }
}
