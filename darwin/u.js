var P=Object.defineProperty;var D=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var A=(e,r,t)=>r in e?P(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,B=(e,r)=>{for(var t in r||(r={}))R.call(r,t)&&A(e,t,r[t]);if(D)for(var t of D(r))K.call(r,t)&&A(e,t,r[t]);return e};import{c as n,m as W}from"./4.js";import{i as k}from"./2.js";import{K as E,b as G,o as l,d as c,F as b,R as S,u as T,i,t as $,p as I,m as C,y as J,O as j,S as V,s as F,q as Q,h as f,j as m,c as X,w as H,e as Y,l as Z}from"./w.js";import{_ as y}from"./_.js";import{z as ee}from"./v.js";import{b as re}from"./.js";import{s as oe}from"./k.js";import{v as te}from"./q.js";import{H as N}from"./6.js";import"./e.js";import"./1.js";import"./0.js";import"./x.js";var h,O,g;({camera:h,main:O}=k);g=()=>{var e,r;if(gc(),document.hidden){localStorage.recing||h.x();return}switch(delete localStorage.recing,{src:e}=n,h.x(),e){case"screen":n.video="";break;default:if(!n.video){if({video:r}=localStorage,!r)return;n.video=r}e==="all"?h.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):h.rect(),setTimeout(()=>{document.hidden||O(!1)},1e3)}};document.addEventListener("visibilitychange",g);var ae={setup:()=>{var e,r,t,o,a,s;for(o=["all \u5C4F\u5E55+\u6444\u50CF\u5934\u5F55\u5236","screen \u5C4F\u5E55\u5F55\u5236","camera \u6444\u50CF\u5934\u5F55\u5236"],s=r=0,t=o.length;r<t;s=++r)e=o[s],a=e.indexOf(" "),o[s]=[e.slice(0,a),e.slice(1+a)];return E(()=>n.src,g),G(g),E(()=>n.video,d=>{var u;document.hidden||({src:u}=n,d?u==="screen"&&(n.src=localStorage.src||"all"):u!=="screen"&&(localStorage.src=n.src,n.src="screen"),g())}),{li:o,config:n,go:d=>{n.src=d}}}};const se=e=>(I("data-v-1eb91dd6"),e=e(),C(),e),ie={class:"method"},ne=["onClick"],de=se(()=>i("b",{class:"ico"},null,-1));function le(e,r){return l(),c("div",ie,[(l(!0),c(b,null,S(e.li,([t,o])=>(l(),c("a",{class:T([t,e.config.src==t?"now":""]),onClick:a=>e.go(t)},[de,i("i",null,$(o),1)],10,ne))),256))])}var ce=y(ae,[["render",le],["__scopeId","data-v-1eb91dd6"]]),ue={setup:()=>({config:n,disabled:J(()=>n.src==="camera"),li:"\u6574\u4E2A\u684C\u9762 \u6307\u5B9A\u533A\u57DF".split(" ")})};const _e=e=>(I("data-v-2a229f8c"),e=e(),C(),e),ve={class:"bk"},fe=_e(()=>i("h2",null,"\u5F55\u5236\u533A\u57DF",-1)),pe={class:"select"},me=["disabled"],he=["value"];function ge(e,r){return l(),c("div",ve,[fe,i("div",pe,[j(i("select",{disabled:e.disabled,"onUpdate:modelValue":r[0]||(r[0]=t=>e.config.area=t)},[(l(!0),c(b,null,S(e.li,(t,o)=>(l(),c("option",{value:o},$(t),9,he))),256))],8,me),[[V,e.config.area]])])])}var be=y(ue,[["render",ge],["__scopeId","data-v-2a229f8c"]]),$e={components:{zAudio:ee},setup:()=>{var e,r,t;return t={audio:F([]),video:F([])},{mediaDevices:e}=navigator,r=async()=>{var o,a,s,d,u,v,p,_,w,x,z;v={},p=await e.enumerateDevices();for(x of p)({kind:d,label:u,deviceId:o}=x),o==="default"&&(u=u.replace("Default - ","\u9ED8\u8BA4 ")),d.endsWith("input")&&(d=d.slice(0,-5),(v[d]=v[d]||[]).push([o,u]));for(s in t)t[s].value=v[s]||[];for(s in t){if({value:w}=t[s],w.length){if(_=n[s],_){for(z of w)if([a]=z,_===a)return}_!==""&&(_=w[0][0])}else _=0;n[s]=_}},Q(()=>{var o,a,s;a=["audio","video"];for(o of a)s=n[o],s&&(localStorage[o]=s)}),(async()=>await r())(),B({refresh:r,config:n,x:o=>{var a;a=n[o],a?a="":a=localStorage[o]||"",n[o]=a}},t)}};const U=e=>(I("data-v-e19e988e"),e=e(),C(),e),ye={class:"bk"},we=U(()=>i("h2",null,"\u8BBE\u5907\u8BBE\u7F6E",-1)),Se={class:"video"},ke={class:"select"},Ie={label:"\u8F93\u5165\u6E90"},Ce=["value"],je=U(()=>i("optgroup",{label:"\u2500\u2500\u2500"},[i("option",{value:""},"\u7981\u7528")],-1)),Ve={class:"audio"},Fe={class:"select"},Ue={label:"\u8F93\u5165\u6E90"},xe=["value"],ze=U(()=>i("optgroup",{label:"\u2500\u2500\u2500"},[i("option",{value:""},"\u7981\u7528")],-1));function De(e,r){const t=f("z-audio");return l(),c("div",ye,[we,i("li",Se,[i("label",{class:T({x:!e.config.video}),onClick:r[0]||(r[0]=o=>e.x("video")),for:"driveVideo"},null,2),i("div",ke,[j(i("select",{id:"driveVideo",onFocus:r[1]||(r[1]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":r[2]||(r[2]=o=>e.config.video=o)},[i("optgroup",Ie,[(l(!0),c(b,null,S(e.video,([o,a])=>(l(),c("option",{value:o},$(a),9,Ce))),256))]),je],544),[[V,e.config.video]])])]),i("li",Ve,[i("label",{onClick:r[3]||(r[3]=o=>e.x("audio")),for:"driveAudio"},[m(t)]),i("div",Fe,[j(i("select",{id:"driveAudio",onFocus:r[4]||(r[4]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":r[5]||(r[5]=o=>e.config.audio=o)},[i("optgroup",Ue,[(l(!0),c(b,null,S(e.audio,([o,a])=>(l(),c("option",{value:o},$(a),9,xe))),256))]),ze],544),[[V,e.config.audio]])])])])}var Ae=y($e,[["render",De],["__scopeId","data-v-e19e988e"]]),Be={components:{btn:re}};const Ee=e=>(I("data-v-b0e482fa"),e=e(),C(),e),Te=Ee(()=>i("b",null,null,-1));function He(e,r){const t=f("btn");return l(),X(t,null,{default:H(()=>[Te,Y(e.$slots,"default",{},void 0,!0)]),_:3})}var Ne=y(Be,[["render",He],["__scopeId","data-v-b0e482fa"]]);var q,L;L=()=>{var e;return e=new Headers,e.append("user_token",localStorage.uid),e};q=class{constructor(r){this.json=this.json.bind(this),this.ipc=r}async fetch(r,t={}){var o;if(t.headers=L(),o=await fetch(N+r+".do",t),o.status===401){delete localStorage.uid,this.ipc.auto_update.relaunch();return}return o}async json(r,t={}){var o;return o=await this.fetch(r,t),o.json()}};var Oe=e=>new q(e);var qe=Oe(k),Le=new Proxy(()=>{},{get:(e,r)=>{_paq.push(["trackEvent","\u70B9",r])}}),M;({auto_update:M}=k);var Me={components:{src:ce,rArea:be,drive:Ae,btn:Ne},setup:()=>{var e,r;return e=F("\u5F00\u59CB\u5F55\u5236"),r=t=>{e.value=`\u8BF7\u6388\u6743${t}\u540E\u70B9\u6B64\u5F55\u5236`},{txt:e,start:async()=>{var t,o,a,s,d,u,v,p;u=Object.entries({audio:"\u9EA6\u514B\u98CE",video:"\u6444\u50CF\u5934"});for(p of u)if([a,o]=p,s=n[a],s)try{await W[a](s)}catch{r(o);return}if(n.src!=="camera")try{await te()}catch{r("\u5F55\u5C4F");return}localStorage.recing=1,{avatarUrl:t,space:{used:v,max:d}}=await qe.json("user/get"),localStorage.ico=t,v>=d?(e.value="\u8BF7\u4ED8\u8D39\u6269\u5BB9\u540E\u70B9\u6B64\u5F55\u5236",k.open(N+"?pay=true&user_token="+localStorage.uid)):(Le.\u5F55,oe())}}}};(async()=>await M.update_promise())();function Pe(e,r){const t=f("src"),o=f("r-area"),a=f("drive"),s=f("btn");return l(),c(b,null,[m(t),i("main",null,[m(o),m(a),m(s,{onClick:e.start},{default:H(()=>[Z($(e.txt),1)]),_:1},8,["onClick"])])],64)}var ir=y(Me,[["render",Pe],["__scopeId","data-v-4965e706"]]);export{ir as default};
