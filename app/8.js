var G=Object.defineProperty;var x=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var E=(e,o,r)=>o in e?G(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,L=(e,o)=>{for(var r in o||(o={}))H.call(o,r)&&E(e,r,o[r]);if(x)for(var r of x(o))J.call(o,r)&&E(e,r,o[r]);return e};import{c as a}from"./y.js";import{i as R}from"./1.js";import{K as N,b as P,o as u,d as v,F as S,R as C,u as V,i as s,t as w,p as F,m as U,z as Q,O as A,S as B,s as M,I as X,g as Y,q as O,f as Z,h as I,j as k,w as ee,l as oe}from"./l.js";import{_ as D}from"./7.js";import{m as T}from"./2.js";import{b as re}from"./w.js";import{s as ae}from"./$!.js";import{v as te}from"./q.js";import"./h.js";import"./0.js";import"./-.js";import"./z.js";import"./a.js";var b,K,y;({camera:b,main:K}=R);y=()=>{var e,o;if(gc(),document.hidden){localStorage.recing||b.x();return}switch(delete localStorage.recing,{src:e}=a,b.x(),e){case"screen":a.video="";break;default:if(!a.video){if({video:o}=localStorage,!o)return;a.video=o}e==="all"?b.circle(localStorage.\u4EBA\u50CF\u5C3A\u5BF8-0):b.rect(),setTimeout(()=>{document.hidden||K(!1)},1e3)}};document.addEventListener("visibilitychange",y);var ie={setup:()=>{var e,o,r,t,c,l;for(t=["all \u5C4F\u5E55+\u6444\u50CF\u5934\u5F55\u5236","screen \u5C4F\u5E55\u5F55\u5236","camera \u6444\u50CF\u5934\u5F55\u5236"],l=o=0,r=t.length;o<r;l=++o)e=t[l],c=e.indexOf(" "),t[l]=[e.slice(0,c),e.slice(1+c)];return N(()=>a.src,y),P(y),N(()=>a.video,f=>{var i;document.hidden||({src:i}=a,f?i==="screen"&&(a.src=localStorage.src||"all"):i!=="screen"&&(localStorage.src=a.src,a.src="screen"),y())}),{li:t,config:a,go:f=>{a.src=f}}}};const se=e=>(F("data-v-1eb91dd6"),e=e(),U(),e),ne={class:"method"},le=["onClick"],de=se(()=>s("b",{class:"ico"},null,-1));function ce(e,o){return u(),v("div",ne,[(u(!0),v(S,null,C(e.li,([r,t])=>(u(),v("a",{class:V([r,e.config.src==r?"now":""]),onClick:c=>e.go(r)},[de,s("i",null,w(t),1)],10,le))),256))])}var ue=D(ie,[["render",ce],["__scopeId","data-v-1eb91dd6"]]),ve={setup:()=>({config:a,disabled:Q(()=>a.src==="camera"),li:"\u6574\u4E2A\u684C\u9762 \u6307\u5B9A\u533A\u57DF".split(" ")})};const fe=e=>(F("data-v-2a229f8c"),e=e(),U(),e),_e={class:"bk"},pe=fe(()=>s("h2",null,"\u5F55\u5236\u533A\u57DF",-1)),me={class:"select"},he=["disabled"],ge=["value"];function be(e,o){return u(),v("div",_e,[pe,s("div",me,[A(s("select",{disabled:e.disabled,"onUpdate:modelValue":o[0]||(o[0]=r=>e.config.area=r)},[(u(!0),v(S,null,C(e.li,(r,t)=>(u(),v("option",{value:t},w(r),9,ge))),256))],8,he),[[B,e.config.area]])])])}var ye=D(ve,[["render",be],["__scopeId","data-v-2a229f8c"]]),Se={setup:()=>{var e,o,r,t,c,l,f;return l={audio:M([]),video:M([])},{mediaDevices:t}=navigator,c=async()=>{var i,n,d,_,p,m,g,h,$,j,q;m={},g=await t.enumerateDevices();for(j of g)({kind:_,label:p,deviceId:i}=j),i==="default"&&(p=p.replace("Default - ","\u9ED8\u8BA4 ")),_.endsWith("input")&&(_=_.slice(0,-5),(m[_]=m[_]||[]).push([i,p]));for(d in l)l[d].value=m[d]||[];for(d in l){if({value:$}=l[d],$.length){if(h=a[d],h){for(q of $)if([n]=q,h===n)return}h!==""&&(h=$[0][0])}else h=0;a[d]=h}},r=void 0,o=void 0,e=()=>{o&&(clearInterval(r),o(),o=void 0)},X(e),f=Y(0),O(()=>{var i,n,d;n=["audio","video"];for(i of n)d=a[i],d&&(localStorage[i]=d)}),O(async()=>{var i,n,d,_,p,m,g;e(),{audio:d}=a,!!d&&(g=await T.audio(d),i=new AudioContext,m=i.createMediaStreamSource(g),n=i.createAnalyser(),n.minDecibels=-90,n.maxDecibels=-10,n.fftSize=32,o=()=>(m.disconnect(n),i.close()),_=n.frequencyBinCount,p=new Uint8Array(_),r=setInterval(()=>{n.getByteFrequencyData(p),f.value=Math.round(Math.min(1,Math.max(...p)/200)*100)},100),m.connect(n))}),(async()=>await c())(),L({refresh:c,config:a,x:i=>{var n;n=a[i],n?n="":n=localStorage[i]||"",a[i]=n},vol:f},l)}};const z=e=>(F("data-v-3a61f77c"),e=e(),U(),e),we={class:"bk"},$e=z(()=>s("h2",null,"\u8BBE\u5907\u8BBE\u7F6E",-1)),Ie={class:"video"},ke={class:"select"},Ce={label:"\u8F93\u5165\u6E90"},De=["value"],Ve=z(()=>s("optgroup",{label:"\u2500\u2500\u2500"},[s("option",{value:""},"\u7981\u7528")],-1)),Ae={class:"audio"},Be={class:"select"},Me={label:"\u8F93\u5165\u6E90"},Fe=["value"],Ue=z(()=>s("optgroup",{label:"\u2500\u2500\u2500"},[s("option",{value:""},"\u7981\u7528")],-1));function ze(e,o){return u(),v("div",we,[$e,s("li",Ie,[s("label",{class:V({e:e.config.video}),onClick:o[0]||(o[0]=r=>e.x("video")),for:"driveVideo"},null,2),s("div",ke,[A(s("select",{id:"driveVideo",onFocus:o[1]||(o[1]=(...r)=>e.refresh&&e.refresh(...r)),"onUpdate:modelValue":o[2]||(o[2]=r=>e.config.video=r)},[s("optgroup",Ce,[(u(!0),v(S,null,C(e.video,([r,t])=>(u(),v("option",{value:r},w(t),9,De))),256))]),Ve],544),[[B,e.config.video]])])]),s("li",Ae,[s("label",{class:V({e:e.config.audio}),style:Z("--vol:"+e.vol+"%"),onClick:o[3]||(o[3]=r=>e.x("audio")),for:"driveAudio"},null,6),s("div",Be,[A(s("select",{id:"driveAudio",onFocus:o[4]||(o[4]=(...r)=>e.refresh&&e.refresh(...r)),"onUpdate:modelValue":o[5]||(o[5]=r=>e.config.audio=r)},[s("optgroup",Me,[(u(!0),v(S,null,C(e.audio,([r,t])=>(u(),v("option",{value:r},w(t),9,Fe))),256))]),Ue],544),[[B,e.config.audio]])])])])}var je=D(Se,[["render",ze],["__scopeId","data-v-3a61f77c"]]),W;({auto_update:W}=R);var qe={components:{src:ue,rArea:ye,drive:je,btn:re},setup:()=>{var e,o;return e=M("\u5F00\u59CB\u5F55\u5236"),o=r=>{e.value=`\u8BF7\u6388\u6743${r}\u540E\u70B9\u6B64\u5F55\u5236`},{txt:e,start:async()=>{var r,t,c,l,f;l=Object.entries({audio:"\u9EA6\u514B\u98CE",video:"\u6444\u50CF\u5934"});for(f of l)if([t,r]=f,c=a[t],c)try{await T[t](c)}catch{o(r);return}if(a.src!=="camera")try{await te()}catch{o("\u5F55\u5C4F");return}localStorage.recing=1,ae()}}}};(async()=>await W.update_promise())();function xe(e,o){const r=I("src"),t=I("r-area"),c=I("drive"),l=I("btn");return u(),v(S,null,[k(r),s("main",null,[k(t),k(c),k(l,{onClick:e.start},{default:ee(()=>[oe(w(e.txt),1)]),_:1},8,["onClick"])])],64)}var Ye=D(qe,[["render",xe],["__scopeId","data-v-032f415c"]]);export{Ye as default};
