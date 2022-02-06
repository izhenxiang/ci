"use strict";var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var x=(s,e,t)=>e in s?X(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,A=(s,e)=>{for(var t in e||(e={}))ee.call(e,t)&&x(s,t,e[t]);if(O)for(var t of O(e))te.call(e,t)&&x(s,t,e[t]);return s},M=(s,e)=>Y(s,Z(e));try{self["workbox:core:6.4.1"]&&_()}catch{}const se=(s,...e)=>{let t=s;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},ne=se;class l extends Error{constructor(e,t){const n=ne(e,t);super(n);this.name=e,this.details=t}}const re=s=>new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),""),ae=(s,e)=>e.some(t=>s instanceof t);let v,L;function ie(){return v||(v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oe(){return L||(L=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B=new WeakMap,R=new WeakMap,j=new WeakMap,D=new WeakMap,q=new WeakMap;function ce(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",a)},i=()=>{t(m(s.result)),r()},a=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&B.set(t,s)}).catch(()=>{}),q.set(e,s),e}function ue(s){if(R.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",a),s.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",a),s.addEventListener("abort",a)});R.set(s,e)}let k={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return R.get(s);if(e==="objectStoreNames")return s.objectStoreNames||j.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return m(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function he(s){k=s(k)}function le(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(S(this),e,...t);return j.set(n,e.sort?e.sort():[e]),m(n)}:oe().includes(s)?function(...e){return s.apply(S(this),e),m(B.get(this))}:function(...e){return m(s.apply(S(this),e))}}function de(s){return typeof s=="function"?le(s):(s instanceof IDBTransaction&&ue(s),ae(s,ie())?new Proxy(s,k):s)}function m(s){if(s instanceof IDBRequest)return ce(s);if(D.has(s))return D.get(s);const e=de(s);return e!==s&&(D.set(s,e),q.set(e,s)),e}const S=s=>q.get(s);function fe(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const a=indexedDB.open(s,e),o=m(a);return n&&a.addEventListener("upgradeneeded",c=>{n(m(a.result),c.oldVersion,c.newVersion,m(a.transaction))}),t&&a.addEventListener("blocked",()=>t()),o.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}const me=["get","getKey","getAll","getAllKeys","count"],ye=["put","add","delete","clear"],T=new Map;function U(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(T.get(e))return T.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=ye.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||me.includes(t)))return;const i=async function(a,...o){const c=this.transaction(a,r?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),r&&c.done]))[0]};return T.set(e,i),i}he(s=>M(A({},s),{get:(e,t,n)=>U(e,t)||s.get(e,t,n),has:(e,t)=>!!U(e,t)||s.has(e,t)}));try{self["workbox:background-sync:6.4.1"]&&_()}catch{}const F=3,we="workbox-background-sync",d="requests",w="queueName";class ge{constructor(){this._db=null}async addEntry(e){const n=(await this.getDb()).transaction(d,"readwrite",{durability:"relaxed"});await n.store.add(e),await n.done}async getFirstEntryId(){const t=await(await this.getDb()).transaction(d).store.openCursor();return t==null?void 0:t.value.id}async getAllEntriesByQueueName(e){const n=await(await this.getDb()).getAllFromIndex(d,w,IDBKeyRange.only(e));return n||new Array}async getEntryCountByQueueName(e){return(await this.getDb()).countFromIndex(d,w,IDBKeyRange.only(e))}async deleteEntry(e){await(await this.getDb()).delete(d,e)}async getFirstEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"next")}async getLastEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"prev")}async getEndEntryFromIndex(e,t){const r=await(await this.getDb()).transaction(d).store.index(w).openCursor(e,t);return r==null?void 0:r.value}async getDb(){return this._db||(this._db=await fe(we,F,{upgrade:this._upgradeDb})),this._db}_upgradeDb(e,t){t>0&&t<F&&e.objectStoreNames.contains(d)&&e.deleteObjectStore(d),e.createObjectStore(d,{autoIncrement:!0,keyPath:"id"}).createIndex(w,w,{unique:!1})}}class pe{constructor(e){this._queueName=e,this._queueDb=new ge}async pushEntry(e){delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async unshiftEntry(e){const t=await this._queueDb.getFirstEntryId();t?e.id=t-1:delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async popEntry(){return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName))}async shiftEntry(){return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName))}async getAll(){return await this._queueDb.getAllEntriesByQueueName(this._queueName)}async size(){return await this._queueDb.getEntryCountByQueueName(this._queueName)}async deleteEntry(e){await this._queueDb.deleteEntry(e)}async _removeEntry(e){return e&&await this.deleteEntry(e.id),e}}const _e=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class g{constructor(e){e.mode==="navigate"&&(e.mode="same-origin"),this._requestData=e}static async fromRequest(e){const t={url:e.url,headers:{}};e.method!=="GET"&&(t.body=await e.clone().arrayBuffer());for(const[n,r]of e.headers.entries())t.headers[n]=r;for(const n of _e)e[n]!==void 0&&(t[n]=e[n]);return new g(t)}toObject(){const e=Object.assign({},this._requestData);return e.headers=Object.assign({},this._requestData.headers),e.body&&(e.body=e.body.slice(0)),e}toRequest(){return new Request(this._requestData.url,this._requestData)}clone(){return new g(this.toObject())}}const H="workbox-background-sync",be=60*24*7,C=new Set,W=s=>{const e={request:new g(s.requestData).toRequest(),timestamp:s.timestamp};return s.metadata&&(e.metadata=s.metadata),e};class Ee{constructor(e,{onSync:t,maxRetentionTime:n}={}){if(this._syncInProgress=!1,this._requestsAddedDuringSync=!1,C.has(e))throw new l("duplicate-queue-name",{name:e});C.add(e),this._name=e,this._onSync=t||this.replayRequests,this._maxRetentionTime=n||be,this._queueStore=new pe(this._name),this._addSyncListener()}get name(){return this._name}async pushRequest(e){await this._addRequest(e,"push")}async unshiftRequest(e){await this._addRequest(e,"unshift")}async popRequest(){return this._removeRequest("pop")}async shiftRequest(){return this._removeRequest("shift")}async getAll(){const e=await this._queueStore.getAll(),t=Date.now(),n=[];for(const r of e){const i=this._maxRetentionTime*60*1e3;t-r.timestamp>i?await this._queueStore.deleteEntry(r.id):n.push(W(r))}return n}async size(){return await this._queueStore.size()}async _addRequest({request:e,metadata:t,timestamp:n=Date.now()},r){const a={requestData:(await g.fromRequest(e.clone())).toObject(),timestamp:n};t&&(a.metadata=t),await this._queueStore[`${r}Entry`](a),this._syncInProgress?this._requestsAddedDuringSync=!0:await this.registerSync()}async _removeRequest(e){const t=Date.now(),n=await this._queueStore[`${e}Entry`]();if(n){const r=this._maxRetentionTime*60*1e3;return t-n.timestamp>r?this._removeRequest(e):W(n)}else return}async replayRequests(){let e;for(;e=await this.shiftRequest();)try{await fetch(e.request.clone())}catch{throw await this.unshiftRequest(e),new l("queue-replay-failed",{name:this._name})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register(`${H}:${this._name}`)}catch{}}_addSyncListener(){"sync"in self.registration?self.addEventListener("sync",e=>{if(e.tag===`${H}:${this._name}`){const t=async()=>{this._syncInProgress=!0;let n;try{await this._onSync({queue:this})}catch(r){if(r instanceof Error)throw n=r,n}finally{this._requestsAddedDuringSync&&!(n&&!e.lastChance)&&await this.registerSync(),this._syncInProgress=!1,this._requestsAddedDuringSync=!1}};e.waitUntil(t())}}):this._onSync({queue:this})}static get _queueNames(){return C}}class Re{constructor(e,t){this.fetchDidFail=async({request:n})=>{await this._queue.pushRequest({request:n})},this._queue=new Ee(e,t)}}const f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},P=s=>[f.prefix,s,f.suffix].filter(e=>e&&e.length>0).join("-"),De=s=>{for(const e of Object.keys(f))s(e)},G={updateDetails:s=>{De(e=>{typeof s[e]=="string"&&(f[e]=s[e])})},getGoogleAnalyticsName:s=>s||P(f.googleAnalytics),getPrecacheName:s=>s||P(f.precache),getPrefix:()=>f.prefix,getRuntimeName:s=>s||P(f.runtime),getSuffix:()=>f.suffix};try{self["workbox:routing:6.4.1"]&&_()}catch{}const K="GET",b=s=>s&&typeof s=="object"?s:{handle:s};class p{constructor(e,t,n=K){this.handler=b(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=b(e)}}class qe{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map(r=>{typeof r=="string"&&(r=[r]);const i=new Request(...r);return this.handleRequest({request:i,event:e})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const r=n.origin===location.origin,{params:i,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:n});let o=a&&a.handler;const c=e.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return;let u;try{u=o.handle({url:n,request:e,event:t,params:i})}catch(h){u=Promise.reject(h)}const y=a&&a.catchHandler;return u instanceof Promise&&(this._catchHandler||y)&&(u=u.catch(async h=>{if(y)try{return await y.handle({url:n,request:e,event:t,params:i})}catch(I){I instanceof Error&&(h=I)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw h})),u}findMatchingRoute({url:e,sameOrigin:t,request:n,event:r}){const i=this._routes.get(n.method)||[];for(const a of i){let o;const c=a.match({url:e,sameOrigin:t,request:n,event:r});if(c)return o=c,(Array.isArray(o)&&o.length===0||c.constructor===Object&&Object.keys(c).length===0||typeof c=="boolean")&&(o=void 0),{route:a,params:o}}return{}}setDefaultHandler(e,t=K){this._defaultHandlerMap.set(t,b(e))}setCatchHandler(e){this._catchHandler=b(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new l("unregister-route-route-not-registered")}}try{self["workbox:strategies:6.4.1"]&&_()}catch{}const ke={cacheWillUpdate:async({response:s})=>s.status===200||s.status===0?s:null};function Q(s,e){const t=new URL(s);for(const n of e)t.searchParams.delete(n);return t.href}async function Se(s,e,t,n){const r=Q(e.url,t);if(e.url===r)return s.match(e,n);const i=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await s.keys(e,i);for(const o of a){const c=Q(o.url,t);if(r===c)return s.match(o,n)}}class Te{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const Ce=new Set;async function Pe(){for(const s of Ce)await s()}function $(s){return new Promise(e=>setTimeout(e,s))}function E(s){return typeof s=="string"?new Request(s):s}class Ne{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new Te,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=E(e);if(n.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const a=await t.preloadResponse;if(a)return a}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const a of this.iterateCallbacks("requestWillFetch"))n=await a({request:n.clone(),event:t})}catch(a){if(a instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:a.message})}const i=n.clone();try{let a;a=await fetch(n,n.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const o of this.iterateCallbacks("fetchDidSucceed"))a=await o({event:t,request:i,response:a});return a}catch(a){throw r&&await this.runCallbacks("fetchDidFail",{error:a,event:t,originalRequest:r.clone(),request:i.clone()}),a}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=E(e);let n;const{cacheName:r,matchOptions:i}=this._strategy,a=await this.getCacheKey(t,"read"),o=Object.assign(Object.assign({},i),{cacheName:r});n=await caches.match(a,o);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await c({cacheName:r,matchOptions:i,cachedResponse:n,request:a,event:this.event})||void 0;return n}async cachePut(e,t){const n=E(e);await $(0);const r=await this.getCacheKey(n,"write");if(!t)throw new l("cache-put-with-no-response",{url:re(r.url)});const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:a,matchOptions:o}=this._strategy,c=await self.caches.open(a),u=this.hasCallback("cacheDidUpdate"),y=u?await Se(c,r.clone(),["__WB_REVISION__"],o):null;try{await c.put(r,u?i.clone():i)}catch(h){if(h instanceof Error)throw h.name==="QuotaExceededError"&&await Pe(),h}for(const h of this.iterateCallbacks("cacheDidUpdate"))await h({cacheName:a,oldResponse:y,newResponse:i.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let r=e;for(const i of this.iterateCallbacks("cacheKeyWillBeUsed"))r=E(await i({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const n=this._pluginStateMap.get(t);yield i=>{const a=Object.assign(Object.assign({},i),{state:n});return t[e](a)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const r of this.iterateCallbacks("cacheWillUpdate"))if(t=await r({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&t.status!==200&&(t=void 0),t}}class J{constructor(e={}){this.cacheName=G.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n=typeof e.request=="string"?new Request(e.request):e.request,r="params"in e?e.params:void 0,i=new Ne(this,{event:t,request:n,params:r}),a=this._getResponse(i,n,t),o=this._awaitComplete(a,i,n,t);return[a,o]}async _getResponse(e,t,n){await e.runCallbacks("handlerWillStart",{event:n,request:t});let r;try{if(r=await this._handle(t,e),!r||r.type==="error")throw new l("no-response",{url:t.url})}catch(i){if(i instanceof Error){for(const a of e.iterateCallbacks("handlerDidError"))if(r=await a({error:i,event:n,request:t}),r)break}if(!r)throw i}for(const i of e.iterateCallbacks("handlerWillRespond"))r=await i({event:n,request:t,response:r});return r}async _awaitComplete(e,t,n,r){let i,a;try{i=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:r,request:n,response:i}),await t.doneWaiting()}catch(o){o instanceof Error&&(a=o)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:n,response:i,error:a}),t.destroy(),a)throw a}}class N extends J{constructor(e={}){super(e);this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(ke),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const n=[],r=[];let i;if(this._networkTimeoutSeconds){const{id:c,promise:u}=this._getTimeoutPromise({request:e,logs:n,handler:t});i=c,r.push(u)}const a=this._getNetworkPromise({timeoutId:i,request:e,logs:n,handler:t});r.push(a);const o=await t.waitUntil((async()=>await t.waitUntil(Promise.race(r))||await a)());if(!o)throw new l("no-response",{url:e.url});return o}_getTimeoutPromise({request:e,logs:t,handler:n}){let r;return{promise:new Promise(a=>{r=setTimeout(async()=>{a(await n.cacheMatch(e))},this._networkTimeoutSeconds*1e3)}),id:r}}async _getNetworkPromise({timeoutId:e,request:t,logs:n,handler:r}){let i,a;try{a=await r.fetchAndCachePut(t)}catch(o){o instanceof Error&&(i=o)}return e&&clearTimeout(e),(i||!a)&&(a=await r.cacheMatch(t)),a}}class Ie extends J{constructor(e={}){super(e);this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let n,r;try{const i=[t.fetch(e)];if(this._networkTimeoutSeconds){const a=$(this._networkTimeoutSeconds*1e3);i.push(a)}if(r=await Promise.race(i),!r)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(i){i instanceof Error&&(n=i)}if(!r)throw new l("no-response",{url:e.url,error:n});return r}}try{self["workbox:google-analytics:6.4.1"]&&_()}catch{}const Oe="workbox-google-analytics",xe=60*48,z="www.google-analytics.com",V="www.googletagmanager.com",Ae="/analytics.js",Me="/gtag/js",ve="/gtm.js",Le=/^\/(\w+\/)?collect/,Be=s=>async({queue:e})=>{let t;for(;t=await e.shiftRequest();){const{request:n,timestamp:r}=t,i=new URL(n.url);try{const a=n.method==="POST"?new URLSearchParams(await n.clone().text()):i.searchParams,o=r-(Number(a.get("qt"))||0),c=Date.now()-o;if(a.set("qt",String(c)),s.parameterOverrides)for(const u of Object.keys(s.parameterOverrides)){const y=s.parameterOverrides[u];a.set(u,y)}typeof s.hitFilter=="function"&&s.hitFilter.call(null,a),await fetch(new Request(i.origin+i.pathname,{body:a.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(a){throw await e.unshiftRequest(t),a}}},je=s=>{const e=({url:n})=>n.hostname===z&&Le.test(n.pathname),t=new Ie({plugins:[s]});return[new p(e,t,"GET"),new p(e,t,"POST")]},Ue=s=>{const e=({url:n})=>n.hostname===z&&n.pathname===Ae,t=new N({cacheName:s});return new p(e,t,"GET")},Fe=s=>{const e=({url:n})=>n.hostname===V&&n.pathname===Me,t=new N({cacheName:s});return new p(e,t,"GET")},He=s=>{const e=({url:n})=>n.hostname===V&&n.pathname===ve,t=new N({cacheName:s});return new p(e,t,"GET")},We=(s={})=>{const e=G.getGoogleAnalyticsName(s.cacheName),t=new Re(Oe,{maxRetentionTime:xe,onSync:Be(s)}),n=[He(e),Ue(e),Fe(e),...je(t)],r=new qe;for(const i of n)r.registerRoute(i);r.addFetchListener()};We();
