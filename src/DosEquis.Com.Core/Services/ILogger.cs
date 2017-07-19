using System;

namespace DosEquis.Com.Core.Services
{
    public interface ILogger
    {
        void LogError(Exception exception, string message = null);
    }
}