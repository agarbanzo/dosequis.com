using DosEquis.Com.Core.Entities;
using System.Linq;

namespace DosEquis.Com.Repositories
{
    public class SkyWritingVoteRepository : GenericRepository<SkyWritingVote>, ISkyWritingVoteRepository
    {
        SkyWritingVoteRepository(DosEquisEntities context) : base(context) { }
        public SkyWritingVote Get(int contestId, string facebookUsername)
        {
            var result = context.SkyWritingVotes.SingleOrDefault(x => x.FacebookUsername.Equals(facebookUsername) && x.SkyWritingContestId == contestId);
            return result;
        }
    }
}
