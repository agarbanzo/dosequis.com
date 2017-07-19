using Havas.Common;

namespace Havas.Social.Aggregator.Constant
{
    public enum FeedTypes
    {
        [StringValue("Text")]
        Text,
        [StringValue("Image")]
        Image,
        [StringValue("Video")]
        Video,
    }

    public enum FeedSource
    {
        [StringValue("BrandPage")]
        BrandPage,
        [StringValue("HashTags")]
        HashTags,
        [StringValue("GroupPage")]
        GroupPage
    }

    public enum RecorderTypes
    {
        [StringValue("Database")]
        Database,
        [StringValue("None")]
        None
    }
}
