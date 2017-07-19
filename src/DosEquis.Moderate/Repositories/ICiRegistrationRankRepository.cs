using DosEquis.Com.Core.Entities;
using System.Collections.Generic;

namespace DosEquis.Com.Core.Repositories
{
    public interface ICiRegistrationRankRepository
    {
        List<vwCiRegistrationRank> GetAllByPage(int pageNumber, int pageSize, out int total, out int totalNull, out int defaultMemeCount, out int modCount, out int realCount);
    }
}
