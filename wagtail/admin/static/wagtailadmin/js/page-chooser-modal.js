!function(){"use strict";var t,e={78238:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(73609)),a={browse:function(t,e){r.default(".link-types a",t.body).on("click",(function(){return t.loadUrl(this.href),!1})),t.ajaxifyForm(r.default("form.search-form",t.body));var n,o=r.default("form.search-form",t.body).attr("action"),a=r.default(".page-results",t.body).html();function i(){var e=r.default("#id_q",t.body).val();return""!==e?n=r.default.ajax({url:o,data:{q:e,results_only:!0},success:function(e){n=null,r.default(".page-results",t.body).html(e),u()},error:function(){n=null}}):(r.default(".page-results",t.body).html(a),l()),!1}function u(){r.default(".page-results a.choose-page",t.body).on("click",(function(){var e=r.default(this).data();return t.respond("pageChosen",e),t.close(),!1})),r.default(".page-results a.navigate-pages",t.body).on("click",(function(){return r.default(".page-results",t.body).load(this.href,u),!1})),r.default(".page-results a.navigate-parent",t.body).on("click",(function(){return t.loadUrl(this.href),!1}))}function l(){r.default(".page-results a.navigate-pages",t.body).on("click",(function(){return t.loadUrl(this.href),!1})),r.default("a.choose-page",t.body).on("click",(function(){var n=r.default(this).data();return n.parentId=e.parent_page_id,t.respond("pageChosen",n),t.close(),!1}))}r.default("#id_q",t.body).on("input",(function(){n&&n.abort(),clearTimeout(r.default.data(this,"timer"));var t=setTimeout(i,200);r.default(this).data("timer",t)})),l(),r.default("#id_q",t.body).trigger("focus")},anchor_link:function(t){r.default("p.link-types a",t.body).on("click",(function(){return t.loadUrl(this.href),!1})),r.default("form",t.body).on("submit",(function(){return t.postForm(this.action,r.default(this).serialize()),!1}))},email_link:function(t){r.default("p.link-types a",t.body).on("click",(function(){return t.loadUrl(this.href),!1})),r.default("form",t.body).on("submit",(function(){return t.postForm(this.action,r.default(this).serialize()),!1}))},phone_link:function(t){r.default("p.link-types a",t.body).on("click",(function(){return t.loadUrl(this.href),!1})),r.default("form",t.body).on("submit",(function(){return t.postForm(this.action,r.default(this).serialize()),!1}))},external_link:function(t){r.default("p.link-types a",t.body).on("click",(function(){return t.loadUrl(this.href),!1})),r.default("form",t.body).on("submit",(function(){return t.postForm(this.action,r.default(this).serialize()),!1}))},external_link_chosen:function(t,e){t.respond("pageChosen",e.result),t.close()}};window.PAGE_CHOOSER_MODAL_ONLOAD_HANDLERS=a},73609:function(t){t.exports=jQuery}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.m=e,t=[],o.O=function(e,n,r,a){if(!n){var i=1/0;for(f=0;f<t.length;f++){n=t[f][0],r=t[f][1],a=t[f][2];for(var u=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(u=!1,a<i&&(i=a));u&&(t.splice(f--,1),e=r())}return e}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[n,r,a]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={726:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,i=n[0],u=n[1],l=n[2],f=0;for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(l)var s=l(o);for(e&&e(n);f<i.length;f++)a=i[f],o.o(t,a)&&t[a]&&t[a][0](),t[i[f]]=0;return o.O(s)},n=self.webpackChunkwagtail=self.webpackChunkwagtail||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),o.O(void 0,[751],(function(){return o(78238)}));var r=o.O(void 0,[751],(function(){return o(90971)}));r=o.O(r)}();
//# sourceMappingURL=page-chooser-modal.js.map