using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class HomeController : ControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }

        [Route("interestingindex"),
         Route("interesting-index")]
        public ActionResult Redirect()
        {
            return RedirectToActionPermanent("Index");
        }
    }   
}