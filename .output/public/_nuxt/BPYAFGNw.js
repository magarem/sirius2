import{ai as u,aj as k,j as f,l as y,v as _,o as r,c as l,a as i,b as h,h as t,a2 as g,i as d}from"./0pkdLrfk.js";import{c as m}from"./CNAwRx4U.js";/**
 * @license lucide-vue-next v0.325.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=m("ChevronUpIcon",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.325.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=m("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.325.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=m("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),T=u("theme_store",()=>{const a=k("aeropage_nuxt_theme_store","light");return{theme:a,setTheme:o=>{a.value=o}}}),b={class:"fixed bottom-5 end-5 z-40 flex flex-col items-center gap-1"},M={key:0,class:"flex h-9 w-9 items-center justify-center",id:"light-theme"},j={key:1,class:"flex h-9 w-9 items-center justify-center",id:"dark-theme"},L=f({__name:"BackToTop",setup(a){const e=T(),o=()=>{const s=e.theme=="light"?"dark":"light";e.setTheme(s);const c=document.getElementsByTagName("html")[0];s=="light"?c.classList.remove("dark"):c.classList.add("dark")},p=s=>{s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})};let n=y(!1);return e.setTheme("dark"),document.getElementsByTagName("html")[0].classList.add("dark"),_(()=>{window.addEventListener("scroll",()=>{window.scrollY>72?n.value=!0:n.value=!1})}),(s,c)=>(r(),l("div",b,[i("button",{class:g(["z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[inset_0px_0px_12px_0px] shadow-primary/40 backdrop-blur-3xl transition-all duration-500",{"translate-x-16":!t(n)}]),onClick:p},[h(t(x),{class:"h-4 w-4"})],2),i("button",{class:"z-20 rounded-lg bg-primary text-white",onClick:o},[t(e).theme==="light"?(r(),l("span",M,[h(t(w),{class:"h-5 w-5"})])):d("",!0),t(e).theme==="dark"?(r(),l("span",j,[h(t(v),{class:"h-5 w-5"})])):d("",!0)])]))}});export{L as _};
