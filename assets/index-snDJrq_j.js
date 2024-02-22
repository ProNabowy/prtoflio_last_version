import{j as e,F as j,f as E,r as i,u as S,R as k,L as g,a as C,b as L,A as N}from"./index-zII1tL5_.js";import{d as p}from"./default_image-o0BBQkYb.js";import{S as I}from"./skeleton.esm-VLrtlN_4.js";import{P as z,C as M}from"./ContactForm-UgEwKpQm.js";const $="/assets/scroll-down-white-sa51pJV8.webp";function A(){const s=()=>window.scrollTo({top:1e3,behavior:"smooth"});return e.jsx("div",{onClick:s,className:"absolute right-10 bottom-[100px] transition z-[9999999999] scroll-down",children:e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx("img",{src:$,alt:"scroll down button",className:"min-w-[70px] sm:min-w-[100px] absolute"}),e.jsx("div",{className:"w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center cursor-pointer sizeMedium relative z-20",style:{background:"linear-gradient(to bottom, #19316f, transparent 100%)"},children:e.jsx(j,{icon:E})})]})})}function P({activeImage:s,isScaled:a}){return e.jsxs(i.Fragment,{children:[e.jsx("img",{src:"https://raw.githubusercontent.com/ProNabowy/images_cdn/main/images/jupiter_planet.webp",alt:"jupiter_planet",onError:t=>{t.target.src=p},className:`${s===0&&a?"opacity-100 visible scale-100":"opacity-0 invisible scale-0"} absolute left-0 top-0 transition z-[200] w-[600px] h-[600px] rounded-full max-w-full max-h-full object-cover`}),e.jsx("img",{src:"https://raw.githubusercontent.com/ProNabowy/images_cdn/main/images/uranus_planet.webp",alt:"uranus_planet",onError:t=>{t.target.src=p},className:`${s===1&&a?"opacity-100 visible scale-100":"opacity-0 invisible scale-0"} absolute left-0 top-0 transition z-[200] w-[600px] h-[600px] rounded-full max-w-full max-h-full object-cover`}),e.jsx("img",{src:"https://raw.githubusercontent.com/ProNabowy/images_cdn/main/images/mars_planet.webp",alt:"mars_planet",onError:t=>{t.target.src=p},className:`${s===2&&a?"opacity-100 visible scale-100":"opacity-0 invisible scale-0"} absolute left-0 top-0 transition z-[200] w-[600px] h-[600px] rounded-full max-w-full max-h-full object-cover`}),e.jsx("img",{src:"https://raw.githubusercontent.com/ProNabowy/images_cdn/main/images/chraa.webp",alt:"neptune_planet",onError:t=>{t.target.src=p},className:`${s===3&&a?"opacity-100 visible scale-100":"opacity-0 invisible scale-0"} absolute left-0 top-0 transition z-[200] w-[600px] h-[600px] rounded-full max-w-full max-h-full object-cover`}),e.jsx("img",{src:"https://raw.githubusercontent.com/ProNabowy/images_cdn/main/images/saturn_planet.webp",alt:"saturn_planet",onError:t=>{t.target.src=p},className:`${s===4&&a?"opacity-100 visible scale-100":"opacity-0 invisible scale-0"} absolute left-0 top-0 transition z-[200] w-[600px] h-[600px] rounded-full max-w-full max-h-full object-cover`})]})}function T({isScaled:s,setScaled:a,activeImage:t}){const l=[{id:"mercury",infos:"Amgevicesa dashbaord",image:"mercury_planet",classNames:"orbit",text:"Amgevicesa dashbaord",smImage:"mercury_planet-sm"},{id:"venus",infos:"Ticket management system",image:"venus_planet",classNames:"orbit",text:"Venus",smImage:"venus_planet-sm"},{id:"earth",infos:"Rapid success website",image:"earth",classNames:"orbit",text:"Moon",smImage:"earth-sm"},{id:"mars",infos:"darw by css",image:"mars_planet",classNames:"orbit",text:"mars",smImage:"mars_planet-sm"},{id:"jupiter",infos:"Salla E-commerce",image:"jupiter_planet",classNames:"orbit",text:"Jupiter",smImage:"jupiter_planet-sm"},{id:"saturn",infos:"Abram auctions website",image:"saturn_planet",classNames:"orbit",text:"Saturn",smImage:"saturn_planet-sm"},{id:"uranus",infos:"Charaa portfolio",image:"chraa",classNames:"orbit",text:"Uranus",smImage:"chraa-sm"},{id:"neptune",infos:"Abram admin dashboard",image:"uranus_planet",classNames:"orbit",text:"neptune",smImage:"uranus_planet-sm"},{id:"sun",infos:"Live streem website",image:"sun",smImage:"sun",classNames:"relative",text:"Movies",callback:()=>a(r=>!r)}],{useHandleFullScreen:o}=S();return o(),l.map((r,d)=>e.jsx("div",{id:r.id,onClick:r.callback,className:r.classNames,children:e.jsx("div",{className:r.id!=="sun"?"pos":"",children:e.jsxs("div",{className:r.id!=="sun"?"planet relative":"",children:[e.jsx("img",{src:`https://raw.githubusercontent.com/ProNabowy/images_cdn/main/images/${r.smImage}.webp`,alt:r.infos,"data-src-sm":`https://raw.githubusercontent.com/ProNabowy/images_cdn/main/images/${r.smImage}.webp`,"data-src-lg":`https://raw.githubusercontent.com/ProNabowy/images_cdn/main/images/${r.image}.webp`,className:`${r.id!=="sun"?"rq-full-screen":""} absolute left-0 top-0 w-full h-full rounded-full z-[100] object-cover`}),e.jsxs("dl",{className:"infos",children:[e.jsx("dt",{children:r.infos}),e.jsx("dd",{children:e.jsx("span",{})})]}),s&&r.id==="sun"?e.jsx(P,{isScaled:s,activeImage:t}):null]})})},d))}const D=()=>{const[s,a]=i.useState(!0),[t,l]=i.useState(!1),[o,r]=i.useState(s?"scale-s set-size":"scale-stretched set-speed"),d=t?"zoom-close":"zoom-large",[f,x]=i.useState(0),[v,n]=i.useState("opening view-2D hide-UI"),[c,h]=i.useState();return i.useEffect(()=>{const m=setTimeout(()=>{a(!1)},2e3);return()=>clearTimeout(m)},[]),i.useEffect(()=>(window.innerWidth>500&&r(s?"scale-s set-size":"scale-stretched set-speed"),()=>{}),[s]),i.useEffect(()=>{const m=()=>{x(.1*window.scrollY),window.scrollY>200?l(!0):l(!1)};window.addEventListener("scroll",m);const u=()=>{window.innerWidth>500?(n("view-3D"),setTimeout(()=>{n("set-speed view-3D")},2e3)):(n("view-2D zoom-large"),r("scale-s set-size"),setTimeout(()=>{n("set-speed view-2D zoom-large"),a(!0)},2e3))};return u(),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",u)}},[]),i.useEffect(()=>{let m;return s&&(m=setInterval(()=>{h(Math.floor(Math.random()*4))},5e3)),()=>clearInterval(m)},[s]),{bodyClasses:v,zoom:d,translate:f,scale:o,isScaled:s,setScaled:a,activeImage:c}},q=k.forwardRef((s,a)=>{const{bodyClasses:t,zoom:l,translate:o,scale:r,isScaled:d,setScaled:f,activeImage:x}=D();return e.jsxs("div",{ref:a,className:`hero-body ${t} ${l} data-close controls-close w-full h-[100vh] absolute left-0 top-0 z-10`,style:{"--scale-stretched":`${-o}%`},children:[e.jsx("div",{id:"universe",className:r,children:e.jsx("div",{id:"galaxy",children:e.jsx("div",{id:"solar-system",className:"earth",children:e.jsx(T,{isScaled:d,setScaled:f,activeImage:x})})})}),e.jsx("div",{className:"absolute left-0 h-[150px] bottom-[0px] w-full z-[99]",style:{background:"linear-gradient(0deg, rgb(5, 9, 19), transparent 100%)"}}),e.jsx("div",{className:"absolute left-0 h-full w-[150px] z-[99]",style:{background:"linear-gradient(to right, rgb(5, 9, 19), transparent 100%)"}}),e.jsx("div",{className:"absolute right-0 h-full w-[150px] z-[99]",style:{background:"linear-gradient(to left, rgb(5, 9, 19), transparent 100%)"}}),e.jsx("div",{className:"absolute left-0 top-0 w-full h-[150px] z-[99]",style:{background:"linear-gradient(to bottom, rgb(5, 9, 19), transparent 100%)"}}),e.jsx(A,{})]})}),O=q,R="/assets/about-bg--MWmOtyI.webp";function F(){const[s,a]=i.useState(!0),{useHandleFullScreen:t}=S();return t(!1),e.jsxs("section",{"data-aos":"fade-up",className:"mb-20 about grid grid-cols-12 gap-5 lg:min-h-[100vh] overflow-hidden",children:[e.jsxs("div",{className:"hidden left-side lg:block col-span-12 xl:col-span-6 h-[70vh] xl:h-full relative",children:[e.jsx("img",{src:R,alt:"about section container image",onLoad:l=>a(!1),onError:l=>{l.target.src=p},loading:"lazy",className:"z-1 absolute left-0 top-0 w-full h-full object-cover"}),e.jsx("div",{className:"bg-[#000000b3] absolute left-0 top-0 w-full h-full z-[2]",children:"  "}),e.jsxs("div",{className:"w-[542px] max-w-[90%] p-[var(--sizeMedium)] transition rounded-[10px] border border-[#ffffff80] bg-[#ffffff0d] absolute xl:-right-[150px] right-[50%] top-[50%] translate-y-[-50%] translate-x-[50%] xl:translate-x-0 z-[5]",children:[s&&e.jsx(I,{className:"!bg-[#1b121d4f] z-[100] !absolute left-[var(--sizeMedium)] top-[var(--sizeMedium)] !w-full !h-full !md:w-[500px] !md:h-[500px]"}),e.jsx("div",{className:"relative w-full h-[500px] overflow-hidden img-sc-down high",children:e.jsx("img",{src:"https://raw.githubusercontent.com/ProNabowy/images_cdn/main/images/watch_1.webp",alt:"background of about section","data-aos-anchor-placement":"center-bottom",className:"rq-full-screen abs_img absolute object-contain left-0 top-0 min-h-full w-full transition-[1s] rounded-[10px]"})})]})]}),e.jsxs("div",{"data-aos":"fade-right",className:"right-side col-span-12 xl:col-span-6 flex items-center justify-center flex-col",children:[e.jsxs("div",{className:"lg:max-w-[60%] mt-10 lg:mt-20",children:[e.jsx("h1",{className:"min_title !capitalize xl:text-[40px]","data-text":"Mahmoud Nabowy",children:"Mahmoud Nabowy"}),e.jsx("div",{className:"relative h-[16px] mb-[25px] mt-3",children:e.jsxs("div",{className:"absolute top-[50%] left-0 mt-[-1px] w-[140px] h-[2px] bg-[#ffffff80]",children:[e.jsx("span",{className:"left-[-3px] w-[16px] absolute h-[2px] bg-[#ffffff80] rotate-[-65deg]"}),e.jsx("span",{className:"left-[3px] w-[16px] absolute h-[2px] bg-[#ffffff80] rotate-[-65deg]"})]})})]}),e.jsxs("div",{className:"mb-[32px] sizeSmall sm:text-[16px] max-w-[95%] sm:max-w-[35rem] lg:max-w-[55%]",children:[e.jsx("p",{className:"mb-[27px] text-justify",children:"Hello, I'm Front-End Developer, I can build any professional website with high quality, best performance, better search engine optimization, any responsive website."}),e.jsx("p",{className:"mb-[27px] text-justify",children:"I have a good experience in building professional animation websites. The whole project started as an idea of using a web demo to explain what procedural noise is to our clients at my website. After sending out the demo to some of our friends."}),e.jsx("p",{className:"mb-[27px] text-justify",children:"Benchmarking the user experience of our landing pages versus competitors to create continual improvement. Pitching for new editorial resources dedicated to SEO goals."}),e.jsx("p",{className:"mb-[27px] text-justify",children:"I can fix a broken sitemap file and add schema markup to a landing page, working with the editorial team to make their content better for SEO, building an SEO QA process for the dev team."}),e.jsx(g,{to:"/contacts","aria-label":"Contact Me",className:"min_button mx-auto",children:"Contact Me"})]})]})]})}const H=()=>{function s(n){clearInterval(f),d=o(n),f=setInterval(function(){d=o(d+1)},1e4)}for(var a=document.querySelectorAll("[data-bg-img]"),t=0;t<a.length;t++){var l=a[t];l.style.backgroundImage="url(".concat(l.getAttribute("data-bg-img"),")")}function o(n){var c=r.getElementsByTagName("li").length;n>c&&(n-=c);var h=n-1,m=n-2,u=n+1,b=n+2;h>c&&(h-=c),m>c&&(m-=c),u>c&&(u-=c),b>c&&(b-=c),h<1&&(h+=c),m<1&&(m+=c),n<1&&(n+=c),u<1&&(u+=c),b<1&&(b+=c);for(var _=r.getElementsByTagName("li"),w=0;w<_.length;w++)_[w].classList.remove("prev","prev2","active","next","next2");return r.querySelector('li[data-index="'+m+'"]').classList.add("prev2"),r.querySelector('li[data-index="'+h+'"]').classList.add("prev"),r.querySelector('li[data-index="'+n+'"]').classList.add("active"),r.querySelector('li[data-index="'+u+'"]').classList.add("next"),r.querySelector('li[data-index="'+b+'"]').classList.add("next2"),n}var r=document.querySelector(".home_slider .slider_top"),d=2,f=setInterval(function(){d=o(d+1)},1e4),x=document.querySelector(".home_slider .slider_nav .prev"),v=document.querySelector(".home_slider .slider_nav .next");x.addEventListener("click",function(n){return n.preventDefault(),s(d-1),!1}),v.addEventListener("click",function(n){return n.preventDefault(),s(d+1),!1})};function B(){return e.jsxs("div",{"data-aos":"fade-down",className:"slider_nav flex items-center justify-center relative mb-[52px] pt-[50px]",children:[e.jsxs("a",{href:"#",className:"flex items-center justify-center py-[10px] prev me-[100px]","aria-label":"perv slider button",children:[e.jsx("span",{className:"circle w-[12px] h-[12px] block border-[2px] border-[#ffffff80] bg-[#ffffff0d] rounded-full relative me-[10px]"}),e.jsx("span",{className:"icon w-[34px] h-[34px] flex items-center justify-center border-[2px] bg-[#ffffff0d] border-[#ffffff80] relative rounded-full me-[10px]",children:e.jsx(j,{icon:C})}),e.jsx("span",{className:"circle w-[12px] h-[12px] block border-[2px] border-[#ffffff80] bg-[#ffffff0d] rounded-full relative me-[10px]"})]}),e.jsxs("a",{href:"#",className:"flex items-center justify-center py-[10px] next","aria-label":"next slider button",children:[e.jsx("span",{className:"circle w-[12px] h-[12px] block border-[2px] border-[#ffffff80] bg-[#ffffff0d] rounded-full relative me-[10px]"}),e.jsx("span",{className:"icon w-[34px] h-[34px] flex items-center justify-center border-[2px] bg-[#ffffff0d] border-[#ffffff80] relative rounded-full me-[10px]",children:e.jsx(j,{icon:L})}),e.jsx("span",{className:"circle w-[12px] h-[12px] block border-[2px] border-[#ffffff80] bg-[#ffffff0d] rounded-full relative me-[10px]"})]})]})}function U({item:s}){const[a,t]=i.useState(!0);return e.jsxs("div",{className:"item_in relative overflow-hidden",children:[a&&e.jsx(I,{className:"!bg-[#1b121d4f] z-[100] !absolute left-0 top-0 !w-full !h-full !sm:w-[500px] !sm:h-[500px]"}),e.jsx("img",{src:s.img[0],onLoad:()=>t(!1),loading:"lazy",alt:s==null?void 0:s.describetion,onError:l=>{l.target.src=p},className:"absolute left-0 top-0 min-h-full transition-[1s]"})]})}const y="/assets/1x1-a8tXH5sb.webp";function V(){const{recomended:s}=i.useContext(N);return e.jsx("ul",{"data-aos":"fade-right",className:"absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center",children:s.map((a,t)=>e.jsx("li",{className:`${t===0?"active":t===1?"prev":t===2?"next":""}`,"data-index":t+1,children:e.jsx(g,{"aria-label":"Visit project perview",to:`projects/perview?id=${a==null?void 0:a.id}`,children:e.jsxs("div",{className:"item",children:[e.jsx("img",{src:y,alt:"overlay to set dimantions",className:"invisble-img w-full h-auto"}),e.jsx(U,{item:a})]})})},t))})}function W(){return i.useEffect(()=>(H(),()=>{}),[]),e.jsxs("section",{className:"mb-20 relative",children:[e.jsx(z,{}),e.jsxs("div",{className:"container pt-20",children:[e.jsx("h1",{className:"min_title text-center","data-aos":"fade-up","data-text":"Some Projects",children:"Some Projects"}),e.jsxs("div",{className:"home_slider px-[var(--sizeMedium)] overflow-hidden","data-responsive":"on",children:[e.jsxs("div",{className:"slider_top mb-10 sm:mb-16 relative",children:[e.jsx("img",{src:y,className:"w-full h-auto",alt:"overlay to set dimantions"}),e.jsx(V,{})]}),e.jsx(B,{})]}),e.jsxs("div",{"data-aos":"fade-down",className:"flex flex-col items-center text-center m-auto max-w-[900px]",children:[e.jsx("p",{className:"sizeSmall sm:text-[24px] sm:leading-[34px] mb-[41px]",children:"Explore a diverse collection of frontend projects, including e-commerce sites, dashboards, and more, each crafted with precision and innovation."}),e.jsx(g,{"aria-label":"Visit projects page",to:"/projects",className:"min_button",rel:"noreferrer",children:" See More Projects "})]})]})]})}const J=s=>[{width:"31.2%",classNames:"high"},{width:"18.8%",classNames:"self-end low"},{width:"31.2%",classNames:"high"},{width:"18.8%",classNames:"self-end low"},{width:"18.8%",classNames:"self-start low"},{width:"31.2%",classNames:"high"},{width:"18.8%",classNames:"self-start low"},{width:"31.2%",classNames:"high"}],Y=s=>{const[a,t]=i.useState([]),{recomended:l}=i.useContext(N);return i.useEffect(()=>{const o=setInterval(()=>{t([Math.floor(Math.random()*l.length),Math.floor(Math.random()*l.length)]);const r=setTimeout(()=>{t([])},500);return()=>clearTimeout(r)},2500);return()=>clearInterval(o)},[]),{readyItems:a}};function Z(){var t;const{readyItems:s}=Y(),{recomended:a}=i.useContext(N);return(t=J())==null?void 0:t.map((l,o)=>{var r,d,f;return e.jsx(g,{"aria-label":"Visit project perview",to:`projects/perview?id=${(r=a[o])==null?void 0:r.id}`,className:`sm:ps-[40px] mb-[40px] suggestion-item img-sc-down ${l.classNames} ${s.includes(o)?"ready":""}`,style:{width:l.width},children:e.jsx("div",{className:"item_in p-[var(--sizeMedium)] rounded-[10px] border border-[#ffffff80] bg-[#ffffff0d] relative",children:e.jsxs("div",{className:"relative overflow-hidden flex items-center justify-center",style:{perspective:"600px",perspectiveOrigin:"50% 50%"},children:[e.jsx("img",{src:(d=a[o])==null?void 0:d.img[0],alt:(f=a[o])==null?void 0:f.describetion,onError:x=>{x.target.src=p},className:"abs_img absolute object-contain left-0 top-0 min-h-full w-full transition-[1s] rounded-[10px]"}),e.jsx("img",{src:y,className:"min-w-[100%] w-full h-auto opacity-0",alt:"overlay to set dimantions"})]})})},o)})}function G(){return e.jsxs("section",{className:"relative collaction pt-20",children:[e.jsx(z,{}),e.jsx("h1",{className:"min_title text-center mb-10 sm:mb-16","data-aos":"fade-up","data-text":"OUR COLLECTION",children:"OUR COLLECTION"}),e.jsxs("div",{"data-aos":"fade-up",className:"container",children:[e.jsx("div",{className:"collection mb-10 sm:mb-[100px]",children:e.jsx("div",{className:"flex items-end sm:ms-[-40px] flex-wrap sm:pe-[40px]",children:e.jsx(Z,{})})}),e.jsxs("div",{children:[e.jsxs("p",{"data-aos":"fade-up",className:"mb-10 lg:max-w-[1000px] text-start sm:text-center sizeSmall sm:text-[16px] m-auto",children:["Explore an impressive collection of 8 cutting-edge frontend projects showcasing diverse web development expertise.",e.jsx("br",{}),"From sleek e-commerce platforms to dynamic dashboards, each project exemplifies innovative design,",e.jsx("br",{}),"seamless user experiences, and the latest technologies. These frontend masterpieces are crafted with precision,",e.jsx("br",{}),"ensuring optimal performance and a modern aesthetic. Dive into the world of web development excellence and witness the creativity behind each unique project."]}),e.jsx(g,{to:"/projects","aria-label":"Visit project page","data-aos":"fade-up",className:"min_button !m-auto",children:"See All Collection"})]})]})]})}function se(){const s=i.useRef(),[a,t]=i.useState();return i.useEffect(()=>{var l;return t(((l=s.current)==null?void 0:l.clientHeight)-161),()=>{}},[]),e.jsxs(i.Fragment,{children:[e.jsx(O,{ref:s}),e.jsx("div",{className:`p-3 min-h-[${a}px] mb-20 lg:mb-0`,style:{minHeight:`${a}px`}}),e.jsx(F,{}),e.jsx(W,{}),e.jsx(G,{}),e.jsx(M,{})]})}export{se as default};
