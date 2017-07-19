using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Havas.Social.Aggregator.Constant;
using Havas.Social.Aggregator.Model;
using Havas.Common.Extensions;
using System.Data.Entity.Validation;
using System.Diagnostics;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Service
{
    public class DatabaseFeedRecorder : IFeedRecorder
    {
        public RecorderTypes Type { get; set; }

        public DatabaseFeedRecorder()
        {
            Type = RecorderTypes.Database;
        }

        public void RecordFeeds(List<SocialFeed> feeds)
        {
            var stopWatch = new Stopwatch();
            stopWatch.Start();
            Console.WriteLine(string.Format("Begin insert of {0} records", feeds.Count));
            using (var db = new SocialFeedEntities())
            {   
                db.Configuration.AutoDetectChangesEnabled = false;
                db.Configuration.ValidateOnSaveEnabled = false;
                foreach (var feed in feeds)
                {                    
                    if (!db.SocialFeeds.Any((x => x.FeedId == feed.FeedId && x.PostId == feed.PostId)))
                    {
                        if (feed.Text.Length > 1000)
                        {
                            feed.Text = feed.Text.Substring(0, 999);
                        }

                        db.SocialFeeds.Add(feed);
                    }
                   
                }
                db.SaveChanges();
            }
            stopWatch.Stop();
            Console.WriteLine("Time elapsed = " + stopWatch.ElapsedMilliseconds);
        }
    }
}
