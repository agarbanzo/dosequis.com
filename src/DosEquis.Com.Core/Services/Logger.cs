using Elmah;
using System;
using System.Web;
using ApplicationException = System.ApplicationException;

namespace DosEquis.Com.Core.Services
{
    
    public class Logger : ILogger
    {
        public void LogError(Exception ex, string message = null)
        {
            try
            {
                if (string.IsNullOrEmpty(message))
                {
                    ErrorSignal.FromCurrentContext().Raise(ex, HttpContext.Current);
                }
                else
                {
                    var exception = new ApplicationException(message, ex);
                    ErrorSignal.FromCurrentContext().Raise(exception, HttpContext.Current);
                }
            }
            catch (Exception)
            {
                //Ignored
            }
        }
    }

}
