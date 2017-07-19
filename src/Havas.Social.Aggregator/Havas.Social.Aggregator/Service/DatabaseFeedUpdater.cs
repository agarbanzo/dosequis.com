using Havas.Social.Aggregator.Entities;
using System.Linq;

namespace Havas.Social.Aggregator.Service
{
    public class DatabaseFeedUpdater
    {
        public static void UpdateStatus(int feedId, bool status)
        {
            using (var db = new SocialFeedEntities())
            {
                var feed = db.SocialFeeds.FirstOrDefault(x => x.Id == feedId);

                if (feed != null)
                {
                    feed.Approved = status;
                    db.SaveChanges();
                }

            }

        }
    }
}
