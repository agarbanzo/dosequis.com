namespace DosEquis.Com.Core.Entities
{
    public class Beer
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
       public string Image { get; set; }
        public string MetaDescription { get; set; }
        public string ShareImage { get; set; }
        public string[] Profiles { get; set; }
        public string[] Ingredients { get; set; }
        public string Calories { get; set; }
        public string Fat { get; set; }
        public string Carbs { get; set; }
        public string Abv { get; set; }
        public string Ibu { get; set; }
        public string DrizlyLink { get; set; }
        public string TwitterTitle { get; set; }
        public string TwitterDescription { get; set; }
        public string TwitterImage{ get; set; }
        public string TwitterCard { get; set; }
        public string[] BottlePacks { get; set; }
        public string[] CanPacks { get; set; }
        public string[] DraughtPacks { get; set; }
    }
}
