using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class SummerController : ControllerBase
    {
        [Route("summer")]
        public ActionResult Index()
        {
            return View();
        }

        
    }
}
