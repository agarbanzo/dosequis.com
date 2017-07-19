using DosEquis.Com.Core.Entities;
using System.Collections.Generic;

namespace Havas.Social.Aggregator.Moderate.Models
{
    public class SkyWritingsModel : BasePagenationModel
    {
        public List<SkyWritingContest> Entries { get; set; }

    }
}