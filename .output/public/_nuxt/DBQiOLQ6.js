import{u as g}from"./Dh65HCBj.js";import{f as v}from"./DmheV74W.js";import{o as t,c as r,a as _,t as x,F as p,r as h,B as m,i as B,g as T,k as V,b,h as w}from"./0pkdLrfk.js";import{_ as f}from"./DlAUqK2U.js";import"./Cp2aKFcD.js";const D=["href"],A={class:"nline-block align-bottom capitalize"},C={key:0},j={__name:"TreeNode",props:{node:{type:Object,required:!0}},setup(e){return(n,s)=>{const a=y;return t(),r("li",null,[_("a",{href:e.node._path,class:"pr-0"},[_("span",A,x(e.node.title),1)],8,D),e.node.children&&e.node.children.length?(t(),r("ul",C,[(t(!0),r(p,null,h(e.node.children,o=>(t(),m(a,{key:o._path,node:o},null,8,["node"]))),128))])):B("",!0)])}}},y=f(j,[["__scopeId","data-v-ecdc901d"]]),q={__name:"TreeView",props:{data:{type:Array,required:!0}},setup(e){return(n,s)=>(t(),r("ul",null,[(t(!0),r(p,null,h(e.data,a=>(t(),m(y,{key:a._path,node:a},null,8,["node"]))),128))]))}},F=f(q,[["__scopeId","data-v-ade23a62"]]),O={__name:"list",async setup(e){var d;let n,s;const{data:a}=([n,s]=T(()=>g("navigation",()=>v())),n=await n,s(),n),o=(i,l)=>{for(const c of i){if(c._path===l)return c;if(c.children){const u=o(c.children,l);if(u)return u}}return null},k=[...V().params.path].join("/"),N=((d=o(a.value,"/"+k))==null?void 0:d.children)||[];return(i,l)=>(t(),r("div",null,[b(F,{data:w(N)},null,8,["data"])]))}};export{O as default};