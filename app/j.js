"use strict";var Ar=Object.defineProperty;var kt=Object.getOwnPropertySymbols;var Tr=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable;var _t=(t,e,r)=>e in t?Ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ut=(t,e)=>{for(var r in e||(e={}))Tr.call(e,r)&&_t(t,r,e[r]);if(kt)for(var r of kt(e))Pr.call(e,r)&&_t(t,r,e[r]);return t};var m=require("electron"),Ir=require("os"),Q=require("fs"),J=require("path"),Cr=require("crypto"),zt=require("zlib"),Dr=require("util"),re=require("./s.js"),me=require("fs/promises"),Te=require("./v.js"),Lt=require("./w.js");function Rr(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var Wt=Rr(Ir),Mr=(t,e)=>{var r,n;for(r in e)n=e[r],t.on(r,n);return t};et=Qe=Ye=__dirname;var Ye=Ye,Qe=Qe,et=et,Ve,Ft;Ve="127.0.0.1",Ft="http://"+Ve,m.session.defaultSession.protocol.interceptStreamProtocol("http",(t,e)=>{var r,n,i,l,u,g,p,_,E;if(E=new URL(t.url),E.host===Ve)({pathname:u}=E),u==="/"&&(u+=".htm"),_=u.slice(u.lastIndexOf(".")+1),_.startsWith("htm")?l="text/html":l={js:"text/javascript",css:"text/css",svg:"image/svg+xml",woff2:"font/woff2"}[_]||"application/octet-stream",n=Q.createReadStream(Qe+u),e({data:n,statusCode:200,headers:{"content-type":l}});else{if(t.useSessionCookies=!0,t.partition="persist:I",g=m.net.request(t),g.on("response",k=>{var A,I;({headers:A,statusCode:I}=k),e({data:k},A,I)}),t.uploadData){p=t.uploadData;for(i of p)({bytes:r}=i),r&&g.write(r)}g.end()}});var he=new Proxy({},{get:(t,e)=>r=>{var n;return r=Ut({skipTaskbar:!0,frame:!1,minimizable:!1,maximizable:!1,fullscreenable:!1,type:"toolbar",webPreferences:{preload:J.join(Ye,"l.js"),webSecurity:!1}},r),n=new m.BrowserWindow(r),n.setMenu(null),e!=="main"&&n.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),n.loadURL(Ft+"#"+e),n.once("ready-to-show",()=>n.show()),n.focus(),n}}),$t;({main:$t}=he);var ce=(t=!0)=>{var e,r,n;if(r=m.BrowserWindow.getAllWindows(),r.length){for(e of r)if(e.webContents.getURL().endsWith("/#main")){n=e,n.isMinimized()&&n.restore();break}}n||(n=$t({type:"",resizable:!1,height:590,width:426,skipTaskbar:!1})),!(!t&&!n.isVisible())&&(n.show(),n.moveTop(),n.focus())},Vt={ID:""},pe=t=>{if(!!t&&!t.isDestroyed()){t.close();try{t.destroy()}catch{}}},Je;try{Je=new TextDecoder}catch{}var x,te,s=0,F={},S,ee,N=0,K=0,z,X,V=[],b,Ot={useRecords:!1,mapsAsObjects:!0};class qt{}const Nt=new qt;Nt.name="MessagePack 0xC1";var de=!1;class ve{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0)),Object.assign(this,e)}unpack(e,r){if(x)return Xt(()=>(Ze(),this?this.unpack(e,r):ve.prototype.unpack.call(Ot,e,r)));te=r>-1?r:e.length,s=0,K=0,ee=null,z=null,x=e;try{b=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw x=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof ve){if(F=this,this.structures)return S=this.structures,Ue();(!S||S.length>0)&&(S=[])}else F=Ot,(!S||S.length>0)&&(S=[]);return Ue()}unpackMultiple(e,r){let n,i=0;try{de=!0;let l=e.length,u=this?this.unpack(e,l):De.unpack(e,l);if(r){for(r(u);s<l;)if(i=s,r(Ue())===!1)return}else{for(n=[u];s<l;)i=s,n.push(Ue());return n}}catch(l){throw l.lastPosition=i,l.values=n,l}finally{de=!1,Ze()}}_mergeStructures(e,r){e=e||[];for(let n=0,i=e.length;n<i;n++){let l=e[n];l&&(l.isShared=!0,n>=32&&(l.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in r||[])if(n>=0){let i=e[n],l=r[n];l&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[n]=i),e[n]=l)}return this.structures=e}decode(e,r){return this.unpack(e,r)}}function Ue(){try{if(!F.trusted&&!de){let e=S.sharedLength||0;e<S.length&&(S.length=e)}let t=D();if(z&&(s=z.postBundlePosition),s==te)S.restoreStructures&&Et(),S=null,x=null,X&&(X=null);else if(s>te){let e=new Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}else if(!de)throw new Error("Data read, but end of buffer not reached");return t}catch(t){throw S.restoreStructures&&Et(),Ze(),(t instanceof RangeError||t.message.startsWith("Unexpected end of buffer"))&&(t.incomplete=!0),t}}function Et(){for(let t in S.restoreStructures)S[t]=S.restoreStructures[t];S.restoreStructures=null}function D(){let t=x[s++];if(t<160)if(t<128){if(t<64)return t;{let e=S[t&63]||F.getStructures&&Jt()[t&63];return e?(e.read||(e.read=tt(e,t&63)),e.read()):t}}else if(t<144)if(t-=128,F.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Zt()]=D();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(D(),D());return e}else{t-=144;let e=new Array(t);for(let r=0;r<t;r++)e[r]=D();return e}else if(t<192){let e=t-160;if(K>=s)return ee.slice(s-N,(s+=e)-N);if(K==0&&te<140){let r=e<16?rt(e):Ht(e);if(r!=null)return r}return He(e)}else{let e;switch(t){case 192:return null;case 193:return z?(e=D(),e>0?z[1].slice(z.position1,z.position1+=e):z[0].slice(z.position0,z.position0-=e)):Nt;case 194:return!1;case 195:return!0;case 196:return qe(x[s++]);case 197:return e=b.getUint16(s),s+=2,qe(e);case 198:return e=b.getUint32(s),s+=4,qe(e);case 199:return le(x[s++]);case 200:return e=b.getUint16(s),s+=2,le(e);case 201:return e=b.getUint32(s),s+=4,le(e);case 202:if(e=b.getFloat32(s),F.useFloat32>2){let r=nt[(x[s]&127)<<1|x[s+1]>>7];return s+=4,(r*e+(e>0?.5:-.5)>>0)/r}return s+=4,e;case 203:return e=b.getFloat64(s),s+=8,e;case 204:return x[s++];case 205:return e=b.getUint16(s),s+=2,e;case 206:return e=b.getUint32(s),s+=4,e;case 207:return F.int64AsNumber?(e=b.getUint32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigUint64(s),s+=8,e;case 208:return b.getInt8(s++);case 209:return e=b.getInt16(s),s+=2,e;case 210:return e=b.getInt32(s),s+=4,e;case 211:return F.int64AsNumber?(e=b.getInt32(s)*4294967296,e+=b.getUint32(s+4)):e=b.getBigInt64(s),s+=8,e;case 212:if(e=x[s++],e==114)return Ct(x[s++]&63);{let r=V[e];if(r)return r.read?(s++,r.read(D())):r.noBuffer?(s++,r()):r(x.subarray(s,++s));throw new Error("Unknown extension "+e)}case 213:return e=x[s],e==114?(s++,Ct(x[s++]&63,x[s++])):le(2);case 214:return le(4);case 215:return le(8);case 216:return le(16);case 217:return e=x[s++],K>=s?ee.slice(s-N,(s+=e)-N):zr(e);case 218:return e=b.getUint16(s),s+=2,K>=s?ee.slice(s-N,(s+=e)-N):Lr(e);case 219:return e=b.getUint32(s),s+=4,K>=s?ee.slice(s-N,(s+=e)-N):Wr(e);case 220:return e=b.getUint16(s),s+=2,At(e);case 221:return e=b.getUint32(s),s+=4,At(e);case 222:return e=b.getUint16(s),s+=2,Tt(e);case 223:return e=b.getUint32(s),s+=4,Tt(e);default:if(t>=224)return t-256;if(t===void 0){let r=new Error("Unexpected end of MessagePack data");throw r.incomplete=!0,r}throw new Error("Unknown MessagePack token "+t)}}}const jr=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function tt(t,e){function r(){if(r.count++>2){let i=t.read=new Function("r","return function(){return {"+t.map(l=>jr.test(l)?l+":r()":"["+JSON.stringify(l)+"]:r()").join(",")+"}}")(D);return t.highByte===0&&(t.read=Bt(e,t.read)),i()}let n={};for(let i=0,l=t.length;i<l;i++){let u=t[i];n[u]=D()}return n}return r.count=0,t.highByte===0?Bt(e,r):r}const Bt=(t,e)=>function(){let r=x[s++];if(r===0)return e();let n=t<32?-(t+(r<<5)):t+(r<<5),i=S[n]||Jt()[n];if(!i)throw new Error("Record id is not defined for "+n);return i.read||(i.read=tt(i,t)),i.read()};function Jt(){let t=Xt(()=>(x=null,F.getStructures()));return S=F._mergeStructures(t,S)}var He=ke,zr=ke,Lr=ke,Wr=ke;function ke(t){let e;if(t<16&&(e=rt(t)))return e;if(t>64&&Je)return Je.decode(x.subarray(s,s+=t));const r=s+t,n=[];for(e="";s<r;){const i=x[s++];if((i&128)===0)n.push(i);else if((i&224)===192){const l=x[s++]&63;n.push((i&31)<<6|l)}else if((i&240)===224){const l=x[s++]&63,u=x[s++]&63;n.push((i&31)<<12|l<<6|u)}else if((i&248)===240){const l=x[s++]&63,u=x[s++]&63,g=x[s++]&63;let p=(i&7)<<18|l<<12|u<<6|g;p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p)}else n.push(i);n.length>=4096&&(e+=M.apply(String,n),n.length=0)}return n.length>0&&(e+=M.apply(String,n)),e}function At(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=D();return e}function Tt(t){if(F.mapsAsObjects){let e={};for(let r=0;r<t;r++)e[Zt()]=D();return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(D(),D());return e}}var M=String.fromCharCode;function Ht(t){let e=s,r=new Array(t);for(let n=0;n<t;n++){const i=x[s++];if((i&128)>0){s=e;return}r[n]=i}return M.apply(String,r)}function rt(t){if(t<4)if(t<2){if(t===0)return"";{let e=x[s++];if((e&128)>1){s-=1;return}return M(e)}}else{let e=x[s++],r=x[s++];if((e&128)>0||(r&128)>0){s-=2;return}if(t<3)return M(e,r);let n=x[s++];if((n&128)>0){s-=3;return}return M(e,r,n)}else{let e=x[s++],r=x[s++],n=x[s++],i=x[s++];if((e&128)>0||(r&128)>0||(n&128)>0||(i&128)>0){s-=4;return}if(t<6){if(t===4)return M(e,r,n,i);{let l=x[s++];if((l&128)>0){s-=5;return}return M(e,r,n,i,l)}}else if(t<8){let l=x[s++],u=x[s++];if((l&128)>0||(u&128)>0){s-=6;return}if(t<7)return M(e,r,n,i,l,u);let g=x[s++];if((g&128)>0){s-=7;return}return M(e,r,n,i,l,u,g)}else{let l=x[s++],u=x[s++],g=x[s++],p=x[s++];if((l&128)>0||(u&128)>0||(g&128)>0||(p&128)>0){s-=8;return}if(t<10){if(t===8)return M(e,r,n,i,l,u,g,p);{let _=x[s++];if((_&128)>0){s-=9;return}return M(e,r,n,i,l,u,g,p,_)}}else if(t<12){let _=x[s++],E=x[s++];if((_&128)>0||(E&128)>0){s-=10;return}if(t<11)return M(e,r,n,i,l,u,g,p,_,E);let k=x[s++];if((k&128)>0){s-=11;return}return M(e,r,n,i,l,u,g,p,_,E,k)}else{let _=x[s++],E=x[s++],k=x[s++],A=x[s++];if((_&128)>0||(E&128)>0||(k&128)>0||(A&128)>0){s-=12;return}if(t<14){if(t===12)return M(e,r,n,i,l,u,g,p,_,E,k,A);{let I=x[s++];if((I&128)>0){s-=13;return}return M(e,r,n,i,l,u,g,p,_,E,k,A,I)}}else{let I=x[s++],$=x[s++];if((I&128)>0||($&128)>0){s-=14;return}if(t<15)return M(e,r,n,i,l,u,g,p,_,E,k,A,I,$);let H=x[s++];if((H&128)>0){s-=15;return}return M(e,r,n,i,l,u,g,p,_,E,k,A,I,$,H)}}}}}function Pt(){let t=x[s++],e;if(t<192)e=t-160;else switch(t){case 217:e=x[s++];break;case 218:e=b.getUint16(s),s+=2;break;case 219:e=b.getUint32(s),s+=4;break;default:throw new Error("Expected string")}return ke(e)}function qe(t){return F.copyBuffers?Uint8Array.prototype.slice.call(x,s,s+=t):x.subarray(s,s+=t)}function le(t){let e=x[s++];if(V[e])return V[e](x.subarray(s,s+=t));throw new Error("Unknown extension type "+e)}var It=new Array(4096);function Zt(){let t=x[s++];if(t>=160&&t<192){if(t=t-160,K>=s)return ee.slice(s-N,(s+=t)-N);if(!(K==0&&te<180))return He(t)}else return s--,D();let e=(t<<5^(t>1?b.getUint16(s):t>0?x[s]:0))&4095,r=It[e],n=s,i=s+t-3,l,u=0;if(r&&r.bytes==t){for(;n<i;){if(l=b.getUint32(n),l!=r[u++]){n=1879048192;break}n+=4}for(i+=3;n<i;)if(l=x[n++],l!=r[u++]){n=1879048192;break}if(n===i)return s=n,r.string;i-=3,n=s}for(r=[],It[e]=r,r.bytes=t;n<i;)l=b.getUint32(n),r.push(l),n+=4;for(i+=3;n<i;)l=x[n++],r.push(l);let g=t<16?rt(t):Ht(t);return g!=null?r.string=g:r.string=He(t)}const Ct=(t,e)=>{var r=D();let n=t;e!==void 0&&(t=t<32?-((e<<5)+t):(e<<5)+t,r.highByte=e);let i=S[t];return i&&i.isShared&&((S.restoreStructures||(S.restoreStructures=[]))[t]=i),S[t]=r,r.read=tt(r,n),r.read()};var Kt=typeof self=="object"?self:global;V[0]=()=>{};V[0].noBuffer=!0;V[101]=()=>{let t=D();return(Kt[t[0]]||Error)(t[1])};V[105]=t=>{let e=b.getUint32(s-4);X||(X=new Map);let r=x[s],n;r>=144&&r<160||r==220||r==221?n=[]:n={};let i={target:n};X.set(e,i);let l=D();return i.used?Object.assign(n,l):(i.target=l,l)};V[112]=t=>{let e=b.getUint32(s-4),r=X.get(e);return r.used=!0,r.target};V[115]=()=>new Set(D());const Gt=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(t=>t+"Array");V[116]=t=>{let e=t[0],r=Gt[e];if(!r)throw new Error("Could not find typed array for code "+e);return new Kt[r](Uint8Array.prototype.slice.call(t,1).buffer)};V[120]=()=>{let t=D();return new RegExp(t[0],t[1])};const Fr=[];V[98]=t=>{let e=(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3],r=s;return s+=e-t.length,z=Fr,z=[Pt(),Pt()],z.position0=0,z.position1=0,z.postBundlePosition=s,s=r,D()};V[255]=t=>t.length==4?new Date((t[0]*16777216+(t[1]<<16)+(t[2]<<8)+t[3])*1e3):t.length==8?new Date(((t[0]<<22)+(t[1]<<14)+(t[2]<<6)+(t[3]>>2))/1e6+((t[3]&3)*4294967296+t[4]*16777216+(t[5]<<16)+(t[6]<<8)+t[7])*1e3):t.length==12?new Date(((t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3])/1e6+((t[4]&128?-281474976710656:0)+t[6]*1099511627776+t[7]*4294967296+t[8]*16777216+(t[9]<<16)+(t[10]<<8)+t[11])*1e3):new Date("invalid");function Xt(t){let e=te,r=s,n=N,i=K,l=ee,u=X,g=z,p=new Uint8Array(x.slice(0,te)),_=S,E=S.slice(0,S.length),k=F,A=de,I=t();return te=e,s=r,N=n,K=i,ee=l,X=u,z=g,x=p,de=A,S=_,S.splice(0,S.length,...E),F=k,b=new DataView(x.buffer,x.byteOffset,x.byteLength),I}function Ze(){x=null,X=null,S=null}const nt=new Array(147);for(let t=0;t<256;t++)nt[t]=+("1e"+Math.floor(45.15-t*.30103));var De=new ve({useRecords:!1});const $r=De.unpack;De.unpackMultiple;De.unpack;let Vr=new Float32Array(1);new Uint8Array(Vr.buffer,0,4);let Ee;try{Ee=new TextEncoder}catch{}let Ke,Yt;const Re=typeof Buffer!="undefined",Oe=Re?Buffer.allocUnsafeSlow:Uint8Array,Qt=Re?Buffer:Uint8Array,Dt=Re?4294967296:2144337920;let o,we,P,a=0,L,j=null;const qr=61440,Nr=/[\u0080-\uFFFF]/,fe=Symbol("record-id");class Jr extends ve{constructor(e){super(e);this.offset=0;let r,n,i,l,u=0,g=Qt.prototype.utf8Write?function(f,y,d){return o.utf8Write(f,y,d)}:Ee&&Ee.encodeInto?function(f,y){return Ee.encodeInto(f,o.subarray(y)).written}:!1,p=this;e||(e={});let _=e&&e.sequential,E=e.structures||e.saveStructures,k=e.maxSharedStructures;if(k==null&&(k=E?32:0),k>8160)throw new Error("Maximum maxSharedStructure is 8160");let A=e.maxOwnStructures;A==null&&(A=E?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let I=k>32||A+k>64,$=k+64,H=k+A+64;if(H>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let q=[],ie=0,Z=0;this.pack=this.encode=function(f,y){if(o||(o=new Oe(8192),P=new DataView(o.buffer,0,8192),a=0),L=o.length-10,L-a<2048?(o=new Oe(o.length),P=new DataView(o.buffer,0,o.length),L=o.length-10,a=0):a=a+7&2147483640,r=a,l=p.structuredClone?new Map:null,p.bundleStrings&&typeof f!="string"?(j=[],j.size=1/0):j=null,i=p.structures,i){i.uninitialized&&(i=p._mergeStructures(p.getStructures()));let d=i.sharedLength||0;if(d>k)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+i.sharedLength);if(!i.transitions){i.transitions=Object.create(null);for(let c=0;c<d;c++){let h=i[c];if(!h)continue;let U,v=i.transitions;for(let w=0,R=h.length;w<R;w++){let B=h[w];U=v[B],U||(U=v[B]=Object.create(null)),v=U}v[fe]=c+64}u=d}_||(i.nextId=d+64)}n&&(n=!1);try{if(T(f),j&&jt(r,T),p.offset=a,l&&l.idsToInsert){a+=l.idsToInsert.length*6,a>L&&se(a),p.offset=a;let d=Zr(o.subarray(r,a),l.idsToInsert);return l=null,d}return y&Kr?(o.start=r,o.end=a,o):o.subarray(r,a)}finally{if(i){Z<10&&Z++;let d=i.sharedLength||k;if(i.length>d&&(i.length=d),ie>1e4)i.transitions=null,Z=0,ie=0,q.length>0&&(q=[]);else if(q.length>0&&!_){for(let c=0,h=q.length;c<h;c++)q[c][fe]=0;q=[]}if(n&&p.saveStructures){let c=o.subarray(r,a);return p.saveStructures(i,u)===!1?(p._mergeStructures(p.getStructures()),p.pack(f)):(u=d,c)}}y&Gr&&(a=r)}};const T=f=>{a>L&&(o=se(a));var y=typeof f,d;if(y==="string"){let c=f.length;if(j&&c>=4&&c<4096){if((j.size+=c)>qr){let w,R=(j[0]?j[0].length*3+j[1].length:0)+10;a+R>L&&(o=se(a+R)),j.position?(o[a]=200,a+=3,o[a++]=98,w=a-r,a+=4,jt(r,T),P.setUint16(w+r-3,a-r-w)):(o[a++]=214,o[a++]=98,w=a-r,a+=4),j=["",""],j.size=0,j.position=w}let v=Nr.test(f);j[v?0:1]+=f,o[a++]=193,T(v?-c:c);return}let h;c<32?h=1:c<256?h=2:c<65536?h=3:h=5;let U=c*3;if(a+U>L&&(o=se(a+U)),c<64||!g){let v,w,R,B=a+h;for(v=0;v<c;v++)w=f.charCodeAt(v),w<128?o[B++]=w:w<2048?(o[B++]=w>>6|192,o[B++]=w&63|128):(w&64512)===55296&&((R=f.charCodeAt(v+1))&64512)===56320?(w=65536+((w&1023)<<10)+(R&1023),v++,o[B++]=w>>18|240,o[B++]=w>>12&63|128,o[B++]=w>>6&63|128,o[B++]=w&63|128):(o[B++]=w>>12|224,o[B++]=w>>6&63|128,o[B++]=w&63|128);d=B-a-h}else d=g(f,a+h,U);d<32?o[a++]=160|d:d<256?(h<2&&o.copyWithin(a+2,a+1,a+1+d),o[a++]=217,o[a++]=d):d<65536?(h<3&&o.copyWithin(a+3,a+2,a+2+d),o[a++]=218,o[a++]=d>>8,o[a++]=d&255):(h<5&&o.copyWithin(a+5,a+3,a+3+d),o[a++]=219,P.setUint32(a,d),a+=4),a+=d}else if(y==="number")if(f>>>0===f)f<64?o[a++]=f:f<256?(o[a++]=204,o[a++]=f):f<65536?(o[a++]=205,o[a++]=f>>8,o[a++]=f&255):(o[a++]=206,P.setUint32(a,f),a+=4);else if(f>>0===f)f>=-32?o[a++]=256+f:f>=-128?(o[a++]=208,o[a++]=f+256):f>=-32768?(o[a++]=209,P.setInt16(a,f),a+=2):(o[a++]=210,P.setInt32(a,f),a+=4);else{let c;if((c=this.useFloat32)>0&&f<4294967296&&f>=-2147483648){o[a++]=202,P.setFloat32(a,f);let h;if(c<4||(h=f*nt[(o[a]&127)<<1|o[a+1]>>7])>>0===h){a+=4;return}else a--}o[a++]=203,P.setFloat64(a,f),a+=8}else if(y==="object")if(!f)o[a++]=192;else{if(l){let h=l.get(f);if(h){if(!h.id){let U=l.idsToInsert||(l.idsToInsert=[]);h.id=U.push(h)}o[a++]=214,o[a++]=112,P.setUint32(a,h.id),a+=4;return}else l.set(f,{offset:a-r})}let c=f.constructor;if(c===Object)bt(f,!0);else if(c===Array){d=f.length,d<16?o[a++]=144|d:d<65536?(o[a++]=220,o[a++]=d>>8,o[a++]=d&255):(o[a++]=221,P.setUint32(a,d),a+=4);for(let h=0;h<d;h++)T(f[h])}else if(c===Map){d=f.size,d<16?o[a++]=128|d:d<65536?(o[a++]=222,o[a++]=d>>8,o[a++]=d&255):(o[a++]=223,P.setUint32(a,d),a+=4);for(let[h,U]of f)T(h),T(U)}else{for(let h=0,U=Ke.length;h<U;h++){let v=Yt[h];if(f instanceof v){let w=Ke[h];if(w.write){w.type&&(o[a++]=212,o[a++]=w.type,o[a++]=0),T(w.write.call(this,f));return}let R=o,B=P,G=a;o=null;let ae;try{ae=w.pack.call(this,f,ge=>(o=R,R=null,a+=ge,a>L&&se(a),{target:o,targetView:P,position:a-ge}),T)}finally{R&&(o=R,P=B,a=G,L=o.length-10)}ae&&(ae.length+a>L&&se(ae.length+a),a=Hr(ae,o,a,w.type));return}}bt(f,!f.hasOwnProperty)}}else if(y==="boolean")o[a++]=f?195:194;else if(y==="bigint"){if(f<BigInt(1)<<BigInt(63)&&f>=-(BigInt(1)<<BigInt(63)))o[a++]=211,P.setBigInt64(a,f);else if(f<BigInt(1)<<BigInt(64)&&f>0)o[a++]=207,P.setBigUint64(a,f);else if(this.largeBigIntToFloat)o[a++]=203,P.setFloat64(a,Number(f));else throw new RangeError(f+" was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");a+=8}else if(y==="undefined")this.encodeUndefinedAsNil?o[a++]=192:(o[a++]=212,o[a++]=0,o[a++]=0);else if(y==="function")T(this.writeFunction&&this.writeFunction());else throw new Error("Unknown type: "+y)},bt=this.useRecords===!1?this.variableMapSize?f=>{let y=Object.keys(f),d=y.length;d<16?o[a++]=128|d:d<65536?(o[a++]=222,o[a++]=d>>8,o[a++]=d&255):(o[a++]=223,P.setUint32(a,d),a+=4);let c;for(let h=0;h<d;h++)T(c=y[h]),T(f[c])}:(f,y)=>{o[a++]=222;let d=a-r;a+=2;let c=0;for(let h in f)(y||f.hasOwnProperty(h))&&(T(h),T(f[h]),c++);o[d+++r]=c>>8,o[d+r]=c&255}:e.progressiveRecords&&!I?(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=a++-r,U;for(let v in f)if(y||f.hasOwnProperty(v)){if(d=c[v],d)c=d;else{let w=Object.keys(f),R=c;c=i.transitions;let B=0;for(let G=0,ae=w.length;G<ae;G++){let ge=w[G];d=c[ge],d||(d=c[ge]=Object.create(null),B++),c=d}h+r+1==a?(a--,$e(c,w,B)):St(c,w,h,B),U=!0,c=R[v]}T(f[v])}if(!U){let v=c[fe];v?o[h+r]=v:St(c,Object.keys(f),h,0)}}:(f,y)=>{let d,c=i.transitions||(i.transitions=Object.create(null)),h=0;for(let v in f)(y||f.hasOwnProperty(v))&&(d=c[v],d||(d=c[v]=Object.create(null),h++),c=d);let U=c[fe];U?U>=96&&I?(o[a++]=((U-=96)&31)+96,o[a++]=U>>5):o[a++]=U:$e(c,c.__keys__||Object.keys(f),h);for(let v in f)(y||f.hasOwnProperty(v))&&T(f[v])},se=f=>{let y;if(f>16777216){if(f-r>Dt)throw new Error("Packed buffer would be larger than maximum buffer size");y=Math.min(Dt,Math.round(Math.max((f-r)*(f>67108864?1.25:2),4194304)/4096)*4096)}else y=(Math.max(f-r<<2,o.length-1)>>12)+1<<12;let d=new Oe(y);return P=new DataView(d.buffer,0,y),o.copy?o.copy(d,0,r,f):d.set(o.slice(r,f)),a-=r,r=0,L=d.length-10,o=d},$e=(f,y,d)=>{let c=i.nextId;c||(c=64),c<$&&this.shouldShareStructure&&!this.shouldShareStructure(y)?(c=i.nextOwnId,c<H||(c=$),i.nextOwnId=c+1):(c>=H&&(c=$),i.nextId=c+1);let h=y.highByte=c>=96&&I?c-96>>5:-1;f[fe]=c,f.__keys__=y,i[c-64]=y,c<$?(y.isShared=!0,i.sharedLength=c-63,n=!0,h>=0?(o[a++]=(c&31)+96,o[a++]=h):o[a++]=c):(h>=0?(o[a++]=213,o[a++]=114,o[a++]=(c&31)+96,o[a++]=h):(o[a++]=212,o[a++]=114,o[a++]=c),d&&(ie+=Z*d),q.length>=A&&(q.shift()[fe]=0),q.push(f),T(y))},St=(f,y,d,c)=>{let h=o,U=a,v=L,w=r;o=we,a=0,r=0,o||(we=o=new Oe(8192)),L=o.length-10,$e(f,y,c),we=o;let R=a;if(o=h,a=U,L=v,r=w,R>1){let B=a+R-1;B>L&&se(B);let G=d+r;o.copyWithin(G+R,G+1,a),o.set(we.slice(0,R),G),a=B}else o[d+r]=we[0]}}useBuffer(e){o=e,P=new DataView(o.buffer,o.byteOffset,o.byteLength),a=0}clearSharedData(){this.structures&&(this.structures=[])}}Yt=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,qt];Ke=[{pack(t,e,r){let n=t.getTime()/1e3;if((this.useTimestamp32||t.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:i,targetView:l,position:u}=e(6);i[u++]=214,i[u++]=255,l.setUint32(u,n)}else if(n>0&&n<17179869184){let{target:i,targetView:l,position:u}=e(10);i[u++]=215,i[u++]=255,l.setUint32(u,t.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),l.setUint32(u+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),r(this.onInvalidDate());let{target:i,targetView:l,position:u}=e(3);i[u++]=212,i[u++]=255,i[u++]=255}else{let{target:i,targetView:l,position:u}=e(15);i[u++]=199,i[u++]=12,i[u++]=255,l.setUint32(u,t.getMilliseconds()*1e6),l.setBigInt64(u+4,BigInt(Math.floor(n)))}}},{pack(t,e,r){let n=Array.from(t),{target:i,position:l}=e(this.structuredClone?3:0);this.structuredClone&&(i[l++]=212,i[l++]=115,i[l++]=0),r(n)}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=101,n[i++]=0),r([t.name,t.message])}},{pack(t,e,r){let{target:n,position:i}=e(this.structuredClone?3:0);this.structuredClone&&(n[i++]=212,n[i++]=120,n[i++]=0),r([t.source,t.flags])}},{pack(t,e){this.structuredClone?Rt(t,16,e):Mt(Re?Buffer.from(t):new Uint8Array(t),e)}},{pack(t,e){let r=t.constructor;r!==Qt&&this.structuredClone?Rt(t,Gt.indexOf(r.name),e):Mt(t,e)}},{pack(t,e){let{target:r,position:n}=e(1);r[n]=193}}];function Rt(t,e,r,n){let i=t.byteLength;if(i+1<256){var{target:l,position:u}=r(4+i);l[u++]=199,l[u++]=i+1}else if(i+1<65536){var{target:l,position:u}=r(5+i);l[u++]=200,l[u++]=i+1>>8,l[u++]=i+1&255}else{var{target:l,position:u,targetView:g}=r(7+i);l[u++]=201,g.setUint32(u,i+1),u+=4}l[u++]=116,l[u++]=e,l.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),u)}function Mt(t,e){let r=t.byteLength;var n,i;if(r<256){var{target:n,position:i}=e(r+2);n[i++]=196,n[i++]=r}else if(r<65536){var{target:n,position:i}=e(r+3);n[i++]=197,n[i++]=r>>8,n[i++]=r&255}else{var{target:n,position:i,targetView:l}=e(r+5);n[i++]=198,l.setUint32(i,r),i+=4}n.set(t,i)}function Hr(t,e,r,n){let i=t.length;switch(i){case 1:e[r++]=212;break;case 2:e[r++]=213;break;case 4:e[r++]=214;break;case 8:e[r++]=215;break;case 16:e[r++]=216;break;default:i<256?(e[r++]=199,e[r++]=i):i<65536?(e[r++]=200,e[r++]=i>>8,e[r++]=i&255):(e[r++]=201,e[r++]=i>>24,e[r++]=i>>16&255,e[r++]=i>>8&255,e[r++]=i&255)}return e[r++]=n,e.set(t,r),r+=i,r}function Zr(t,e){let r,n=e.length*6,i=t.length-n;for(e.sort((l,u)=>l.offset>u.offset?1:-1);r=e.pop();){let l=r.offset,u=r.id;t.copyWithin(l+n,l,i),n-=6;let g=l+n;t[g++]=214,t[g++]=105,t[g++]=u>>24,t[g++]=u>>16&255,t[g++]=u>>8&255,t[g++]=u&255,i=l}return t}function jt(t,e){P.setUint32(j.position+t,a-j.position-t);let r=j;j=null,e(r[0]),e(r[1])}let er=new Jr({useRecords:!1});er.pack;er.pack;const Kr=512,Gr=1024;var Xr="https://testing.izhenxiang.com/",tr="https://i-desk-ver.oss-cn-beijing.aliyuncs.com/",rr,Yr=async t=>{var e,r;return t=await t,r=[],e=r.push.bind(r),t.on("data",e),new Promise((n,i)=>(t.on("end",()=>{n(Buffer.concat(r))}),t.on("error",i)))},Qr=t=>Yr(nr(t));rr=t=>{var e;return e=m.net.request(t),e.end(),new Promise((r,n)=>(e.on("error",i=>{n(i)}),e.on("response",i=>{if(i.statusCode!==200){n(i);return}r(i)})))};var nr=t=>rr(t),_e={};_e.version="1.0.0";_e.encode=function(e){return e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};_e.decode=function(e){return e+=Array(5-e.length%4).join("="),e=e.replace(/\-/g,"+").replace(/\_/g,"/"),new Buffer(e,"base64")};_e.validate=function(e){return/^[A-Za-z0-9\-_]+$/.test(e)};var Ne=_e;var ue,ir,Be,Me,it,be,sr,ar,st,Pe,lr,at,lt,Ie,Ge,je;ar=Dr.promisify(zt.brotliDecompress);var en=()=>(m.app.relaunch(),m.app.exit());ue=J.join(Lt.ROOT,"v");Q.mkdirSync(ue,{recursive:!0});ir="sha512";Ie=void 0;var or=()=>{pe(Ie),Ie=void 0},fr=()=>{or(),Ie=he.update({width:400,height:500,resizable:!1})};Pe=t=>Qr(tr+t);lr=t=>{var e;return e=Cr.createHash(ir),new Promise(r=>Q.createReadStream(t).on("data",e.update.bind(e)).on("end",()=>{r(e.digest().slice(0,8))}))};Ge=(()=>{var t;return{v:t}=Te.default,t&&re.decode(t)})();var ur=()=>re.PACKAGE_JSON().version;je=re.ver_int(ur());be=0;lt=async()=>{var t;return t=re.encode(parseInt(new Date/1e3)),be=await Pe("v?"+t),be};sr=async t=>{var e,r,n,i,l,u,g,p,_,E,k,A,I,$,H,q,ie,Z;if(t||(t=be||await lt()),Z=t.readUintBE(0,6),!(je>=Z)){if(n=re.encode(Z),e=J.join(ue,n),Q.existsSync(J.join(e,re.package_json))&&Z===Ge)return e;for(q=Ne.encode(await Pe(Ne.encode(t))),[r,i,g]=$r(await ar(await Pe(q))),A=T=>me.mkdir(J.join(e,T),{recursive:!0}),await Promise.all(r.map(A)),$=J.dirname(__dirname),I=_=0,E=i.length;_<E;I=++_)if(p=i[I],l=J.join(e,p),u=g[I],H=async T=>Buffer.compare(u,await lr(T))===0,!(Q.existsSync(l)&&await H(l))){if(await A(J.dirname(p)),k=J.join($,p),Q.existsSync(k)&&await H(k)){await me.copyFile(k,l);continue}if(ie=Q.createWriteStream(l),(await nr(tr+Ne.encode(u))).pipe(zt.createBrotliDecompress()).pipe(ie),await new Promise(T=>{ie.on("finish",T)}),!await H(l))return}return Te.default.v=n,Ge=Z,e}};var cr=async()=>{var t,e,r;try{t=await lt()}catch(n){return e=n,console.trace(e),0}return r=je<t.readUintBE(0,6),r?t:0};st=async()=>{var t;(t=await cr())&&await dr(t)};setInterval(st,864e5);Be=Me=it=void 0;at=()=>Me=new Promise(t=>it=t);at();var tn=()=>Me,dr=(...t)=>(Be||(Be=sr(...t).then(async e=>{e&&(it([be,JSON.parse(await me.readFile(J.join(e,re.package_json),"utf8")).description]),at())}).finally(()=>{Be=!1})),Me);setTimeout(async()=>{var t,e,r,n;if(Q.existsSync(ue)){n=await me.readdir(ue,{withFileTypes:!0});for(e of n)e.isDirectory()&&({name:r}=e,re.decode(r)<je&&await me.rm(J.join(ue,r),{recursive:!0,force:!0}))}if(t=parseInt(new Date/864e5),t!==Te.default.update_check)return Te.default.update_check=t,await st()},15e3);var rn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",relaunch:en,x:or,show:fr,ver_now:ur,update_check:cr,update_promise:tn,update:dr});var ze,ot,xr,hr,ft,nn,ut,pr,gr,Se;Wt.default.platform();({Menu:ot,Tray:xr,app:hr,globalShortcut:nn}=require("electron"));Se=new xr(J.join(et,"trayTemplate.png"));ut=[{label:"\u5A92\u4F53\u5E93",click:()=>{m.shell.openExternal(Xr+"?user_token="+Vt.ID)}},{label:"\u68C0\u6D4B\u66F4\u65B0",click:fr},{type:"separator"}];ze=pr=ot.buildFromTemplate([{label:"\u663E\u793A\u754C\u9762",click:ce},...ut,{label:"\u9000\u51FA",click:()=>hr.quit()}]);gr=ot.buildFromTemplate(ut);ft=["click",()=>{ce()}];Se.on("right-click",t=>{Se.popUpContextMenu(ze)});var sn=()=>{Se.off(...ft),ze=gr},wr=()=>{Se.on(...ft),ze=pr};var yr;yr=t=>{var e,r,n,i,l,u,g,p;t&&(t.devToolsWebContents||({webContents:l}=t,e=new m.BrowserWindow({minimizable:!1,maximizable:!1}),[i,r]=t.getSize(),[g,p]=t.getPosition(),{width:u,height:n}=m.screen.getPrimaryDisplay().workArea,l.setDevToolsWebContents(e.webContents),l.openDevTools({mode:"detach"}),i>r?(p=0,i=0,r+=20,n-=r):(g=0,r=0,u-=i),e.setPosition(i,r),t.setPosition(g,p),e.setSize(u,n),t.focus()))};var an=()=>{m.globalShortcut.register("CmdOrCtrl+Alt+I",()=>yr(m.BrowserWindow.getFocusedWindow()))},ct=t=>{m.BrowserWindow.getAllWindows().forEach(e=>{var r,n;if(n=e.webContents.getURL(),n){if({hash:r}=new URL(n),r=r.slice(1),r.startsWith("main")){if(t){e[t]();return}else e.hide();return}if(r.startsWith("camera"))return}pe(e)})},ln=()=>{m.BrowserWindow.getAllWindows().forEach(t=>{var e,r;if(r=t.webContents.getURL(),r&&({hash:e}=new URL(r),e=e.slice(1),e.startsWith("main"))){t.hide();return}pe(t)})},dt,Le,mr,We,ye,Fe,oe,O,vr;({camera:mr}=he);O=void 0;oe=void 0;dt=204;Fe=We=dt;ye=void 0;var on=(t,e)=>{t+=ye[0],e+=ye[1];try{O.setBounds({x:Math.round(t),y:Math.round(e),width:Fe,height:We})}catch{console.error(t,e,ye)}return[t,e]},fn=()=>{ye=O.getPosition()},Ae=()=>{O&&!O.isDestroyed()&&O.getSize()[0]!==800&&(oe=O.getPosition()),pe(O)},un=t=>{var e,r;Fe=We=t,r=O.getSize()[0],r!==t&&(oe=O.getPosition(),e=Math.round((t-r)/2),O.setBounds({x:oe[0]-e,y:oe[1]-e,width:t,height:t}))};Le=!1;var cn=vr=(t,e,r=!1)=>{O&&!O.isDestroyed()||(Fe=t,We=e,O=mr({width:t,height:e,shadow:!1,center:!0,roundedCorners:!1,resizable:!1,hasShadow:!1,transparent:!0}),Le&&xt())},dn=(t,e)=>{var r,n,i,l;O&&!O.isDestroyed()||(e=e||dt,vr(e,e,t),oe?[Ae,l]=oe:({width:i,height:r}=m.screen.getPrimaryDisplay().size,n=62,Ae=n,l=r-n-e),O.setPosition(Ae,l))},xt=()=>{O&&!O.isDestroyed()&&(O.setAlwaysOnTop(!0),O.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0})),Le=!0},br=()=>{O&&!O.isDestroyed()&&(O.setAlwaysOnTop(!1),O.setVisibleOnAllWorkspaces(!1)),Le=!1},xn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",move:on,init:fn,get x(){return Ae},size:un,default:cn,circle:dn,top:xt,untop:br}),ht=new Proxy({},{get:(t,e)=>()=>{var r,n,i;return{width:n,height:r}=m.screen.getPrimaryDisplay().size,i=he[e]({width:n,height:r,roundedCorners:!1,transparent:!0,resizable:!1,hasShadow:!1}),i.setAlwaysOnTop(!0,"screen-saver"),i.setPosition(0,0),i.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0}),i}}),pt,xe,Xe,gt,Sr,kr,C;({recbar:kr}=he);C=void 0;xe=void 0;({draw:Sr}=ht);var hn=()=>{xe||(xe=Sr(),_r())},_r=()=>{ne(),xe.focus()},pn=()=>{pe(xe),xe=void 0};Xe=["CommandOrControl+R","CommandOrControl+W","CommandOrControl+Q","Alt+F4","F5"];pt={"browser-window-focus":()=>{var t;for(t of Xe)m.globalShortcut.register(t,()=>{})},"browser-window-blur":()=>{var t;for(t of Xe)m.globalShortcut.unregister(t,()=>{})}};var Ur=t=>{var e,r,n,i,l,u,g,p;l=Object.entries(pt);for(p of l)[n,e]=p,m.app.on(n,e);return sn(),r=48,i={roundedCorners:!1,transparent:!0,shadow:!1,resizable:!1,hasShadow:!1,width:t,height:r},C=kr(i),C.on("close",()=>C=void 0),{width:g,height:u}=m.screen.getPrimaryDisplay().workArea,C.setBounds({x:Math.round((g-t)/2),y:u-28-r,width:t,height:r}),ne(),xt(),new Promise(_=>C.webContents.on("did-finish-load",()=>{ne(),C.focus(),_(C)}))},ne=()=>{C&&(C.setAlwaysOnTop(!0,"screen-saver"),C.moveTop())},gn=()=>{var t,e,r,n,i;n=C.getPosition(),[r,e]=C.getSize(),[i,t]=C.size,C.setBounds({x:n[0]+r-i,y:n[1],width:i,height:t})},wn=()=>{var t,e,r,n;e=C.getPosition(),C.size=r=C.getSize(),n=170,t=48,C.setBounds({x:e[0]+r[0]-n,y:e[1],width:n,height:t})};gt=()=>{var t,e,r,n;r=Object.entries(pt);for(n of r)[e,t]=n,m.app.off(e,t);wr(),br()};var yn=()=>{gt(),ct("show")},mn=()=>{gt()},vn=()=>{C.hide()},bn=async()=>{var t,e;e=await m.desktopCapturer.getSources({types:["screen"],thumbnailSize:{width:0,height:0}});for(t of e)return t.id},Sn=()=>{m.BrowserWindow.getAllWindows().forEach(t=>t.hide())},kn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",draw:hn,draw_top:_r,draw_x:pn,\u5DE5\u5177\u6761:Ur,top:ne,expand:gn,left:wn,cancel:yn,end:mn,hide:vn,screen_source:bn,stop:Sn}),Or,W;({count_down:Or}=he);W=void 0;var Er=()=>{var t;if(W){W.focus();return}t=240,W=Or({width:t,height:t,transparent:!0,resizable:!1,hasShadow:!1}),W.on("close",()=>{W=void 0}),W.setAlwaysOnTop(!0,"screen-saver"),W.webContents.on("did-finish-load",()=>{var e,r;r=m.BrowserWindow.getAllWindows();for(e of r)e.webContents.getURL().endsWith("/#main")||e.setVisibleOnAllWorkspaces(!0,{visibleOnFullScreen:!0});W.moveTop(),W.focus()})},_n={hide:()=>{W!=null&&W.hide()},close:()=>{W!=null&&W.close(),ne()}};var Ce,wt,yt,mt,vt;Ce=yt=wt=void 0;mt=()=>{wt=new Promise(t=>{yt=t})};mt();vt=t=>{yt(t),mt(),pe(Ce)};var Un=()=>{vt(!0)},On=()=>{vt(!1)},En=t=>(Ce=ht["confirm_"+t]({width:275,height:190,modal:!0,isAlwaysOnTop:!0,visibleOnAllWorkspaces:!0}),Ce.setAlwaysOnTop(!0,"screen-saver"),wt),Bn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",y:Un,n:On,show:En}),An=t=>{Vt.ID=t},Tn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ID:An});var Br,Y;({area:Br}=ht);Y=void 0;var Pn=()=>{Y=Br(),Y.on("did-finish-load",ne),Y.on("focus",ne),Y.setAlwaysOnTop(!0,"pop-up-menu"),Y.on("close",()=>Y=void 0)},In=()=>{Y.setIgnoreMouseEvents(!0,{forward:!0}),Er(),ne()},Cn=()=>{var t,e;return{x:t,y:e}=m.screen.getCursorScreenPoint(),[t,e]};function Dn(t,e,r,n){var i,l;i=t!=="camera",l=n===1&&i,l?Pn():Er(),Ur(t!=="camera"?552:452)}var Rn=(t,e,r,n)=>{ct(),Dn(t,e,r,n)},Mn=t=>{m.shell.openExternal(t)},jn=()=>Lt.ROOT,zn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",userData:jn,close:ct,x:ln,count_down:_n,confirm:Bn,auto_update:rn,recbar:kn,USER:Tn,camera:xn,area:In,main:ce,mouse:Cn,rec:Rn,open:Mn});process.on("exit",()=>{m.app.quit()});m.app.requestSingleInstanceLock()||(m.app.quit(),process.exit(0));(async()=>{var t;t=await Promise.resolve().then(function(){return require("./o.js")}),t.init({dsn:"https://54c0fbe278e049c8a9635fc0fa612836@sentry.dalukuankuan.com/6"})})();m.app.commandLine.appendSwitch("js-flags","--expose_gc --max-old-space-size=512");(()=>{var t,e,r,n,i,l,u;r=Wt.default.platform(),ce(),r==="darwin"?(n=m.app.dock)!=null&&n.hide():r.startsWith("win")&&process,t=(g,p)=>{var _,E,k,A;p instanceof Function&&m.ipcMain.handle(g.join("."),(I,$)=>p(...$)),k=Object.entries(p);for(A of k)[E,_]=A,t([...g,E],_)},i=Object.entries(zn);for(u of i)[e,l]=u,t([e],l);wr(),an()})();Mr(m.app,{"window-all-closed":()=>{if(process.platform!=="darwin")return m.app.quit()},"second-instance":()=>{var t;t=!0,m.BrowserWindow.getAllWindows().forEach(e=>{var r,n;n=e.webContents.getURL(),{hash:r}=new URL(n),r.startsWith("#recbar")&&(t=!1)}),t&&ce()},activate:ce});
