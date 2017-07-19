using System;
using System.Security.Cryptography;
using System.Text;

namespace Havas.Common.Util
{
    public static class CryptoUtil
    {
        private const string ENCRYPTION_KEY = "egalit?sporangy";

        public static string Encrypt(string plaintext)
        {
            var des = new TripleDESCryptoServiceProvider();
            var hashMD5 = new MD5CryptoServiceProvider();

            des.Key = hashMD5.ComputeHash(Encoding.ASCII.GetBytes(ENCRYPTION_KEY));
            des.Mode = CipherMode.ECB;

            ICryptoTransform desEncrypt = des.CreateEncryptor();
            byte[] buffer = Encoding.ASCII.GetBytes(plaintext);
            try
            {
                return Convert.ToBase64String(desEncrypt.TransformFinalBlock(buffer, 0, buffer.Length));
            }
            catch (Exception ex)
            {
                throw new CryptographicException("The TripleDES class could not be encrypt the text.", ex);
            }
        }

        public static string Decrypt(string encryptedText)
        {
            var des = new TripleDESCryptoServiceProvider();
            var hashMD5 = new MD5CryptoServiceProvider();

            des.Key = hashMD5.ComputeHash(Encoding.ASCII.GetBytes(ENCRYPTION_KEY));
            des.Mode = CipherMode.ECB;

            ICryptoTransform desDecrypt = des.CreateDecryptor();
            byte[] buffer = Convert.FromBase64String(encryptedText);

            try
            {
                return Encoding.ASCII.GetString(desDecrypt.TransformFinalBlock(buffer, 0, buffer.Length));
            }
            catch (Exception ex)
            {
                throw new CryptographicException("The TripleDES class could not be decrypt the text.", ex);
            }
        }

        /// <summary>
        /// Create a password hash based on a password and salt.  
        /// Adapted from: http://davidhayden.com/blog/dave/archive/2004/02/16/157.aspx
        /// </summary>
        /// <returns></returns>
        public static string HashPassword(string pwd, string salt)
        {
            string saltAndPwd = String.Concat(pwd, salt);

            HashAlgorithm algorithm = SHA1.Create();
            byte[] hash = algorithm.ComputeHash(Encoding.UTF8.GetBytes(saltAndPwd));

            return Convert.ToBase64String(hash);
        }

        public static string SignWithHmac(string dataString, string keyString)
        {

            var dataToSign = new ASCIIEncoding().GetBytes(dataString);
            var keyBody = new ASCIIEncoding().GetBytes(keyString);

            using (var hmacAlgorithm = new System.Security.Cryptography.HMACSHA256(keyBody))
            {
                hmacAlgorithm.ComputeHash(dataToSign);
                return Convert.ToBase64String(hmacAlgorithm.Hash);
            }
        }


    }
}
