import{C as d,r as t,P as c,e as h,m as v}from"./index-zII1tL5_.js";var r=d.extend({defaultProps:{__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null}}),f=t.memo(t.forwardRef(function(s,n){var o=t.useContext(c),e=r.getProps(s,o),l=r.setMetaData({props:e}),i=l.ptm,a=t.useRef(null),p=e.size?{width:e.size,height:e.size,borderRadius:e.borderRadius}:{width:e.width,height:e.height,borderRadius:e.borderRadius},m=h("p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-none":e.animation==="none"},e.className);t.useImperativeHandle(n,function(){return{props:e,getElement:function(){return a.current}}});var u=v({ref:a,className:m,style:p},r.getOtherProps(e),i("root"));return t.createElement("div",u)}));f.displayName="Skeleton";export{f as S};
