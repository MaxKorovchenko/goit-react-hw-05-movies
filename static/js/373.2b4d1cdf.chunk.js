"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[373],{155:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(87),a=n(689),c=n(876),s="MoviesList_list__0Owr9",u="MoviesList_item__eePYv",i="MoviesList_image__oyOXu",o="MoviesList_title__PB2c8",p="MoviesList_link__8rTGX",f=n(184),l=function(t){var e=t.items,n=(0,a.TH)();return(0,f.jsx)("ul",{className:s,children:e.map((function(t){var e=t.id,a=t.title,s=t.poster_path;return(0,f.jsx)("li",{className:u,children:(0,f.jsxs)(r.rU,{className:p,to:"/movies/".concat(e),state:{from:n},children:[(0,f.jsx)("img",{className:i,src:s?"".concat("https://image.tmdb.org/t/p/w500").concat(s):c,alt:a,width:"300",height:"450"}),(0,f.jsx)("p",{className:o,children:a})]})},e)}))})},v=l;l.defaultProps={list:[]}},373:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(791),i=n(155),o=n(390),p="TrendingMovies_title__-nJit",f=n(184),l=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],l=(0,u.useState)(null),v=(0,a.Z)(l,2),h=v[0],m=v[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.wr)();case 3:e=t.sent,n=e.data,c(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),m(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:p,children:"Trending today"}),h&&(0,f.jsxs)("p",{children:["Ooooops... something went wrong \ud83d\ude25 ",h]}),(0,f.jsx)(i.Z,{items:n})]})},v=function(){return(0,f.jsx)("main",{children:(0,f.jsx)(l,{})})}},390:function(t,e,n){n.d(e,{Hx:function(){return l},JX:function(){return o},fP:function(){return p},uV:function(){return f},wr:function(){return i}});var r=n(861),a=n(757),c=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="6b54f8bf57e01fb03b792219232215b2",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},876:function(t,e,n){t.exports=n.p+"static/media/placeholder.4b94750d2152a266517b.jpg"}}]);
//# sourceMappingURL=373.2b4d1cdf.chunk.js.map