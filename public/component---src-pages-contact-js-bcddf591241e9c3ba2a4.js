(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"Cuy+":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),i=t("7vrA"),s=t("k1TG"),o=t("8o2o"),c=t("TSYQ"),n=t.n(c),m=(t("K9S6"),r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,i=e.className,c=e.type,m=void 0===c?"valid":c,d=e.tooltip,b=void 0!==d&&d,u=Object(o.a)(e,["as","className","type","tooltip"]);return r.a.createElement(l,Object(s.a)({},u,{ref:a,className:n()(i,m+"-"+(b?"tooltip":"feedback"))}))})));m.displayName="Feedback";var d=m,b=r.a.createContext({controlId:void 0}),u=t("vUet"),f=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,m=e.className,d=e.type,f=void 0===d?"checkbox":d,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,O=void 0!==x&&x,N=e.isStatic,j=e.as,y=void 0===j?"input":j,E=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(l.useContext)(b),h=P.controlId,I=P.custom?[c,"custom-control-input"]:[i,"form-check-input"],w=I[0],C=I[1];return i=Object(u.a)(w,C),r.a.createElement(y,Object(s.a)({},E,{ref:a,type:f,id:t||h,className:n()(m,i,p&&"is-valid",O&&"is-invalid",N&&"position-static")}))}));f.displayName="FormCheckInput";var v=f,p=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,m=e.htmlFor,d=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(l.useContext)(b),v=f.controlId,p=f.custom?[i,"custom-control-label"]:[t,"form-check-label"],x=p[0],O=p[1];return t=Object(u.a)(x,O),r.a.createElement("label",Object(s.a)({},d,{ref:a,htmlFor:m||v,className:n()(c,t)}))}));p.displayName="FormCheckLabel";var x=p,O=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,m=e.inline,f=void 0!==m&&m,p=e.disabled,O=void 0!==p&&p,N=e.isValid,j=void 0!==N&&N,y=e.isInvalid,E=void 0!==y&&y,P=e.feedbackTooltip,h=void 0!==P&&P,I=e.feedback,w=e.className,C=e.style,F=e.title,k=void 0===F?"":F,g=e.type,R=void 0===g?"checkbox":g,T=e.label,V=e.children,L=e.custom,S=e.as,z=void 0===S?"input":S,G=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),q="switch"===R||L,A=q?[c,"custom-control"]:[i,"form-check"],J=A[0],M=A[1];i=Object(u.a)(J,M);var B=Object(l.useContext)(b).controlId,Y=Object(l.useMemo)((function(){return{controlId:t||B,custom:q}}),[B,q,t]),K=q||null!=T&&!1!==T&&!V,Q=r.a.createElement(v,Object(s.a)({},G,{type:"switch"===R?"checkbox":R,ref:a,isValid:j,isInvalid:E,isStatic:!K,disabled:O,as:z}));return r.a.createElement(b.Provider,{value:Y},r.a.createElement("div",{style:C,className:n()(w,i,q&&"custom-"+R,f&&i+"-inline")},V||r.a.createElement(r.a.Fragment,null,Q,K&&r.a.createElement(x,{title:k},T),(j||E)&&r.a.createElement(d,{type:j?"valid":"invalid",tooltip:h},I))))}));O.displayName="FormCheck",O.Input=v,O.Label=x;var N=O,j=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,m=e.className,d=e.isValid,f=e.isInvalid,v=e.lang,p=e.as,x=void 0===p?"input":p,O=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),N=Object(l.useContext)(b),j=N.controlId,y=N.custom?[c,"custom-file-input"]:[i,"form-control-file"],E=y[0],P=y[1];return i=Object(u.a)(E,P),r.a.createElement(x,Object(s.a)({},O,{ref:a,id:t||j,type:"file",lang:v,className:n()(m,i,d&&"is-valid",f&&"is-invalid")}))}));j.displayName="FormFileInput";var y=j,E=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,m=e.htmlFor,d=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(l.useContext)(b),v=f.controlId,p=f.custom?[i,"custom-file-label"]:[t,"form-file-label"],x=p[0],O=p[1];return t=Object(u.a)(x,O),r.a.createElement("label",Object(s.a)({},d,{ref:a,htmlFor:m||v,className:n()(c,t),"data-browse":d["data-browse"]}))}));E.displayName="FormFileLabel";var P=E,h=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,m=e.disabled,f=void 0!==m&&m,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,O=void 0!==x&&x,N=e.feedbackTooltip,j=void 0!==N&&N,E=e.feedback,h=e.className,I=e.style,w=e.label,C=e.children,F=e.custom,k=e.lang,g=e["data-browse"],R=e.as,T=void 0===R?"div":R,V=e.inputAs,L=void 0===V?"input":V,S=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=F?[c,"custom"]:[i,"form-file"],G=z[0],q=z[1];i=Object(u.a)(G,q);var A=Object(l.useContext)(b).controlId,J=Object(l.useMemo)((function(){return{controlId:t||A,custom:F}}),[A,F,t]),M=null!=w&&!1!==w&&!C,B=r.a.createElement(y,Object(s.a)({},S,{ref:a,isValid:p,isInvalid:O,disabled:f,as:L,lang:k}));return r.a.createElement(b.Provider,{value:J},r.a.createElement(T,{style:I,className:n()(h,i,F&&"custom-file")},C||r.a.createElement(r.a.Fragment,null,F?r.a.createElement(r.a.Fragment,null,B,M&&r.a.createElement(P,{"data-browse":g},w)):r.a.createElement(r.a.Fragment,null,M&&r.a.createElement(P,null,w),B),(p||O)&&r.a.createElement(d,{type:p?"valid":"invalid",tooltip:j},E))))}));h.displayName="FormFile",h.Input=y,h.Label=P;var I=h,w=(t("2W6z"),r.a.forwardRef((function(e,a){var t,i,c=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,f=e.size,v=e.htmlSize,p=e.id,x=e.className,O=e.isValid,N=void 0!==O&&O,j=e.isInvalid,y=void 0!==j&&j,E=e.plaintext,P=e.readOnly,h=e.custom,I=e.as,w=void 0===I?"input":I,C=Object(o.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(l.useContext)(b).controlId,k=h?[m,"custom"]:[c,"form-control"],g=k[0],R=k[1];if(c=Object(u.a)(g,R),E)(i={})[c+"-plaintext"]=!0,t=i;else if("file"===d){var T;(T={})[c+"-file"]=!0,t=T}else if("range"===d){var V;(V={})[c+"-range"]=!0,t=V}else if("select"===w&&h){var L;(L={})[c+"-select"]=!0,L[c+"-select-"+f]=f,t=L}else{var S;(S={})[c]=!0,S[c+"-"+f]=f,t=S}return r.a.createElement(w,Object(s.a)({},C,{type:d,size:v,ref:a,readOnly:P,id:p||F,className:n()(x,t,N&&"is-valid",y&&"is-invalid")}))})));w.displayName="FormControl";var C=Object.assign(w,{Feedback:d}),F=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.children,m=e.controlId,d=e.as,f=void 0===d?"div":d,v=Object(o.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.a)(t,"form-group");var p=Object(l.useMemo)((function(){return{controlId:m}}),[m]);return r.a.createElement(b.Provider,{value:p},r.a.createElement(f,Object(s.a)({},v,{ref:a,className:n()(i,t)}),c))}));F.displayName="FormGroup";var k=F,g=t("JI6e"),R=r.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,c=e.bsPrefix,m=e.column,d=e.srOnly,f=e.className,v=e.htmlFor,p=Object(o.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),x=Object(l.useContext)(b).controlId;c=Object(u.a)(c,"form-label");var O="col-form-label";"string"==typeof m&&(O=O+" "+O+"-"+m);var N=n()(f,c,d&&"sr-only",m&&O);return v=v||x,m?r.a.createElement(g.a,Object(s.a)({as:"label",className:N,htmlFor:v},p)):r.a.createElement(i,Object(s.a)({ref:a,className:N,htmlFor:v},p))}));R.displayName="FormLabel",R.defaultProps={column:!1,srOnly:!1};var T=R,V=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,c=void 0===i?"small":i,m=e.muted,d=Object(o.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.a)(t,"form-text"),r.a.createElement(c,Object(s.a)({},d,{ref:a,className:n()(l,t,m&&"text-muted")}))}));V.displayName="FormText";var L=V,S=r.a.forwardRef((function(e,a){return r.a.createElement(N,Object(s.a)({},e,{ref:a,type:"switch"}))}));S.displayName="Switch",S.Input=N.Input,S.Label=N.Label;var z=S,G=t("YdCC"),q=Object(G.a)("form-row"),A=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,i=e.className,c=e.validated,m=e.as,d=void 0===m?"form":m,b=Object(o.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.a)(t,"form"),r.a.createElement(d,Object(s.a)({},b,{ref:a,className:n()(i,c&&"was-validated",l&&t+"-inline")}))}));A.displayName="Form",A.defaultProps={inline:!1},A.Row=q,A.Group=k,A.Control=C,A.Check=N,A.File=I,A.Switch=z,A.Label=T,A.Text=L;var J=A,M=t("dbZe"),B=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,i=e.size,c=e.active,m=e.className,d=e.block,b=e.type,f=e.as,v=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(u.a)(t,"btn"),x=n()(m,p,c&&"active",l&&p+"-"+l,d&&p+"-block",i&&p+"-"+i);if(v.href)return r.a.createElement(M.a,Object(s.a)({},v,{as:f,ref:a,className:n()(x,v.disabled&&"disabled")}));a&&(v.ref=a),b?v.type=b:f||(v.type="button");var O=f||"button";return r.a.createElement(O,Object(s.a)({},v,{className:x}))}));B.displayName="Button",B.defaultProps={variant:"primary",active:!1,disabled:!1};var Y=B,K=t("Bl7J");t("q/Tu"),a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null),r.a.createElement("div",{className:"bgcontainer"},r.a.createElement(i.a,null,r.a.createElement(J,{class:"form",name:"contact",method:"POST",target:"_blank",action:"https://formsubmit.co/letsworshipnagpur@gmail.com"},r.a.createElement("div",{className:"outlineForm"},r.a.createElement(J.Group,{controlId:"formGridAddress1"},r.a.createElement(J.Label,null,"Name"),r.a.createElement(J.Control,{type:"text",name:"name",placeholder:"Enter your name",required:!0})),r.a.createElement(J.Row,null,r.a.createElement(J.Group,{as:g.a,controlId:"formGridEmail"},r.a.createElement(J.Label,null,"Email"),r.a.createElement(J.Control,{type:"email",name:"email",placeholder:"Enter email",required:!0}))),r.a.createElement(J.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(J.Label,null,"Message"),r.a.createElement(J.Control,{as:"textarea",rows:"3",name:"message",placeholder:"Request a song or suggest an improvment"})),r.a.createElement(Y,{type:"submit"},"Submit"))))))}},"q/Tu":function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-contact-js-bcddf591241e9c3ba2a4.js.map