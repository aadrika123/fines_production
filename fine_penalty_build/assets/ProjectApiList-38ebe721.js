function he(e,t){return function(){return e.apply(t,arguments)}}const{toString:Be}=Object.prototype,{getPrototypeOf:Z}=Object,I=(e=>t=>{const r=Be.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>I(t)===e),H=e=>t=>typeof t===e,{isArray:N}=Array,$=H("undefined");function Ue(e){return e!==null&&!$(e)&&e.constructor!==null&&!$(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const me=R("ArrayBuffer");function ke(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&me(e.buffer),t}const je=H("string"),E=H("function"),ye=H("number"),M=e=>e!==null&&typeof e=="object",Ie=e=>e===!0||e===!1,F=e=>{if(I(e)!=="object")return!1;const t=Z(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},He=R("Date"),Me=R("File"),ve=R("Blob"),qe=R("FileList"),ze=e=>M(e)&&E(e.pipe),Ve=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=I(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},Je=R("URLSearchParams"),We=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function C(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),N(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(n=0;n<s;n++)l=o[n],t.call(null,e[l],l,e)}}function we(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const be=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ee=e=>!$(e)&&e!==be;function K(){const{caseless:e}=Ee(this)&&this||{},t={},r=(n,i)=>{const o=e&&we(t,i)||i;F(t[o])&&F(n)?t[o]=K(t[o],n):F(n)?t[o]=K({},n):N(n)?t[o]=n.slice():t[o]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&C(arguments[n],r);return t}const Ke=(e,t,r,{allOwnKeys:n}={})=>(C(t,(i,o)=>{r&&E(i)?e[o]=he(i,r):e[o]=i},{allOwnKeys:n}),e),Ge=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Xe=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Qe=(e,t,r,n)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!n||n(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=r!==!1&&Z(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Ze=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Ye=e=>{if(!e)return null;if(N(e))return e;let t=e.length;if(!ye(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},et=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Z(Uint8Array)),tt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},rt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},nt=R("HTMLFormElement"),it=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),ie=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),ot=R("RegExp"),ge=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};C(r,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(n[o]=s||i)}),Object.defineProperties(e,n)},st=e=>{ge(e,(t,r)=>{if(E(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(E(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},at=(e,t)=>{const r={},n=i=>{i.forEach(o=>{r[o]=!0})};return N(e)?n(e):n(String(e).split(t)),r},ct=()=>{},lt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),z="abcdefghijklmnopqrstuvwxyz",oe="0123456789",Se={DIGIT:oe,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+oe},ut=(e=16,t=Se.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function ft(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const dt=e=>{const t=new Array(10),r=(n,i)=>{if(M(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const o=N(n)?[]:{};return C(n,(s,l)=>{const d=r(s,i+1);!$(d)&&(o[l]=d)}),t[i]=void 0,o}}return n};return r(e,0)},pt=R("AsyncFunction"),ht=e=>e&&(M(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:N,isArrayBuffer:me,isBuffer:Ue,isFormData:Ve,isArrayBufferView:ke,isString:je,isNumber:ye,isBoolean:Ie,isObject:M,isPlainObject:F,isUndefined:$,isDate:He,isFile:Me,isBlob:ve,isRegExp:ot,isFunction:E,isStream:ze,isURLSearchParams:Je,isTypedArray:et,isFileList:qe,forEach:C,merge:K,extend:Ke,trim:We,stripBOM:Ge,inherits:Xe,toFlatObject:Qe,kindOf:I,kindOfTest:R,endsWith:Ze,toArray:Ye,forEachEntry:tt,matchAll:rt,isHTMLForm:nt,hasOwnProperty:ie,hasOwnProp:ie,reduceDescriptors:ge,freezeMethods:st,toObjectSet:at,toCamelCase:it,noop:ct,toFiniteNumber:lt,findKey:we,global:be,isContextDefined:Ee,ALPHABET:Se,generateString:ut,isSpecCompliantForm:ft,toJSONObject:dt,isAsyncFn:pt,isThenable:ht};function m(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Re=m.prototype,_e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_e[e]={value:e}});Object.defineProperties(m,_e);Object.defineProperty(Re,"isAxiosError",{value:!0});m.from=(e,t,r,n,i,o)=>{const s=Object.create(Re);return a.toFlatObject(e,s,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(s,e.message,t,r,n,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const mt=null;function G(e){return a.isPlainObject(e)||a.isArray(e)}function Oe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function se(e,t,r){return e?e.concat(t).map(function(i,o){return i=Oe(i),!r&&o?"["+i+"]":i}).join(r?".":""):t}function yt(e){return a.isArray(e)&&!e.some(G)}const wt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,_){return!a.isUndefined(_[h])});const n=r.metaTokens,i=r.visitor||u,o=r.dots,s=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(i))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,_){let g=f;if(f&&!_&&typeof f=="object"){if(a.endsWith(h,"{}"))h=n?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&yt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(g=a.toArray(f)))return h=Oe(h),g.forEach(function(L,Fe){!(a.isUndefined(L)||L===null)&&t.append(s===!0?se([h],Fe,o):s===null?h:h+"[]",c(L))}),!1}return G(f)?!0:(t.append(se(_,h,o),c(f)),!1)}const p=[],b=Object.assign(wt,{defaultVisitor:u,convertValue:c,isVisitable:G});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(g,T){(!(a.isUndefined(g)||g===null)&&i.call(t,g,a.isString(T)?T.trim():T,h,b))===!0&&y(g,h?h.concat(T):[T])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Y(e,t){this._pairs=[],e&&v(e,this,t)}const Ae=Y.prototype;Ae.append=function(t,r){this._pairs.push([t,r])};Ae.toString=function(t){const r=t?function(n){return t.call(this,n,ae)}:ae;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function bt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Te(e,t,r){if(!t)return e;const n=r&&r.encode||bt,i=r&&r.serialize;let o;if(i?o=i(t,r):o=a.isURLSearchParams(t)?t.toString():new Y(t,r).toString(n),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Et{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const ce=Et,xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gt=typeof URLSearchParams<"u"?URLSearchParams:Y,St=typeof FormData<"u"?FormData:null,Rt=typeof Blob<"u"?Blob:null,_t=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ot=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:gt,FormData:St,Blob:Rt},isStandardBrowserEnv:_t,isStandardBrowserWebWorkerEnv:Ot,protocols:["http","https","file","blob","url","data"]};function At(e,t){return v(e,new S.classes.URLSearchParams,Object.assign({visitor:function(r,n,i,o){return S.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Tt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function xt(e){const t={},r=Object.keys(e);let n;const i=r.length;let o;for(n=0;n<i;n++)o=r[n],t[o]=e[o];return t}function Ne(e){function t(r,n,i,o){let s=r[o++];const l=Number.isFinite(+s),d=o>=r.length;return s=!s&&a.isArray(i)?i.length:s,d?(a.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!l):((!i[s]||!a.isObject(i[s]))&&(i[s]=[]),t(r,n,i[s],o)&&a.isArray(i[s])&&(i[s]=xt(i[s])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,i)=>{t(Tt(n),i,r,0)}),r}return null}function Nt(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ee={transitional:xe,adapter:S.isNode?"http":"xhr",transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return i&&i?JSON.stringify(Ne(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return At(t,this.formSerializer).toString();if((l=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return v(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),Nt(t)):t}],transformResponse:[function(t){const r=this.transitional||ee.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ee.headers[e]={}});const te=ee,Pt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$t=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),n=s.substring(i+1).trim(),!(!r||t[r]&&Pt[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},le=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function B(e){return e===!1||e==null?e:a.isArray(e)?e.map(B):String(e)}function Ct(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Dt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function V(e,t,r,n,i){if(a.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function Lt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Ft(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,o,s){return this[n].call(this,t,i,o,s)},configurable:!0})})}class q{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function o(l,d,c){const u=P(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(i,u);(!p||i[p]===void 0||c===!0||c===void 0&&i[p]!==!1)&&(i[p||d]=B(l))}const s=(l,d)=>a.forEach(l,(c,u)=>o(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?s(t,r):a.isString(t)&&(t=t.trim())&&!Dt(t)?s($t(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=P(t),t){const n=a.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return Ct(i);if(a.isFunction(r))return r.call(this,i,n);if(a.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=P(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||V(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function o(s){if(s=P(s),s){const l=a.findKey(n,s);l&&(!r||V(n,n[l],l,r))&&(delete n[l],i=!0)}}return a.isArray(t)?t.forEach(o):o(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const o=r[n];(!t||V(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const r=this,n={};return a.forEach(this,(i,o)=>{const s=a.findKey(n,o);if(s){r[s]=B(i),delete r[o];return}const l=t?Lt(o):String(o).trim();l!==o&&delete r[o],r[l]=B(i),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[le]=this[le]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=P(s);n[l]||(Ft(i,s),n[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(q.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(q);const O=q;function J(e,t){const r=this||te,n=t||r,i=O.from(n.headers);let o=n.data;return a.forEach(e,function(l){o=l.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Pe(e){return!!(e&&e.__CANCEL__)}function D(e,t,r){m.call(this,e??"canceled",m.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(D,m,{__CANCEL__:!0});function Bt(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Ut=S.isStandardBrowserEnv?function(){return{write:function(r,n,i,o,s,l){const d=[];d.push(r+"="+encodeURIComponent(n)),a.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(s)&&d.push("domain="+s),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function $e(e,t){return e&&!kt(t)?jt(e,t):t}const It=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function i(o){let s=o;return t&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(s){const l=a.isString(s)?i(s):s;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function Ht(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Mt(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=n[o];s||(s=c),r[i]=d,n[i]=c;let p=o,b=0;for(;p!==i;)b+=r[p++],p=p%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function ue(e,t){let r=0;const n=Mt(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-r,d=n(l),c=o<=s;r=o;const u={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:d||void 0,estimated:d&&s&&c?(s-o)/d:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const vt=typeof XMLHttpRequest<"u",qt=vt&&function(e){return new Promise(function(r,n){let i=e.data;const o=O.from(e.headers).normalize(),s=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(i)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const u=$e(e.baseURL,e.url);c.open(e.method.toUpperCase(),Te(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Bt(function(g){r(g),d()},function(g){n(g),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(n(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||xe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),n(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||It(u))&&e.xsrfCookieName&&Ut.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ue(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ue(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(n(!y||y.type?new D(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=Ht(u);if(b&&S.protocols.indexOf(b)===-1){n(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(i||null)})},U={http:mt,xhr:qt};a.forEach(U,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;for(let i=0;i<t&&(r=e[i],!(n=a.isString(r)?U[r.toLowerCase()]:r));i++);if(!n)throw n===!1?new m(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(U,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!a.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:U};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function fe(e){return W(e),e.headers=O.from(e.headers),e.data=J.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ce.getAdapter(e.adapter||te.adapter)(e).then(function(n){return W(e),n.data=J.call(e,e.transformResponse,n),n.headers=O.from(n.headers),n},function(n){return Pe(n)||(W(e),n&&n.response&&(n.response.data=J.call(e,e.transformResponse,n.response),n.response.headers=O.from(n.response.headers))),Promise.reject(n)})}const de=e=>e instanceof O?e.toJSON():e;function x(e,t){t=t||{};const r={};function n(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function i(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return n(void 0,c,p)}else return n(c,u,p)}function o(c,u){if(!a.isUndefined(u))return n(void 0,u)}function s(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return n(void 0,c)}else return n(void 0,u)}function l(c,u,p){if(p in t)return n(c,u);if(p in e)return n(void 0,c)}const d={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,u)=>i(de(c),de(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||i,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==l||(r[u]=b)}),r}const De="1.5.0",re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{re[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const pe={};re.transitional=function(t,r,n){function i(o,s){return"[Axios v"+De+"] Transitional option '"+o+"'"+s+(n?". "+n:"")}return(o,s,l)=>{if(t===!1)throw new m(i(s," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!pe[s]&&(pe[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,s,l):!0}};function zt(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const o=n[i],s=t[o];if(s){const l=e[o],d=l===void 0||s(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const X={assertOptions:zt,validators:re},A=X.validators;class j{constructor(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=x(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:o}=r;n!==void 0&&X.assertOptions(n,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1),i!=null&&(a.isFunction(i)?r.paramsSerializer={serialize:i}:X.assertOptions(i,{encode:A.function,serialize:A.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),r.headers=O.concat(s,o);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,b;if(!d){const f=[fe.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),b=f.length,u=Promise.resolve(r);p<b;)u=u.then(f[p++],f[p++]);return u}b=l.length;let y=r;for(p=0;p<b;){const f=l[p++],h=l[p++];try{y=f(y)}catch(_){h.call(this,_);break}}try{u=fe.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,b=c.length;p<b;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=x(this.defaults,t);const r=$e(t.baseURL,t.url);return Te(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){j.prototype[t]=function(r,n){return this.request(x(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,s,l){return this.request(x(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}j.prototype[t]=r(),j.prototype[t+"Form"]=r(!0)});const k=j;class ne{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(i=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](i);n._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{n.subscribe(l),o=l}).then(i);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o,s,l){n.reason||(n.reason=new D(o,s,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new ne(function(i){t=i}),cancel:t}}}const Vt=ne;function Jt(e){return function(r){return e.apply(null,r)}}function Wt(e){return a.isObject(e)&&e.isAxiosError===!0}const Q={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Q).forEach(([e,t])=>{Q[t]=e});const Kt=Q;function Le(e){const t=new k(e),r=he(k.prototype.request,t);return a.extend(r,k.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return Le(x(e,i))},r}const w=Le(te);w.Axios=k;w.CanceledError=D;w.CancelToken=Vt;w.isCancel=Pe;w.VERSION=De;w.toFormData=v;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Jt;w.isAxiosError=Wt;w.mergeConfig=x;w.AxiosHeaders=O;w.formToJSON=e=>Ne(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=Ce.getAdapter;w.HttpStatusCode=Kt;w.default=w;const Xt=w,Gt="/api";function Qt(){let e=Gt;return{api_moduleList:`${e}/user-managment/v2/crud/module/list`,api_checkHeartBeat:`${e}/heartbeat`,api_test:`${e}/heartbeat`,api_getFreeMenuList:`${e}/menu/by-module`,api_login:`${e}/login`,api_logout:`${e}/logout`,api_setPassword:`${e}/user/set-password`,api_workflowInfo:`${e}/workflow/role-map/workflow-info`,api_postDepartmental:`${e}/post-custom-data`,api_getDepartmentalData:`${e}/get-all-custom-tab-data`,api_verifyDocuments:`${e}/workflows/document/verify-reject`,api_changePassword:`${e}/change-password`,api_editAdminProfile:`${e}/edit-my-profile`,api_getNotification:`${e}/get-user-notifications`,api_createNotification:`${e}/dashboard/jsk/prop-dashboard`,api_deleteNotification:`${e}/dashboard/jsk/prop-dashboard`,marriageInbox:e+"/marriage/inbox",marriageDetails:e+"/marriage/details",workflowInfo:e+"/workflow/role-map/workflow-info",appointSet:e+"/marriage/set-appiontment-date",getUploadedDocument:e+"/marriage/get-uploaded-document",docVerify:e+"/marriage/doc-verify-reject",approveReject:e+"/marriage/final-approval-rejection",approvedList:e+"/marriage/approved-application",marriageApplicationList:e+"/marriage/search-application",marriageOrderId:e+"/marriage/generate-order-id",api_postMarriageOfflinePayment:e+"/marriage/offline-payment",api_MarriageReceipt:e+"/marriage/payment-receipt",api_marriageNextLevel:e+"/marriage/post-next-level",api_postMarriageSubmission:`${e}/marriage/apply`,api_getDocList:`${e}/marriage/get-doc-list`,api_docUpload:`${e}/marriage/upload-document`,api_getDetails:`${e}/marriage/static-details`,api_getList:`${e}/marriage/applied-application`,api_deleteApplication:`${e}/marriage/`,api_editMarriageApplication:`${e}/marriage/edit-application`,api_submitInfractionForm:`${e}/penalty-record/crud/save`,api_updateInfractionForm:`${e}/penalty-record/crud/edit`,api_getInfractionById:`${e}/v2/penalty-record/crud/show`,api_getInfractionList:`${e}/penalty-record/crud/active-all`,api_getViolationList:`${e}/violation/crud/list`,api_getWardList:`${e}/ward-list`,api_violationMasterList:`${e}/violation/crud/list`,api_getViolationById:`${e}/violation/crud/get`,api_updateViolation:`${e}/violation/crud/edit`,api_addViolation:`${e}/violation/crud/save`,api_deleteViolation:`${e}/violation/crud/delete`,fpInbox:e+"/penalty-record/inbox",fpDetails:e+"/penalty-record/detail",fpDocList:e+"/penalty-record/crud/show-document",fpApprove:e+"/penalty-record/approve",api_fpChallan2:e+"/penalty-record/get-challan",getFpUploadedDocument:e+"/penalty-record/get-uploaded-document",api_FPTrack:`${e}/penalty-record/challan-search`,api_FpApplyReport:`${e}/penalty-record/challan-search`,api_ChallanGeneratingReport:`${e}/report/challan-wise`,api_ViolationWiseReport:`${e}/report/violation-wise`,api_CollectionReport:`${e}/report/collection-wise`,api_getChallanById:`${e}/penalty-record/get-challan`,api_challanOfflinePayment:`${e}/penalty-record/offline-challan-payment`,api_FpReceipt:e+"/penalty-record/payment-receipt",api_getViolationList:`${e}/violation/list`,api_getSectionList:`${e}/section/list`,api_assignViolation:`${e}/violation/onspot`,api_getDepartmentList:`${e}/department/list`,api_getUserList:`${e}/user-list`,api_getViolationByDept:`${e}/violation/by-department`,api_listDepartment:`${e}/department/crud/list`,api_addDepartment:`${e}/department/crud/save`,api_updateDepartment:`${e}/`,api_deleteDepartment:`${e}/department/crud/delete`,api_listSection:`${e}/section/crud/list`,api_addSection:`${e}/section/crud/save`,api_updateSection:`${e}/`,api_deleteSection:`${e}/section/crud/delete`,api_compData:`${e}/report/comparison`,api_addRole:`${e}/wfrole/crud/save`,api_updateRole:`${e}/wfrole/crud/edit`,api_deletedRole:`${e}/wfrole/crud/delete`,api_listRole:`${e}/wfrole/crud/list`,api_addUser:`${e}/user/crud/create`,api_updateUser:`${e}/user/crud/edit`,api_deletedUser:`${e}/user/crud/delete`,api_listUser:`${e}/user/crud/list`,api_assignRole:`${e}/user/role-assign`,api_cashVerificaionList:`${e}/fines/cash-verification-list`,api_cashVerificaionById:`${e}/fines/cash-verification-dtl`,api_verifyCash:`${e}/fines/verify-cash`,api_generateOrderId:`${e}/fines/citizen-online-payment`,api_verifyPaymentStatus:`${e}/`,api_searchChallanDirect:`${e}/penalty-record/citizen-challan-search`,api_getTransactionNo:`${e}/penalty-record/get-tran-no`,api_sendOnlineResponse:`${e}/fines/razorpay/save-response`,api_enf_officer:`${e}/user/enf-officer`,api_enf_cell:`${e}/user/enf-officer`,api_violation_list:`${e}/v2/violation/crud/list`}}export{Qt as P,Xt as a};
