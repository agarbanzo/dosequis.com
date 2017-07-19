using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using DosEquis.Com.Core.Entities;
using WebApplication1.Repositories;

namespace DosEquis.Com.Repositories
{
    public class STGContestRepository : PagingRepository<STGContest>, ISTGContestRepository
    {
        public STGContestRepository(IDosEquisEntities context)
            : base(context) { }

        public override STGContest Create(STGContest item)
        {
            item.EmailAddress = item.EmailAddress.ToLower();
            item.CreatedDate = DateTime.Now;
            return base.Create(item);
        }

        public List<STGContest> GetApprovedSubmissions(int round)
        {
            var result = context.STGContests.Where(x => x.IsApproved.HasValue && x.IsApproved.Value && x.Round == round).ToList();
            return result;
        }

        public IPagedList<STGContest> Search(int? startIndex = null, int? pageSize = null, string sorting = null, int? round = null, bool? isFinalist = null)
        {
            IPagedList<STGContest> resultList = null;

            var results = context.STGContests.AsQueryable();

            if (round.HasValue)
                results = results.Where(x => x.Round == round.Value);

            if (isFinalist.HasValue)
            {
                if (isFinalist.Value == false)
                {
                    results = results.Where(x => x.IsFinalist == null || x.IsFinalist.Value == false);
                }
                else
                {
                    results = results.Where(x => x.IsFinalist == isFinalist);
                }
            }

            if (!string.IsNullOrEmpty(sorting))
            {
                results = results.OrderBy(x => sorting);
            }
            else
            {
                results = results.OrderBy(x => x.Id);
            }
            resultList = GetResultPagedList(results, startIndex, pageSize);
            return resultList;
        }

        /// <summary>
        /// Update the submission status, which indicates if the submission is approved, is selected as finalist, is rejected, or is a final winner. 
        /// Note, function doesn't contain logic to check agains each other. If it is approved and rejected at the same time, it will still go through.
        /// </summary>
        /// <param name="id">Id of submission</param>
        /// <param name="isApproved">indicates if it is approved</param>
        /// <param name="isFinalist">indicates if it is selected a finalist</param>
        /// <param name="isRejected">indicates if it is rejected</param>
        /// <param name="isWinner">indicates if it is a final winner</param>
        public void UpdateStatus(int id, bool? isApproved = null, bool? isFinalist = null, bool? isRejected = null, bool? isWinner = null)
        {
            var item = Get(id);
            item.IsApproved = isApproved;
            item.IsFinalist = isFinalist;
            item.IsRejected = isRejected;
            item.IsWinner = isWinner;
            this.Update(item);
        }

        public List<int> GetRounds()
        {
            var results = context.STGContests.GroupBy(x => x.Round).Select(y => y.Key);
            return results.ToList();
        }


    }
}
