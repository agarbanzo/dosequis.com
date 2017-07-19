using DosEquis.Com;
using DosEquis.Com.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Havas.Social.Aggregator.Moderate.Models;
using DosEquis.Com.Core.Entities;

namespace Havas.Social.Aggregator.Moderate.Controllers
{
    [Authorize]
    public class SkyWritingController : Controller
    {
        private SkyWritngContestRepository _skyWritingContestRepository;

        public SkyWritingController()
        {
            _skyWritingContestRepository = new SkyWritngContestRepository(new DosEquisEntities());
        }

        public ActionResult Index()
        {
            var entries = _skyWritingContestRepository.GetAllOrderByDate();
            var model = new SkyWritingsModel();
            model.Entries = entries;
            model.TotalCount = entries.Count;

            return View(model);
        }

        public ActionResult Update(int Id, bool status,string type="approved")
        {

            bool response = _skyWritingContestRepository.UpdateStatus(Id, type, status);

            return response? Content("Success"): Content("Error");
        }


    }
}
