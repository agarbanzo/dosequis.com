using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class CincoController : ControllerBase
    {
        [Route("cinco")]
        public ActionResult Index()
        {
            return RedirectPermanent("/");
        }

        [Route("cinco-de-mayo")]
        public ActionResult Redirect()
        {
            return RedirectToActionPermanent("Index");
        }
    }
}