"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[625],{625:function(e,n,r){r.r(n),r.d(n,{default:function(){return M}});var t=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),o=r(689),u=r(87),l=r(828),p="BackLink_link__Echxs",d=r(184),f=function(e){var n=e.to,r=e.children;return(0,d.jsxs)(u.rU,{className:p,to:n,children:[(0,d.jsx)(l.Fjg,{}),r]})},v=r(876),h="MovieCard_container__4KN1P",m="MovieCard_title__mQEBM",x="MovieCard_score__T8-vK",_="MovieCard_wrapper__UNKq4",j="MovieCard_divider__nJOe8",w="MovieCard_span__-jz0s",k=function(e){var n=e.movie,r=n.title,t=n.poster_path,a=n.overview,s=n.genres,c=n.vote_average;return(0,d.jsxs)("section",{className:h,children:[(0,d.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w500").concat(t):v,alt:r,width:"300",height:"450"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:m,children:r}),(0,d.jsxs)("p",{className:x,children:["User score: ",c]}),(0,d.jsxs)("p",{className:_,children:[(0,d.jsx)("span",{className:j,children:"Overview"})," ",a]}),(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("span",{className:j,children:"Genres"}),(0,d.jsx)("p",{children:null===s||void 0===s?void 0:s.map((function(e){var n=e.id,r=e.name;return(0,d.jsx)("span",{className:w,children:r},n)}))})]})]})]})},b="AddInfo_title__kowp3",g="AddInfo_list__aBQjg",N="AddInfo_link__IE5bT",Z=function(){return(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{className:b,children:"Additional information"}),(0,d.jsxs)("ul",{className:g,children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{className:N,to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{className:N,to:"reviews",children:"Reviews"})})]})]})},y=r(673),C=r(390),M=function(){var e,n,r=(0,i.useState)(null),s=(0,a.Z)(r,2),u=s[0],l=s[1],p=(0,i.useState)(null),v=(0,a.Z)(p,2),h=v[0],m=v[1],x=(0,o.UO)().movieId,_=(0,o.TH)(),j=(0,i.useRef)(null!==(e=null===(n=_.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,C.fP)(x);case 3:n=e.sent,r=n.data,l(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,d.jsxs)("main",{style:{width:900,margin:"0 auto"},children:[(0,d.jsx)(f,{to:j.current,children:"GO BACK"}),h&&(0,d.jsxs)("p",{children:["Ooooops... something went wrong \ud83d\ude25 ",h]}),u&&(0,d.jsx)(k,{movie:u}),(0,d.jsx)(Z,{}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(y.Z,{}),children:(0,d.jsx)(o.j3,{})})]})}},390:function(e,n,r){r.d(n,{Hx:function(){return d},JX:function(){return u},fP:function(){return l},uV:function(){return p},wr:function(){return o}});var t=r(861),a=r(757),s=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="6b54f8bf57e01fb03b792219232215b2",o=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},876:function(e,n,r){e.exports=r.p+"static/media/placeholder.4b94750d2152a266517b.jpg"}}]);
//# sourceMappingURL=625.d38feec3.chunk.js.map