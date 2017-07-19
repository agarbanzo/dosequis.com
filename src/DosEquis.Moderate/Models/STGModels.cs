using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Havas.Social.Aggregator.Moderate.Models
{
    public class STGContestModel
    {
        public int Id { get; set; }

        /// <summary>
        /// Get or Set the current round
        /// </summary>
        public int Round { get; set; }
        
        [Required]
        [MaxLength(64, ErrorMessage = "Max Length for First Name is 64")]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(64, ErrorMessage = "Max Length for Last Name is 64")]
        public string LastName { get; set; }

        [Required]
        [MaxLength(128, ErrorMessage = "Max Length for Email Address is 128")]
        [RegularExpression(@"\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*", ErrorMessage = "Invalid Email Address")]
        public string EmailAddress { get; set; }

        [Required]
        [MaxLength(64, ErrorMessage = "Max Length for Video Title is 64")]
        public string VideoTitle { get; set; }

        [Required]
        [MaxLength(128, ErrorMessage = "Max Length for Link is 128")]
        public string YoutubeLink { get; set; }

        [Required]
        [MaxLength(64, ErrorMessage = "Max Length for Address 1 is 64")]
        public string Address1 { get; set; }

        [MaxLength(16, ErrorMessage = "Max Length for Address 2 is 16")]
        public string Address2 { get; set; }
        
        public string Address3 { get; set; }

        [Required]
        [RegularExpression(@"[A-Za-z]{2}", ErrorMessage = "Invalid State")]        
        public string State { get; set; }

        [Required]

        [RegularExpression(@"[0-9]{5}", ErrorMessage = "Invalid Zip Code")]
        public string ZipCode { get; set; }

        [RegularExpression(@"[0-9]{3}-[0-9]{3}-[0-9]{4}", ErrorMessage = "Invalid Phone Number")]
        public string PhoneNumber { get; set; }

        public bool IsOptedIn { get; set; }

        public bool IsApproved { get; set; }

        public bool IsFinalist { get; set; }
        
        public bool IsWinner { get; set; }
        
        public bool IsRejected { get; set; }
    }

}