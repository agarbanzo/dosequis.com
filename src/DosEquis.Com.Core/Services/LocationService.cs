using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Xml.Linq;

namespace DosEquis.Com.Core.Services
{
    using DosEquis.Com.Models.Services;
    using Entities;
    public class LocationService : ILocationService
    {
        private const string VipCustomerId = "HNK";
        private const string VipSecretKey = "5394A2E9F244HNK166B5EC19B04";
        private const string VipServiceUrl = "https://www.vtinfo.com/PF/product_finder-service.asp";

        public string GetBrandsAndStores()
        {
            string result = null;

            // 1. build the request            
            string querystring = "action=brands";

            ASCIIEncoding encoding = new System.Text.ASCIIEncoding();

            // 2. send the request
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(VipServiceUrl + "?" + querystring);

            SetVipRequestHeaders(request, querystring);

            request.Timeout = 30 * 1000;
            request.Method = "GET";

            // 3. receive response back from VIP server & parse
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {

                    System.IO.Stream receiveStream = response.GetResponseStream();
                    using (System.IO.StreamReader readStream = new System.IO.StreamReader(receiveStream, encoding))
                    {
                        string xml = readStream.ReadToEnd();

                        XDocument doc = XDocument.Parse(xml);

                        result = doc.ToString();
                    }
                }
                else
                {
                    string responseBody = "";

                    System.IO.Stream receiveStream = response.GetResponseStream();
                    using (System.IO.StreamReader readStream = new System.IO.StreamReader(receiveStream, encoding))
                    {
                        responseBody = readStream.ReadToEnd();


                    }

                    throw new Exception("Unexpected Http status code: " + response.StatusCode + "Response: " + responseBody);
                }
            }

            return result;
        }

        public async Task<string> GetBrandsAndStoresAsync()
        {
            var queryString = "action=brands";
            var encoding = new ASCIIEncoding();

            var request = WebRequest.CreateHttp($"{VipServiceUrl}?{queryString}");

            SetVipRequestHeaders(request, queryString);
            request.Timeout = 30 * 1000;
            request.Method = "GET";

            using (var response = (HttpWebResponse)await request.GetResponseAsync())
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {
                    using (var stream = response.GetResponseStream())
                    using (var reader = new StreamReader(stream, encoding))
                    {
                        var xml = reader.ReadToEnd();
                        var doc = XDocument.Parse(xml);
                        return doc.ToString();
                    }
                }
                else
                {
                    using (var stream = response.GetResponseStream())
                    using (var reader = new StreamReader(stream, encoding))
                    {
                        var message = reader.ReadToEnd();
                        throw new Exception("Unexpected Http status code: {response.StatusCode}\nResponse: {message}");
                    }
                }
            }
        }

        /// <summary>
        /// Gets the locations from VIP system based on specified zip code, latitude, longtitude. The pageNumber specifies
        /// which page the results are for. The variable total is output parameter. Page size is not being supported)
        /// </summary>
        /// <param name="total">The total.</param>
        /// <param name="zip">The zip.</param>
        /// <param name="brands">List of brands separated by comma.</param>
        /// <param name="storeCodes">List of store codes separated by comma.</param>
        /// <param name="searchRadiusInMiles">The search radius in miles.</param>
        /// <param name="latitude">The latitude.</param>
        /// <param name="longitude">The longitude.</param>
        /// <param name="pageSize">Size of the page (Not being supportted).</param>
        /// <param name="pageNumber">The page number.</param>
        /// <returns></returns>
        /// <exception cref="System.Exception">Unexpected Http status code:  + response.StatusCode + Response:  + responseBody</exception>
        public List<Location> GetLocations(out int total, string zip, string brands, string storeCodes, double searchRadiusInMiles, string latitude = null, string longitude = null, int pageSize = 20, int pageNumber = 0)
        {
            total = 0;
            List<Location> locations = null;

            // 1. build the request            
            var radius = Math.Ceiling(searchRadiusInMiles);
            if (radius < 1)
                radius = 1;
            else if (radius > 100)
                radius = 100;

            string querystring = "action=results&miles=" + radius + "&zip=" + zip;

            //set brands
            if (!string.IsNullOrEmpty(brands))
            {
                querystring += "&brand=" + HttpUtility.UrlEncode(brands);
            }

            //set store/location types
            if (!string.IsNullOrEmpty(storeCodes))
            {
                querystring += "&storeType=" + HttpUtility.UrlEncode(storeCodes);
            }


            //set page number
            querystring += "&page=" + pageNumber;

            //set latitude
            if (!string.IsNullOrEmpty(latitude))
            {
                querystring += "&lat=" + latitude;
            }

            //set longtitude
            if (!string.IsNullOrEmpty(longitude))
            {
                querystring += "&long=" + longitude;
            }

            var encoding = new ASCIIEncoding();

            // 2. send the request
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(VipServiceUrl + "?" + querystring);

            SetVipRequestHeaders(request, querystring);

            request.Timeout = 30 * 1000;
            request.Method = "GET";

            // 3. receive response back from VIP server & parse
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {

                    System.IO.Stream receiveStream = response.GetResponseStream();
                    using (System.IO.StreamReader readStream = new System.IO.StreamReader(receiveStream, encoding))
                    {
                        string xml = readStream.ReadToEnd();

                        XDocument doc = XDocument.Parse(xml);


                        var totalNode = doc.Descendants("total");
                        var errors = doc.Descendants("errMsg");
                        if (totalNode.Count() == 0 && errors.Count() > 0)
                        {
                            throw new Exception(errors.First().Value);

                        }
                        else
                        {
                            total = int.Parse(doc.Descendants("total").First().Value);


                            var brandList = (brands == null || brands.Contains(",")) ? new List<string>() : brands.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToList();

                            var locationNodes = doc.Descendants("location");

                            var results = from locationNode in locationNodes
                                    //where locationName == null || locationNode.Element("dba").Value.ToLower().Contains(locationName.ToLower())
                                    select new Location()
                                    {
                                        Name = locationNode.Element("dba").Value,
                                        Address = locationNode.Element("street").Value,
                                        Latitude = float.Parse(locationNode.Element("lat").Value),
                                        Longitude = float.Parse(locationNode.Element("long").Value),
                                        Coordinates = new GeoPoint(float.Parse(locationNode.Element("lat").Value), float.Parse(locationNode.Element("long").Value)),
                                        Locality = locationNode.Element("city").Value,
                                        PostalCode = locationNode.Element("zip").Value,
                                        Telephone = locationNode.Element("phone").Value,
                                        Region = locationNode.Element("state").Value,
                                        StoreType = locationNode.Element("storeType").Value,
                                        Brands = locationNode.Element("otherBrands").Descendants().Select(b => b.Value).Concat(brandList).ToList(),
                                        Distance = float.Parse(locationNode.Element("distance").Value),
                                        SearchBrands = brands
                                    };

                            locations = results.ToList();

                        }

                    }
                }
                else
                {
                    string responseBody = "";

                    System.IO.Stream receiveStream = response.GetResponseStream();
                    using (System.IO.StreamReader readStream = new System.IO.StreamReader(receiveStream, encoding))
                    {
                        responseBody = readStream.ReadToEnd();


                    }

                    throw new Exception("Unexpected Http status code: " + response.StatusCode + "Response: " + responseBody);
                }
            }

            return locations;
        }

        public async Task<GetLocationResult> GetLocationsAsync(string zip, string brands, string storeCodes, double searchRadiusInMiles, string latitude = null, string longitude = null, int pageSize = 20, int pageNumber = 0)
        {
            var total = 0;
            string querystring = "action=results&miles=" + searchRadiusInMiles;
            if (!string.IsNullOrEmpty(zip))
            {
                querystring += "&zip=" + zip;
            }
            if (!string.IsNullOrEmpty(brands))
            {
                querystring += "&brand=" + HttpUtility.UrlEncode(brands);
            }
            if (!string.IsNullOrEmpty(storeCodes))
            {
                querystring += "&storeType=" + HttpUtility.UrlEncode(storeCodes);
            }
            querystring += "&page=" + pageNumber + "&pagesize=" + pageSize;

            if (!string.IsNullOrEmpty(latitude))
            {
                querystring += "&lat=" + latitude;
            }
            if (!string.IsNullOrEmpty(longitude))
            {
                querystring += "&long=" + longitude;
            }
            var encoding = new ASCIIEncoding();
            var request = WebRequest.CreateHttp($"{VipServiceUrl}?{querystring}");

            SetVipRequestHeaders(request, querystring);

            request.Timeout = 30 * 1000;
            request.Method = "GET";
            using (var response = (HttpWebResponse)await request.GetResponseAsync())
            {
                if (response.StatusCode == HttpStatusCode.OK)
                {

                    using (Stream receiveStream = response.GetResponseStream())
                    using (StreamReader readStream = new System.IO.StreamReader(receiveStream, encoding))
                    {
                        var xml = readStream.ReadToEnd();
                        var doc = XDocument.Parse(xml);
                        var totalNode = doc.Descendants("total");
                        var errors = doc.Descendants("errMsg");
                        if (totalNode.Count() == 0 && errors.Count() > 0)
                        {
                            throw new Exception(errors.First().Value);

                        }
                        else
                        {
                            if (doc.Descendants("total").Any())
                            {
                                total = int.Parse(doc.Descendants("total").First().Value);
                            }


                            var brandList = (brands == null || brands.Contains(",")) ? new List<string>() : brands.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToList();
                            var locationNodes = doc.Descendants("location");
                            var results = from locationNode in locationNodes
                                              //where locationName == null || locationNode.Element("dba").Value.ToLower().Contains(locationName.ToLower())
                                          select new Location()
                                          {
                                              Name = locationNode.Element("dba").Value,
                                              Address = locationNode.Element("street").Value,
                                              Latitude = float.Parse(locationNode.Element("lat").Value),
                                              Longitude = float.Parse(locationNode.Element("long").Value),
                                              Coordinates = new GeoPoint(float.Parse(locationNode.Element("lat").Value), float.Parse(locationNode.Element("long").Value)),
                                              Locality = locationNode.Element("city").Value,
                                              PostalCode = locationNode.Element("zip").Value,
                                              Telephone = locationNode.Element("phone").Value,
                                              Region = locationNode.Element("state").Value,
                                              StoreType = locationNode.Element("storeType").Value,
                                              Brands = locationNode.Element("otherBrands").Descendants().Select(b => b.Value).Concat(brandList).ToList(),
                                              Distance = float.Parse(locationNode.Element("distance").Value),
                                              SearchBrands = brands
                                          };
                            return new GetLocationResult
                            {
                                Locations = results.ToList(),
                                Total = total
                            };
                        }

                    }
                }
                else
                {
                    string responseBody = "";

                    System.IO.Stream receiveStream = response.GetResponseStream();
                    using (System.IO.StreamReader readStream = new System.IO.StreamReader(receiveStream, encoding))
                    {
                        responseBody = readStream.ReadToEnd();


                    }

                    throw new Exception("Unexpected Http status code: " + response.StatusCode + "Response: " + responseBody);
                }
            }
        }

        private string toHexString(byte[] a)
        {
            StringBuilder sb = new StringBuilder(a.Length * 2 + 2);
            foreach (byte b in a)
            {
                sb.AppendFormat("{0:X2}", b);
            }
            return sb.ToString();
        }

        private void SetVipRequestHeaders(HttpWebRequest request, string querystring)
        {
            //<add key="LocationSearchRadiusInMeters" value="200"/>
            //<add key="VipLocationSearchRadiusInMiles" value="1"/>
            //<add key="FactualResultLimit" value="50"/>
            //<add key="LocationResultTotalLimit" value="100"/>

            string timestamp = String.Format("{0} GMT", DateTime.UtcNow.ToString("ddd, d MMM yyyy HH:mm:00")); // Wed, 1 Dec 2010 12:21:00 GMT
            string signature = timestamp + VipSecretKey + querystring + VipCustomerId;
            var encoding = new ASCIIEncoding();
            SHA256 sha = new SHA256Managed();
            Byte[] hash = sha.ComputeHash(encoding.GetBytes(signature));
            string encrypted = toHexString(hash).ToLower();

            request.Headers.Add("vipCustID", VipCustomerId);
            request.Headers.Add("vipTimestamp", timestamp);
            request.Headers.Add("vipSignature", encrypted);
        }
    }
}
