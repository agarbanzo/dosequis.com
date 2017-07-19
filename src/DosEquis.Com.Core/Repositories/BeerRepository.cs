using DosEquis.Com.Core.Entities;
using Havas.Common.Filesystem;
using Havas.Common.Web.MVC.Cache;
using System;
using System.Configuration;
using System.Linq;

namespace DosEquis.Com.Core.Repositories
{
    public class BeerRepository : IBeerRepository
    {
        private readonly IFileService _fileService;
        private double cacheDuration = ConfigurationManager.AppSettings["cachedurationmin"] != null ? Convert.ToInt32(ConfigurationManager.AppSettings["cachedurationmin"].ToString()) : 10;

        public BeerRepository(IFileService fileService)
        {
            _fileService = fileService;
        }

        public Beer[] GetBeers()
        {
            return CacheService.Get("beers", cacheDuration, () => Kelvin<Beer[]>.FromXml(_fileService.ReadText("beers.xml")));
        }

        public Beer GetBeerById(string Id)
        {
            return CacheService.Get("beer_" + Id, cacheDuration, () => Kelvin<Beer[]>.FromXml(_fileService.ReadText("beers.xml")).FirstOrDefault(x => x.Id == Id));
        }
    }
}
