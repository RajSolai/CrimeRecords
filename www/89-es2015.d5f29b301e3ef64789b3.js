(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{nI0H:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_spinner",(function(){return o}));var n=r("c1op"),s=r("AfW+"),i=r("Dl6n");const a={bubbles:{dur:1e3,circles:9,fn:(e,t,r)=>{const n=`${e*t/r-e}ms`,s=2*Math.PI*t/r;return{r:5,style:{top:`${9*Math.sin(s)}px`,left:`${9*Math.cos(s)}px`,"animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e,t,r)=>{const n=t/r,s=`${e*n-e}ms`,i=2*Math.PI*n;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:44,cy:44,fill:"none",viewBox:"22 22 44 44",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/r-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/r-e}ms`}})}},o=class{constructor(e){Object(n.l)(this,e),this.paused=!1}getName(){const e=this.name||s.b.get("spinner"),t=Object(n.d)(this);return e||("ios"===t?"lines":"circular")}render(){const e=Object(n.d)(this),t=this.getName(),r=a[t]||a.lines,o="number"==typeof this.duration&&this.duration>10?this.duration:r.dur,f=[];if(void 0!==r.circles)for(let n=0;n<r.circles;n++)f.push(l(r,o,n,r.circles));else if(void 0!==r.lines)for(let n=0;n<r.lines;n++)f.push(c(r,o,n,r.lines));return Object(n.i)(n.a,{class:Object.assign(Object.assign({},Object(i.a)(this.color)),{[e]:!0,[`spinner-${t}`]:!0,"spinner-paused":!!this.paused||s.b.getBoolean("_testing")}),role:"progressbar",style:r.elmDuration?{animationDuration:o+"ms"}:{}},f)}static get style(){return":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke-width:3.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) circle,:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@-webkit-keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}"}},l=(e,t,r,s)=>{const i=e.fn(t,r,s);return i.style["animation-duration"]=t+"ms",Object(n.i)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(n.i)("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:e.elmDuration?{animationDuration:t+"ms"}:{}}))},c=(e,t,r,s)=>{const i=e.fn(t,r,s);return i.style["animation-duration"]=t+"ms",Object(n.i)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(n.i)("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))}}}]);