!function(){"use strict";var n,t={41890:function(n,t,r){var e=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};t.__esModule=!0;var o=e(r(73609));window.buildExpandingFormset=function(n,t){void 0===t&&(t={});var r=o.default("#"+n+"-ADD"),e=o.default("#"+n+"-FORMS"),i=o.default("#"+n+"-TOTAL_FORMS"),u=parseInt(i.val(),10);if(t.onInit)for(var a=0;a<u;a++)t.onInit(a);var f=document.getElementById(n+"-EMPTY_FORM_TEMPLATE");f.innerText?f=f.innerText:f.textContent&&(f=f.textContent),r.on("click",(function(){if(r.hasClass("disabled"))return!1;var n=f.replace(/__prefix__/g,u).replace(/<-(-*)\/script>/g,"<$1/script>");e.append(n),t.onAdd&&t.onAdd(u),t.onInit&&t.onInit(u),u++,i.val(u)}))}},73609:function(n){n.exports=jQuery}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}e.m=t,n=[],e.O=function(t,r,o,i){if(!r){var u=1/0;for(c=0;c<n.length;c++){r=n[c][0],o=n[c][1],i=n[c][2];for(var a=!0,f=0;f<r.length;f++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[f])}))?r.splice(f--,1):(a=!1,i<u&&(u=i));a&&(n.splice(c--,1),t=o())}return t}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[r,o,i]},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},function(){var n={276:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],f=r[2],c=0;for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(f)var l=f(e);for(t&&t(r);c<u.length;c++)i=u[c],e.o(n,i)&&n[i]&&n[i][0](),n[u[c]]=0;return e.O(l)},r=self.webpackChunkwagtail=self.webpackChunkwagtail||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),e.O(void 0,[751],(function(){return e(41890)}));var o=e.O(void 0,[751],(function(){return e(90971)}));o=e.O(o)}();
//# sourceMappingURL=expanding_formset.js.map