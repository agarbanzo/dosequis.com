using System;
using System.Collections.Generic;
using System.Web.Mvc;
using Havas.Social.Aggregator.Moderate.Models;
using Havas.Social.Aggregator.Moderate.Repositories;
using AutoMapper;
using Havas.Social.Aggregator.Entities;

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

            var feeds = feedRepo.GetFeedsByPage(feedId, pageNumber, model.PageSize, out total);
            List<SocialFeedModel> socialFeedModels = Mapper.Map<List<SocialFeed>, List<SocialFeedModel>>(feeds);

            model.Feeds = socialFeedModels;
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
