using DosEquis.Com.Core.Entities;

namespace DosEquis.Com.Repositories
{
    public interface ISkyWritingVoteRepository
    {
        SkyWritingVote Get(int contestId, string facebookUsername);
    }
}
