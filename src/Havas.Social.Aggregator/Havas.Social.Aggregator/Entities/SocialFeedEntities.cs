namespace Havas.Social.Aggregator.Entities
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class SocialFeedEntities : DbContext
    {
        public SocialFeedEntities()
            : base("name=SocialFeedEntities")
        {
        }

        public virtual DbSet<FacebookTag> FacebookTags { get; set; }
        public virtual DbSet<InstagramTag> InstagramTags { get; set; }
        public virtual DbSet<SocialFeed> SocialFeeds { get; set; }
        public virtual DbSet<TwitterTag> TwitterTags { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InstagramTag>()
                .Property(e => e.FeedId)
                .IsUnicode(false);

            modelBuilder.Entity<InstagramTag>()
                .Property(e => e.LastTagId)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.SocialNetwork)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.FeedType)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.PostId)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.FeedId)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.UserName)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.UserProfileImageUrl)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.Link)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.LinkToProfile)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.Text)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.ImageUrl)
                .IsUnicode(false);

            modelBuilder.Entity<SocialFeed>()
                .Property(e => e.VideoUrl)
                .IsUnicode(false);

            modelBuilder.Entity<TwitterTag>()
                .Property(e => e.FeedId)
                .IsUnicode(false);

            modelBuilder.Entity<TwitterTag>()
                .Property(e => e.SinceId)
                .IsUnicode(false);
        }
    }
}
