using AutoMapper;
using DosEquis.Com.Core.Entities;
using Havas.Social.Aggregator.Moderate.Models;

namespace DosEquis.Moderate.App_Start
{
    public static class AutoMappingConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile(new ModerateProfile());
            });
        }

        public class ModerateProfile : Profile
        {
            public ModerateProfile()
            {
                CreateMap<STGContestModel, STGContest>();
                CreateMap<STGContest, STGContestModel>();

                CreateMap<Havas.Social.Aggregator.Entities.SocialFeed, SocialFeedModel>();
                //.ForMember(dest => dest.ImageUrl, opt => opt.MapFrom(src => src.ImageUrl.Replace("s130x130/", "").Replace("v/", "").Replace("_s", "_n")))
            }
        }
    }
}