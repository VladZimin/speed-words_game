(this["webpackJsonpspeed-words"]=this["webpackJsonpspeed-words"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(4),a=c.n(r),l=c(2),i=c(0),j=function(e){var t=e.stats,c=e.onClickStart,s={icon:"",label:""};return s=t.sec>=10?{icon:"\ud83d\ude13",label:"\u041d\u0435\u043f\u043b\u043e\u0445\u043e! "}:{icon:"\ud83d\ude0a",label:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e! "},Object(i.jsxs)("div",{class:"flex result",children:[Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"result__top-icon",children:s.icon}),Object(i.jsxs)("p",{className:"result__phrase",children:[s.label," \u0417\u0430 ",Object(i.jsxs)("b",{children:[t.sec," \u0441\u0435\u043a\u0443\u043d\u0434"]}),", \u0442\u044b \u0432\u0432\u0435\u043b:"]})]}),Object(i.jsxs)("div",{class:"result__number-of-words",children:[t.wordsCount," \u0441\u043b\u043e\u0432\u0430"]}),Object(i.jsx)("button",{onClick:c,class:"button",children:"\ud83e\udd14 \u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430?"})]})},o=["\u041d\u0430\u0432\u0435\u0440\u043d\u043e\u0435 \u0432\u044b \u0435\u0449\u0435 \u043d\u0435 \u0433\u043e\u0442\u043e\u0432\u044b \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0440\u044b\u0431\u0430\u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e","\u0422\u043e\u0442\u043e \u0443 \u043c\u0435\u043d\u044f \u0442\u0430\u043a\u043e\u0435 \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u0444\u0440\u0430\u0437","\u041d\u0435 \u0441\u0443\u0434\u0438\u0442\u0435 \u043c\u0435\u043d\u044f \u0437\u0430 \u0421\u0430\u043c\u0430 \u0438\u0434\u0435\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0437\u0430\u0438\u043c\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0430","\u0412\u0441\u0435 \u0434\u0435\u043b\u0430\u0439 \u0442\u0438\u0445\u043e \u0441\u043b\u043e\u0432\u043e\u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u043b\u0438\u043b\u0438 \u043f\u0440\u0438\u043b\u0438\u0447\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445"],u=o[Math.floor(Math.random()*o.length)].split(" "),d=function(e){var t=e.onFinish,c=n.a.useRef(0),s=n.a.useRef(null),r=n.a.useState(u[c.current]),a=Object(l.a)(r,2),j=a[0],o=a[1],d=n.a.useState(0),b=Object(l.a)(d,2),h=b[0],p=b[1],O=n.a.useState(20),x=Object(l.a)(O,2),f=x[0],v=x[1],_=n.a.useState(!1),g=Object(l.a)(_,2),m=g[0],w=g[1],S=n.a.useState(""),y=Object(l.a)(S,2),C=y[0],k=y[1];n.a.useEffect((function(){s.current=setInterval((function(){v((function(e){var n=e-1;return n||(clearInterval(s.current),t(20-n,c.current)),n}))}),1e3)}),[]);return console.log(u),Object(i.jsxs)("div",{class:"flex typing",children:[Object(i.jsx)("p",{class:"typing__enter-word",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e:"}),Object(i.jsx)("h3",{class:"typing__word",children:j}),Object(i.jsx)("input",{onChange:function(e){var n=e.target.value;if(k(n.trim()),j===n)return c.current+=1,c.current>=u.length?(clearInterval(s.current),void t(20-f,c.current)):(o(u[c.current]),p((function(e){return e+1})),void k(""));new RegExp("^".concat(n)).test(j)?w(!1):w(!0)},value:C,class:"typing__input ".concat(m?"error":""),type:"text"}),Object(i.jsxs)("div",{class:"typing__progress",children:[Object(i.jsxs)("div",{class:"typing__timer",children:[Object(i.jsx)("p",{children:"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438:"}),Object(i.jsxs)("b",{children:[f," \u0441\u0435\u043a."]})]}),Object(i.jsxs)("div",{class:"typing__counter",children:[Object(i.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u0441\u043b\u043e\u0432:"}),Object(i.jsx)("b",{children:h})]})]})]})},b=function(e){var t=e.onClickStart;return Object(i.jsxs)("div",{class:"flex start",children:[Object(i.jsx)("img",{class:"start__image",width:"50",src:"https://speed-words.vercel.app/static/media/flag.1fffd39b.png",alt:"\u0424\u043b\u0430\u0433"}),Object(i.jsxs)("div",{class:"start__text",children:[Object(i.jsx)("h3",{class:"start__header",children:"speed words"}),Object(i.jsx)("p",{class:"start__phrase",children:"\u0418\u0433\u0440\u0430 \u043d\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0432\u043e\u0434\u0430 \u0441\u043b\u043e\u0432"})]}),Object(i.jsx)("button",{onClick:t,class:"button",children:"\ud83d\udd25 \u041d\u0430\u0447\u0430\u0442\u044c"})]})};var h=function(){var e=n.a.useState({}),t=Object(l.a)(e,2),c=t[0],s=t[1],r=n.a.useState("welcome"),a=Object(l.a)(r,2),o=a[0],u=a[1],h=function(){u("welcome"===o?"typing":"welcome")},p={welcome:Object(i.jsx)(b,{onClickStart:h}),typing:Object(i.jsx)(d,{onFinish:function(e,t){s({sec:e,wordsCount:t}),u("result")}}),result:Object(i.jsx)(j,{stats:c,onClickStart:h})};return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("div",{className:"common-rect",children:p[o]})})};c(10);a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b8cc89a7.chunk.js.map