import{j as l,r as h,L as _,F as j,c as $,d as E,I as S}from"./index-9wIFIsDM.js";import{d as F}from"./default_image-o0BBQkYb.js";function q({activeIndex:e,setActiveIndex:i,keys:s}){return l.jsx("div",{className:"flex items-center justify-center flex-wrap mt-10 mb-10 sm:mb-16",children:s.map((n,t)=>l.jsx("button",{onClick:r=>i(t),className:`p-1 px-2 text-[12px] sm:text-[16px] mb-3 md:mb-0 rounded-[3px] mx-1 transition ${e===t?"bg-[#7d54ff] !text-white":""}`,style:{boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.72)"},children:(n==null?void 0:n.name)||n},t))})}function J({card:e,path:i="projects"}){var s,n,t,r,u;return h.useState(!0),l.jsxs(h.Fragment,{children:[l.jsx("div",{className:"absolute left-0 top-0 w-full h-full invisible transition opacity-0 p-card-overlay z-30",style:{background:"linear-gradient(transparent, rgba(0, 0, 0, 0.486))"},children:l.jsxs("div",{className:"flex items-end justify-center h-full",children:[l.jsx(_,{to:e==null?void 0:e.url,"aria-label":"Visit github code",target:"_blank",className:"mb-4 me-3 cursor-pointer w-[40px] h-[40px] rounded-full !bg-[#7d54ff73] text-white text-[22px] flex items-center justify-center",children:l.jsx(j,{icon:$})}),l.jsx(_,{"aria-label":"Visit project perview",to:`/${i}/perview?id=${e==null?void 0:e.id}`,className:"mb-4 me-3 cursor-pointer w-[40px] h-[40px] rounded-full !bg-[#7d54ff73] text-white text-[22px] flex items-center justify-center",children:l.jsx(j,{icon:E})})]})}),l.jsx("div",{className:"w-full h-[250px] bg-red-50 overflow-hidden bg-transparent relative shadow-lg",children:l.jsx(S,{hash:e==null?void 0:e.hash,src:(s=e==null?void 0:e.img)==null?void 0:s[0],alt:e==null?void 0:e.describetion,onError:c=>{c.target.src=F},height:"250px",className:"absolute object-fill left-0 top-0 w-full min-h-full transition-[1s] h-auto",srcSet:`${(n=e==null?void 0:e.img)==null?void 0:n[0]} 1x, ${(t=e==null?void 0:e.img)==null?void 0:t[0]} 2x, ${(r=e==null?void 0:e.img)==null?void 0:r[0]} 3x, ${(u=e==null?void 0:e.img)==null?void 0:u[0]} 4x`})})]})}const Q=e=>{var r,u;let i,s,n;const t=(u=(r=e.current)==null?void 0:r.getClientRects())==null?void 0:u[0];return window.innerWidth>=1200?(i=4,s=((t==null?void 0:t.width)-70)/4,n=250):window.innerWidth>=768?(i=3,s=((t==null?void 0:t.width)-60)/3,n=250):window.innerWidth>=450?(i=2,s=((t==null?void 0:t.width)-50)/2,n=250):(i=1,s=((t==null?void 0:t.width)-40)/1,n=250),{cols:i,width:s,height:n}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var m=function(){return m=Object.assign||function(i){for(var s,n=1,t=arguments.length;n<t;n++){s=arguments[n];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(i[r]=s[r])}return i},m.apply(this,arguments)};function L(e,i){i===void 0&&(i={});var s=i.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",s==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var W=`/* add css styles here (optional) */

.styles_isotope-container__3X0JH {
  position: relative;
}
.styles_card__1i0k3 {
  position: absolute;
  background-color: gray;
  border-width: 3px;
  border-style: solid black;
}

.styles_test__32Qsm {
  background-color: blue;
}

.styles_test1__3q7XI {
  background-color: red;
}
`,O={"isotope-container":"styles_isotope-container__3X0JH",card:"styles_card__1i0k3",test:"styles_test__32Qsm",test1:"styles_test1__3q7XI"};L(W);var X=h.useState,H=h.useEffect,P=h.useMemo,T=function(e,i){return e*i+10},A=function(e,i){return e*i+10},B=function(e){var i=e.children,s=e.gridLayout,n=e.unitWidth,t=e.unitHeight,r=e.noOfCols,u=e.filters,c=X(s),g=c[0],k=c[1],C=P(function(){return i.filter(function(a){return g.findIndex(function(p){return p.id===a.key})!==-1}).map(function(a){var p=a.key,b=g.findIndex(function(N){return N.id===p}),f=g[b],y=f.h,o=y===void 0?1:y,d=f.w,v=d===void 0?1:d,x=f.col,w=f.row,I={transition:"all 0.5s ease-in-out",width:n*v+"px",height:t*o+"px",left:""+(x?10*x*v+"px":0),top:""+(w?10*w*o+"px":0),transform:"translate("+T(x,n)+"px, "+A(w,t)+"px)",position:"absolute",borderWidth:"3px",borderStyle:"solid black"};return m({},a,{props:m({},a.props,{style:I})})})},[g,i,t,n,r]);return H(function(){var a=0,p=function(o,d){return o.filter(function(v){return d.findIndex(function(x){return x===v})!==-1})},b=u.filter(function(o){return o.isChecked}).map(function(o){return o.label}),f=s.filter(function(o){return p(b,o.filter).length||b.includes("all")}),y=f.map(function(o,d){return a===r&&(a=0),m({},o,{row:Math.floor(d/r),col:a++})});k(y)},[u,s]),h.createElement("div",{className:O["isotope-container"]},C)};const V=B;export{q as F,V as I,J as P,Q as c};
