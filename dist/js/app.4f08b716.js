(function(e){function t(t){for(var n,i,o=t[0],u=t[1],c=t[2],h=0,p=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0129":function(e,t,r){"use strict";r("a576")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{"generes-array":e.genre,"authors-array":e.authors},on:{"genre-search":e.getGenre,"author-search":e.getAutor}}),r("main",{staticClass:"d-flex align-items-center"},[r("MusicCard",{attrs:{artists:e.getSongs,"selected-genre":e.searchGenre,"selected-author":e.searchAuthor}})],1)],1)},s=[],i=(r("4de4"),r("d3b7"),r("159b"),r("caad"),r("2532"),r("bc3a")),o=r.n(i),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("nav",{staticClass:"navbar navbar-light"},[r("div",{staticClass:"container"},[e._m(0),r("div",{attrs:{id:"filters"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.genreValue,expression:"genreValue"}],attrs:{name:"genre",id:"genre"},on:{input:function(t){return e.$emit("genre-search",t.target.value)},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.genreValue=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("Seleziona genere")]),e._l(e.generesArray,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2),r("select",{directives:[{name:"model",rawName:"v-model",value:e.authorValue,expression:"authorValue"}],attrs:{name:"author",id:"author"},on:{input:function(t){return e.$emit("author-search",t.target.value)},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.authorValue=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("Seleziona per autore")]),e._l(e.authorsArray,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)])])])])},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[r("img",{staticClass:"img-fluid",attrs:{src:"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",alt:"",width:"30",height:"24"}})])}],l={name:"Header",props:["generesArray","authorsArray"],data:function(){return{genreValue:"",authorValue:""}},mounted:function(){}},h=l,p=(r("9d29"),r("2877")),f=Object(p["a"])(h,u,c,!1,null,"867111aa",null),d=f.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row g-3 text-center"},[0==e.artists.length?r("div",{staticClass:" text-warning text-white"},[e._v(" Nessuna canzone disponibile "),r("br"),r("span",{staticClass:"h3"},[e._v("Seleziona altri filtri per cercare altri brani")])]):e._l(e.artists,(function(t){return r("div",{key:t.author,staticClass:"card text-center"},[r("div",{staticClass:"card-cont"},[r("img",{staticClass:"img-fluid",attrs:{src:t.poster,alt:t.author}})]),r("div",{staticClass:"card-text d-flex flex-column justify-content-end flex-grow-1"},[r("p",{staticClass:"song-name text-white text-uppercase"},[e._v(e._s(t.title))]),r("p",{staticClass:"author"},[e._v(e._s(t.author))]),r("p",{staticClass:"year"},[e._v(e._s(t.year))])])])}))],2)])},v=[],m={name:"MusicCard",props:["artists","selectedAuthor","selectedGenre"]},y=m,_=(r("0129"),Object(p["a"])(y,g,v,!1,null,"0755c8c6",null)),b=_.exports,A={name:"App",components:{Header:d,MusicCard:b},data:function(){return{message:"nessun risultato disponibile",artists:[],genre:[],authors:[],searchGenre:"",searchAuthor:""}},computed:{genreArray:function(){return this.genre},getSongs:function(){var e=this;return this.artists.filter((function(t){if(!e.searchGenre&&!e.searchAuthor)return!0;if(!e.searchGenre&&e.searchAuthor||e.searchGenre&&!e.searchAuthor){if(t.author===e.searchAuthor||t.genre===e.searchGenre)return!0}else if(t.genre===e.searchGenre&&t.author===e.searchAuthor)return!0}))}},methods:{getArtists:function(){var e=this;o.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.artists=t.data.response}))},getArrayFromApi:function(e,t){o.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(r){r.data.response.forEach((function(r){e.includes(r[t])||e.push(r[t])}))}))},getGenre:function(e){this.searchGenre=e},getAutor:function(e){this.searchAuthor=e}},mounted:function(){this.getArtists(),this.getArrayFromApi(this.genre,"genre"),this.getArrayFromApi(this.authors,"author")}},x=A,w=(r("5c0b"),Object(p["a"])(x,a,s,!1,null,null,null)),C=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},8723:function(e,t,r){},"9c0c":function(e,t,r){},"9d29":function(e,t,r){"use strict";r("8723")},a576:function(e,t,r){}});
//# sourceMappingURL=app.4f08b716.js.map