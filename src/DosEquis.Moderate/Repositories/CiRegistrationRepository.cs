using DosEquis.Com.Repositories;
using System.Linq;
using DosEquis.Com.Core.Entities;

namespace DosEquis.Com.Core.Repositories
{
    public class CiRegistrationRepository : GenericRepository<CiRegistration>, ICiRegistrationRepository
    {
        public CiRegistrationRepository(DosEquisEntities context) 
            : base(context) { }

        public CiRegistration GetByFacebookId(long facebookId)
        {
            return context.CiRegistrations.FirstOrDefault(x => x.FacebookId == facebookId);
        }

        public CiRegistration GetByPubId(string pubId)
        {
            return context.CiRegistrations.FirstOrDefault(x => x.PubKey == pubId);
        }

        public bool CheckRegisteredUserById(long facebookId)
        {
            return context.CiRegistrations.FirstOrDefault(x => x.FacebookId == facebookId) != null;
        }

        public bool DeleteRegisteredUser(CiRegistration user)
        {
            bool isDeleted = false;
            if (user != null)
            {
                Delete(user);
                isDeleted = true;
            }

            return isDeleted;
        }
    }
}
