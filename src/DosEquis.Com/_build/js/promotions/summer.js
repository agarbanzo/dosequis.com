webpackJsonp([11],{328:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n//import slick from 'slick-carousel';\n\n\n//import YouTubePlayer from 'youtube-player';\n\n\n__webpack_require__(563);\n\n__webpack_require__(19);\n\n__webpack_require__(51);\n\nvar _helpers = __webpack_require__(279);\n\nvar _tracking = __webpack_require__(11);\n\nvar _tracking2 = _interopRequireDefault(_tracking);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//import Loader from \"components/loader/loader\";\n\n//import isMobile from 'ismobilejs';\n\n__webpack_require__(63);\n\nvar imageEls = void 0,\n    imgIntvl = void 0,\n    currentImgId = -1;\n\nvar Summer = function () {\n  function Summer(selector) {\n    _classCallCheck(this, Summer);\n\n    var self = this;\n    imageEls = $('.destination');\n    this.doImageFades();\n  }\n\n  _createClass(Summer, [{\n    key: 'doImageFades',\n    value: function doImageFades() {\n      var self = this;\n      //console.log('currentImgId', currentImgId)\n      currentImgId = currentImgId === 2 ? 0 : currentImgId + 1;\n      var i = imageEls.length;\n      while (i--) {\n        $(imageEls[i]).css({ opacity: i === currentImgId ? 1 : 0 });\n      }\n      setTimeout(function () {\n        self.doImageFades();\n      }, 5000);\n    }\n  }]);\n\n  return Summer;\n}();\n\nexports.default = Summer;\n\n\nvar summer = new Summer();\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/scripts/promotions/summer.js\n// module id = 328\n// module chunks = 11\n\n//# sourceURL=webpack:///./dev/scripts/promotions/summer.js?")},51:function(module,exports,__webpack_require__){"use strict";eval("/* WEBPACK VAR INJECTION */(function($) {\n\nwindow.fbAsyncInit = function () {\n  FB.init({\n    appId: 209002842602792,\n    xfbml: true,\n    version: 'v2.8'\n  });\n  FB.AppEvents.logPageView();\n};\n(function (d, s, id) {\n  var js,\n      fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s);js.id = id;\n  js.src = \"//connect.facebook.net/en_US/sdk.js\";\n  fjs.parentNode.insertBefore(js, fjs);\n})(document, 'script', 'facebook-jssdk');\n\nvar fbShare = function fbShare(data) {\n  var baseLocation = window.location.origin;\n  var currentLocation = window.location.href;\n  var opts = {\n    method: 'share',\n    href: data.href || currentLocation,\n    title: data.title,\n    description: data.copy,\n    hashtag: data.hashtag || 'MostInterestingMan',\n    picture: baseLocation + \"/\" + data.img\n  };\n  FB.ui(opts, function (response) {});\n};\nvar twShare = function twShare(data) {\n  var currentLocation = window.location.href;\n  var text = data.text || 'copy';\n  var link = data.link || currentLocation;\n  var tags = data.tags || '';\n  var url = 'https://twitter.com/share?url=' + encodeURIComponent(link) + '&hashtags=' + encodeURIComponent(tags) + '&via=dosequis&text=' + encodeURIComponent(text);\n  window.open(url, \"_blank\", \"toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=300\");\n};\n$('body').on('click', '.tw[data-twShare]', function (ev) {\n  ev.preventDefault();\n  var data = $(ev.currentTarget).data('twshare');\n  var shareData = typeof data == 'string' ? JSON.parse(data) : data;\n  twShare(shareData);\n});\n$('body').on('click', '.fb[data-fbShare]', function (ev) {\n  ev.preventDefault();\n  var data = $(ev.currentTarget).data('fbshare');\n  var shareData = typeof data == 'string' ? JSON.parse(data) : data;\n  fbShare(shareData);\n});\n\nexports.twShare = twShare;\nexports.fbShare = fbShare;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/scripts/services/social-sharing.js\n// module id = 51\n// module chunks = 3 8 9 10 11\n\n//# sourceURL=webpack:///./dev/scripts/services/social-sharing.js?")},563:function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/scss/pages/promotions/summer.scss\n// module id = 563\n// module chunks = 11\n\n//# sourceURL=webpack:///./dev/scss/pages/promotions/summer.scss?")},592:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(328);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi ./dev/scripts/promotions/summer\n// module id = 592\n// module chunks = 11\n\n//# sourceURL=webpack:///multi_./dev/scripts/promotions/summer?")}},[592]);