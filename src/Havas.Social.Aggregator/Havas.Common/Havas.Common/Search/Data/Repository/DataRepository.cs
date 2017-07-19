using System.Collections.Generic;
using System.Linq;
using Havas.Common.Search.Model;

namespace Havas.Common.Search.Repository {
    public static class DataRepository
    {
        public static Data Get(int id)
        {
            return GetAll().SingleOrDefault(x => x.Id.Equals(id));
        }
        public static List<Data> GetAll()
        {
            return new
              List<Data> {
                           new Data {Id = 1, Name = "Quin Glover", Description = "Senior Web Engineer"},
                           new Data {Id = 2, Name = "Kenny Lee", Description = "Senior Web Developer"},
                           new Data {Id = 3, Name = "Stephen Chors", Description = "Senior Web Engineer"},
                           new Data {Id = 4, Name = "Danny Wang", Description = "Technical Lead"},
                           new Data {Id = 5, Name = "Rolando Barchal", Description = "Technical QA Lead"},
                           new Data {Id = 5, Name = "Yolande Maxwell", Description = "Human Resource"},
                         };
        }
    }
}