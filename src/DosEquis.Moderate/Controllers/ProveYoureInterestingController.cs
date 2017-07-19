using System;
using System.Web.Mvc;
using DosEquis.Com;
using DosEquis.Com.Core.Repositories;
using Havas.Social.Aggregator.Moderate.Models;
using DosEquis.Com.Core.Entities;

namespace Havas.Social.Aggregator.Moderate.Controllers
{
    [Authorize]
    public class ProveYoureInterestingController : Controller
    {
        private CiRegistrationRepository ciRegistrationRepository;
        private CiRegistrationRankRepository ciRegistrationRankRepository;

        public ProveYoureInterestingController()
        {
            var context = new DosEquisEntities();
            ciRegistrationRepository = new CiRegistrationRepository(context);
            ciRegistrationRankRepository = new CiRegistrationRankRepository(context);
        }

        public ActionResult Index(string page)
        {
            var pageNumber = page != null ? Convert.ToInt32(page) : 1;
            var model = new CiRegistrationModel();
            int total, invalidMemeCount, defaultMemeCount, modCount, realCount;
            var feeds = ciRegistrationRankRepository.GetAllByPage(pageNumber, model.PageSize, out total, out invalidMemeCount, out defaultMemeCount, out modCount, out realCount);
            model.Entries = feeds;
            model.CurrentPage = pageNumber;
            model.TotalCount = total;
            model.InvalidMemeCount = invalidMemeCount;
            model.DefaultMemeCount = defaultMemeCount;
            model.ModCount = modCount;
            model.Count = realCount;
            return View(model);
        }

        public ActionResult Update(long id, bool isPublished)
        {
            var ciRegistration = ciRegistrationRepository.GetByFacebookId(id);
            ciRegistration.IsModerated = !isPublished;
            var results = ciRegistrationRepository.Update(ciRegistration);
            return results != null ? Content("Success") : Content("Error");
        }

        public ActionResult SetBan(long id, bool isBanned)
        {
            var ciRegistration = ciRegistrationRepository.GetByFacebookId(id);
            ciRegistration.IsBanned = isBanned;
            var results = ciRegistrationRepository.Update(ciRegistration);
            return results != null ? Content("Success") : Content("Error");
        }
        
    }
}
