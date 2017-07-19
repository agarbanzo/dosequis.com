using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using Havas.Common.Extensions;
using DosEquis.Com.Core.Entities;
using DosEquis.Com.Repositories;

namespace DosEquis.Com.Core.Repositories
{
    public class ZipCodeRepository : GenericRepository<ZipCode>, IZipCodeRepository
    {
        public ZipCodeRepository(IDosEquisEntities context)
            : base(context) { }

        public List<ZipCode> Get()
        {
            var result = context.ZipCodes.Take(20).Randomize().ToList();
            return result;
        }

        //public async Task<List<ZipCode>> Get()
        //{
        //    using (var db = new DosEquisEntities())
        //    {
        //        var result = await db.ZipCodes.Take(20)
        //            .ToListAsync()
        //            .ConfigureAwait(false);
        //        result = result.Randomize().ToList();
        //        return result;
        //    }
        //}
    }
}
