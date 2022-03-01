import{i as ue}from"./1.js";import"./0.js";import{g as Pe,a as $e,c as de}from"./f.js";import{b as D,w as W,d as ne,e as se,f as Re,g as Se,i as B,t as re,h as ee,j as fe,p as T,s as U,n as Ce,k as he,c as je,l as ge,m as ce,q as ve,o as ie,u as De,v as Ae,x as Ie,y as Be,z as Te,A as Ve}from"./n.js";import{b as Ye}from"./$0.js";import{_ as Xe}from"./d.js";import"./k.js";var We={},Ue=Object.defineProperty,Fe=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,me=(e,t,a)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,be=(e,t)=>{for(var a in t||(t={}))qe.call(t,a)&&me(e,a,t[a]);if(pe)for(var a of pe(t))Ge.call(t,a)&&me(e,a,t[a]);return e},ye=(e,t)=>Fe(e,ke(t));const xe=Symbol("Vue3DraggableResizable");function Oe(e){const t=window.getComputedStyle(e);return{width:parseFloat(t.getPropertyValue("width")),height:parseFloat(t.getPropertyValue("height"))}}function Ee(e){return(t,a,i)=>{!t||(typeof a=="string"&&(a=[a]),a.forEach(n=>t[e](n,i,{passive:!1})))}}const G=Ee("addEventListener"),E=Ee("removeEventListener");function Ne(e){if(e&&e.length>0){const t=[];return e.forEach(a=>{oe.includes(a)&&!t.includes(a)&&t.push(a)}),t}else return[]}function Je(){return String(Math.random()).substr(2)+String(Date.now())}function Ke(e,t,a){if(e.disabled.value)return null;const i={row:[],col:[]},{parentWidth:n,parentHeight:r}=t;i.row.push(...e.adsorbRows),i.col.push(...e.adsorbCols),e.adsorbParent.value&&(i.row.push(0,r.value,r.value/2),i.col.push(0,n.value,n.value/2));const o=e.getPositionStore(a);return Object.values(o).forEach(({x:l,y:s,w:u,h})=>{i.row.push(s,s+h,s+h/2),i.col.push(l,l+u,l+u/2)}),{row:i.row.reduce((l,s)=>ye(be({},l),{[s]:{min:s-5,max:s+5,value:s}}),{}),col:i.col.reduce((l,s)=>ye(be({},l),{[s]:{min:s-5,max:s+5,value:s}}),{})}}var Qe=Object.defineProperty,we=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,ze=(e,t,a)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_e=(e,t)=>{for(var a in t||(t={}))Ze.call(t,a)&&ze(e,a,t[a]);if(we)for(var a of we(t))et.call(t,a)&&ze(e,a,t[a]);return e};function S(e){const t=ne(e);return[t,i=>(t.value=i,i)]}function tt(e,t){const[a,i]=S(e.initW),[n,r]=S(e.initH),[o,d]=S(e.x),[l,s]=S(e.y),[u,h]=S(e.active),[m,c]=S(!1),[M,L]=S(!1),[_,y]=S(""),[N,b]=S(1/0),[k,q]=S(1/0),[x,R]=S(e.minW),[P,V]=S(e.minH),$=D(()=>n.value/a.value);return W(a,f=>{t("update:w",f)},{immediate:!0}),W(n,f=>{t("update:h",f)},{immediate:!0}),W(l,f=>{t("update:y",f)}),W(o,f=>{t("update:x",f)}),W(u,(f,Y)=>{t("update:active",f),!Y&&f?t("activated"):Y&&!f&&t("deactivated")}),W(()=>e.active,f=>{h(f)}),{id:Je(),width:a,height:n,top:l,left:o,enable:u,dragging:m,resizing:M,resizingHandle:_,resizingMaxHeight:k,resizingMaxWidth:N,resizingMinWidth:x,resizingMinHeight:P,aspectRatio:$,setEnable:h,setDragging:c,setResizing:L,setResizingHandle:y,setResizingMaxHeight:q,setResizingMaxWidth:b,setResizingMinWidth:R,setResizingMinHeight:V,setWidth:f=>i(Math.floor(f)),setHeight:f=>r(Math.floor(f)),setTop:f=>s(Math.floor(f)),setLeft:f=>d(Math.floor(f))}}function at(e){const t=ne(0),a=ne(0);return se(()=>{if(e.value&&e.value.parentElement){const{width:i,height:n}=Oe(e.value.parentElement);t.value=i,a.value=n}}),{parentWidth:t,parentHeight:a}}function nt(e,t,a){const{width:i,height:n,left:r,top:o,resizingMaxWidth:d,resizingMaxHeight:l,resizingMinWidth:s,resizingMinHeight:u}=a,{setWidth:h,setHeight:m,setTop:c,setLeft:M}=a,{parentWidth:L,parentHeight:_}=t,y={minWidth:D(()=>s.value),minHeight:D(()=>u.value),maxWidth:D(()=>{let b=1/0;return e.parent&&(b=Math.min(L.value,d.value)),b}),maxHeight:D(()=>{let b=1/0;return e.parent&&(b=Math.min(_.value,l.value)),b}),minLeft:D(()=>e.parent?0:-1/0),minTop:D(()=>e.parent?0:-1/0),maxLeft:D(()=>e.parent?L.value-i.value:1/0),maxTop:D(()=>e.parent?_.value-n.value:1/0)},N={setWidth(b){return e.disabledW?i.value:h(Math.min(y.maxWidth.value,Math.max(y.minWidth.value,b)))},setHeight(b){return e.disabledH?n.value:m(Math.min(y.maxHeight.value,Math.max(y.minHeight.value,b)))},setTop(b){return e.disabledY?o.value:c(Math.min(y.maxTop.value,Math.max(y.minTop.value,b)))},setLeft(b){return e.disabledX?r.value:M(Math.min(y.maxLeft.value,Math.max(y.minLeft.value,b)))}};return _e(_e({},y),N)}const le=["mousedown","touchstart"],J=["mouseup","touchend"],K=["mousemove","touchmove"];function te(e){return"touches"in e?[e.touches[0].pageX,e.touches[0].pageY]:[e.pageX,e.pageY]}function it(e,t,a,i,n,r,o){const{left:d,top:l,width:s,height:u,dragging:h,id:m}=t,{setDragging:c,setEnable:M,setResizing:L,setResizingHandle:_}=t,{setTop:y,setLeft:N}=a;let b=0,k=0,q=0,x=0,R=null;const P=document.documentElement,V=p=>{const H=p.target;e.value?.contains(H)||(M(!1),c(!1),L(!1),_(""))},$=()=>{c(!1),E(P,J,$),E(P,K,f),R=null,r&&(r.updatePosition(m,{x:d.value,y:l.value,w:s.value,h:u.value}),r.setMatchedLine(null))},f=p=>{if(p.preventDefault(),!(h.value&&e.value))return;const[H,C]=te(p),Q=H-q,Z=C-x;let O=b+Q,j=k+Z;if(R!==null){const A={col:[O,O+s.value/2,O+s.value],row:[j,j+u.value/2,j+u.value]},I={row:A.row.map((w,v)=>{let g=null;return Object.values(R.row).forEach(z=>{w>=z.min&&w<=z.max&&(g=z.value)}),g!==null&&(v===0?j=g:v===1?j=Math.floor(g-u.value/2):v===2&&(j=Math.floor(g-u.value))),g}).filter(w=>w!==null),col:A.col.map((w,v)=>{let g=null;return Object.values(R.col).forEach(z=>{w>=z.min&&w<=z.max&&(g=z.value)}),g!==null&&(v===0?O=g:v===1?O=Math.floor(g-s.value/2):v===2&&(O=Math.floor(g-s.value))),g}).filter(w=>w!==null)};r.setMatchedLine(I)}n("dragging",{x:N(O),y:y(j)})},Y=p=>{!i.value||(c(!0),b=d.value,k=l.value,q=te(p)[0],x=te(p)[1],G(P,K,f),G(P,J,$),r&&!r.disabled.value&&(R=Ke(r,o,m)))};return W(h,(p,H)=>{!H&&p?(n("drag-start",{x:d.value,y:l.value}),M(!0),c(!0)):(n("drag-end",{x:d.value,y:l.value}),c(!1))}),se(()=>{const p=e.value;!p||(p.style.left=d+"px",p.style.top=l+"px",G(P,le,V),G(p,le,Y))}),Re(()=>{!e.value||(E(P,le,V),E(P,J,$),E(P,K,f))}),{containerRef:e}}function lt(e,t,a,i,n){const{setWidth:r,setHeight:o,setLeft:d,setTop:l}=t,{width:s,height:u,left:h,top:m,aspectRatio:c}=e,{setResizing:M,setResizingHandle:L,setResizingMaxWidth:_,setResizingMaxHeight:y,setResizingMinWidth:N,setResizingMinHeight:b}=e,{parentWidth:k,parentHeight:q}=a;let x=0,R=0,P=0,V=0,$=0,f=0,Y=1,p="",H="";const C=document.documentElement,Q=A=>{A.preventDefault();let[I,w]=te(A),v=I-$,g=w-f,z=v,X=g;i.lockAspectRatio&&(v=Math.abs(v),g=v*Y,(z<0||H==="m"&&X<0)&&(v=-v,g=-g)),p==="t"?(o(R-g),l(V-(u.value-R))):p==="b"&&o(R+g),H==="l"?(r(x-v),d(P-(s.value-x))):H==="r"&&r(x+v),n("resizing",{x:h.value,y:m.value,w:s.value,h:u.value})},Z=()=>{n("resize-end",{x:h.value,y:m.value,w:s.value,h:u.value}),L(""),M(!1),_(1/0),y(1/0),N(i.minW),b(i.minH),E(C,K,Q),E(C,J,Z)},O=(A,I)=>{if(!i.resizable)return;A.stopPropagation(),L(I),M(!0),p=I[0],H=I[1],c.value&&(["tl","tm","ml","bl"].includes(I)?(p="t",H="l"):(p="b",H="r"));let w=i.minH,v=i.minW;if(w/v>c.value?v=w/c.value:w=v*c.value,N(v),b(w),parent){let z=p==="t"?m.value+u.value:q.value-m.value,X=H==="l"?h.value+s.value:k.value-h.value;i.lockAspectRatio&&(z/X<c.value?X=z/c.value:z=X*c.value),y(z),_(X)}x=s.value,R=u.value,P=h.value,V=m.value;const g=te(A);$=g[0],f=g[1],Y=c.value,n("resize-start",{x:h.value,y:m.value,w:s.value,h:u.value}),G(C,K,Q),G(C,J,Z)};return Re(()=>{E(C,J,Z),E(C,K,Q)}),{handlesFiltered:D(()=>i.resizable?Ne(i.handles):[]),resizeHandleDown:O}}function rt(e,t){const{setWidth:a,setHeight:i,setLeft:n,setTop:r}=t;W(()=>e.w,o=>{a(o)}),W(()=>e.h,o=>{i(o)}),W(()=>e.x,o=>{n(o)}),W(()=>e.y,o=>{r(o)})}var st=Object.defineProperty,He=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable,Me=(e,t,a)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ae=(e,t)=>{for(var a in t||(t={}))ot.call(t,a)&&Me(e,a,t[a]);if(He)for(var a of He(t))ut.call(t,a)&&Me(e,a,t[a]);return e};const oe=["tl","tm","tr","ml","mr","bl","bm","br"],dt={initW:{type:Number,default:null},initH:{type:Number,default:null},w:{type:Number,default:0},h:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},disabledX:{type:Boolean,default:!1},disabledY:{type:Boolean,default:!1},disabledW:{type:Boolean,default:!1},disabledH:{type:Boolean,default:!1},minW:{type:Number,default:20},minH:{type:Number,default:20},active:{type:Boolean,default:!1},parent:{type:Boolean,default:!1},handles:{type:Array,default:oe,validator:e=>Ne(e).length===e.length},classNameDraggable:{type:String,default:"draggable"},classNameResizable:{type:String,default:"resizable"},classNameDragging:{type:String,default:"dragging"},classNameResizing:{type:String,default:"resizing"},classNameActive:{type:String,default:"active"},classNameHandle:{type:String,default:"handle"},lockAspectRatio:{type:Boolean,default:!1}},ft=["activated","deactivated","drag-start","resize-start","dragging","resizing","drag-end","resize-end","update:w","update:h","update:x","update:y","update:active"],ht=Se({name:"Vue3DraggableResizable",props:dt,emits:ft,setup(e,{emit:t}){const a=tt(e,t),i=B("identity");let n=null;i===xe&&(n={updatePosition:B("updatePosition"),getPositionStore:B("getPositionStore"),disabled:B("disabled"),adsorbParent:B("adsorbParent"),adsorbCols:B("adsorbCols"),adsorbRows:B("adsorbRows"),setMatchedLine:B("setMatchedLine")});const r=ne(),o=at(r),d=nt(e,o,a);it(r,a,d,re(e,"draggable"),t,n,o);const l=lt(a,d,o,e,t);return rt(e,d),ae(ae(ae(ae({containerRef:r,containerProvider:n},a),o),d),l)},computed:{style(){return{width:this.width+"px",height:this.height+"px",top:this.top+"px",left:this.left+"px"}},klass(){return{[this.classNameActive]:this.enable,[this.classNameDragging]:this.dragging,[this.classNameResizing]:this.resizing,[this.classNameDraggable]:this.draggable,[this.classNameResizable]:this.resizable}}},mounted(){if(!this.containerRef)return;this.containerRef.ondragstart=()=>!1;const{width:e,height:t}=Oe(this.containerRef);this.setWidth(this.initW===null?this.w||e:this.initW),this.setHeight(this.initH===null?this.h||t:this.initH),this.containerProvider&&this.containerProvider.updatePosition(this.id,{x:this.left,y:this.top,w:this.width,h:this.height})},render(){return ee("div",{ref:"containerRef",class:["vdr-container",this.klass],style:this.style},[this.$slots.default&&this.$slots.default(),...this.handlesFiltered.map(e=>ee("div",{class:["vdr-handle","vdr-handle-"+e,this.classNameHandle,`${this.classNameHandle}-${e}`],style:{display:this.enable?"block":"none"},onMousedown:t=>this.resizeHandleDown(t,e),onTouchstart:t=>this.resizeHandleDown(t,e)}))])}});var gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ALL_HANDLES:oe,default:ht}),ct=Pe(gt),vt=Se({name:"DraggableContainer",props:{disabled:{type:Boolean,default:!1},adsorbParent:{type:Boolean,default:!0},adsorbCols:{type:Array,default:null},adsorbRows:{type:Array,default:null},referenceLineVisible:{type:Boolean,default:!0},referenceLineColor:{type:String,default:"#f00"}},setup(e){const t=fe({}),a=(l,s)=>{t[l]=s},i=l=>{const s=Object.assign({},t);return l&&delete s[l],s},n=fe({matchedLine:null}),r=D(()=>n.matchedLine&&n.matchedLine.row||[]),o=D(()=>n.matchedLine&&n.matchedLine.col||[]),d=l=>{n.matchedLine=l};return T("identity",xe),T("updatePosition",a),T("getPositionStore",i),T("setMatchedLine",d),T("disabled",re(e,"disabled")),T("adsorbParent",re(e,"adsorbParent")),T("adsorbCols",e.adsorbCols||[]),T("adsorbRows",e.adsorbRows||[]),{matchedRows:r,matchedCols:o}},methods:{renderReferenceLine(){return this.referenceLineVisible?[...this.matchedCols.map(e=>ee("div",{style:{width:"0",height:"100%",top:"0",left:e+"px",borderLeft:`1px dashed ${this.referenceLineColor}`,position:"absolute"}})),...this.matchedRows.map(e=>ee("div",{style:{width:"100%",height:"0",left:"0",top:e+"px",borderTop:`1px dashed ${this.referenceLineColor}`,position:"absolute"}}))]:[]}},render(){return ee("div",{style:{width:"100%",height:"100%",position:"relative"}},[this.$slots.default&&this.$slots.default(),...this.renderReferenceLine()])}}),pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vt}),Le=Pe(pt);(function(e){var t=de&&de.__createBinding||(Object.create?function(r,o,d,l){l===void 0&&(l=d),Object.defineProperty(r,l,{enumerable:!0,get:function(){return o[d]}})}:function(r,o,d,l){l===void 0&&(l=d),r[l]=o[d]});e.__esModule=!0;var a=ct,i=Le;a.default.install=function(r){return r.component(a.default.name,a.default),r.component(i.default.name,i.default),r};var n=Le;t(e,n,"default","DraggableContainer"),e.default=a.default})(We);var mt=$e(We),F;F=23;var bt={components:{Vue3DraggableResizable:mt,btn:Ye},setup:()=>{var e,t,a,i,n,r,o,d,l,s;return n=U(),t=innerHeight*2,i=innerWidth*2,r=Math.min(546,innerHeight),o=Math.min(r*1.57,innerWidth),l=U((innerWidth-o)/2),s=U((innerHeight-r)/2),r=U(r),o=U(o),e=U(!0),se(()=>{n=n.value.$el}),a=()=>{var u,h,m,c,M,L,_;m=-F,{offsetTop:L,offsetHeight:c,offsetWidth:_,offsetLeft:M}=n,h=innerHeight+F,c>h&&(c=h,r.value=h),h=innerWidth+F,_>h&&(_=h,o.value=h),L<m?s.value=m:(u=innerHeight-m-c,L>u&&(s.value=u)),M<m?l.value=m:(u=innerWidth-m-_,M>u&&(l.value=u))},d=U(!0),{drag:n,border:a,wait:d,end:()=>{a(),ue.recbar.top()},start:()=>{var u;d.value=!1,u=2*F,localStorage.area=JSON.stringify([l.value+F,s.value+F,o.value-u,r.value-u].map(Math.round)),ue.area()},deactivated:function(){Ce(()=>{e.value=!0})},x:l,y:s,h:r,w:o,bw:i,bh:t,active:e}}};const yt=e=>(Te("data-v-042a670c"),e=e(),Ve(),e),wt=Be("\u5F00\u59CB\u5F55\u5236"),zt=yt(()=>De("b",null,null,-1)),_t=[zt];function Ht(e,t){const a=ve("btn"),i=ve("Vue3DraggableResizable");return ie(),he("div",{style:ce("--bh:"+e.bh+"px;--top:-"+e.bh+"px;--bw:"+e.bw+"px;--left:-"+e.bw+"px")},[e.wait?(ie(),je(i,{key:0,draggable:!0,initH:e.h,initW:e.w,minH:330,minW:330,resizable:!0,onActivated:t[0]||(t[0]=n=>e.print("activated")),onDeactivated:e.deactivated,onDragEnd:e.end,onDragStart:e.border,onDragging:e.border,onResizeEnd:e.end,onResizeStart:e.border,onResizing:e.border,ref:"drag",active:e.active,"onUpdate:active":t[1]||(t[1]=n=>e.active=n),h:e.h,"onUpdate:h":t[2]||(t[2]=n=>e.h=n),w:e.w,"onUpdate:w":t[3]||(t[3]=n=>e.w=n),x:e.x,"onUpdate:x":t[4]||(t[4]=n=>e.x=n),y:e.y,"onUpdate:y":t[5]||(t[5]=n=>e.y=n)},{default:ge(()=>[De("b",null,[Ae(a,{onClick:Ie(e.start,["prevent"])},{default:ge(()=>[wt]),_:1},8,["onClick"])])]),_:1},8,["initH","initW","onDeactivated","onDragEnd","onDragStart","onDragging","onResizeEnd","onResizeStart","onResizing","active","h","w","x","y"])):(ie(),he("i",{key:1,style:ce("--x:"+e.x+"px;--y:"+e.y+"px;--h:"+e.h+"px;--w:"+e.w+"px")},_t,4))],4)}var xt=Xe(bt,[["render",Ht],["__scopeId","data-v-042a670c"]]);export{xt as default};
