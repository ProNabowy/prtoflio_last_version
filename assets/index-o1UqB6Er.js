import{r,A as m,j as n}from"./index-9wIFIsDM.js";import{c as x,F as j,I as C,P as k}from"./index.es-E339dg_i.js";import"./default_image-o0BBQkYb.js";const S=()=>{const[s,u]=r.useState(0),e=r.useRef(),[l,h]=r.useState({cols:0,width:0,height:0});r.useEffect(()=>{const{cols:t,width:d,height:i}=x(e);return h({cols:t,width:d,height:i}),()=>{}},[]);const{Projects:o}=r.useContext(m),a=(o==null?void 0:o.filter(t=>t.category!=="project")).map(t=>({...t,filter:[t==null?void 0:t.type,"tail"]}));r.useEffect(()=>{const t=()=>{const{cols:d,width:i,height:g}=x(e);h({cols:d,width:i,height:g})};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[e]);const f=[{label:"all",name:"All Tutorials",isChecked:s===0},{label:"javascript",name:"Javascript",isChecked:s===1},{label:"darw",name:"Darw",isChecked:s===2},{label:"canvas",name:"Canvas",isChecked:s===3},{label:"css",name:"CSS",isChecked:s===4}],[c,v]=r.useState(a),w=l.cols===1?Math.ceil((c==null?void 0:c.length)/l.cols)*250+300:Math.ceil((c==null?void 0:c.length)/l.cols)*250+80;return r.useEffect(()=>{const t=[a,"javascript","darw","canvas","css"].map(d=>a.filter(i=>(i==null?void 0:i.type)===d));return v(s===0?a:t[s]),()=>{}},[s]),{selectedCategory:c,containerRef:e,isoDimensions:l,filter_keys:f,activeIndex:s,setActiveIndex:u,containerHeight:w}};function I(){const{selectedCategory:s,containerRef:u,isoDimensions:e,filter_keys:l,activeIndex:h,setActiveIndex:o,containerHeight:p}=S();return n.jsxs("section",{className:"sm:px-10 py-10","data-aos":"fade-up",children:[n.jsx("h1",{className:"min_title text-center mb-5","data-text":"Select Preview",children:"Select Preview"}),n.jsx("h5",{className:"text-center sizeSmall sm:text-[16px]",children:"All previews below are included Live Preview Link."}),n.jsx(j,{activeIndex:h,setActiveIndex:o,keys:l}),n.jsx("div",{ref:u,className:"container relative",style:{height:`${p}px`},children:n.jsx(C,{gridLayout:s,noOfCols:e==null?void 0:e.cols,unitWidth:e==null?void 0:e.width,unitHeight:e==null?void 0:e.height,filters:l,children:s.map(a=>n.jsx("div",{className:`img-sc-down relative p-card bg-transparent overflow-hidden rounded-[5px] ${a.filter[0]}`,children:n.jsx(k,{path:"tutorials",card:a})},a.id))})})]})}export{I as default};
