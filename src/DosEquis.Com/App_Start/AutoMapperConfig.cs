using AutoMapper;
using System.Linq;
using DosEquis.Com.Core.Entities;
using System.Collections.Generic;
using System.Configuration;
using Havas.Common.Extensions;
using Havas.Social.Aggregator.Moderate.Models;
using Havas.Social.Aggregator.Entities;

namespace DosEquis.Com.App_Start
{
    public class AutoMappingConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile<DosEquisProfile>();
            });
        }

        public class DosEquisProfile : Profile
        {
            public DosEquisProfile()
            {
                CreateMap<Location, LocationModel>()
                    .ForMember(dest => dest.City, opt => opt.MapFrom(src => src.Locality))
                    .ForMember(dest => dest.State, opt => opt.MapFrom(src => src.Region))
                    .ForMember(dest => dest.ZipCode, opt => opt.MapFrom(src => src.PostalCode))
                    .ForMember(dest => dest.ImageName, opt => opt.ResolveUsing(GetBarIcon))
                    .ForMember(dest => dest.DosBrands, opt => opt.ResolveUsing(GetDosBrands));
                CreateMap<SocialFeed, SocialFeedModel>();
            }
            //Mapper.CreateMap<EmailSubscribeProfileModel, EmailSubscribeProfile>();
            //Mapper.CreateMap<EmailSubscribeProfileModel, DosEquisEmailSubscribeProfile>();
            //Mapper.CreateMap<SubscribeWithEmailAddressOnlyModel, DosEquisEmailSubscribeProfile>();
            //Mapper.CreateMap<STGContestModel, STGContest>();
            //Mapper.CreateMap<STGContest, STGVideoModel>()
            //    .ForMember(dest => dest.SubmissionRound, opt => opt.MapFrom(src => src.Round))
            //    ;
            //Mapper.CreateMap<ToughMudderRegistrationModel, ToughMudderRegistration>();
            //Mapper.CreateMap<ToughMudderSchedule, ToughMudderScheduleModel>()
            //    .ForMember(dest => dest.LocationAndDate, opt => opt.MapFrom(src => src.Location + " " + src.Date.ToShortDateString()));
            //Mapper.CreateMap<SkyWritingContestModel, SkyWritingContest>();
            //Mapper.CreateMap<SkyWritingContest, SkyWritingContestModel>();
            //Mapper.CreateMap<Havas.Social.Aggregator.SocialFeed, SocialFeedModel>()
            //    //.ForMember(dest => dest.ImageUrl, opt => opt.MapFrom(src => src.ImageUrl.Replace("s130x130/", "").Replace("v/", "").Replace("_s", "_n")))
            //    ;
            //Mapper.CreateMap<FbUser, CiRegistration>()
            //    .ForMember(dest => dest.FacebookId, opts => opts.MapFrom(src => src.facebookId))
            //    .ForMember(dest => dest.Email, opts => opts.MapFrom(src => src.email))
            //    .ForMember(dest => dest.FirstName, opts => opts.MapFrom(src => src.firstName))
            //    .ForMember(dest => dest.LastName, opts => opts.MapFrom(src => src.lastName))
            //    .ForMember(dest => dest.Gender, opts => opts.MapFrom(src => src.gender))
            //    .ForMember(dest => dest.Add_Dttm, opts => opts.Ignore())
            //    .ForMember(dest => dest.AuthResponse, opts => opts.Ignore())
            //    .ForMember(dest => dest.AuthToken, opts => opts.Ignore())
            //    .ForMember(dest => dest.FullName, opts => opts.Ignore())
            //    .ForMember(dest => dest.ImageConfig, opts => opts.Ignore())
            //    .ForMember(dest => dest.MemeUrl, opts => opts.Ignore())
            //    .ForMember(dest => dest.PubKey, opts => opts.Ignore())
            //    .ForMember(dest => dest.Upd_Dttm, opts => opts.Ignore());
            //Mapper.CreateMap<CovetedCollectionPrize, CovetedPrize>().ConvertUsing<CustomCovetedCollectionPrizeConverter>();
            ///*Mapper.CreateMap<List<CovetedCollectionPrize>, CovetedCollection>()
            //        .ForMember(dest => dest.FeaturedItem,
            //            opt => opt.MapFrom(src => src.Where(x=>x.Id==1).ToList()))
            //        .ForMember(dest => dest.ExpiredItems,
            //            opt => opt.MapFrom(src => src.Where(x=> x.ExpireDateTime < DateUtil.GetTodaysDateEastern()).ToList()))
            //        .ForMember(dest => dest.ShowingItems,
            //            opt => opt.MapFrom(src => src.Where(x => x.Id != 1 && x.ExpireDateTime > DateUtil.GetTodaysDateEastern()).ToList()));
            //    ;*/
            //Mapper.CreateMap<List<CovetedCollectionPrize>, CovetedCollection>().ConvertUsing<CustomCovetedCollectionConverter>();
            //Mapper.CreateMap<CovetedCollectionEntry, CovetedCollectionSweep>()
            //    .ForMember(dest => dest.DateEntered, opt => opt.MapFrom(src => DateUtil.GetTodaysDateEastern().Date))
            //    .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email.ToLower()));
            //Mapper.CreateMap<CiRegistration, CiRegistration>()
            //    .ForMember(dest => dest.Add_Dttm, o => o.Ignore());
            // }

            private List<string> GetDosBrands(Location location)
            {
                string dosbrands = ConfigurationManager.AppSettings["LocationSearchBrands"];
                List<string> availableDosBrands = location.Brands.Where(dosbrands.Contains).ToList();
                return availableDosBrands;
            }

            private string GetBarIcon(Location location)
            {
                string imageDir = ConfigurationManager.AppSettings["ImageDirectory"];
                // Use Dos A Rita image if search for Dos-A-Rita brand
                if (!location.SearchBrands.IsNullOrWhitespace() && location.SearchBrands.ToLower().Equals("dos equis dos-a-rita"))
                {
                    return imageDir + "dos-a-rita.png";
                }
                // Use buffalo wild wing image if location is buffalo wild wing
                if (location.Name.ToLower().Contains("buffalo wild wings"))
                {
                    return imageDir + "buffalo-wild-wing.png";
                }
                // Use bottle image if location is store
                string storeLocationCodes = ConfigurationManager.AppSettings["LocationSearchStoreLocationCodes"];
                if (storeLocationCodes.Contains(location.StoreType))
                {
                    return imageDir + "xx-icon-bottle.png";
                }
                return imageDir + "xx-icon-glass.png";
            }
        }
    }
}