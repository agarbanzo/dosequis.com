using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using Lucene.Net.Analysis.Standard;
using Lucene.Net.Documents;
using Lucene.Net.Index;
using Lucene.Net.Search;
using Lucene.Net.Store;
using Version = Lucene.Net.Util.Version;
using System.Text.RegularExpressions;
using Havas.Common.Search.Model;

namespace Havas.Common.Search
{
    public class LuceneSearch 
    {
        private static string _luceneDir = "";
        private static FSDirectory _directoryTemp;

        private static FSDirectory _directory
        {
            get
            {
                if (_directoryTemp == null) _directoryTemp = FSDirectory.Open(new DirectoryInfo(_luceneDir));
                if (IndexWriter.IsLocked(_directoryTemp)) IndexWriter.Unlock(_directoryTemp);
                var lockFilePath = Path.Combine(_luceneDir, "write.lock");
                if (File.Exists(lockFilePath)) File.Delete(lockFilePath);
                return _directoryTemp;
            }
        }
        
        public static List<Data> Search(string textToSearchFor, string searchDriectory)
        {
            _luceneDir = searchDriectory;
            if (textToSearchFor == null)
            { return null; }
  
            IndexSearcher indexSearcher = new IndexSearcher(_directory,true);


            PhraseQuery query = new PhraseQuery();
            textToSearchFor = textToSearchFor.Replace('-', ' ').ToLower();
            String[] words = textToSearchFor.Split(' ');
            foreach (string word in words)
            {
                query.Add(new Term("Content", word));
            }


            /*QueryParser qp = new QueryParser(Version.LUCENE_30, "Content", new StandardAnalyzer(Version.LUCENE_30));
          
            qp.DefaultOperator = QueryParser.Operator.AND;           
            var query = qp.Parse("+(Content:" + textToSearchFor + ")");*/

            TopDocs topDocs = indexSearcher.Search(query,100);
            ScoreDoc[] hits = topDocs.ScoreDocs;

            List<Data> searchResults = new List<Data>();
            searchResults = GetHits(hits, textToSearchFor, indexSearcher);

            indexSearcher.Dispose();

            return searchResults;
        }

        public static void AddUpdateLuceneIndex(IEnumerable<Data> Datas)
        {
            // init lucene
            var analyzer = new StandardAnalyzer(Version.LUCENE_30);
            using (var writer = new IndexWriter(_directory, analyzer, IndexWriter.MaxFieldLength.UNLIMITED))
            {
                // add data to lucene search index (replaces older entry if any)
                foreach (var Data in Datas) _addToLuceneIndex(Data, writer);

                // close handles
                analyzer.Close();
                writer.Dispose();
            }
        }

        public static void AddUpdateLuceneIndex(Data Data)
        {
            AddUpdateLuceneIndex(new List<Data> { Data });
        }
        
        public static void DeleteLuceneIndexRecord(int record_id)
        {
            // init lucene
            var analyzer = new StandardAnalyzer(Version.LUCENE_30);
            using (var writer = new IndexWriter(_directory, analyzer, IndexWriter.MaxFieldLength.UNLIMITED))
            {
                // remove older index entry
                var searchQuery = new TermQuery(new Term("Id", record_id.ToString()));
                writer.DeleteDocuments(searchQuery);

                // close handles
                analyzer.Close();
            }
        }
        
        public static void OptimizeIndex()
        {
            var analyzer = new StandardAnalyzer(Version.LUCENE_30);
            using (var writer = new IndexWriter(_directory, analyzer, IndexWriter.MaxFieldLength.UNLIMITED))
            {
                analyzer.Close();
                writer.Optimize();
                writer.Dispose();
            }
        }
        
        #region private Methods
        /* To-do Change when all works */
        private static Data _mapLuceneDocumentToData(Document doc)
        {
            return new Data
            {
                Id = Convert.ToInt32(doc.Get("IndexId")),
                Name = doc.Get("Name"),
                Description = doc.Get("Description"),
                Url = doc.Get("Url")
            };
        }


        private static IEnumerable<Data> _mapLuceneToDataList(IEnumerable<Document> hits)
        {
            return hits.Select(_mapLuceneDocumentToData).ToList();
        }

        private static IEnumerable<Data> _mapLuceneToDataList(IEnumerable<ScoreDoc> hits,
            IndexSearcher searcher)
        {
            return hits.Select(hit => _mapLuceneDocumentToData(searcher.Doc(hit.Doc))).ToList();
        }

        private static void _addToLuceneIndex(Data Data, IndexWriter writer)
        {
            // remove older index entry
            var searchQuery = new TermQuery(new Term("Id", Data.Id.ToString()));
            writer.DeleteDocuments(searchQuery);

            // add new index entry
            var doc = new Document();

            // add lucene fields mapped to db fields
            doc.Add(new Field("Id", Data.Id.ToString(), Field.Store.YES, Field.Index.NOT_ANALYZED));
            doc.Add(new Field("Name", Data.Name, Field.Store.YES, Field.Index.ANALYZED));
            doc.Add(new Field("Description", Data.Description, Field.Store.YES, Field.Index.ANALYZED));
            doc.Add(new Field("Url", Data.Url, Field.Store.YES, Field.Index.ANALYZED));

            // add entry to index
            writer.AddDocument(doc);
        }

        private static List<Data> GetHits(ScoreDoc[] hits, string textToSearchFor, IndexSearcher indexSearcher)
        {
            int numberOfResults = hits.Length;
            List<Data> dataList = new List<Data>();
 
            foreach(ScoreDoc doc in hits)
            {
                float score = doc.Score;
                int docId = doc.Doc;
                Document singleDoc = indexSearcher.Doc(docId);

                string content = singleDoc.Get("Content").ToLower();
                textToSearchFor = textToSearchFor.ToLower();
                FoundWord foundWord = new FoundWord();
                foundWord.index = content.Replace('-',' ').IndexOf(textToSearchFor);
                foundWord.size = textToSearchFor.Count();

                Data data = new Data();
                data = _mapLuceneDocumentToData(singleDoc);
                data.Description = GetSnippet(content, foundWord);
                data.matches = Regex.Matches(content, textToSearchFor).Count;
                data.docId = Convert.ToInt32(singleDoc.Get("IndexId"));
                 dataList.Add(data);
            }
            return dataList.OrderByDescending(x =>x.matches).OrderBy(x=>x.Id).ToList();
        }

        private static string GetSnippet(string content, FoundWord foundWord)
        {
            int lowerBound = 0;
            int upperBound = 0;
            int beforePhrase = 100;
            int afterPhrase = 100;
            string desc = "";

            if (foundWord.index < 0)
            {
                foundWord.index = 0;
            }

            lowerBound = (foundWord.index - beforePhrase) < 0 ? 0 : foundWord.index - beforePhrase;
            upperBound = (foundWord.index + foundWord.size + afterPhrase) >= content.Length ? content.Length - (foundWord.index + foundWord.size) : afterPhrase;

            desc = desc + content.Substring(lowerBound, foundWord.index - lowerBound);
            desc = desc + "<strong>" + content.Substring(foundWord.index, foundWord.size) + "</strong>";
            desc = desc + content.Substring(foundWord.index + foundWord.size, upperBound);
            desc = desc.Remove(0, desc.IndexOf(' '));
            desc = desc.Remove(desc.LastIndexOf(' '));

            desc = desc + " ... ";
           

            return desc;
        }

         #endregion
    }
}
