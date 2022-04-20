var R=Object.defineProperty;var D=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var A=(e,r,t)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,B=(e,r)=>{for(var t in r||(r={}))q.call(r,t)&&A(e,t,r[t]);if(D)for(var t of D(r))G.call(r,t)&&A(e,t,r[t]);return e};import{c as n,m as Q}from"./q.js";import{i as k}from"./4.js";import{G as E,o as W,a as l,c,F as $,Q as S,m as T,f as i,t as w,p as I,j as C,_ as y,v as J,L as j,R as V,s as x,k as K,e as p,g as h,d as X,w as H,r as Y,i as Z}from"./d.js";import{z as ee}from"./a.js";import{b as re}from"./h.js";import{s as oe}from"./5.js";import{v as te}from"./3.js";import{H as L}from"./.js";import"./_.js";import"./1.js";import"./0.js";import"./y.js";var g,N,b;({camera:g,main:N}=k);b=()=>{var e,r;if(gc(),document.hidden){localStorage.recing||g.x();return}switch(delete localStorage.recing,{src:e}=n,g.x(),e){case"screen":n.video="";break;default:if(!n.video){if({video:r}=localStorage,!r)return;n.video=r}e==="all"?g.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):g.rect(),setTimeout(()=>{document.hidden||N(!1)},1e3)}};document.addEventListener("visibilitychange",b);var ae={setup:()=>{var e,r,t,o,a,s;for(o=["all \u5C4F\u5E55+\u6444\u50CF\u5934\u5F55\u5236","screen \u5C4F\u5E55\u5F55\u5236","camera \u6444\u50CF\u5934\u5F55\u5236"],s=r=0,t=o.length;r<t;s=++r)e=o[s],a=e.indexOf(" "),o[s]=[e.slice(0,a),e.slice(1+a)];return E(()=>n.src,b),W(b),E(()=>n.video,d=>{var u;document.hidden||({src:u}=n,d?u==="screen"&&(n.src=localStorage.src||"all"):u!=="screen"&&(localStorage.src=n.src,n.src="screen"),b())}),{li:o,config:n,go:d=>{n.src=d}}}};const se=e=>(I("data-v-1eb91dd6"),e=e(),C(),e),ie={class:"method"},ne=["onClick"],de=se(()=>i("b",{class:"ico"},null,-1));function le(e,r){return l(),c("div",ie,[(l(!0),c($,null,S(e.li,([t,o])=>(l(),c("a",{class:T([t,e.config.src==t?"now":""]),onClick:a=>e.go(t)},[de,i("i",null,w(o),1)],10,ne))),256))])}var ce=y(ae,[["render",le],["__scopeId","data-v-1eb91dd6"]]),ue={setup:()=>({config:n,disabled:J(()=>n.src==="camera"),li:"\u6574\u4E2A\u684C\u9762 \u6307\u5B9A\u533A\u57DF".split(" ")})};const _e=e=>(I("data-v-2a229f8c"),e=e(),C(),e),ve={class:"bk"},fe=_e(()=>i("h2",null,"\u5F55\u5236\u533A\u57DF",-1)),pe={class:"select"},me=["disabled"],he=["value"];function ge(e,r){return l(),c("div",ve,[fe,i("div",pe,[j(i("select",{disabled:e.disabled,"onUpdate:modelValue":r[0]||(r[0]=t=>e.config.area=t)},[(l(!0),c($,null,S(e.li,(t,o)=>(l(),c("option",{value:o},w(t),9,he))),256))],8,me),[[V,e.config.area]])])])}var be=y(ue,[["render",ge],["__scopeId","data-v-2a229f8c"]]),$e={components:{zAudio:ee},setup:()=>{var e,r,t;return t={audio:x([]),video:x([])},{mediaDevices:e}=navigator,r=async()=>{var o,a,s,d,u,v,m,_,f,U,z;v={},m=await e.enumerateDevices();for(U of m)({kind:d,label:u,deviceId:o}=U),o==="default"&&(u=u.replace("Default - ","\u9ED8\u8BA4 ")),d.endsWith("input")&&(d=d.slice(0,-5),(v[d]=v[d]||[]).push([o,u]));for(s in t)t[s].value=v[s]||[];for(s in t){if({value:f}=t[s],f.length){if(_=n[s],_){for(z of f)if([a]=z,_===a)return}_!==""&&(_=f[0][0])}else _=0;n[s]=_}},K(()=>{var o,a,s;a=["audio","video"];for(o of a)s=n[o],s&&(localStorage[o]=s)}),(async()=>await r())(),B({refresh:r,config:n,x:o=>{var a;a=n[o],a?a="":a=localStorage[o]||"",n[o]=a}},t)}};const F=e=>(I("data-v-e19e988e"),e=e(),C(),e),we={class:"bk"},ye=F(()=>i("h2",null,"\u8BBE\u5907\u8BBE\u7F6E",-1)),Se={class:"video"},ke={class:"select"},Ie={label:"\u8F93\u5165\u6E90"},Ce=["value"],je=F(()=>i("optgroup",{label:"\u2500\u2500\u2500"},[i("option",{value:""},"\u7981\u7528")],-1)),Ve={class:"audio"},xe={class:"select"},Fe={label:"\u8F93\u5165\u6E90"},Ue=["value"],ze=F(()=>i("optgroup",{label:"\u2500\u2500\u2500"},[i("option",{value:""},"\u7981\u7528")],-1));function De(e,r){const t=p("z-audio");return l(),c("div",we,[ye,i("li",Se,[i("label",{class:T({x:!e.config.video}),onClick:r[0]||(r[0]=o=>e.x("video")),for:"driveVideo"},null,2),i("div",ke,[j(i("select",{id:"driveVideo",onFocus:r[1]||(r[1]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":r[2]||(r[2]=o=>e.config.video=o)},[i("optgroup",Ie,[(l(!0),c($,null,S(e.video,([o,a])=>(l(),c("option",{value:o},w(a),9,Ce))),256))]),je],544),[[V,e.config.video]])])]),i("li",Ve,[i("label",{onClick:r[3]||(r[3]=o=>e.x("audio")),for:"driveAudio"},[h(t)]),i("div",xe,[j(i("select",{id:"driveAudio",onFocus:r[4]||(r[4]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":r[5]||(r[5]=o=>e.config.audio=o)},[i("optgroup",Fe,[(l(!0),c($,null,S(e.audio,([o,a])=>(l(),c("option",{value:o},w(a),9,Ue))),256))]),ze],544),[[V,e.config.audio]])])])])}var Ae=y($e,[["render",De],["__scopeId","data-v-e19e988e"]]),Be={components:{btn:re}};const Ee=e=>(I("data-v-b0e482fa"),e=e(),C(),e),Te=Ee(()=>i("b",null,null,-1));function He(e,r){const t=p("btn");return l(),X(t,null,{default:H(()=>[Te,Y(e.$slots,"default",{},void 0,!0)]),_:3})}var Le=y(Be,[["render",He],["__scopeId","data-v-b0e482fa"]]);var O,M;M=()=>{var e;return e=new Headers,e.append("user_token",localStorage.uid),e};O=class{constructor(r){this.json=this.json.bind(this),this.ipc=r}async fetch(r,t={}){var o;if(t.headers=M(),r.indexOf(".do")<0&&(r+=".do"),o=await fetch(L+r,t),o.status===401){delete localStorage.uid,this.ipc.auto_update.relaunch();return}return o}async json(r,t={}){var o;return o=await this.fetch(r,t),o.json()}};var Ne=e=>new O(e);var Oe=Ne(k),Me=new Proxy(()=>{},{get:(e,r)=>{_paq.push(["trackEvent","\u70B9",r])}}),P;({auto_update:P}=k);var Pe={components:{src:ce,rArea:be,drive:Ae,btn:Le},setup:()=>{var e,r,t;return r="\u5F00\u59CB\u5F55\u5236",e=x(r),t=o=>{e.value=`\u8BF7\u6388\u6743${o}\u540E\u70B9\u6B64\u5F55\u5236`},{txt:e,start:async()=>{var o,a,s,d,u,v,m,_;v=Object.entries({audio:"\u9EA6\u514B\u98CE",video:"\u6444\u50CF\u5934"});for(_ of v)if([s,a]=_,d=n[s],d)try{await Q[s](d)}catch{t(a);return}if(n.src!=="camera")try{await te()}catch{t("\u5F55\u5C4F");return}localStorage.recing=1,{avatarUrl:o,space:{used:m,max:u}}=await Oe.json("user/get"),localStorage.ico=o,m>=u?(e.value="\u8BF7\u4ED8\u8D39\u6269\u5BB9\u540E\u70B9\u6B64\u5F55\u5236",k.open(L+"?pay=true&user_token="+localStorage.uid)):(e.value=r,Me.\u5F55,oe())}}}};(async()=>await P.update_promise())();function Re(e,r){const t=p("src"),o=p("r-area"),a=p("drive"),s=p("btn");return l(),c($,null,[h(t),i("main",null,[h(o),h(a),h(s,{onClick:e.start},{default:H(()=>[Z(w(e.txt),1)]),_:1},8,["onClick"])])],64)}var sr=y(Pe,[["render",Re],["__scopeId","data-v-465d0ab4"]]);export{sr as default};
