using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Text;
using System.Data;

namespace Havas.Common.DAO
{
    public class BaseDbRepository<T> where T : class
    {

        protected DbContext db;

        protected DbSet<T> dbSet;

        public BaseDbRepository(DbContext context)
        {
            this.db = context;
            this.dbSet = context.Set<T>();
        }

        /// <summary>
        /// Get the item based on the ID.
        /// </summary>
        /// <param name="id">ID of the item</param>
        /// <returns>Entity that represents the item</returns>
        public virtual T Get(int id)
        {
            return this.dbSet.Find(id);
        }

        /// <summary>
        /// Get all the items.
        /// </summary>
        /// <returns></returns>
        public virtual List<T> GetAll()
        {
            return this.dbSet.ToList();
        }

        /// <summary>
        /// Create a new item.
        /// </summary>
        /// <param name="item">Entity that represents the item</param>
        /// <returns>The created entity that represents the item</returns>
        public virtual T Create(T item)
        {
            this.dbSet.Add(item);
            db.SaveChanges();

            return item;
        }

        /// <summary>
        /// Update the exisiting item based on the passed object.
        /// </summary>
        /// <param name="item">Entity that represents the item</param>
        /// <returns>The updated entity that represents the item</returns>
        public virtual T Update(T item)
        {
            if (db.Entry(item).State == EntityState.Detached)
            {
                this.dbSet.Attach(item);
            }

            db.Entry(item).State = EntityState.Modified;

            db.SaveChanges();

            return item;
        }

        /// <summary>
        /// Delete the item from the system based on the ID
        /// </summary>
        /// <param name="id">ID of the record</param>
        public virtual void Delete(int id)
        {
            T item = this.dbSet.Find(id);
            this.Delete(item);
        }

        /// <summary>
        /// Delete the passed item from the system
        /// </summary>
        /// <param name="item">Entity that represents the item</param>
        public virtual void Delete(T item)
        {
            if (db.Entry(item).State == EntityState.Detached)
            {
                this.dbSet.Attach(item);
            }

            this.dbSet.Remove(item);
            db.SaveChanges();
        }

    }
}
