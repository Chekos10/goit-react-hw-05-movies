"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[598],{639:function(e,t,n){n.d(t,{a:function(){return i}});var r="Loader_loader__+lRPl",a=n(643),c=n(184),i=function(){return(0,c.jsx)("div",{className:r,children:(0,c.jsx)(a.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})}},598:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(791),o=n(689),u=n(617),l=n(639),d=n(87),p="MovieDetail_photoSection__Tlc7q",v="MovieDetail_backLink__BlCAs",h="MovieDetail_detailsSection__M7uEH",f="MovieDetail_movieTitle__+4GbW",x="MovieDetail_genresList__UGVid",m="MovieDetail_castLink__IpRE5",_="MovieDetail_reviewLink__sy99z",k=n(184),j=(0,s.lazy)((function(){return n.e(527).then(n.bind(n,527))})),w=(0,s.lazy)((function(){return n.e(695).then(n.bind(n,695))})),y=function(){var e,t,n=(0,s.useState)([]),c=(0,a.Z)(n,2),y=c[0],g=c[1],b=(0,o.TH)(),Z=(0,s.useState)(!0),M=(0,a.Z)(Z,2),N=M[0],L=M[1],D=(0,o.UO)().movieId;(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.l0)(D);case 3:(t=e.sent)&&(g(t),L(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),L(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[D]);var S=(0,s.useRef)(null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),C=y.poster_path;return(0,k.jsxs)(k.Fragment,{children:[N?(0,k.jsx)(l.a,{}):(0,k.jsxs)("div",{className:h,children:[(0,k.jsxs)("div",{className:p,children:[(0,k.jsx)(d.rU,{className:v,to:S.current,children:" Go back"}),C?(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(C),alt:"".concat(y.original_title),width:"300px"}):(0,k.jsx)("p",{children:"No photo"})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h2",{className:f,children:y.original_title}),(0,k.jsxs)("p",{children:[" User Score ",y.vote_average]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:y.overview}),y.genres&&(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Genres"}),y.genres.map((function(e){return(0,k.jsx)("li",{className:x,children:e.name},e.id)}))]})]})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Additional information"}),(0,k.jsx)(d.OL,{className:m,to:"cast",children:"Cast"}),(0,k.jsx)(d.OL,{className:_,to:"review",children:"Review"})]}),(0,k.jsx)(s.Suspense,{children:(0,k.jsxs)(o.Z5,{children:[(0,k.jsx)(o.AW,{path:"cast",element:(0,k.jsx)(j,{})}),(0,k.jsx)(o.AW,{path:"review",element:(0,k.jsx)(w,{})})]})})]})}},617:function(e,t,n){n.d(t,{Cm:function(){return p},IT:function(){return u},M8:function(){return d},l0:function(){return l},xX:function(){return o}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s={url:"https://api.themoviedb.org/3",key:"dd883d862d7cd3ce2da3b10a6f522ee3"},o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s.url,"/trending/movie/day?api_key=").concat(s.key));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s.url,"/search/movie?api_key=").concat(s.key,"&query=").concat(t),s);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s.url,"/movie/").concat(t,"?api_key=").concat(s.key),s);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s.url,"/movie/").concat(t,"/credits?api_key=").concat(s.key));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s.url,"/movie/").concat(t,"/reviews?api_key=").concat(s.key));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=598.7fc27241.chunk.js.map