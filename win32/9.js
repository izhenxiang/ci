import{c as d,m as f}from"./d.js";import{b as m,G as v,k as _,c as y,m as p,n as h,a as x,_ as b}from"./g.js";var g={setup:()=>{var a,r,n,o;return o=m(0),n=void 0,r=void 0,a=()=>{r&&(clearInterval(n),r(),r=void 0)},v(a),_(async()=>{var t,e,i,l,c,s,u;a(),{audio:i}=d,i&&(u=await f.audio(i),t=new AudioContext,s=t.createMediaStreamSource(u),e=t.createAnalyser(),e.minDecibels=-90,e.maxDecibels=-10,e.fftSize=32,r=()=>(s.disconnect(e),t.close()),l=e.frequencyBinCount,c=new Uint8Array(l),n=setInterval(()=>{e.getByteFrequencyData(c),o.value=Math.round(Math.min(1,Math.max(...c)/200)*100)},100),s.connect(e))}),{vol:o,config:d}}};function z(a,r){return x(),y("a",{class:p(["audio",{x:!a.config.audio}]),title:"\u9EA6\u514B\u98CE",style:h("--vol:"+a.vol+"%")},null,6)}var w=b(g,[["render",z],["__scopeId","data-v-29e43359"]]);export{w as z};
