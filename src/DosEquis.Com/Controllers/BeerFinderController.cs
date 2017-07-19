using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class BeerFinderController : ControllerBase
    {
        [Route("beer-finder")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("beerfinder"),
         Route("where-to-buy"),
         Route("WhereToBuyBeersOfMexico"),
         Route("wheretobuy")]
        public ActionResult Redirect()
        {
            return RedirectToActionPermanent("Index");
        }
    }
}