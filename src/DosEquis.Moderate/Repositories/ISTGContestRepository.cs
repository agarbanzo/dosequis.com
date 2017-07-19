using DosEquis.Com.Core.Entities;
using PagedList;
using System.Collections.Generic;

namespace DosEquis.Com.Repositories
{
    public interface ISTGContestRepository
    {
        /// <summary>
        /// Get all the approved submissions.
        /// </summary>
        /// <returns></returns>
        List<STGContest> GetApprovedSubmissions(int round);

        /// <summary>
        /// Search items for a certain round. Items are returned in a PagedList. Items and number of items are returned based on the specified start index and page size.
        /// </summary>
        /// <param name="startIndex">Start Index</param>
        /// <param name="pageSize">Max number of items for a page</param>
        /// <param name="sorting">The sorting column. It is the name of a property in a Entity, not the column name from database</param>
        /// <param name="round">Round</param>
        /// <returns></returns>
        IPagedList<STGContest> Search(int? startIndex = null, int? pageSize = null, string sorting = null, int? round = null, bool? isFinalist = null);

        /// <summary>
        /// Update the submission status, which indicates if the submission is approved, is selected as finalist, is rejected, or is a final winner. 
        /// </summary>
        /// <param name="id">Id of submission</param>
        /// <param name="isApproved">indicates if it is approved</param>
        /// <param name="isFinalist">indicates if it is selected a finalist</param>
        /// <param name="isRejected">indicates if it is rejected</param>
        /// <param name="isWinner">indicates if it is a final winner</param>
        void UpdateStatus(int id, bool? isApproved = null, bool? isFinalist = null, bool? isRejected = null, bool? isWinner = null);
    }
}
