using DosEquis.Com.Core.Entities;

namespace DosEquis.Com.Core.Repositories
{
    public interface IBeerPackRepository
    {
        BeerPack[] GetBeerPacks();
        BeerPack GetBeerPackById(string Id);
    }
}
