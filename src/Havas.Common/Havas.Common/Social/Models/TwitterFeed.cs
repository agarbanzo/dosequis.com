using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Social.Models
{
    public class TwitterFeed
    {
        private string created_date;
        public string Id { get; set; }
        public string Text { get; set; }
        public string Name { get; set;}
        public string Image { get; set; }

        public string Created_at
        {
            get
            {
                StringBuilder createdBuilder = new StringBuilder();
                TimeSpan created_Now = DateTime.UtcNow.Subtract(DateTime.Parse(created_date));

                int days = created_Now.Days;
                int hours = created_Now.Hours;
                int minutes = created_Now.Minutes; //convert negative to postive

                createdBuilder.Append(days == 1 ? days + " day " : days > 1 ? days + " days " : "");
                createdBuilder.Append(hours == 1 ? hours + " hour " : hours > 1 ? hours + " hours  " : "");
                createdBuilder.Append(minutes == 1 ? minutes + " minutes " : minutes > 1 ? minutes + " minutes " : "");
                return createdBuilder.ToString();
            }
            set { created_date = value; }
        }
    }
}
