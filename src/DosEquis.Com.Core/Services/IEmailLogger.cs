using System;

namespace DosEquis.Com.Core.Services
{
    public interface IEmailLogger
    {
        void Log(Exception exception, object arg);
    }
}
