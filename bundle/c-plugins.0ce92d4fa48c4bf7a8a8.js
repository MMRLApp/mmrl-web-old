/*! For license information please see c-plugins.0ce92d4fa48c4bf7a8a8.js.LICENSE.txt */
cordova.define("com.dergoogler.plugin.chooser",(function(t,e,o){o.exports={getFile:function(t,e,o,r){cordova.exec(o,r,"Chooser","getFile",[("string"==typeof t?t.toLowerCase().replace(/\s/g,""):void 0)||"*/*",!0,e])},getFileMetadata:function(t,e,o,r){cordova.exec(o,r,"Chooser","getFile",[("string"==typeof t?t.toLowerCase().replace(/\s/g,""):void 0)||"*/*",!1,e])}}})),cordova.define("com.dergoogler.plugin.download",(function(t,e,o){const r=t("cordova/exec");o.exports={start:function(t){r(t.onChange,t.onError,"Download","start",[t.url,t.dest])}}})),cordova.define("com.dergoogler.plugin.fetch",(function(t,e,o){var r=t("cordova/exec");function n(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!=typeof t&&(t=String(t)),t}function s(t){this.map={},t instanceof s||t instanceof window.Headers?t.forEach((function(t,e){this.append(e,t)}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function a(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise((function(e,o){t.onload=function(){e(t.result)},t.onerror=function(){o(t.error)}}))}function d(t){var e=new FileReader;return e.readAsArrayBuffer(t),h(e)}s.prototype.append=function(t,e){t=n(t),e=i(e);var o=this.map[t];o||(o=[],this.map[t]=o),o.push(e)},s.prototype.delete=function(t){delete this.map[n(t)]},s.prototype.get=function(t){var e=this.map[n(t)];return e?e[0]:null},s.prototype.getAll=function(t){return this.map[n(t)]||[]},s.prototype.has=function(t){return this.map.hasOwnProperty(n(t))},s.prototype.set=function(t,e){this.map[n(t)]=[i(e)]},s.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach((function(o){this.map[o].forEach((function(r){t.call(e,r,o,this)}),this)}),this)};var u="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),c="FormData"in self;function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(u&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(c&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else{if(t)throw new Error("unsupported BodyInit type");this._bodyText=""}},u?(this.blob=function(){var t=a(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(d)},this.text=function(){var t,e,o=a(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,(e=new FileReader).readAsText(t),h(e);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=a(this);return t||Promise.resolve(this._bodyText)},c&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function p(t,e){var o,r,n=(e=e||{}).body;if(p.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new s(t.headers)),this.method=t.method,this.mode=t.mode,n||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new s(e.headers)),this.method=(o=e.method||this.method||"GET",r=o.toUpperCase(),l.indexOf(r)>-1?r:o),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function y(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var o=t.split("="),r=o.shift().replace(/\+/g," "),n=o.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(n))}})),e}function m(t,e){e||(e={}),this._initBody(t),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof s?e.headers:new s(e.headers),this.url=e.url||""}f.call(p.prototype),f.call(m.prototype);var b={};b.Headers=s,b.Request=p,b.Response=m,b.fetch=function(t,e){var o;return o=p.prototype.isPrototypeOf(t)&&!e?t:new p(t,e),new Promise((function(t,e){r((function(e){var o={status:e.status,statusText:e.statusText,headers:e.headers,url:e.url},r=new m(e.isBlob?function(t,e,o){e=e||"",o=o||512;for(var r=atob(t),n=[],i=0;i<r.length;i+=o){for(var s=r.slice(i,i+o),a=new Array(s.length),h=0;h<s.length;h++)a[h]=s.charCodeAt(h);var d=new Uint8Array(a);n.push(d)}return new Blob(n,{type:e})}(e.body):e.body,o);t(r)}),(function(t){e(new TypeError(t.toString()))}),"Fetch","fetch",[o.method,o.url,void 0===o._bodyInit?null:o._bodyInit,o.headers])}))},b.fetch.setTimeout=function(t){r(null,null,"FetchPlugin","setTimeout",[t])},b.fetch.polyfill=!0,o.exports=b.fetch})),cordova.define("com.dergoogler.plugin.terminal",(function(t,e,o){const r=t("cordova/exec");o.exports={exec:function(t){r(t.onLine,t.onExit,"Terminal","exec",[t.command,t.env||{HOME:"/"},t.cwd||"/",t.printError||!0])},test:function(t,e,o){r(e,o,"Terminal","test",[t])}}}));