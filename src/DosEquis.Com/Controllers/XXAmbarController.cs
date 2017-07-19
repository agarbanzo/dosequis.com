using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class XXAmbarController : ControllerBase
    {
        [Route("xxambar")]
        public ActionResult Index()
        {
                return View();
            
        }

        //[Route("xxambar/index")]
        //public ActionResult Redirect()
        //{
        //    return RedirectToActionPermanent("Index");
        //}

        //[]
        //public ActionResult RedirectToXXAmbar()
        //{
        //    //return RedirectToActionPermanent("/XXAmbar");
        //    return View("XXAmbar");
        //}
    }
}