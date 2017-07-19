using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class CollegeFootballController : ControllerBase
    {
        [Route("college-football-playoff")]
        public ActionResult Index()
        {
            return RedirectPermanent("/");
        }
        [Route("cfp"),
          Route("football"),
          Route("collegefootball")]
        public ActionResult Redirects()
        {

            return RedirectPermanent("/");
        }
            
    }
}