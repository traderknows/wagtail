!function(){"use strict";var t,e={24804:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=n(r(73609));a.default((function(){a.default('[data-widget="filtered-select"]').each((function(){var t=a.default("#"+this.dataset.filterField),e=a.default(this),r=[];function n(){var n=e.val();e.empty();var i,l=t.val();if(""===l)i=r;else{i=[];for(var u=0;u<r.length;u++)""!==r[u].value&&-1===r[u].filterValue.indexOf(l)||i.push(r[u])}var o=!1;for(u=0;u<i.length;u++){var f=a.default("<option>");f.attr("value",i[u].value),i[u].value===n&&(o=!0),f.text(i[u].label),e.append(f)}o?e.val(n):e.val("")}a.default("option",this).each((function(){var t;t="filterValue"in this.dataset?this.dataset.filterValue.split(","):[],r.push({value:this.value,label:this.label,filterValue:t})})),n(),t.change(n)}))}))},73609:function(t){t.exports=jQuery}},r={};function n(t){var a=r[t];if(void 0!==a)return a.exports;var i=r[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.m=e,t=[],n.O=function(e,r,a,i){if(!r){var l=1/0;for(f=0;f<t.length;f++){r=t[f][0],a=t[f][1],i=t[f][2];for(var u=!0,o=0;o<r.length;o++)(!1&i||l>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[o])}))?r.splice(o--,1):(u=!1,i<l&&(l=i));u&&(t.splice(f--,1),e=a())}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,a,i]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={4:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,l=r[0],u=r[1],o=r[2],f=0;for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(o)var s=o(n);for(e&&e(r);f<l.length;f++)i=l[f],n.o(t,i)&&t[i]&&t[i][0](),t[l[f]]=0;return n.O(s)},r=self.webpackChunkwagtail=self.webpackChunkwagtail||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),n.O(void 0,[751],(function(){return n(24804)}));var a=n.O(void 0,[751],(function(){return n(90971)}));a=n.O(a)}();
//# sourceMappingURL=filtered-select.js.map