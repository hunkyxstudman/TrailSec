(this.webpackJsonptrailseq=this.webpackJsonptrailseq||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=(a(21),a(2)),s=a.n(i),l=a(3),u=a(4),m=a(15),d=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"});a(40);var h=function(e){var t=e.title,a=e.fetchUrl,c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(a);case 2:return t=e.sent,m(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"row_titles"},t),r.a.createElement("div",{className:"row_posters"},i.map((function(e){return r.a.createElement("img",{key:e.id,className:"row_poster",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:e.title})}))))},p="d24839db76c8dbcd16fadc12e2691d05",f={fetchMovies:"discover/movie?api_key=".concat(p,"&language=en-US"),fetchGenre:"https://api.themoviedb.org/3/action/movie/list?api_key=".concat(p,"&language=en-US"),fetchPopular:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(p,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"),fetchKidMovies:"discover/movie?api_key=".concat(p,"&certification_country=US&certification.lte=G&sort_by=popularity")};console.log(f.fetchMovies);var v=f;a(41);var b=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(v.fetchMovies);case 2:t=e.sent,c(t.data.results[Math.floor(6*Math.random())+1]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(a),r.a.createElement("header",{className:"banner",style:{width:"100%",backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(a.poster_path,'")'),backgroundPosition:"50% 10%"}},r.a.createElement("div",{className:"banner_stuff"},r.a.createElement("div",null,r.a.createElement("h1",{className:"banner_title"}," ",null===a||void 0===a?void 0:a.title),r.a.createElement("h5",{className:"banner_desc"},null===a||void 0===a?void 0:a.overview),r.a.createElement("div",{className:"banner_btns"},r.a.createElement("button",{className:"banner_btn"},"Play"),r.a.createElement("button",{className:"banner_btn"},"Download poster")))))};a(42);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(b,null,r.a.createElement("h1",null,"Banner")),r.a.createElement(h,{title:"Trending Movies",fetchUrl:v.fetchMovies}),r.a.createElement(h,{title:"Action movies",fetchUrl:v.fetchPopular}),r.a.createElement(h,{title:"Adventure movies",fetchUrl:v.fetchKidMovies}),r.a.createElement(h,{title:"Drama movies",fetchUrl:v.fetchKidMovies}),r.a.createElement(h,{title:"Romantic movies",fetchUrl:v.fetchMovies}),r.a.createElement("h1",null,"TrailSeq")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f68d93f3.chunk.js.map