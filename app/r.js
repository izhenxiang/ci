import{i as Rt}from"./2.js";import"./0.js";import{g as Zt,a as $n,c as Mt}from"./e.js";import{b as jn}from"./j.js";import{s as oe,b as Fn,n as An,d as Pt,c as Vn,w as xt,e as zt,f as Et,o as ke,g as Qt,h as Bn,i as Un,j as Yn,p as Kn,k as Xn}from"./s.js";import{_ as qn}from"./b.js";import"./k.js";var kt={};function Gn(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function dt(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=Y(i)?Qn(i):dt(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(Y(e))return e;if($(e))return e}}const Jn=/;(?![^(]*\))/g,Zn=/:(.+)/;function Qn(e){const t={};return e.split(Jn).forEach(n=>{if(n){const i=n.split(Zn);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ht(e){let t="";if(Y(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const i=ht(e[n]);i&&(t+=i+" ")}else if($(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const kn={},gt=()=>{},es=/^on[^a-z]/,ts=e=>es.test(e),de=Object.assign,ns=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ss=Object.prototype.hasOwnProperty,Je=(e,t)=>ss.call(e,t),R=Array.isArray,Ie=e=>Ze(e)==="[object Map]",is=e=>Ze(e)==="[object Set]",E=e=>typeof e=="function",Y=e=>typeof e=="string",pt=e=>typeof e=="symbol",$=e=>e!==null&&typeof e=="object",rs=e=>$(e)&&E(e.then)&&E(e.catch),as=Object.prototype.toString,Ze=e=>as.call(e),ls=e=>Ze(e).slice(8,-1),os=e=>Ze(e)==="[object Object]",mt=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Le=(e,t)=>!Object.is(e,t),us=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})};let cs;function fs(e,t=cs){t&&t.active&&t.effects.push(e)}const _t=e=>{const t=new Set(e);return t.w=0,t.n=0,t},en=e=>(e.w&se)>0,tn=e=>(e.n&se)>0,ds=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=se},hs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];en(s)&&!tn(s)?s.delete(e):t[n++]=s,s.w&=~se,s.n&=~se}t.length=n}},tt=new WeakMap;let xe=0,se=1;const nt=30;let A;const fe=Symbol(""),st=Symbol("");class nn{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fs(this,i)}run(){if(!this.active)return this.fn();let t=A,n=ne;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=A,A=this,ne=!0,se=1<<++xe,xe<=nt?ds(this):It(this),this.fn()}finally{xe<=nt&&hs(this),se=1<<--xe,A=this.parent,ne=n,this.parent=void 0}}stop(){this.active&&(It(this),this.onStop&&this.onStop(),this.active=!1)}}function It(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ne=!0;const sn=[];function rn(){sn.push(ne),ne=!1}function an(){const e=sn.pop();ne=e===void 0?!0:e}function j(e,t,n){if(ne&&A){let i=tt.get(e);i||tt.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=_t()),ln(s)}}function ln(e,t){let n=!1;xe<=nt?tn(e)||(e.n|=se,n=!en(e)):n=!e.has(A),n&&(e.add(A),A.deps.push(e))}function ie(e,t,n,i,s,r){const a=tt.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&R(e))a.forEach((o,u)=>{(u==="length"||u>=i)&&l.push(o)});else switch(n!==void 0&&l.push(a.get(n)),t){case"add":R(e)?mt(n)&&l.push(a.get("length")):(l.push(a.get(fe)),Ie(e)&&l.push(a.get(st)));break;case"delete":R(e)||(l.push(a.get(fe)),Ie(e)&&l.push(a.get(st)));break;case"set":Ie(e)&&l.push(a.get(fe));break}if(l.length===1)l[0]&&it(l[0]);else{const o=[];for(const u of l)u&&o.push(...u);it(_t(o))}}function it(e,t){for(const n of R(e)?e:[...e])(n!==A||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const gs=Gn("__proto__,__v_isRef,__isVue"),on=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(pt)),ps=un(),ms=un(!0),Ht=_s();function _s(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=m(this);for(let r=0,a=this.length;r<a;r++)j(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(m)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){rn();const i=m(this)[t].apply(this,n);return an(),i}}),e}function un(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?Ds:dn:t?Cs:fn).get(i))return i;const a=R(i);if(!e&&a&&Je(Ht,s))return Reflect.get(Ht,s,r);const l=Reflect.get(i,s,r);return(pt(s)?on.has(s):gs(s))||(e||j(i,"get",s),t)?l:O(l)?!a||!mt(s)?l.value:l:$(l)?e?hn(l):Ye(l):l}}const bs=vs();function vs(e=!1){return function(n,i,s,r){let a=n[i];if(Ne(a)&&O(a)&&!O(s))return!1;if(!e&&!Ne(s)&&(pn(s)||(s=m(s),a=m(a)),!R(n)&&O(a)&&!O(s)))return a.value=s,!0;const l=R(n)&&mt(i)?Number(i)<n.length:Je(n,i),o=Reflect.set(n,i,s,r);return n===m(r)&&(l?Le(s,a)&&ie(n,"set",i,s):ie(n,"add",i,s)),o}}function ws(e,t){const n=Je(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&ie(e,"delete",t,void 0),i}function ys(e,t){const n=Reflect.has(e,t);return(!pt(t)||!on.has(t))&&j(e,"has",t),n}function Ss(e){return j(e,"iterate",R(e)?"length":fe),Reflect.ownKeys(e)}const Rs={get:ps,set:bs,deleteProperty:ws,has:ys,ownKeys:Ss},Ms={get:ms,set(e,t){return!0},deleteProperty(e,t){return!0}},bt=e=>e,Qe=e=>Reflect.getPrototypeOf(e);function $e(e,t,n=!1,i=!1){e=e.__v_raw;const s=m(e),r=m(t);t!==r&&!n&&j(s,"get",t),!n&&j(s,"get",r);const{has:a}=Qe(s),l=i?bt:n?vt:We;if(a.call(s,t))return l(e.get(t));if(a.call(s,r))return l(e.get(r));e!==s&&e.get(t)}function je(e,t=!1){const n=this.__v_raw,i=m(n),s=m(e);return e!==s&&!t&&j(i,"has",e),!t&&j(i,"has",s),e===s?n.has(e):n.has(e)||n.has(s)}function Fe(e,t=!1){return e=e.__v_raw,!t&&j(m(e),"iterate",fe),Reflect.get(e,"size",e)}function Ot(e){e=m(e);const t=m(this);return Qe(t).has.call(t,e)||(t.add(e),ie(t,"add",e,e)),this}function Ct(e,t){t=m(t);const n=m(this),{has:i,get:s}=Qe(n);let r=i.call(n,e);r||(e=m(e),r=i.call(n,e));const a=s.call(n,e);return n.set(e,t),r?Le(t,a)&&ie(n,"set",e,t):ie(n,"add",e,t),this}function Dt(e){const t=m(this),{has:n,get:i}=Qe(t);let s=n.call(t,e);s||(e=m(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&ie(t,"delete",e,void 0),r}function Lt(){const e=m(this),t=e.size!==0,n=e.clear();return t&&ie(e,"clear",void 0,void 0),n}function Ae(e,t){return function(i,s){const r=this,a=r.__v_raw,l=m(a),o=t?bt:e?vt:We;return!e&&j(l,"iterate",fe),a.forEach((u,c)=>i.call(s,o(u),o(c),r))}}function Ve(e,t,n){return function(...i){const s=this.__v_raw,r=m(s),a=Ie(r),l=e==="entries"||e===Symbol.iterator&&a,o=e==="keys"&&a,u=s[e](...i),c=n?bt:t?vt:We;return!t&&j(r,"iterate",o?st:fe),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:l?[c(f[0]),c(f[1])]:c(f),done:g}},[Symbol.iterator](){return this}}}}function Z(e){return function(...t){return e==="delete"?!1:this}}function Ps(){const e={get(r){return $e(this,r)},get size(){return Fe(this)},has:je,add:Ot,set:Ct,delete:Dt,clear:Lt,forEach:Ae(!1,!1)},t={get(r){return $e(this,r,!1,!0)},get size(){return Fe(this)},has:je,add:Ot,set:Ct,delete:Dt,clear:Lt,forEach:Ae(!1,!0)},n={get(r){return $e(this,r,!0)},get size(){return Fe(this,!0)},has(r){return je.call(this,r,!0)},add:Z("add"),set:Z("set"),delete:Z("delete"),clear:Z("clear"),forEach:Ae(!0,!1)},i={get(r){return $e(this,r,!0,!0)},get size(){return Fe(this,!0)},has(r){return je.call(this,r,!0)},add:Z("add"),set:Z("set"),delete:Z("delete"),clear:Z("clear"),forEach:Ae(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Ve(r,!1,!1),n[r]=Ve(r,!0,!1),t[r]=Ve(r,!1,!0),i[r]=Ve(r,!0,!0)}),[e,n,t,i]}const[xs,zs,Es,Is]=Ps();function cn(e,t){const n=t?e?Is:Es:e?zs:xs;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(Je(n,s)&&s in i?n:i,s,r)}const Hs={get:cn(!1,!1)},Os={get:cn(!0,!1)},fn=new WeakMap,Cs=new WeakMap,dn=new WeakMap,Ds=new WeakMap;function Ls(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ns(e){return e.__v_skip||!Object.isExtensible(e)?0:Ls(ls(e))}function Ye(e){return Ne(e)?e:gn(e,!1,Rs,Hs,fn)}function hn(e){return gn(e,!0,Ms,Os,dn)}function gn(e,t,n,i,s){if(!$(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const a=Ns(e);if(a===0)return e;const l=new Proxy(e,a===2?i:n);return s.set(e,l),l}function we(e){return Ne(e)?we(e.__v_raw):!!(e&&e.__v_isReactive)}function Ne(e){return!!(e&&e.__v_isReadonly)}function pn(e){return!!(e&&e.__v_isShallow)}function mn(e){return we(e)||Ne(e)}function m(e){const t=e&&e.__v_raw;return t?m(t):e}function Ws(e){return us(e,"__v_skip",!0),e}const We=e=>$(e)?Ye(e):e,vt=e=>$(e)?hn(e):e;function _n(e){ne&&A&&(e=m(e),ln(e.dep||(e.dep=_t())))}function bn(e,t){e=m(e),e.dep&&it(e.dep)}function O(e){return!!(e&&e.__v_isRef===!0)}function Ke(e){return Ts(e,!1)}function Ts(e,t){return O(e)?e:new $s(e,t)}class $s{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:m(t),this._value=n?t:We(t)}get value(){return _n(this),this._value}set value(t){t=this.__v_isShallow?t:m(t),Le(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:We(t),bn(this))}}function js(e){return O(e)?e.value:e}const Fs={get:(e,t,n)=>js(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return O(s)&&!O(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function As(e){return we(e)?e:new Proxy(e,Fs)}class Vs{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function rt(e,t,n){const i=e[t];return O(i)?i:new Vs(e,t,n)}class Bs{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new nn(t,()=>{this._dirty||(this._dirty=!0,bn(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=m(this);return _n(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Us(e,t,n=!1){let i,s;const r=E(e);return r?(i=e,s=gt):(i=e.get,s=e.set),new Bs(i,s,r||!s,n)}Promise.resolve();function ye(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){vn(r,t,n)}return s}function Xe(e,t,n,i){if(E(e)){const r=ye(e,t,n,i);return r&&rs(r)&&r.catch(a=>{vn(a,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Xe(e[r],t,n,i));return s}function vn(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,l=n;for(;r;){const u=r.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,a,l)===!1)return}r=r.parent}const o=t.appContext.config.errorHandler;if(o){ye(o,null,10,[e,a,l]);return}}Ys(e,n,s,i)}function Ys(e,t,n,i=!0){console.error(e)}let qe=!1,at=!1;const T=[];let te=0;const He=[];let ze=null,pe=0;const Oe=[];let ee=null,me=0;const wn=Promise.resolve();let wt=null,lt=null;function Ks(e){const t=wt||wn;return e?t.then(this?e.bind(this):e):t}function Xs(e){let t=te+1,n=T.length;for(;t<n;){const i=t+n>>>1;Te(T[i])<e?t=i+1:n=i}return t}function qs(e){(!T.length||!T.includes(e,qe&&e.allowRecurse?te+1:te))&&e!==lt&&(e.id==null?T.push(e):T.splice(Xs(e.id),0,e),yn())}function yn(){!qe&&!at&&(at=!0,wt=wn.then(Mn))}function Sn(e,t,n,i){R(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?i+1:i))&&n.push(e),yn()}function Gs(e){Sn(e,ze,He,pe)}function Js(e){Sn(e,ee,Oe,me)}function Rn(e,t=null){if(He.length){for(lt=t,ze=[...new Set(He)],He.length=0,pe=0;pe<ze.length;pe++)ze[pe]();ze=null,pe=0,lt=null,Rn(e,t)}}function Zs(e){if(Oe.length){const t=[...new Set(Oe)];if(Oe.length=0,ee){ee.push(...t);return}for(ee=t,ee.sort((n,i)=>Te(n)-Te(i)),me=0;me<ee.length;me++)ee[me]();ee=null,me=0}}const Te=e=>e.id==null?1/0:e.id;function Mn(e){at=!1,qe=!0,Rn(e),T.sort((n,i)=>Te(n)-Te(i));const t=gt;try{for(te=0;te<T.length;te++){const n=T[te];n&&n.active!==!1&&ye(n,null,14)}}finally{te=0,T.length=0,Zs(),qe=!1,wt=null,(T.length||He.length||Oe.length)&&Mn(e)}}let _e=null,Qs=null;const ks=e=>e.__isSuspense;function ei(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Js(e)}function Q(e,t){if(H){let n=H.provides;const i=H.parent&&H.parent.provides;i===n&&(n=H.provides=Object.create(i)),n[e]=t}}function k(e,t,n=!1){const i=H||_e;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&E(t)?t.call(i.proxy):t}}const Nt={};function W(e,t,n){return Pn(e,t,n)}function Pn(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:a}=kn){const l=H;let o,u=!1,c=!1;if(O(e)?(o=()=>e.value,u=pn(e)):we(e)?(o=()=>e,i=!0):R(e)?(c=!0,u=e.some(we),o=()=>e.map(d=>{if(O(d))return d.value;if(we(d))return be(d);if(E(d))return ye(d,l,2)})):E(e)?t?o=()=>ye(e,l,2):o=()=>{if(!(l&&l.isUnmounted))return f&&f(),Xe(e,l,3,[g])}:o=gt,t&&i){const d=o;o=()=>be(d())}let f,g=d=>{f=_.onStop=()=>{ye(d,l,4)}},h=c?[]:Nt;const S=()=>{if(!!_.active)if(t){const d=_.run();(i||u||(c?d.some((F,v)=>Le(F,h[v])):Le(d,h)))&&(f&&f(),Xe(t,l,3,[d,h===Nt?void 0:h,g]),h=d)}else _.run()};S.allowRecurse=!!t;let M;s==="sync"?M=S:s==="post"?M=()=>$t(S,l&&l.suspense):M=()=>{!l||l.isMounted?Gs(S):S()};const _=new nn(o,M);return t?n?S():h=_.run():s==="post"?$t(_.run.bind(_),l&&l.suspense):_.run(),()=>{_.stop(),l&&l.scope&&ns(l.scope.effects,_)}}function ti(e,t,n){const i=this.proxy,s=Y(e)?e.includes(".")?ni(i,e):()=>i[e]:e.bind(i,i);let r;E(t)?r=t:(r=t.handler,n=t);const a=H;ft(this);const l=Pn(s,r.bind(i),n);return a?ft(a):Dn(),l}function ni(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function be(e,t){if(!$(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),O(e))be(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)be(e[n],t);else if(is(e)||Ie(e))e.forEach(n=>{be(n,t)});else if(os(e))for(const n in e)be(e[n],t);return e}function xn(e){return E(e)?{setup:e,name:e.name}:e}function si(e,t,n=H,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;rn(),ft(n);const l=Xe(t,n,e,a);return Dn(),an(),l});return i?s.unshift(r):s.push(r),r}}const zn=e=>(t,n=H)=>si(e,t,n),En=zn("m"),In=zn("um");function ii(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(t);let o;return l?o=l:!s.length&&!n&&!i?o=t:(o={},s.length&&s.forEach(u=>Ge(o,u,a,!0)),Ge(o,t,a)),r.set(t,o),o}function Ge(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Ge(e,r,n,!0),s&&s.forEach(a=>Ge(e,a,n,!0));for(const a in t)if(!(i&&a==="expose")){const l=ri[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const ri={data:Wt,props:ue,emits:ue,methods:ue,computed:ue,beforeCreate:z,created:z,beforeMount:z,mounted:z,beforeUpdate:z,updated:z,beforeDestroy:z,beforeUnmount:z,destroyed:z,unmounted:z,activated:z,deactivated:z,errorCaptured:z,serverPrefetch:z,components:ue,directives:ue,watch:li,provide:Wt,inject:ai};function Wt(e,t){return t?e?function(){return de(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function ai(e,t){return ue(Tt(e),Tt(t))}function Tt(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function z(e,t){return e?[...new Set([].concat(e,t))]:t}function ue(e,t){return e?de(de(Object.create(null),e),t):t}function li(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const i in t)n[i]=z(e[i],t[i]);return n}const $t=ei,oi=e=>e.__isTeleport,ui=Symbol(),Hn=Symbol(void 0),ci=Symbol(void 0),fi=Symbol(void 0);let jt=null;function ot(e){return e?e.__v_isVNode===!0:!1}const On="__vInternal",Cn=({key:e})=>e??null,Ue=({ref:e,ref_key:t,ref_for:n})=>e!=null?Y(e)||O(e)||E(e)?{i:_e,r:e,k:t,f:!!n}:e:null;function di(e,t=null,n=null,i=0,s=null,r=e===Hn?0:1,a=!1,l=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Cn(t),ref:t&&Ue(t),scopeId:Qs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(yt(o,n),r&128&&e.normalize(o)):n&&(o.shapeFlag|=Y(n)?8:16),!a&&jt&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&jt.push(o),o}const Ee=hi;function hi(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===ui)&&(e=fi),ot(e)){const l=ut(e,t,!0);return n&&yt(l,n),l}if(wi(e)&&(e=e.__vccOpts),t){t=gi(t);let{class:l,style:o}=t;l&&!Y(l)&&(t.class=ht(l)),$(o)&&(mn(o)&&!R(o)&&(o=de({},o)),t.style=dt(o))}const a=Y(e)?1:ks(e)?128:oi(e)?64:$(e)?4:E(e)?2:0;return di(e,t,n,i,s,a,r,!0)}function gi(e){return e?mn(e)||On in e?de({},e):e:null}function ut(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:a}=e,l=t?mi(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Cn(l),ref:t&&t.ref?n&&s?R(s)?s.concat(Ue(t)):[s,Ue(t)]:Ue(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Hn?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ut(e.ssContent),ssFallback:e.ssFallback&&ut(e.ssFallback),el:e.el,anchor:e.anchor}}function pi(e=" ",t=0){return Ee(ci,null,e,t)}function yt(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),yt(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(On in t)?t._ctx=_e:s===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else E(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),i&64?(n=16,t=[pi(t)]):n=8);e.children=t,e.shapeFlag|=n}function mi(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ht([t.class,i.class]));else if(s==="style")t.style=dt([t.style,i.style]);else if(ts(s)){const r=t[s],a=i[s];a&&r!==a&&!(R(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=i[s])}return t}const ct=e=>e?_i(e)?vi(e)||e.proxy:ct(e.parent):null,Ft=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ct(e.parent),$root:e=>ct(e.root),$emit:e=>e.emit,$options:e=>ii(e),$forceUpdate:e=>()=>qs(e.update),$nextTick:e=>Ks.bind(e.proxy),$watch:e=>ti.bind(e)});let H=null;const ft=e=>{H=e,e.scope.on()},Dn=()=>{H&&H.scope.off(),H=null};function _i(e){return e.vnode.shapeFlag&4}let bi=!1;function vi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(As(Ws(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ft)return Ft[n](e)}}))}function wi(e){return E(e)&&"__vccOpts"in e}const N=(e,t)=>Us(e,t,bi);function Ce(e,t,n){const i=arguments.length;return i===2?$(t)&&!R(t)?ot(t)?Ee(e,null,[t]):Ee(e,t):Ee(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ot(n)&&(n=[n]),Ee(e,t,n))}var yi=Object.defineProperty,Si=Object.defineProperties,Ri=Object.getOwnPropertyDescriptors,At=Object.getOwnPropertySymbols,Mi=Object.prototype.hasOwnProperty,Pi=Object.prototype.propertyIsEnumerable,Vt=(e,t,n)=>t in e?yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bt=(e,t)=>{for(var n in t||(t={}))Mi.call(t,n)&&Vt(e,n,t[n]);if(At)for(var n of At(t))Pi.call(t,n)&&Vt(e,n,t[n]);return e},Ut=(e,t)=>Si(e,Ri(t));const Ln=Symbol("Vue3DraggableResizable");function Nn(e){const t=window.getComputedStyle(e);return{width:parseFloat(t.getPropertyValue("width")),height:parseFloat(t.getPropertyValue("height"))}}function Wn(e){return(t,n,i)=>{!t||(typeof n=="string"&&(n=[n]),n.forEach(s=>t[e](s,i,{passive:!1})))}}const ve=Wn("addEventListener"),U=Wn("removeEventListener");function Tn(e){if(e&&e.length>0){const t=[];return e.forEach(n=>{St.includes(n)&&!t.includes(n)&&t.push(n)}),t}else return[]}function xi(){return String(Math.random()).substr(2)+String(Date.now())}function zi(e,t,n){if(e.disabled.value)return null;const i={row:[],col:[]},{parentWidth:s,parentHeight:r}=t;i.row.push(...e.adsorbRows),i.col.push(...e.adsorbCols),e.adsorbParent.value&&(i.row.push(0,r.value,r.value/2),i.col.push(0,s.value,s.value/2));const a=e.getPositionStore(n);return Object.values(a).forEach(({x:o,y:u,w:c,h:f})=>{i.row.push(u,u+f,u+f/2),i.col.push(o,o+c,o+c/2)}),{row:i.row.reduce((o,u)=>Ut(Bt({},o),{[u]:{min:u-5,max:u+5,value:u}}),{}),col:i.col.reduce((o,u)=>Ut(Bt({},o),{[u]:{min:u-5,max:u+5,value:u}}),{})}}var Ei=Object.defineProperty,Yt=Object.getOwnPropertySymbols,Ii=Object.prototype.hasOwnProperty,Hi=Object.prototype.propertyIsEnumerable,Kt=(e,t,n)=>t in e?Ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xt=(e,t)=>{for(var n in t||(t={}))Ii.call(t,n)&&Kt(e,n,t[n]);if(Yt)for(var n of Yt(t))Hi.call(t,n)&&Kt(e,n,t[n]);return e};function L(e){const t=Ke(e);return[t,i=>(t.value=i,i)]}function Oi(e,t){const[n,i]=L(e.initW),[s,r]=L(e.initH),[a,l]=L(e.x),[o,u]=L(e.y),[c,f]=L(e.active),[g,h]=L(!1),[S,M]=L(!1),[_,d]=L(""),[F,v]=L(1/0),[he,ge]=L(1/0),[V,D]=L(e.minW),[C,re]=L(e.minH),K=N(()=>s.value/n.value);return W(n,p=>{t("update:w",p)},{immediate:!0}),W(s,p=>{t("update:h",p)},{immediate:!0}),W(o,p=>{t("update:y",p)}),W(a,p=>{t("update:x",p)}),W(c,(p,ae)=>{t("update:active",p),!ae&&p?t("activated"):ae&&!p&&t("deactivated")}),W(()=>e.active,p=>{f(p)}),{id:xi(),width:n,height:s,top:o,left:a,enable:c,dragging:g,resizing:S,resizingHandle:_,resizingMaxHeight:he,resizingMaxWidth:F,resizingMinWidth:V,resizingMinHeight:C,aspectRatio:K,setEnable:f,setDragging:h,setResizing:M,setResizingHandle:d,setResizingMaxHeight:ge,setResizingMaxWidth:v,setResizingMinWidth:D,setResizingMinHeight:re,setWidth:p=>i(Math.floor(p)),setHeight:p=>r(Math.floor(p)),setTop:p=>u(Math.floor(p)),setLeft:p=>l(Math.floor(p))}}function Ci(e){const t=Ke(0),n=Ke(0);return En(()=>{if(e.value&&e.value.parentElement){const{width:i,height:s}=Nn(e.value.parentElement);t.value=i,n.value=s}}),{parentWidth:t,parentHeight:n}}function Di(e,t,n){const{width:i,height:s,left:r,top:a,resizingMaxWidth:l,resizingMaxHeight:o,resizingMinWidth:u,resizingMinHeight:c}=n,{setWidth:f,setHeight:g,setTop:h,setLeft:S}=n,{parentWidth:M,parentHeight:_}=t,d={minWidth:N(()=>u.value),minHeight:N(()=>c.value),maxWidth:N(()=>{let v=1/0;return e.parent&&(v=Math.min(M.value,l.value)),v}),maxHeight:N(()=>{let v=1/0;return e.parent&&(v=Math.min(_.value,o.value)),v}),minLeft:N(()=>e.parent?0:-1/0),minTop:N(()=>e.parent?0:-1/0),maxLeft:N(()=>e.parent?M.value-i.value:1/0),maxTop:N(()=>e.parent?_.value-s.value:1/0)},F={setWidth(v){return e.disabledW?i.value:f(Math.min(d.maxWidth.value,Math.max(d.minWidth.value,v)))},setHeight(v){return e.disabledH?s.value:g(Math.min(d.maxHeight.value,Math.max(d.minHeight.value,v)))},setTop(v){return e.disabledY?a.value:h(Math.min(d.maxTop.value,Math.max(d.minTop.value,v)))},setLeft(v){return e.disabledX?r.value:S(Math.min(d.maxLeft.value,Math.max(d.minLeft.value,v)))}};return Xt(Xt({},d),F)}const et=["mousedown","touchstart"],Se=["mouseup","touchend"],Re=["mousemove","touchmove"];function De(e){return"touches"in e?[e.touches[0].pageX,e.touches[0].pageY]:[e.pageX,e.pageY]}function Li(e,t,n,i,s,r,a){const{left:l,top:o,width:u,height:c,dragging:f,id:g}=t,{setDragging:h,setEnable:S,setResizing:M,setResizingHandle:_}=t,{setTop:d,setLeft:F}=n;let v=0,he=0,ge=0,V=0,D=null;const C=document.documentElement,re=y=>{const I=y.target;e.value?.contains(I)||(S(!1),h(!1),M(!1),_(""))},K=()=>{h(!1),U(C,Se,K),U(C,Re,p),D=null,r&&(r.updatePosition(g,{x:l.value,y:o.value,w:u.value,h:c.value}),r.setMatchedLine(null))},p=y=>{if(y.preventDefault(),!(f.value&&e.value))return;const[I,X]=De(y),Me=I-ge,Pe=X-V;let B=v+Me,q=he+Pe;if(D!==null){const G={col:[B,B+u.value/2,B+u.value],row:[q,q+c.value/2,q+c.value]},J={row:G.row.map((P,w)=>{let b=null;return Object.values(D.row).forEach(x=>{P>=x.min&&P<=x.max&&(b=x.value)}),b!==null&&(w===0?q=b:w===1?q=Math.floor(b-c.value/2):w===2&&(q=Math.floor(b-c.value))),b}).filter(P=>P!==null),col:G.col.map((P,w)=>{let b=null;return Object.values(D.col).forEach(x=>{P>=x.min&&P<=x.max&&(b=x.value)}),b!==null&&(w===0?B=b:w===1?B=Math.floor(b-u.value/2):w===2&&(B=Math.floor(b-u.value))),b}).filter(P=>P!==null)};r.setMatchedLine(J)}s("dragging",{x:F(B),y:d(q)})},ae=y=>{!i.value||(h(!0),v=l.value,he=o.value,ge=De(y)[0],V=De(y)[1],ve(C,Re,p),ve(C,Se,K),r&&!r.disabled.value&&(D=zi(r,a,g)))};return W(f,(y,I)=>{!I&&y?(s("drag-start",{x:l.value,y:o.value}),S(!0),h(!0)):(s("drag-end",{x:l.value,y:o.value}),h(!1))}),En(()=>{const y=e.value;!y||(y.style.left=l+"px",y.style.top=o+"px",ve(C,et,re),ve(y,et,ae))}),In(()=>{!e.value||(U(C,et,re),U(C,Se,K),U(C,Re,p))}),{containerRef:e}}function Ni(e,t,n,i,s){const{setWidth:r,setHeight:a,setLeft:l,setTop:o}=t,{width:u,height:c,left:f,top:g,aspectRatio:h}=e,{setResizing:S,setResizingHandle:M,setResizingMaxWidth:_,setResizingMaxHeight:d,setResizingMinWidth:F,setResizingMinHeight:v}=e,{parentWidth:he,parentHeight:ge}=n;let V=0,D=0,C=0,re=0,K=0,p=0,ae=1,y="",I="";const X=document.documentElement,Me=G=>{G.preventDefault();let[J,P]=De(G),w=J-K,b=P-p,x=w,le=b;i.lockAspectRatio&&(w=Math.abs(w),b=w*ae,(x<0||I==="m"&&le<0)&&(w=-w,b=-b)),y==="t"?(a(D-b),o(re-(c.value-D))):y==="b"&&a(D+b),I==="l"?(r(V-w),l(C-(u.value-V))):I==="r"&&r(V+w),s("resizing",{x:f.value,y:g.value,w:u.value,h:c.value})},Pe=()=>{s("resize-end",{x:f.value,y:g.value,w:u.value,h:c.value}),M(""),S(!1),_(1/0),d(1/0),F(i.minW),v(i.minH),U(X,Re,Me),U(X,Se,Pe)},B=(G,J)=>{if(!i.resizable)return;G.stopPropagation(),M(J),S(!0),y=J[0],I=J[1],h.value&&(["tl","tm","ml","bl"].includes(J)?(y="t",I="l"):(y="b",I="r"));let P=i.minH,w=i.minW;if(P/w>h.value?w=P/h.value:P=w*h.value,F(w),v(P),parent){let x=y==="t"?g.value+c.value:ge.value-g.value,le=I==="l"?f.value+u.value:he.value-f.value;i.lockAspectRatio&&(x/le<h.value?le=x/h.value:x=le*h.value),d(x),_(le)}V=u.value,D=c.value,C=f.value,re=g.value;const b=De(G);K=b[0],p=b[1],ae=h.value,s("resize-start",{x:f.value,y:g.value,w:u.value,h:c.value}),ve(X,Re,Me),ve(X,Se,Pe)};return In(()=>{U(X,Se,Pe),U(X,Re,Me)}),{handlesFiltered:N(()=>i.resizable?Tn(i.handles):[]),resizeHandleDown:B}}function Wi(e,t){const{setWidth:n,setHeight:i,setLeft:s,setTop:r}=t;W(()=>e.w,a=>{n(a)}),W(()=>e.h,a=>{i(a)}),W(()=>e.x,a=>{s(a)}),W(()=>e.y,a=>{r(a)})}var Ti=Object.defineProperty,qt=Object.getOwnPropertySymbols,$i=Object.prototype.hasOwnProperty,ji=Object.prototype.propertyIsEnumerable,Gt=(e,t,n)=>t in e?Ti(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t)=>{for(var n in t||(t={}))$i.call(t,n)&&Gt(e,n,t[n]);if(qt)for(var n of qt(t))ji.call(t,n)&&Gt(e,n,t[n]);return e};const St=["tl","tm","tr","ml","mr","bl","bm","br"],Fi={initW:{type:Number,default:null},initH:{type:Number,default:null},w:{type:Number,default:0},h:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},disabledX:{type:Boolean,default:!1},disabledY:{type:Boolean,default:!1},disabledW:{type:Boolean,default:!1},disabledH:{type:Boolean,default:!1},minW:{type:Number,default:20},minH:{type:Number,default:20},active:{type:Boolean,default:!1},parent:{type:Boolean,default:!1},handles:{type:Array,default:St,validator:e=>Tn(e).length===e.length},classNameDraggable:{type:String,default:"draggable"},classNameResizable:{type:String,default:"resizable"},classNameDragging:{type:String,default:"dragging"},classNameResizing:{type:String,default:"resizing"},classNameActive:{type:String,default:"active"},classNameHandle:{type:String,default:"handle"},lockAspectRatio:{type:Boolean,default:!1}},Ai=["activated","deactivated","drag-start","resize-start","dragging","resizing","drag-end","resize-end","update:w","update:h","update:x","update:y","update:active"],Vi=xn({name:"Vue3DraggableResizable",props:Fi,emits:Ai,setup(e,{emit:t}){const n=Oi(e,t),i=k("identity");let s=null;i===Ln&&(s={updatePosition:k("updatePosition"),getPositionStore:k("getPositionStore"),disabled:k("disabled"),adsorbParent:k("adsorbParent"),adsorbCols:k("adsorbCols"),adsorbRows:k("adsorbRows"),setMatchedLine:k("setMatchedLine")});const r=Ke(),a=Ci(r),l=Di(e,a,n);Li(r,n,l,rt(e,"draggable"),t,s,a);const o=Ni(n,l,a,e,t);return Wi(e,l),Be(Be(Be(Be({containerRef:r,containerProvider:s},n),a),l),o)},computed:{style(){return{width:this.width+"px",height:this.height+"px",top:this.top+"px",left:this.left+"px"}},klass(){return{[this.classNameActive]:this.enable,[this.classNameDragging]:this.dragging,[this.classNameResizing]:this.resizing,[this.classNameDraggable]:this.draggable,[this.classNameResizable]:this.resizable}}},mounted(){if(!this.containerRef)return;this.containerRef.ondragstart=()=>!1;const{width:e,height:t}=Nn(this.containerRef);this.setWidth(this.initW===null?this.w||e:this.initW),this.setHeight(this.initH===null?this.h||t:this.initH),this.containerProvider&&this.containerProvider.updatePosition(this.id,{x:this.left,y:this.top,w:this.width,h:this.height})},render(){return Ce("div",{ref:"containerRef",class:["vdr-container",this.klass],style:this.style},[this.$slots.default&&this.$slots.default(),...this.handlesFiltered.map(e=>Ce("div",{class:["vdr-handle","vdr-handle-"+e,this.classNameHandle,`${this.classNameHandle}-${e}`],style:{display:this.enable?"block":"none"},onMousedown:t=>this.resizeHandleDown(t,e),onTouchstart:t=>this.resizeHandleDown(t,e)}))])}});var Bi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ALL_HANDLES:St,default:Vi}),Ui=Zt(Bi),Yi=xn({name:"DraggableContainer",props:{disabled:{type:Boolean,default:!1},adsorbParent:{type:Boolean,default:!0},adsorbCols:{type:Array,default:null},adsorbRows:{type:Array,default:null},referenceLineVisible:{type:Boolean,default:!0},referenceLineColor:{type:String,default:"#f00"}},setup(e){const t=Ye({}),n=(o,u)=>{t[o]=u},i=o=>{const u=Object.assign({},t);return o&&delete u[o],u},s=Ye({matchedLine:null}),r=N(()=>s.matchedLine&&s.matchedLine.row||[]),a=N(()=>s.matchedLine&&s.matchedLine.col||[]),l=o=>{s.matchedLine=o};return Q("identity",Ln),Q("updatePosition",n),Q("getPositionStore",i),Q("setMatchedLine",l),Q("disabled",rt(e,"disabled")),Q("adsorbParent",rt(e,"adsorbParent")),Q("adsorbCols",e.adsorbCols||[]),Q("adsorbRows",e.adsorbRows||[]),{matchedRows:r,matchedCols:a}},methods:{renderReferenceLine(){return this.referenceLineVisible?[...this.matchedCols.map(e=>Ce("div",{style:{width:"0",height:"100%",top:"0",left:e+"px",borderLeft:`1px dashed ${this.referenceLineColor}`,position:"absolute"}})),...this.matchedRows.map(e=>Ce("div",{style:{width:"100%",height:"0",left:"0",top:e+"px",borderTop:`1px dashed ${this.referenceLineColor}`,position:"absolute"}}))]:[]}},render(){return Ce("div",{style:{width:"100%",height:"100%",position:"relative"}},[this.$slots.default&&this.$slots.default(),...this.renderReferenceLine()])}}),Ki=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yi}),Jt=Zt(Ki);(function(e){var t=Mt&&Mt.__createBinding||(Object.create?function(r,a,l,o){o===void 0&&(o=l),Object.defineProperty(r,o,{enumerable:!0,get:function(){return a[l]}})}:function(r,a,l,o){o===void 0&&(o=l),r[o]=a[l]});e.__esModule=!0;var n=Ui,i=Jt;n.default.install=function(r){return r.component(n.default.name,n.default),r.component(i.default.name,i.default),r};var s=Jt;t(e,s,"default","DraggableContainer"),e.default=n.default})(kt);var Xi=$n(kt),ce;ce=23;var qi={components:{Vue3DraggableResizable:Xi,btn:jn},setup:()=>{var e,t,n,i,s,r,a,l,o,u;return s=oe(),t=innerHeight*2,i=innerWidth*2,r=Math.min(546,innerHeight),a=Math.min(r*1.57,innerWidth),o=oe((innerWidth-a)/2),u=oe((innerHeight-r)/2),r=oe(r),a=oe(a),e=oe(!0),Fn(()=>{s=s.value.$el}),n=()=>{var c,f,g,h,S,M,_;g=-ce,{offsetTop:M,offsetHeight:h,offsetWidth:_,offsetLeft:S}=s,f=innerHeight+ce,h>f&&(h=f,r.value=f),f=innerWidth+ce,_>f&&(_=f,a.value=f),M<g?u.value=g:(c=innerHeight-g-h,M>c&&(u.value=c)),S<g?o.value=g:(c=innerWidth-g-_,S>c&&(o.value=c))},l=oe(!0),{drag:s,border:n,wait:l,end:()=>{n(),Rt.recbar.top()},start:()=>{var c;l.value=!1,c=2*ce,localStorage.area=JSON.stringify([o.value+ce,u.value+ce,a.value-c,r.value-c].map(Math.round)),Rt.area()},deactivated:function(){An(()=>{e.value=!0})},x:o,y:u,h:r,w:a,bw:i,bh:t,active:e}}};const Gi=e=>(Kn("data-v-042a670c"),e=e(),Xn(),e),Ji=Yn("\u5F00\u59CB\u5F55\u5236"),Zi=Gi(()=>Qt("b",null,null,-1)),Qi=[Zi];function ki(e,t){const n=Et("btn"),i=Et("Vue3DraggableResizable");return ke(),Pt("div",{style:zt("--bh:"+e.bh+"px;--top:-"+e.bh+"px;--bw:"+e.bw+"px;--left:-"+e.bw+"px")},[e.wait?(ke(),Vn(i,{key:0,draggable:!0,initH:e.h,initW:e.w,minH:330,minW:330,resizable:!0,onActivated:t[0]||(t[0]=s=>e.print("activated")),onDeactivated:e.deactivated,onDragEnd:e.end,onDragStart:e.border,onDragging:e.border,onResizeEnd:e.end,onResizeStart:e.border,onResizing:e.border,ref:"drag",active:e.active,"onUpdate:active":t[1]||(t[1]=s=>e.active=s),h:e.h,"onUpdate:h":t[2]||(t[2]=s=>e.h=s),w:e.w,"onUpdate:w":t[3]||(t[3]=s=>e.w=s),x:e.x,"onUpdate:x":t[4]||(t[4]=s=>e.x=s),y:e.y,"onUpdate:y":t[5]||(t[5]=s=>e.y=s)},{default:xt(()=>[Qt("b",null,[Bn(n,{onClick:Un(e.start,["prevent"])},{default:xt(()=>[Ji]),_:1},8,["onClick"])])]),_:1},8,["initH","initW","onDeactivated","onDragEnd","onDragStart","onDragging","onResizeEnd","onResizeStart","onResizing","active","h","w","x","y"])):(ke(),Pt("i",{key:1,style:zt("--x:"+e.x+"px;--y:"+e.y+"px;--h:"+e.h+"px;--w:"+e.w+"px")},Qi,4))],4)}var lr=qn(qi,[["render",ki],["__scopeId","data-v-042a670c"]]);export{lr as default};
