var H=Object.defineProperty;var z=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var q=(e,s,o)=>s in e?H(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,E=(e,s)=>{for(var o in s||(s={}))L.call(s,o)&&q(e,o,s[o]);if(z)for(var o of z(s))G.call(s,o)&&q(e,o,s[o]);return e};import{x as c,o as u,z as S,A as C,q as a,B as A,F as b,D as k,E as V,C as D,b as O,G as j,H as B,s as N,I as R,d as T,l as W,u as $,k as J,m as y,v as K}from"./6151d84f.js";import{_ as w}from"./index.js";import{c as n}from"./8c366594.js";import"./19696688.js";import{m as P}from"./513644be.js";import{s as Q}from"./978a6ba7.js";var X={setup:()=>{}};const x=e=>(S("data-v-7414edb0"),e=e(),C(),e),Y=x(()=>a("div",{class:"logo"},null,-1)),Z=x(()=>a("nav",null,[a("a",{class:"home"}),a("a",{class:"config"}),a("a",{class:"user"})],-1)),ee=[Y,Z];function oe(e,s){return u(),c("header",null,ee)}var se=w(X,[["render",oe],["__scopeId","data-v-7414edb0"]]),ae={setup:()=>{var e,s,o,r,_,d;for(r=["all \u5C4F\u5E55+\u6444\u50CF\u5934\u5F55\u5236","screen \u5C4F\u5E55\u5F55\u5236","camera \u6444\u50CF\u5934\u5F55\u5236"],d=s=0,o=r.length;s<o;d=++s)e=r[d],_=e.indexOf(" "),r[d]=[e.slice(0,_),e.slice(1+_)];return A(()=>{switch(n.src){case"screen":n.video="";break;default:n.video||(n.video=localStorage.video)}}),{li:r,config:n,go:m=>{n.src=m}}}};const te=e=>(S("data-v-69066389"),e=e(),C(),e),re={class:"method"},ie=["onClick"],ne=te(()=>a("b",{class:"ico"},null,-1));function le(e,s){return u(),c("div",re,[(u(!0),c(b,null,k(e.li,([o,r])=>(u(),c("a",{class:V([o,e.config.src==o?"now":""]),onClick:_=>e.go(o)},[ne,a("i",null,D(r),1)],10,ie))),256))])}var de=w(ae,[["render",le],["__scopeId","data-v-69066389"]]),ce={setup:()=>({config:n,disabled:O(()=>n.src==="camera"),li:"\u6574\u4E2A\u684C\u9762 \u6307\u5B9A\u533A\u57DF".split(" ")})};const ue=e=>(S("data-v-213e215c"),e=e(),C(),e),_e={class:"bk"},ve=ue(()=>a("h2",null,"\u5F55\u5236\u533A\u57DF",-1)),fe={class:"select"},pe=["disabled"],me=["value"];function he(e,s){return u(),c("div",_e,[ve,a("div",fe,[j(a("select",{disabled:e.disabled,"onUpdate:modelValue":s[0]||(s[0]=o=>e.config.area=o)},[(u(!0),c(b,null,k(e.li,(o,r)=>(u(),c("option",{value:r},D(o),9,me))),256))],8,pe),[[B,e.config.area]])])])}var ge=w(ce,[["render",he],["__scopeId","data-v-213e215c"]]),be={setup:()=>{var e,s,o,r,_,d,m;return d={audio:N([]),video:N([])},{mediaDevices:r}=navigator,_=async()=>{var l,i,t,v,f,p,g,h,I,M,U;p={},g=await r.enumerateDevices();for(M of g)({kind:v,label:f,deviceId:l}=M),l==="default"&&(f=f.replace("Default - ","\u9ED8\u8BA4 ")),v.endsWith("input")&&(v=v.slice(0,-5),(p[v]=p[v]||[]).push([l,f]));for(t in d)d[t].value=p[t]||[];for(t in d){if({value:I}=d[t],I.length){if(h=n[t],h){for(U of I)if([i]=U,h===i)return}h!==""&&(h=I[0][0])}else h=0;n[t]=h}},o=void 0,s=void 0,e=()=>{s&&(clearInterval(o),s(),s=void 0)},R(e),m=T(0),A(()=>{var l,i,t;i=["audio","video"];for(l of i)t=n[l],t&&(localStorage[l]=t)}),A(async()=>{var l,i,t,v,f,p,g;e(),{audio:t}=n,!!t&&(g=await P.audio(t),l=new AudioContext,p=l.createMediaStreamSource(g),i=l.createAnalyser(),i.minDecibels=-90,i.maxDecibels=-10,i.fftSize=32,s=()=>(p.disconnect(i),l.close()),v=i.frequencyBinCount,f=new Uint8Array(v),o=setInterval(()=>{i.getByteFrequencyData(f),m.value=Math.round(Math.min(1,Math.max(...f)/200)*100)},100),p.connect(i))}),(async()=>{await _()})(),E({refresh:_,config:n,x:l=>{var i,t;t=n[l],t?t="":t=localStorage[l]||"",l==="video"&&({src:i}=n,t?i==="screen"&&(n.src="all"):i==="all"&&(n.src="screen")),n[l]=t},vol:m},d)}};const F=e=>(S("data-v-1476b424"),e=e(),C(),e),$e={class:"bk"},ye=F(()=>a("h2",null,"\u8BBE\u5907\u8BBE\u7F6E",-1)),we={class:"video"},Ie={class:"select"},Se={label:"\u8F93\u5165\u6E90"},Ce=["value"],ke=F(()=>a("optgroup",{label:"\u2500\u2500\u2500"},[a("option",{value:""},"\u7981\u7528")],-1)),De={class:"audio"},Ae={class:"select"},Ve={label:"\u8F93\u5165\u6E90"},je=["value"],Be=F(()=>a("optgroup",{label:"\u2500\u2500\u2500"},[a("option",{value:""},"\u7981\u7528")],-1));function Fe(e,s){return u(),c("div",$e,[ye,a("li",we,[a("label",{class:V({e:e.config.video}),onClick:s[0]||(s[0]=o=>e.x("video")),for:"driveVideo"},null,2),a("div",Ie,[j(a("select",{id:"driveVideo",onFocus:s[1]||(s[1]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":s[2]||(s[2]=o=>e.config.video=o)},[a("optgroup",Se,[(u(!0),c(b,null,k(e.video,([o,r])=>(u(),c("option",{value:o},D(r),9,Ce))),256))]),ke],544),[[B,e.config.video]])])]),a("li",De,[a("label",{class:V({e:e.config.audio}),style:W("--vol:"+e.vol+"%"),onClick:s[3]||(s[3]=o=>e.x("audio")),for:"driveAudio"},null,6),a("div",Ae,[j(a("select",{id:"driveAudio",onFocus:s[4]||(s[4]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":s[5]||(s[5]=o=>e.config.audio=o)},[a("optgroup",Ve,[(u(!0),c(b,null,k(e.audio,([o,r])=>(u(),c("option",{value:o},D(r),9,je))),256))]),Be],544),[[B,e.config.audio]])])])])}var Me=w(be,[["render",Fe],["__scopeId","data-v-1476b424"]]),Ue={components:{src:de,rHead:se,rArea:ge,drive:Me,start:Q},setup:()=>{}};const ze=K("\u5F55\u5236\u89C6\u9891");function qe(e,s){const o=y("r-head"),r=y("src"),_=y("r-area"),d=y("drive"),m=y("start");return u(),c(b,null,[$(o),a("main",null,[$(r),$(_),$(d),$(m,null,{default:J(()=>[ze]),_:1})])],64)}var Re=w(Ue,[["render",qe],["__scopeId","data-v-789b2890"]]);export{Re as default};
