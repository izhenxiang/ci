var G=Object.defineProperty;var q=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var x=(e,o,a)=>o in e?G(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,L=(e,o)=>{for(var a in o||(o={}))H.call(o,a)&&x(e,a,o[a]);if(q)for(var a of q(o))J.call(o,a)&&x(e,a,o[a]);return e};import{c as r}from"./$.js";import{i as R}from"./2.js";import{w as j,e as P,o as u,k as v,F as w,R as I,E as A,u as s,D as S,z as F,A as U,b as Q,N as V,S as B,s as M,K as X,d as Y,C as O,m as Z,q as k,v as C,l as ee,y as oe}from"./.js";import{_ as D}from"./f.js";import{m as T}from"./4.js";import{b as ae}from"./o.js";import{s as re}from"./7.js";import{v as te}from"./v.js";import"./q.js";import"./0.js";import"./-.js";import"./g.js";import"./3.js";var y,K,b;({camera:y,main:K}=R);b=()=>{var e,o;if(document.hidden){localStorage.recing||y.x();return}switch(delete localStorage.recing,{src:e}=r,y.x(),e){case"screen":r.video="";break;default:if(!r.video){if({video:o}=localStorage,!o)return;r.video=o}e==="all"?y.circle():y.default(800,500),setTimeout(()=>{document.hidden||K(!1)},1e3)}};document.addEventListener("visibilitychange",b);var ie={setup:()=>{var e,o,a,t,c,l;for(t=["all \u5C4F\u5E55+\u6444\u50CF\u5934\u5F55\u5236","screen \u5C4F\u5E55\u5F55\u5236","camera \u6444\u50CF\u5934\u5F55\u5236"],l=o=0,a=t.length;o<a;l=++o)e=t[l],c=e.indexOf(" "),t[l]=[e.slice(0,c),e.slice(1+c)];return j(()=>r.src,b),P(b),j(()=>r.video,f=>{var i;({src:i}=r),f?i==="screen"&&(r.src=localStorage.src||"all"):i!=="screen"&&(localStorage.src=r.src,r.src="screen"),b()}),{li:t,config:r,go:f=>{r.src=f}}}};const se=e=>(F("data-v-42f6d87c"),e=e(),U(),e),ne={class:"method"},le=["onClick"],de=se(()=>s("b",{class:"ico"},null,-1));function ce(e,o){return u(),v("div",ne,[(u(!0),v(w,null,I(e.li,([a,t])=>(u(),v("a",{class:A([a,e.config.src==a?"now":""]),onClick:c=>e.go(a)},[de,s("i",null,S(t),1)],10,le))),256))])}var ue=D(ie,[["render",ce],["__scopeId","data-v-42f6d87c"]]),ve={setup:()=>({config:r,disabled:Q(()=>r.src==="camera"),li:"\u6574\u4E2A\u684C\u9762 \u6307\u5B9A\u533A\u57DF".split(" ")})};const fe=e=>(F("data-v-28731d7e"),e=e(),U(),e),_e={class:"bk"},pe=fe(()=>s("h2",null,"\u5F55\u5236\u533A\u57DF",-1)),me={class:"select"},he=["disabled"],ge=["value"];function ye(e,o){return u(),v("div",_e,[pe,s("div",me,[V(s("select",{disabled:e.disabled,"onUpdate:modelValue":o[0]||(o[0]=a=>e.config.area=a)},[(u(!0),v(w,null,I(e.li,(a,t)=>(u(),v("option",{value:t},S(a),9,ge))),256))],8,he),[[B,e.config.area]])])])}var be=D(ve,[["render",ye],["__scopeId","data-v-28731d7e"]]),we={setup:()=>{var e,o,a,t,c,l,f;return l={audio:M([]),video:M([])},{mediaDevices:t}=navigator,c=async()=>{var i,n,d,_,p,m,g,h,$,E,N;m={},g=await t.enumerateDevices();for(E of g)({kind:_,label:p,deviceId:i}=E),i==="default"&&(p=p.replace("Default - ","\u9ED8\u8BA4 ")),_.endsWith("input")&&(_=_.slice(0,-5),(m[_]=m[_]||[]).push([i,p]));for(d in l)l[d].value=m[d]||[];for(d in l){if({value:$}=l[d],$.length){if(h=r[d],h){for(N of $)if([n]=N,h===n)return}h!==""&&(h=$[0][0])}else h=0;r[d]=h}},a=void 0,o=void 0,e=()=>{o&&(clearInterval(a),o(),o=void 0)},X(e),f=Y(0),O(()=>{var i,n,d;n=["audio","video"];for(i of n)d=r[i],d&&(localStorage[i]=d)}),O(async()=>{var i,n,d,_,p,m,g;e(),{audio:d}=r,!!d&&(g=await T.audio(d),i=new AudioContext,m=i.createMediaStreamSource(g),n=i.createAnalyser(),n.minDecibels=-90,n.maxDecibels=-10,n.fftSize=32,o=()=>(m.disconnect(n),i.close()),_=n.frequencyBinCount,p=new Uint8Array(_),a=setInterval(()=>{n.getByteFrequencyData(p),f.value=Math.round(Math.min(1,Math.max(...p)/200)*100)},100),m.connect(n))}),(async()=>await c())(),L({refresh:c,config:r,x:i=>{var n;n=r[i],n?n="":n=localStorage[i]||"",r[i]=n},vol:f},l)}};const z=e=>(F("data-v-3a61f77c"),e=e(),U(),e),Se={class:"bk"},$e=z(()=>s("h2",null,"\u8BBE\u5907\u8BBE\u7F6E",-1)),ke={class:"video"},Ce={class:"select"},Ie={label:"\u8F93\u5165\u6E90"},De=["value"],Ae=z(()=>s("optgroup",{label:"\u2500\u2500\u2500"},[s("option",{value:""},"\u7981\u7528")],-1)),Ve={class:"audio"},Be={class:"select"},Me={label:"\u8F93\u5165\u6E90"},Fe=["value"],Ue=z(()=>s("optgroup",{label:"\u2500\u2500\u2500"},[s("option",{value:""},"\u7981\u7528")],-1));function ze(e,o){return u(),v("div",Se,[$e,s("li",ke,[s("label",{class:A({e:e.config.video}),onClick:o[0]||(o[0]=a=>e.x("video")),for:"driveVideo"},null,2),s("div",Ce,[V(s("select",{id:"driveVideo",onFocus:o[1]||(o[1]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":o[2]||(o[2]=a=>e.config.video=a)},[s("optgroup",Ie,[(u(!0),v(w,null,I(e.video,([a,t])=>(u(),v("option",{value:a},S(t),9,De))),256))]),Ae],544),[[B,e.config.video]])])]),s("li",Ve,[s("label",{class:A({e:e.config.audio}),style:Z("--vol:"+e.vol+"%"),onClick:o[3]||(o[3]=a=>e.x("audio")),for:"driveAudio"},null,6),s("div",Be,[V(s("select",{id:"driveAudio",onFocus:o[4]||(o[4]=(...a)=>e.refresh&&e.refresh(...a)),"onUpdate:modelValue":o[5]||(o[5]=a=>e.config.audio=a)},[s("optgroup",Me,[(u(!0),v(w,null,I(e.audio,([a,t])=>(u(),v("option",{value:a},S(t),9,Fe))),256))]),Ue],544),[[B,e.config.audio]])])])])}var Ee=D(we,[["render",ze],["__scopeId","data-v-3a61f77c"]]),W;({auto_update:W}=R);var Ne={components:{src:ue,rArea:be,drive:Ee,btn:ae},setup:()=>{var e,o;return e=M("\u5F55\u5236\u89C6\u9891"),o=a=>{e.value=`\u8BF7\u6388\u6743${a}\u540E\u70B9\u6B64\u5F55\u5236`},{txt:e,start:async()=>{var a,t,c,l,f;l=Object.entries({audio:"\u9EA6\u514B\u98CE",video:"\u6444\u50CF\u5934"});for(f of l)if([t,a]=f,c=r[t],c)try{await T[t](c)}catch{o(a);return}if(r.src!=="camera")try{await te()}catch{o("\u5F55\u5C4F");return}localStorage.recing=1,re()}}}};(async()=>{for(;;)await W.update_promise(),location.hash!=="#main/about"&&(location.hash="main/update")})();function qe(e,o){const a=k("src"),t=k("r-area"),c=k("drive"),l=k("btn");return u(),v(w,null,[C(a),s("main",null,[C(t),C(c),C(l,{onClick:e.start},{default:ee(()=>[oe(S(e.txt),1)]),_:1},8,["onClick"])])],64)}var Ye=D(Ne,[["render",qe],["__scopeId","data-v-63723ada"]]);export{Ye as default};
