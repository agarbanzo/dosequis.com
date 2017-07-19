using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Havas.Social.Aggregator.Moderate.Models;
using Havas.Social.Aggregator.Moderate.Repositories;

namespace Havas.Social.Aggregator.Moderate.Controllers
{
    [Authorize]
    public class HomeController : BaseController
    {
        public ActionResult Index(string id, string page)
        {
            string feedId = id != null ? feedId = id.Replace("-", ".") : string.Empty;
            var pageNumber = page != null ? Convert.ToInt32(page) : 1;

            var model = new FeedModel();
            var feedRepo = new SocialFeedRepository();
            int total;
            model.Feeds = feedRepo.GetFeedsByPage(feedId, pageNumber, model.PageSize, out total);
            model.FeedId = model.Feeds[0].FeedId;
            model.CurrentPage = pageNumber;
            model.TotalCount = total;
            
            return View(model);
        }

        public ActionResult Update(int Id, bool status)
        {
            var feedRepo = new SocialFeedRepository();
            feedRepo.UpdateFeedStatus(Id, status);

            return Content("Success");
        }

       
    }
}
