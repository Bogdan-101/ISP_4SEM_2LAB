(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(26),r=n.n(i),o=(n(32),n(11)),j=n(2),s=(n(33),n(12)),d=(n(34),n(10)),h=n.n(d),u=n(1),b=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){h()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){a(t.data)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Main Page"}),n?n.map((function(t){return Object(u.jsx)(o.b,{to:{pathname:"/category/".concat(t.id),fromDashboard:!1},children:t.name})})):Object(u.jsx)("h3",{children:"Loading..."})]})},f=(n(59),function(t){var e=t.match,n=Object(c.useState)({}),a=Object(s.a)(n,2),i=a[0],r=a[1],o=e.params.id;return Object(c.useEffect)((function(){h()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(o,"/")}).then((function(t){r(t.data),console.log(t.data)}))}),[o]),Object(u.jsx)("div",{children:i?Object(u.jsxs)("h1",{children:["Thread with name ",i.name," and id ",i.id]}):Object(u.jsx)("h3",{children:"Loading ..."})})});var p=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/",exact:!0,children:Object(u.jsx)(b,{})}),Object(u.jsx)(j.a,{path:"/category/:id",exact:!0,component:f})]})})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),O()}},[[60,1,2]]]);
//# sourceMappingURL=main.7b04edd6.chunk.js.map