import{j as b,l as f,v as k,n as p,c as s,o as _,b as e,h as l,a1 as g,w as h,F as v}from"./0pkdLrfk.js";import{_ as y}from"./Djlj3Vrw.js";import{_ as C}from"./B5sxIvps.js";import{_ as w}from"./BPYAFGNw.js";import{c as M}from"./CNAwRx4U.js";import"./BgggVzBF.js";import"./Cpj98o6Y.js";const I=Symbol.for("nuxt:client-only"),S=b({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(m,{slots:a,attrs:c}){const o=f(!1);return k(()=>{o.value=!0}),p(I,!0),n=>{var r;if(o.value)return(r=a.default)==null?void 0:r.call(a);const i=a.fallback||a.placeholder;if(i)return i();const d=n.fallback||n.placeholder||"",u=n.fallbackTag||n.placeholderTag||"span";return s(u,c,d)}}});/**
 * @license lucide-vue-next v0.325.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=M("DownloadCloudIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]),P={name:"Magaweb",img:"",slogan:"sistemas"},T=[{name:"fone",icon:"PhoneIcon",value:"3232323232323"},{name:"email",icon:"MailIcon",value:"magawebtec@gmail.com"},{name:"endereço",icon:"LineChartIcon",value:"Rua das Marrecas, 123"}],$=[{label:"Início",link:"/#home"},{label:"Sobre",link:"/#about"},{label:"Service",link:"/services"},{label:"Portfolio",link:"/portfolio"},{label:"Contato",link:"/#contact"}],D=[{label:"Início",link:"/#home"},{label:"Sobre",link:"/#about"},{label:"Produtos",link:"/#service"},{label:"Portfolio",link:"/#portfolio"},{label:"Contato",link:"/#contact"}],F=[{midia:"instagram",link:""},{midia:"facebook",link:""}],j="© Magaweb. Crafted and Coded with ❤️ by Maguete",q={options:{delay:5e3}},t={logo:P,contact:T,navbar:$,links:D,socialmidias:F,copyright:j,destaques:q},V={__name:"default",setup(m){return(a,c)=>{const o=S;return _(),s(v,null,[e(y,{logo:l(t).logo,"navbar-link":l(t).navbar,"btn-text":"PDF","btn-icon":l(x)},null,8,["logo","navbar-link","btn-icon"]),g(a.$slots,"default"),e(C,{data:l(t)},null,8,["data"]),e(o,null,{default:h(()=>[e(w)]),_:1})],64)}}};export{V as default};