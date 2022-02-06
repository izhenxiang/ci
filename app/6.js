var R=Object.defineProperty;var q=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var x=(e,r,o)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,E=(e,r)=>{for(var o in r||(r={}))T.call(r,o)&&x(e,o,r[o]);if(q)for(var o of q(r))W.call(r,o)&&x(e,o,r[o]);return e};import{c as a}from"./.js";import{i as N}from"./0.js";import{w as L,o as u,k as v,F as g,G as $,D as C,u as n,E as y,z as D,A,b as H,I as V,J as B,s as F,K as P,d as Q,C as O,m as X,q as j,v as S,l as Y,y as Z}from"./$.js";import{_ as I}from"./d.js";import{m as G}from"./1.js";import{b as ee}from"./4.js";import{s as oe}from"./b.js";import{v as re}from"./t.js";import"./h.js";import"./..js";import"./-.js";import"./e.js";import"./s.js";var k,J;({camera:k,main:J}=N);var ae={setup:()=>{var e,r,o,t,c,d,f;for(t=["all \u5C4F\u5E55+\u6444\u50CF\u5934\u5F55\u5236","screen \u5C4F\u5E55\u5F55\u5236","camera \u6444\u50CF\u5934\u5F55\u5236"],d=r=0,o=t.length;r<o;d=++r)e=t[d],c=e.indexOf(" "),t[d]=[e.slice(0,c),e.slice(1+c)];return f=()=>{var s;switch(k.x(),{src:s}=a,s){case"screen":a.video="";break;default:a.video||(a.video=localStorage.video),s==="all"?k.circle():k.default(800,500),J(!1)}},L(()=>a.src,f),f(),L(()=>a.video,()=>{a.video?a.src==="screen"&&(a.src="all"):a.src!=="screen"&&(a.src="screen")}),{li:t,config:a,go:s=>{a.src=s}}}};const se=e=>(D("data-v-93bc8894"),e=e(),A(),e),te={class:"method"},ie=["onClick"],ne=se(()=>n("b",{class:"ico"},null,-1));function le(e,r){return u(),v("div",te,[(u(!0),v(g,null,$(e.li,([o,t])=>(u(),v("a",{class:C([o,e.config.src==o?"now":""]),onClick:c=>e.go(o)},[ne,n("i",null,y(t),1)],10,ie))),256))])}var de=I(ae,[["render",le],["__scopeId","data-v-93bc8894"]]),ce={setup:()=>({config:a,disabled:H(()=>a.src==="camera"),li:"\u6574\u4E2A\u684C\u9762 \u6307\u5B9A\u533A\u57DF".split(" ")})};const ue=e=>(D("data-v-28731d7e"),e=e(),A(),e),ve={class:"bk"},fe=ue(()=>n("h2",null,"\u5F55\u5236\u533A\u57DF",-1)),_e={class:"select"},pe=["disabled"],me=["value"];function he(e,r){return u(),v("div",ve,[fe,n("div",_e,[V(n("select",{disabled:e.disabled,"onUpdate:modelValue":r[0]||(r[0]=o=>e.config.area=o)},[(u(!0),v(g,null,$(e.li,(o,t)=>(u(),v("option",{value:t},y(o),9,me))),256))],8,pe),[[B,e.config.area]])])])}var be=I(ce,[["render",he],["__scopeId","data-v-28731d7e"]]),ge={setup:()=>{var e,r,o,t,c,d,f;return d={audio:F([]),video:F([])},{mediaDevices:t}=navigator,c=async()=>{var s,l,i,_,p,m,b,h,w,U,z;m={},b=await t.enumerateDevices();for(U of b)({kind:_,label:p,deviceId:s}=U),s==="default"&&(p=p.replace("Default - ","\u9ED8\u8BA4 ")),_.endsWith("input")&&(_=_.slice(0,-5),(m[_]=m[_]||[]).push([s,p]));for(i in d)d[i].value=m[i]||[];for(i in d){if({value:w}=d[i],w.length){if(h=a[i],h){for(z of w)if([l]=z,h===l)return}h!==""&&(h=w[0][0])}else h=0;a[i]=h}},o=void 0,r=void 0,e=()=>{r&&(clearInterval(o),r(),r=void 0)},P(e),f=Q(0),O(()=>{var s,l,i;l=["audio","video"];for(s of l)i=a[s],i&&(localStorage[s]=i)}),O(async()=>{var s,l,i,_,p,m,b;e(),{audio:i}=a,!!i&&(b=await G.audio(i),s=new AudioContext,m=s.createMediaStreamSource(b),l=s.createAnalyser(),l.minDecibels=-90,l.maxDecibels=-10,l.fftSize=32,r=()=>(m.disconnect(l),s.close()),_=l.frequencyBinCount,p=new Uint8Array(_),o=setInterval(()=>{l.getByteFrequencyData(p),f.value=Math.round(Math.min(1,Math.max(...p)/200)*100)},100),m.connect(l))}),(async()=>{await c()})(),E({refresh:c,config:a,x:s=>{var l,i;i=a[s],i?i="":i=localStorage[s]||"",s==="video"&&({src:l}=a,i?l==="screen"&&(a.src="all"):l==="all"&&(a.src="screen")),a[s]=i},vol:f},d)}};const M=e=>(D("data-v-518f5ce7"),e=e(),A(),e),ye={class:"bk"},we=M(()=>n("h2",null,"\u8BBE\u5907\u8BBE\u7F6E",-1)),$e={class:"video"},je={class:"select"},Se={label:"\u8F93\u5165\u6E90"},Ie=["value"],ke=M(()=>n("optgroup",{label:"\u2500\u2500\u2500"},[n("option",{value:""},"\u7981\u7528")],-1)),Ce={class:"audio"},De={class:"select"},Ae={label:"\u8F93\u5165\u6E90"},Ve=["value"],Be=M(()=>n("optgroup",{label:"\u2500\u2500\u2500"},[n("option",{value:""},"\u7981\u7528")],-1));function Fe(e,r){return u(),v("div",ye,[we,n("li",$e,[n("label",{class:C({e:e.config.video}),onClick:r[0]||(r[0]=o=>e.x("video")),for:"driveVideo"},null,2),n("div",je,[V(n("select",{id:"driveVideo",onFocus:r[1]||(r[1]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":r[2]||(r[2]=o=>e.config.video=o)},[n("optgroup",Se,[(u(!0),v(g,null,$(e.video,([o,t])=>(u(),v("option",{value:o},y(t),9,Ie))),256))]),ke],544),[[B,e.config.video]])])]),n("li",Ce,[n("label",{class:C({e:e.config.audio}),style:X("--vol:"+e.vol+"%"),onClick:r[3]||(r[3]=o=>e.x("audio")),for:"driveAudio"},null,6),n("div",De,[V(n("select",{id:"driveAudio",onFocus:r[4]||(r[4]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":r[5]||(r[5]=o=>e.config.audio=o)},[n("optgroup",Ae,[(u(!0),v(g,null,$(e.audio,([o,t])=>(u(),v("option",{value:o},y(t),9,Ve))),256))]),Be],544),[[B,e.config.audio]])])])])}var Me=I(ge,[["render",Fe],["__scopeId","data-v-518f5ce7"]]),K;({auto_update:K}=N);var Ue={components:{src:de,rArea:be,drive:Me,btn:ee},setup:()=>{var e,r;return e=F("\u5F55\u5236\u89C6\u9891"),r=o=>{e.value=`\u8BF7\u6388\u6743${o}\u540E\u70B9\u6B64\u5F55\u5236`},{txt:e,start:async()=>{var o,t,c,d,f;d=Object.entries({audio:"\u9EA6\u514B\u98CE",video:"\u6444\u50CF\u5934"});for(f of d)if([t,o]=f,c=a[t],c)try{await G[t](c)}catch{r(o);return}if(a.src!=="camera")try{await re()}catch{r("\u5F55\u5C4F");return}return oe()}}}};(async()=>{for(;;)await K.update_promise(),location.hash!=="#main/config"&&(location.hash="main/update")})();function ze(e,r){const o=j("src"),t=j("r-area"),c=j("drive"),d=j("btn");return u(),v(g,null,[S(o),n("main",null,[S(t),S(c),S(d,{onClick:e.start},{default:Y(()=>[Z(y(e.txt),1)]),_:1},8,["onClick"])])],64)}var Qe=I(Ue,[["render",ze],["__scopeId","data-v-41c5b547"]]);export{Qe as default};
