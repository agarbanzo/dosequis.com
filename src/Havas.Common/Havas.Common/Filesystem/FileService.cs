using System;
using System.IO;

namespace Havas.Common.Filesystem
{
    public class FileService : IFileService
    {
        public string ReadText(string filename)
        {
            var pathAndFile = Path.Combine(AppDomain.CurrentDomain.GetData("DataDirectory").ToString(), filename);
            return File.ReadAllText(pathAndFile);
        }

        public void SaveText(string filename, string text)
        {
            var pathAndFile = Path.Combine(AppDomain.CurrentDomain.GetData("DataDirectory").ToString(), filename);
            File.WriteAllText(pathAndFile,text);
        }

       
    }

    public interface IFileService
    {
        string ReadText(string filename);
        void SaveText(string filename, string text);
    }
}