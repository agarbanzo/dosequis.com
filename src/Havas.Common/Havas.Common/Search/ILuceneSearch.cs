using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Search
{
    interface ILuceneSearch
    {
        List<string> Search(string field, string searchtext, string indexFileLocation, int totalResultCount = 100);
    }
}
