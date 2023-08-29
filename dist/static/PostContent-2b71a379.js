import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import{a2 as ae,b as ne,n as H}from"./VBtn-c24a2175.js";import{m as le,i as oe,u as ue,b as D,j as re,k as ie,l as se,f as ce,V as de}from"./VTextField-3af8dd96.js";import{p as fe,q as ve,C as me,d as y,r as m,s as xe,F as ge,j as he,B as x,e as Ve,G as we,u as a,E as R,H as C,U as E,V as ye,an as Ce,M as b,ao as Fe,h as Pe,A as _e,m as ke,N as Ie,I as G,Q as z}from"./index-fa823cdd.js";const Re=fe({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...le(),...oe()},"VTextarea"),be=ve()({name:"VTextarea",directives:{Intersect:ae},inheritAttrs:!1,props:Re(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,S){let{attrs:F,emit:B,slots:r}=S;const o=me(e,"modelValue"),{isFocused:f,focus:U,blur:p}=ue(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),j=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function $(t,l){var n,u;!e.autofocus||!t||(u=(n=l[0].target)==null?void 0:n.focus)==null||u.call(n)}const T=m(),g=m(),M=xe(""),h=m(),q=y(()=>e.persistentPlaceholder||f.value||e.active);function P(){var t;h.value!==document.activeElement&&((t=h.value)==null||t.focus()),f.value||U()}function Q(t){P(),B("click:control",t)}function J(t){B("mousedown:control",t)}function K(t){t.stopPropagation(),P(),b(()=>{o.value="",Fe(e["onClick:clear"],t)})}function L(t){var n;const l=t.target;if(o.value=l.value,(n=e.modelModifiers)!=null&&n.trim){const u=[l.selectionStart,l.selectionEnd];b(()=>{l.selectionStart=u[0],l.selectionEnd=u[1]})}}const c=m(),V=m(+e.rows),_=y(()=>["plain","underlined"].includes(e.variant));ge(()=>{e.autoGrow||(V.value=+e.rows)});function d(){e.autoGrow&&b(()=>{if(!c.value||!g.value)return;const t=getComputedStyle(c.value),l=getComputedStyle(g.value.$el),n=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),k=Math.max(parseFloat(e.rows)*w+n,parseFloat(l.getPropertyValue("--v-input-control-height"))),I=parseFloat(e.maxRows)*w+n||1/0,s=_e(u??0,k,I);V.value=Math.floor((s-n)/w),M.value=Pe(s)})}he(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let i;return x(c,t=>{t?(i=new ResizeObserver(d),i.observe(c.value)):i==null||i.disconnect()}),Ve(()=>{i==null||i.disconnect()}),ne(()=>{const t=!!(r.counter||e.counter||e.counterValue),l=!!(t||r.details),[n,u]=we(F),[{modelValue:w,...k}]=D.filterProps(e),[I]=re(e);return a(D,R({ref:T,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":_.value},e.class],style:e.style},n,k,{centerAffix:V.value===1&&!_.value,focused:f.value}),{...r,default:s=>{let{isDisabled:v,isDirty:N,isReadonly:W,isValid:X}=s;return a(ie,R({ref:g,style:{"--v-textarea-control-height":M.value},onClick:Q,onMousedown:J,"onClick:clear":K,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},I,{active:q.value||N.value,centerAffix:V.value===1&&!_.value,dirty:N.value||e.dirty,disabled:v.value,focused:f.value,error:X.value===!1}),{...r,default:Y=>{let{props:{class:A,...Z}}=Y;return a(C,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),E(a("textarea",R({ref:h,class:A,value:o.value,onInput:L,autofocus:e.autofocus,readonly:W.value,disabled:v.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:P,onBlur:p},Z,u),null),[[ye("intersect"),{handler:$},null,{once:!0}]]),e.autoGrow&&E(a("textarea",{class:[A,"v-textarea__sizer"],"onUpdate:modelValue":ee=>o.value=ee,ref:c,readonly:!0,"aria-hidden":"true"},null),[[Ce,o.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?s=>{var v;return a(C,null,[(v=r.details)==null?void 0:v.call(r,s),t&&a(C,null,[a("span",null,null),a(se,{active:e.persistentCounter||f.value,value:O.value,max:j.value},r.counter)])])}:void 0})}),ce({},T,g,h)}}),Se={};function Be(e,S){return ke(),Ie(C,null,[a(H,null,{default:G(()=>[z("ADD")]),_:1}),a(de,{placeholder:"title",clearable:""}),a(be,{placeholder:"content",clearable:"",counter:""}),a(H,null,{default:G(()=>[z("POST")]),_:1})],64)}const He=te(Se,[["render",Be]]);export{He as default};
