using DosEquis.Com.Core.Entities;
using Havas.Common.Filesystem;
using Havas.Common.Web.MVC.Cache;
using System;
using System.Configuration;
using System.Linq;

namespace DosEquis.Com.Core.Repositories
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly IFileService _fileService;
        private double cacheDuration = ConfigurationManager.AppSettings["cachedurationmin"] != null ? Convert.ToInt32(ConfigurationManager.AppSettings["cachedurationmin"].ToString()) : 10;

        public RecipeRepository(IFileService fileService)
        {
            _fileService = fileService;
        }

        public Recipe[] GetRecipes()
        {
            return CacheService.Get("recipes", cacheDuration, () => Kelvin<Recipe[]>.FromXml(_fileService.ReadText("recipes.xml")));
        }

        public Recipe GetRecipeById(string Id)
        {
            return CacheService.Get("recipe_" + Id, cacheDuration, () => Kelvin<Recipe[]>.FromXml(_fileService.ReadText("recipes.xml")).FirstOrDefault(x => x.Id == Id));
        }
    }
}
