using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class TermsOfUseController : Controller
    {
        [Route("terms-of-use")]
        public ActionResult Index()
        {
            ViewBag.PassThroughVerified = "true";
            return View();
        }
        
        [Route("legal/terms-of-use"),
         Route("terms"),
         Route("termsofuse")]
        public ActionResult Redirect()
        {
            return RedirectToActionPermanent("Index");
        }
    }
}