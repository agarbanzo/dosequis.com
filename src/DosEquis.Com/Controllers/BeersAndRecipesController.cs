using DosEquis.Com.Core.Repositories;
using DosEquis.Com.Core.Services;
using System;
using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class BeersAndRecipesController : ControllerBase
    {
        private readonly IRecipeRepository recipeRepository;
        private readonly IBeerRepository beerRepository;
        private readonly IBeerPackRepository beerPackRepository;
        private readonly ILogger logger;

        public BeersAndRecipesController(IRecipeRepository recipeRepository, ILogger logger, IBeerRepository beerRepository, IBeerPackRepository beerPackRepository)
        {
            this.recipeRepository = recipeRepository;
            this.logger = logger;
            this.beerRepository = beerRepository;
            this.beerPackRepository = beerPackRepository;
        }

        [Route("beers-and-recipes")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("the-beer")
         Route("thebeer")
         Route("beersrecipes")
         Route("beersandrecipes")
         Route("beer")
         Route("beer-cocktails")
         Route("beer-cocktails/dos-mosa")
         Route("recipes")]
        public ActionResult Redirect()
        {
            return RedirectToActionPermanent("Index");
        }

        [Route("beers-and-recipes/{id}")]
        public ActionResult ProductDetails(string id)
        {
            try
            {
                if (string.IsNullOrEmpty(id)) throw new ArgumentNullException("id");

                switch (id)
                {
                    case "lager":
                    case "ambar":
                        var beer = beerRepository.GetBeerById(id);
                        return View("ProductDetail", beer);
                    case "cervezas-de-mexico":
                        var beerPack = beerPackRepository.GetBeerPackById(id);
                        return View("BeerPackDetail", beerPack);
                    case "dos-a-rita":
                    case "michelada":
                    case "dos-sidra":
                    case "dos-a-stormy":
                        var recipe = recipeRepository.GetRecipeById(id);
                        return View("RecipeDetail", recipe);
                    default:
                        throw new ArgumentException("Unknown id", "id");
                }
            }
            catch (Exception e)
            {
                logger.LogError(e);
                return new HttpStatusCodeResult(500, e.Message);
            }
        }

        [Route("lager")]
        public ActionResult RedirectToLager()
        {
            return RedirectToActionPermanent("ProductDetails", new { id = "lager" });
        }

        [Route("ambar")
         Route("amber")
         Route("beers-and-recipes/amber")]
        public ActionResult RedirectToAmbar()
        {
            return RedirectToActionPermanent("ProductDetails", new { id = "ambar" });
        }

        [Route("cervezasdemexico")
         Route("beers-and-recipes/cervezasdemexico")
         Route("beers-and-recipes/cdm")
         Route("cdm")]
        public ActionResult RedirectCervezasDeMexico()
        {
            return RedirectToActionPermanent("ProductDetails", new { id = "cervezas-de-mexico" });
        }

        [Route("beers-and-recipes/dosarita")
         Route("beer-cocktails/dos-rita")
         Route("dosarita")]
        public ActionResult RedirectDosARita()
        {
            return RedirectToActionPermanent("ProductDetails", new { id = "dos-a-rita" });
        }

        [Route("beer-cocktails/dos-michelada")
         Route("michelada")]
        public ActionResult RedirectMichelada()
        {
            return RedirectToActionPermanent("ProductDetails", new { id = "michelada" });
        }

        [Route("dos-and-stormy")
         Route("dosandstormy")
         Route("beers-and-recipes/dosandstormy")]
        public ActionResult RedirectDosAStormy()
        {
            return RedirectToActionPermanent("ProductDetails", new { id = "dos-a-stormy" });
        }

        [Route("beers-and-recipes/dossidra")
         Route("beer-cocktails/dos-sidra")
         Route("dossidra")
         Route("dos-sidra")]
        public ActionResult RedirectDosSidra()
        {
            return RedirectToActionPermanent("ProductDetails", new { id = "dos-sidra" });
        }
    }
}