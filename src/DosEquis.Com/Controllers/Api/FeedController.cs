using AutoMapper;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Configuration;
using System.Net;
using System.Web.Http;
using System.Web.Hosting;
using System.Threading.Tasks;
using DosEquis.Com.Core.Repositories;
using DosEquis.Com.Core.Services;
using Havas.Common.Filesystem;
using Havas.Common.Util;
using Havas.Common.Web.MVC.Cache;
using Havas.Social.Aggregator.Model;
using Havas.Social.Aggregator.Moderate.Models;
using Havas.Social.Aggregator.Entities;

namespace DosEquis.Com.Controllers.Api
{
    public class FeedController : ApiControllerBase
    {
        private readonly ISocialFeedRepository socialFeedRepository;
        private readonly ICacheService cacheService;
        private readonly ILogger logger;
        private double cacheDuration = ConfigurationManager.AppSettings["CacheDurationMin"] != null ? Convert.ToInt32(ConfigurationManager.AppSettings["CacheDurationMin"]) : 10;

        public FeedController(ISocialFeedRepository socialFeedRepository, ICacheService cacheService, ILogger logger)
        {
            this.socialFeedRepository = socialFeedRepository;
            this.cacheService = cacheService;
            this.logger = logger;
        }

        //public IHttpActionResult Index(string id)
        //{
        //    FeedModel model = new FeedModel();
        //    model.Id = id != null ? id : model.Sections[0].XmlName;
        //    return View(model);
        //}

        [HttpGet, Route("api/Feed/FeedList")]
        public IHttpActionResult FeedList(DateTime? startDate, string pageName = "", int page = 1)
        {
            try
            {
                startDate = startDate ?? DateTime.Now;

                var feeds = cacheService.Get<List<SocialFeed>>($"{pageName}-{page}-{startDate}");
                if (feeds == null)
                {
                    var path = HostingEnvironment.MapPath($"~/App_Data/{pageName}PageConfig.xml");
                    var pageDef = CacheService.Get("Home_config", cacheDuration, () => Kelvin<List<FeedRequest>>.FromXml(System.IO.File.ReadAllText(path)));

                    feeds = socialFeedRepository.RetrieveFeedByPage(pageName, pageDef, page, startDate.Value)
                        .OrderByDescending(x => x.PostedOn).ToList();
                    feeds = cacheService.Set($"{pageName}-{page}-{startDate}", cacheDuration, feeds);
                }
                var models = Mapper.Map<List<SocialFeed>, List<SocialFeedModel>>(feeds);
                return Ok(new
                {
                    Models = models,
                    StartDate = startDate
                });
            }
            catch (Exception e)
            {
                logger.LogError(e);
                return Content(HttpStatusCode.InternalServerError, new { Message = e.Message });
            }
        }
    }
}
