if(!self.define){let e,l={};const i=(i,n)=>(i=new URL(i+".js",n).href,l[i]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=l,document.head.appendChild(e)}else e=i,importScripts(i),l()})).then((()=>{let e=l[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(l[s])return;let u={};const o=e=>i(e,s),c={module:{uri:s},exports:u,require:o};l[s]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),u)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vappsale"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.c03df070.css",revision:null},{url:"/css/app.19ebae5f.css",revision:null},{url:"/img/Rectangle3.fedc6539.png",revision:null},{url:"/img/Rectangle33.b37b17d6.png",revision:null},{url:"/img/Rectangle333.4bab83c0.png",revision:null},{url:"/img/abg.7ed5f3da.jpg",revision:null},{url:"/img/casestudy.6e3bccb6.jpg",revision:null},{url:"/img/casestudy2.ffe8f68f.jpg",revision:null},{url:"/img/discover.f29b5ad7.png",revision:null},{url:"/img/gabby.602d2e4e.jpg",revision:null},{url:"/img/google.75012020.png",revision:null},{url:"/img/money.8b7c7ea3.png",revision:null},{url:"/img/paymentportal.446e1c42.png",revision:null},{url:"/img/sc.6354f418.png",revision:null},{url:"/img/vplogo.89e33254.png",revision:null},{url:"/img/wallet.f2cde848.png",revision:null},{url:"/index.html",revision:"3f38e5fd1b0d97893259a576af8717d4"},{url:"/js/about.67be761e.js",revision:null},{url:"/js/app.049e17fd.js",revision:null},{url:"/js/chunk-vendors.dfbb1db9.js",revision:null},{url:"/manifest.json",revision:"59b2af36b2cca5b87f98976ed7bc06f3"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
