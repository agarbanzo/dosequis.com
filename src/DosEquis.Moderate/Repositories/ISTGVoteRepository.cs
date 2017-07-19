using DosEquis.Com.Core.Entities;
using System.Collections.Generic;


namespace DosEquis.Com.Repositories
{
    public interface ISTGVoteRepository
    {
        STGVote GetByVoter(string voter, int round);

        List<STGVote> GetByVoters(string voter, int round);

    }
}
