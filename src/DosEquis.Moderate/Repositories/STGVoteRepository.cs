using DosEquis.Com.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DosEquis.Com.Repositories
{
    public class STGVoteRepository : GenericRepository<STGVote>, ISTGVoteRepository
    {
        public STGVoteRepository(DosEquisEntities context) 
            : base(context) { }

        public STGVote GetByVoter(string voter, int round)
        {
            var result = context.STGVotes.Where(x => x.Voter.Equals(voter, StringComparison.OrdinalIgnoreCase) && x.Round == round).SingleOrDefault();
            return result;
        }

        public List<STGVote> GetByVoters(string voter, int round)
        {
            var result = context.STGVotes.Where(x => x.Voter.Equals(voter, StringComparison.OrdinalIgnoreCase) && x.Round == round).ToList();
            return result;
        }

    }
}
