"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(t,e,r){r.r(e);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(689),o=r(87),f=r(390),p=r(184);e.default=function(){var t,e=(0,s.useState)([]),r=(0,a.Z)(e,2),u=r[0],v=r[1],l=(0,i.TH)(),h=(0,o.lr)(),m=(0,a.Z)(h,2),d=m[0],x=m[1],b=null!==(t=d.get("query"))&&void 0!==t?t:"";(0,s.useEffect)((function(){if(""!==b){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.JX)(b);case 3:e=t.sent,r=e.data,v(r.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}}),[b]);return(0,p.jsxs)("main",{children:[(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),x({query:t.target.search.value}),t.target.reset()},children:[(0,p.jsx)("input",{type:"text",name:"search"}),(0,p.jsx)("button",{type:"submit",children:"search"})]}),(0,p.jsx)("ul",{children:u.map((function(t){var e=t.id,r=t.title;return(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"".concat(e),state:{from:l},children:(0,p.jsx)("p",{children:r})})},e)}))})]})}},390:function(t,e,r){r.d(e,{Hx:function(){return v},JX:function(){return o},fP:function(){return f},uV:function(){return p},wr:function(){return i}});var n=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="6b54f8bf57e01fb03b792219232215b2",i=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.395c2b4a.chunk.js.map