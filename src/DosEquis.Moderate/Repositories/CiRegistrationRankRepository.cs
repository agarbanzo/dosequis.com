using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using DosEquis.Com.Repositories;
using DosEquis.Com.Core.Entities;

namespace DosEquis.Com.Core.Repositories
{
    public class CiRegistrationRankRepository : GenericRepository<vwCiRegistrationRank>, ICiRegistrationRankRepository
    {
        public CiRegistrationRankRepository(DosEquisEntities context) 
            : base(context) { }

        public List<vwCiRegistrationRank> GetAllByPage(int pageNumber, int pageSize, out int total, out int totalNull, out int defaultMemeCount, out int modCount, out int realCount)
        {
            using (var context = new DosEquisEntities())
            {
                context.Configuration.LazyLoadingEnabled = false;
                ((IObjectContextAdapter)context).ObjectContext.CommandTimeout = 180;

                total = context.vwCiRegistrationRanks.Count();
                realCount = context.CiRegistrations.Count(x => x.MemeUrl != null);
                totalNull = context.CiRegistrations.Count(x => x.MemeUrl == null);
                defaultMemeCount = context.CiRegistrations.Count(x => x.MemeUrl.Contains("/DefaultMemes/"));
                modCount = context.CiRegistrations.Count(x => x.IsModerated);
                //total = total > (pageSize * 100) ? (pageSize * 100) : total;

                var results = context.vwCiRegistrationRanks
                    .OrderBy(x => x.IsModerated)
                    .ThenByDescending(x => x.Upd_Dttm)
                    .Skip((pageNumber - 1) * pageSize)
                    .Take(pageSize);
                return results.ToList();
            }
        }
    }
}
