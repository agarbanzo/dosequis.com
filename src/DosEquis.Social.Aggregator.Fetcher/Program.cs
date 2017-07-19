using System;
using System.Collections.Generic;
using System.Linq;
using Havas.Social.Aggregator.Model;
using Havas.Common.Filesystem;
using Havas.Social.Aggregator.Service;
using Havas.Social.Aggregator.Constant;
using Havas.Common.Extensions;
using System.IO;
using Havas.Social.Aggregator.Entities;

namespace Havas.Social.Aggregator.Fetcher
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var configs = LoadConfig();
            var subscriptionService = new FeedSubscriptionService(configs, Helper.RecorderLoader.CreateRecorderFromAppConfig());

            if (args != null && args.Count() == 2)
            {
                if (args[0].Equals("-action") && args[1].Equals("fbfix"))
                {
                    FacebookImagesFix(subscriptionService);
                }
            }
            else
            {

                subscriptionService.FetchFeeds();
            }

            //Console.WriteLine("Done...");
            //Console.ReadLine();            
        }

        private static void FacebookImagesFix(FeedSubscriptionService subscriptionService)
        {
            DateTime endDate = DateTime.Now;
            DateTime startDate = endDate.AddDays(-10000);

            var feeds = subscriptionService.RetrieveFeedByNetwork(SocialNetworks.Facebook, FeedTypes.Image,
                startDate, endDate);

            var fbService =
                (FacebookFeedService)
                    subscriptionService.Services.FirstOrDefault(
                        x => x.Config.SocialNetwork == SocialNetworks.Facebook);

            fbService.UpdateFeedsImageUrl(feeds);

            Console.WriteLine("Done...");
            Console.ReadLine();      

        }

        private static void LoadNoneDBEntriesSince() 
        {
            var configs = LoadConfig();
            var subscription = new FeedSubscriptionService(configs, new NullFeedRecorder());
                     
            
            var feeds = subscription.AggregateAllFeedsSince(Convert.ToDateTime("8/20/2013"));

            foreach (var feed in feeds)
            {
                Console.WriteLine(feed.Text);
                Console.WriteLine(feed.PostedOn.ToString());
            }

            Console.WriteLine("Done...");
            Console.ReadLine();      
        
        
        }

        private static void LoadInstagram()
        {
            var config = new ApiConfig()
           {
               FeedId = "DosEquisBrandPage",
               SocialNetwork = Constant.SocialNetworks.Instagram,
               Source = Constant.FeedSource.BrandPage,
               BrandPageId = "50843855",
               HashTags = new List<string>()
            };

          /* {
              FeedId = "DosEquisHashTag",
              SocialNetwork = Constant.SocialNetworks.Instagram,
              Source = Constant.FeedSource.HashTags,
              BrandPageId = string.Empty,
              HashTags = new List<string>{"dosequis"}

          };*/


            var loader = new InstagramFeedService(config);
            loader.SetRecorder(new DatabaseFeedRecorder());
            loader.RetrieveFeed();
        
        }

        private static List<ApiConfig> LoadConfig()
        {
            var path = Path.Combine(Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location),"feedconfig.xml");
            return Kelvin<List<ApiConfig>>.FromXml(File.ReadAllText(path));
        
        }

        private static void GenerateConfigXml()
        {
            var config = new ApiConfig(){
                 SocialNetwork = Constant.SocialNetworks.Facebook,
                 Source = Constant.FeedSource.HashTags,
                 BrandPageId = "15380950339",
                 HashTags = new List<string>{"doequis", "mostinterestingman"}            
            };
            List<ApiConfig> configs = new List<ApiConfig> {config, config};
            var xml = Kelvin<List<ApiConfig>>.ToXmlString(configs);           
            Console.Write(xml);         
        
        }

        private static void InsertSocialfeed()
        { 
            SocialNetworks network = SocialNetworks.Facebook;
            FeedTypes feedtype = FeedTypes.Text;

            var feed = new SocialFeed
            {
                Approved = true,
                Featured = false,
                FeedId = "test",
                FeedType = feedtype.GetStringValue(),
                ImageUrl = "http://test.com",
                Link = "http://test.com",
                LinkToProfile = "http://test.com",
                PostedOn = DateTime.Now,
                SocialNetwork = network.GetStringValue(),
                Text = "test",
                UserName = "Danny",
                UserProfileImageUrl = "test",
                VideoUrl = string.Empty
                
            };

            var feeds = new List<SocialFeed> { feed, feed, feed };

            var recorder = new DatabaseFeedRecorder();
            recorder.RecordFeeds(feeds);

            Console.Write("Done!");
        
        }
    }
}
