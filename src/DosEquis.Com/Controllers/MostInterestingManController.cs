using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class MostInterestingManController : ControllerBase
    {
        [Route("the-most-interesting-man")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("mostinterestingman")
         Route("videos/dos-equis-commercials")
         Route("videos")
         Route("most-interesting-man")
         Route("themostinterestingman")
         Route("interestingman")
         Route("mostinterestingman")
         Route("interesting")
         Route("mim")]
        public ActionResult Redirect()
        {
            return RedirectToActionPermanent("Index");
        }
    }
}