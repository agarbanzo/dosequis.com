using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Search.Model
{

    public class Data
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public int matches { get; set; }
        public int docId { get; set; }
    }
}
