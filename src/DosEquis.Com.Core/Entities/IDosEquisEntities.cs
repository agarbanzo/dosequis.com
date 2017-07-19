using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace DosEquis.Com.Core.Entities
{
    public interface IDosEquisEntities
    {
        DbSet<CiRegistration> CiRegistrations { get; set; }
        DbSet<SkyWritingContest> SkyWritingContests { get; set; }
        DbSet<SkyWritingVote> SkyWritingVotes { get; set; }
        DbSet<STGContest> STGContests { get; set; }
        DbSet<STGVote> STGVotes { get; set; }
        DbSet<ZipCode> ZipCodes { get; set; }
        DbSet<vwCiRegistrationRank> vwCiRegistrationRanks { get; set; }
        DbSet<T> Set<T>() where T : class;
        int SaveChanges();
        DbEntityEntry Entry(object item);
        
    }
}
