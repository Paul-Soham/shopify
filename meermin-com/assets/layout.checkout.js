!function(n){function t(t){for(var r,i,u=t[0],s=t[1],a=t[2],f=0,h=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);for(l&&l(t);h.length;)h.shift()();return c.push.apply(c,a||[]),e()}function e(){for(var n,t=0;t<c.length;t++){for(var e=c[t],r=!0,u=1;u<e.length;u++){var s=e[u];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},o={2:0},c=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="";var u=window.shopifySlateJsonp=window.shopifySlateJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=s;c.push([225,0]),e()}({145:function(n,t,e){},16:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},225:function(n,t,e){"use strict";e.r(t),e(6),e(3),e(50),e(145);var r=e(14),o=e.n(r);var c=e(31);let i=!1;["DOMContentLoaded","page:load","page:change","page:update"].forEach(n=>{document.addEventListener(n,()=>{i||(Shopify.Checkout.isOrderStatusPage||"thank_you"===Shopify.Checkout.step?(function(){const n=document.querySelector(".step__footer__info"),t=document.createElement("span");t.innerHTML=c.a.info,n.prepend(t)}(),function(){const n=document.querySelector(".order-count");document.querySelector(".order-summary-toggle__icon-wrapper").innerHTML+='\n    <span class="order-summary-toggle__count" js-checkout="count">\n      '.concat(n.innerHTML.trim(),"\n    </span>\n  ")}()):(function(){const n=document.getElementsByClassName("product__description__variant");for(let t=0;t<n.length;t++){const e=n[t].innerHTML;if(e.includes("/")){const r=e.split("/")[1];n[t].innerHTML="".concat(theme.strings.size," ").concat(r)}}}(),(()=>{const n={count:document.querySelector('[js-checkout="count"]'),toggleIcon:document.querySelector(".order-summary-toggle__icon-wrapper")};return Object.freeze({init:function(){Shopify.checkout&&n.count?n.toggleIcon.innerHTML+='\n      <span class="order-summary-toggle__count" js-checkout="count">\n        '.concat(Shopify.checkout.line_items.length,"\n      </span>"):o.a.get("/cart.js?no-cache=".concat((new Date).getTime())).then(t=>{n.count||(n.toggleIcon.innerHTML+='\n            <span class="order-summary-toggle__count" js-checkout="count">\n              '.concat(t.data.item_count,"\n            </span>"))}).catch(n=>{throw new Error(n)})}})})().init())),i=!0})})},31:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));const r={arrow:'\n  <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 8H26M26 8L18.7778 1M26 8L18.7778 15"/>\n  </svg>\n',info:'\n  <svg class="icon__info" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <circle cx="9" cy="9" r="9" fill="#7F551C"/>\n    <path d="M5.625 6.36986H7.34576C7.40434 5.47653 8.0121 4.90538 8.95669 4.90538C9.87931 4.90538 10.4944 5.45456 10.4944 6.21609C10.4944 6.941 10.1868 7.32909 9.27887 7.87827C8.26838 8.47138 7.84368 9.1304 7.90958 10.2288L7.91691 10.7267H9.6157V10.3093C9.6157 9.58438 9.88663 9.21094 10.8459 8.64712C11.8417 8.05401 12.3982 7.27051 12.3982 6.15018C12.3982 4.53194 11.0582 3.375 9.05188 3.375C6.87713 3.375 5.68358 4.63445 5.625 6.36986ZM8.84685 14.2195C9.59373 14.2195 10.0624 13.7581 10.0624 13.0552C10.0624 12.3449 9.59373 11.8836 8.84685 11.8836C8.11461 11.8836 7.63133 12.3449 7.63133 13.0552C7.63133 13.7581 8.11461 14.2195 8.84685 14.2195Z" fill="white"/>\n  </svg>\n',minus:'\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon__minus" viewBox="0 0 36 36">\n    <path d="M10 16h16v4H10z"></path>\n  </svg>\n',plus:'\n  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon__plus" viewBox="0 0 36 36">\n    <path d="M16 10v6h-6v4h6v6h4v-6h6v-4h-6v-6h-4z"></path>\n  </svg>\n'}},35:function(n,t){var e,r,o=n.exports={};function c(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(n){if(e===setTimeout)return setTimeout(n,0);if((e===c||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:c}catch(n){e=c}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(n){r=i}}();var s,a=[],l=!1,f=-1;function h(){l&&s&&(l=!1,s.length?a=s.concat(a):f=-1,a.length&&p())}function p(){if(!l){var n=u(h);l=!0;for(var t=a.length;t;){for(s=a,a=[];++f<t;)s&&s[f].run();f=-1,t=a.length}s=null,l=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function d(n,t){this.fun=n,this.array=t}function g(){}o.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];a.push(new d(n,t)),1!==a.length||l||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}});
//# sourceMappingURL=layout.checkout.js.map