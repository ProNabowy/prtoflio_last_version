import{j as o,r as c,L as j,F as k,c as I,d as $}from"./index-zII1tL5_.js";import{d as E}from"./default_image-o0BBQkYb.js";import{S as L}from"./skeleton.esm-VLrtlN_4.js";function q({activeIndex:e,setActiveIndex:s,keys:i}){return o.jsx("div",{className:"flex items-center justify-center flex-wrap mt-10 mb-10 sm:mb-16",children:i.map((n,t)=>o.jsx("button",{onClick:r=>s(t),className:`p-1 px-2 text-[12px] sm:text-[16px] mb-3 md:mb-0 rounded-[3px] mx-1 transition ${e===t?"bg-[#7d54ff] !text-white":""}`,style:{boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.72)"},children:(n==null?void 0:n.name)||n},t))})}function J({card:e,path:s="projects"}){var t,r,u,h,f;const[i,n]=c.useState(!0);return o.jsxs(c.Fragment,{children:[o.jsx("div",{className:"absolute left-0 top-0 w-full h-full invisible transition opacity-0 p-card-overlay z-30",style:{background:"linear-gradient(transparent, rgba(0, 0, 0, 0.486))"},children:o.jsxs("div",{className:"flex items-end justify-center h-full",children:[o.jsx(j,{to:e==null?void 0:e.url,"aria-label":"Visit github code",target:"_blank",className:"mb-4 me-3 cursor-pointer w-[40px] h-[40px] rounded-full !bg-[#7d54ff73] text-white text-[22px] flex items-center justify-center",children:o.jsx(k,{icon:I})}),o.jsx(j,{"aria-label":"Visit project perview",to:`/${s}/perview?id=${e==null?void 0:e.id}`,className:"mb-4 me-3 cursor-pointer w-[40px] h-[40px] rounded-full !bg-[#7d54ff73] text-white text-[22px] flex items-center justify-center",children:o.jsx(k,{icon:$})})]})}),o.jsxs("div",{className:"w-full h-[250px] bg-red-50 overflow-hidden bg-transparent relative shadow-lg",children:[i&&o.jsx(L,{className:"!bg-transparent z-20 !absolute left-0 top-0 !w-full !h-full"}),o.jsx("img",{onLoad:()=>n(!1),src:(t=e==null?void 0:e.img)==null?void 0:t[0],alt:e==null?void 0:e.describetion,onError:w=>{w.target.src=E},rel:"preload",loading:"lazy",srcSet:`${(r=e==null?void 0:e.img)==null?void 0:r[0]} 1x, ${(u=e==null?void 0:e.img)==null?void 0:u[0]} 2x, ${(h=e==null?void 0:e.img)==null?void 0:h[0]} 3x, ${(f=e==null?void 0:e.img)==null?void 0:f[0]} 4x`,srcSet:"",className:"absolute object-fill left-0 top-0 w-full min-h-full transition-[1s] h-auto"})]})]})}const Q=e=>{var r,u;let s,i,n;const t=(u=(r=e.current)==null?void 0:r.getClientRects())==null?void 0:u[0];return window.innerWidth>=1200?(s=4,i=((t==null?void 0:t.width)-70)/4,n=250):window.innerWidth>=768?(s=3,i=((t==null?void 0:t.width)-60)/3,n=250):window.innerWidth>=450?(s=2,i=((t==null?void 0:t.width)-50)/2,n=250):(s=1,i=((t==null?void 0:t.width)-40)/1,n=250),{cols:s,width:i,height:n}};/*! *****************************************************************************
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
***************************************************************************** */var g=function(){return g=Object.assign||function(s){for(var i,n=1,t=arguments.length;n<t;n++){i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},g.apply(this,arguments)};function F(e,s){s===void 0&&(s={});var i=s.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",i==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var W=`/* add css styles here (optional) */

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
`,O={"isotope-container":"styles_isotope-container__3X0JH",card:"styles_card__1i0k3",test:"styles_test__32Qsm",test1:"styles_test1__3q7XI"};F(W);var X=c.useState,H=c.useEffect,P=c.useMemo,T=function(e,s){return e*s+10},z=function(e,s){return e*s+10},A=function(e){var s=e.children,i=e.gridLayout,n=e.unitWidth,t=e.unitHeight,r=e.noOfCols,u=e.filters,h=X(i),f=h[0],w=h[1],C=P(function(){return s.filter(function(a){return f.findIndex(function(x){return x.id===a.key})!==-1}).map(function(a){var x=a.key,b=f.findIndex(function(S){return S.id===x}),d=f[b],y=d.h,l=y===void 0?1:y,p=d.w,v=p===void 0?1:p,m=d.col,_=d.row,N={transition:"all 0.5s ease-in-out",width:n*v+"px",height:t*l+"px",left:""+(m?10*m*v+"px":0),top:""+(_?10*_*l+"px":0),transform:"translate("+T(m,n)+"px, "+z(_,t)+"px)",position:"absolute",borderWidth:"3px",borderStyle:"solid black"};return g({},a,{props:g({},a.props,{style:N})})})},[f,s,t,n,r]);return H(function(){var a=0,x=function(l,p){return l.filter(function(v){return p.findIndex(function(m){return m===v})!==-1})},b=u.filter(function(l){return l.isChecked}).map(function(l){return l.label}),d=i.filter(function(l){return x(b,l.filter).length||b.includes("all")}),y=d.map(function(l,p){return a===r&&(a=0),g({},l,{row:Math.floor(p/r),col:a++})});w(y)},[u,i]),c.createElement("div",{className:O["isotope-container"]},C)};const V=A;export{q as F,V as I,J as P,Q as c};
