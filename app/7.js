var t=new Proxy({},{get:(i,r)=>a=>{var e;return e={},e[r]={deviceId:{exact:a}},navigator.mediaDevices.getUserMedia(e)}});export{t as m};
