using System;
using System.Diagnostics;
using JMS.Common.Constants;
using NHibernate;

namespace Havas.Common.DAO
{
    public abstract class AbstractHibernateDAO
    {
        protected T GetObject<T>(Object id)
        {
            ISession session = HibernateManager.Instance.GetSession();

            return session.Get<T>(id);
        }

        protected void SaveObject(Object obj)
        {
            ISession session = HibernateManager.Instance.GetSession();
            HibernateManager.Instance.BeginTransaction();

            try
            {
                session.Save(obj);
            }
            catch (Exception ex)
            {
				Trace.Write(ex.Message + ex.Source + ex.StackTrace);
				Trace.Write(ex.InnerException.Message);
                HibernateManager.Instance.RollbackTransaction();
            }

            HibernateManager.Instance.CommitTransaction();
        }

        protected void UpdateObject(Object obj)
        {
            ISession session = HibernateManager.Instance.GetSession();
            HibernateManager.Instance.BeginTransaction();

            try
            {
                session.Update(obj);
            }
            catch (Exception)
            {
                HibernateManager.Instance.RollbackTransaction();
            }

            HibernateManager.Instance.CommitTransaction();
        }

        protected void SaveOrUpdateObject(Object obj)
        {
            ISession session = HibernateManager.Instance.GetSession();
            HibernateManager.Instance.BeginTransaction();

            try
            {
                session.SaveOrUpdate(obj);
            }
            catch (Exception)
            {
                HibernateManager.Instance.RollbackTransaction();
            }

            HibernateManager.Instance.CommitTransaction();
        }

        protected void DeleteObject<T>(Object id) where T : class
        {
            ISession session = HibernateManager.Instance.GetSession();
            HibernateManager.Instance.BeginTransaction();

            try
            {
                var obj = session.Get<T>(id);

                if (obj == null)
                {
                    throw new AppException(UserFriendlyErrorMessage.NonExistingRecord);
                }

                session.Delete(obj);
            }
            catch (Exception)
            {
                HibernateManager.Instance.RollbackTransaction();
            }

            HibernateManager.Instance.CommitTransaction();
        }

        protected void DeleteObject(Object obj)
        {
            ISession session = HibernateManager.Instance.GetSession();
            HibernateManager.Instance.BeginTransaction();

            try
            {
                session.Delete(obj);
            }
            catch (Exception)
            {
                HibernateManager.Instance.RollbackTransaction();
            }

            HibernateManager.Instance.CommitTransaction();
        }
    }
}