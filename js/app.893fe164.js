(function(t){function e(e){for(var s,n,l=e[0],o=e[1],c=e[2],b=0,f=[];b<l.length;b++)n=l[b],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("b-container-fluid",[s("b-row",{staticClass:"hero_vector",attrs:{"align-h":"center"}},[s("b-col",[s("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[s("b-navbar-brand",{attrs:{href:"#"}},[s("img",{attrs:{src:a("81a2"),width:"200"}})]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}},[s("i",{staticClass:"far fa-angle-double-down",staticStyle:{color:"white"}})]),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":"",center:""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{href:"#forum"}},[t._v("fórum")]),s("b-nav-item",{attrs:{href:"#vagas"}},[t._v("vagas")]),s("b-nav-item",{attrs:{href:"#podcast"}},[t._v("podcast")]),s("b-nav-item",{attrs:{href:"#artigos"}},[t._v("artigos")]),s("b-nav-item",{attrs:{href:"#canal"}},[t._v("canal")])],1)],1)],1)],1),s("div",{staticClass:"w-100"}),s("b-col",{attrs:{lg:"6",sm:"6"}},[s("div",{staticClass:"hero_text"},[s("h1",{staticClass:"hero_title"},[t._v('print("Hello Bacon")')]),s("span",{staticClass:"hero_sub_title"},[t._v("A sua comunidade de teste está de cara nova! ")])])]),s("b-col",{attrs:{lg:"6",sm:"6"}},[s("img",{staticClass:"hero_img",attrs:{src:a("86d8")}})])],1),s("b-row",{staticClass:"issues",attrs:{"align-h":"center"}},[s("b-col",[s("h1",{attrs:{id:"forum"}},[t._v("Fórum ")]),t._l(t.forum,(function(e){return s("div",{key:e.id,staticClass:"github_issue_box"},[s("a",{attrs:{target:"_blank",href:e.html_url}},[s("b-row",[s("b-col",[s("h2",{staticClass:"github_issue_title"},[t._v(" "+t._s(e.title)+" ")]),s("span",{staticClass:"github_issue_subtitle"},[t._v(" "+t._s(e.user.login)+" -- "+t._s(t._f("moment")(e.created_at,"dddd, MMMM Do YYYY"))+" ")])]),s("b-col",{staticClass:"github_arrow_col",attrs:{col:"",lg:"1"}},[s("i",{staticClass:"fal fa-arrow-circle-right"})])],1)],1)])}))],2),s("div",{staticClass:"w-100"}),s("b-col",[s("a",{staticClass:"vermais_link",attrs:{target:"_blank",href:"https://github.com/AgileTesters/forum"}},[t._v(" Ver mais ")])])],1),s("b-row",{staticClass:"issues",attrs:{"align-h":"center"}},[s("b-col",[s("h1",{attrs:{id:"vagas"}},[t._v(" Vagas ")]),t._l(t.vagas,(function(e){return s("div",{key:e.id,staticClass:"github_issue_box"},[s("a",{staticClass:"issues_link",attrs:{target:"_blank",href:e.html_url}},[s("b-row",[s("b-col",[s("h2",{staticClass:"github_issue_title"},[t._v(" "+t._s(e.title)+" ")]),s("span",{staticClass:"github_issue_subtitle"},[t._v(" "+t._s(e.user.login)+" -- "+t._s(t._f("moment")(e.created_at,"dddd, MMMM Do YYYY"))+" ")])]),s("b-col",{staticClass:"github_arrow_col",attrs:{col:"",lg:"1"}},[s("i",{staticClass:"fal fa-arrow-circle-right"})])],1)],1)])}))],2),s("div",{staticClass:"w-100"}),s("b-col",[s("a",{staticClass:"vermais_link",attrs:{target:"_blank",href:"https://github.com/qa-brasil/vagas"}},[t._v(" Ver mais ")])])],1),s("b-row",{staticClass:"issues",staticStyle:{"padding-left":"0px"},attrs:{"align-h":"center"}},[s("center",{staticStyle:{width:"100%"}},[s("b-col",[s("h1",{attrs:{id:"podcast"}},[t._v("Nosso Podcast ")]),s("h5",[t._v(" Podcast do Agile Testers - Para sugerir temas e participantes, "),s("a",{attrs:{href:"https://github.com/AgileTesters/forum/issues/19",target:"_blank"}},[t._v("clique aqui")])])]),s("div",{staticClass:"w-100"}),s("b-col",[s("br"),s("iframe",{staticClass:"podcast_widget",attrs:{src:"https://anchor.fm/qansei/embed",height:"160px",frameborder:"0",scrolling:"no"}}),s("br"),s("a",{staticClass:"btn btn-success",staticStyle:{"margin-top":"16px"},attrs:{target:"_blank",href:"https://open.spotify.com/show/6C86lhNUZ6Pf4nYROy8ciI?si=RRlb_9VdT_eSvOtdXfuTwQ",role:"button"}},[s("i",{staticClass:"fab fa-spotify"}),t._v(" Ouça também no spotify!")])])],1)],1),s("b-row",{staticClass:"issues base-artigo",staticStyle:{"padding-left":"0px"}},[s("center",{staticStyle:{width:"100%"}},[s("b-col",[s("h1",{attrs:{id:"artigos"}},[t._v("Nossos Artigos ")]),s("h5",[t._v(" Artigos da nossa revista "),s("a",{attrs:{target:"_blank",href:"https://medium.com/assertqualityassurance"}},[t._v(" AssertQA() ")]),t._v(" sobre qualidade de software, desenvolvimento e cultura")])])],1),s("div",{staticClass:"w-100"}),t._l(t.articles,(function(e){return s("div",{key:e.link},[s("b-col",[s("div",{staticClass:"article_box"},[s("a",{attrs:{target:"_blank",href:e.link}},[s("img",{staticClass:"article_thumbnail",attrs:{src:e.thumbnail}}),s("br"),s("span",{staticClass:"article_author"},[t._v(t._s(e.author))]),s("br"),s("div",{staticClass:"article_title"},[t._v(t._s(e.title))])])])])],1)}))],2),s("b-row",{staticClass:"issues",staticStyle:{"padding-left":"0px"}},[s("center",{staticStyle:{width:"100%"}},[s("b-col",[s("h1",{attrs:{id:"canal"}},[t._v("Nosso Canal no Youtube")])]),s("div",{staticClass:"w-100"}),s("b-col",[s("br"),s("iframe",{staticClass:"canal_iframe",attrs:{src:"https://www.youtube.com/embed/videoseries?list=UUhHLl66ov4h2hmL_G3hHi3Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),s("br"),s("b-button",{staticStyle:{"margin-top":"16px"},attrs:{variant:"principal"}},[s("i",{staticClass:"fab fa-youtube"}),t._v(" Se inscreva em nosso canal! ")])],1)],1)],1),s("b-row",{staticClass:"issues",staticStyle:{"padding-left":"0px"}},[s("b-col",{staticClass:"placeholder_div",attrs:{lg:"1"}}),s("b-col",{staticClass:"newsletter_col"},[s("h2",[t._v(" Esteja sempre atualizado! "),s("i",{staticClass:"fad fa-newspaper"})]),s("form",{attrs:{action:"https://www.getrevue.co/profile/agile-testers/add_subscriber",method:"post",id:"revue-form",name:"revue-form",target:"_blank"}},[s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"3"}},[s("label",{attrs:{for:"member_email"}},[t._v("Email*")])]),s("b-col",{attrs:{sm:"6"}},[s("b-form-input",{attrs:{name:"member[email]",id:"member_email",state:null,placeholder:"Obrigatório"}})],1)],1),s("b-row",{staticClass:"my-1"},[s("b-col",{attrs:{sm:"3"}},[s("label",{attrs:{for:"member_email"}},[t._v("Nome*")])]),s("b-col",{attrs:{sm:"6"}},[s("b-form-input",{attrs:{name:"member[first_name]",id:"member_first_name",state:null,placeholder:"Não obrigatório"}})],1)],1),s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Assinar",name:"member[subscribe]",id:"member_submit"}})],1)]),s("b-col",{staticClass:"newsletter_col"},[s("br"),s("h1",[t._v(" Pergunte-me qualquer coisa! "),s("i",{staticClass:"fad fa-question-square"})]),s("br"),s("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSeLMETwSFN-pmVNgL_hbWPmDtLMZR2lXtg9MVAhKS73LVPlaA/viewform",role:"button"}},[t._v(" Faça sua pergunta pra gente! ")])]),s("b-col",{staticClass:"placeholder_div",attrs:{lg:"1"}})],1),s("b-row",{staticClass:"footer"},[s("b-col",[s("a",{attrs:{target:"_blank",href:"https://github.com/AgileTesters/"}},[s("i",{staticClass:"fab fa-github-alt footer_icons"})]),s("a",{attrs:{target:"_blank",href:"https://www.facebook.com/agiletesters"}},[s("i",{staticClass:"fab fa-facebook-square footer_icons"})]),s("a",{attrs:{target:"_blank",href:"https://twitter.com/agile_testers/"}},[s("i",{staticClass:"fab fa-twitter-square footer_icons"})])])],1)],1)],1)},i=[],n=(a("fb6a"),a("d3b7"),a("96cf"),a("1da1")),l={name:"App",data:function(){return{data:{},vagas:{},forum:{},articles:{}}},beforeMount:function(){this.getIssuesAT(),this.getIssuesVagas(),this.getArticlesMedium()},methods:{getIssuesAT:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/agiletesters/forum/issues?page=1");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.forum=s.slice(0,4);case 7:case"end":return e.stop()}}),e)})))()},getIssuesVagas:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/qa-brasil/vagas/issues?page=1");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.vagas=s.slice(0,2);case 7:case"end":return e.stop()}}),e)})))()},getArticlesMedium:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fassertqualityassurance&api_key=akgr6zefqs1va3nznr2hrbipedydqbhyki65rrjj");case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.articles=s.items.slice(0,3);case 7:case"end":return e.stop()}}),e)})))()}}},o=l,c=(a("034f"),a("2877")),u=Object(c["a"])(o,r,i,!1,null,null,null),b=u.exports,f=a("5f5b"),d=a("a7e2"),p=a("498a"),m=a("1f1a"),h=a("f9bc");a("f9e3"),a("2dd8");s["default"].use(f["a"]),s["default"].use(d["a"]),s["default"].use(p["a"]),s["default"].use(m["a"]),s["default"].use(h["a"]),s["default"].use(a("2ead")),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(b)}}).$mount("#app")},"81a2":function(t,e,a){t.exports=a.p+"img/at_transparente.5f8e6352.png"},"85ec":function(t,e,a){},"86d8":function(t,e,a){t.exports=a.p+"img/agile_testers_mari_waldo.9d491c6b.png"}});
//# sourceMappingURL=app.893fe164.js.map