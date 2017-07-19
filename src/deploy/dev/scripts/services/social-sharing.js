'use strict'
window.fbAsyncInit = function() {
  FB.init({ 
    appId      :209002842602792,
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
};
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return; 
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

var fbShare = function(data){
    var baseLocation = window.location.origin;
    var currentLocation = window.location.href;
      var opts = {
            method: 'share',
            href: (data.href || currentLocation),
            title:data.title,
            description:data.copy,
            hashtag:(data.hashtag || 'MostInterestingMan'),
            picture:baseLocation + "/" + data.img
          }
      FB.ui(opts, function(response){});
}
var twShare = function(data){
    var currentLocation = window.location.href;
    var text =  data.text || 'copy';
    var link = data.link || currentLocation;
    var tags = data.tags || '';
    var url = 'https://twitter.com/share?url='+ encodeURIComponent(link)+'&hashtags='+ encodeURIComponent(tags)+'&via=dosequis&text=' +  encodeURIComponent(text);
    window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=300")
}
  $('body').on('click','.tw[data-twShare]',ev=>{
      ev.preventDefault();
      var data = $(ev.currentTarget).data('twshare');
      var shareData = (typeof data == 'string' ? JSON.parse(data) : data);
      twShare(shareData);
  });
  $('body').on('click','.fb[data-fbShare]',ev=>{
      ev.preventDefault();
      var data = $(ev.currentTarget).data('fbshare');
      var shareData = (typeof data == 'string' ? JSON.parse(data) : data);
      fbShare(shareData);
  });


exports.twShare = twShare;
exports.fbShare = fbShare;

