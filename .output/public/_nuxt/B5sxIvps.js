import{c as d}from"./CNAwRx4U.js";import{j as u,o as s,c as a,a as t,t as o,F as r,r as h,h as c,B as i,i as n,d as x}from"./0pkdLrfk.js";/**
 * @license lucide-vue-next v0.325.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=d("FacebookIcon",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.325.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=d("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.325.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=d("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.325.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=d("TwitterIcon",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),k={id:"footer"},v={class:"border-y border-default-200"},b={class:"container py-20"},p={class:"grid grid-cols-4 gap-1"},w={class:"_bg-slate-700 p-3"},j={class:"xl:text-xl lg:text-lg font-medium text-default-800 mb-4"},I={class:"_bg-slate-700 p-3"},F=t("h5",{class:"xl:text-xl lg:text-lg font-medium text-default-800 mb-4"},"Seções",-1),z={_class:"flex flex-col gap-3"},B={class:""},M=["href"],C={class:"_bg-slate-700 p-3"},L={class:"flex flex-col gap-3"},V=t("h5",{class:"xl:text-xl lg:text-lg font-medium text-default-800 mb-4"},"Social Media",-1),N={class:"space-y-3"},S={class:"h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary"},T=["href"],q=t("h5",{class:"text-base font-medium text-default-800"},null,-1),D={class:"_bg-slate-700 p-3"},O=t("h5",{class:"xl:text-xl lg:text-lg font-medium text-default-800 mb-4"},"Contato",-1),A={_class:"flex flex-col gap-3 "},E={key:0,_class:"container mx-auto p-1 grid md:grid-cols-2 gap-3"},H={class:"text-base text-default-700 hover:text-default-950 transition-all"},Y={class:"py-4"},G={class:"container flex flex-wrap justify-center items-center h-full md:justify-between text-center md:text-start"},J={class:"text-base text-default-900"},U=u({__name:"Footer",props:{data:{type:Object,required:!0}},setup(l){const _=new Date().getFullYear();return(K,P)=>(s(),a("footer",k,[t("div",v,[t("div",b,[t("div",p,[t("div",w,[t("h5",j,o(l.data.logo.name),1),t("p",null,o(l.data.logo.slogan),1)]),t("div",I,[F,t("div",z,[t("ul",B,[(s(!0),a(r,null,h(l.data.navbar,e=>(s(),a("li",{class:"ml-5",key:e.label},[t("a",{href:e.link,class:"text-base text-default-700 hover:text-default-950 transition-all"},o(e.label),9,M)]))),128))])])]),t("div",C,[t("ul",L,[V,t("div",N,[(s(!0),a(r,null,h(l.data.socialmidias,e=>(s(),a("div",{key:e.midia},[t("div",S,[t("a",{href:e.link},[e.midia=="facebook"?(s(),i(c(f),{key:0,class:"h-5 w-5"})):n("",!0),e.midia=="instagram"?(s(),i(c(g),{key:1,class:"h-5 w-5"})):n("",!0),e.midia=="twitter"?(s(),i(c(m),{key:2,class:"h-5 w-5"})):n("",!0),e.midia=="linkedin"?(s(),i(c(y),{key:3,class:"h-5 w-5"})):n("",!0)],8,T)]),x(" "+o(e.link),1)]))),128)),q])])]),t("div",D,[O,t("ul",A,[(s(!0),a(r,null,h(Object.entries(l.data.contact),e=>(s(),a("li",{key:e[0]},[e[1].length>10?(s(),a("div",E,[t("p",H,o(e[0])+": "+o(e[1]),1)])):n("",!0)]))),128))])])])])]),t("div",Y,[t("div",G,[t("p",J,o(c(_))+" "+o(l.data.copyright),1)])])]))}});export{U as _};
