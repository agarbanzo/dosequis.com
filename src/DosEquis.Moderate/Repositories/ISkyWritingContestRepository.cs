using System.Collections.Generic;
using DosEquis.Com.Core.Entities;

namespace DosEquis.Com.Repositories
{
    public interface ISkyWritingContestRepository
    {
        SkyWritingContest GetByGuid(string guid);
        List<SkyWritingContest> GetApproved(int pageNum = 1, int pageSize = 8);
        bool UpdateStatus(int Id, string type, bool Status);
        List<SkyWritingContest> GetAllOrderByDate();
        List<SkyWritingContest> GetFinalists(string sorting);
    }
}
