using DosEquis.Com.Core.Entities;
using Havas.Common.Filesystem;
using Havas.Common.Web.MVC.Cache;
using System;
using System.Configuration;
using System.Linq;

namespace DosEquis.Com.Core.Repositories
{
    public class BeerPackRepository : IBeerPackRepository
    {
        private readonly IFileService _fileService;
        private double cacheDuration = ConfigurationManager.AppSettings["cachedurationmin"] != null ? Convert.ToInt32(ConfigurationManager.AppSettings["cachedurationmin"].ToString()) : 10;

        public BeerPackRepository(IFileService fileService)
        {
            _fileService = fileService;
        }

        public BeerPack[] GetBeerPacks()
        {
            return CacheService.Get("beerpacks", cacheDuration, () => Kelvin<BeerPack[]>.FromXml(_fileService.ReadText("beer-packs.xml")));
        }

        public BeerPack GetBeerPackById(string Id)
        {
            return CacheService.Get("beerpacks_" + Id, cacheDuration, () => Kelvin<BeerPack[]>.FromXml(_fileService.ReadText("beer-packs.xml")).FirstOrDefault(x => x.Id == Id));
        }
    }
}
