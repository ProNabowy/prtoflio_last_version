import{r as a,A as b,j as l}from"./index-9wIFIsDM.js";import{c as f,F as g,I as j,P as k}from"./index.es-E339dg_i.js";import"./default_image-o0BBQkYb.js";const C=()=>{const[e,p]=a.useState(0),s=a.useRef(),[c,h]=a.useState({cols:0,width:0,height:0});a.useEffect(()=>{const{cols:t,width:i,height:o}=f(s);return h({cols:t,width:i,height:o}),()=>{}},[]);const{Projects:m}=a.useContext(b);a.useEffect(()=>{const t=()=>{const{cols:i,width:o,height:d}=f(s);h({cols:i,width:o,height:d})};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[s]);const x=[{label:"all",name:"All Projects",isChecked:e===0},{label:"on_progress",name:"On Progress",isChecked:e===1},{label:"dashboard",name:"Dashboards",isChecked:e===2},{label:"e-commerce",name:"E Commerce",isChecked:e===3},{label:"web-app",name:"Web Apps",isChecked:e===4},{label:"local",name:"Local Projects",isChecked:e===5},{label:"streams",name:"Streams",isChecked:e===6},{label:"3D Models",name:"3D Models",isChecked:e===7}],r=m.map(t=>({...t,filter:[t==null?void 0:t.type,"tail"]})),u=r==null?void 0:r.filter(t=>t.category==="project"),[n,v]=a.useState(u),w=c.cols===1?Math.ceil((n==null?void 0:n.length)/c.cols)*250+300:Math.ceil((n==null?void 0:n.length)/c.cols)*250+80;return a.useEffect(()=>{const t=r==null?void 0:r.filter(o=>o.category==="project"),i=[t,"on_progress","dashboard","e-commerce","web-app","local","streams","models"].map(o=>t.filter(d=>(d==null?void 0:d.type)===o));return v(e===0?t:i[e]),()=>{}},[e]),{selectedCategory:n,containerRef:s,isoDimensions:c,filter_keys:x,activeIndex:e,setActiveIndex:p,containerHeight:w}};function P(){const{selectedCategory:e,containerRef:p,isoDimensions:s,filter_keys:c,activeIndex:h,setActiveIndex:m,containerHeight:x}=C();return l.jsxs("section",{className:"sm:px-10 py-10","data-aos":"fade-up",children:[l.jsx("h1",{className:"min_title text-center mb-5","data-text":"Select Preview",children:"Select Preview"}),l.jsx("h2",{className:"text-center sizeSmall sm:text-[16px]",children:"All previews below are included Live Preview Link."}),l.jsx(g,{activeIndex:h,setActiveIndex:m,keys:c}),l.jsx("div",{ref:p,className:"container relative",style:{height:`${x}px`},children:l.jsx(j,{gridLayout:e,noOfCols:s==null?void 0:s.cols,unitWidth:s==null?void 0:s.width,unitHeight:s==null?void 0:s.height,filters:c,children:e.map(r=>l.jsx("div",{className:`img-sc-down relative p-card bg-transparent overflow-hidden rounded-[5px] ${r.filter[0]}`,children:l.jsx(k,{card:r})},r.id))})})]})}export{P as default};
