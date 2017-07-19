using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.IO;
using System.Text.RegularExpressions;
using AlexPilotti.FTPS.Client;
using AlexPilotti.FTPS.Common;
using Havas.Common.Filesystem;

namespace Havas.Common.Filesystem
{
    public class FtpUtil
    {

        /// <summary>
        /// Creates the directory with the specified path. If any parent directories doesn't exist, they will be created. 
        /// The "requestDirUri" variable must be a full path including the "ftp" protocol.
        /// 
        /// Note: This method is using AlexPilotti FTPS library.
        /// </summary>
        /// <param name="requestDirUri">The request dir URI (ex: ftp://xxxx/xxxx/xxxx ) .</param>
        /// <param name="credential">The credential.</param>
        public static void CreateDirectory(string requestDirUri, NetworkCredential credential)
        {

            using (var client = new FTPSClient())
            {
                var address = Regex.Match(requestDirUri, @"^(ftp://)?(\w*|.?)*/").Value.Replace("ftp://", "").Replace("/", "");
                var dirs = Regex.Split(requestDirUri.Replace(address, "").Replace("ftp://", ""), "/").Where(x => x.Length > 0);

                client.Connect(address, credential, ESSLSupportMode.ClearText);
                foreach (var dir in dirs)
                {
                    try
                    {
                        client.MakeDir(dir);
                    }
                    catch (FTPException)
                    {
                    }
                    client.SetCurrentDirectory(dir);
                }
            }
        }

        /// <summary>
        /// Creates a directory. The connection group will be ignored if keepAlive is set to false
        /// </summary>
        /// <param name="requestDirUri">The request dir URI.</param>
        /// <param name="credential">The credential.</param>
        /// <param name="ftpSetting">The FTP setting.</param>
        public static void CreateDirectory(string requestDirUri, NetworkCredential credential, FtpSetting ftpSetting)
        {
            // Create FtpWebRequest object from the Uri provided
            FtpWebRequest reqFTP = (FtpWebRequest)FtpWebRequest.Create(requestDirUri);

            // Provide the WebPermission Credintials
            reqFTP.Credentials = credential;

            // Set transfer mode. By default passive is used if not set
            reqFTP.UsePassive = ftpSetting.UsePassive;

            // By default KeepAlive is true, where the control connection is not closed after a command is executed.
            reqFTP.KeepAlive = ftpSetting.KeepAlive;

            // Set Connection Group Name if keep alive is true
            if (reqFTP.KeepAlive)
            {
                reqFTP.ConnectionGroupName = ftpSetting.ConnectionGroup;
            }

            // Specify the command to be executed.
            reqFTP.Method = WebRequestMethods.Ftp.MakeDirectory;

            try
            {
                using (FtpWebResponse response = (FtpWebResponse)reqFTP.GetResponse())
                {

                }

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        /// <summary>
        /// Upload a file t a Ftp server. The connection group will be ignored if keepAlive is set to false
        /// </summary>
        /// <param name="sourceFilePath">The source file path.</param>
        /// <param name="requestDirUri">The request dir URI.</param>
        /// <param name="credential">The credential.</param>
        /// <param name="keepAlive">if set to <c>true</c> connection [keeps alive] and will be reused.</param>
        /// <param name="connectionGroup">The connection group. It will be ignored if keepAlive is set to <c>false</c></param>
        /// <returns>true of false</returns>
        public static bool UploadFile(string sourceFilePath, string requestDirUri, NetworkCredential credential, FtpSetting ftpSetting)
        {
            //Get file information based on the file path
            FileInfo fileInf = new FileInfo(sourceFilePath);

            //Get the full Ftp URI for the file to be uploaded
            string requestFileUri = requestDirUri.TrimEnd('/') + "/" + fileInf.Name;


            // Create FtpWebRequest object from the Uri provided
            FtpWebRequest reqFTP = (FtpWebRequest)FtpWebRequest.Create(requestFileUri);

            // Provide the WebPermission Credintials
            reqFTP.Credentials = credential;

            // Set transfer mode. By default passive is used if not set
            reqFTP.UsePassive = ftpSetting.UsePassive;

            // By default KeepAlive is true, where the control connection is not closed after a command is executed.
            reqFTP.KeepAlive = ftpSetting.KeepAlive;

            // Set Connection Group Name if keep alive is true
            if (reqFTP.KeepAlive)
            {
                reqFTP.ConnectionGroupName = ftpSetting.ConnectionGroup;
            }

            // Specify the command to be executed.
            reqFTP.Method = WebRequestMethods.Ftp.UploadFile;

            // Specify the data transfer type.
            reqFTP.UseBinary = true;

            // Notify the server about the size of the uploaded file
            reqFTP.ContentLength = fileInf.Length;

            // The buffer size is set to 2kb
            int buffLength = 2048;
            byte[] buff = new byte[buffLength];
            int contentLen = 0;

            FileStream fs = null;
            Stream strm = null;

            try
            {
                // Opens a file stream (System.IO.FileStream) to read the file to be uploaded
                fs = fileInf.OpenRead();

                // Stream to which the file to be upload is written
                strm = reqFTP.GetRequestStream();

                // Read from the file stream 2kb at a time
                contentLen = fs.Read(buff, 0, buffLength);

                // Till Stream content ends
                while (contentLen != 0)
                {
                    // Write Content from the file stream to the FTP Upload Stream
                    strm.Write(buff, 0, contentLen);
                    contentLen = fs.Read(buff, 0, buffLength);
                }

            }
            catch (WebException ex)
            {
                if (ex.Response != null)
                {
                    FtpWebResponse response = (FtpWebResponse)ex.Response;
                    if (response.StatusCode == FtpStatusCode.ActionNotTakenFileUnavailable)
                    {
                        // Create directory                           
                        //CreateDirectory(requestDirUri, credential, keepAlive, connectionGroup);

                        CreateDirectory(requestDirUri, credential);

                        //return UploadFile(sourceFilePath, requestDirUri, credential, keepAlive, connectionGroup);
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                // Close the file stream and the Request Stream
                if ((strm != null))
                {
                    strm.Close();
                }

                if ((fs != null))
                {
                    fs.Close();
                }

            }

            return true;

        }

        /// <summary>
        /// Dowanload a file from FTP server
        /// </summary>
        /// <param name="saveDestinationDir">The save destination dir.</param>
        /// <param name="requestDirUri">The request dir URI.</param>
        /// <param name="requestFileName">Name of the request file.</param>
        /// <param name="credential">The credential.</param>
        /// <param name="keepAlive">if set to <c>true</c> connection [keeps alive] and will be reused.</param>
        /// <param name="connectionGroup">The connection group. It will be ignored if keepAlive is set to <c>false</c></param>
        public static void DownloadFile(string saveDestinationDir, string requestDirUri, string requestFileName, NetworkCredential credential, FtpSetting ftpSetting)
        {
            FtpWebRequest reqFTP = default(FtpWebRequest);
            FtpWebResponse response = null;
            Stream ftpStream = null;
            FileStream outputStream = null;

            try
            {
                string requestFileUri = null;

                if ((requestDirUri.EndsWith("/")))
                {
                    requestFileUri = requestDirUri + requestFileName;
                }
                else
                {
                    requestFileUri = requestDirUri + "/" + requestFileName;
                }

                reqFTP = (FtpWebRequest)FtpWebRequest.Create(requestFileUri);

                // Set transfer mode. By default passive is used if not set
                reqFTP.UsePassive = ftpSetting.UsePassive;

                // By default KeepAlive is true, where the control connection is not closed after a command is executed.
                reqFTP.KeepAlive = ftpSetting.KeepAlive;

                // Set Connection Group Name if keep alive is true
                if (reqFTP.KeepAlive)
                {
                    reqFTP.ConnectionGroupName = ftpSetting.ConnectionGroup;
                }

                reqFTP.Method = WebRequestMethods.Ftp.DownloadFile;
                reqFTP.UseBinary = false;
                reqFTP.Credentials = credential;

                response = (FtpWebResponse)reqFTP.GetResponse();
                ftpStream = response.GetResponseStream();

                long cl = response.ContentLength;
                int bufferSize = 2048;
                int readCount = 0;
                byte[] buffer = new byte[bufferSize];


                string saveFilePath = null;

                saveFilePath = DirectoryUtil.AddEndingSlash(saveDestinationDir) + requestFileName;

                outputStream = new FileStream(saveFilePath, FileMode.Create);

                readCount = ftpStream.Read(buffer, 0, bufferSize);
                while (readCount > 0)
                {
                    outputStream.Write(buffer, 0, readCount);
                    readCount = ftpStream.Read(buffer, 0, bufferSize);
                }

                ftpStream.Close();
                outputStream.Close();
                response.Close();


            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (ftpStream != null)
                    ftpStream.Close();

                if (outputStream != null)
                    outputStream.Close();

                if (response != null)
                    response.Close();

            }

        }

        /// <summary>
        /// Get a list of files in a directory on FTP server. The request Dir URI must be full path, Ex. "ftp://abc.com/xyz/"
        /// </summary>
        /// <param name="requestDirUri">Ftp URI of the requested directory</param>
        /// <param name="credential">Network credential object</param>
        /// <param name="withDetails">if set to <c>true</c> [with details].</param>
        /// <param name="keepAlive">if set to <c>true</c> connection [keeps alive] and will be reused.</param>
        /// <param name="connectionGroup">The connection group. It will be ignored if keepAlive is set to <c>false</c></param>
        /// <returns>
        /// List of files in String format
        /// </returns>
        public static List<string> GetListOfFilesInDirectory(string requestDirUri, NetworkCredential credential, bool withDetails, FtpSetting ftpSetting)
        {
            List<string> files = new List<string>();
            FtpWebRequest request = null;
            FtpWebResponse response = null;
            Stream responseStream = null;
            StreamReader reader = null;

            try
            {
                request = (FtpWebRequest)FtpWebRequest.Create(requestDirUri);

                // Set transfer mode. By default passive is used if not set
                request.UsePassive = ftpSetting.UsePassive;

                // By default KeepAlive is true, where the control connection is not closed after a command is executed.
                request.KeepAlive = ftpSetting.KeepAlive;

                // Set Connection Group Name if keep alive is true
                if (request.KeepAlive)
                {
                    request.ConnectionGroupName = ftpSetting.ConnectionGroup;
                }

                request.Credentials = credential;
                request.UsePassive = true;
                request.UseBinary = true;

                if ((withDetails))
                {
                    request.Method = WebRequestMethods.Ftp.ListDirectoryDetails;
                }
                else
                {
                    request.Method = WebRequestMethods.Ftp.ListDirectory;
                }


                response = (FtpWebResponse)request.GetResponse();
                responseStream = response.GetResponseStream();

                reader = new StreamReader(responseStream);

                while (!reader.EndOfStream)
                {
                    string fileName = reader.ReadLine();

                    if ((!fileName.Equals(".") & !fileName.Equals("..")))
                    {
                        files.Add(fileName);
                    }
                }

            }
            catch (Exception ex)
            {
                throw ex;


            }
            finally
            {
                if ((response != null))
                {
                    response.Close();
                }

                if ((responseStream != null))
                {
                    responseStream.Close();
                }

                if ((reader != null))
                {
                    reader.Close();
                }

            }

            return files;

        }

        /// <summary>
        /// Get the timestamp of an item based on the request uri.
        /// </summary>
        /// <param name="requestUri">the request URI</param>
        /// <param name="credential">credential information</param>
        /// <param name="keepAlive">if set to <c>true</c> connection [keeps alive] and will be reused.</param>
        /// <param name="connectionGroup">The connection group. It will be ignored if keepAlive is set to <c>false</c></param>
        /// <returns>
        /// The timestamp as DateTime object
        /// </returns>
        public static DateTime GetTimeStamp(string requestUri, NetworkCredential credential, FtpSetting ftpSetting)
        {

            DateTime timestamp = default(DateTime);
            FtpWebRequest request = null;

            try
            {
                request = (FtpWebRequest)FtpWebRequest.Create(requestUri);

                // By default KeepAlive is true, where the control connection is not closed after a command is executed.
                request.KeepAlive = ftpSetting.KeepAlive;

                // Set Connection Group Name if keep alive is true
                if (request.KeepAlive)
                {
                    request.ConnectionGroupName = ftpSetting.ConnectionGroup;
                }

                request.Credentials = credential;
                request.UsePassive = ftpSetting.UsePassive;
                request.UseBinary = false;

                request.Method = WebRequestMethods.Ftp.GetDateTimestamp;

                using (FtpWebResponse response = (FtpWebResponse)request.GetResponse())
                {
                    timestamp = response.LastModified;
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }

            return timestamp;

        }


        /// <summary>
        /// Delete a list of files from FTP server based on the requested URIs.
        /// </summary>
        /// <param name="requestUriList">The list of file URIs on the server</param>
        /// <param name="credential">Login Credential</param>
        /// <param name="keepAlive">if set to <c>true</c> connection [keeps alive] and will be reused.</param>
        /// <param name="connectionGroup">The connection group. It will be ignored if keepAlive is set to <c>false</c></param>
        public static void DeleteFiles(List<string> requestUriList, NetworkCredential credential, FtpSetting ftpSetting)
        {
            try
            {
                foreach (string requestUri in requestUriList)
                {
                    DeleteFile(requestUri, credential, ftpSetting);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Delete a file from FTP server based on the requested URI.
        /// </summary>
        /// <param name="requestUri">The file URI on the server</param>
        /// <param name="credential">Login Credential</param>
        /// <param name="keepAlive">if set to <c>true</c> connection [keeps alive] and will be reused.</param>
        /// <param name="connectionGroup">The connection group. It will be ignored if keepAlive is set to <c>false</c></param>
        /// <returns>true of false</returns>
        public static bool DeleteFile(string requestUri, NetworkCredential credential, FtpSetting ftpSetting)
        {

            bool status = false;
            FtpWebRequest request = null;

            try
            {

                request = (FtpWebRequest)FtpWebRequest.Create(requestUri);

                request.Credentials = credential;

                // By default KeepAlive is true, where the control connection is not closed after a command is executed.
                request.KeepAlive = ftpSetting.KeepAlive;

                // Set Connection Group Name if keep alive is true
                if (request.KeepAlive)
                {
                    request.ConnectionGroupName = ftpSetting.ConnectionGroup;
                }

                request.UsePassive = ftpSetting.UsePassive;
                request.Method = WebRequestMethods.Ftp.DeleteFile;

                using (FtpWebResponse response = (FtpWebResponse)request.GetResponse())
                {
                    response.Close();
                    status = true;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return status;
        }
    }
}
