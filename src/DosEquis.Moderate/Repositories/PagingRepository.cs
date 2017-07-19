using DosEquis.Com.Core.Entities;
using DosEquis.Com.Repositories;
using PagedList;
using System.Linq;

namespace WebApplication1.Repositories
{
    public abstract class PagingRepository<T> : GenericRepository<T> where T : class
    {
        public PagingRepository(IDosEquisEntities context)
            : base(context)
        {
        }

        protected int GetPageNumber(int startIndex, int pageSize)
        {
            int pageNumber = (int)(startIndex / pageSize) + 1;
            return pageNumber;
        }

        protected IPagedList<T> GetResultPagedList(IQueryable<T> results, int? startIndex = null, int? pageSize = null)
        {
            IPagedList<T> resultList = null;
            //Check if start index and page size are passed, if one of them is missing, use the pre-set vallue.
            if (startIndex.HasValue && pageSize.HasValue)
            {
                int pageNumber = GetPageNumber(startIndex.Value, pageSize.Value);
                resultList = results.ToPagedList(pageNumber, pageSize.Value);
            }
            else
            {
                resultList = results.ToPagedList(1, 100000);
            }
            return resultList;
        }
    }
}
