import S from"./B-fOFxL_.js";import{f as N,g as I,o as s,c as a,a as e,F as m,r as v,h as o,t as g,i as f,p as R,e as V,j as q,k as D,l as F,b as h}from"./0pkdLrfk.js";import{u as y,q as b}from"./Dh65HCBj.js";import{_ as O}from"./DlAUqK2U.js";import"./CE8drkI1.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./Cp2aKFcD.js";async function E(){const n=N().path.split("/").filter(t=>t);console.log("pathArray",n);const _=async t=>{var r;let{data:c}=await y(`content-${t}`,()=>b(t).only(["_path","title"]).findOne());return(!c||!c.value)&&({data:c}=await y(`content-${t}-dir`,()=>b(`${t}/_dir`).only(["_path","title"]).findOne())),c&&c.value?((r=c.value._dir)==null?void 0:r.title)||c.value.title:t};return await Promise.all(n.map(async(t,c)=>{const r=n.slice(0,c+1).join("/"),i=await _(r),p=`/${r}`;return{title:i,link:p}}))}const H=u=>(R("data-v-16a77443"),u=u(),V(),u),L={"aria-label":"breadcrumb"},P={class:"breadcrumb"},T=H(()=>e("li",{class:"breadcrumb-item"},[e("a",{href:"/"},"Home"),e("span",{class:"separator"},">")],-1)),z=["href"],G={key:1,class:""},J={key:2,class:"separator"},K={__name:"Breadcrumbs",async setup(u){let n,_;const d=([n,_]=I(()=>E()),n=await n,_(),n);return(t,c)=>(s(),a("nav",L,[e("ol",P,[T,(s(!0),a(m,null,v(o(d),(r,i)=>(s(),a("li",{key:i},[i<o(d).length-1?(s(),a("a",{key:0,href:r.link},g(r.title),9,z)):(s(),a("span",G,g(r.title),1)),i<o(d).length-1?(s(),a("span",J,">")):f("",!0)]))),128))])]))}},M=O(K,[["__scopeId","data-v-16a77443"]]),Q={class:"container mt-3 slg:w-[81%]"},U={id:"",class:"py-2 lg:py-2"},W={key:0,class:"container_"},X={class:"gap-6 _items-center"},Y={key:1,class:"container"},Z={key:0,class:"mb-5"},tt=["src"],et={key:1,class:"grid lg:grid-cols-2 gap-6 _items-center"},st=["src"],at={class:"gap-6 _items-center"},ot={class:""},nt={class:"text-4xl font-medium text-default-950 mt-0"},ct={class:"text-base mt-4"},rt={key:2,class:"container"},it={class:"grid lg:grid-cols-2 gap-6 _items-center"},lt=["src"],_t={class:"text-4xl font-medium text-default-950 mt-0"},dt={class:"text-base mt-4"},bt=q({__name:"[...path]",async setup(u){let n,_;const d=D();F(d.params.path.join("/"));const{data:t}=([n,_]=I(()=>y("data",()=>b([...d.params.path].join("/")).find())),n=await n,_(),n);return console.log("data...>",t.value),(c,r)=>{var p,x,k,$,w,j,B,C,A;const i=S;return s(),a(m,null,[e("div",Q,[h(M)]),e("section",U,[((p=o(t)[0])==null?void 0:p.imageposition)=="hide"?(s(),a("div",W,[e("div",X,[h(i,{value:o(t)[0]},null,8,["value"])])])):f("",!0),((x=o(t)[0])==null?void 0:x.imageposition)=="top"?(s(),a("div",Y,[(k=o(t)[0])!=null&&k.images[1]?(s(),a("div",et,[(s(!0),a(m,null,v((w=o(t)[0])==null?void 0:w.images,l=>(s(),a("div",{key:l,class:"mb-5"},[e("img",{src:l,class:"object-cover h-[400px] max-h-[400px] rounded-xl mx-auto",alt:""},null,8,st)]))),128))])):(s(),a("div",Z,[(s(!0),a(m,null,v(($=o(t)[0])==null?void 0:$.images,l=>(s(),a("div",{key:l,class:"mb-5"},[e("img",{src:l,class:"object-cover w-full max-h-[400px] rounded-xl mx-auto",alt:""},null,8,tt)]))),128))])),e("div",at,[e("div",ot,[e("h2",nt,g((j=o(t)[0])==null?void 0:j.title),1),e("p",ct,[h(i,{value:o(t)[0]},null,8,["value"])])])])])):f("",!0),((B=o(t)[0])==null?void 0:B.imageposition)=="side"?(s(),a("div",rt,[e("div",it,[e("div",null,[(s(!0),a(m,null,v((C=o(t)[0])==null?void 0:C.images,l=>(s(),a("div",{key:l,class:"mb-5"},[e("img",{src:l,class:"object-cover w-full rounded-xl mx-auto",alt:""},null,8,lt)]))),128))]),e("div",null,[e("h2",_t,g((A=o(t)[0])==null?void 0:A.title),1),e("p",dt,[h(i,{value:o(t)[0]},null,8,["value"])])])])])):f("",!0)])],64)}}});export{bt as default};
