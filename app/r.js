import{_ as g,a as _}from"./e.js";import{H as w}from"./b.js";import{i as m}from"./2.js";import{s as u,k as c,u as n,m as D,z as y,A as k,o as l,e as E,F as S,v as T,c as R,r as O,q as P}from"./-.js";var V="/f.svg",$={setup:()=>({x:()=>{m.x()},home:()=>{m.open(w+".htm?user_token="+localStorage.uid)},ico:u(localStorage.ico||V)})};const b=e=>(y("data-v-12f8601c"),e=e(),k(),e),x=b(()=>n("a",{class:"home",href:"#main"},null,-1)),B=b(()=>n("a",{class:"config",href:"#main/config"},null,-1));function N(e,o){return l(),c("header",null,[n("a",{class:"x",onClick:o[0]||(o[0]=(...a)=>e.x&&e.x(...a))}),n("a",{class:"logo",onClick:o[1]||(o[1]=(...a)=>e.home&&e.home(...a)),href:"#main"}),n("nav",null,[x,B,n("a",{class:"user",style:D("background-image:url("+e.ico+")"),href:"#main/user"},null,4)])])}var A=g($,[["render",N],["__scopeId","data-v-12f8601c"]]),j="G-79S3L8T9GD",C=e=>{var o,a,i,t,s;if(!!e){for({length:a,byteOffset:o}=e,s=new DataView(e.buffer.slice(o,o+a)),i=[],t=0;t<a;)i.push(s.getUint16(t,!1)),t+=2;return i.join(".")}},v,I,L,f;v=document.createElement("script");v.async=!0;v.src="//www.googletagmanager.com/gtag/js?id="+j;f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(v,f);window.dataLayer=window.dataLayer||[];window.G=function(){return dataLayer.push(arguments)};L=[["config",j,{user_id:localStorage.uid}],["js",new Date],["event","screen_view",{app_name:document.title,screen_name:location.hash.slice(1),app_version:C(await m.auto_update.update_check())}]];for(I of L)G(...I);function M(e){switch(e){case"./main/config.vue":return _(()=>import("./x.js"),["x.js","0.css","2.js","1.js","0.js","d.js","-.js","9.js","f.js","e.js","$.css","b.js"]);case"./main/index.vue":return _(()=>import("./..js"),["..js","4.css",".js","h.js","1.js","0.js","f.js","-.js","2.js","e.js","$.css","3.js","i.js","2.css","4.js","5.css","c.js","u.js"]);case"./main/update.vue":return _(()=>import("./k.js"),["k.js","6.css","2.js","4.js","5.css","-.js","e.js","$.css","9.js","f.js","b.js"]);case"./main/user.vue":return _(()=>import("./7.js"),["7.js","7.css","4.js","5.css","-.js","e.js","$.css","2.js"]);default:return new Promise(function(o,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}var U={components:{rHead:A},setup:()=>{var e,o,a,i,t,s;return o=u(),{uid:s}=localStorage,s?(m.USER.ID(s),t=!1):(t=w+"login.html",window.addEventListener("message",({data:r})=>{var p,h;({token:h,avatarUrl:p}=JSON.parse(r)),localStorage.ico=p||"",localStorage.uid=h,location.hash="main",location.reload()}),E(()=>{var r;({body:r}=document),r.style.appRegion="no-drag",r.className="frame"})),t=u(t),localStorage.ico="",e=u(),i=async()=>{var r;r=location.hash.slice(6),r||(r="index"),e.value=(await M(`./main/${r}.vue`)).default},E(i),window.addEventListener("hashchange",i),a=u(navigator.onLine),window.addEventListener("online",()=>{if(a.value=!0,!s){location.reload();return}}),window.addEventListener("offline",()=>a.value=!1),{c:e,frame:o,line:a,login:t}}};await navigator.serviceWorker.register("y.js",{scope:"/"});const d=e=>(y("data-v-7a7e541f"),e=e(),k(),e),q=["src"],z={key:1,class:"wifi"},H=d(()=>n("i",null,null,-1)),F=d(()=>n("h2",null,"\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25",-1)),J=d(()=>n("p",null,"\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC",-1)),W=[H,F,J],K={key:1,class:"wifi"},Q=d(()=>n("i",null,null,-1)),X=d(()=>n("h2",null,"\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25",-1)),Y=d(()=>n("p",null,"\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC",-1)),Z=[Q,X,Y];function ee(e,o){const a=P("r-head");return e.login?(l(),c(S,{key:0},[e.line?(l(),c("iframe",{key:0,src:e.login,ref:"frame"},null,8,q)):(l(),c("div",z,W))],64)):(l(),c(S,{key:1},[T(a),n("main",null,[e.line?(l(),R(O(e.c),{key:0})):(l(),c("div",K,Z))])],64))}var ae=g(U,[["render",ee],["__scopeId","data-v-7a7e541f"]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});export{C as b,ie as m};
