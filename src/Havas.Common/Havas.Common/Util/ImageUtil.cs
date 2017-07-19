using System.Drawing;
using System.Drawing.Drawing2D;
using System.Net;
using System.IO;
using System.Drawing.Text;
using System;
using System.Drawing.Imaging;

namespace Havas.Common.Util
{
    public static class ImageUtil
    {
        public static Image CropImage(Image imgToCrop, Rectangle cropArea)
        {
            Bitmap bmpImage = new Bitmap(imgToCrop);
            Bitmap bmpCrop = bmpImage.Clone(cropArea, bmpImage.PixelFormat);
            return (Image)(bmpCrop);
        }

        public static Image CropAndFill(Image imgToResize, Size size)
        {
            float nPercent = 0;
            int sourceWidth = imgToResize.Width;
            int sourceHeight = imgToResize.Height;

            var startWidth = 0;
            var startHeight = 0;

            float nPercentW = 0;
            float nPercentH = 0;

            nPercentW = ((float)size.Width / (float)sourceWidth);
            nPercentH = ((float)size.Height / (float)sourceHeight);

            if (nPercentH < nPercentW)
            {
                nPercent = nPercentW;
            }
            else
            {
                nPercent = nPercentH;
            }
            int destWidth = (int)(sourceWidth * nPercent);
            int destHeight = (int)(sourceHeight * nPercent);

            Bitmap b = new Bitmap(size.Width, size.Height);
            Graphics g = Graphics.FromImage((Image)b);
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;

            startWidth = (size.Width - destWidth) < 0 ? (size.Width - destWidth) / 2 : 0;
            startHeight = (size.Height - destHeight) < 0 ? (size.Height - destHeight) / 2 : 0;

            g.DrawImage(imgToResize, startWidth, startHeight, destWidth, destHeight);
            g.Dispose();
            return (Image)b;
        }

        public static Image ResizeImage(Image imgToResize, Size size, bool cropAndFill)
        {
            int sourceWidth = imgToResize.Width;
            int sourceHeight = imgToResize.Height;

            float nPercent = 0;
            float nPercentW = 0;
            float nPercentH = 0;

            nPercentW = ((float)size.Width / (float)sourceWidth);
            nPercentH = ((float)size.Height / (float)sourceHeight);

            if (!cropAndFill) // fill smallest dimension - no crop
            {
                if (nPercentH < nPercentW)
                    nPercent = nPercentH;
                else
                    nPercent = nPercentW;
            }
            else // fill largest dimension - crop
            {
                if (nPercentH > nPercentW)
                    nPercent = nPercentH;
                else
                    nPercent = nPercentW;
            }

            int destWidth = (int)(sourceWidth * nPercent);
            int destHeight = (int)(sourceHeight * nPercent);

            Bitmap b = new Bitmap(destWidth, destHeight);
            Graphics g = Graphics.FromImage((Image)b);
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;

            var startWidth = 0;
            var startHeight = 0;
            if (!cropAndFill)
            {
                startWidth = (size.Width - destWidth) > 0 ? (size.Width - destWidth) / 2 : 0;
                startHeight = (size.Height - destHeight) > 0 ? (size.Height - destHeight) / 2 : 0;
            }

            g.DrawImage(imgToResize, startWidth, startHeight, destWidth, destHeight);
            g.Dispose();

            return (Image)b;
        }

        public static Image LoadImage(string url)
        {
            var backgroundUrl = url;
            WebRequest request = WebRequest.Create(backgroundUrl);
            WebResponse response = request.GetResponse();
            System.IO.Stream stream = response.GetResponseStream();
            return Image.FromStream(stream);
        }

        public static Image ZoomImage(Image input, Size inPhoto, Rectangle cropArea)
        {
            Size newSize = new Size((int)(inPhoto.Width), (int)(inPhoto.Height));

            var photo = new Bitmap(input, newSize);
            return CropImage(photo, cropArea);
        }

        public static byte[] ImageToByteArray(System.Drawing.Image imageIn, System.Drawing.Imaging.ImageFormat format )
        {
            MemoryStream ms = new MemoryStream();
            imageIn.Save(ms, format);
            return ms.ToArray();
        }

        public static Image ByteArrayToImage(byte[] byteArrayIn)
        {
            MemoryStream ms = new MemoryStream(byteArrayIn);
            Image returnImage = Image.FromStream(ms);
            return returnImage;
        }

        public static Font LoadCustomFont(string fontFilePath, int fontSize)
        {
           return LoadCustomFont(fontFilePath, fontSize, FontStyle.Regular);
        }

        public static Font LoadCustomFont(string fontFilePath, int fontSize, FontStyle fontStyle)
        {
            PrivateFontCollection pfc = new PrivateFontCollection();
            pfc.AddFontFile(fontFilePath);
            return new Font(pfc.Families[0], fontSize, fontStyle);
        }

        public static Image LoadImageFromString(string imageString)
        {
            
            byte[] bytes = Convert.FromBase64String(imageString);

            Image image;
            using (MemoryStream ms = new MemoryStream(bytes))
            {
                image = Image.FromStream(ms);
            }

            return image;
        }

        public static ImageCodecInfo GetEncoder(ImageFormat format)
        {

            ImageCodecInfo[] codecs = ImageCodecInfo.GetImageDecoders();

            foreach (ImageCodecInfo codec in codecs)
            {
                if (codec.FormatID == format.Guid)
                {
                    return codec;
                }
            }
            return null;
        }

        public static unsafe bool IsGrayScale(Image image)
        {
            using (var bmp = new Bitmap(image.Width, image.Height, PixelFormat.Format32bppArgb))
            {
                using (var g = Graphics.FromImage(bmp))
                {
                    g.DrawImage(image, 0, 0);
                }

                var data = bmp.LockBits(new Rectangle(0, 0, bmp.Width, bmp.Height), ImageLockMode.ReadOnly, bmp.PixelFormat);

                var pt = (int*)data.Scan0;
                var res = true;

                for (var i = 0; i < data.Height * data.Width; i++)
                {
                    var color = Color.FromArgb(pt[i]);

                    if (color.A != 0 && (color.R != color.G || color.G != color.B))
                    {
                        res = false;
                        break;
                    }
                }

                bmp.UnlockBits(data);
                image.Dispose();

                return res;
            }
        }

    }
}