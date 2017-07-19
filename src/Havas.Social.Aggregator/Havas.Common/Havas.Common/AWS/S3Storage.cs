#pragma warning disable 414, CS0618

using System;
using Amazon;
using Amazon.S3;
using System.IO;
using Amazon.S3.Model;
using System.Drawing;

namespace Havas.Common.AWS
{
    public static class S3Storage
    {
        public static AmazonS3 GetS3Client(string AWSAccessKey, string AWSSecretKey)
        {
            
            AmazonS3 s3Client = AWSClientFactory.CreateAmazonS3Client(
                    AWSAccessKey,
                    AWSSecretKey
                    );
            
            return s3Client;
        }

        public static bool CreateBucket(AmazonS3 client, string bucketName)
        {

            try
            {
                var response = client.ListBuckets();
                bool found = false;
                foreach (S3Bucket bucket in response.Buckets)
                {
                    if (bucket.BucketName == bucketName)
                    {
                        found = true;
                        break;
                    }
                }
                if (found == true) return false;
                else
                {
                    client.PutBucket(new PutBucketRequest().WithBucketName(bucketName));
                    return true;
                }
            }
            catch
            {

                return false;
            }
            finally
            {
                client.Dispose();            
            }
        
        }

        public static bool CreateFolder(AmazonS3 client, string bucketName, string folderName)
        {
            try
            {
                PutObjectRequest request = new PutObjectRequest();
                request.WithBucketName(bucketName);
                request.WithKey(folderName + "/");
                request.WithContentBody("");
                client.PutObject(request);

                return true;
            }
            catch
            {
                return false;
            }
            finally
            {
                client.Dispose();
            }
        
        }


        public static bool CreateFile(AmazonS3 client, string bucketName, string fileName, string contentBody)
        {
            try
            {
                PutObjectRequest request = new PutObjectRequest();
                request.WithBucketName(bucketName);
                request.WithKey(fileName);
                request.WithContentBody(contentBody);
                var response = client.PutObject(request);
                
                return true;
            }
            catch
            {
                return false;
            }
            finally
            {
                client.Dispose();
            }
        }


        public static string UploadFileStream(AmazonS3 client, string bucketName, string fileName, Stream stream, S3CannedACL ACL, S3StorageClass storageClass)
        {
            try
            {

                PutObjectRequest request = new PutObjectRequest();
                request.WithKey(fileName);
                request.WithInputStream(stream);
                request.WithBucketName(bucketName);
                request.CannedACL = ACL;
                request.StorageClass = storageClass;

                var response = client.PutObject(request);
                var xmlResponse = response.ResponseXml.ToString();

                return xmlResponse;
            }
            catch (Exception ex)
            {
                return ex.InnerException.ToString();
            }
            finally
            {
                client.Dispose();            
            }      
        }

        public static Image DownloadFileStream(AmazonS3 client, string bucketName, string fileName, Stream stream)
        {
            try
            {

                GetObjectRequest request = new GetObjectRequest();
                request.WithKey(fileName);
                request.WithInputStream(stream);
                request.WithBucketName(bucketName);

                var response = client.GetObject(request);

                return Image.FromStream(response.ResponseStream);
            }
            catch (Exception)
            {
                return null;
            }
            finally
            {
                client.Dispose();
            }
        }

        public static bool DeleteFile(AmazonS3 client, string bucketName, string fileName)
        {
            try
            {
                DeleteObjectRequest request = new DeleteObjectRequest()
                {
                    BucketName = bucketName,
                    Key = fileName
                };
                S3Response response = client.DeleteObject(request);
                return true;
            }
            catch
            {
                return false;
            }
            finally
            {
                client.Dispose();
            }
        
        }

    }
}
