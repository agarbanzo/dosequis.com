namespace DosEquis.Com.Core.Entities
{
    public class Recipe
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string[] Ingredients { get; set; }
        public string[] Directions { get; set; }
        public string PrepTime { get; set; }
        public string SkillLevel { get; set; }
        public string Image { get; set; }
        public string Thumbnail { get; set; }
        public string TotalTimeScheme { get; set; }
        public string PrepTimeScheme { get; set; }
        public string ProductUsed { get; set; }
        public string MetaDescription { get; set; }
        public string ShareImage { get; set; }
        public string TwitterTitle { get; set; }
        public string TwitterDescription { get; set; }
        public string TwitterImage { get; set; }
        public string TwitterCard { get; set; }
    }
}
