namespace DosEquis.Com.Core.Entities
{
    public class BeerPack
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public Beer[] Beers { get; set; }
    }
}
