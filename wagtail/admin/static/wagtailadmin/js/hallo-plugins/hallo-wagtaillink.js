!function(){"use strict";var e,t={34827:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var r=o(n(73609));r.default.widget("IKS.hallowagtaillink",{options:{uuid:"",editable:null},populateToolbar:function(e){var t=this,n=function(){var e=t.options.editable.getSelection().commonAncestorContainer;return r.default(e).parents("a").get(0)},o=r.default('<span class="'+this.widgetName+'"></span>'),i=r.default("<span></span>");(i=i.hallobutton({uuid:t.options.uuid,editable:t.options.editable,label:"Add/Edit Link",icon:"icon-link",command:null,queryState:function(){return i.hallobutton("checked",!!n())}})).on("click",(function(){var e,o,i=window.chooserUrls.pageChooser,a={allow_external_link:!0,allow_email_link:!0,allow_phone_link:!0,allow_anchor_link:!0},l=n(),u=t.options.editable.getSelection();return l?(e=l.getAttribute("href"),parentPageId=l.getAttribute("data-parent-id"),o=l.getAttribute("data-linktype"),a.link_text=l.innerText,"page"===o&&parentPageId?i=window.chooserUrls.pageChooser+parentPageId.toString()+"/":e.startsWith("mailto:")?(i=window.chooserUrls.emailLinkChooser,e=e.replace("mailto:",""),a.link_url=e):e.startsWith("tel:")?(i=window.chooserUrls.phoneLinkChooser,e=e.replace("tel:",""),a.link_url=e):e.startsWith("#")?(i=window.chooserUrls.anchorLinkChooser,e=e.replace("#",""),a.link_url=e):o||(i=window.chooserUrls.externalLinkChooser,a.link_url=e)):u.collapsed||(a.link_text=u.toString()),ModalWorkflow({url:i,urlParams:a,onload:PAGE_CHOOSER_MODAL_ONLOAD_HANDLERS,responses:{pageChosen:function(e){var n,o;return l?(n=l,o=!0):u.collapsed?(n=document.createElement("a"),u.insertNode(n),o=!1):(n=document.createElement("a"),u.surroundContents(n),r.default("a[href]",n).each((function(){for(var e=this.parentNode;this.firstChild;)e.insertBefore(this.firstChild,this);e.removeChild(this)})),o=!0),n.setAttribute("href",e.url),e.id?(n.setAttribute("data-id",e.id),n.setAttribute("data-parent-id",e.parentId),n.setAttribute("data-linktype","page")):(n.removeAttribute("data-id"),n.removeAttribute("data-parent-id"),n.removeAttribute("data-linktype")),!e.prefer_this_title_as_link_text&&o||(n.innerText=e.title),t.options.editable.element.trigger("change")}}})})),o.append(i);var a=r.default("<span></span>");(a=a.hallobutton({uuid:t.options.uuid,editable:t.options.editable,label:"Remove Link",icon:"icon-chain-broken",command:null,queryState:function(){return n()?a.hallobutton("enable"):a.hallobutton("disable")}})).on("click",(function(){var e,o;n()&&((o=(e=rangy.getSelection()).getRangeAt(0)).setStartBefore(e.anchorNode.parentNode),o.setEndAfter(e.anchorNode.parentNode),e.setSingleRange(o,!1),document.execCommand("unlink"),t.options.editable.element.trigger("change"))})),o.append(a),o.hallobuttonset(),e.append(o)}})},73609:function(e){e.exports=jQuery}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=function(t,n,r,i){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],i=e[s][2];for(var l=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(l=!1,i<a&&(a=i));l&&(e.splice(s--,1),t=r())}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,r,i]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={846:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],l=n[1],u=n[2],s=0;for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(u)var d=u(o);for(t&&t(n);s<a.length;s++)i=a[s],o.o(e,i)&&e[i]&&e[i][0](),e[a[s]]=0;return o.O(d)},n=self.webpackChunkwagtail=self.webpackChunkwagtail||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),o.O(void 0,[751],(function(){return o(34827)}));var r=o.O(void 0,[751],(function(){return o(90971)}));r=o.O(r)}();
//# sourceMappingURL=hallo-wagtaillink.js.map