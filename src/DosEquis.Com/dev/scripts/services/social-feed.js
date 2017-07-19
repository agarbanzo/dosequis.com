'use strict'
exports.getSocialFeed = function getSocialFeed(params){
    var params = params || {};
    params.startDate = params.startDate || '';
    params.pageName = params.pageName || 'Home';
    var q = '?startDate=' + params.startDate + '&pageName=' + params.pageName;
    return $.get("/api/Feed/FeedList" + q);
}