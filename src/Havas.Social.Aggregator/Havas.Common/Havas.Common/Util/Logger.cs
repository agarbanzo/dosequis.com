using System;
using System.Collections;
using System.Configuration;
using System.Diagnostics;
using log4net;

namespace Havas.Common.Util
{
    /// <summary>
    /// Class to log errors, messages, debugging information for the project.
    /// </summary>
    public class Logger
    {

        #region private Data Members
        /// <summary>
        /// "Singleton" for the logger instances.
        /// </summary>
        private static Hashtable _loggerInstances = new Hashtable();

        /// <summary>
        /// Tells whether the logging has been initialized yet.
        /// </summary>
        private static bool _hasInited = false;

        /// <summary>
        /// Actual instance of the logger itself from log4net
        /// </summary>
        private ILog _logInstance;
        #endregion

        #region Properties
        #endregion


        /// <summary>
        /// Initializes and fetches a new instance of the logger.
        /// </summary>
        /// <param name="loggerName">A logger instance.</param>
        private Logger(string loggerName)
        {
            this._logInstance = LogManager.GetLogger(loggerName);
        }

        /// <summary>
        /// Initializes the logging.
        /// </summary>
        private static void init()
        {



            string error = "";

            try
            {
                log4net.Config.XmlConfigurator.Configure();
            }
            catch (Exception e)
            {
                error = "error while configuring logger." + e.StackTrace;
            }
            finally
            {
                if (error.Length > 0)
                {//last ditch write an error to the application log
                    try
                    {

                        WriteToEventLog("Application logger could not start logging: " + error, EventLogEntryType.Error);

                    }
                    catch (Exception e)
                    {
                        //TODO:SOMETHING ELSE!
                        string errorMsg = "Logging failed to initialize [" + typeof (Logger) + " - init()]";
                        throw new Exception(errorMsg, e.InnerException);
                    }
                }

                //set the init property
                Logger._hasInited = true;
            }
        }




        /// <summary>
        /// Gets an instance of the Logger class.
        /// </summary>
        /// <param name="loggerName">The name of the logger, The convention here should be the name of the class
        ///							that the logging is occuring in.  For Example  Project.Core.Foo would be passed
        ///							if the logging was occuring in the Foo class.
        ///	</param>
        /// <returns>An instance of the logger class.</returns>
        public static Logger GetInstance(string loggerName)
        {

            //critical section to make sure we don't init twice!!!
            lock (typeof(Logger))
            {
                if (!Logger._hasInited)
                    Logger.init();
            }



            //check for an existing instance of the requested logger
            Logger returnLogger = (Logger)Logger._loggerInstances[loggerName];


            //if its not null create it
            if (returnLogger == null)
            {//this may have to be synchronized...  but it should just replace the existing on in the hashtable if there is an issue
                returnLogger = new Logger(loggerName);
                Logger._loggerInstances[loggerName] = returnLogger;
            }


            return returnLogger;

        }

        /// <summary>
        /// Call this at Application_End
        /// </summary>
        public void ShutDownLogger()
        {
            log4net.LogManager.Shutdown();
        }

        /// <summary>Write a debug message to the log</summary>
        /// <param name="message">The message to write to the log</param>
        public void Debug(string message) { WriteToLog(message, LogLevel.Debug); }


        /// <summary>Write an informational message to the log</summary>
        /// <param name="message">The message to write to the log</param>
        public void Info(string message) { WriteToLog(message, LogLevel.Info); }


        /// <summary>Write a warning message to the log</summary>
        /// <param name="message">The message to write to the log</param>
        public void Warn(string message) { WriteToLog(message, LogLevel.Warn); }


        /// <summary>Write a error message to the log</summary>
        /// <param name="message">The message to write to the log</param>
        public void Error(string message) { WriteToLog(message, LogLevel.Error); }


        /// <summary>Write a fatal message to the log</summary>
        /// <param name="message">The message to write to the log</param>
        public void Fatal(string message) { WriteToLog(message, LogLevel.Fatal); }


        /// <summary>Write a debug message to the log along with its corresponding exception</summary>
        /// <param name="message">The message to write to the log</param>
        /// <param name="ex">The exception to log</param>
        public void Debug(string message, Exception ex) { WriteToLog(message, LogLevel.Debug, ex); }


        /// <summary>Write an inforamtional message to the log along with its corresponding exception</summary>
        /// <param name="message">The message to write to the log</param>
        /// <param name="ex">The exception to log</param>
        public void Info(string message, Exception ex) { WriteToLog(message, LogLevel.Info, ex); }


        /// <summary>Write a warning message to the log along with its corresponding exception</summary>
        /// <param name="message">The message to write to the log</param>
        /// <param name="ex">The exception to log</param>
        public void Warn(string message, Exception ex) { WriteToLog(message, LogLevel.Warn, ex); }

        /// <summary>Write a error message to the log along with its corresponding exception</summary>
        /// <param name="message">The message to write to the log</param>
        /// <param name="ex">The exception to log</param>
        public void Error(string message, Exception ex) { WriteToLog(message, LogLevel.Error, ex); }

        /// <summary>Write a fatal message to the log along with its corresponding exception</summary>
        /// <param name="message">The message to write to the log</param>
        /// <param name="ex">The exception to log</param>
        public void Fatal(string message, Exception ex) { WriteToLog(message, LogLevel.Fatal, ex); }


        /// <summary>
        /// To be used for normal logging.
        /// </summary>
        /// <param name="message">Text that should appear in the log.</param>
        /// <param name="logLevel">Severity level of the log entry.</param>
        public void WriteToLog(string message, LogLevel logLevel)
        {
            switch (logLevel)
            {
                case LogLevel.Debug:
                    this._logInstance.Debug(message);
                    break;

                case LogLevel.Error:
                    this._logInstance.Error(message);
                    break;

                case LogLevel.Fatal:
                    this._logInstance.Fatal(message);
                    break;

                case LogLevel.Info:
                    this._logInstance.Info(message);
                    break;

                case LogLevel.Warn:
                    this._logInstance.Warn(message);
                    break;

            }

        }
        /// <summary>
        /// To be used for normal logging.
        /// </summary>
        /// <param name="message">Text that should appear in the log.</param>
        /// <param name="logLevel">Severity level of the log entry.</param>
        /// <param name="exception">The exception to record a stacktrace from.</param>
        public void WriteToLog(string message, LogLevel logLevel, Exception exception)
        {
            switch (logLevel)
            {
                case LogLevel.Debug:
                    this._logInstance.Debug(message, exception);
                    break;

                case LogLevel.Error:
                    this._logInstance.Error(message, exception);
                    break;

                case LogLevel.Fatal:
                    this._logInstance.Fatal(message, exception);
                    break;

                case LogLevel.Info:
                    this._logInstance.Info(message, exception);
                    break;

                case LogLevel.Warn:
                    this._logInstance.Warn(message, exception);
                    break;

            }

        }



        /// <summary>
        /// To be used for logging conditionals.  If the assertion is false then the message
        /// is logged.
        /// </summary>
        /// <param name="assertion">Condition to be evaluated.</param>
        /// <param name="message">Text that should appear in the log.</param>
        /// <param name="logLevel">Severity level of the log entry.</param>
        public void WriteAssertionToLog(bool assertion, string message, LogLevel logLevel)
        {

            if (!assertion)
            {
                switch (logLevel)
                {
                    case LogLevel.Debug:
                        this._logInstance.Debug(message);
                        break;

                    case LogLevel.Error:
                        this._logInstance.Error(message);
                        break;

                    case LogLevel.Fatal:
                        this._logInstance.Fatal(message);
                        break;

                    case LogLevel.Info:
                        this._logInstance.Info(message);
                        break;

                    case LogLevel.Warn:
                        this._logInstance.Warn(message);
                        break;

                }
            }

        }
        /// <summary>
        /// To be used for logging conditionals.  If the assertion is false then the message
        /// is logged.
        /// </summary>
        /// <param name="assertion">Condition to be evaluated.</param>
        /// <param name="message">Text that should appear in the log.</param>
        /// <param name="logLevel">Severity level of the log entry.</param>
        /// <param name="exception">The exception to record a stacktrace from.</param>
        public void WriteAssertionToLog(bool assertion, string message, LogLevel logLevel, Exception exception)
        {

            if (!assertion)
            {
                switch (logLevel)
                {
                    case LogLevel.Debug:
                        this._logInstance.Debug(message, exception);
                        break;

                    case LogLevel.Error:
                        this._logInstance.Error(message, exception);
                        break;

                    case LogLevel.Fatal:
                        this._logInstance.Fatal(message, exception);
                        break;

                    case LogLevel.Info:
                        this._logInstance.Info(message, exception);
                        break;

                    case LogLevel.Warn:
                        this._logInstance.Warn(message, exception);
                        break;

                }
            }

        }



        /// <summary>
        /// To be used for logging traces, which could be to record usage of a certain method or 
        /// whatever needs to be kept track of.
        /// </summary>
        /// <param name="message">Text that should appear in the log.</param>
        /// <param name="logLevel">Severity level of the log entry.</param>
        public void WriteTraceToLog(string message, LogLevel logLevel)
        {
            switch (logLevel)
            {
                case LogLevel.Debug:
                    this._logInstance.Debug(message);
                    break;

                case LogLevel.Error:
                    this._logInstance.Error(message);
                    break;

                case LogLevel.Fatal:
                    this._logInstance.Fatal(message);
                    break;

                case LogLevel.Info:
                    this._logInstance.Info(message);
                    break;

                case LogLevel.Warn:
                    this._logInstance.Warn(message);
                    break;

            }

        }
        /// <summary>
        /// To be used for logging traces, which could be to record usage of a certain method or 
        /// whatever needs to be kept track of.
        /// </summary>
        /// <param name="message">Text that should appear in the log.</param>
        /// <param name="logLevel">Severity level of the log entry.</param>
        /// <param name="exception">The exception to record a stacktrace from.</param>
        public void WriteTraceToLog(string message, LogLevel logLevel, Exception exception)
        {
            switch (logLevel)
            {
                case LogLevel.Debug:
                    this._logInstance.Debug(message, exception);
                    break;

                case LogLevel.Error:
                    this._logInstance.Error(message, exception);
                    break;

                case LogLevel.Fatal:
                    this._logInstance.Fatal(message, exception);
                    break;

                case LogLevel.Info:
                    this._logInstance.Info(message, exception);
                    break;

                case LogLevel.Warn:
                    this._logInstance.Warn(message, exception);
                    break;

            }

        }

        /// <summary>
        /// Write a message to the event log
        /// </summary>
        /// <param name="message">The message to log to the event log</param>
        /// <param name="logType">The <see cref="EventLogEntryType"/> for the logged message</param>
        private static void WriteToEventLog(string message, EventLogEntryType logType)
        {
            try
            {                
                string logName = ConfigurationManager.AppSettings["ErrorLogName"];
                string evtSource = ConfigurationManager.AppSettings["ErrorLogSource"];

                EventLog evtLog = new EventLog(logName);
                EventLog.WriteEntry(evtSource, message, EventLogEntryType.Error);
            }
            catch { }
        }


    }



    /// <summary>
    /// Enumeration indicating the severity level of the Log.
    /// The most severe being Fatal  and the least severe Debug.
    /// </summary>
    [Serializable]
    public enum LogLevel
    {
        /// <summary>Indicates a debugging log message</summary>
        Debug = 1,

        /// <summary>Indicates an informational log message</summary>
        Info = 2,

        /// <summary>Indicates a warning log message</summary>
        Warn = 4,

        /// <summary>Indicates an error log message</summary>
        Error = 8,

        /// <summary>Indicates a fatal log message</summary>
        Fatal = 16
    }
}
