import{j as b,l as c,C as k,o as s,c as o,a as e,t as n,i,F as j,r as C,h as B}from"./0pkdLrfk.js";const q={id:"portfolio",class:"py-0"},z={class:"container_"},F={class:"flex items-end justify-between -mb-4"},N={class:"max-w-2xl _mx-auto _text-center"},O={class:"text-4xl font-medium capitalize text-default-950 my-0 text-left ml-4"},S={key:0,class:"text-base ml-4 mt-1"},V={class:""},A={class:"mb-5"},D={id:"gallery-wrapper",class:"flex items-center flex-wrap"},E={key:0,class:"group space-y-6 overflow-hidden rounded-lg bg-default-200 p-1 h-[340px]"},L={class:"relative overflow-hidden rounded-lg"},G=["src"],H={_class:"absolute inset-0"},I={class:"h-full w-full rounded _bg-black/10"},J={class:"flex h-full items-end px-3 py-2"},K={class:"overflow-hidden"},M={class:"mb-2 font-medium text-white"},P={key:0,class:"mb-2 text-1xl font-medium text-white"},Q=["href"],R={key:1,class:"mb-3 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal"},W=b({__name:"cards",props:{info:{type:Object,required:!0},items:{type:Array,required:!0}},setup(t){const a=t;a.items;let g=c(a.items);return c("all"),c([...new Set(a.items.map(d=>d.category))]),(d,T)=>{var r,h,u;return k("router-link"),s(),o("section",q,[e("div",z,[e("div",F,[e("div",N,[e("h2",O,n((r=t.info)==null?void 0:r.title),1),(h=t.info)!=null&&h.desc?(s(),o("p",S,n((u=t.info)==null?void 0:u.desc),1)):i("",!0)])]),e("div",V,[e("div",A,[i("",!0)])]),e("div",D,[(s(!0),o(j,null,C(B(g),(l,_)=>{var m,f,p,x,w,v,y;return s(),o("div",{key:_,class:"picture-item w-full p-3 xl:w-1/3 pph-[400px]"},[_<(((m=t.info)==null?void 0:m.limit)||1e4)?(s(),o("div",E,[e("div",L,[(p=(f=t.info)==null?void 0:f.show)!=null&&p.includes("image")?(s(),o("img",{key:0,class:"transition mx-auto h-[200px] w-full object-cover object-top duration-500 group-hover:scale-105",src:l.images[0],alt:"",loading:"lazy",width:640,height:805},null,8,G)):i("",!0),e("div",H,[e("div",I,[e("div",J,[e("div",K,[e("p",M,n(l.date),1),(w=(x=t.info)==null?void 0:x.show)!=null&&w.includes("title")?(s(),o("h5",P,[e("a",{href:l._path,class:"text-default-950 text-lg"},n(l.title),9,Q)])):i("",!0),(y=(v=t.info)==null?void 0:v.show)!=null&&y.includes("description")?(s(),o("p",R,n(l.description.substring(0,l.description.indexOf(".")+1)),1)):i("",!0)])])])])])])):i("",!0)])}),128))]),i("",!0)])])}}});export{W as _};
