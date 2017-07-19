using DosEquis.Com.Core.Entities;
using DosEquis.Com.Core.Services;
using DosEquis.Com.Models.Services;
using Havas.Common.Web.MVC.Cache;
using Havas.Social.Aggregator.Service;
using StructureMap;
using StructureMap.Graph;

namespace DosEquis.Com.DependencyResolution
{
    public class DefaultRegistry : Registry
    {
        public DefaultRegistry()
        {
            Scan(scan =>
            {
                scan.TheCallingAssembly();
                //scan.AssembliesFromApplicationBaseDirectory();
                scan.AssemblyContainingType<ZipCode>();
                scan.AssemblyContainingType<ICacheService>();
                scan.WithDefaultConventions();
                scan.With(new ControllerConvention());
            });
            
            For<ILocationService>().Singleton().Use<LocationService>();
            For<IFeedRecorder>().Use<DatabaseFeedRecorder>();
        }
    }
}