using System;
using System.Collections.Generic;
using System.Linq;
using DosEquis.Com.Core.Entities;

namespace DosEquis.Com.Repositories
{
    public class SkyWritngContestRepository : GenericRepository<SkyWritingContest>, ISkyWritingContestRepository
    {
        public SkyWritngContestRepository(IDosEquisEntities context)
            : base(context) { }

        public override SkyWritingContest Create(SkyWritingContest item)
        {
            item.DateEntered = DateTime.Now;
            item.Approved = false;
            item.Finalist = false;
            item.Winner = false;
            return base.Create(item);
        }

        public SkyWritingContest GetByGuid(string guid)
        {
            var result = context.SkyWritingContests.FirstOrDefault(x => x.ImageId == guid);
            return result;
        }

        public List<SkyWritingContest> GetApproved(int pageNum = 1, int pageSize = 8)
        {
            var result = context.SkyWritingContests.Where(x => x.Approved == true).OrderByDescending(x => x.DateEntered);
            return result.Skip((pageNum - 1) * pageSize).Take(pageSize).ToList();
        }

        public List<SkyWritingContest> GetAllOrderByDate()
        {
            var result = context.SkyWritingContests.OrderByDescending(x => x.DateEntered).ToList();
            return result;
        }

        public bool UpdateStatus(int Id, string type, bool Status)
        {
            try
            {
                var entry = context.SkyWritingContests.Where(x => x.Id == Id).FirstOrDefault();
                switch (type)
                {
                    case "approved":
                        entry.Approved = Status;
                        break;
                    case "finalist":
                        entry.Finalist = Status;
                        break;
                    case "winner":
                        entry.Winner = Status;
                        break;

                }
                Update(entry);
                return true;
            }
            catch
            {
                return false;
            }

        }

        public List<SkyWritingContest> GetFinalists(string sorting)
        {

            var results = context.SkyWritingContests.Where(x => x.Finalist == true).AsQueryable();
            if (!string.IsNullOrEmpty(sorting))
            {
                results = results.OrderBy(x => sorting);
            }
            else
            {
                results = results.OrderBy(x => x.FirstName);
            }

            return results.ToList();
        }
    }
}
