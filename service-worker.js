if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const u=e=>i(e,r),c={module:{uri:r},exports:o,require:u};s[r]=Promise.all(n.map((e=>c[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vappsale"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.003d740d.css",revision:null},{url:"/css/app.e0cb7ad8.css",revision:null},{url:"/img/Rectangle33.b37b17d6.png",revision:null},{url:"/img/abg.7ed5f3da.jpg",revision:null},{url:"/img/discover.f29b5ad7.png",revision:null},{url:"/img/money.8b7c7ea3.png",revision:null},{url:"/img/wallet.f2cde848.png",revision:null},{url:"/index.html",revision:"79c89cc3261735b99825e7100247d24c"},{url:"/js/about.4079c6d0.js",revision:null},{url:"/js/app.0150b752.js",revision:null},{url:"/js/chunk-vendors.c412155a.js",revision:null},{url:"/manifest.json",revision:"59b2af36b2cca5b87f98976ed7bc06f3"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
