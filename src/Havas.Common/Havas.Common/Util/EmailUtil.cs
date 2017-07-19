using System.Collections.Generic;
using System.Configuration;
using System.Net.Mail;
using Havas.Common.Extensions;


namespace Havas.Common.Util
{
    /// <summary>
    /// Email Service
    /// </summary>
    public class EmailUtil
    {
        /// <summary>
        /// Sends the email to one user.
        /// </summary>
        /// <param name="fromAddress">From address.</param>
        /// <param name="toAddress">To address.</param>
        /// <param name="subject">The subject.</param>
        /// <param name="bodyMsg">The body MSG.</param>
        /// <param name="isHtml">if set to <c>true</c> [is HTML].</param>
        public static void SendEmail(string fromAddress, string toAddress, string subject, string bodyMsg, bool isHtml)
        {
            MailMessage mailMessage = new MailMessage(fromAddress, toAddress);
            mailMessage.Subject = subject;
            mailMessage.Body = bodyMsg;
            mailMessage.IsBodyHtml = isHtml;

            SmtpClient smtp = new SmtpClient();
            smtp.Send(mailMessage);
        }

        public static void SendSecureEmail(string fromAddress, string toAddress, string subject, string bodyMsg, bool isHtml)
        {
            MailMessage mailMessage = new MailMessage(fromAddress, toAddress);
            mailMessage.Subject = subject;
            mailMessage.Body = bodyMsg;
            mailMessage.IsBodyHtml = isHtml;

            SmtpClient smtp = new SmtpClient();
            smtp.EnableSsl = true;
            smtp.Send(mailMessage);
        }

        /// <summary>
        /// Sends the email to a list of users. 
        /// </summary>
        /// <param name="fromAddress">From address.</param>
        /// <param name="toAddresses">To addresses.</param>
        /// <param name="subject">The subject.</param>
        /// <param name="bodyMsg">The body MSG.</param>
        /// <param name="isHtml">if set to <c>true</c> [is HTML].</param>
        public static void SendEmail(string fromAddress, List<string> toAddresses, string subject, string bodyMsg, bool isHtml)
        {
            MailAddressCollection mac = new MailAddressCollection();

            foreach (string address in toAddresses)
            {
                mac.Add(new MailAddress(address));
            }

            SendEmail(new MailAddress(fromAddress), mac, subject, bodyMsg, isHtml);

        }

        /// <summary>
        /// Sends the email to a list of users.
        /// </summary>
        /// <param name="fromAddress">From address.</param>
        /// <param name="toAddresses">To addresses.</param>
        /// <param name="subject">The subject.</param>
        /// <param name="bodyMsg">The body MSG.</param>
        /// <param name="isHtml">if set to <c>true</c> [is HTML].</param>
        public static void SendEmail(MailAddress fromAddress, MailAddressCollection toAddresses, string subject, string bodyMsg, bool isHtml)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = fromAddress;
            
            foreach(MailAddress address in toAddresses)
            {
                mailMessage.To.Add(address);
            }

            mailMessage.Subject = subject;
            mailMessage.Body = bodyMsg;
            mailMessage.IsBodyHtml = isHtml;

            SmtpClient smtp = new SmtpClient();
            smtp.Send(mailMessage);
        }

		private static string GetFromAddress(string messageType) {
			var fromAddress = ConfigurationManager.AppSettings["Email_" + messageType + "_From"];
			if (fromAddress.IsNullOrWhitespace()) {
				fromAddress = ConfigurationManager.AppSettings["Email_Default_From"];
			}
			if (fromAddress.IsNullOrWhitespace()) {
				fromAddress = "";
			}
			return fromAddress;
		}

		private static string GetReplyToAddress(string messageType) {
			var replyToAddress = ConfigurationManager.AppSettings["Email_" + messageType + "_ReplyTo"];
			if (replyToAddress.IsNullOrWhitespace()) {
				replyToAddress = ConfigurationManager.AppSettings["Email_Default_ReplyTo"];
			}
			if (replyToAddress.IsNullOrWhitespace()) {
				replyToAddress = "";
			}
			return replyToAddress;			
		}

		private static string ReplaceTokens(string template, Dictionary<string,string> values) {
			var merged = template;
			foreach (var property in values) {
				merged = merged.Replace("[[" + property.Key + "]]", property.Value);
			}

			return merged;
		}

		public static void SendRegistrationEmail(string ToAddress, Dictionary<string,string> Properties) {
            SendTemplatedEmail("Havas.Common.Templates.RegistrationConfirmationEmail", "Thanks for registering for a [[sitename]] recipe box.", ToAddress, Properties);
		}

		public static void SendPasswordResetEmail(string ToAddress, Dictionary<string,string> Properties) {
            SendTemplatedEmail("Havas.Common.Templates.PasswordResetEmail", "Password Reset", ToAddress, Properties);
		}

		public static void SendTemplatedEmail(string TemplateKey, string SubjectTemplate, string ToAddress, Dictionary<string,string> properties) {
			
			var fromAddress = GetFromAddress(TemplateKey);
			var replyToAddress = GetReplyToAddress(TemplateKey);
			
			var bodyTemplate = ResourceUtil.GetResourceFileContents(TemplateKey +".htm");

			var subject = ReplaceTokens(SubjectTemplate,properties);
			var body = ReplaceTokens(bodyTemplate,properties);

			SendEmail(fromAddress, ToAddress, subject, body, true);			
		}

        public static void SendTemplatedEmail(string BodyTemplate, string SubjectTemplate, string ToAddress, string FromAddress, Dictionary<string, string> properties)
        {           
            var subject = ReplaceTokens(SubjectTemplate, properties);
            var body = ReplaceTokens(BodyTemplate, properties);

            SendEmail(FromAddress, ToAddress, subject, body, true);
        }       
    }
}
