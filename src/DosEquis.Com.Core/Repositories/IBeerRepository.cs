using DosEquis.Com.Core.Entities;

namespace DosEquis.Com.Core.Repositories
{
    public interface IBeerRepository
    {
        Beer[] GetBeers();
        Beer GetBeerById(string Id);
    }
}
