using DosEquis.Com.Core.Entities;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace DosEquis.Com.Repositories
{
    public class GenericRepository<T> where T : class
    {
        protected IDosEquisEntities context;
        protected DbSet<T> dbSet;

        public GenericRepository(IDosEquisEntities context)
        {

            this.context = context;
            dbSet = context.Set<T>();
        }

        /// <summary>
        /// Get the item based on the ID.
        /// </summary>
        /// <param name="id">ID of the item</param>
        /// <returns>Entity that represents the item</returns>
        public virtual T Get(int id)
        {
            return dbSet.Find(id);
        }

        /// <summary>
        /// Get all the items.
        /// </summary>
        /// <returns></returns>
        public virtual List<T> GetAll()
        {
            return dbSet.ToList();
        }

        /// <summary>
        /// Create a new item.
        /// </summary>
        /// <param name="item">Entity that represents the item</param>
        /// <returns>The created entity that represents the item</returns>
        public virtual T Create(T item)
        {
            dbSet.Add(item);
            context.SaveChanges();
            return item;
        }

        /// <summary>
        /// Update the exisiting item based on the passed object.
        /// </summary>
        /// <param name="item">Entity that represents the item</param>
        /// <returns>The updated entity that represents the item</returns>
        public virtual T Update(T item)
        {
            if (context.Entry(item).State == EntityState.Detached)
            {
                dbSet.Attach(item);
            }
            context.Entry(item).State = EntityState.Modified;
            context.SaveChanges();
            return item;
        }

        /// <summary>
        /// Delete the item from the system based on the ID
        /// </summary>
        /// <param name="id">ID of the record</param>
        public virtual void Delete(int id)
        {
            T item = dbSet.Find(id);
            Delete(item);
        }

        /// <summary>
        /// Delete the passed item from the system
        /// </summary>
        /// <param name="item">Entity that represents the item</param>
        public virtual void Delete(T item)
        {
            if (context.Entry(item).State == EntityState.Detached)
            {
                dbSet.Attach(item);
            }
            dbSet.Remove(item);
            context.SaveChanges();
        }

        //protected int GetPageNumber(int startIndex, int pageSize)
        //{
        //    int pageNumber = (int)(startIndex / pageSize) + 1;

        //    return pageNumber;
        //}

        //protected IPagedList<T> GetResultPagedList(IQueryable<T> results, int? startIndex = null, int? pageSize = null)
        //{
        //    IPagedList<T> resultList = null;
        //    //Check if start index and page size are passed, if one of them is missing, use the pre-set vallue.
        //    if (startIndex.HasValue && pageSize.HasValue)
        //    {
        //        int pageNumber = GetPageNumber(startIndex.Value, pageSize.Value);
        //        resultList = results.ToPagedList(pageNumber, pageSize.Value);
        //    }
        //    else
        //    {
        //        resultList = results.ToPagedList(1, 100000);
        //    }
        //    return resultList;
        //}
   }
}