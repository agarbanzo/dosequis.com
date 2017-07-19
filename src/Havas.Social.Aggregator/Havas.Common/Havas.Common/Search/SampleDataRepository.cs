using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Search
{

    public static class SampleDataRepository
    {
        public static SampleData Get(int id)
        {
            return GetAll().SingleOrDefault(x => x.Id.Equals(id));
        }
        public static List<SampleData> GetAll()
        {
            return new List<SampleData> {
        new SampleData {Id = 1, Name = "Quin Glover", Description = "Senior Engineer"},
        new SampleData {Id = 2, Name = "Kenny Lee", Description = "Senior Web Developer"},
        new SampleData {Id = 3, Name = "Sueng Lee", Description = "Quality Engineer"},
        new SampleData {Id = 4, Name = "Danny Wang", Description = "Tech Lead"},
        new SampleData {Id = 5, Name = "Rolando Barchal", Description = "QA Lead"},        
        new SampleData {Id = 6, Name = "Stephen Cohr", Description = "Senior Web Developer"},
            };
        }
    }

}
