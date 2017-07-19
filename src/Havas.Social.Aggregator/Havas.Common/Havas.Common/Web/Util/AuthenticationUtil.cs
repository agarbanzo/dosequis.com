using System;
using System.Web.Security;
using System.Web;

namespace Havas.Common.Web.Util
{
    public interface IAuthenticationUtil
    {
        FormsAuthenticationTicket CreateEncryptedAuthenticationTicket(string userId, bool isPersistent, string userData);
        void WriteAuthenticationTicket(FormsAuthenticationTicket ticket);
        string GetReturnUrl();
        void WriteAuthenticationTicket(string userId, bool isPersistent, string userData);
        FormsAuthenticationTicket GetCurrentTicket();
    }

    public class AuthenticationUtil : IAuthenticationUtil
    {
        private readonly IHttpContextProvider _contextProvider;

        public AuthenticationUtil(IHttpContextProvider contextProvider)
        {
            _contextProvider = contextProvider;
        }

        public FormsAuthenticationTicket CreateEncryptedAuthenticationTicket(string userId, bool isPersistent, string userData)
        {
            var ticket = new FormsAuthenticationTicket(
                1,
                userId,
                DateTime.Now,
                DateTime.Now.AddMinutes(60),
                isPersistent,
                userData,
                FormsAuthentication.FormsCookiePath);

            return ticket;
        }

        public void WriteAuthenticationTicket(FormsAuthenticationTicket ticket)
        {
            var encryptedTicket = FormsAuthentication.Encrypt(ticket);
            var context = _contextProvider.GetCurrentContext();
            HttpCookie cookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket);
            cookie.HttpOnly = true;
            context.Response.Cookies.Add(cookie);
        }

        public void WriteAuthenticationTicket(string userId, bool isPersistent, string userData)
        {
            var ticket = CreateEncryptedAuthenticationTicket(userId, isPersistent, userData);
            WriteAuthenticationTicket(ticket);
        }

        public string GetReturnUrl()
        {
            var context = _contextProvider.GetCurrentContext();
            return context.Request.QueryString["ReturnUrl"];
        }

        public FormsAuthenticationTicket GetCurrentTicket()
        {
            var context = HttpContext.Current;
            var identity = context.User.Identity as FormsIdentity;

            return identity == null ? null : identity.Ticket;
        }
    }
}
