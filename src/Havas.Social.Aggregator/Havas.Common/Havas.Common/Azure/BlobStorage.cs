using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.StorageClient;
using System;
using System.Configuration;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Text;

namespace Havas.Common.Azure
{
    public static class BlobStorage
    {
        private static CloudBlobClient GetBlobClient()
        {
            CloudStorageAccount.SetConfigurationSettingPublisher((configName, configSetter) => configSetter(ConfigurationManager.AppSettings[configName]));
            var storageAccount = CloudStorageAccount.FromConfigurationSetting("AzureStorageConnectionString");
            var blobClient = storageAccount.CreateCloudBlobClient();

            return blobClient;
        }

        private static CloudBlobContainer GetOrCreatePublicContainer(CloudBlobClient blobClient, string containerName)
        {
            var blobContainter = blobClient.GetContainerReference(containerName);
            blobContainter.CreateIfNotExist();

            blobContainter.SetPermissions(new BlobContainerPermissions
            {
                PublicAccess = BlobContainerPublicAccessType.Container
            });
            return blobContainter;
        }

        private static string GetEncodedChunkNumber(int chunkNumber)
        {
            return Convert.ToBase64String(Encoding.UTF8.GetBytes(chunkNumber.ToString("D9")));
        }

        internal static void DeleteBlob(string containerName, string filename)
        {
            var blobContainter = GetOrCreatePublicContainer(GetBlobClient(), containerName);
            var blob = blobContainter.GetBlockBlobReference(filename);
            blob.DeleteIfExists();
        }

        public static void FinalizeBlocks(string containerName, string filename, string contentType, int totalChunks)
        {
            var blobContainter = GetOrCreatePublicContainer(GetBlobClient(), containerName);

            var blob = blobContainter.GetBlockBlobReference(filename);
            blob.Properties.ContentType = contentType;

            var keys = Enumerable.Range(1, totalChunks).Select(GetEncodedChunkNumber);
            blob.PutBlockList(keys);
        }

        public static void AddBlock(string containerName, Stream fileBlock, string filename, int chunkNumber)
        {
            var blobContainter = GetOrCreatePublicContainer(GetBlobClient(), containerName);

            var blob = blobContainter.GetBlockBlobReference(filename);
            blob.PutBlock(GetEncodedChunkNumber(chunkNumber), fileBlock, null);
        }

        public static void AddBlock(string containerName, Stream fileBlock, string filename, string contentType, int chunkNumber, int totalChunks)
        {
            var blobContainter = GetOrCreatePublicContainer(GetBlobClient(), containerName);
            var blob = blobContainter.GetBlockBlobReference(filename);

            blob.PutBlock(GetEncodedChunkNumber(chunkNumber), fileBlock, null);

            if (chunkNumber == totalChunks)
            {
                var keys = Enumerable.Range(1, totalChunks).Select(GetEncodedChunkNumber);
                blob.PutBlockList(keys);
                blob.Properties.ContentType = contentType;
            }
        }

        public static string SaveFile(string containerName, Stream file, string fileName, ContentType contentType)
        {
            var blobContainter = GetOrCreatePublicContainer(GetBlobClient(), containerName);

            var blob = blobContainter.GetBlobReference(fileName);

            blob.Metadata["FileName"] = fileName.Split('.')[0];
            blob.Metadata["FileExtension"] = fileName.Split('.')[1];
            blob.Properties.ContentType = contentType.MediaType;

            blob.UploadFromStream(file);

            return ConfigurationManager.AppSettings["AzureStorageBaseURL"] + "/" + containerName + "/" + fileName;

        }

        public static string SaveImage(string containerName, Image image, string fileName, ImageFormat imageFormat)
        {
            var blobContainter = GetOrCreatePublicContainer(GetBlobClient(), containerName);

            var blob = blobContainter.GetBlobReference(fileName);

            blob.Metadata["FileName"] = fileName.Split('.')[0];
            blob.Metadata["FileExtension"] = fileName.Split('.')[1];
            blob.Properties.ContentType = "image/" + imageFormat.ToString().ToLower();

            using (var ms = new MemoryStream())
            {
                image.Save(ms, imageFormat);
                ms.Position = 0;
                blob.UploadFromStream(ms);
            }

            return ConfigurationManager.AppSettings["AzureStorageBaseURL"] + "/" + containerName + "/" + fileName;
        }
    }
}
