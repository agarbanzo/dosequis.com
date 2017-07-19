using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Havas.Social.Aggregator.Moderate.Controllers
{
    public class EmailsController : BaseController
    {
        //
        // GET: /Email/

        public ActionResult RejectEmail()
        {
            dynamic email = new Postal.Email("RejectEmail");
            email.To = "bin.lin@havasww.com";
            email.HostName = this.GetHostName();
            email.From = "DosEquis<no_reply@dosequis.com>";
            email.Send();            

            
            ViewBag.To = "test@test.com";
            ViewBag.HostName = this.GetHostName();
            ViewBag.From = "DosEquis<no_reply@dosequis.com>";
            

            return View();
        }

    }
}
