using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Constants
{
    public enum RegistrationStatus
    {
        [StringValue("Active in the current site")]
        Active = 1,

        [StringValue("Inactive in the current site")]
        InActive = 2,
        
        [StringValue("Active in other site(s)")]
        ActiveInOtherSite = 3,
        
        [StringValue("Not registered")]
        NotRegistered = 4,

        [StringValue("Unknown due to error")]
        Unknown = 5

    }
}
