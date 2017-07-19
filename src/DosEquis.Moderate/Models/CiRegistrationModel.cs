using System.Collections.Generic;
using DosEquis.Com.Core.Entities;

namespace Havas.Social.Aggregator.Moderate.Models
{
    public class CiRegistrationModel : BasePagenationModel
    {
        public int InvalidMemeCount { get; set; } 
        public int DefaultMemeCount { get; set; }
        public int ModCount { get; set; }
        public int Count { get; set; }
        public List<vwCiRegistrationRank> Entries { get; set; }
    }
}