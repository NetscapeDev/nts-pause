(function(t){function e(e){for(var o,n,c=e[0],r=e[1],l=e[2],d=0,p=[];d<c.length;d++)n=c[d],a[n]&&p.push(a[n][0]),a[n]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],o=!0,c=1;c<i.length;c++){var r=i[c];0!==a[r]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=i[0]))}return t}var o={},a={app:0},s=[];function n(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=o,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},2106:function(t,e,i){},"22de":function(t,e,i){"use strict";var o=i("2106"),a=i.n(o);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var o=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],n=(i("6b54"),i("96cf"),i("3b8d")),c={send:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var i,o=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=o.length>1&&void 0!==o[1]?o[1]:{},t.next=3,fetch("https://nts-pause/".concat(e),{method:"post",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(i)}).catch((function(t){return t}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),emulate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;window.dispatchEvent(new MessageEvent("message",{data:{type:t,data:e}}))}},r={name:"app",components:{},data:function(){return{show:!1}},computed:{console:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return console})),window:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return window})),document:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return document}))},destroyed:function(){window.removeEventListener("message",this.listener)},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){switch(e.keyCode){case 27:t.$root.$emit("close_ui");break}})),this.listener=window.addEventListener("message",(function(e){var i=e.data;switch(i.action){case"open_menu":t.$root.$emit("open_ui"),t.$root.$emit("change_data_2",i.data),c.emulate(i,10);break;case"close_ui":t.$root.$emit("close_ui");break;case"open_url":t.$nextTick((function(){t.window.invokeNative("openUrl",i.url)})),c.emulate(i,10);break}}),!1)},methods:{}},l=r,u=i("2877"),d=Object(u["a"])(l,a,s,!1,null,null,null),p=d.exports,v=i("8c4f"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Transition",{attrs:{name:"fade"}},[t.pause.active?i("div",{staticClass:"absolute overflow-hidden select-none w-[100%] justify-center h-[100%] flex bg-zinc-900/[100%]"},[i("div",{staticClass:"flex flex-col my-auto"},[t.pause.config.tasto_esc?i("div",{staticClass:"flex"},[i("h1",{staticClass:"w-fit z-[2] h-fit text-zinc-800 text-[1.1vmin] flex items-center justify-center px-[0.4vw] py-[0.6vh] bg-zinc-100 rounded-[0.5vmin] border-b-[0.3vh] border-zinc-400 uppercase"},[t._v(t._s(t.pause.config.langs["esc"]))]),i("div",{staticClass:"w-fit px-[1vw] ml-[-0.1vw] py-[0.1vh] bg-gradient-to-r from-zinc-600/[50%] flex items-center justify-center text-zinc-400 text-[1.1vmin] to-transparent uppercase"},[t._v(t._s(t.pause.config.langs["esc_desc"]))])]):t._e(),i("div",{staticClass:"flex gap-[0.5vw] w-[70vw]"},[i("h1",{staticClass:"text-zinc-300 font-[600] text-[3vmin] uppercase"},[t._v(t._s(t.getArgs(t.pause.config.nome_server)[0])+" "),t.getArgs(t.pause.config.nome_server)[1]?i("b",{staticClass:"font-[600]",style:{color:t.pause.config.colore}},[t._v(t._s(t.pause.config.nome_server.slice(t.getArgs(t.pause.config.nome_server)[0].length)))]):t._e()]),i("div",{staticClass:"ml-auto flex items-center gap-[3vw]"},[i("div",{staticClass:"flex items-center gap-[0.5vw]"},[i("h1",{staticClass:"text-zinc-400 text-[1.5vmin]"},[t._v(t._s(t.numeroPunti(t.pause.my_data.stats.banca))+" "),i("b",{staticClass:"font-[400]",style:{color:t.pause.config.colore}},[t._v("$")])]),i("div",{staticClass:"w-[2.3vw] h-[3.7svh] rounded border-[0.11vw] border-zinc-700 bg-gradient-to-b from-zinc-700/[50%] to-zinc-700/[20%] flex items-center justify-center"},[i("i",{staticClass:"fa-solid fa-bank text-[1.6vmin]",style:{color:t.pause.config.colore}})])]),i("div",{staticClass:"flex items-center gap-[0.5vw]"},[i("h1",{staticClass:"text-zinc-400 text-[1.5vmin]"},[t._v(t._s(t.numeroPunti(t.pause.my_data.stats.contanti))+" "),i("b",{staticClass:"font-[400]",style:{color:t.pause.config.colore}},[t._v("$")])]),i("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Il tuo saldo",expression:"'Il tuo saldo'"}],staticClass:"w-[2.3vw] h-[3.7svh] rounded border-[0.11vw] border-zinc-700 bg-gradient-to-b from-zinc-700/[50%] to-zinc-700/[20%] flex items-center justify-center"},[i("svg",{staticClass:"w-[1.3vw] fill-none",style:{stroke:t.pause.config.colore},attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M14.5 9C14.5 9 13.7609 8 11.9999 8C8.49998 8 8.49998 12 11.9999 12C15.4999 12 15.5 16 12 16C10.5 16 9.5 15 9.5 15","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M12 7V17","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","stroke-width":"2"}})])])]),i("div",{staticClass:"flex items-center gap-[0.8vw]"},[i("div",{staticClass:"flex items-end flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[1.4vmin] font-[500]"},[t._v(t._s(t.pause.my_data.nome))]),i("h1",{staticClass:"text-zinc-400 text-[1.2vmin] font-[500]"},[t._v(t._s(t.pause.my_data.lavoro)+" - "+t._s(t.pause.my_data.grado))])])])])]),i("div",{staticClass:"flex z-[3] mt-[3vh] max-h-[65vh] gap-[0.5vw] w-[70vw]"},[i("div",{staticClass:"flex flex-col w-[35vw] h-[65vh]"},[i("div",{staticClass:"flex gap-[0.5vw] w-[100%] h-[100%]"},[i("div",{staticClass:"w-[100%] hover:opacity-[50%] transition-all cursor-pointer relative px-[1vw] overflow-hidden h-[100%] gap-[0.3vw] py-[2vh] rounded border-[0.11vw] backdrop-blur-[5px] border-zinc-600/[20%] bg-gradient-to-b from-zinc-700/[40%] to-zinc-700/[20%] flex",on:{click:function(e){t.goUrl(t.pause.shop.url),t.pressButton("shop",!1)}}},[i("div",{staticClass:"flex flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[2.5vmin] font-[500] tracking-[0.1vw] uppercase"},[t._v(t._s(t.pause.config.langs["shop_titolo"]))]),i("h1",{staticClass:"text-zinc-500 text-[1.4vmin]"},[t._v(t._s(t.pause.config.langs["shop_desc"]))]),Number(t.pause.shop.sconto)>0?i("div",{staticClass:"flex flex-col absolute bottom-0 mb-[20vh] right-0 mr-[2vw]"},[i("div",{staticClass:"w-[6vh] flex items-center justify-center ml-[2vw] opacity-[80%] h-[6vh] rotate-[-45deg] border-[0.11vw]",style:{"background-color":t.pause.config.colore+"7e","border-color":t.pause.config.colore}},[i("h1",{staticClass:"text-zinc-200 font-[600] flex items-center text-[1.6vmin] rotate-[45deg]"},[t._v("-"+t._s(t.pause.shop.sconto)+" "),i("b",{staticClass:"font-[600]",style:{color:t.pause.config.colore}},[t._v("%")])])]),i("div",{staticClass:"w-[4vh] mt-[0.5vh] ml-[1vw] opacity-[80%] h-[4vh] rotate-[-45deg] border-[0.11vw]",style:{"background-color":t.pause.config.colore+"7e","border-color":t.pause.config.colore}})]):t._e(),i("img",{staticClass:"absolute z-[-1] mb-[-1vh] right-0 left-0 mx-auto bottom-0 w-[100%] h-[19vh]",attrs:{src:t.pause.images["shop"]}}),i("div",{staticClass:"flex flex-col w-fit px-[0.5vw] max-h-[17vh] overflow-hidden hover:overflow-y-auto transition-all gap-[0.7vh] mt-[3vh]"},t._l(t.pause.shop.cose_che_vendiamo,(function(e,o){return i("div",{key:o,staticClass:"flex items-center gap-[0.4vw]"},[i("div",{staticClass:"w-[0.8vh] h-[0.8vh] rotate-[-45deg] border-[0.11vw]",style:{"background-color":t.pause.config.colore+"7e","border-color":t.pause.config.colore}}),i("h1",{staticClass:"text-zinc-200 font-[600] text-[1.3vmin]"},[t._v(t._s(e))])])})),0)])]),i("div",{staticClass:"flex flex-col w-[100%] h-[100%] gap-[1vh]"},[i("div",{staticClass:"w-[100%] relative overflow-hidden px-[1vw] h-[100%] gap-[0.3vw] py-[2vh] rounded border-[0.11vw] backdrop-blur-[5px] border-zinc-600/[20%] bg-gradient-to-b from-zinc-700/[40%] to-zinc-700/[20%] flex"},[i("div",{staticClass:"flex flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[2.5vmin] font-[500] tracking-[0.1vw] uppercase"},[t._v(t._s(t.pause.config.bottoni["1"].titolo))]),i("h1",{staticClass:"text-zinc-500 text-[1.4vmin]"},[t._v(t._s(t.pause.config.bottoni["1"].desc))]),i("div",{staticClass:"w-fit h-fit px-[1vw] cursor-pointer hover:opacity-[40%] transition-all py-[0.2vh] text-zinc-200 mt-auto border-[0.1vw] text-[1.5vmin] rounded",style:{"background-color":t.pause.config.colore+"7e","border-color":t.pause.config.colore},on:{click:function(e){return t.pressButton("bottone_1",t.pause.config.bottoni["1"].chiudi_quando_premuto)}}},[t._v(t._s(t.pause.config.bottoni["1"].label))]),i("img",{staticClass:"absolute opacity-[20%] z-[-1] mr-[-3vw] right-0 w-[10vw] h-[100%]",attrs:{src:t.pause.images["bottone_1"]}})])]),i("div",{staticClass:"w-[100%] relative overflow-hidden px-[1vw] h-[100%] gap-[0.3vw] py-[2vh] rounded border-[0.11vw] backdrop-blur-[5px] border-zinc-600/[20%] bg-gradient-to-b from-zinc-700/[40%] to-zinc-700/[20%] flex"},[i("div",{staticClass:"flex flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[2.5vmin] font-[500] tracking-[0.1vw] uppercase"},[t._v(t._s(t.pause.config.bottoni["2"].titolo))]),i("h1",{staticClass:"text-zinc-500 text-[1.4vmin]"},[t._v(t._s(t.pause.config.bottoni["2"].desc))]),i("div",{staticClass:"w-fit h-fit px-[1vw] cursor-pointer hover:opacity-[40%] transition-all py-[0.2vh] text-zinc-200 mt-auto border-[0.1vw] text-[1.5vmin] rounded",style:{"background-color":t.pause.config.colore+"7e","border-color":t.pause.config.colore},on:{click:function(e){return t.pressButton("bottone_2",t.pause.config.bottoni["2"].chiudi_quando_premuto)}}},[t._v(t._s(t.pause.config.bottoni["2"].label))]),i("img",{staticClass:"absolute opacity-[20%] z-[-1] mr-[-3vw] right-0 w-[10vw] h-[100%]",attrs:{src:t.pause.images["bottone_2"]}})])])])]),i("div",{staticClass:"w-[100%] relative overflow-hidden px-[1vw] mt-[1vh] h-[20vh] gap-[0.3vw] py-[2vh] rounded border-[0.11vw] backdrop-blur-[5px] border-zinc-600/[20%] bg-gradient-to-b from-zinc-700/[40%] to-zinc-700/[20%] flex"},[i("div",{staticClass:"flex flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[2.5vmin] font-[500] tracking-[0.1vw] uppercase"},[t._v(t._s(t.pause.config.riquadro_testo.titolo))]),i("h1",{staticClass:"text-zinc-500 text-[1.4vmin] w-[15vw]"},[t._v(t._s(t.pause.config.riquadro_testo.desc))]),i("img",{staticClass:"absolute z-[-1] right-0 mr-[3vw] w-[7vw] h-[100%]",attrs:{src:t.pause.images["riquadro"]}})])])]),i("div",{staticClass:"flex flex-col w-[50%] max-h-[65vh]"},[i("div",{staticClass:"w-[100%] px-[1vw] relative overflow-hidden h-[54.1%] gap-[0.3vw] py-[2vh] rounded border-[0.11vw] backdrop-blur-[5px] border-zinc-600/[20%] bg-gradient-to-b from-zinc-700/[40%] to-zinc-700/[20%] flex"},[i("div",{staticClass:"flex flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[2.5vmin] font-[500] tracking-[0.1vw] uppercase"},[t._v(t._s(t.pause.config.langs["eventi_titolo"]))]),i("h1",{staticClass:"text-zinc-300 text-[1.7vmin] font-[600] mt-[0.3vh]"},[t._v(t._s(t.pause.evento.nome))]),i("h1",{staticClass:"text-zinc-500 text-[1.4vmin] w-[25vw]"},[t._v(t._s(t.pause.evento.desc))]),i("img",{staticClass:"absolute z-[-1] right-0 w-[10vw] h-[100%]",attrs:{src:t.pause.images["eventi"]}}),i("div",{staticClass:"flex flex-wrap items-end max-w-[24vw] gap-[0.3vw] mt-auto"},t._l(t.pause.evento.tags,(function(e,o){return i("div",{key:o,staticClass:"w-fit h-fit px-[1vw] py-[0.2vh] text-zinc-200 mt-auto border-[0.1vw] text-[1.5vmin] rounded",style:{"background-color":t.pause.config.colore+"7e","border-color":t.pause.config.colore},domProps:{innerHTML:t._s(e)}})})),0)])]),i("div",{staticClass:"flex w-[100%] mt-[1vh] h-[100%] flex gap-[0.5vw]"},[i("div",{staticClass:"w-[100%] px-[1vw] relative h-[100%] gap-[0.3vw] py-[2vh] rounded border-[0.11vw] backdrop-blur-[5px] border-zinc-600/[20%] bg-gradient-to-b from-zinc-700/[40%] to-zinc-700/[20%] flex"},[i("div",{staticClass:"flex flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[2.5vmin] font-[500] tracking-[0.1vw] uppercase"},[t._v(t._s(t.pause.config.langs["inventario_titolo"]))]),i("h1",{staticClass:"text-zinc-500 text-[1.4vmin]"},[t._v(t._s(t.pause.config.langs["inventario_desc"]))]),i("div",{staticClass:"flex gap-[1vw] items-center mt-[2vh]"},[i("div",{staticClass:"flex gap-[0.5vw] items-center"},[i("i",{staticClass:"fa-solid fa-backpack text-[1.7vmin]",style:{color:t.pause.config.colore}}),i("h1",{staticClass:"text-zinc-300 text-[1.3vmin] font-[600]"},[t._v(t._s(t.numeroPunti(t.pause.inventario.kg))+"/"),i("b",{staticClass:"font-[600]",style:{color:t.pause.config.colore}},[t._v(t._s(t.pause.inventario.kg_massimi))]),t._v(" "+t._s(t.pause.config.langs["kg"]))])]),i("div",{staticClass:"flex gap-[0.5vw] items-center"},[i("i",{staticClass:"fa-solid fa-star text-[1.7vmin]",style:{color:t.pause.config.colore}}),i("h1",{staticClass:"text-zinc-300 text-[1.3vmin] font-[600]"},[t._v(t._s(t.pause.inventario.oggetti)+" "+t._s(t.pause.config.langs["oggetti"]))])])]),i("img",{staticClass:"absolute z-[-1] mx-auto right-0 left-0 bottom-0 w-[11vw] h-[24vh]",attrs:{src:t.pause.images["inventario"]}})])]),i("div",{staticClass:"flex w-[100%] h-[100%] flex-col gap-[1vh]"},[i("div",{staticClass:"w-[100%] overflow-hidden cursor-pointer hover:bg-zinc-800/[30%] transition-all hover:opacity-[50%] relative px-[1vw] h-[100%] gap-[0.3vw] py-[2vh] rounded border-[0.11vw] backdrop-blur-[5px] border-zinc-600/[20%] bg-gradient-to-b from-zinc-700/[40%] to-zinc-700/[20%] flex",on:{click:function(e){return t.pressButton("mappa",!0)}}},[i("img",{staticClass:"absolute mt-[-2vh] mr-[-2vw] z-[-1] right-0 w-[6vw] h-[100%]",attrs:{src:t.pause.images["mappa"]}}),i("div",{staticClass:"flex flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[2.5vmin] font-[500] tracking-[0.1vw] uppercase"},[t._v(t._s(t.pause.config.langs["mappa_titolo"]))]),i("h1",{staticClass:"text-zinc-500 text-[1.4vmin]"},[t._v(t._s(t.pause.config.langs["mappa_desc"]))])])]),i("div",{staticClass:"w-[100%] overflow-hidden cursor-pointer hover:bg-zinc-800/[30%] transition-all hover:opacity-[50%] relative px-[1vw] h-[100%] gap-[0.3vw] py-[2vh] rounded border-[0.11vw] backdrop-blur-[5px] border-zinc-600/[20%] bg-gradient-to-b from-zinc-700/[40%] to-zinc-700/[20%] flex",on:{click:function(e){return t.pressButton("impostazioni",!0)}}},[i("div",{staticClass:"flex flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[2.5vmin] font-[500] tracking-[0.1vw] overflow-hidden w-[13vw] text-ellipsis uppercase"},[t._v(t._s(t.pause.config.langs["impostazioni_titolo"]))]),i("h1",{staticClass:"text-zinc-500 text-[1.4vmin]"},[t._v(t._s(t.pause.config.langs["impostazioni_desc"]))]),i("img",{staticClass:"absolute mt-[-1.5vh] mr-[-3.5vw] z-[-1] right-0 w-[8vw] h-[100%]",attrs:{src:t.pause.images["impostazioni"]}})])]),i("div",{staticClass:"w-[100%] overflow-hidden cursor-pointer hover:bg-zinc-800/[30%] transition-all hover:opacity-[50%] relative px-[1vw] h-[100%] gap-[0.3vw] py-[2vh] rounded border-[0.11vw] backdrop-blur-[5px] border-zinc-600/[20%] bg-gradient-to-b from-zinc-700/[40%] to-zinc-700/[20%] flex",on:{click:function(e){return t.pressButton("quit",!0)}}},[i("img",{staticClass:"absolute mt-[-1.5vh] mr-[-3.5vw] z-[-1] right-0 w-[10vw] h-[100%]",attrs:{src:t.pause.images["quit"]}}),i("div",{staticClass:"flex flex-col"},[i("h1",{staticClass:"text-zinc-300 text-[2.5vmin] font-[500] tracking-[0.1vw] uppercase"},[t._v(t._s(t.pause.config.langs["quit_titolo"]))]),i("h1",{staticClass:"text-zinc-500 text-[1.4vmin]"},[t._v(t._s(t.pause.config.langs["quit_desc"]))])])])])])])])]),i("div",{staticClass:"absolute w-[100%] h-[100%] bg-gradient-to-l to-transparent",class:"from-["+t.pause.config.colore+"]/[15%]"}),i("img",{staticClass:"absolute blur-[5px] w-[100%] h-[100%] opacity-[2%] saturate-0",attrs:{draggable:"false",src:t.pause.images["immagine_dietro"]}})]):t._e()])},g=[],h=(i("6762"),i("2fdb"),i("a481"),i("28a5"),i("bd86")),m={components:{},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},data:function(){var t,e,i;return{pause:{active:!1,config:{colore:"#36d2c6",nome_server:"Netcape Development",tasto_esc:!0,bottoni:(t={},Object(h["a"])(t,"1",{titolo:"Testo bottone",desc:"Testo da scrivere per il riquadro con bottone",label:"Bottone",chiudi_quando_premuto:!0}),Object(h["a"])(t,"2",{titolo:"Testo bottone",desc:"Testo da scrivere per il riquadro con bottone",label:"Bottone",chiudi_quando_premuto:!0}),t),riquadro_testo:{titolo:"Testo",desc:"Testo da scrivere nel riquadro sotto, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"},langs:(e={},Object(h["a"])(e,"eventi_titolo","eventi"),Object(h["a"])(e,"shop_titolo","shop"),Object(h["a"])(e,"shop_desc","Testo da scrivere per lo shop di questo fantastico server!"),Object(h["a"])(e,"inventario_titolo","Inventario"),Object(h["a"])(e,"inventario_desc","Descrizione per il tuo fantastico inventario di questo server!"),Object(h["a"])(e,"oggetti","Oggetti"),Object(h["a"])(e,"kg","Kg"),Object(h["a"])(e,"mappa_titolo","Mappa"),Object(h["a"])(e,"mappa_desc","Apri la mappa"),Object(h["a"])(e,"impostazioni_titolo","impostazioni"),Object(h["a"])(e,"impostazioni_desc","Apri le impostazioni"),Object(h["a"])(e,"quit_titolo","esci"),Object(h["a"])(e,"quit_desc","Esci dal gioco"),Object(h["a"])(e,"esc","ESC"),Object(h["a"])(e,"esc_desc","INDIETRO"),e)},my_data:{nome:"Shark Dior",lavoro:"FBI",grado:"Agente",stats:{banca:1e3,contanti:1e3}},shop:{url:"https://discord.gg/netscape",sconto:20,cose_che_vendiamo:["Macchine","Case","Items","Armi","Vestiti"]},evento:{nome:"Inaugurazione Bahamas",desc:"Descrizione del fantastico evento del bahamas di Netscape",tags:["10:00","14/04/2023","Bahamas","230"]},inventario:{kg:1,kg_massimi:40,oggetti:111},images:(i={},Object(h["a"])(i,"shop","https://media.discordapp.net/attachments/982738096774856714/1096176705527361697/gta-online-criminalenterprisestarterpack-artwork-png-8745-1600.png?width=1247&height=701"),Object(h["a"])(i,"bottone_1","https://media.discordapp.net/attachments/982738096774856714/1096178426383192115/debidix-181b4f9a-4556-4ae8-abea-2685404e3ed2.png?width=485&height=699"),Object(h["a"])(i,"bottone_2","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36c7442c-aed5-4e9a-86ec-0a59dd4c5a37/debievq-437c2d2a-60fa-4735-b23e-a6c4947f3d05.png/v1/fill/w_647,h_1038/gta_v___gta_5___michael_de_santa__3____png_vector_by_baldknuckle_debievq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzOCIsInBhdGgiOiJcL2ZcLzM2Yzc0NDJjLWFlZDUtNGU5YS04NmVjLTBhNTlkZDRjNWEzN1wvZGViaWV2cS00MzdjMmQyYS02MGZhLTQ3MzUtYjIzZS1hNmM0OTQ3ZjNkMDUucG5nIiwid2lkdGgiOiI8PTY0NyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rM0gMiENeoTQ6lFDxMz_OelBU10lW0A7PwhXDepsd5Q"),Object(h["a"])(i,"eventi","https://media.discordapp.net/attachments/982738096774856714/1096497072053686272/gta_charactor.png?width=542&height=701"),Object(h["a"])(i,"inventario","https://media.discordapp.net/attachments/982738096774856714/1096505795266490438/debifbw-7e3ade77-8d35-4c1f-afd8-289e7c3e3bc8.png?width=473&height=701"),Object(h["a"])(i,"riquadro","https://media.discordapp.net/attachments/982738096774856714/1096505795266490438/debifbw-7e3ade77-8d35-4c1f-afd8-289e7c3e3bc8.png?width=473&height=701"),Object(h["a"])(i,"mappa","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36c7442c-aed5-4e9a-86ec-0a59dd4c5a37/debidh8-067d9a7c-23b9-4a16-9872-d8acf54ac952.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2Yzc0NDJjLWFlZDUtNGU5YS04NmVjLTBhNTlkZDRjNWEzN1wvZGViaWRoOC0wNjdkOWE3Yy0yM2I5LTRhMTYtOTg3Mi1kOGFjZjU0YWM5NTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FKDqzJWiNdwbVLlYI_TmPyOEpsntcaGzVjkZ2icNR4w"),Object(h["a"])(i,"impostazioni","https://cdn3d.iconscout.com/3d/premium/thumb/settings-5731544-4805327.png"),Object(h["a"])(i,"quit","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8384275c-d109-4456-8143-29735434a08c/d8w29do-388844e3-34fc-4b1a-89cd-b37c8d45bca1.png/v1/fill/w_1600,h_1128/alfredonx_png_gta_v_by_aldo_delso_illanes_d8w29do-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzODQyNzVjLWQxMDktNDQ1Ni04MTQzLTI5NzM1NDM0YTA4Y1wvZDh3Mjlkby0zODg4NDRlMy0zNGZjLTRiMWEtODljZC1iMzdjOGQ0NWJjYTEucG5nIiwiaGVpZ2h0IjoiPD0xMTI4Iiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvODM4NDI3NWMtZDEwOS00NDU2LTgxNDMtMjk3MzU0MzRhMDhjXC9hbGRvLWRlbHNvLWlsbGFuZXMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.uuQM03LS2uCIftquey-Php22dITpZSCA5ZxD5l3-rF8"),Object(h["a"])(i,"background","https://www.pixel4k.com/wp-content/uploads/2020/01/chillin-with-da-homies-gta-5-4k-b8-3840x2160-1.jpg"),i)}}},mounted:function(){var t=this;this.$root.$on("open_ui",(function(){t.pause.active=!t.pause.active})),this.$root.$on("close_ui",(function(){t.pause.active=!1,c.send("closeNui")})),this.$root.$on("open_url",(function(e){t.goUrl(e)})),this.$root.$on("change_data_2",(function(e){e&&(e.inventario&&(t.pause.inventario=e.inventario),e.my_data&&(t.pause.my_data=e.my_data),t.pause.config.colore=e.colore||"#36d2c5",t.pause.config.nome_server=e.nome_server||"Nts Roleplay",t.pause.config.tasto_esc=e.tasto_esc||!0,e.langs&&(t.pause.config.langs=e.langs),e.bottoni&&(t.pause.config.bottoni=e.bottoni),e.evento&&(t.pause.evento=e.evento),e.riquadro&&(t.pause.config.riquadro_testo=e.riquadro),e.images&&(t.pause.images=e.images),e.shop&&(t.pause.shop=e.shop))}))},computed:{console:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return console})),window:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return window})),document:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return document}))},methods:{getArgs:function(t){return t.trim().split(/ +/)},numeroPunti:function(t){try{t=t.toString()}catch(i){t="Non trovato"}var e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1.$2");return t},pressButton:function(t,e){c.send("pressButton",{name:t}),e&&(this.pause.active=!1,c.send("closeNui"))},goUrl:function(t){var e=this;t.includes("https://")&&this.$nextTick((function(){e.window.invokeNative("openUrl",t)}))}}},w=m,b=(i("22de"),Object(u["a"])(w,f,g,!1,null,null,null)),_=b.exports;o["a"].use(v["a"]);var x=[{path:"/",name:"Main",component:_}],z=new v["a"]({history:"history",base:"/",routes:x}),C=z,y=i("e37d");o["a"].config.productionTip=!1,o["a"].use(y["a"]),y["a"].options.defaultClass="tooltip",o["a"].directive("clickaway",{bind:function(t,e){var i=e.value;"function"===typeof i&&document.addEventListener("click",(function(e){return t.contains(e.target)||i()}))}}),new o["a"]({router:C,render:function(t){return t(p)}}).$mount("#app")}});
//# sourceMappingURL=app.7200ca95.js.map