using AutoMapper;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Device.Location;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using DosEquis.Com.Core.Entities;
using DosEquis.Com.Models.Services;
using Havas.Common.Extensions;
using Havas.Common.Web.MVC.Cache;

namespace DosEquis.Com.Controllers.Api
{
    public class BarFinderController : ApiControllerBase
    {
        private readonly ILocationService locationService;
        private readonly ICacheService cacheService;
        private readonly int cacheDuration = ConfigurationManager.AppSettings["CacheDurationMin"] != null ? Convert.ToInt32(ConfigurationManager.AppSettings["CacheDurationMin"]) : 10;

        public BarFinderController(ILocationService locationService, ICacheService cacheService)
        {
            this.locationService = locationService;
            this.cacheService = cacheService;
        }

        //[OutputCache(CacheProfile = "StaticPage", VaryByParam = "ZipCode;pageNumber;pageSize;searchRadiusInMiles;X-Requested-With")]
        [HttpGet, Route("api/BarFinder/BrandsAndStores")]
        public async Task<IHttpActionResult> GetBrandsAndStores()
        {
            try
            {
                var brandsAndStores = await locationService.GetBrandsAndStoresAsync();
                return Ok(brandsAndStores);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError, new { ex.Message });
            }
        }

        /// <summary>
        /// Searches the locations.
        /// </summary>
        /// <param name="ZipCode">The zip code.</param>
        /// <param name="brands">The brands.</param>
        /// <param name="storeCodes">The store codes.</param>
        /// <param name="latitude">The latitude.</param>
        /// <param name="longitude">The longitude.</param>
        /// <param name="pageNumber">The page number.</param>
        /// <param name="pageSize">Size of the page.</param>
        /// <param name="searchRadiusInMiles">The search radius in miles.</param>
        /// <returns></returns>
        //[OutputCache(CacheProfile = "StaticPage", VaryByParam = "ZipCode;brands;storeCodes;pageNumber;pageSize;searchRadiusInMiles;X-Requested-With")]
        [HttpGet, Route("api/BarFinder/Search")]
        public async Task<IHttpActionResult> Search(string zipCode = null, string brands = null, string storeCodes = null, string latitude = null, string longitude = null, string centerLatitude = null, string centerLongitude = null, bool fetchall = false, int? pageNumber = 0, int? pageSize = 100, double? searchRadiusInMiles = 50)
        {
            try
            {
                if (fetchall)
                {
                    pageNumber = -1;
                    pageSize = 100;
                }

                var cacheKey = $"{zipCode}-{brands}-{storeCodes}-{latitude}-{longitude}-{pageNumber}-{pageSize}-{searchRadiusInMiles}";
                var model = cacheService.Get<MapModel>(cacheKey);
                if (model != null)
                {
                    model.chached = true;
                }
                else
                {
                    model = await GetMapInfos(zipCode, brands, storeCodes, latitude, longitude, centerLatitude, centerLongitude, fetchall, pageNumber, pageSize, searchRadiusInMiles);
                    cacheService.Set(cacheKey, cacheDuration, model);
                }
                return Ok(model);
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.InternalServerError, new { e.Message });
            }
        }

        /// <summary>
        /// Renders the map.
        /// </summary>
        /// <param name="ZipCode">The zip code.</param>
        /// <param name="brands">The brands.</param>
        /// <param name="storeCodes">The store codes.</param>
        /// <param name="latitude">The latitude.</param>
        /// <param name="longitude">The longitude.</param>
        /// <param name="pageNumber">The page number.</param>
        /// <param name="pageSize">Size of the page.</param>
        /// <param name="searchRadiusInMiles">The search radius in miles.</param>
        /// <returns></returns>
        ////[OutputCache(CacheProfile = "StaticPage", VaryByParam = "ZipCode;brands;storeCodes;pageNumber;pageSize;searchRadiusInMiles;X-Requested-With")]
        //public ActionResult RenderMap(string zipCode = null, string brands = null, string storeCodes = null, string latitude = null, string longitude = null, int? pageNumber = 0, int? pageSize = 20, int? searchRadiusInMiles = 50)
        //{
        //    //MapModel returnMap = GetMapResults(ZipCode);

        //    MapModel returnMap = GetMapInfos(zipCode, brands, storeCodes, latitude, longitude, pageNumber, pageSize, searchRadiusInMiles);

        //    return PartialView("_MapPartial", returnMap);
        //}

        private async Task<MapModel> GetMapInfos(string zipCode, string brands, string storeCodes, string latitude, string longitude, string centerLatitude, string centerLongitude, bool fetchall, int? pageNumber, int? pageSize, double? searchRadiusInMiles)
        {
            if (zipCode.IsNullOrWhitespace() && (latitude.IsNullOrWhitespace() || longitude.IsNullOrWhitespace()))
            {
                throw new Exception("Both zip code and geo location (latitude/longitude) are missing. At least one of them is required.");
            }

            if (brands.IsNullOrWhitespace())
            {
                brands = ConfigurationManager.AppSettings["LocationSearchBrands"];
            }
            else
            {
                var brandList = new List<string>(brands.Split(','));

                var token = "ambar";
                if (brandList.Contains(token, StringComparer.CurrentCultureIgnoreCase))
                {
                    brandList.Remove(token);
                    brandList.Add("Dos Equis Ambar");
                    brandList.Add("Dos Equis Amber"); // added too because the data is messed up sometimes
                }
                token = "amber";
                if (brandList.Contains(token, StringComparer.CurrentCultureIgnoreCase))
                {
                    brandList.Remove(token);
                    brandList.Add("Dos Equis Ambar");
                    brandList.Add("Dos Equis Amber"); // added too because the data is messed up sometimes
                }

                token = "lager";
                if (brandList.Contains(token, StringComparer.CurrentCultureIgnoreCase))
                {
                    brandList.Remove(token);
                    brandList.Add("Dos Equis Lager");
                }

                token = "demexico";
                if (brandList.Contains(token, StringComparer.CurrentCultureIgnoreCase))
                {
                    brandList.Remove(token);
                    brandList.Add("Multi Br Beers of Mexico");
                    brandList.Add("Dos Equis Multi Pack");
                }

                token = "cervezas de mexico";
                if (brandList.Contains(token, StringComparer.CurrentCultureIgnoreCase))
                {
                    brandList.Add("Multi Br Beers of Mexico");
                    brandList.Add("Dos Equis Multi Pack");
                }

                token = "dos equis lager especial";
                if (brandList.Contains(token, StringComparer.CurrentCultureIgnoreCase))
                {
                    brandList.Add("Dos Equis Lager");
                }

                brands = String.Join(",", brandList.Distinct().ToArray());
            }

            if (storeCodes.IsNullOrWhitespace())
            {
                storeCodes = ConfigurationManager.AppSettings["LocationSearchLocationCodes"];
            }

            var mapModel = new MapModel {
                SearchZip = zipCode,
//                SearchLatitude = centerLatitude,
//                SearchLongitude = centerLongitude,
                SearchLatitude = latitude,
                SearchLongitude = longitude,
                SearchRadiusInMiles = searchRadiusInMiles.GetValueOrDefault(),
                PageSize = pageSize.GetValueOrDefault(),
                PageNumber = pageNumber.GetValueOrDefault(),
                PageRadiusInMiles = 0
            };

            var page = mapModel.PageNumber;
            if (fetchall)
                page = 0;

            var result = await locationService.GetLocationsAsync(zipCode, brands, storeCodes, mapModel.SearchRadiusInMiles, latitude, longitude, mapModel.PageSize, page);
            var locationModels = Mapper.Map<List<Location>, List<LocationModel>>(result.Locations);
            mapModel.BarCount = result.Total;


            if (fetchall)
            {
                while (result.Locations.Count == mapModel.PageSize && page < 9)
                {
                    if (result.Locations.Last().Distance > mapModel.SearchRadiusInMiles)
                    {
                        break; // bag out of loop if we are over the radius size
                    }
                    page++;
                    result = await locationService.GetLocationsAsync(zipCode, brands, storeCodes, mapModel.SearchRadiusInMiles, latitude, longitude, mapModel.PageSize, page);
                    if (result.Locations.Count > 0)
                    {
                        locationModels.AddRange(Mapper.Map<List<Location>, List<LocationModel>>(result.Locations));
                    }
                }

                mapModel.PageSize = locationModels.Count;
            }

            GeoCoordinate centerCoord = null;
            if ((!centerLatitude.IsNullOrWhitespace()) && (!centerLongitude.IsNullOrWhitespace()))
            {
                centerCoord = new GeoCoordinate(float.Parse(centerLatitude), float.Parse(centerLongitude));
            }

            foreach (var item in locationModels)
            {
                if (result.Locations.Last().Distance > mapModel.SearchRadiusInMiles)
                { // if it's outside the diameter we are looking for remove it
                    locationModels.Remove(item);
                }
                else
                {
                    if (centerCoord != null)
                    {
                        item.Distance = (float) Math.Round(centerCoord.GetDistanceTo(new GeoCoordinate(item.Latitude, item.Longitude)) / 1609.344, 2);
                    }

                    var token = "Multi Br Beers of Mexico";
                    if (item.DosBrands.Contains(token))
                    {
                        item.DosBrands.Remove(token);
                        item.DosBrands.Add("Cervezas de Mexico");
                        item.Brands.Remove(token);
                        item.Brands.Add("Cervezas de Mexico");
                    }

                    token = "Dos Equis Multi Pack";
                    if (item.DosBrands.Contains(token))
                    {
                        item.DosBrands.Remove(token);
                        item.DosBrands.Add("Cervezas de Mexico");
                        item.Brands.Remove(token);
                        item.Brands.Add("Cervezas de Mexico");
                    }

                    token = "Dos Equis Lager";
                    if (item.DosBrands.Contains(token))
                    {
                        item.DosBrands.Remove(token);
                        item.DosBrands.Add("Dos Equis Lager Especial");
                        item.Brands.Remove(token);
                        item.Brands.Add("Dos Equis Lager Especial");
                    }

                    token = "Dos Equis Amber";
                    if (item.DosBrands.Contains(token))
                    {
                        item.DosBrands.Remove(token);
                        item.DosBrands.Add("Dos Equis Ambar");
                        item.Brands.Remove(token);
                        item.Brands.Add("Dos Equis Ambar");
                    }
                }
            }

            if (locationModels.Any())
            {
                var markers = locationModels.Select(x => new MarkerModel
                {
                    title = x.Name.Trim(),
                    position = new JRaw($"new google.maps.LatLng({x.Latitude},{x.Longitude})"),
                    icon = x.ImageName
                }).ToList();

                mapModel.PageRadiusInMiles = locationModels.Last().Distance;
                mapModel.SearchResults = locationModels;

                // update zip/lat/lon here with what the service found (just in case only or the other was entered)
                if (mapModel.SearchZip.IsNullOrWhitespace())
                    mapModel.SearchZip = locationModels[0].ZipCode;
                if (mapModel.SearchLatitude.IsNullOrWhitespace())
                    mapModel.SearchLatitude = locationModels[0].Latitude.ToString();
                if (mapModel.SearchLongitude.IsNullOrWhitespace())
                    mapModel.SearchLongitude = locationModels[0].Longitude.ToString();

                mapModel.MarkerJSON = JsonConvert.SerializeObject(markers);
                mapModel.MarkerInfoJSON = JsonConvert.SerializeObject(locationModels);
            }
            return mapModel;
        }
    }
}
