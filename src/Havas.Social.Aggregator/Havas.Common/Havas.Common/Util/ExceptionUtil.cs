using System;
using System.Collections.Generic;
using System.Text;

namespace Havas.Common.Util
{
    /// <summary>
    /// Exception Handler
    /// </summary>
    public class ExceptionUtil
    {
        /// <summary>
        /// Handles the exception.
        /// </summary>
        /// <param name="ex">The ex.</param>
        public static void HandleException(Exception ex)
        {
            //log4net.ILog log = log4net.LogManager.GetLogger(ex.TargetSite.DeclaringType);
            Logger log = Logger.GetInstance(ex.TargetSite.DeclaringType.ToString());

            string stackTrace = ex.StackTrace;
            Exception innerEx = ex.InnerException;

            while (innerEx != null)
            {
                if (innerEx.StackTrace != null)
                    stackTrace += innerEx.StackTrace;

                innerEx = innerEx.InnerException;
            }

            log.Error(ex.TargetSite.Name + ": " + stackTrace);
        }

        /// <summary>
        /// Handles the customized app exception.
        /// </summary>
        /// <param name="ex">The ex.</param>
        public static void HandleAppException(AppException ex)
        {
            HandleException(ex);
        }
    }
}
