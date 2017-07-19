using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    public class AboutController : ControllerBase
    {
        [Route("about")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("about-dos-equis")
         Route("aboutdosequis")
         Route("about-dosequis")]
        public ActionResult RedirectIndex()
        {
            return RedirectToActionPermanent("Index");
        }



        [Route("about/history")]
        public ActionResult History()
        {
            return View();
        }

        [Route("thehistory")
         Route("the-history")
         Route("history")
         Route("about/thehistory")
         Route("about/the-history")]
        public ActionResult RedirectHistory()
        {
            return RedirectToActionPermanent("History");
        }



        [Route("about/faq")]
        public ActionResult Faq()
        {
            return View();
        }

        [Route("about/faqs")
         Route("faqs")
         Route("faq")]
        public ActionResult RedirectFaq()
        {
            return RedirectToActionPermanent("Faq");
        }




        [Route("about/brewing")]
        public ActionResult Brewing()
        {
            return View();
        }

        [Route("brewing")
         Route("process")
         Route("about/process")
         Route("our-process")
         Route("about/our-process")]
        public ActionResult RedirectBrewing()
        {
            return RedirectToActionPermanent("Brewing");
        }
    }
}