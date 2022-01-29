var T=Object.defineProperty;var z=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var E=(e,a,o)=>a in e?T(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,q=(e,a)=>{for(var o in a||(a={}))x.call(a,o)&&E(e,o,a[o]);if(z)for(var o of z(a))G.call(a,o)&&E(e,o,a[o]);return e};import{c as i}from"./2.js";import{w as J,o as c,k as u,F as b,G as $,E as j,u as t,D as y,z as C,A as D,b as K,I as A,J as V,s as B,K as O,d as R,C as N,m as W,q as S,v as k,l as H,y as P}from"./a.js";import{_ as I}from"./5.js";import{i as Q}from"./-.js";import{m as X}from"./..js";import{b as Y}from"./e.js";import{s as Z}from"./1.js";import{v as ee}from"./l.js";import"./!.js";import"./.js";import"./d.js";var oe={setup:()=>{var e,a,o,r,v,d;for(r=["all \u5C4F\u5E55+\u6444\u50CF\u5934\u5F55\u5236","screen \u5C4F\u5E55\u5F55\u5236","camera \u6444\u50CF\u5934\u5F55\u5236"],d=a=0,o=r.length;a<o;d=++a)e=r[d],v=e.indexOf(" "),r[d]=[e.slice(0,v),e.slice(1+v)];return J(()=>i.src,()=>{switch(i.src){case"screen":i.video="";break;default:i.video||(i.video=localStorage.video)}}),{li:r,config:i,go:h=>{i.src=h}}}};const ae=e=>(C("data-v-76f673c9"),e=e(),D(),e),re={class:"method"},se=["onClick"],te=ae(()=>t("b",{class:"ico"},null,-1));function ie(e,a){return c(),u("div",re,[(c(!0),u(b,null,$(e.li,([o,r])=>(c(),u("a",{class:j([o,e.config.src==o?"now":""]),onClick:v=>e.go(o)},[te,t("i",null,y(r),1)],10,se))),256))])}var ne=I(oe,[["render",ie],["__scopeId","data-v-76f673c9"]]),le={setup:()=>({config:i,disabled:K(()=>i.src==="camera"),li:"\u6574\u4E2A\u684C\u9762 \u6307\u5B9A\u533A\u57DF".split(" ")})};const de=e=>(C("data-v-213e215c"),e=e(),D(),e),ce={class:"bk"},ue=de(()=>t("h2",null,"\u5F55\u5236\u533A\u57DF",-1)),ve={class:"select"},fe=["disabled"],_e=["value"];function pe(e,a){return c(),u("div",ce,[ue,t("div",ve,[A(t("select",{disabled:e.disabled,"onUpdate:modelValue":a[0]||(a[0]=o=>e.config.area=o)},[(c(!0),u(b,null,$(e.li,(o,r)=>(c(),u("option",{value:r},y(o),9,_e))),256))],8,fe),[[V,e.config.area]])])])}var me=I(le,[["render",pe],["__scopeId","data-v-213e215c"]]),he={setup:()=>{var e,a,o,r,v,d,h;return d={audio:B([]),video:B([])},{mediaDevices:r}=navigator,v=async()=>{var l,n,s,f,_,p,g,m,w,M,U;p={},g=await r.enumerateDevices();for(M of g)({kind:f,label:_,deviceId:l}=M),l==="default"&&(_=_.replace("Default - ","\u9ED8\u8BA4 ")),f.endsWith("input")&&(f=f.slice(0,-5),(p[f]=p[f]||[]).push([l,_]));for(s in d)d[s].value=p[s]||[];for(s in d){if({value:w}=d[s],w.length){if(m=i[s],m){for(U of w)if([n]=U,m===n)return}m!==""&&(m=w[0][0])}else m=0;i[s]=m}},o=void 0,a=void 0,e=()=>{a&&(clearInterval(o),a(),a=void 0)},O(e),h=R(0),N(()=>{var l,n,s;n=["audio","video"];for(l of n)s=i[l],s&&(localStorage[l]=s)}),N(async()=>{var l,n,s,f,_,p,g;e(),{audio:s}=i,!!s&&(g=await X.audio(s),l=new AudioContext,p=l.createMediaStreamSource(g),n=l.createAnalyser(),n.minDecibels=-90,n.maxDecibels=-10,n.fftSize=32,a=()=>(p.disconnect(n),l.close()),f=n.frequencyBinCount,_=new Uint8Array(f),o=setInterval(()=>{n.getByteFrequencyData(_),h.value=Math.round(Math.min(1,Math.max(..._)/200)*100)},100),p.connect(n))}),(async()=>{await v()})(),q({refresh:v,config:i,x:l=>{var n,s;s=i[l],s?s="":s=localStorage[l]||"",l==="video"&&({src:n}=i,s?n==="screen"&&(i.src="all"):n==="all"&&(i.src="screen")),i[l]=s},vol:h},d)}};const F=e=>(C("data-v-1476b424"),e=e(),D(),e),ge={class:"bk"},be=F(()=>t("h2",null,"\u8BBE\u5907\u8BBE\u7F6E",-1)),ye={class:"video"},we={class:"select"},$e={label:"\u8F93\u5165\u6E90"},Se=["value"],ke=F(()=>t("optgroup",{label:"\u2500\u2500\u2500"},[t("option",{value:""},"\u7981\u7528")],-1)),Ie={class:"audio"},je={class:"select"},Ce={label:"\u8F93\u5165\u6E90"},De=["value"],Ae=F(()=>t("optgroup",{label:"\u2500\u2500\u2500"},[t("option",{value:""},"\u7981\u7528")],-1));function Ve(e,a){return c(),u("div",ge,[be,t("li",ye,[t("label",{class:j({e:e.config.video}),onClick:a[0]||(a[0]=o=>e.x("video")),for:"driveVideo"},null,2),t("div",we,[A(t("select",{id:"driveVideo",onFocus:a[1]||(a[1]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":a[2]||(a[2]=o=>e.config.video=o)},[t("optgroup",$e,[(c(!0),u(b,null,$(e.video,([o,r])=>(c(),u("option",{value:o},y(r),9,Se))),256))]),ke],544),[[V,e.config.video]])])]),t("li",Ie,[t("label",{class:j({e:e.config.audio}),style:W("--vol:"+e.vol+"%"),onClick:a[3]||(a[3]=o=>e.x("audio")),for:"driveAudio"},null,6),t("div",je,[A(t("select",{id:"driveAudio",onFocus:a[4]||(a[4]=(...o)=>e.refresh&&e.refresh(...o)),"onUpdate:modelValue":a[5]||(a[5]=o=>e.config.audio=o)},[t("optgroup",Ce,[(c(!0),u(b,null,$(e.audio,([o,r])=>(c(),u("option",{value:o},y(r),9,De))),256))]),Ae],544),[[V,e.config.audio]])])])])}var Be=I(he,[["render",Ve],["__scopeId","data-v-1476b424"]]),L;({auto_update:L}=Q);var Fe={components:{src:ne,rArea:me,drive:Be,btn:Y},setup:()=>{var e;return e=B("\u5F55\u5236\u89C6\u9891"),{txt:e,start:async()=>{var a,o;if(i.src!=="camera"){try{o=await ee()}catch(r){a=r,console.log(a),e.value="\u8BF7\u6388\u6743\u540E\u70B9\u6B64\u5F55\u5236";return}o.getTracks().forEach(r=>r.stop())}return Z()}}}};(async()=>{for(;;)await L.update_promise(),location.hash!=="#main/config"&&(location.hash="main/update")})();function Me(e,a){const o=S("src"),r=S("r-area"),v=S("drive"),d=S("btn");return c(),u(b,null,[k(o),t("main",null,[k(r),k(v),k(d,{onClick:e.start},{default:H(()=>[P(y(e.txt),1)]),_:1},8,["onClick"])])],64)}var Re=I(Fe,[["render",Me],["__scopeId","data-v-31f22262"]]);export{Re as default};