(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6Cl6":function(e,t,n){},"6xyR":function(e,t,n){"use strict";var a=n("k1TG"),o=n("8o2o"),i=n("TSYQ"),r=n.n(i),c=n("q1tI"),s=n.n(c),u=n("vUet"),l=n("YdCC"),d=n("U1MP"),m=n("Wzyw"),f=s.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.variant,l=e.as,d=void 0===l?"img":l,m=Object(o.a)(e,["bsPrefix","className","variant","as"]),f=Object(u.a)(n,"card-img");return s.a.createElement(d,Object(a.a)({ref:t,className:r()(c?f+"-"+c:f,i)},m))}));f.displayName="CardImg",f.defaultProps={variant:null};var p=f,b=Object(d.a)("h5"),v=Object(d.a)("h6"),g=Object(l.a)("card-body"),h=Object(l.a)("card-title",{Component:b}),w=Object(l.a)("card-subtitle",{Component:v}),y=Object(l.a)("card-link",{Component:"a"}),k=Object(l.a)("card-text",{Component:"p"}),E=Object(l.a)("card-header"),O=Object(l.a)("card-footer"),j=Object(l.a)("card-img-overlay"),x=s.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,l=e.bg,d=e.text,f=e.border,p=e.body,b=e.children,v=e.as,h=void 0===v?"div":v,w=Object(o.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(u.a)(n,"card"),k=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.a.createElement(m.a.Provider,{value:k},s.a.createElement(h,Object(a.a)({ref:t},w,{className:r()(i,y,l&&"bg-"+l,d&&"text-"+d,f&&"border-"+f)}),p?s.a.createElement(g,null,b):b))}));x.displayName="Card",x.defaultProps={body:!1},x.Img=p,x.Title=h,x.Subtitle=w,x.Body=g,x.Link=y,x.Text=k,x.Header=E,x.Footer=O,x.ImgOverlay=j;t.a=x},"9a8T":function(e,t,n){(function(t){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},n="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=s||u||Function("return this")(),d=Object.prototype.toString,m=Math.max,f=Math.min,p=function(){return l.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=i.test(e);return n||r.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}var g=function(e,t,a){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return b(a)&&(o="leading"in a?!!a.leading:o,i="trailing"in a?!!a.trailing:i),function(e,t,a){var o,i,r,c,s,u,l=0,d=!1,g=!1,h=!0;if("function"!=typeof e)throw new TypeError(n);function w(t){var n=o,a=i;return o=i=void 0,l=t,c=e.apply(a,n)}function y(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=r}function k(){var e=p();if(y(e))return E(e);s=setTimeout(k,function(e){var n=t-(e-u);return g?f(n,r-(e-l)):n}(e))}function E(e){return s=void 0,h&&o?w(e):(o=i=void 0,c)}function O(){var e=p(),n=y(e);if(o=arguments,i=this,u=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(k,t),d?w(e):c}(u);if(g)return s=setTimeout(k,t),w(u)}return void 0===s&&(s=setTimeout(k,t)),c}return t=v(t)||0,b(a)&&(d=!!a.leading,r=(g="maxWait"in a)?m(v(a.maxWait)||0,t):r,h="trailing"in a?!!a.trailing:h),O.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=u=i=s=void 0},O.flush=function(){return void 0===s?c:E(p())},O}(e,t,{leading:o,maxWait:t,trailing:i})},h=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,k=/^0o[0-7]+$/i,E=parseInt,O="object"==typeof e&&e&&e.Object===Object&&e,j="object"==typeof self&&self&&self.Object===Object&&self,x=O||j||Function("return this")(),N=Object.prototype.toString,z=Math.max,C=Math.min,L=function(){return x.Date.now()};function M(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==N.call(e)}(e))return NaN;if(M(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=M(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var n=y.test(e);return n||k.test(e)?E(e.slice(2),n?2:8):w.test(e)?NaN:+e}var T=function(e,t,n){var a,o,i,r,c,s,u=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=a,i=o;return a=o=void 0,u=t,r=e.apply(i,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-u>=i}function b(){var e=L();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return d?C(n,i-(e-u)):n}(e))}function v(e){return c=void 0,m&&a?f(e):(a=o=void 0,r)}function g(){var e=L(),n=p(e);if(a=arguments,o=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),l?f(e):r}(s);if(d)return c=setTimeout(b,t),f(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=q(t)||0,M(n)&&(l=!!n.leading,i=(d="maxWait"in n)?z(q(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,a=s=o=c=void 0},g.flush=function(){return void 0===c?r:v(L())},g},A=function(){};function H(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,a=void 0;for(n=0;n<t.length;n+=1){if((a=t[n]).dataset&&a.dataset.aos)return!0;if(a.children&&e(a.children))return!0}return!1}(t.concat(n)))return A()}))}function P(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var S=function(){return!!P()},D=function(e,t){var n=window.document,a=new(P())(H);A=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})},I=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,$=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function B(){return navigator.userAgent||navigator.vendor||window.opera||""}var F=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return I(e,[{key:"phone",value:function(){var e=B();return!(!W.test(e)&&!$.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=B();return!(!K.test(e)&&!Y.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),R=function(e,t){var n=void 0;return F.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},U=function(e){return e.forEach((function(e,t){return function(e,t){var n=e.options,a=e.position,o=e.node,i=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach((function(t){return e.classList.remove(t)}))}(o,n.animatedClassNames),R("aos:out",o),e.options.id&&R("aos:in:"+e.options.id,o),e.animated=!1)});n.mirror&&t>=a.out&&!n.once?i():t>=a.in?e.animated||(function(e,t){t&&t.forEach((function(t){return e.classList.add(t)}))}(o,n.animatedClassNames),R("aos:in",o),e.options.id&&R("aos:in:"+e.options.id,o),e.animated=!0):e.animated&&!n.once&&i()}(e,window.pageYOffset)}))},J=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},Q=function(e,t,n){var a=e.getAttribute("data-aos-"+t);if(void 0!==a){if("true"===a)return!0;if("false"===a)return!1}return a||n},V=function(e,t){return e.forEach((function(e,n){var a=Q(e.node,"mirror",t.mirror),o=Q(e.node,"once",t.once),i=Q(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter((function(e){return"string"==typeof e}));t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var a=window.innerHeight,o=Q(e,"anchor"),i=Q(e,"anchor-placement"),r=Number(Q(e,"offset",i?0:t)),c=i||n,s=e;o&&document.querySelectorAll(o)&&(s=document.querySelectorAll(o)[0]);var u=J(s).top-a;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=a/2;break;case"center-center":u+=a/2+s.offsetHeight/2;break;case"bottom-center":u+=a/2+s.offsetHeight;break;case"top-top":u+=a;break;case"bottom-top":u+=a+s.offsetHeight;break;case"center-top":u+=a+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:a&&function(e,t){window.innerHeight;var n=Q(e,"anchor"),a=Q(e,"offset",t),o=e;return n&&document.querySelectorAll(n)&&(o=document.querySelectorAll(n)[0]),J(o).top+o.offsetHeight-a}(e.node,t.offset)},e.options={once:o,mirror:a,animatedClassNames:c,id:i}})),e},G=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,(function(e){return{node:e}}))},X=[],Z=!1,ee={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},te=function(){return document.all&&!window.atob},ne=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(Z=!0),Z&&(X=V(X,ee),U(X),window.addEventListener("scroll",g((function(){U(X,ee.once)}),ee.throttleDelay)))},ae=function(){if(X=G(),ie(ee.disable)||te())return oe();ne()},oe=function(){X.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ee.initClassName&&e.node.classList.remove(ee.initClassName),ee.animatedClassName&&e.node.classList.remove(ee.animatedClassName)}))},ie=function(e){return!0===e||"mobile"===e&&F.mobile()||"phone"===e&&F.phone()||"tablet"===e&&F.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ee=_(ee,e),X=G(),ee.disableMutationObserver||S()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ee.disableMutationObserver=!0),ee.disableMutationObserver||D("[data-aos]",ae),ie(ee.disable)||te()?oe():(document.querySelector("body").setAttribute("data-aos-easing",ee.easing),document.querySelector("body").setAttribute("data-aos-duration",ee.duration),document.querySelector("body").setAttribute("data-aos-delay",ee.delay),-1===["DOMContentLoaded","load"].indexOf(ee.startEvent)?document.addEventListener(ee.startEvent,(function(){ne(!0)})):window.addEventListener("load",(function(){ne(!0)})),"DOMContentLoaded"===ee.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ne(!0),window.addEventListener("resize",T(ne,ee.debounceDelay,!0)),window.addEventListener("orientationchange",T(ne,ee.debounceDelay,!0)),X)},refresh:ne,refreshHard:ae}}()}).call(this,n("yLpj"))},EDuE:function(e,t,n){},Kira:function(e,t,n){},Rme4:function(e,t,n){"use strict";var a=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,a(n("8/g6")).default)(o.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=i},aGtu:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("Wbzz"),r=(n("q4sD"),n("3Z9Z")),c=n("JI6e"),s=n("Rme4"),u=n.n(s),l=n("O3kt"),d=n.n(l),m=n("gvqh"),f=n.n(m),p=n("z1+X"),b=n.n(p),v=n("UAUQ");n("Kira");t.a=function(){return o.a.createElement("div",null,o.a.createElement(r.a,{className:"bottomBar"},o.a.createElement(c.a,null,o.a.createElement(i.Link,{to:"/"},o.a.createElement(u.a,null),o.a.createElement("p",null,"Home"))),o.a.createElement(c.a,null,o.a.createElement(i.Link,{to:"/favorites"},o.a.createElement(b.a,null),o.a.createElement("p",null,"Favourites"))),o.a.createElement(c.a,null,o.a.createElement(v.a,null),o.a.createElement("p",null,"Search")),o.a.createElement(c.a,null,o.a.createElement(i.Link,{to:"/allsongs"},o.a.createElement(f.a,null),o.a.createElement("p",null,"All List"))),o.a.createElement(c.a,null,o.a.createElement(i.Link,{to:"/signup"},o.a.createElement(d.a,null),o.a.createElement("p",null,"Login")))))}},gvqh:function(e,t,n){"use strict";var a=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,a(n("8/g6")).default)(o.default.createElement("path",{d:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"}),"QueueMusic");t.default=i},"z1+X":function(e,t,n){"use strict";var a=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,a(n("8/g6")).default)(o.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=i}}]);
//# sourceMappingURL=8680989a9494d93232e71360ecf8815fc0d68abe-23160e46ba722c8d0f3e.js.map