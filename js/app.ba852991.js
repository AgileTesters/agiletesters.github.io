(function(t){function s(s){for(var a,n,c=s[0],l=s[1],o=s[2],f=0,d=[];f<c.length;f++)n=c[f],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(s);while(d.length)d.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],a=!0,c=1;c<e.length;c++){var l=e[c];0!==r[l]&&(a=!1)}a&&(i.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},r={app:0},i=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var o=0;o<c.length;o++)s(c[o]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";var a=e("85ec"),r=e.n(a);r.a},4678:function(t,s,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var s=i(t);return e(s)}function i(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="4678"},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[t._m(0),e("div",{staticClass:"container"},[e("div",{staticClass:"row"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h1",{attrs:{id:"forum"}},[t._v("Fórum ")]),t._l(t.forum,(function(s){return e("div",{key:s.id,staticClass:"github_issue_box"},[e("a",{attrs:{target:"_blank",href:s.html_url}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-10"},[e("h2",{staticClass:"github_issue_title"},[t._v(" "+t._s(s.title.slice(0,75))+" ")]),e("span",{staticClass:"github_issue_subtitle"},[t._v(" "+t._s(s.user.login)+" -- "+t._s(t._f("moment")(s.created_at,"dddd, MMMM Do YYYY"))+" ")])]),t._m(1,!0)])])])}))],2),t._m(2)]),e("br"),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h1",{attrs:{id:"vagas"}},[t._v("Vagas ")]),t._l(t.vagas,(function(s){return e("div",{key:s.id,staticClass:"github_issue_box"},[e("a",{attrs:{target:"_blank",href:s.html_url}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-10"},[e("h2",{staticClass:"github_issue_title"},[t._v(" "+t._s(s.title.slice(0,75))+" ")]),e("span",{staticClass:"github_issue_subtitle"},[t._v(" "+t._s(s.user.login)+" -- "+t._s(t._f("moment")(s.created_at,"dddd, MMMM Do YYYY"))+" ")])]),t._m(3,!0)])])])}))],2),t._m(4)]),e("br"),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h1",{attrs:{id:"podcast"}},[t._v("Podcast ")]),t._m(5),e("center",[e("a",{staticClass:"btn btn-success",staticStyle:{"margin-top":"16px"},attrs:{target:"_blank",href:"https://open.spotify.com/show/6C86lhNUZ6Pf4nYROy8ciI?si=RRlb_9VdT_eSvOtdXfuTwQ",role:"button"}},[e("i",{staticClass:"fab fa-spotify"}),t._v(" Ouça também no spotify!")])])],1)]),e("div",{staticClass:"row base-artigo"},[e("div",{staticClass:"col-sm-12"},[e("h1",{attrs:{id:"artigos"}},[t._v("Artigos ")]),t._m(6),e("div",{staticClass:"row"},t._l(t.articles,(function(s){return e("div",{key:s.link},[e("div",{staticClass:"col"},[e("div",{staticClass:"article_box"},[e("a",{attrs:{target:"_blank",href:s.link}},[e("img",{staticClass:"article_thumbnail",attrs:{src:s.thumbnail}}),e("br"),e("span",{staticClass:"article_author"},[t._v(t._s(s.author))]),e("br"),e("div",{staticClass:"article_title"},[t._v(t._s(s.title))])])])])])})),0)])]),e("br"),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 newsletter_col"},[t._m(7),e("form",{attrs:{action:"https://www.getrevue.co/profile/agile-testers/add_subscriber",method:"post",id:"revue-form",name:"revue-form",target:"_blank"}},[e("div",{staticClass:"row"},[t._m(8),e("div",{staticClass:"col=sm-8"},[e("input",{staticClass:"input_mobile",attrs:{name:"member[email]",id:"member_email",state:null,placeholder:"Obrigatório"}})])]),e("div",{staticClass:"row"},[t._m(9),e("div",{staticClass:"col=sm-8"},[e("input",{staticClass:"input_mobile",attrs:{name:"member[first_name]",id:"member_first_name",state:null,placeholder:"Não Obrigatório"}})])]),e("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Assinar",name:"member[subscribe]",id:"member_submit"}})])]),t._m(10)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("center",[e("h1",{attrs:{id:"canal"}},[t._v("Nosso Canal no Youtube")]),e("iframe",{staticClass:"canal_iframe",attrs:{src:"https://www.youtube.com/embed/videoseries?list=UUhHLl66ov4h2hmL_G3hHi3Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("br")],1)]),e("br"),e("br")]),t._m(11)])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hero_vector"},[a("div",{staticClass:"padding_zero_bigscreens container"},[a("div",{staticClass:"padding_zero_bigscreens col"},[a("nav",{staticClass:"navbar navbar-expand-lg",staticStyle:{"padding-left":"5%"}},[a("span",{staticClass:"navbar-brand"},[a("img",{attrs:{src:e("81a2"),width:"200"}})]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"}},[a("i",{staticClass:"far fa-angle-double-down",staticStyle:{color:"white"}})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapsibleNavbar"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#forum"}},[t._v("fórum")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#vagas"}},[t._v("vagas")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#podcast"}},[t._v("podcast")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#artigos"}},[t._v("artigos")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#canal"}},[t._v("canal")])])])])]),a("div",[a("div",{staticClass:"hero_text"},[a("h1",{staticClass:"hero_title"},[t._v('print("Hello World")')]),a("span",{staticClass:"hero_sub_title"},[t._v("A sua comunidade de teste está de cara nova!")])])]),a("img",{staticClass:"hero_img",attrs:{src:e("86d8")}})])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"github_arrow_col col-sm-1"},[e("i",{staticClass:"fal fa-arrow-circle-right"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("a",{staticClass:"vermais_link",attrs:{target:"_blank",href:"https://github.com/AgileTesters/forum"}},[t._v(" Ver mais ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"github_arrow_col col-sm-1"},[e("i",{staticClass:"fal fa-arrow-circle-right"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("a",{staticClass:"vermais_link",attrs:{target:"_blank",href:"https://github.com/qa-brasil/vagas"}},[t._v(" Ver mais ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h5",[t._v("QAnsei - Podcast do Agile Testers - Para sugerir temas e participantes => "),e("a",{attrs:{href:"https://github.com/AgileTesters/forum/issues/19",target:"_blank"}},[t._v("clique aqui")])]),e("br"),e("iframe",{staticClass:"podcast_widget",attrs:{src:"https://anchor.fm/qansei/embed",height:"160px",frameborder:"0",scrolling:"no"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h5",[t._v(" Acesse nossa revista "),e("a",{attrs:{target:"_blank",href:"https://medium.com/assertqualityassurance"}},[t._v(" AssertQA() ")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h2",[t._v(" Esteja sempre atualizado! "),e("i",{staticClass:"fad fa-newspaper"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-3"},[e("label",{attrs:{for:"member_email"}},[t._v("Email*")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-3"},[e("label",{attrs:{for:"member_first_name"}},[t._v("Nome")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-sm-6 newsletter_col"},[e("h2",[t._v(" Pergunte-me qualquer coisa!")]),e("br"),e("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSeLMETwSFN-pmVNgL_hbWPmDtLMZR2lXtg9MVAhKS73LVPlaA/viewform",role:"button"}},[t._v(" Faça sua pergunta pra gente! ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer"},[e("a",{attrs:{target:"_blank",href:"https://github.com/AgileTesters/"}},[e("i",{staticClass:"fab fa-github-alt footer_icons"})]),e("a",{attrs:{target:"_blank",href:"https://www.facebook.com/agiletesters"}},[e("i",{staticClass:"fab fa-facebook-square footer_icons"})]),e("a",{attrs:{target:"_blank",href:"https://twitter.com/agile_testers/"}},[e("i",{staticClass:"fab fa-twitter-square footer_icons"})])])}],n=(e("4de4"),e("fb6a"),e("d3b7"),e("96cf"),e("1da1"));e("d2d4");var c={name:"App",data:function(){return{data:{},vagas:{},forum:{},articles:{}}},beforeMount:function(){this.getIssuesAT(),this.getIssuesVagas(),this.getArticlesMedium()},methods:{getIssuesAT:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,fetch("https://api.github.com/repos/agiletesters/forum/issues?page=1&state=open");case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,a=a.filter((function(t){return void 0===t.pull_request})),t.forum=a.slice(0,4);case 8:case"end":return s.stop()}}),s)})))()},getIssuesVagas:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,fetch("https://api.github.com/repos/qa-brasil/vagas/issues?page=1&state=open");case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,a=a.filter((function(t){return void 0===t.pull_request})),t.vagas=a.slice(0,2);case 8:case"end":return s.stop()}}),s)})))()},getArticlesMedium:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fassertqualityassurance&api_key=akgr6zefqs1va3nznr2hrbipedydqbhyki65rrjj");case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,t.articles=a.items.slice(0,3);case 7:case"end":return s.stop()}}),s)})))()}}},l=c,o=(e("034f"),e("2877")),u=Object(o["a"])(l,r,i,!1,null,null,null),f=u.exports,d=e("c1df"),b=e.n(d),m="pt-br";b.a.locale(m),a["a"].use(e("2ead"),{moment:b.a}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(f)}}).$mount("#app")},"81a2":function(t,s,e){t.exports=e.p+"img/at_transparente.5f8e6352.png"},"85ec":function(t,s,e){},"86d8":function(t,s,e){t.exports=e.p+"img/agile_testers_mari_waldo.9d491c6b.png"}});
//# sourceMappingURL=app.ba852991.js.map