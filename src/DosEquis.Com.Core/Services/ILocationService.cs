using DosEquis.Com.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DosEquis.Com.Models.Services
{
    public interface ILocationService
    {
        string GetBrandsAndStores();
        Task<string> GetBrandsAndStoresAsync();

        /// <summary>
        /// Gets the locations from VIP system based on specified zip code, latitude, longtitude. The pageNumber specifies
        /// which page the results are for. The variable total is output parameter.
        /// </summary>
        /// <param name="total">The total.</param>
        /// <param name="zip">The zip.</param>
        /// <param name="brands">List of brands separated by comma.</param>
        /// <param name="storeCodes">List of store codes separated by comma.</param>
        /// <param name="searchRadiusInMiles">The search radius in miles.</param>
        /// <param name="latitude">The latitude.</param>
        /// <param name="longitude">The longitude.</param>
        /// <param name="pageSize">Size of the page.</param>
        /// <param name="pageNumber">The page number.</param>
        /// <returns></returns>
        /// <exception cref="System.Exception">Unexpected Http status code:  + response.StatusCode + Response:  + responseBody</exception>
        Task<GetLocationResult> GetLocationsAsync(string zip, string brands, string storeCodes, double searchRadiusInMiles, string latitude = null, string longitude = null, int pageSize = 20, int pageNumber = 0);
        List<Location> GetLocations(out int total, string zip, string brands, string storeCodes, double searchRadiusInMiles, string latitude = null, string longitude = null, int pageSize = 20, int pageNumber = 0);

    }
}
