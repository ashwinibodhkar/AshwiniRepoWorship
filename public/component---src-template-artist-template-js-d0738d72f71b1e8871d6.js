(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"6Cl6":function(e,t,n){},"9a8T":function(e,t,n){(function(t){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},n="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=s||l||Function("return this")(),m=Object.prototype.toString,d=Math.max,f=Math.min,p=function(){return u.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=r.test(e);return n||i.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}var g=function(e,t,a){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return v(a)&&(o="leading"in a?!!a.leading:o,r="trailing"in a?!!a.trailing:r),function(e,t,a){var o,r,i,c,s,l,u=0,m=!1,g=!1,h=!0;if("function"!=typeof e)throw new TypeError(n);function w(t){var n=o,a=r;return o=r=void 0,u=t,c=e.apply(a,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-u>=i}function k(){var e=p();if(y(e))return E(e);s=setTimeout(k,function(e){var n=t-(e-l);return g?f(n,i-(e-u)):n}(e))}function E(e){return s=void 0,h&&o?w(e):(o=r=void 0,c)}function x(){var e=p(),n=y(e);if(o=arguments,r=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(k,t),m?w(e):c}(l);if(g)return s=setTimeout(k,t),w(l)}return void 0===s&&(s=setTimeout(k,t)),c}return t=b(t)||0,v(a)&&(m=!!a.leading,i=(g="maxWait"in a)?d(b(a.maxWait)||0,t):i,h="trailing"in a?!!a.trailing:h),x.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=l=r=s=void 0},x.flush=function(){return void 0===s?c:E(p())},x}(e,t,{leading:o,maxWait:t,trailing:r})},h=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,k=/^0o[0-7]+$/i,E=parseInt,x="object"==typeof e&&e&&e.Object===Object&&e,O="object"==typeof self&&self&&self.Object===Object&&self,N=x||O||Function("return this")(),j=Object.prototype.toString,z=Math.max,C=Math.min,q=function(){return N.Date.now()};function M(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==j.call(e)}(e))return NaN;if(M(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=M(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var n=y.test(e);return n||k.test(e)?E(e.slice(2),n?2:8):w.test(e)?NaN:+e}var T=function(e,t,n){var a,o,r,i,c,s,l=0,u=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=a,r=o;return a=o=void 0,l=t,i=e.apply(r,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||m&&e-l>=r}function v(){var e=q();if(p(e))return b(e);c=setTimeout(v,function(e){var n=t-(e-s);return m?C(n,r-(e-l)):n}(e))}function b(e){return c=void 0,d&&a?f(e):(a=o=void 0,i)}function g(){var e=q(),n=p(e);if(a=arguments,o=this,s=e,n){if(void 0===c)return function(e){return l=e,c=setTimeout(v,t),u?f(e):i}(s);if(m)return c=setTimeout(v,t),f(s)}return void 0===c&&(c=setTimeout(v,t)),i}return t=A(t)||0,M(n)&&(u=!!n.leading,r=(m="maxWait"in n)?z(A(n.maxWait)||0,t):r,d="trailing"in n?!!n.trailing:d),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,a=s=o=c=void 0},g.flush=function(){return void 0===c?i:b(q())},g},L=function(){};function S(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,a=void 0;for(n=0;n<t.length;n+=1){if((a=t[n]).dataset&&a.dataset.aos)return!0;if(a.children&&e(a.children))return!0}return!1}(t.concat(n)))return L()}))}function D(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var H=function(){return!!D()},I=function(e,t){var n=window.document,a=new(D())(S);L=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})},P=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},$=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,_=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,B=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,F=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function J(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return P(e,[{key:"phone",value:function(){var e=J();return!(!$.test(e)&&!_.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=J();return!(!B.test(e)&&!F.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),Y=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},Q=function(e){return e.forEach((function(e,t){return function(e,t){var n=e.options,a=e.position,o=e.node,r=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach((function(t){return e.classList.remove(t)}))}(o,n.animatedClassNames),Y("aos:out",o),e.options.id&&Y("aos:in:"+e.options.id,o),e.animated=!1)});n.mirror&&t>=a.out&&!n.once?r():t>=a.in?e.animated||(function(e,t){t&&t.forEach((function(t){return e.classList.add(t)}))}(o,n.animatedClassNames),Y("aos:in",o),e.options.id&&Y("aos:in:"+e.options.id,o),e.animated=!0):e.animated&&!n.once&&r()}(e,window.pageYOffset)}))},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},K=function(e,t,n){var a=e.getAttribute("data-aos-"+t);if(void 0!==a){if("true"===a)return!0;if("false"===a)return!1}return a||n},R=function(e,t){return e.forEach((function(e,n){var a=K(e.node,"mirror",t.mirror),o=K(e.node,"once",t.once),r=K(e.node,"id"),i=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(i?i.split(" "):[]).filter((function(e){return"string"==typeof e}));t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var a=window.innerHeight,o=K(e,"anchor"),r=K(e,"anchor-placement"),i=Number(K(e,"offset",r?0:t)),c=r||n,s=e;o&&document.querySelectorAll(o)&&(s=document.querySelectorAll(o)[0]);var l=Z(s).top-a;switch(c){case"top-bottom":break;case"center-bottom":l+=s.offsetHeight/2;break;case"bottom-bottom":l+=s.offsetHeight;break;case"top-center":l+=a/2;break;case"center-center":l+=a/2+s.offsetHeight/2;break;case"bottom-center":l+=a/2+s.offsetHeight;break;case"top-top":l+=a;break;case"bottom-top":l+=a+s.offsetHeight;break;case"center-top":l+=a+s.offsetHeight/2}return l+i}(e.node,t.offset,t.anchorPlacement),out:a&&function(e,t){window.innerHeight;var n=K(e,"anchor"),a=K(e,"offset",t),o=e;return n&&document.querySelectorAll(n)&&(o=document.querySelectorAll(n)[0]),Z(o).top+o.offsetHeight-a}(e.node,t.offset)},e.options={once:o,mirror:a,animatedClassNames:c,id:r}})),e},V=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,(function(e){return{node:e}}))},G=[],X=!1,ee={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},te=function(){return document.all&&!window.atob},ne=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(X=!0),X&&(G=R(G,ee),Q(G),window.addEventListener("scroll",g((function(){Q(G,ee.once)}),ee.throttleDelay)))},ae=function(){if(G=V(),re(ee.disable)||te())return oe();ne()},oe=function(){G.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ee.initClassName&&e.node.classList.remove(ee.initClassName),ee.animatedClassName&&e.node.classList.remove(ee.animatedClassName)}))},re=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ee=W(ee,e),G=V(),ee.disableMutationObserver||H()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ee.disableMutationObserver=!0),ee.disableMutationObserver||I("[data-aos]",ae),re(ee.disable)||te()?oe():(document.querySelector("body").setAttribute("data-aos-easing",ee.easing),document.querySelector("body").setAttribute("data-aos-duration",ee.duration),document.querySelector("body").setAttribute("data-aos-delay",ee.delay),-1===["DOMContentLoaded","load"].indexOf(ee.startEvent)?document.addEventListener(ee.startEvent,(function(){ne(!0)})):window.addEventListener("load",(function(){ne(!0)})),"DOMContentLoaded"===ee.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ne(!0),window.addEventListener("resize",T(ne,ee.debounceDelay,!0)),window.addEventListener("orientationchange",T(ne,ee.debounceDelay,!0)),G)},refresh:ne,refreshHard:ae}}()}).call(this,n("yLpj"))},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n};function s(e){return function(t){return a.createElement(l,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return a.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var r=e.attr,s=e.title,l=c(e,["attr","title"]);return a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==r?a.createElement(r.Consumer,null,(function(e){return t(e)})):t(o)}},S1rs:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return E}));var a=n("q1tI"),o=n.n(a),r=n("ZdO7"),i=n("Bl7J"),c=n("7vrA"),s=n("3Z9Z"),l=n("JI6e"),u=(n("wAMH"),n("ma3e")),m=n("aWbt"),d=n("EHkr"),f=n("0kD8"),p=n("IwUe"),v=n("QDT8"),b=n("guej"),g=n("vrFN"),h=n("A7iQ"),w=n("qhky"),y=n("9a8T"),k=n.n(y);n("6Cl6");t.default=function(e){var t=e.data,n=e.location,y=t.markdownRemark,E=y.frontmatter.featureImage.childImageSharp.fixed,x=Object(a.useState)(18),O=x[0],N=x[1],j=Object(h.a)().siteUrl;return Object(a.useEffect)((function(){k.a.init({duration:2e3})}),[]),o.a.createElement("div",null,o.a.createElement(w.b,null,o.a.createElement("link",{rel:"canonical",href:""+j+n.pathname})),o.a.createElement(g.a,{title:y.frontmatter.title,image:E,pathname:""+j+n.pathname}),o.a.createElement(i.a,null),o.a.createElement(c.a,{fluid:!0,className:"artistBg"},o.a.createElement(c.a,null,o.a.createElement(s.a,{className:"sizeButton"},o.a.createElement(l.a,{className:" text-right"},o.a.createElement("button",{onClick:function(){return N(O+2)}}," ",o.a.createElement(u.j,{size:"20"})," "),o.a.createElement("button",{onClick:function(){return N(O-2)}}," ",o.a.createElement(u.i,{size:"20"})," "))),o.a.createElement(s.a,{className:"artistDesc"},o.a.createElement(l.a,null,o.a.createElement("h2",null,y.frontmatter.title))),o.a.createElement(s.a,{className:"pb-5"},o.a.createElement(l.a,{"data-aos":"fade-down","data-aos-delay":"20","data-aos-duration":"500",md:"5",className:"artistImage mt-3 p-0"},o.a.createElement(r.a,{fixed:E})),o.a.createElement(l.a,{md:"7",id:"target"},o.a.createElement("p",null,o.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"20","data-aos-duration":"500",className:"ArtistContent",style:{fontSize:O+"px"},dangerouslySetInnerHTML:{__html:y.internal.content}})))),o.a.createElement(s.a,null,o.a.createElement(l.a,{className:"text-right"},o.a.createElement(m.a,{url:""+j+n.pathname,quote:"View Lyrics With Original Chords",title:y.frontmatter.title},o.a.createElement(d.a,{size:36})),o.a.createElement(f.a,{url:""+j+n.pathname,title:y.frontmatter.title},o.a.createElement(p.a,{size:36})),o.a.createElement(v.a,{url:""+j+n.pathname,title:y.frontmatter.title},o.a.createElement(b.a,{size:36})))))))};var E="434625858"},vrFN:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("qhky"),i=n("Wbzz");function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.image,s=e.title,l=e.pathname,u=Object(i.useStaticQuery)("2052298874").site,m=t||u.siteMetadata.description,d=c&&c.src?""+u.siteMetadata.siteUrl+c.src:null,f=l?""+u.siteMetadata.siteUrl+l:null;return o.a.createElement(r.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+u.siteMetadata.title,link:f?[{rel:"canonical",href:f}]:[],meta:[{name:"description",content:m},{name:"keywords",content:u.siteMetadata.keywords},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c?[{property:"og:image",itemprop:"image",content:d},{property:"og:image:width",content:c.width},{property:"og:image:height",content:c.height},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},wAMH:function(e,t,n){}}]);
//# sourceMappingURL=component---src-template-artist-template-js-d0738d72f71b1e8871d6.js.map