import{d as _,i as t,f as a,g as o,h as l,t as d,C as h,x as f,r as y,b as p,A as C,F as k,z as $,D as b}from"./vendor.3d779ceb.js";import{a as m,u as A,M as g}from"./index.555f5623.js";const B={key:0,class:"guild"},E=["src","alt"],F=["textContent"],S={class:"info"},T=["textContent"],U=["textContent"],j=_({props:{data:null},setup(r){const s=r,e=s.data;let c=s.data.permissions,i=s.data.owner?"\u64C1\u6709\u8005":(32&c)==32?"\u6A5F\u5668\u4EBA\u7BA1\u7406\u54E1":!1,n=`https://cdn.discordapp.com/icons/${e.id}/${e.icon}.png`;return(v,u)=>t(i)?(a(),o("div",B,[l("div",{class:"icon",style:h({background:t(e).icon?`url('${t(n)}') center / cover no-repeat`:"#1f2129"})},[t(e).icon?(a(),o("img",{key:0,src:t(n),alt:`${t(e).name} \u7684 log`,class:"log"},null,8,E)):(a(),o("div",{key:1,class:"log",textContent:d(t(e).name.slice(0,3))},null,8,F))],4),l("div",S,[l("p",{class:"guild-name",textContent:d(t(e).name)},null,8,T),l("p",{class:"guild-permission",textContent:d(t(i))},null,8,U)])])):f("",!0)}});var z=m(j,[["__scopeId","data-v-5c1b0ccc"]]);const D={class:"dashboard"},G={class:"guilds"},H=_({setup(r){let s=y([]);const e=A(),c=p(()=>e.state[g.AUTH].client);return!p(()=>e.state[g.AUTH].login).value&&C().push("/"),c.value.getGuilds().then(n=>s.value=n.data),(n,v)=>(a(),o("div",D,[l("div",G,[(a(!0),o(k,null,$(t(s),(u,x)=>(a(),b(z,{key:x,data:u,class:"guild"},null,8,["data"]))),128))])]))}});var N=m(H,[["__scopeId","data-v-69ab424a"]]);export{N as default};