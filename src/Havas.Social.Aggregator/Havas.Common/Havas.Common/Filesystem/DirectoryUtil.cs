using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Havas.Common.Filesystem
{
    public class DirectoryUtil
    {
        /// <summary>
        /// Adds the ending slash to a directory path if it doesn't end with one.
        /// </summary>
        /// <param name="directoryPath">The directory path.</param>
        /// <returns></returns>
        public static string AddEndingSlash(string directoryPath)
        {
            return directoryPath.TrimEnd('\\') + @"\";
        }

        /// <summary>
        /// Copies all (including all in subdirectories) from one directory to another directory.
        /// </summary>
        /// <param name="sourceDirectory">The source directory.</param>
        /// <param name="targetDirectory">The target directory.</param>
        public static void CopyAll(string sourceDirectory, string targetDirectory)
        {
            DirectoryInfo diSource = new DirectoryInfo(sourceDirectory);
            DirectoryInfo diTarget = new DirectoryInfo(targetDirectory);
            CopyAll(diSource, diTarget);
        }

        /// <summary>
        /// Copies all (including all in subdirectories) from one directory to another directory.
        /// </summary>
        /// <param name="source">The source.</param>
        /// <param name="target">The target.</param>
        public static void CopyAll(DirectoryInfo source, DirectoryInfo target)
        {
            // Check if the target directory exists, if not, create it.         
            if (Directory.Exists(target.FullName) == false)
            {
                Directory.CreateDirectory(target.FullName);
            }

            // Copy each file into it's new directory.        
            foreach (FileInfo fi in source.GetFiles())
            {
                Console.WriteLine(@"Copying {0}\{1}", target.FullName, fi.Name);
                fi.CopyTo(Path.Combine(target.ToString(), fi.Name), true);
            }

            // Copy each subdirectory using recursion.         
            foreach (DirectoryInfo diSourceSubDir in source.GetDirectories())
            {
                DirectoryInfo nextTargetSubDir = target.CreateSubdirectory(diSourceSubDir.Name);
                CopyAll(diSourceSubDir, nextTargetSubDir);
            }
        }
    }
}
