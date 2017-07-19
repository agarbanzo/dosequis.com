using System.Data.Entity;

namespace DosEquis.Com.Core.Entities
{
    public partial class DosEquisEntities : DbContext, IDosEquisEntities
    {
        public DosEquisEntities()
            : base("name=DosEquisEntities") { }

        public virtual DbSet<CiRegistration> CiRegistrations { get; set; }
        public virtual DbSet<SkyWritingContest> SkyWritingContests { get; set; }
        public virtual DbSet<SkyWritingVote> SkyWritingVotes { get; set; }
        public virtual DbSet<STGContest> STGContests { get; set; }
        public virtual DbSet<STGVote> STGVotes { get; set; }
        public virtual DbSet<ZipCode> ZipCodes { get; set; }
        public virtual DbSet<vwCiRegistrationRank> vwCiRegistrationRanks { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<DosEquisEntities>(null);
        }
    }
}
