using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Havas.Common.AWS;
using Amazon.S3;
using Amazon.S3.Model;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Net;


namespace Havas.Common.Tests
{
    [TestClass]
    public class AWSS3
    {
        private static AmazonS3 GetS3Client() { return S3Storage.GetS3Client("AKIAI3MZAHPJLWRVVTGA", "359AwKk0tvMd+RPtcfyavPFIGQagFt7FVdivRYDM"); }

        [TestMethod]
        public void AWS_Create_Client()
        {
            var client = GetS3Client();
            Console.WriteLine(client.ToString());

            Assert.IsNotNull(client);
        }

        [TestMethod]
        public void AWS_Create_Bucket()
        {
            var client = GetS3Client();
            
            Assert.IsTrue(S3Storage.CreateBucket(client, "HavasTest2"));
        }

        [TestMethod]
        public void AWS_Create_Folder()
        {
            var client = GetS3Client();
                      
            Assert.IsTrue(S3Storage.CreateFolder(client, "HavasTest", "NewFolder"));
        }


        [TestMethod]
        public void AWS_Create_File()
        {
            var client = GetS3Client();
            var fileName = Havas.Common.Util.ShortGuid.NewGuid() + ".txt";
            string contentBody = "This is a test from Havas.Common.Tests!";
            Assert.IsTrue(S3Storage.CreateFile(client, "HavasTest",fileName,contentBody));
        }

        [TestMethod]
        public void AWS_Upload_FileStream()
        {
            var client = GetS3Client();
            var fileName = Havas.Common.Util.ShortGuid.NewGuid() + ".gif";
            var ACL = S3CannedACL.PublicRead;
            var storageClass = S3StorageClass.Standard;
            var image = Havas.Common.Util.ImageUtil.LoadImage("http://ny.havasworldwide.com/images/logo_havas.gif");
            MemoryStream memStream = new MemoryStream();
            image.Save(memStream,System.Drawing.Imaging.ImageFormat.Gif);            
            S3Storage.UploadFileStream(client,"HavasTest", fileName,memStream,ACL,storageClass);
            image.Dispose();

            var url = "http://s3.amazonaws.com/HavasTest/" + fileName;

            var textFromFile = (new WebClient()).DownloadString(url);

            Assert.IsNotNull(textFromFile);


        }

        


    }
}
