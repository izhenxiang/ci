(function(){"use strict";self.onmessage=({data:[t,o,c,d,e,a]})=>{var n,s;n=new OffscreenCanvas(e,a),s=n.getContext("2d",{alpha:!1,desynshronized:!0}),t.pipeThrough(new TransformStream({transform:(r,f)=>{s.drawImage(r,c,d,e,a,0,0,e,a),f.enqueue(new VideoFrame(n)),r.close()}})).pipeTo(o)}})();
