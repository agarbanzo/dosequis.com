using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Havas.Social.Aggregator.Model;
using System.IO;
using Havas.Common.Filesystem;

namespace Havas.Social.Aggregator.Helper
{
    public class ApiConfigLoader
    {

        public static List<ApiConfig> LoadConfigFromAppConfig(string fileName)
        {
            var fileService = new FileService();

           return Kelvin<List<ApiConfig>>.FromXml(fileService.ReadText(fileName));

        }
    }
}
