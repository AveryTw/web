var z=Object.defineProperty;var O=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var $=(t,e,s)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))P.call(e,s)&&$(t,s,e[s]);if(O)for(var s of O(e))F.call(e,s)&&$(t,s,e[s]);return t};var A=(t,e,s)=>($(t,typeof e!="symbol"?e+"":e,s),s);import{a as B,c as J,u as V,d as H,r as W,b as E,o as Z,e as m,f as v,g as c,h as T,t as K,p as Q,i as X,j as Y,k as ee,l as k,w as te,F as se,m as oe,n as ne,q as re}from"./vendor.df48c09f.js";const ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};ae();var C="/web/assets/LogoLong.298e9c85.png",rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});function ie(t,e){localStorage.setItem(t,JSON.stringify(e))}function R(t,e=!0){let s=localStorage.getItem(t)||"{}";return e?JSON.parse(s):s}function ce(t,e){sessionStorage.setItem(t,JSON.stringify(e))}function le(t,e=!0){let s=sessionStorage.getItem(t)||"{}";return e?JSON.parse(s):s}var g;(function(t){t.SET_AUTH_STATUS="SET_AUTH_STATUS",t.SET_AUTH_DATA="SET_AUTH_DATA"})(g||(g={}));const ue={[g.SET_AUTH_STATUS]:(t,e)=>t.login=e===void 0?!t.login:e,[g.SET_AUTH_DATA]:(t,e)=>t.userInfo=e};var d;(function(t){t.LOGIN="loginCode",t.GET_INFO="getMe"})(d||(d={}));const de={[d.GET_INFO]:async({commit:t,state:e},s)=>{let n=e.client;n.init(s);let{data:o}=await n.getMe();return t(g.SET_AUTH_DATA,o),o},[d.LOGIN]:async({commit:t,dispatch:e,state:s},n)=>{let r=await s.client.getToken(n);if(typeof r=="string")return t(g.SET_AUTH_STATUS,!0),e(d.GET_INFO,r),r}};var b;(function(t){t.GET_AUTHENTICATION="isAuthenticated"})(b||(b={}));const _e={[b.GET_AUTHENTICATION]:t=>t.login},fe="https://discord.com/api/v9",y=B.create({baseURL:fe,timeout:20*1e3,method:"GET"});y.interceptors.request.use(t=>t,t=>Promise.reject(t));y.interceptors.response.use(t=>t,t=>(t.response&&t.response.data?console.error("[Axios Error]",`Code: ${t.response.status}, Message: ${t.response.data.message}`):console.error(t),Promise.reject(t)));let _={invite:{dcServer:"https://discord.com/invite/uzzwFz3yh6",bot:"https://discord.com/oauth2/authorize?client_id=876367835486646282&scope=bot&permissions=268443710"},oauth2:{redirect_uri:"http://localhost:3000/discord-callback",server_callback:"/services/discord-callback"},mainApiUrl:"http://localhost:3001",languages:[{name:"\u7E41\u9AD4\u4E2D\u6587",area:{name:"\u53F0\u7063",icon:"https://www.mediafire.com/convkey/5079/rit79mf35jbjn465g.jpg"},mark:"ZH_TW"}],defaultLanguage:"ZH_TW"};class he{constructor(e,s=!0){A(this,"token");A(this,"Authorization");A(this,"BaseRequest");this.user=s,this.BaseRequest=y,this.init(e,s)}getTokenJson(){return R("token")||le("token")}savaToken(e,s=!0){(e==null?void 0:e.error)||(s?ie("token",e):ce("token",e))}init(e,s=!0){e||(e=this.getTokenJson()),typeof e!="string"&&e&&(this.savaToken(e),e=e==null?void 0:e.access_token),this.token=e,this.Authorization=`${s?"Bearer":"Bot"} ${e}`}async getToken(e){let{data:s}=await B({url:`${_.mainApiUrl}${_.oauth2.server_callback}`,method:"POST",data:{code:e,redirect_uri:_.oauth2.redirect_uri}});return this.savaToken(s),s.access_token?(this.token=s.access_token,s.access_token):s}getMe(){return this.BaseRequest(u({url:"/users/@me"},this.headers))}getGuilds(){return this.BaseRequest(u({url:"/users/@me/guilds"},this.headers))}getGuildChannel(e){return this.BaseRequest(u({url:`/guilds/${e}/channels`},this.headers))}getGuildMembers(e){return this.BaseRequest(u({url:`/guilds/${e}/members`},this.headers))}getGuildRoles(e){return this.BaseRequest(u({url:`/guilds/${e}/roles`},this.headers))}get headers(){return{headers:{Authorization:this.Authorization||""}}}}const ge={login:!1,userInfo:void 0,client:new he},pe={namespaced:!0,mutations:ue,getters:_e,state:ge,actions:de},me={};var S;(function(t){t.getBotInfo="getBotInfo"})(S||(S={}));const ve={[S.getBotInfo]:(t,e)=>t.botInfo=e},Te={botInfo:void 0};var x;(function(t){t.loadBotInfo="loadBotInfo"})(x||(x={}));const Ae={[x.loadBotInfo]:async({commit:t})=>{let{data:e}=await y({baseURL:_.mainApiUrl,url:"/api/discord/botInfo"});t(S.getBotInfo,e)}},ye={namespaced:!0,mutations:ve,getters:me,state:Te,actions:Ae},Se={},Ie={};var $e={},Ee={},ke={EN_US:$e,ZH_TW:Ee};const be={get languages(){return _.languages},language:_.defaultLanguage,data:u({},ke)},xe={},we={namespaced:!0,mutations:Ie,getters:Se,state:be,actions:xe};var l;(function(t){t.AUTH="auth",t.CLIENT="client",t.I18N="i18n"})(l||(l={}));const Le=J({modules:{[l.AUTH]:pe,[l.CLIENT]:ye,[l.I18N]:we}}),G=Symbol("vue-store");function D(){return V(G)}var j=(t,e)=>{const s=t.__vccOpts||t;for(const[n,o]of e)s[n]=o;return s};const I=t=>(Q("data-v-daa8494e"),t=t(),X(),t),Ne={class:"flex flex-item-center"},Ue=["href"],Oe=I(()=>c("img",{src:C,alt:""},null,-1)),Be=I(()=>c("p",null,"Avery",-1)),He=[Oe,Be],Ce={class:"menu"},Re={class:"ul flex flex-item-center"},Ge={class:"user flex flex-item-center"},De=["src"],je=["textContent"],Me=I(()=>c("i",{class:"arrow"},null,-1)),qe=I(()=>c("div",{class:"licks"},null,-1)),ze=H({setup(t){const e=D(),s=W(null),n=E(()=>e.state.auth.userInfo),o="/web/",r=()=>window.open(`https://discord.com/api/oauth2/authorize?client_id=863676847731376170&redirect_uri=${_.oauth2.redirect_uri}&response_type=code&scope=identify+guilds+email`,"","width=500,height=620"),a=()=>s.value.classList.toggle("down"),p=i=>{e.dispatch(`${[l.AUTH]}/${d.LOGIN}`,i)},f=i=>{e.dispatch(`${l.AUTH}/${d.GET_INFO}`,i)};return Z(()=>{let i=R("token");(i==null?void 0:i.access_token)&&f(i),addEventListener("get_dc_code",async L=>{var N,U;let h=L;((N=h==null?void 0:h.detail)==null?void 0:N.code)&&p((U=h==null?void 0:h.detail)==null?void 0:U.code)})}),(i,L)=>(m(),v("header",Ne,[c("a",{href:T(o),class:"logo flex flex-item-center"},He,8,Ue),c("div",Ce,[c("div",Re,[c("div",Ge,[T(n)?(m(),v("div",{key:0,class:"flex flex-item-center is-login",onClick:a,ref_key:"userEl",ref:s},[c("img",{src:`https://cdn.discordapp.com/avatars/${T(n).id}/${T(n).avatar}.png`,class:"user-icon",width:"45",alt:""},null,8,De),c("span",{class:"user-name",textContent:K(T(n).username)},null,8,je),Me,qe],512)):(m(),v("div",{key:1,class:"login",onClick:r},"\u767B\u5165"))])])])]))}});var Pe=j(ze,[["__scopeId","data-v-daa8494e"]]);const Fe={};function Je(t,e){return m(),v("footer")}var Ve=j(Fe,[["render",Je]]);const We={class:"wrapper"},Ze=H({setup(t){return(e,s)=>{const n=Y("router-view"),o=ee("i18n");return m(),v(se,null,[k(Pe),c("div",We,[k(n)]),te(c("div",null,null,512),[[o,"awa"]]),k(Ve)],64)}}}),Ke="modulepreload",M={},Qe="/web/",w=function(e,s){return!s||s.length===0?e():Promise.all(s.map(n=>{if(n=`${Qe}${n}`,n in M)return;M[n]=!0;const o=n.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Ke,o||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),o)return new Promise((p,f)=>{a.addEventListener("load",p),a.addEventListener("error",f)})})).then(()=>e())},Xe=[{name:"Home",path:"/",component:()=>w(()=>import("./Home.e92c9f09.js"),["assets/Home.e92c9f09.js","assets/Home.ecc29976.css","assets/vendor.df48c09f.js"])},{name:"dashboard",path:"/dashboard",component:()=>w(()=>import("./index.7169d3ef.js"),["assets/index.7169d3ef.js","assets/index.9bc1a98b.css","assets/vendor.df48c09f.js"])},{name:"discordCallback",path:"/discord-callback",component:()=>w(()=>import("./discord.76064f1f.js"),["assets/discord.76064f1f.js","assets/vendor.df48c09f.js"])}],Ye=oe({history:ne("/web/"),routes:Xe}),et=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},tt=et(t=>t.replace(/(?:^|[-_/])(\w)/g,(e,s)=>s.toUpperCase()||"")),q=D();var st={created(t,e,s){var r,a;console.log();let n=(a=(r=s.dirs)==null?void 0:r[0].instance)==null?void 0:a.$options,o=n==null?void 0:n.__file;console.log(o),o&&console.log(tt(o))},mounted(t,e){var f,i;let{arg:s,value:n}=e,{key:o,defaultTxt:r}=((f=/^\/(?<key>([a-zA-Z0-9])*)\/(?<defaultTxt>)/gm.exec(n))==null?void 0:f.groups)||{key:void 0,defaultTxt:""},a=E(()=>q.state[l.I18N].language),p=E(()=>q.state[l.I18N].data);o&&(r=((i=p.value[a.value])==null?void 0:i[o])||r),t.innerText=r}};re(Ze).use(Le,G).use(Ye).directive("i18n",st).mount("#app");export{x as A,l as M,rt as _,j as a,C as b,_ as c,D as u};
