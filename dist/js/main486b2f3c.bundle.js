(()=>{var r={198:r=>{r.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z"></path></svg>'}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return r[n](a,a.exports,e),a.exports}e.n=r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var t=e.g.document;if(!r&&t&&(t.currentScript&&(r=t.currentScript.src),!r)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!r;)r=n[o--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r+"../"})(),(()=>{"use strict";const r=e.p+"img/image.png",t=e.p+"img/2.png",n=e.p+"img/1.png";var o=e(198),a=e.n(o);console.log("Hello world");var c='\n    <h1>Hello world</h1>\n\n    <div class="body">\n        <img class=\'image\' src="'.concat(r,"\" />\n        <img class='image2' src=\"").concat(t,"\" />\n        <img class='image3' src=\"").concat(n,'" />\n    </div>\n\n    <div class="phoneIcon">\n        ').concat(a(),"\n    </div>\n");document.querySelector("#root").insertAdjacentHTML("afterbegin",c)})()})();