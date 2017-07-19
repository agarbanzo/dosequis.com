using Havas.Common.Util;
using System.Configuration;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Imaging;
using System.Net.Mime;
using System.Web;
using Havas.Common.Azure;

namespace Havas.Common.Azure
{
    public class CropInfo
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }

    public static class ImageManager
    {
        private static readonly string AzureStorageBaseUrl = ConfigurationManager.AppSettings["AzureStorageBaseURL"];
        private static readonly string AzureContainer = ConfigurationManager.AppSettings["AzureStorageContainer"];
        private static readonly ImageFormat ResultImageFormat = ImageFormat.Jpeg;
        private const int CropDimension = 117;
        private const int MinDimension = 117;

        public static int MaxFileSize = 5 * 1024 * 1024;

        public static bool AcceptedContentType(HttpPostedFileBase file)
        {
            var acceptable =
                file != null
                && file.ContentLength > 0
                && (
                    file.ContentType == MediaTypeNames.Image.Gif
                    || file.ContentType == MediaTypeNames.Image.Jpeg
                    || file.ContentType == "image/pjpeg"
                    || file.ContentType == "image/x-png"
                    || file.ContentType == "image/png"
                   );

            if (!acceptable)
                Trace.TraceWarning("Unspported content type of:{0}", file != null ? file.ContentType : "");

            return acceptable;
        }

        public static string SubmitImage(HttpPostedFileBase file, string key)
        {
            var image = Image.FromStream(file.InputStream);
            var imageFormat = GetImageFormat(file);

            var width = image.Width < MinDimension ? MinDimension : image.Height;
            var height = image.Height < MinDimension ? MinDimension : image.Height;
            var size = new Size(width, height);

            image = ImageUtil.ResizeImage(image, size, true);
            var extension = imageFormat.ToString().ToLower();
            var fileName = ShortGuid.NewGuid() + "." + extension;

            BlobStorage.SaveImage(AzureContainer, image, fileName, imageFormat);

            var urlImage = StorageBaseUrl() + fileName;
            return urlImage;
        }

        public static ImageFormat GetImageFormat(HttpPostedFileBase file)
        {
            var imageFormat = ImageFormat.Png;

            switch (file.ContentType)
            {
                case MediaTypeNames.Image.Gif:
                    imageFormat = ImageFormat.Gif;
                    break;
                case MediaTypeNames.Image.Jpeg:
                case "image/pjpeg":
                    imageFormat = ImageFormat.Jpeg;
                    break;
            }

            return imageFormat;
        }

        private static string StorageBaseUrl()
        {
            return AzureStorageBaseUrl + "/" + AzureContainer + "/";
        }

        //Need to add code to save to eprize

        public static string ProcessImage(CropInfo cropInfo, string imageName)
        {
            const int widthResult = CropDimension;
            const int heightResult = CropDimension;

            var cropArea = new Rectangle(cropInfo.X, cropInfo.Y, cropInfo.Width, cropInfo.Height);
            var sizeScale = new Size(widthResult, heightResult);

            return ProcessImage(imageName, cropArea, sizeScale);
        }

        private static string ProcessImage(string fileName, Rectangle cropArea, Size sizeScale)
        {
            if (string.IsNullOrEmpty(fileName))
                return "";

            var imageName = fileName.Split('.')[0];

            var extension = ResultImageFormat.ToString().ToLower();
            //			var fileName = imageName + "." + extension;
            var urlImage = StorageBaseUrl() + fileName;
            var image = ImageUtil.LoadImage(urlImage);
            var imageCropped = ImageUtil.CropImage(image, cropArea);
            var imageResized = ImageUtil.ResizeImage(imageCropped, sizeScale, true);

            var fileNameProcessed = imageName + "-crop." + extension;
            BlobStorage.SaveImage(AzureContainer, imageResized, fileNameProcessed, ResultImageFormat);

            var urlImageProcessed = StorageBaseUrl() + fileNameProcessed;
            return urlImageProcessed;
        }
    }
}