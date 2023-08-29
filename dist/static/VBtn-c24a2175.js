import{at as j,p as b,a as q,r as N,ae as Be,e as Y,B as K,ah as ge,a7 as it,al as ot,E as Ie,T as Ee,af as Pe,au as he,d as c,av as A,aq as P,h as p,S as se,v as D,q as V,x as M,aw as rt,w as E,ax as lt,ay as ut,u as f,s as ct,am as Ve,y as Te,C as $e,az as dt,z as Le,H as ft,ar as be,g as vt,b as Re,i as mt,f as gt,j as ht,W as bt,a6 as yt,k as pt,F as Ct,aA as St,aB as ye,M as Ne,a3 as xt,aC as _t,aD as pe,U as wt,V as kt}from"./index-fa823cdd.js";const ze=["top","bottom"],Bt=["start","end","left","right"];function It(e,t){let[s,n]=e.split(" ");return n||(n=j(ze,s)?"start":j(Bt,s)?"top":"center"),{side:Ce(s,t),align:Ce(n,t)}}function Ce(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function mn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function gn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function hn(e){return{side:e.align,align:e.side}}function bn(e){return j(ze,e.side)?"y":"x"}class Z{constructor(t){let{x:s,y:n,width:a,height:i}=t;this.x=s,this.y=n,this.width=a,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function yn(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function pn(e){const t=e.getBoundingClientRect(),s=getComputedStyle(e),n=s.transform;if(n){let a,i,o,l,r;if(n.startsWith("matrix3d("))a=n.slice(9,-1).split(/, /),i=+a[0],o=+a[5],l=+a[12],r=+a[13];else if(n.startsWith("matrix("))a=n.slice(7,-1).split(/, /),i=+a[0],o=+a[3],l=+a[4],r=+a[5];else return new Z(t);const m=s.transformOrigin,h=t.x-l-(1-i)*parseFloat(m),y=t.y-r-(1-o)*parseFloat(m.slice(m.indexOf(" ")+1)),u=i?t.width/i:e.offsetWidth+1,d=o?t.height/o:e.offsetHeight+1;return new Z({x:h,y,width:u,height:d})}else return new Z(t)}function Cn(e,t,s){if(typeof e.animate>"u")return{finished:Promise.resolve()};let n;try{n=e.animate(t,s)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(a=>{n.onfinish=()=>{a(n)}})),n}const W=b({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),Sn="cubic-bezier(0.4, 0, 0.2, 1)",xn="cubic-bezier(0.0, 0, 0.2, 1)",_n="cubic-bezier(0.4, 0, 1, 1)";function L(e){const t=q("useRender");t.render=e}function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const s=N(),n=N();if(Be){const a=new ResizeObserver(i=>{e==null||e(i,a),i.length&&(t==="content"?n.value=i[0].contentRect:n.value=i[0].target.getBoundingClientRect())});Y(()=>{a.disconnect()}),K(s,(i,o)=>{o&&(a.unobserve(ge(o)),n.value=void 0),i&&a.observe(ge(i))},{flush:"post"})}return{resizeRef:s,contentRect:it(n)}}const wn=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),kn=(e,t)=>{let{slots:s}=t;const{transition:n,disabled:a,...i}=e,{component:o=Ee,...l}=typeof n=="object"?n:{};return ot(o,Ie(typeof n=="string"?{name:a?"":n}:l,i,{disabled:a}),s)};function oe(e){return Pe(()=>{const t=[],s={};return e.value.background&&(he(e.value.background)?s.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(he(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function U(e,t){const s=c(()=>({text:A(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:a}=oe(s);return{textColorClasses:n,textColorStyles:a}}function Se(e,t){const s=c(()=>({background:A(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:a}=oe(s);return{backgroundColorClasses:n,backgroundColorStyles:a}}const Pt=["x-small","small","default","large","x-large"],re=b({size:{type:[String,Number],default:"default"}},"size");function le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return Pe(()=>{let s,n;return j(Pt,e.size)?s=`${t}--size-${e.size}`:e.size&&(n={width:p(e.size),height:p(e.size)}),{sizeClasses:s,sizeStyles:n}})}const G=b({tag:{type:String,default:"div"}},"tag"),Vt=b({color:String,start:Boolean,end:Boolean,icon:se,...W(),...re(),...G({tag:"i"}),...D()},"VIcon"),ee=V()({name:"VIcon",props:Vt(),setup(e,t){let{attrs:s,slots:n}=t;const a=N(),{themeClasses:i}=M(e),{iconData:o}=rt(c(()=>a.value||e.icon)),{sizeClasses:l}=le(e),{textColorClasses:r,textColorStyles:m}=U(E(e,"color"));return L(()=>{var y,u;const h=(y=n.default)==null?void 0:y.call(n);return h&&(a.value=(u=lt(h).filter(d=>d.type===ut&&d.children&&typeof d.children=="string")[0])==null?void 0:u.children),f(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",i.value,l.value,r.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:p(e.size),height:p(e.size),width:p(e.size)},m.value,e.style],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[h]})}),{}}});function Oe(e,t){const s=N(),n=ct(!1);if(Ve){const a=new IntersectionObserver(i=>{e==null||e(i,a),n.value=!!i.find(o=>o.isIntersecting)},t);Y(()=>{a.disconnect()}),K(s,(i,o)=>{o&&(a.unobserve(o),n.value=!1),i&&a.observe(i)},{flush:"post"})}return{intersectionRef:s,isIntersecting:n}}const xe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ae=b({location:String},"location");function De(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Te();return{locationStyles:c(()=>{if(!e.location)return{};const{side:i,align:o}=It(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function l(m){return s?s(m):0}const r={};return i!=="center"&&(t?r[xe[i]]=`calc(100% - ${l(i)}px)`:r[i]=0),o!=="center"?t?r[xe[o]]=`calc(100% - ${l(o)}px)`:r[o]=0:(i==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),r})}}const ue=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:c(()=>{const n=A(e)?e.value:e.rounded,a=[];if(n===!0||n==="")a.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))a.push(`rounded-${i}`);return a})}}const Tt=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...W(),...Ae({location:"top"}),...ue(),...G(),...D()},"VProgressLinear"),$t=V()({name:"VProgressLinear",props:Tt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const n=$e(e,"modelValue"),{isRtl:a,rtlClasses:i}=Te(),{themeClasses:o}=M(e),{locationStyles:l}=De(e),{textColorClasses:r,textColorStyles:m}=U(e,"color"),{backgroundColorClasses:h,backgroundColorStyles:y}=Se(c(()=>e.bgColor||e.color)),{backgroundColorClasses:u,backgroundColorStyles:d}=Se(e,"color"),{roundedClasses:C}=ce(e),{intersectionRef:g,isIntersecting:w}=Oe(),x=c(()=>parseInt(e.max,10)),v=c(()=>parseInt(e.height,10)),S=c(()=>parseFloat(e.bufferValue)/x.value*100),I=c(()=>parseFloat(n.value)/x.value*100),B=c(()=>a.value!==e.reverse),R=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),H=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function J(_){if(!g.value)return;const{left:T,right:Q,width:$}=g.value.getBoundingClientRect(),F=B.value?$-_.clientX+(Q-$):_.clientX-T;n.value=Math.round(F/$*x.value)}return L(()=>f(e.tag,{ref:g,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&w.value,"v-progress-linear--reverse":B.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,o.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?p(v.value):0,"--v-progress-linear-height":p(v.value),...l.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&J},{default:()=>[e.stream&&f("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...m.value,[B.value?"left":"right"]:p(-v.value),borderTop:`${p(v.value/2)} dotted`,opacity:H.value,top:`calc(50% - ${p(v.value/4)})`,width:p(100-S.value,"%"),"--v-progress-linear-stream-to":p(v.value*(B.value?1:-1))}},null),f("div",{class:["v-progress-linear__background",h.value],style:[y.value,{opacity:H.value,width:p(e.stream?S.value:100,"%")}]},null),f(Ee,{name:R.value},{default:()=>[e.indeterminate?f("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>f("div",{key:_,class:["v-progress-linear__indeterminate",_,u.value],style:d.value},null))]):f("div",{class:["v-progress-linear__determinate",u.value],style:[d.value,{width:p(I.value,"%")}]},null)]}),s.default&&f("div",{class:"v-progress-linear__content"},[s.default({value:I.value,buffer:S.value})])]})),{}}}),Lt=b({loading:[Boolean,String]},"loader");function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function Bn(e,t){var n;let{slots:s}=t;return f("div",{class:`${e.name}__loader`},[((n=s.default)==null?void 0:n.call(s,{color:e.color,isActive:e.active}))||f($t,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Nt=[null,"default","comfortable","compact"],Me=b({density:{type:String,default:"default",validator:e=>Nt.includes(e)}},"density");function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}function zt(e,t){if(!Ve)return;const s=t.modifiers||{},n=t.value,{handler:a,options:i}=typeof n=="object"?n:{handler:n,options:{}},o=new IntersectionObserver(function(){var y;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;const m=(y=e._observe)==null?void 0:y[t.instance.$.uid];if(!m)return;const h=l.some(u=>u.isIntersecting);a&&(!s.quiet||m.init)&&(!s.once||h||m.init)&&a(h,l,r),h&&s.once?Ge(e,t):m.init=!0},i);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:o},o.observe(e)}function Ge(e,t){var n;const s=(n=e._observe)==null?void 0:n[t.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Ot={mounted:zt,unmounted:Ge},In=Ot,At=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),te=V(!1)({name:"VDefaultsProvider",props:At(),setup(e,t){let{slots:s}=t;const{defaults:n,disabled:a,reset:i,root:o,scoped:l}=dt(e);return Le(n,{reset:i,root:o,scoped:l,disabled:a}),()=>{var r;return(r=s.default)==null?void 0:r.call(s)}}}),Dt=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Mt(e){return{dimensionStyles:c(()=>({height:p(e.height),maxHeight:p(e.maxHeight),maxWidth:p(e.maxWidth),minHeight:p(e.minHeight),minWidth:p(e.minWidth),width:p(e.width)}))}}const He=b({border:[Boolean,Number,String]},"border");function Fe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:c(()=>{const n=A(e)?e.value:e.border,a=[];if(n===!0||n==="")a.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))a.push(`border-${i}`);return a})}}const je=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ue(e){return{elevationClasses:c(()=>{const s=A(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const Wt=["elevated","flat","tonal","outlined","text","plain"];function Gt(e,t){return f(ft,null,[e&&f("span",{key:"overlay",class:`${t}__overlay`},null),f("span",{key:"underlay",class:`${t}__underlay`},null)])}const Xe=b({color:String,variant:{type:String,default:"elevated",validator:e=>Wt.includes(e)}},"variant");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const s=c(()=>{const{variant:i}=be(e);return`${t}--variant-${i}`}),{colorClasses:n,colorStyles:a}=oe(c(()=>{const{variant:i,color:o}=be(e);return{[["elevated","flat"].includes(i)?"background":"text"]:o}}));return{colorClasses:n,colorStyles:a,variantClasses:s}}const qe=b({divided:Boolean,...He(),...W(),...Me(),...je(),...ue(),...G(),...D(),...Xe()},"VBtnGroup"),_e=V()({name:"VBtnGroup",props:qe(),setup(e,t){let{slots:s}=t;const{themeClasses:n}=M(e),{densityClasses:a}=We(e),{borderClasses:i}=Fe(e),{elevationClasses:o}=Ue(e),{roundedClasses:l}=ce(e);Le({VBtn:{height:"auto",color:E(e,"color"),density:E(e,"density"),flat:!0,variant:E(e,"variant")}}),L(()=>f(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,i.value,a.value,o.value,l.value,e.class],style:e.style},s))}}),Ft=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),jt=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ut(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=q("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=vt();Re(Symbol.for(`${t.description}:id`),a);const i=mt(t,null);if(!i){if(!s)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const o=E(e,"value"),l=c(()=>!!(i.disabled.value||e.disabled));i.register({id:a,value:o,disabled:l},n),Y(()=>{i.unregister(a)});const r=c(()=>i.isSelected(a)),m=c(()=>r.value&&[i.selectedClass.value,e.selectedClass]);return K(r,h=>{n.emit("group:selected",{value:h})}),{id:a,isSelected:r,toggle:()=>i.select(a,!r.value),select:h=>i.select(a,h),selectedClass:m,value:o,disabled:l,group:i}}function Xt(e,t){let s=!1;const n=gt([]),a=$e(e,"modelValue",[],u=>u==null?[]:Ye(n,yt(u)),u=>{const d=Yt(n,u);return e.multiple?d:d[0]}),i=q("useGroup");function o(u,d){const C=u,g=Symbol.for(`${t.description}:id`),x=pt(g,i==null?void 0:i.vnode).indexOf(d);x>-1?n.splice(x,0,C):n.push(C)}function l(u){if(s)return;r();const d=n.findIndex(C=>C.id===u);n.splice(d,1)}function r(){const u=n.find(d=>!d.disabled);u&&e.mandatory==="force"&&!a.value.length&&(a.value=[u.id])}ht(()=>{r()}),Y(()=>{s=!0});function m(u,d){const C=n.find(g=>g.id===u);if(!(d&&(C!=null&&C.disabled)))if(e.multiple){const g=a.value.slice(),w=g.findIndex(v=>v===u),x=~w;if(d=d??!x,x&&e.mandatory&&g.length<=1||!x&&e.max!=null&&g.length+1>e.max)return;w<0&&d?g.push(u):w>=0&&!d&&g.splice(w,1),a.value=g}else{const g=a.value.includes(u);if(e.mandatory&&g)return;a.value=d??!g?[u]:[]}}function h(u){if(e.multiple,a.value.length){const d=a.value[0],C=n.findIndex(x=>x.id===d);let g=(C+u)%n.length,w=n[g];for(;w.disabled&&g!==C;)g=(g+u)%n.length,w=n[g];if(w.disabled)return;a.value=[n[g].id]}else{const d=n.find(C=>!C.disabled);d&&(a.value=[d.id])}}const y={register:o,unregister:l,selected:a,select:m,disabled:E(e,"disabled"),prev:()=>h(n.length-1),next:()=>h(1),isSelected:u=>a.value.includes(u),selectedClass:c(()=>e.selectedClass),items:c(()=>n),getItemIndex:u=>qt(n,u)};return Re(t,y),y}function qt(e,t){const s=Ye(e,[t]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function Ye(e,t){const s=[];return t.forEach(n=>{const a=e.find(o=>bt(n,o.value)),i=e[n];(a==null?void 0:a.value)!=null?s.push(a.id):i!=null&&s.push(i.id)}),s}function Yt(e,t){const s=[];return t.forEach(n=>{const a=e.findIndex(i=>i.id===n);if(~a){const i=e[a];s.push(i.value!=null?i.value:a)}}),s}const Ke=Symbol.for("vuetify:v-btn-toggle"),Kt=b({...qe(),...Ft()},"VBtnToggle");V()({name:"VBtnToggle",props:Kt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{isSelected:n,next:a,prev:i,select:o,selected:l}=Xt(e,Ke);return L(()=>{const[r]=_e.filterProps(e);return f(_e,Ie({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var m;return[(m=s.default)==null?void 0:m.call(s,{isSelected:n,next:a,prev:i,select:o,selected:l})]}})}),{next:a,prev:i,select:o}}});const Jt=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...W(),...re(),...G({tag:"div"}),...D()},"VProgressCircular"),Qt=V()({name:"VProgressCircular",props:Jt(),setup(e,t){let{slots:s}=t;const n=20,a=2*Math.PI*n,i=N(),{themeClasses:o}=M(e),{sizeClasses:l,sizeStyles:r}=le(e),{textColorClasses:m,textColorStyles:h}=U(E(e,"color")),{textColorClasses:y,textColorStyles:u}=U(E(e,"bgColor")),{intersectionRef:d,isIntersecting:C}=Oe(),{resizeRef:g,contentRect:w}=Et(),x=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),v=c(()=>Number(e.width)),S=c(()=>r.value?Number(e.size):w.value?w.value.width:Math.max(v.value,32)),I=c(()=>n/(1-v.value/S.value)*2),B=c(()=>v.value/S.value*I.value),R=c(()=>p((100-x.value)/100*a));return Ct(()=>{d.value=i.value,g.value=i.value}),L(()=>f(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,l.value,m.value,e.class],style:[r.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:x.value},{default:()=>[f("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[f("circle",{class:["v-progress-circular__underlay",y.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),f("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":a,"stroke-dashoffset":R.value},null)]),s.default&&f("div",{class:"v-progress-circular__content"},[s.default({value:x.value})])]})),{}}}),Zt=["static","relative","fixed","absolute","sticky"],en=b({position:{type:String,validator:e=>Zt.includes(e)}},"position");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function En(){var e,t;return(t=(e=q("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function nn(e,t){const s=St("RouterLink"),n=c(()=>!!(e.href||e.to)),a=c(()=>(n==null?void 0:n.value)||ye(t,"click")||ye(e,"click"));if(typeof s=="string")return{isLink:n,isClickable:a,href:E(e,"href")};const i=e.to?s.useLink(e):void 0;return{isLink:n,isClickable:a,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&c(()=>{var o,l;return e.exact?(o=i.isExactActive)==null?void 0:o.value:(l=i.isActive)==null?void 0:l.value}),href:c(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const sn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ne=!1;function Pn(e,t){let s=!1,n,a;Be&&(Ne(()=>{window.addEventListener("popstate",i),n=e==null?void 0:e.beforeEach((o,l,r)=>{ne?s?t(r):r():setTimeout(()=>s?t(r):r()),ne=!0}),a=e==null?void 0:e.afterEach(()=>{ne=!1})}),xt(()=>{window.removeEventListener("popstate",i),n==null||n(),a==null||a()}));function i(o){var l;(l=o.state)!=null&&l.replaced||(s=!0,setTimeout(()=>s=!1))}}function an(e,t){K(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&t&&Ne(()=>{t(!0)})},{immediate:!0})}const ae=Symbol("rippleStop"),on=80;function we(e,t){e.style.transform=t,e.style.webkitTransform=t}function ie(e){return e.constructor.name==="TouchEvent"}function Je(e){return e.constructor.name==="KeyboardEvent"}const rn=function(e,t){var y;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,a=0;if(!Je(e)){const u=t.getBoundingClientRect(),d=ie(e)?e.touches[e.touches.length-1]:e;n=d.clientX-u.left,a=d.clientY-u.top}let i=0,o=.3;(y=t._ripple)!=null&&y.circle?(o=.15,i=t.clientWidth/2,i=s.center?i:i+Math.sqrt((n-i)**2+(a-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const l=`${(t.clientWidth-i*2)/2}px`,r=`${(t.clientHeight-i*2)/2}px`,m=s.center?l:`${n-i}px`,h=s.center?r:`${a-i}px`;return{radius:i,scale:o,x:m,y:h,centerX:l,centerY:r}},X={show(e,t){var d;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const n=document.createElement("span"),a=document.createElement("span");n.appendChild(a),n.className="v-ripple__container",s.class&&(n.className+=` ${s.class}`);const{radius:i,scale:o,x:l,y:r,centerX:m,centerY:h}=rn(e,t,s),y=`${i*2}px`;a.className="v-ripple__animation",a.style.width=y,a.style.height=y,t.appendChild(n);const u=window.getComputedStyle(t);u&&u.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),we(a,`translate(${l}, ${r}) scale3d(${o},${o},${o})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),we(a,`translate(${m}, ${h}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const s=t[t.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const n=performance.now()-Number(s.dataset.activated),a=Math.max(250-n,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=s.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(s.parentNode)},300)},a)}};function Qe(e){return typeof e>"u"||!!e}function z(e){const t={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[ae])){if(e[ae]=!0,ie(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(t.center=s._ripple.centered||Je(e),s._ripple.class&&(t.class=s._ripple.class),ie(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{X.show(e,s,t)},s._ripple.showTimer=window.setTimeout(()=>{var n;(n=s==null?void 0:s._ripple)!=null&&n.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},on)}else X.show(e,s,t)}}function ke(e){e[ae]=!0}function k(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{k(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),X.hide(t)}}function Ze(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let O=!1;function et(e){!O&&(e.keyCode===pe.enter||e.keyCode===pe.space)&&(O=!0,z(e))}function tt(e){O=!1,k(e)}function nt(e){O&&(O=!1,k(e))}function st(e,t,s){const{value:n,modifiers:a}=t,i=Qe(n);if(i||X.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=a.center,e._ripple.circle=a.circle,_t(n)&&n.class&&(e._ripple.class=n.class),i&&!s){if(a.stop){e.addEventListener("touchstart",ke,{passive:!0}),e.addEventListener("mousedown",ke);return}e.addEventListener("touchstart",z,{passive:!0}),e.addEventListener("touchend",k,{passive:!0}),e.addEventListener("touchmove",Ze,{passive:!0}),e.addEventListener("touchcancel",k),e.addEventListener("mousedown",z),e.addEventListener("mouseup",k),e.addEventListener("mouseleave",k),e.addEventListener("keydown",et),e.addEventListener("keyup",tt),e.addEventListener("blur",nt),e.addEventListener("dragstart",k,{passive:!0})}else!i&&s&&at(e)}function at(e){e.removeEventListener("mousedown",z),e.removeEventListener("touchstart",z),e.removeEventListener("touchend",k),e.removeEventListener("touchmove",Ze),e.removeEventListener("touchcancel",k),e.removeEventListener("mouseup",k),e.removeEventListener("mouseleave",k),e.removeEventListener("keydown",et),e.removeEventListener("keyup",tt),e.removeEventListener("dragstart",k),e.removeEventListener("blur",nt)}function ln(e,t){st(e,t,!1)}function un(e){delete e._ripple,at(e)}function cn(e,t){if(t.value===t.oldValue)return;const s=Qe(t.oldValue);st(e,t,s)}const dn={mounted:ln,unmounted:un,updated:cn},fn=b({active:{type:Boolean,default:void 0},symbol:{type:null,default:Ke},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:se,appendIcon:se,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...He(),...W(),...Me(),...Dt(),...je(),...jt(),...Lt(),...Ae(),...en(),...ue(),...sn(),...re(),...G({tag:"button"}),...D(),...Xe({variant:"elevated"})},"VBtn"),Vn=V()({name:"VBtn",directives:{Ripple:dn},props:fn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:s,slots:n}=t;const{themeClasses:a}=M(e),{borderClasses:i}=Fe(e),{colorClasses:o,colorStyles:l,variantClasses:r}=Ht(e),{densityClasses:m}=We(e),{dimensionStyles:h}=Mt(e),{elevationClasses:y}=Ue(e),{loaderClasses:u}=Rt(e),{locationStyles:d}=De(e),{positionClasses:C}=tn(e),{roundedClasses:g}=ce(e),{sizeClasses:w,sizeStyles:x}=le(e),v=Ut(e,e.symbol,!1),S=nn(e,s),I=c(()=>{var _;return e.active!==void 0?e.active:S.isLink.value?(_=S.isActive)==null?void 0:_.value:v==null?void 0:v.isSelected.value}),B=c(()=>(v==null?void 0:v.disabled.value)||e.disabled),R=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),H=c(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function J(_){var T;B.value||S.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||s.target==="_blank")||((T=S.navigate)==null||T.call(S,_),v==null||v.toggle())}return an(S,v==null?void 0:v.select),L(()=>{var de,fe;const _=S.isLink.value?"a":e.tag,T=!!(e.prependIcon||n.prepend),Q=!!(e.appendIcon||n.append),$=!!(e.icon&&e.icon!==!0),F=(v==null?void 0:v.isSelected.value)&&(!S.isLink.value||((de=S.isActive)==null?void 0:de.value))||!v||((fe=S.isActive)==null?void 0:fe.value);return wt(f(_,{type:_==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,i.value,F?o.value:void 0,m.value,y.value,u.value,C.value,g.value,w.value,r.value,e.class],style:[F?l.value:void 0,h.value,d.value,x.value,e.style],disabled:B.value||void 0,href:S.href.value,onClick:J,value:H.value},{default:()=>{var ve;return[Gt(!0,"v-btn"),!e.icon&&T&&f("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?f(te,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):f(ee,{key:"prepend-icon",icon:e.prependIcon},null)]),f("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&$?f(ee,{key:"content-icon",icon:e.icon},null):f(te,{key:"content-defaults",disabled:!$,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var me;return[((me=n.default)==null?void 0:me.call(n))??e.text]}})]),!e.icon&&Q&&f("span",{key:"append",class:"v-btn__append"},[n.append?f(te,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):f(ee,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&f("span",{key:"loader",class:"v-btn__loader"},[((ve=n.loader)==null?void 0:ve.call(n))??f(Qt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[kt("ripple"),!B.value&&e.ripple,null]])}),{}}});export{bn as $,Mt as A,De as B,tn as C,nn as D,Gt as E,Cn as F,xn as G,Sn as H,_n as I,pn as J,Ft as K,Bn as L,Xt as M,jt as N,re as O,le as P,Ut as Q,dn as R,wn as S,U as T,kn as U,te as V,It as W,mn as X,gn as Y,hn as Z,Z as _,G as a,yn as a0,Pn as a1,In as a2,L as b,He as c,je as d,ue as e,Se as f,Fe as g,Ue as h,ce as i,Rt as j,ee as k,Qt as l,W as m,Vn as n,En as o,Me as p,Dt as q,Lt as r,Ae as s,Ce as t,Et as u,en as v,sn as w,Xe as x,Ht as y,We as z};
