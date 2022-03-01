"use strict";var Er=Object.defineProperty;var St=Object.getOwnPropertySymbols;var Br=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable;var _t=(t,e,r)=>e in t?Er(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,kt=(t,e)=>{for(var r in e||(e={}))Br.call(e,r)&&_t(t,r,e[r]);if(St)for(var r of St(e))Ar.call(e,r)&&_t(t,r,e[r]);return t};var m=require("electron"),Tr=require("os"),Y=require("fs"),J=require("path"),Ir=require("crypto"),jt=require("zlib"),Pr=require("util"),te=require("./$!.js"),we=require("fs/promises"),Ie=require("./y.js"),zt=require("./z.js");function Cr(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var Lt=Cr(Tr),Dr=(t,e)=>{var r,n;for(r in e)n=e[r],t.on(r,n);return t};et=Qe=Ye=__dirname;var Ye=Ye,Qe=Qe,et=et,Ne,Ft;Ne="127.0.0.1",Ft="http://"+Ne,m.session.defaultSession.protocol.interceptStreamProtocol("http",(t,e)=>{var r,n,i,l,u,g,p,_,U;if(U=new URL(t.url),U.host===Ne)({pathname:u}=U),u==="/"&&(u+=".htm"),_=u.slice(u.lastIndexOf(".")+1),_.startsWith("htm")?l="text/html":l={js:"text/javascript",css:"text/css",svg:"image/svg+xml",woff2:"font/woff2"}[_]||"application/octet-stream",n=Y.createReadStream(Qe+u),e({data:n,statusCode:200,headers:{"content-type":l}});else{if(t.useSessionCookies=!0,t.partition="persist:I",g=m.net.request(t),g.on("response",k=>{var B,P;({headers:B,statusCode:P}=k),e({data:k},B,P)}),t.uploadData){p=t.uploadData;for(i of p)({bytes:r}=i),r&&g.write(r)}g.end()}});var de=new Proxy({},{get:(t,e)=>r=>{var n;return r=kt({skipTaskbar:!0,frame:!1,minimizable:!1,maximizable:!1,fullscreenable:!1,type:"toolbar",webPreferences:{preload:J.join(Ye,"s.js"),webSecurity:!1}},r),n=new m.BrowserWindow(r),n.setMenu(null),e!=="main"&&n.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),n.loadURL(Ft+"#"+e),n.once("ready-to-show",()=>n.show()),n.focus(),n}}),Wt;({main:Wt}=de);var fe=(t=!0)=>{var e,r,n;if(r=m.BrowserWindow.getAllWindows(),r.length){for(e of r)if(e.webContents.getURL().endsWith("/#main")){n=e,n.isMinimized()&&n.restore();break}}n||(n=Wt({resizable:!1,height:590,width:426})),!(!t&&!n.isVisible())&&(n.show(),n.moveTop(),n.focus())},$t={ID:""},He;try{He=new TextDecoder}catch{}var x,ee,s=0,$={},S,Q,q=0,H=0,z,G,V=[],b,Ut={useRecords:!1,mapsAsObjects:!0};class Vt{}const Nt=new Vt;Nt.name="MessagePack 0xC1";var ue=!1;class ye{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0)),Object.assign(this,e)}unpack(e,r){if(x)return Gt(()=>(Ke(),this?this.unpack(e,r):ye.prototype.unpack.call(Ut,e,r)));ee=r>-1?r:e.length,s=0,H=0,Q=null,z=null,x=e;try{b=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw x=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof ye){if($=this,this.structures)return S=this.structures,Ue();(!S||S.length>0)&&(S=[])}else $=Ut,(!S||S.length>0)&&(S=[]);return Ue()}unpackMultiple(e,r){let n,i=0;try{ue=!0;let l=e.length,u=this?this.unpack(e,l):De.unpack(e,l);if(r){for(r(u);s<l;)if(i=s,r(Ue())===!1)return}else{for(n=[u];s<l;)i=s,n.push(Ue());return n}}catch(l){throw l.lastPosition=i,l.values=n,l}finally{ue=!1,Ke()}}_mergeStructures(e,r){e=e||[];for(let n=0,i=e.length;n<i;n++){let l=e[n];l&&(l.isShared=!0,n>=32&&(l.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in r||[])if(n>=0){let i=e[n],l=r[n];l&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[n]=i),e[n]=l)}return this.structures=e}decode(e,r){return this.unpack(e,r)}}function Ue(){try{if(!$.trusted&&!ue){let e=S.sharedLength||0;e<S.length&&(S.length=e)}let t=C();if(z&&(s=z.postBundlePosition),s==ee)S.restoreStructures&&Ot(),S=null,x=null,G&&(G=null);else if(s>ee){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}else if(!ue)throw new Error("Data read, but end of buffer not reached");return t}catch(t){throw S.restoreStructures&&Ot(),Ke(),(t instanceof RangeError||t.message.startsWith("Unexpected end of buffer"))&&(t.incomplete=!0),t}}function Ot(){for(let t in S.restoreStructures)S[t]=S.restoreStructures[t];S.restoreStructures=null}function C(){let t=x[s++];if(t<160)if(t<128){if(t<64)return t;{let e=S[t&63]||$.getStructures&&qt()[t&63];return e?(e.read||(e.read=tt(e,t&63)),e.read()):t}}else if(t<144)if(t-=128,$.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Ht()]=C();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(C(),C());return e}else{t-=144;let e=new Array(t);for(let r=0;r<t;r++)e[r]=C();return e}else if(t<192){let e=t-160;if(H>=s)return Q.slice(s-q,(s+=e)-q);if(H==0&&ee<140){let r=e<16?rt(e):Jt(e);if(r!=null)return r}return Ze(e)}else{let e;switch(t){case 192:return null;case 193:return z?(e=C(),e>0?z[1].slice(z.position1,z.position1+=e):z[0].slice(z.position0,z.position0-=e)):Nt;case 194:return!1;case 195:return!0;case 196:return qe(x[s++]);case 197:return e=b.getUint16(s),s+=2,qe(e);case 198:return e=b.getUint32(s),s+=4,qe(e);case 199:return ie(x[s++]);case 200:return e=b.getUint16(s),s+=2,ie(e);case 201:return e=b.getUint32(s),s+=4,ie(e);case 202:if(e=b.getFloat32(s),$.useFloat32>2){let r=nt[(x[s]&127)<<1|x[s+1]>>7];return s+=4,(r*e+(e>0?.5:-.5)>>0)/r}return s+=4,e;case 203:return e=b.getFloat64(s),s+=8,e;case 204:return x[s++];case 205:return e=b.getUint16(s),s+=2,e;case 206:return e=b.getUint32(s),s+=4,e;case 207:return $.int64AsNumber?(e=b.getUint32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigUint64(s),s+=8,e;case 208:return b.getInt8(s++);case 209:return e=b.getInt16(s),s+=2,e;case 210:return e=b.getInt32(s),s+=4,e;case 211:return $.int64AsNumber?(e=b.getInt32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigInt64(s),s+=8,e;case 212:if(e=x[s++],e==114)return Pt(x[s++]&63);{let r=V[e];if(r)return r.read?(s++,r.read(C())):r.noBuffer?(s++,r()):r(x.subarray(s,++s));throw new Error("Unknown extension "+e)}case 213:return e=x[s],e==114?(s++,Pt(x[s++]&63,x[s++])):ie(2);case 214:return ie(4);case 215:return ie(8);case 216:return ie(16);case 217:return e=x[s++],H>=s?Q.slice(s-q,(s+=e)-q):Mr(e);case 218:return e=b.getUint16(s),s+=2,H>=s?Q.slice(s-q,(s+=e)-q):jr(e);case 219:return e=b.getUint32(s),s+=4,H>=s?Q.slice(s-q,(s+=e)-q):zr(e);case 220:return e=b.getUint16(s),s+=2,Bt(e);case 221:return e=b.getUint32(s),s+=4,Bt(e);case 222:return e=b.getUint16(s),s+=2,At(e);case 223:return e=b.getUint32(s),s+=4,At(e);default:if(t>=224)return t-256;if(t===void 0){let r=new Error("Unexpected end of MessagePack data");throw r.incomplete=!0,r}throw new Error("Unknown MessagePack token "+t)}}}const Rr=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function tt(t,e){function r(){if(r.count++>2){let i=t.read=new Function("r","return function(){return {"+t.map(l=>Rr.test(l)?l+":r()":"["+JSON.stringify(l)+"]:r()").join(",")+"}}")(C);return t.highByte===0&&(t.read=Et(e,t.read)),i()}let n={};for(let i=0,l=t.length;i<l;i++){let u=t[i];n[u]=C()}return n}return r.count=0,t.highByte===0?Et(e,r):r}const Et=(t,e)=>function(){let r=x[s++];if(r===0)return e();let n=t<32?-(t+(r<<5)):t+(r<<5),i=S[n]||qt()[n];if(!i)throw new Error("Record id is not defined for "+n);return i.read||(i.read=tt(i,t)),i.read()};function qt(){let t=Gt(()=>(x=null,$.getStructures()));return S=$._mergeStructures(t,S)}var Ze=Se,Mr=Se,jr=Se,zr=Se;function Se(t){let e;if(t<16&&(e=rt(t)))return e;if(t>64&&He)return He.decode(x.subarray(s,s+=t));const r=s+t,n=[];for(e="";s<r;){const i=x[s++];if((i&128)===0)n.push(i);else if((i&224)===192){const l=x[s++]&63;n.push((i&31)<<6|l)}else if((i&240)===224){const l=x[s++]&63,u=x[s++]&63;n.push((i&31)<<12|l<<6|u)}else if((i&248)===240){const l=x[s++]&63,u=x[s++]&63,g=x[s++]&63;let p=(i&7)<<18|l<<12|u<<6|g;p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p)}else n.push(i);n.length>=4096&&(e+=R.apply(String,n),n.length=0)}return n.length>0&&(e+=R.apply(String,n)),e}function Bt(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=C();return e}function At(t){if($.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Ht()]=C();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(C(),C());return e}}var R=String.fromCharCode;function Jt(t){let e=s,r=new Array(t);for(let n=0;n<t;n++){const i=x[s++];if((i&128)>0){s=e;return}r[n]=i}return R.apply(String,r)}function rt(t){if(t<4)if(t<2){if(t===0)return"";{let e=x[s++];if((e&128)>1){s-=1;return}return R(e)}}else{let e=x[s++],r=x[s++];if((e&128)>0||(r&128)>0){s-=2;return}if(t<3)return R(e,r);let n=x[s++];if((n&128)>0){s-=3;return}return R(e,r,n)}else{let e=x[s++],r=x[s++],n=x[s++],i=x[s++];if((e&128)>0||(r&128)>0||(n&128)>0||(i&128)>0){s-=4;return}if(t<6){if(t===4)return R(e,r,n,i);{let l=x[s++];if((l&128)>0){s-=5;return}return R(e,r,n,i,l)}}else if(t<8){let l=x[s++],u=x[s++];if((l&128)>0||(u&128)>0){s-=6;return}if(t<7)return R(e,r,n,i,l,u);let g=x[s++];if((g&128)>0){s-=7;return}return R(e,r,n,i,l,u,g)}else{let l=x[s++],u=x[s++],g=x[s++],p=x[s++];if((l&128)>0||(u&128)>0||(g&128)>0||(p&128)>0){s-=8;return}if(t<10){if(t===8)return R(e,r,n,i,l,u,g,p);{let _=x[s++];if((_&128)>0){s-=9;return}return R(e,r,n,i,l,u,g,p,_)}}else if(t<12){let _=x[s++],U=x[s++];if((_&128)>0||(U&128)>0){s-=10;return}if(t<11)return R(e,r,n,i,l,u,g,p,_,U);let k=x[s++];if((k&128)>0){s-=11;return}return R(e,r,n,i,l,u,g,p,_,U,k)}else{let _=x[s++],U=x[s++],k=x[s++],B=x[s++];if((_&128)>0||(U&128)>0||(k&128)>0||(B&128)>0){s-=12;return}if(t<14){if(t===12)return R(e,r,n,i,l,u,g,p,_,U,k,B);{let P=x[s++];if((P&128)>0){s-=13;return}return R(e,r,n,i,l,u,g,p,_,U,k,B,P)}}else{let P=x[s++],L=x[s++];if((P&128)>0||(L&128)>0){s-=14;return}if(t<15)return R(e,r,n,i,l,u,g,p,_,U,k,B,P,L);let Z=x[s++];if((Z&128)>0){s-=15;return}return R(e,r,n,i,l,u,g,p,_,U,k,B,P,L,Z)}}}}}function Tt(){let t=x[s++],e;if(t<192)e=t-160;else switch(t){case 217:e=x[s++];break;case 218:e=b.getUint16(s),s+=2;break;case 219:e=b.getUint32(s),s+=4;break;default:throw new Error("Expected string")}return Se(e)}function qe(t){return $.copyBuffers?Uint8Array.prototype.slice.call(x,s,s+=t):x.subarray(s,s+=t)}function ie(t){let e=x[s++];if(V[e])return V[e](x.subarray(s,s+=t));throw new Error("Unknown extension type "+e)}var It=new Array(4096);function Ht(){let t=x[s++];if(t>=160&&t<192){if(t=t-160,H>=s)return Q.slice(s-q,(s+=t)-q);if(!(H==0&&ee<180))return Ze(t)}else return s--,C();let e=(t<<5^(t>1?b.getUint16(s):t>0?x[s]:0))&4095,r=It[e],n=s,i=s+t-3,l,u=0;if(r&&r.bytes==t){for(;n<i;){if(l=b.getUint32(n),l!=r[u++]){n=1879048192;break}n+=4}for(i+=3;n<i;)if(l=x[n++],l!=r[u++]){n=1879048192;break}if(n===i)return s=n,r.string;i-=3,n=s}for(r=[],It[e]=r,r.bytes=t;n<i;)l=b.getUint32(n),r.push(l),n+=4;for(i+=3;n<i;)l=x[n++],r.push(l);let g=t<16?rt(t):Jt(t);return g!=null?r.string=g:r.string=Ze(t)}const Pt=(t,e)=>{var r=C();let n=t;e!==void 0&&(t=t<32?-((e<<5)+t):(e<<5)+t,r.highByte=e);let i=S[t];return i&&i.isShared&&((S.restoreStructures||(S.restoreStructures=[]))[t]=i),S[t]=r,r.read=tt(r,n),r.read()};var Zt=typeof self=="object"?self:global;V[0]=()=>{};V[0].noBuffer=!0;V[101]=()=>{let t=C();return(Zt[t[0]]||Error)(t[1])};V[105]=t=>{let e=b.getUint32(s-4);G||(G=new Map);let r=x[s],n;r>=144&&r<160||r==220||r==221?n=[]:n={};let i={target:n};G.set(e,i);let l=C();return i.used?Object.assign(n,l):(i.target=l,l)};V[112]=t=>{let e=b.getUint32(s-4),r=G.get(e);return r.used=!0,r.target};V[115]=()=>new Set(C());const Kt=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(t=>t+"Array");V[116]=t=>{let e=t[0],r=Kt[e];if(!r)throw new Error("Could not find typed array for code "+e);return new Zt[r](Uint8Array.prototype.slice.call(t,1).buffer)};V[120]=()=>{let t=C();return new RegExp(t[0],t[1])};const Lr=[];V[98]=t=>{let e=(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3],r=s;return s+=e-t.length,z=Lr,z=[Tt(),Tt()],z.position0=0,z.position1=0,z.postBundlePosition=s,s=r,C()};V[255]=t=>t.length==4?new Date((t[0]*16777216+(t[1]<<16)+(t[2]<<8)+t[3])*1e3):t.length==8?new Date(((t[0]<<22)+(t[1]<<14)+(t[2]<<6)+(t[3]>>2))/1e6+((t[3]&3)*4294967296+t[4]*16777216+(t[5]<<16)+(t[6]<<8)+t[7])*1e3):t.length==12?new Date(((t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3])/1e6+((t[4]&128?-281474976710656:0)+t[6]*1099511627776+t[7]*4294967296+t[8]*16777216+(t[9]<<16)+(t[10]<<8)+t[11])*1e3):new Date("invalid");function Gt(t){let e=ee,r=s,n=q,i=H,l=Q,u=G,g=z,p=new Uint8Array(x.slice(0,ee)),_=S,U=S.slice(0,S.length),k=$,B=ue,P=t();return ee=e,s=r,q=n,H=i,Q=l,G=u,z=g,x=p,ue=B,S=_,S.splice(0,S.length,...U),$=k,b=new DataView(x.buffer,x.byteOffset,x.byteLength),P}function Ke(){x=null,G=null,S=null}const nt=new Array(147);for(let t=0;t<256;t++)nt[t]=+("1e"+Math.floor(45.15-t*.30103));var De=new ye({useRecords:!1});const Fr=De.unpack;De.unpackMultiple;De.unpack;let Wr=new Float32Array(1);new Uint8Array(Wr.buffer,0,4);let Ee;try{Ee=new TextEncoder}catch{}let Ge,Xt;const Re=typeof Buffer!="undefined",Oe=Re?Buffer.allocUnsafeSlow:Uint8Array,Yt=Re?Buffer:Uint8Array,Ct=Re?4294967296:2144337920;let o,he,I,a=0,F,M=null;const $r=61440,Vr=/[\u0080-\uFFFF]/,le=Symbol("record-id");class Nr extends ye{constructor(e){super(e);this.offset=0;let r,n,i,l,u=0,g=Yt.prototype.utf8Write?function(f,y,d){return o.utf8Write(f,y,d)}:Ee&&Ee.encodeInto?function(f,y){return Ee.encodeInto(f,o.subarray(y)).written}:!1,p=this;e||(e={});let _=e&&e.sequential,U=e.structures||e.saveStructures,k=e.maxSharedStructures;if(k==null&&(k=U?32:0),k>8160)throw new Error("Maximum maxSharedStructure is 8160");let B=e.maxOwnStructures;B==null&&(B=U?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let P=k>32||B+k>64,L=k+64,Z=k+B+64;if(Z>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let W=[],ae=0,X=0;this.pack=this.encode=function(f,y){if(o||(o=new Oe(8192),I=new DataView(o.buffer,0,8192),a=0),F=o.length-10,F-a<2048?(o=new Oe(o.length),I=new DataView(o.buffer,0,o.length),F=o.length-10,a=0):a=a+7&2147483640,r=a,l=p.structuredClone?new Map:null,p.bundleStrings&&typeof f!="string"?(M=[],M.size=1/0):M=null,i=p.structures,i){i.uninitialized&&(i=p._mergeStructures(p.getStructures()));let d=i.sharedLength||0;if(d>k)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+i.sharedLength);if(!i.transitions){i.transitions=Object.create(null);for(let c=0;c<d;c++){let h=i[c];if(!h)continue;let O,v=i.transitions;for(let w=0,D=h.length;w<D;w++){let A=h[w];O=v[A],O||(O=v[A]=Object.create(null)),v=O}v[le]=c+64}u=d}_||(i.nextId=d+64)}n&&(n=!1);try{if(T(f),M&&Mt(r,T),p.offset=a,l&&l.idsToInsert){a+=l.idsToInsert.length*6,a>F&&re(a),p.offset=a;let d=Jr(o.subarray(r,a),l.idsToInsert);return l=null,d}return y&Hr?(o.start=r,o.end=a,o):o.subarray(r,a)}finally{if(i){X<10&&X++;let d=i.sharedLength||k;if(i.length>d&&(i.length=d),ae>1e4)i.transitions=null,X=0,ae=0,W.length>0&&(W=[]);else if(W.length>0&&!_){for(let c=0,h=W.length;c<h;c++)W[c][le]=0;W=[]}if(n&&p.saveStructures){let c=o.subarray(r,a);return p.saveStructures(i,u)===!1?(p._mergeStructures(p.getStructures()),p.pack(f)):(u=d,c)}}y&Zr&&(a=r)}};const T=f=>{a>F&&(o=re(a));var y=typeof f,d;if(y==="string"){let c=f.length;if(M&&c>=4&&c<4096){if((M.size+=c)>$r){let w,D=(M[0]?M[0].length*3+M[1].length:0)+10;a+D>F&&(o=re(a+D)),M.position?(o[a]=200,a+=3,o[a++]=98,w=a-r,a+=4,Mt(r,T),I.setUint16(w+r-3,a-r-w)):(o[a++]=214,o[a++]=98,w=a-r,a+=4),M=["",""],M.size=0,M.position=w}let v=Vr.test(f);M[v?0:1]+=f,o[a++]=193,T(v?-c:c);return}let h;c<32?h=1:c<256?h=2:c<65536?h=3:h=5;let O=c*3;if(a+O>F&&(o=re(a+O)),c<64||!g){let v,w,D,A=a+h;for(v=0;v<c;v++)w=f.charCodeAt(v),w<128?o[A++]=w:w<2048?(o[A++]=w>>6|192,o[A++]=w&63|128):(w&64512)===55296&&((D=f.charCodeAt(v+1))&64512)===56320?(w=65536+((w&1023)<<10)+(D&1023),v++,o[A++]=w>>18|240,o[A++]=w>>12&63|128,o[A++]=w>>6&63|128,o[A++]=w&63|128):(o[A++]=w>>12|224,o[A++]=w>>6&63|128,o[A++]=w&63|128);d=A-a-h}else d=g(f,a+h,O);d<32?o[a++]=160|d:d<256?(h<2&&o.copyWithin(a+2,a+1,a+1+d),o[a++]=217,o[a++]=d):d<65536?(h<3&&o.copyWithin(a+3,a+2,a+2+d),o[a++]=218,o[a++]=d>>8,o[a++]=d&255):(h<5&&o.copyWithin(a+5,a+3,a+3+d),o[a++]=219,I.setUint32(a,d),a+=4),a+=d}else if(y==="number")if(f>>>0===f)f<64?o[a++]=f:f<256?(o[a++]=204,o[a++]=f):f<65536?(o[a++]=205,o[a++]=f>>8,o[a++]=f&255):(o[a++]=206,I.setUint32(a,f),a+=4);else if(f>>0===f)f>=-32?o[a++]=256+f:f>=-128?(o[a++]=208,o[a++]=f+256):f>=-32768?(o[a++]=209,I.setInt16(a,f),a+=2):(o[a++]=210,I.setInt32(a,f),a+=4);else{let c;if((c=this.useFloat32)>0&&f<4294967296&&f>=-2147483648){o[a++]=202,I.setFloat32(a,f);let h;if(c<4||(h=f*nt[(o[a]&127)<<1|o[a+1]>>7])>>0===h){a+=4;return}else a--}o[a++]=203,I.setFloat64(a,f),a+=8}else if(y==="object")if(!f)o[a++]=192;else{if(l){let h=l.get(f);if(h){if(!h.id){let O=l.idsToInsert||(l.idsToInsert=[]);h.id=O.push(h)}o[a++]=214,o[a++]=112,I.setUint32(a,h.id),a+=4;return}else l.set(f,{offset:a-r})}let c=f.constructor;if(c===Object)vt(f,!0);else if(c===Array){d=f.length,d<16?o[a++]=144|d:d<65536?(o[a++]=220,o[a++]=d>>8,o[a++]=d&255):(o[a++]=221,I.setUint32(a,d),a+=4);for(let h=0;h<d;h++)T(f[h])}else if(c===Map){d=f.size,d<16?o[a++]=128|d:d<65536?(o[a++]=222,o[a++]=d>>8,o[a++]=d&255):(o[a++]=223,I.setUint32(a,d),a+=4);for(let[h,O]of f)T(h),T(O)}else{for(let h=0,O=Ge.length;h<O;h++){let v=Xt[h];if(f instanceof v){let w=Ge[h];if(w.write){w.type&&(o[a++]=212,o[a++]=w.type,o[a++]=0),T(w.write.call(this,f));return}let D=o,A=I,K=a;o=null;let ne;try{ne=w.pack.call(this,f,xe=>(o=D,D=null,a+=xe,a>F&&re(a),{target:o,targetView:I,position:a-xe}),T)}finally{D&&(o=D,I=A,a=K,F=o.length-10)}ne&&(ne.length+a>F&&re(ne.length+a),a=qr(ne,o,a,w.type));return}}vt(f,!f.hasOwnProperty)}}else if(y==="boolean")o[a++]=f?195:194;else if(y==="bigint"){if(f<BigInt(1)<<BigInt(63)&&f>=-(BigInt(1)<<BigInt(63)))o[a++]=211,I.setBigInt64(a,f);else if(f<BigInt(1)<<BigInt(64)&&f>0)o[a++]=207,I.setBigUint64(a,f);else if(this.largeBigIntToFloat)o[a++]=203,I.setFloat64(a,Number(f));else throw new RangeError(f+" was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");a+=8}else if(y==="undefined")this.encodeUndefinedAsNil?o[a++]=192:(o[a++]=212,o[a++]=0,o[a++]=0);else if(y==="function")T(this.writeFunction&&this.writeFunction());else throw new Error("Unknown type: "+y)},vt=this.useRecords===!1?this.variableMapSize?f=>{let y=Object.keys(f),d=y.length;d<16?o[a++]=128|d:d<65536?(o[a++]=222,o[a++]=d>>8,o[a++]=d&255):(o[a++]=223,I.setUint32(a,d),a+=4);let c;for(let h=0;h<d;h++)T(c=y[h]),T(f[c])}:(f,y)=>{o[a++]=222;let d=a-r;a+=2;let c=0;for(let h in f)(y||f.hasOwnProperty(h))&&(T(h),T(f[h]),c++);o[d+++r]=c>>8,o[d+r]=c&255}:e.progressiveRecords&&!P?(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=a++-r,O;for(let v in f)if(y||f.hasOwnProperty(v)){if(d=c[v],d)c=d;else{let w=Object.keys(f),D=c;c=i.transitions;let A=0;for(let K=0,ne=w.length;K<ne;K++){let xe=w[K];d=c[xe],d||(d=c[xe]=Object.create(null),A++),c=d}h+r+1==a?(a--,Ve(c,w,A)):bt(c,w,h,A),O=!0,c=D[v]}T(f[v])}if(!O){let v=c[le];v?o[h+r]=v:bt(c,Object.keys(f),h,0)}}:(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=0;for(let v in f)(y||f.hasOwnProperty(v))&&(d=c[v],d||(d=c[v]=Object.create(null),h++),c=d);let O=c[le];O?O>=96&&P?(o[a++]=((O-=96)&31)+96,o[a++]=O>>5):o[a++]=O:Ve(c,c.__keys__||Object.keys(f),h);for(let v in f)(y||f.hasOwnProperty(v))&&T(f[v])},re=f=>{let y;if(f>16777216){if(f-r>Ct)throw new Error("Packed buffer would be larger than maximum buffer size");y=Math.min(Ct,Math.round(Math.max((f-r)*(f>67108864?1.25:2),4194304)/4096)*4096)}else y=(Math.max(f-r<<2,o.length-1)>>12)+1<<12;let d=new Oe(y);return I=new DataView(d.buffer,0,y),o.copy?o.copy(d,0,r,f):d.set(o.slice(r,f)),a-=r,r=0,F=d.length-10,o=d},Ve=(f,y,d)=>{let c=i.nextId;c||(c=64),c<L&&this.shouldShareStructure&&!this.shouldShareStructure(y)?(c=i.nextOwnId,c<Z||(c=L),i.nextOwnId=c+1):(c>=Z&&(c=L),i.nextId=c+1);let h=y.highByte=c>=96&&P?c-96>>5:-1;f[le]=c,f.__keys__=y,i[c-64]=y,c<L?(y.isShared=!0,i.sharedLength=c-63,n=!0,h>=0?(o[a++]=(c&31)+96,o[a++]=h):o[a++]=c):(h>=0?(o[a++]=213,o[a++]=114,o[a++]=(c&31)+96,o[a++]=h):(o[a++]=212,o[a++]=114,o[a++]=c),d&&(ae+=X*d),W.length>=B&&(W.shift()[le]=0),W.push(f),T(y))},bt=(f,y,d,c)=>{let h=o,O=a,v=F,w=r;o=he,a=0,r=0,o||(he=o=new Oe(8192)),F=o.length-10,Ve(f,y,c),he=o;let D=a;if(o=h,a=O,F=v,r=w,D>1){let A=a+D-1;A>F&&re(A);let K=d+r;o.copyWithin(K+D,K+1,a),o.set(he.slice(0,D),K),a=A}else o[d+r]=he[0]}}useBuffer(e){o=e,I=new DataView(o.buffer,o.byteOffset,o.byteLength),a=0}clearSharedData(){this.structures&&(this.structures=[])}}Xt=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,Vt];Ge=[{pack(t,e,r){let n=t.getTime()/1e3;if((this.useTimestamp32||t.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:i,targetView:l,position:u}=e(6);i[u++]=214,i[u++]=255,l.setUint32(u,n)}else if(n>0&&n<17179869184){let{target:i,targetView:l,position:u}=e(10);i[u++]=215,i[u++]=255,l.setUint32(u,t.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),l.setUint32(u+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),r(this.onInvalidDate());let{target:i,targetView:l,position:u}=e(3);i[u++]=212,i[u++]=255,i[u++]=255}else{let{target:i,targetView:l,position:u}=e(15);i[u++]=199,i[u++]=12,i[u++]=255,l.setUint32(u,t.getMilliseconds()*1e6),l.setBigInt64(u+4,BigInt(Math.floor(n)))}}},{pack(t,e,r){let n=Array.from(t),{target:i,position:l}=e(this.structuredClone?3:0);this.structuredClone&&(i[l++]=212,i[l++]=115,i[l++]=0),r(n)}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=101,n[i++]=0),r([t.name,t.message])}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=120,n[i++]=0),r([t.source,t.flags])}},{pack(t,e){this.structuredClone?Dt(t,16,e):Rt(Re?Buffer.from(t):new Uint8Array(t),e)}},{pack(t,e){let r=t.constructor;r!==Yt&&this.structuredClone?Dt(t,Kt.indexOf(r.name),e):Rt(t,e)}},{pack(t,e){let{target:r,position:n}=e(1);r[n]=193}}];function Dt(t,e,r,n){let i=t.byteLength;if(i+1<256){var{target:l,position:u}=r(4+i);l[u++]=199,l[u++]=i+1}else if(i+1<65536){var{target:l,position:u}=r(5+i);l[u++]=200,l[u++]=i+1>>8,l[u++]=i+1&255}else{var{target:l,position:u,targetView:g}=r(7+i);l[u++]=201,g.setUint32(u,i+1),u+=4}l[u++]=116,l[u++]=e,l.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),u)}function Rt(t,e){let r=t.byteLength;var n,i;if(r<256){var{target:n,position:i}=e(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=e(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=r&255}else{var{target:n,position:i,targetView:l}=e(r+5);n[i++]=198,l.setUint32(i,r),i+=4}n.set(t,i)}function qr(t,e,r,n){let i=t.length;switch(i){case 1:e[r++]=212;break;case 2:e[r++]=213;break;case 4:e[r++]=214;break;case 8:e[r++]=215;break;case 16:e[r++]=216;break;default:i<256?(e[r++]=199,e[r++]=i):i<65536?(e[r++]=200,e[r++]=i>>8,e[r++]=i&255):(e[r++]=201,e[r++]=i>>24,e[r++]=i>>16&255,e[r++]=i>>8&255,e[r++]=i&255)}return e[r++]=n,e.set(t,r),r+=i,r}function Jr(t,e){let r,n=e.length*6,i=t.length-n;for(e.sort((l,u)=>l.offset>u.offset?1:-1);r=e.pop();){let l=r.offset,u=r.id;t.copyWithin(l+n,l,i),n-=6;let g=l+n;t[g++]=214,t[g++]=105,t[g++]=u>>24,t[g++]=u>>16&255,t[g++]=u>>8&255,t[g++]=u&255,i=l}return t}function Mt(t,e){I.setUint32(M.position+t,a-M.position-t);let r=M;M=null,e(r[0]),e(r[1])}let Qt=new Nr({useRecords:!1});Qt.pack;Qt.pack;const Hr=512,Zr=1024;var Kr="https://testing.izhenxiang.com/",er="https://i-ver.oss-cn-beijing.aliyuncs.com/",tr,Gr=async t=>{var e,r;return t=await t,r=[],e=r.push.bind(r),t.on("data",e),new Promise((n,i)=>(t.on("end",()=>{n(Buffer.concat(r))}),t.on("error",i)))},Xr=t=>Gr(rr(t));tr=t=>{var e;return e=m.net.request(t),e.end(),new Promise((r,n)=>(e.on("error",i=>{n(i)}),e.on("response",i=>{if(i.statusCode!==200){n(i);return}r(i)})))};var rr=t=>tr(t),_e={};_e.version="1.0.0";_e.encode=function(e){return e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};_e.decode=function(e){return e+=Array(5-e.length%4).join("="),e=e.replace(/\-/g,"+").replace(/\_/g,"/"),new Buffer(e,"base64")};_e.validate=function(e){return/^[A-Za-z0-9\-_]+$/.test(e)};var Je=_e;var oe,nr,Be,Me,it,je,me,Ae,ir,sr,st,Pe,ar,at,lt;sr=Pr.promisify(jt.brotliDecompress);var Yr=()=>(m.app.relaunch(),m.app.exit());oe=J.join(zt.ROOT,"v");Y.mkdirSync(oe,{recursive:!0});nr="sha512";var lr=()=>{var t;t=de.update({closable:!0,frame:!0,width:400,height:500}),t.setAlwaysOnTop(!0,"screen-saver")};Pe=t=>Xr(er+t);ar=t=>{var e;return e=Ir.createHash(nr),new Promise(r=>Y.createReadStream(t).on("data",e.update.bind(e)).on("end",()=>{r(e.digest().slice(0,8))}))};Ae=(()=>{var t;return{v:t}=Ie.default,t&&te.decode(t)})();var or=()=>te.PACKAGE_JSON().version;je=te.ver_int(or());me=0;lt=async()=>{var t;return t=te.encode(parseInt(new Date/1e3)),me=await Pe("v?"+t),me};ir=async t=>{var e,r,n,i,l,u,g,p,_,U,k,B,P,L,Z,W,ae,X;if(t||(t=me||await lt()),U=t.readUintBE(0,6),!(je>=Ae)){if(n=te.encode(U),e=J.join(oe,n),Y.existsSync(J.join(e,te.package_json))&&U===Ae)return e;for(ae=Je.encode(await Pe(Je.encode(t))),[r,i,g]=Fr(await sr(await Pe(ae))),P=T=>we.mkdir(J.join(e,T),{recursive:!0}),await Promise.all(r.map(P)),Z=J.dirname(__dirname),L=_=0,k=i.length;_<k;L=++_)if(p=i[L],l=J.join(e,p),u=g[L],W=async T=>Buffer.compare(u,await ar(T))===0,!(Y.existsSync(l)&&await W(l))){if(await P(J.dirname(p)),B=J.join(Z,p),Y.existsSync(B)&&await W(B)){await we.copyFile(B,l);continue}if(X=Y.createWriteStream(l),(await rr(er+Je.encode(u))).pipe(jt.createBrotliDecompress()).pipe(X),await new Promise(T=>{X.on("finish",T)}),!await W(l))return}return Ie.default.v=n,Ae=U,e}};var fr=async()=>{var t,e,r;try{t=await lt()}catch(n){return e=n,console.trace(e),0}return r=je<t.readUintBE(0,6),r?t:0};st=async()=>{var t;(t=await fr())&&await ur(t)};setInterval(st,864e5);Be=Me=it=void 0;at=()=>Me=new Promise(t=>it=t);at();var Qr=()=>Me,ur=(...t)=>(Be||(Be=ir(...t).then(async e=>{e&&(it([me,JSON.parse(await we.readFile(J.join(e,te.package_json),"utf8")).description]),at())}).finally(()=>{Be=!1})),Me);setTimeout(async()=>{var t,e,r,n;if(Y.existsSync(oe)){n=await we.readdir(oe,{withFileTypes:!0});for(e of n)e.isDirectory()&&({name:r}=e,te.decode(r)<je&&await we.rm(J.join(oe,r),{recursive:!0,force:!0}))}if(t=parseInt(new Date/864e5),t!==Ie.default.update_check)return Ie.default.update_check=t,await st()},15e3);var en=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",relaunch:Yr,show:lr,ver_now:or,update_check:fr,update_promise:Qr,update:ur});var ze,ot,cr,dr,ft,tn,ut,xr,hr,ve;Lt.default.platform();({Menu:ot,Tray:cr,app:dr,globalShortcut:tn}=require("electron"));ve=new cr(J.join(et,"trayTemplate.png"));ut=[{label:"\u5A92\u4F53\u5E93",click:()=>{m.shell.openExternal(Kr+"?user_token="+$t.ID)}},{label:"\u68C0\u6D4B\u66F4\u65B0",click:lr},{type:"separator"}];ze=xr=ot.buildFromTemplate([{label:"\u663E\u793A\u754C\u9762",click:fe},...ut,{label:"\u9000\u51FA",click:()=>dr.quit()}]);hr=ot.buildFromTemplate(ut);ft=["click",()=>{fe()}];ve.on("right-click",t=>{ve.popUpContextMenu(ze)});var rn=()=>{ve.off(...ft),ze=hr},pr=()=>{ve.on(...ft),ze=xr};var gr;gr=t=>{var e,r,n,i,l,u,g,p;t&&(t.devToolsWebContents||({webContents:l}=t,e=new m.BrowserWindow({minimizable:!1,maximizable:!1}),[i,r]=t.getSize(),[g,p]=t.getPosition(),{width:u,height:n}=m.screen.getPrimaryDisplay().workArea,l.setDevToolsWebContents(e.webContents),l.openDevTools({mode:"detach"}),i>r?(p=0,i=0,r+=20,n-=r):(g=0,r=0,u-=i),e.setPosition(i,r),t.setPosition(g,p),e.setSize(u,n),t.focus()))};var nn=()=>{m.globalShortcut.register("CmdOrCtrl+Alt+I",()=>gr(m.BrowserWindow.getFocusedWindow()))},ke=t=>{if(!!t&&!t.isDestroyed()){t.close();try{t.destroy()}catch{}}},Le=t=>{m.BrowserWindow.getAllWindows().forEach(e=>{var r,n;if(n=e.webContents.getURL(),n){if({hash:r}=new URL(n),r=r.slice(1),r.startsWith("main")){if(t){e[t]();return}else e.hide();return}if(r.startsWith("camera"))return}ke(e)})},sn=()=>{m.BrowserWindow.getAllWindows().forEach(t=>{var e,r;if(r=t.webContents.getURL(),r&&({hash:e}=new URL(r),e=e.slice(1),e.startsWith("main"))){t.hide();return}ke(t)})},wr,N;({count_down:wr}=de);N=void 0;var yr=()=>{var t;if(N){N.focus();return}t=240,N=wr({width:t,height:t,transparent:!0,resizable:!1,hasShadow:!1}),N.on("close",()=>{N=void 0}),N.setAlwaysOnTop(!0,"screen-saver"),N.webContents.on("did-finish-load",()=>{var e,r;r=m.BrowserWindow.getAllWindows();for(e of r)e.webContents.getURL().endsWith("/#main")||e.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0});N.moveTop(),N.focus()})},an={close:()=>{N!=null&&N.close()}},ct=new Proxy({},{get:(t,e)=>()=>{var r,n,i;return{width:n,height:r}=m.screen.getPrimaryDisplay().size,i=de[e]({width:n,height:r,roundedCorners:!1,transparent:!0,resizable:!1,hasShadow:!1}),i.setAlwaysOnTop(!0,"screen-saver"),i.setPosition(0,0),i.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),i}});var Ce,dt,xt,ht,pt;Ce=xt=dt=void 0;ht=()=>{dt=new Promise(t=>{xt=t})};ht();pt=t=>{xt(t),ht(),ke(Ce)};var ln=()=>{pt(!0)},on=()=>{pt(!1)},fn=t=>(Ce=ct["confirm_"+t]({width:275,height:190,modal:!0,isAlwaysOnTop:!0,visibleOnAllWorkspaces:!0}),Ce.setAlwaysOnTop(!0,"screen-saver"),dt),un=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",y:ln,n:on,show:fn}),gt,Fe,mr,We,pe,$e,se,E,vr;({camera:mr}=de);E=void 0;se=void 0;gt=204;$e=We=gt;pe=void 0;var cn=(t,e)=>{t+=pe[0],e+=pe[1];try{E.setBounds({x:Math.round(t),y:Math.round(e),width:$e,height:We})}catch{console.error(t,e,pe)}return[t,e]},dn=()=>{pe=E.getPosition()},Te=()=>{E&&!E.isDestroyed()&&E.getSize()[0]!==800&&(se=E.getPosition()),ke(E)},xn=t=>{var e,r;$e=We=t,r=E.getSize()[0],r!==t&&(se=E.getPosition(),e=Math.round((t-r)/2),E.setBounds({x:se[0]-e,y:se[1]-e,width:t,height:t}))};Fe=!1;var hn=vr=(t,e,r=!1)=>{E&&!E.isDestroyed()||($e=t,We=e,E=mr({width:t,height:e,shadow:!1,center:!0,roundedCorners:!1,resizable:!1,hasShadow:!1,transparent:!0}),Fe&&wt())},pn=(t,e)=>{var r,n,i,l;E&&!E.isDestroyed()||(e=e||gt,vr(e,e,t),se?[Te,l]=se:({width:i,height:r}=m.screen.getPrimaryDisplay().size,n=62,Te=n,l=r-n-e),E.setPosition(Te,l))},wt=()=>{E&&!E.isDestroyed()&&(E.setAlwaysOnTop(!0),E.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0})),Fe=!0},br=()=>{E&&!E.isDestroyed()&&(E.setAlwaysOnTop(!1),E.setVisibleOnAllWorkspaces(!1)),Fe=!1},gn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",move:cn,init:dn,get x(){return Te},size:xn,default:hn,circle:pn,top:wt,untop:br}),yt,ce,Xe,mt,Sr,_r,j;({recbar:_r}=de);j=void 0;ce=void 0;({draw:Sr}=ct);var wn=()=>{ce||(ce=Sr(),kr())},kr=()=>{be(),ce.focus()},yn=()=>{ke(ce),ce=void 0};Xe=["CommandOrControl+R","CommandOrControl+W","CommandOrControl+Q","Alt+F4","F5"];yt={"browser-window-focus":()=>{var t;for(t of Xe)m.globalShortcut.register(t,()=>{})},"browser-window-blur":()=>{var t;for(t of Xe)m.globalShortcut.unregister(t,()=>{})}};var Ur=t=>{var e,r,n,i,l,u,g,p;l=Object.entries(yt);for(p of l)[n,e]=p,m.app.on(n,e);return rn(),r=48,i={roundedCorners:!1,transparent:!0,shadow:!1,resizable:!1,hasShadow:!1,width:t,height:r},j=_r(i),j.on("close",()=>j=void 0),{width:g,height:u}=m.screen.getPrimaryDisplay().workArea,j.setBounds({x:Math.round((g-t)/2),y:u-28-r,width:t,height:r}),be(),wt(),new Promise(_=>j.webContents.on("did-finish-load",()=>{be(),j.focus(),_(j)}))},be=()=>{j.setAlwaysOnTop(!0,"screen-saver")},mn=()=>{var t,e,r,n,i;n=j.getPosition(),[r,e]=j.getSize(),[i,t]=j.size,j.setBounds({x:n[0]+r-i,y:n[1],width:i,height:t})},vn=()=>{var t,e,r,n;e=j.getPosition(),j.size=r=j.getSize(),n=170,t=48,j.setBounds({x:e[0]+r[0]-n,y:e[1],width:n,height:t})};mt=()=>{var t,e,r,n;r=Object.entries(yt);for(n of r)[e,t]=n,m.app.off(e,t);pr(),br()};var bn=()=>{mt(),Le("show")},Sn=()=>{mt(),Le("showInactive")},_n=()=>{j.hide()},kn=async()=>{var t,e;e=await m.desktopCapturer.getSources({types:["screen"],thumbnailSize:{width:0,height:0}});for(t of e)return t.id},Un=()=>{m.BrowserWindow.getAllWindows().forEach(t=>t.hide())},On=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",draw:wn,draw_top:kr,draw_x:yn,\u5DE5\u5177\u6761:Ur,top:be,expand:mn,left:vn,cancel:bn,end:Sn,hide:_n,screen_source:kn,stop:Un}),En=t=>{$t.ID=t},Bn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ID:En});var Or,ge;({area:Or}=ct);ge=void 0;var An=()=>{ge=Or(),ge.on("close",()=>ge=void 0)},Tn=()=>{ge.setIgnoreMouseEvents(!0,{forward:!0}),yr(),be()},In=()=>{var t,e;return{x:t,y:e}=m.screen.getCursorScreenPoint(),[t,e]};function Pn(t,e,r,n){var i,l;i=t!=="camera",l=n===1&&i,l?An():yr(),Ur(t!=="camera"?552:452)}var Cn=(t,e,r,n)=>{Le(),Pn(t,e,r,n)},Dn=t=>{m.shell.openExternal(t)},Rn=()=>zt.ROOT,Mn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",userData:Rn,close:Le,x:sn,count_down:an,confirm:un,auto_update:en,recbar:On,USER:Bn,camera:gn,area:Tn,main:fe,mouse:In,rec:Cn,open:Dn});process.on("exit",()=>{m.app.quit()});(async()=>{var t;t=await Promise.resolve().then(function(){return require("./t.js")}),t.init({dsn:"https://54c0fbe278e049c8a9635fc0fa612836@sentry.dalukuankuan.com/6"})})();m.app.commandLine.appendSwitch("js-flags","--expose_gc --max-old-space-size=512");(()=>{var t,e,r,n,i,l,u;r=Lt.default.platform(),fe(),r==="darwin"&&(n=m.app.dock)!=null&&n.hide(),t=(g,p)=>{var _,U,k,B;p instanceof Function&&m.ipcMain.handle(g.join("."),(P,L)=>p(...L)),k=Object.entries(p);for(B of k)[U,_]=B,t([...g,U],_)},i=Object.entries(Mn);for(u of i)[e,l]=u,t([e],l);pr(),nn()})();Dr(m.app,{"window-all-closed":()=>{if(process.platform!=="darwin")return m.app.quit()},"second-instance":fe,activate:fe});m.app.requestSingleInstanceLock()||(m.app.quit(),process.exit(0));
