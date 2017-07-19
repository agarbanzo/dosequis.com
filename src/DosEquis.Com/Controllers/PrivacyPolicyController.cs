using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class PrivacyPolicyController : Controller
    {
        [Route("privacy-policy")]
        public ActionResult Index()
        {
            ViewBag.PassThroughVerified = "true";
            return View();
        }

        [Route("legal/privacy-policy"),
         Route("privacy"),
         Route("privacypolicy")]
        public ActionResult Redirect()
        {
            return RedirectToActionPermanent("Index");
        }
    }
}