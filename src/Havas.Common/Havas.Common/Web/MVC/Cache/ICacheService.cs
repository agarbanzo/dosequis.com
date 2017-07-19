namespace Havas.Common.Web.MVC.Cache
{
    public interface ICacheService
    {
        T Get<T>(string key) where T : class;
        T Set<T>(string key, double expirationMinutes, T item) where T : class;
    }
}
