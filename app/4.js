var S=Object.defineProperty;var v=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var j=(o,e,r)=>e in o?S(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,m=(o,e)=>{for(var r in e||(e={}))g.call(e,r)&&j(o,r,e[r]);if(v)for(var r of v(e))b.call(e,r)&&j(o,r,e[r]);return o};import{O as w}from"./-.js";import{b as x}from"./$.js";import{j as k,C as u}from"./d.js";var l,t,n,p,O,d;({storeRecord:p}=x);({record:n}=localStorage);t=n?JSON.parse(n):{src:"all",area:0};var R=l=k(m({},t));d=!0;O=(o,e)=>{d?o.size+e.size>0&&(p(o,e),localStorage.record=JSON.stringify(t)):d=!0};u(()=>{var o,e,r,s,a,c,f,i;r=new Set(Object.keys(t)),e=new Set,o=new Map,c=Object.entries(l);for(i of c)[a,f]=i,r.delete(a),t[a]!==f&&(t[a]=f,o.set(a,f));for(s of r)delete t[s],e.add(s);O(o,e)});w.storeRecord=(o,e)=>{var r,s,a,c,f,i;d=!1,a=o.entries();for(i of a)[s,f]=i,l[s]=f;c=e.values();for(r of c)delete l[r]};export{R as c};
