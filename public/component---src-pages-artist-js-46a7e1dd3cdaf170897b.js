(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Kira:function(e,t,a){},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function i(e){return function(t){return n.createElement(s,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,c({key:a},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var l=e.attr,i=e.title,s=o(e,["attr","title"]);return n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,s,{className:a,style:c({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},Mdgh:function(e,t,a){"use strict";a.r(t),a.d(t,"ArtistQuery",(function(){return v}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("Bl7J"),o=a("vrFN"),i=a("7vrA"),s=a("3Z9Z"),u=a("JI6e"),m=a("ma3e"),d=a("9eSz"),f=a.n(d),p=a("aGtu");t.default=function(e){var t=e.data;e.title;return r.a.createElement("div",null,r.a.createElement(o.a,{title:"Artist Page"}),r.a.createElement(c.a,null),r.a.createElement(p.a,null),r.a.createElement(i.a,{fluid:!0,className:"catBg  "},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement("h2",{className:"pt-5 text-center text-white"},"ABOUT ARTIST"))),r.a.createElement(s.a,null,r.a.createElement(u.a,{className:"mainCard text-center"},r.a.createElement("ul",{type:"none",className:"p-0"},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement(u.a,{lg:3,className:"catCard "},r.a.createElement("li",null,r.a.createElement(f.a,{fluid:t.frontmatter.featureImage.childImageSharp.fluid}),r.a.createElement(l.Link,{to:t.fields.slug},t.frontmatter.title)))}))))),r.a.createElement(s.a,null,r.a.createElement(u.a,{className:"backHome text-right pt-5  "},r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/"}," Back to Home ",r.a.createElement(m.b,{size:15,color:"yellow"})))))))))};var v="427379845"},Rme4:function(e,t,a){"use strict";var n=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),l=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=l},aGtu:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=(a("q4sD"),a("3Z9Z")),o=a("JI6e"),i=a("Rme4"),s=a.n(i),u=a("gvqh"),m=a.n(u),d=a("Xw9v");a("Kira");t.a=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{className:"bottomBar"},r.a.createElement(o.a,{xs:4},r.a.createElement(l.Link,{to:"/"},r.a.createElement(s.a,{style:{color:"#fff"}}),r.a.createElement("p",null,"Home"))),r.a.createElement(o.a,{xs:4},r.a.createElement(d.a,null),r.a.createElement("p",null,"Search")),r.a.createElement(o.a,{xs:4},r.a.createElement(l.Link,{to:"/allsongs"},r.a.createElement(m.a,{style:{color:"#fff"}}),r.a.createElement("p",null,"All List")))))}},gvqh:function(e,t,a){"use strict";var n=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),l=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"}),"QueueMusic");t.default=l},vrFN:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("qhky"),c=a("Wbzz");function o(e){var t=e.description,a=e.lang,n=e.meta,o=e.image,i=e.title,s=e.pathname,u=Object(c.useStaticQuery)("2052298874").site,m=t||u.siteMetadata.description,d=o&&o.src?""+u.siteMetadata.siteUrl+o.src:null,f=s?""+u.siteMetadata.siteUrl+s:null;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+u.siteMetadata.title,link:f?[{rel:"canonical",href:f}]:[],meta:[{name:"description",content:m},{name:"keywords",content:u.siteMetadata.keywords},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(o?[{property:"og:image",itemprop:"image",content:d},{property:"og:image:width",content:o.width},{property:"og:image:height",content:o.height},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(n)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-artist-js-46a7e1dd3cdaf170897b.js.map