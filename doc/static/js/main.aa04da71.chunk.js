(this.webpackJsonptorrefinder=this.webpackJsonptorrefinder||[]).push([[0],{44:function(n,e,t){"use strict";t.r(e);var r,o,i=t(1),a=t.n(i),c=t(18),s=t.n(c),l=t(3),d=t(4),b=function(n,e){var t=!1;"#"===n[0]&&(n=n.slice(1),t=!0);var r=parseInt(n,16),o=(r>>16)+e;o>255?o=255:o<0&&(o=0);var i=(r>>8&255)+e;i>255?i=255:i<0&&(i=0);var a=(255&r)+e;return a>255?a=255:a<0&&(a=0),(t?"#":"")+(a|i<<8|o<<16).toString(16)},p={light:"#E5E5E5",success:"#70BC41",primary:"#CDDC39",gray:"#9C9CA9",mediumDarkGray:"#474B52",darkGray:"#27292D",black:"#0E0F10"},h={xs:"9px",s:"12px",md:"15px",lg:"18px",xl:"24px"},x=d.b.div(r||(r=Object(l.a)(["\n  height: 60px;\n  background-color: ",";\n  width: 100vw;\n\n  & .header-row {\n    height: 60px;\n  }\n\n  & .logo {\n    width: 86.64px;\n    height: 37.76px;\n  }\n"])),p.darkGray),j=d.b.nav(o||(o=Object(l.a)(["\n  a {\n    display: inline-flex;\n    padding: 18px 30px;\n    text-decoration: none;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    color: ",";\n\n    & .icon {\n      margin-right: 9px;\n    }\n\n    &.active,  &:hover{\n      color: ",";\n      position: relative;\n\n      &::after {\n        content: '';\n        width: 100%;\n        height: 3px;\n        background-color: ",";\n        position: absolute;\n        left: 0;\n        bottom: 0;\n      }\n    }\n  }\n"])),p.light,p.primary,p.primary),g=t(2),u=t(7),m=t.p+"static/media/logo.a8c9dee4.svg",f=t(0);var O,y,k=function(){return Object(g.setConfiguration)({containerWidths:[540,740,960,1186,1540]}),Object(f.jsx)(x,{children:Object(f.jsx)(g.Container,{children:Object(f.jsxs)(g.Row,{align:"center",justify:"between",className:"header-row",children:[Object(f.jsx)("img",{src:m,className:"logo",alt:"Torrefinder"}),Object(f.jsx)(j,{children:Object(f.jsxs)("a",{className:"active",href:"#",children:[Object(f.jsx)(u.a,{className:"icon",size:18})," Job search"]})})]})})})},w=t(10),v=d.b.section(O||(O=Object(l.a)(["\n  width: 100vw;\n\n  & h1.title{\n    text-align: center;\n    padding-bottom: 60px;\n    color: ",";\n  }\n\n  & p.label {\n    padding-top: 3px;\n    color: ",";\n    font-size: ",";\n  }\n"])),p.primary,p.mediumDarkGray,h.s),C=d.b.div(y||(y=Object(l.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 6px 6px 6px 15px;\n  max-height: 63px;\n  align-items: center;\n  border-radius: 9px;\n\n  .icon {\n    background-color: ",";\n  }\n\n  input {\n    padding: 15px;\n    background-color: ",";\n    border: none;\n    font-family: 'Ubuntu';\n    font-size: ",";\n    color: ",";\n    width: 100%;\n\n  }\n\n  button {\n    padding: 15px 63px;\n    color: ",";\n    background-color: ",";\n    font-size: ",";\n    border-radius: 9px;\n\n    \n    &:hover {\n      background-color: ",";\n      cursor: pointer;\n    }\n  }\n"])),p.darkGray,p.mediumDarkGray,p.darkGray,h.lg,p.light,p.black,p.primary,h.lg,b(p.primary,-30));var z,N,G=function(n){Object(g.setConfiguration)({containerWidths:[540,740,960,1186,1540]});var e=n.placeholder,t=n.handleSearch;return Object(f.jsxs)(C,{children:[Object(f.jsx)(u.c,{size:24,color:p.mediumDarkGray}),Object(f.jsx)("input",{placeholder:e}),Object(f.jsx)("button",{onClick:function(){return t()},children:"Search"})]})},D=d.b.section(z||(z=Object(l.a)(["\n  margin-top: 30px;\n\n  .job-list,\n  .job-description {\n    overflow-y: scroll;\n    height: 462px;\n\n    /* scrollbar */\n    ::-webkit-scrollbar {\n      width: 6px;\n\n      &-track {\n        border-radius: 6px;\n        background-color: ",";\n      }\n\n      &-thumb {\n        border-radius: 6px;\n        background-color: ",";\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n  }\n"])),b(p.gray,60),p.gray,b(p.gray,-30)),S=d.b.div(N||(N=Object(l.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 18px;\n  border-radius: 9px;\n  transition: all .3s ease-in-out;\n  border: 1px solid ",";\n  margin-bottom: 18px;\n\n\n\n\n  &:hover {\n    border: 1px solid ",";\n    cursor: pointer;\n  }\n\n  .image {\n    width: 45px;\n    height: 45px;\n    max-width: 45px;\n    max-height: 45px;\n    border-radius: 50%;\n    overflow: hidden;\n  }\n\n  .description {\n    display: flex;\n    flex-direction:row;\n    justify-content: space-between;\n    width: 100%;\n    margin-left: 15px;\n  }\n\n  .rates {\n    text-align: center;\n  }\n\n  h6 {\n    font-family: 'Ubuntu';\n    font-weight: bold;\n    font-size: ",";\n    color: ",";\n    margin-bottom: 12px;\n\n  }\n\n  p {\n    font-family: Ubuntu;\n    font-size: ",";\n    color: ",";\n    margin-bottom: 6px;\n\n    & span.strong {\n      font-weight: bold;\n      font-size: ",";\n      color: ",";\n    }\n  }\n"])),p.darkGray,p.mediumDarkGray,p.primary,h.md,p.primary,h.s,p.gray,h.md,p.light);var U,F=function(n){var e=n.job,t=n.handleOnJobClick,r=e.objective,o=e.type,i=e.organizations,a=e.locations,c=e.compensation;return Object(f.jsxs)(S,{onClick:function(){return t(e)},children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:i[0].picture,alt:i[0].name,className:"image"})}),Object(f.jsx)("div",{className:"description",children:Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("h6",{children:r}),Object(f.jsx)("p",{children:o}),Object(f.jsx)("p",{children:Object(f.jsx)("strong",{children:i[0].name})}),Object(f.jsx)("p",{children:a[0]}),Object(f.jsxs)("p",{children:[c.data.currency," ",Object(f.jsxs)("span",{className:"strong",children:[c.data.minAmount," ","range"===c.data.code?"-":""," ",c.data.maxAmount]})," /",c.data.periodicity]})]})})]})},T=d.b.div(U||(U=Object(l.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-radius: 9px;\n  transition: all 0.3s ease-in-out;\n  border: 1px solid ",";\n  padding-bottom: 30px;\n  overflow: hidden;\n\n  .header {\n    width: 100%;\n    height: 161px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  .company {\n    margin-top: 6px;\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 15px;\n\n    p {\n      font-size: ",";\n      color: ",";\n      font-family: 'Ubuntu';\n      margin-left: 12px;\n    }\n\n    .image {\n      width: 69px;\n      height: 69px;\n      max-width: 69px;\n    max-height: 69px;\n      border-radius: 50%;\n      overflow: hidden;\n      margin-top: -45px;\n      border: 3px solid ",";\n      background-color: ",";\n    }\n  }\n\n  .content {\n    padding: 0 30px;\n    width: 100%;\n  }\n\n  .title {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 12px;\n\n    h4 {\n      font-size: ",";\n      color: ",";\n    }\n\n    button {\n      padding: 12px 18px;\n      display: flex;\n      align-items: center;\n      min-width: 123px;\n\n    }\n  }\n\n  .condition {\n    font-size: ",";\n    color: ",";\n    font-family: 'Ubuntu';\n    margin-bottom: 24px;\n  }\n\n  .rates {\n    text-align: center;\n  }\n\n  .description {\n    color: ",";\n  }\n\n  .skills {\n    li {\n      list-style: none;\n      display: inline;\n      margin-right: 12px;\n      font-size: ",";\n      padding: 6px 12px;\n      background-color: ",";\n      color: ",";\n      border-radius: 30px;\n    }\n  }\n\n  h6 {\n    font-family: 'Ubuntu';\n    font-weight: bold;\n    font-size: ",";\n    color: ",";\n    margin-top: 24px;\n    margin-bottom: 12px;\n  }\n\n  p {\n    font-family: Ubuntu;\n    font-size: ",";\n    color: ",";\n    margin-bottom: 6px;\n\n    & span.strong {\n      font-weight: bold;\n      font-size: ",";\n      color: ",";\n    }\n  }\n"])),p.darkGray,p.mediumDarkGray,h.md,p.light,p.primary,p.black,h.lg,p.primary,h.md,p.light,p.light,h.s,p.mediumDarkGray,p.light,h.md,p.primary,h.s,p.gray,h.md,p.light),A=t.p+"static/media/header.13088dac.svg";var E=function(n){var e=n.job,t=(e.skills,e.objective),r=e.type,o=e.organizations,i=e.locations,a=e.compensation;return Object(f.jsxs)(T,{children:[Object(f.jsx)("div",{className:"header",style:{backgroundImage:"url(".concat(A,")")}}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsxs)("div",{className:"company",children:[Object(f.jsx)("img",{src:o[0].picture,alt:o[0].name,className:"image"}),Object(f.jsx)("p",{children:Object(f.jsx)("strong",{children:o[0].name})})]}),Object(f.jsxs)("div",{className:"title",children:[Object(f.jsx)("h4",{children:t}),Object(f.jsxs)("button",{title:"Coming soon",disabled:!0,children:[Object(f.jsx)(u.b,{})," Quick-apply"]})]}),Object(f.jsx)("p",{className:"condition",children:r}),Object(f.jsx)("p",{children:i.map((function(n){return"".concat(n,",")}))}),Object(f.jsx)("h6",{children:"Compensation"}),Object(f.jsxs)("p",{children:[a.data.currency," ",Object(f.jsxs)("span",{className:"strong",children:[a.data.minAmount," ","range"===a.data.code?"-":""," ",a.data.maxAmount]})," ","/",a.data.periodicity]})]})]})};var J=function(n){var e=n.results;Object(g.setConfiguration)({containerWidths:[540,740,960,1186,1540]});var t=Object(i.useState)({}),r=Object(w.a)(t,2),o=r[0],a=r[1],c=function(n){a(n)};return Object(f.jsxs)(D,{children:[Object(f.jsx)(g.Row,{children:Object(f.jsx)("p",{})}),Object(f.jsxs)(g.Row,{gutterWidth:21,children:[Object(f.jsx)(g.Col,{sm:12,lg:5,className:"job-list",children:e.map((function(n,e){return Object(f.jsx)(F,{job:n,handleOnJobClick:c},n.id)}))}),Object(f.jsx)(g.Col,{sm:12,lg:7,className:"job-description",children:0===Object.keys(o).length&&o.constructor===Object?"":Object(f.jsx)(E,{job:o})})]})]})};var R,W=function(){var n=Object(i.useState)([]),e=Object(w.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)(1),a=Object(w.a)(o,2),c=a[0];return a[1],Object(g.setConfiguration)({containerWidths:[540,740,960,1186,1540]}),Object(f.jsxs)(v,{children:[Object(f.jsxs)(g.Container,{children:[0===t.length?Object(f.jsx)(g.Row,{children:Object(f.jsx)(g.Col,{children:Object(f.jsx)("h1",{className:"title hide",children:"Find the best working opportunity for your!"})})}):"",Object(f.jsx)(g.Row,{children:Object(f.jsx)(g.Col,{children:Object(f.jsx)(G,{placeholder:"Type the position that you are searching for...",handleSearch:function(n){fetch("https://search.torre.co/opportunities/_search/?offset=".concat(c,"&size=10&aggregate=").concat(n),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(n){return r(n.results)}))}})})})]}),t.length>0?Object(f.jsxs)(g.Container,{children:[" ",Object(f.jsx)(J,{results:t})," "]}):""]})},B=Object(d.a)(R||(R=Object(l.a)(["\n  /* importing roboto font-family */\n  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');\n\n  /* reseting browser defaults */\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  /* setting default containers */\n  body {\n    overflow: hidden;\n  }\n\n  #root {\n    background-color: ",';\n    display: flex;\n    flex-wrap: wrap;\n    overflow: hidden;\n    height: 100vh; \n  }\n\n  /* fonts */\n  body {\n    font-family: "Ubuntu", sans-serif;\n    font-size: ',";\n    color: ",";\n    -webkit-font-smoothing: antialiased;\n  }\n\n  button {\n    color: ",";\n    background-color: ",";\n    font-family: 'Ubuntu';\n    border: none;\n    border-radius: 9px;\n    transition: all .3s ease-in-out;\n\n    &:hover {\n      background-color: ",";\n      cursor: pointer;\n    }\n    \n  }\n\n  h1 {\n    font-size: ",";\n  }\n\n  h2 {\n    font-size: ",";\n  }\n  \n  h3 {\n    font-size: ",";\n  }\n\n  a {\n    text-decoration: none;\n    transition: color .3s ease-in-out;\n  }\n\n  /* scrollbar */\n  /* ::-webkit-scrollbar { \n    width: 6px;\n\n    &-track {\n      border-radius: 6px;\n      background-color: ",";\n    }\n\n    &-thumb {\n      border-radius: 6px;\n      background-color: ",";\n\n      &:hover {\n        background-color: ",";\n      }\n    }\n  } */\n"])),p.black,h.md,p.light,p.black,p.primary,b(p.primary,-9),h.xl,h.lg,h.md,b(p.gray,60),p.gray,b(p.gray,-30));var I=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{}),Object(f.jsx)(W,{}),Object(f.jsx)(B,{})]})},P=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),i(n),a(n)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),P()}},[[44,1,2]]]);
//# sourceMappingURL=main.aa04da71.chunk.js.map