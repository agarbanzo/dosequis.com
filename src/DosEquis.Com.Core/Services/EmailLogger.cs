using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Text;
using Havas.Common.Util;
using Newtonsoft.Json;

namespace DosEquis.Com.Core.Services
{

    public class EmailLogger : IEmailLogger
    {
        private readonly List<string> Recipients = new List<string>
        {
            "kenji.ogi@havasww.com", "danny.wang@havasww.com", "nytech.havasww@gmail.com"
        };

        private string GetValidationErrors(DbEntityValidationException e)
        {
            var errorMessages = e.EntityValidationErrors
                .SelectMany(x => x.ValidationErrors)
                .Select(x => x.ErrorMessage);
            return string.Join("; ", errorMessages);
        }

        public void Log(Exception exception, object arg)
        {
            var builder = new StringBuilder();
            string subject = null;
            try
            {
                var type = exception.GetType();
                subject = $"[{Environment.MachineName}]: {GetCaller()} threw exception: {type.Name}";
                builder.AppendLine($"MachineName: {Environment.MachineName}");
                builder.AppendLine($"Location: {GetLocation()}");
                var validationException = exception as DbEntityValidationException;
                if (validationException != null)
                {
                    builder.AppendLine($"Validation Errors: {GetValidationErrors(validationException)}");
                }

                builder.AppendLine("Exception:");
                var ex = exception;
                while (ex != null)
                {
                    builder.AppendLine(WriteException(ex));

                    if (ex.InnerException != null)
                    {
                        builder.AppendLine("Inner Exception:");
                    }
                    ex = ex.InnerException;
                }

                if (arg != null)
                {
                    builder.AppendLine("Arguments:");
                    builder.AppendLine(WriteObject(arg));
                }
            }
            catch (Exception)
            {
                // ignored
            }
            EmailUtil.SendEmail("NOREPLY@havasww.com", Recipients, subject, builder.ToString(), false);
        }

        private static string WriteException(Exception exception)
        {
            try
            {
                return JsonConvert.SerializeObject(exception, Formatting.Indented);
            }
            catch (Exception)
            {
                return $"ExceptionType:\n{exception.GetType().FullName}\n\nMessage:\n{exception.Message}\n\nStackTrace:\n{exception.StackTrace}\n\nSource:\n{exception.Source}\n\n";
            }

        }

        private static string WriteObject(object obj)
        {
            try
            {
                return JsonConvert.SerializeObject(obj, Formatting.Indented);
            }
            catch (Exception)
            {
                return $"error writing object: {obj}\n\n";
            }
        }

        private static string GetCaller()
        {
            try
            {
                var frame = new StackFrame(2);
                var method = frame.GetMethod();
                return $"{method.DeclaringType.Name}.{method.Name}";
            }
            catch (Exception)
            {
                return "Failed to get caller";
            }

        }

        private static string GetLocation()
        {
            try
            {
                var frame = new StackFrame(2);
                var method = frame.GetMethod();
                return method.DeclaringType.Assembly.Location;
            }
            catch (Exception)
            {
                return "Getting location failed.";
            }
        }
    }
}