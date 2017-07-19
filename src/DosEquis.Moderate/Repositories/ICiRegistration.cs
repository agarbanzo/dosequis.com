using DosEquis.Com.Core.Entities;

namespace DosEquis.Com.Core.Repositories
{
    public interface ICiRegistrationRepository
    {
        CiRegistration GetByFacebookId(long id);
        CiRegistration GetByPubId(string pubId);

        bool CheckRegisteredUserById(long id);

        bool DeleteRegisteredUser(CiRegistration user);
    }
}
