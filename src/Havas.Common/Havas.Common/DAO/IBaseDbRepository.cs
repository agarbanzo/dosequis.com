using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.DAO
{
    public interface IBaseDbRepository<T> where T : class
    {
        //protected DosEquis_DotComEntities db;

        //protected DbSet<T> dbSet;

        //public IGenericRepository(DosEquis_DotComEntities context);

        /// <summary>
        /// Get the item based on the ID.
        /// </summary>
        /// <param name="id">ID of the item</param>
        /// <returns>Entity that represents the item</returns>
        T Get(int id);

        /// <summary>
        /// Get all the items.
        /// </summary>
        /// <returns></returns>
        List<T> GetAll();

        /// <summary>
        /// Create a new item.
        /// </summary>
        /// <param name="item">Entity that represents the item</param>
        /// <returns>The created entity that represents the item</returns>
        T Create(T item);

        /// <summary>
        /// Update the exisiting item based on the passed object.
        /// </summary>
        /// <param name="item">Entity that represents the item</param>
        /// <returns>The updated entity that represents the item</returns>
        T Update(T item);

        /// <summary>
        /// Delete the item from the system based on the ID
        /// </summary>
        /// <param name="id">ID of the record</param>
        void Delete(int id);

        /// <summary>
        /// Delete the passed item from the system
        /// </summary>
        /// <param name="item">Entity that represents the item</param>
        void Delete(T item);

    }
}
