;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
 * jQuery JavaScript Library v2.2.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T20:02Z
 */
(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var arr=[];var document=window.document;var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var
version="2.2.0",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this);},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window;},isNumeric:function(obj){var realStringObj=obj&&obj.toString();return!jQuery.isArray(obj)&&(realStringObj-parseFloat(realStringObj)+1)>=0;},isPlainObject:function(obj){if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
if(obj.constructor&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}
return true;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},type:function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;},globalEval:function(code){var script,indirect=eval;code=jQuery.trim(code);if(code){if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else{indirect(code);}}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return concat.apply([],ret);},guid:1,proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},unloadHandler=function(){setDocument();};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;}else if(context.nodeName.toLowerCase()!=="object"){if((nid=context.getAttribute("id"))){nid=nid.replace(rescape,"\\$&");}else{context.setAttribute("id",(nid=expando));}
groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}
newSelector=groups.join(",");newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if((parent=document.defaultView)&&parent.top!==parent){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}
support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}
if(node===elem){break;}}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{uniqueCache[dir]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not;});}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}
return indexOf.call(this,elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnotwhite=(/\S+/g);function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
if(!options.memory){memory=false;}
firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=queue=[];if(!memory){list=memory="";}
return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});var readyList;jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}
jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}}
return readyList.promise(obj);};jQuery.ready.promise();var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){this.expando=jQuery.expando+Data.uid++;}
Data.uid=1;Data.prototype={register:function(owner,initial){var value=initial||{};if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}
return owner[this.expando];},cache:function(owner){if(!acceptData(owner)){return{};}
var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}
return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[data]=value;}else{for(prop in data){cache[prop]=data[prop];}}
return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][key];},access:function(owner,key,value){var stored;if(key===undefined||((key&&typeof key==="string")&&value===undefined)){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));}
this.set(owner,key,value);return value!==undefined?value:key;},remove:function(owner,key){var i,name,camel,cache=owner[this.expando];if(cache===undefined){return;}
if(key===undefined){this.register(owner);}else{if(jQuery.isArray(key)){name=key.concat(key.map(jQuery.camelCase));}else{camel=jQuery.camelCase(key);if(key in cache){name=[key,camel];}else{name=camel;name=name in cache?[name]:(name.match(rnotwhite)||[]);}}
i=name.length;while(i--){delete cache[name[i]];}}
if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
dataUser.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
dataPriv.set(elem,"hasDataAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}
return access(this,function(value){var data,camelKey;if(elem&&value===undefined){data=dataUser.get(elem,key)||dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data!==undefined){return data;}
camelKey=jQuery.camelCase(key);data=dataUser.get(elem,camelKey);if(data!==undefined){return data;}
data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;}
return;}
camelKey=jQuery.camelCase(key);this.each(function(){var data=dataUser.get(this,camelKey);dataUser.set(this,camelKey,value);if(key.indexOf("-")>-1&&data!==undefined){dataUser.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){unit=unit||initialInUnit[3];valueParts=valueParts||[];initialInUnit=+initial||1;do{scale=scale||".5";initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
return adjusted;}
var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([\w:-]+)/);var rscriptType=(/^$|\/(?:java|ecma)script/i);var wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}
var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent="";}}}
fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(fragment.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;}
(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var
rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){on(elem,type,selector,data,types[type],one);}
return elem;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(event){event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY "+"screenX screenY toElement").split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+
(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-
(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+
(doc&&doc.scrollTop||body&&body.scrollTop||0)-
(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return elem.getElementsByTagName("tbody")[0]||elem;}
return elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
function domManip(collection,args,callback,ignored){args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
domManip(self,args,callback,ignored);});}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(collection[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}
return collection;}
function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}
node.parentNode.removeChild(node);}}
return elem;}
jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
elem[dataPriv.expando]=undefined;}
if(elem[dataUser.expando]){elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({domManip:domManip,detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var iframe,elemdisplay={HTML:"block",BODY:"block"};function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.detach();return display;}
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc=iframe[0].contentDocument;doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view.opener){view=window;}
return view.getComputedStyle(elem);};var swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);function computeStyleTests(){div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);}
jQuery.extend(support,{pixelPosition:function(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return boxSizingReliableVal;},pixelMarginRight:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return pixelMarginRightVal;},reliableMarginLeft:function(){if(boxSizingReliableVal==null){computeStyleTests();}
return reliableMarginLeftVal;},reliableMarginRight:function(){var ret,marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;"+"display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";documentElement.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style;function vendorPropName(name){if(name in emptyStyle){return name;}
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
function setPositiveNumber(elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(document.msFullscreenElement&&window.top!==window){if(elem.getClientRects().length){val=Math.round(elem.getBoundingClientRect()[name]*100);}}
if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=dataPriv.get(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display!=="none"||!hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":"cssFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
if(value==null||value!==value){return;}
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}
return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];display=jQuery.css(elem,"display");checkDisplay=display==="none"?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}else{display=undefined;}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}
return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnotwhite);}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;select.disabled=true;support.optDisabled=!opt.disabled;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
elem.setAttribute(name,value+"");return value;}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){elem[propName]=false;}
elem.removeAttribute(name);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
return(elem[name]=value);}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
if(!arguments.length){return this.attr("class","");}
if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
return this.each(function(){var className,i,self,classNames;if(type==="string"){i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}
return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){return jQuery.trim(elem.value);}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);if(e.isDefaultPrevented()){event.preventDefault();}}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}
var location=window.location;var nonce=jQuery.now();var rquery=(/\?/);jQuery.parseJSON=function(data){return JSON.parse(data+"");};jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}
try{xml=(new window.DOMParser()).parseFromString(data,"text/xml");}catch(e){xml=undefined;}
if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){s.crossDomain=true;}}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(state===2){return jqXHR;}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return!jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible=function(elem){return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){xhr.setRequestHeader(i,headers[i]);}
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};xhr.onload=callback();errorCallback=xhr.onerror=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback();}});}};}
callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});support.createHTMLDocument=(function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;})();jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||(support.createHTMLDocument?document.implementation.createHTMLDocument(""):document);var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(self,response||[jqXHR.responseText,status,jqXHR]);});});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}
jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
box=elem.getBoundingClientRect();win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function(){if(!this[0]){return;}
var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true)-
offsetParent.scrollTop();parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true)-
offsetParent.scrollLeft();}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}
return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},size:function(){return this.length;}});jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(!noGlobal){window.jQuery=window.$=jQuery;}
return jQuery;}));
/*!
 * VERSION: 1.7.5
 * DATE: 2015-02-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,r){var s="x"===r?"Width":"Height",n="scroll"+s,o="client"+s,a=document.body;return i===e||i===t||i===a?Math.max(t[n],a[n])-(e["inner"+s]||t[o]||a[o]):i[n]-i["offset"+s]},r=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.5",init:function(t,r,s){return this._wdw=t===e,this._target=t,this._tween=s,"object"!=typeof r&&(r={y:r}),this.vars=r,this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=r.x?(this._addTween(this,"x",this.x,"max"===r.x?i(t,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=r.y?(this._addTween(this,"y",this.y,"max"===r.y?i(t,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var r=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,n=s-this.yPrev,o=r-this.xPrev;this._autoKill&&(!this.skipX&&(o>7||-7>o)&&i(this._target,"x")>r&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>s&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?r:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),s=r.prototype;r.max=i,s.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},s.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},s._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.17.0",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,h=1/(1-r),l=this._firstPT;l;)o=l.s+l.c,l.c*=h,l.s=o-l.c,l=l._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._totalTime,d=this._cycle,g=this._duration,v=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>v||v===n)&&v!==t&&(i=!0,v>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||v===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&v>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=c=!e||t||v===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=g+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(l=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&l>=.5)&&(l=1-l),3===_&&(l*=2),1===u?l*=l:2===u?l*=l*l:3===u?l*=l*l*l:4===u&&(l*=l*l*l*l),this.ratio=1===_?1-l:2===_?l:.5>this._time/g?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/g)),p===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=p,this._totalTime=m,this._rawPrevTime=v,this._cycle=d,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===m&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this._callback("onStart"))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===g&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,c){a=a||0;var f,p,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(c||n.callbackScope||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),f=t.length-1,m=0;f>=m;m++){p={};for(d in n)p[d]=n[d];p.delay=g,m===f&&l&&(p.onComplete=y),v[m]=new r(t[m],e,p),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},c=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=c(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,c,f=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in f)for(l=f[_].target.parentNode;l;)l===t&&(n=n.concat(f[_].tweens)),l=l.parentNode;for(c=n.length,u=0;c>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var f=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=c(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){f(!0,t,e,i)},r.resumeAll=function(t,e,i){f(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],c=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,c=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=c,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&c.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&c.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&c.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=f(r.startAt)),c.to(t[u],e,f(r),u*n);return this.add(c,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,c,f,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(c=r[u])&&(c=new s({tweens:c})),this.add(c,l),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?l=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,p=f.rawTime()>r._startTime;f._timeline;)p&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==c&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(f===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=e._internals,a=n.lazyTweens,o=n.lazyRender,h=new i(null,null,1,0),l=s.prototype=new t;return l.constructor=s,l.kill()._gc=!1,s.version="1.17.0",l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},l.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},l.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},l.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},l.tweenTo=function(t,i){i=i||{};var s,r,n,a={ease:h,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)a[r]=i[r];return a.time=this._parseTimeOrLabel(t),s=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,n=new e(this,s,a),a.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&n._callback("onStart")},n},l.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},l.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,h,l,_,u,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,p=this._time,m=this._totalTime,d=this._startTime,g=this._timeScale,v=this._rawPrevTime,y=this._paused,T=this._cycle;if(t>=c)this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,l="onComplete",_=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>v||v===r)&&v!==t&&this._first&&(_=!0,v>r&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==p||0===f&&v!==r&&(v>0||0>t&&v>=0)&&!this._locked)&&(l="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(_=n=!0,l="onReverseComplete"):v>=0&&this._first&&(_=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(_=!0)}else 0===f&&0>v&&(_=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=f+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time));if(this._cycle!==T&&!this._locked){var x=this._yoyo&&0!==(1&T),w=x===(this._yoyo&&0!==(1&this._cycle)),b=this._totalTime,P=this._cycle,k=this._rawPrevTime,S=this._time;if(this._totalTime=T*f,T>this._cycle?x=!x:this._totalTime+=f,this._time=p,this._rawPrevTime=0===f?v-1e-4:v,this._cycle=T,this._locked=!0,p=x?0:f,this.render(p,e,0===f),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),w&&(p=x?f+1e-4:-1e-4,this.render(p,!0,!1)),this._locked=!1,this._paused&&!y)return;this._time=S,this._totalTime=b,this._cycle=P,this._rawPrevTime=k}if(!(this._time!==p&&this._first||i||_))return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==m&&t>0&&(this._active=!0),0===m&&this.vars.onStart&&0!==this._totalTime&&(e||this._callback("onStart")),this._time>=p)for(s=this._first;s&&(h=s._next,!this._paused||y);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;else for(s=this._last;s&&(h=s._prev,!this._paused||y);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;this._onUpdate&&(e||(a.length&&o(),this._callback("onUpdate"))),l&&(this._locked||this._gc||(d===this._startTime||g!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this._callback(l)))},l.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},l.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},l.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},l.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},l.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},l.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},l.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},l.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,c=(l+_)/2,f=(c-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+c)/2,a.b=c-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,r,n,a,o){var l,_,u,c,f,p,m,d,g,v,y,T,x,w=t.length-1,b=0,P=t[0].a;for(l=0;w>l;l++)f=t[b],_=f.a,u=f.d,c=t[b+1].d,o?(y=e[l],T=i[l],x=.25*(T+y)*r/(a?.5:s[l]||.5),p=u-(u-_)*(a?.5*r:0!==y?x/y:0),m=u+(c-u)*(a?.5*r:0!==T?x/T:0),d=u-(p+((m-p)*(3*y/(y+T)+.5)/4||0))):(p=u-.5*(u-_)*r,m=u+.5*(c-u)*r,d=u-(p+m)/2),p+=d,m+=d,f.c=g=p,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=h(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,h,l,_,u,c,f=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(c=t[h][s])&&"="===c.charAt(1)&&(t[h][s]=n[s]+Number(c.charAt(0)+c.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),f;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],f[h]=new a(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return f[h]=new a(t[h][s],0,0,t[h+1][s]),f},u=function(t,n,a,h,u,c){var f,p,m,d,g,v,y,T,x={},w=[],b=c||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(p in t[0])w.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,f=w.length;--f>-1;)if(p=w[f],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=s.length=0,f=w.length;--f>-1;)p=w[f],r[p]=-1!==u.indexOf(","+p+","),x[p]=_(t,p,r[p],c);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!h){for(f=w.length;--f>-1;)if(r[p])for(m=x[w[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=w.length,d=a?4:1;--f>-1;)p=w[f],m=x[p],l(m,n,a,h,r[p]),y&&(m.splice(0,d),m.splice(m.length-d,d));return x},c=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,c,f,p,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(c in t[0])v.push(c);for(l=v.length;--l>-1;){for(c=v[l],m[c]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][c]:"string"==typeof(p=t[_][c])&&"="===p.charAt(1)?i[c]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[f++]=p=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,c,f,p=1/i,m=t.length;--m>-1;)for(c=t[m],n=c.a,a=c.d-n,o=c.c-n,h=c.b-n,s=r=0,_=1;i>=_;_++)l=p*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):c(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,c=this._segCount,f=this._func,p=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&c-1>r){for(l=c-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?c-1:c*e>>0,o=(e-i*(1/c))*c;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),f[n]?p[n](h):p[n]=h;if(this._autoRotate){var d,g,v,y,T,x,w,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],x=b[r][3]||0,w=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*w+x:this._initialRotations[r],f[n]?p[n](h):p[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new m;var l,_,u,c=e.values,f=c.length-1,p=[],d={};if(0>f)return o;for(l=0;f>=l;l++)u=i(t,c[l],a,o,h,f!==l),p[l]=u.end;for(_ in e)d[_]=e[_];return d.values=p,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,h={},l=a.prototype=new t("css");l.constructor=a,a.version="1.17.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var _,u,c,f,p,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,k=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,O=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,I=180/Math.PI,F={},N=document,E=function(t){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",t):N.createElement(t)},L=E("div"),X=E("img"),B=a._internals={_specialProps:h},Y=navigator.userAgent,j=function(){var t=Y.indexOf("Android"),e=E("a");return c=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),p=c&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),f=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),U=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=N.defaultView?N.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return j||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(k,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},$=B.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,c=L.style,f=0>s;if(f&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild)c[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||N.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;c[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return f?-o:o},H=B.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r,n={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||Pe===r)&&(n[r.replace(S,O)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||be===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(S,O)]=e[i]);return j||(n.opacity=U(t)),s=Ne(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Se&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==l[a]&&(o=new fe(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+r+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,"")),e.v=t),e||t},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,h,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),h="="===t.charAt(1),a=(h?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:I)-(h?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},he=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},le=a.parseColor=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=he(r+1/3,e,i),t[1]=he(r,e,i),t[2]=he(r-1/3,e,i),t):(t=t.match(d)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},_e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in oe)_e+="|"+l+"\\b";_e=RegExp(_e+")","gi");var ue=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(_e)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,c,f,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(p=t.replace(M,"|").split("|"),f=0;p.length>f;f++)p[f]=r(p[f]);return p.join(",")}if(e=(t.match(_e)||[n])[0],c=t.split(e).join("").match(v)||[],f=c.length,_>f--)for(;_>++f;)c[f]=i?c[0|(f-1)/2]:a[f];return o+c.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),c=0;n.length>c;c++)n[c]=r(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,_>c--)for(;_>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(l)+h}:function(t){return t}},ce=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},fe=(B._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(B._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,c={},f={},p=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=p,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,c[o]=s.s,n||(l=new fe(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],c[o]=s[h],n||(l=new fe(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:c,end:f,firstMPT:l,pt:_}},B.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,c){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===c?s+r:c,a&&(this._next=a,a._prev=this)}),me=function(t,e,i,s,r,n){var a=new pe(t,e,i,s-i,r,-1,n);return a.b=i,a.e=a.xs0=s,a},de=a.parseComplex=function(t,e,i,s,r,n,a,o,h,l){i=i||n||"",a=new pe(t,e,0,0,a,l?2:1,null,!1,o,i,s),s+="";var u,c,f,p,m,v,y,T,x,w,b,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),O=S.length,A=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),O=S.length),O!==R.length&&(S=(n||"").split(" "),O=S.length),a.plugin=h,a.setRatio=l,u=0;O>u;u++)if(p=S[u],m=R[u],T=parseFloat(p),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),A&&-1!==m.indexOf("px"),!0);else if(r&&("#"===p.charAt(0)||oe[p]||P.test(p)))k=","===m.charAt(m.length-1)?"),":")",p=le(p),m=le(m),x=p.length+m.length>6,x&&!j&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(j||(x=!1),a.appendXtra(x?"rgba(":"rgb(",p[0],m[0]-p[0],",",!0,!0).appendXtra("",p[1],m[1]-p[1],",",!0).appendXtra("",p[2],m[2]-p[2],x?",":k,!0),x&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>m.length?1:m[3])-p,k,!1)));else if(v=p.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(f=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,f),a.appendXtra(p.substr(f,w-f),Number(b),re(y[c],b),"",A&&"px"===p.substr(w+b.length,2),0===c),f=w+b.length;a["xs"+a.l]+=p.substr(f)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==s.indexOf("=")&&a.data){for(k=a.xs0+a.data.s,u=1;a.l>u;u++)k+=a["xs"+u]+a.data["xn"+u];a.e=k+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ge=9;for(l=pe.prototype,l.l=l.pr=0;--ge>0;)l["xn"+ge]=0,l["xs"+ge]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ve=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,h[t]=h[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ye=B._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ve(n[s],e)},Te=function(t){if(!h[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ye(t,{parser:function(t,i,s,r,n,a,l){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),h[s].parse(t,i,s,r,n,a,l)):(q("Error: "+e+" js file not loaded."),n)}})}};l=ve.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,c=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):c&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,c&&(_=e.indexOf(c),u=i.indexOf(c),_!==u&&(-1===u?o[a]=o[a].split(c).join(""):-1===_&&(o[a]+=" "+c)));e=o.join(", "),i=h.join(", ")}return de(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ye(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})},a.useSVGTransformAttr=c||f;var xe,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),be=W("transform"),Pe=V+"transform",ke=W("transformOrigin"),Se=null!==W("perspective"),Re=B.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Se?a.defaultForce3D||"auto":!1},Oe=window.SVGElement,Ae=function(t,e,i){var s,r=N.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Ce=N.documentElement,De=function(){var t,e,i,s=m||/Android/i.test(Y)&&!window.chrome;return N.createElementNS&&!s&&(t=Ae("svg",Ce),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[ke]="50% 50%",e.style[be]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(f&&Se),Ce.removeChild(t)),s}(),Me=function(t,e,i,s,r){var n,o,h,l,_,u,c,f,p,m,d,g,v,y,T=t._gsTransform,x=Fe(t,!0);T&&(v=T.xOrigin,y=T.yOrigin),(!s||2>(n=s.split(" ")).length)&&(c=t.getBBox(),e=se(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=l=parseFloat(n[0]),i.yOrigin=_=parseFloat(n[1]),s&&x!==Ie&&(u=x[0],c=x[1],f=x[2],p=x[3],m=x[4],d=x[5],g=u*p-c*f,o=l*(p/g)+_*(-f/g)+(f*d-p*m)/g,h=l*(-c/g)+_*(u/g)-(u*d-c*m)/g,l=i.xOrigin=n[0]=o,_=i.yOrigin=n[1]=h),T&&(r||r!==!1&&a.defaultSmoothOrigin!==!1?(o=l-v,h=_-y,T.xOffset+=o*x[0]+h*x[2]-o,T.yOffset+=o*x[1]+h*x[3]-h):T.xOffset=T.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},ze=function(t){return!!(Oe&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Ie=[1,0,0,1,0,0],Fe=function(t,e){var i,s,r,n,a,o=t._gsTransform||new Re,h=1e5;if(be?s=Q(t,Pe,null,!0):t.currentStyle&&(s=t.currentStyle.filter.match(C),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),o.x||0,o.y||0].join(","):""),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,(o.svg||t.getBBox&&ze(t))&&(i&&-1!==(t.style[be]+"").indexOf("matrix")&&(s=t.style[be],i=0),r=t.getAttribute("transform"),i&&r&&(-1!==r.indexOf("matrix")?(s=r,i=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Ie;for(r=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ge=r.length;--ge>-1;)n=Number(r[ge]),r[ge]=(a=n-(n|=0))?(0|a*h+(0>a?-.5:.5))/h+n:n;return e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r},Ne=B.getTransform=function(t,i,s,n){if(t._gsTransform&&s&&!n)return t._gsTransform;var o,h,l,_,u,c,f=s?t._gsTransform||new Re:new Re,p=0>f.scaleX,m=2e-5,d=1e5,g=Se?parseFloat(Q(t,ke,i,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!ze(t)),f.svg&&(Me(t,Q(t,ke,r,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),xe=a.useSVGTransformAttr||De),o=Fe(t),o!==Ie){if(16===o.length){var y,T,x,w,b,P=o[0],k=o[1],S=o[2],R=o[3],O=o[4],A=o[5],C=o[6],D=o[7],M=o[8],z=o[9],F=o[10],N=o[12],E=o[13],L=o[14],X=o[11],B=Math.atan2(C,F);f.zOrigin&&(L=-f.zOrigin,N=M*L-o[12],E=z*L-o[13],L=F*L+f.zOrigin-o[14]),f.rotationX=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=O*w+M*b,T=A*w+z*b,x=C*w+F*b,M=O*-b+M*w,z=A*-b+z*w,F=C*-b+F*w,X=D*-b+X*w,O=y,A=T,C=x),B=Math.atan2(M,F),f.rotationY=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),y=P*w-M*b,T=k*w-z*b,x=S*w-F*b,z=k*b+z*w,F=S*b+F*w,X=R*b+X*w,P=y,k=T,S=x),B=Math.atan2(k,P),f.rotation=B*I,B&&(w=Math.cos(-B),b=Math.sin(-B),P=P*w+O*b,T=k*w+A*b,A=k*-b+A*w,C=S*-b+C*w,k=T),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY+=180),f.scaleX=(0|Math.sqrt(P*P+k*k)*d+.5)/d,f.scaleY=(0|Math.sqrt(A*A+z*z)*d+.5)/d,f.scaleZ=(0|Math.sqrt(C*C+F*F)*d+.5)/d,f.skewX=0,f.perspective=X?1/(0>X?-X:X):0,f.x=N,f.y=E,f.z=L,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*P-f.yOrigin*O),f.y-=f.yOrigin-(f.yOrigin*k-f.xOrigin*A))}else if(!(Se&&!n&&o.length&&f.x===o[4]&&f.y===o[5]&&(f.rotationX||f.rotationY)||void 0!==f.x&&"none"===Q(t,"display",i))){var Y=o.length>=6,j=Y?o[0]:1,U=o[1]||0,q=o[2]||0,V=Y?o[3]:1;f.x=o[4]||0,f.y=o[5]||0,l=Math.sqrt(j*j+U*U),_=Math.sqrt(V*V+q*q),u=j||U?Math.atan2(U,j)*I:f.rotation||0,c=q||V?Math.atan2(q,V)*I+u:f.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(l*=-1,c+=0>=u?180:-180,u+=0>=u?180:-180):(_*=-1,c+=0>=c?180:-180)),f.scaleX=l,f.scaleY=_,f.rotation=u,f.skewX=c,Se&&(f.rotationX=f.rotationY=f.z=0,f.perspective=v,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*j+f.yOrigin*q),f.y-=f.yOrigin-(f.xOrigin*U+f.yOrigin*V))}f.zOrigin=g;for(h in f)m>f[h]&&f[h]>-m&&(f[h]=0)}return s&&(t._gsTransform=f,f.svg&&(xe&&t.style[be]?e.delayedCall(.001,function(){Be(t.style,be)}):!xe&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},Ee=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,c=this.t.currentStyle;if(c){i=h,h=-l,l=-i,e=c.filter,u.filter="";var f,p,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,w=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,p=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+p*h),b+=p-(f*l+p*_)),v?(f=d/2,p=g/2,y+=", Dx="+(f-(f*o+p*h)+w)+", Dy="+(p-(f*l+p*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,k,S,R=8>m?1:-1;for(f=s.ieOffsetX||0,p=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+w),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),ge=0;4>ge;ge++)k=ee[ge],P=c[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(T,""))||0,S=i!==s[k]?2>ge?-s.ieOffsetX:-s.ieOffsetY:2>ge?f-s.ieOffsetX:p-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ge||2===ge?1:R)))+"px"}}},Le=B.set3DTransformRatio=B.setTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,c,p,m,d,g,v,y,T,x,w,b,P,k=this.data,S=this.t.style,R=k.rotation,O=k.rotationX,A=k.rotationY,C=k.scaleX,D=k.scaleY,M=k.scaleZ,I=k.x,F=k.y,N=k.z,E=k.svg,L=k.perspective,X=k.force3D;if(!(((1!==t&&0!==t||"auto"!==X||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&X||N||L||A||O)&&(!xe||!E)&&Se))return R||k.skewX||E?(R*=z,b=k.skewX*z,P=1e5,e=Math.cos(R)*C,r=Math.sin(R)*C,i=Math.sin(R-b)*-D,n=Math.cos(R-b)*D,b&&"simple"===k.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,k.skewY&&(e*=v,r*=v)),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset,xe&&(k.xPercent||k.yPercent)&&(m=this.t.getBBox(),I+=.01*k.xPercent*m.width,F+=.01*k.yPercent*m.height),m=1e-6,m>I&&I>-m&&(I=0),m>F&&F>-m&&(F=0)),T=(0|e*P)/P+","+(0|r*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+I+","+F+")",E&&xe?this.t.setAttribute("transform","matrix("+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+T):S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+I+","+F+")",void 0;if(f&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||k.z||k.rotationX||k.rotationY||(L=0)),R||k.skewX)R*=z,d=e=Math.cos(R),g=r=Math.sin(R),k.skewX&&(R-=k.skewX*z,d=Math.cos(R),g=Math.sin(R),"simple"===k.skewType&&(v=Math.tan(k.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v,k.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(A||O||1!==M||L||E))return S[be]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) translate3d(":"translate3d(")+I+"px,"+F+"px,"+N+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""),void 0;e=n=1,i=r=0}l=1,s=a=o=h=_=u=0,c=L?-1/L:0,p=k.zOrigin,m=1e-6,x=",",w="0",R=A*z,R&&(d=Math.cos(R),g=Math.sin(R),o=-g,_=c*-g,s=e*g,a=r*g,l=d,c*=d,e*=d,r*=d),R=O*z,R&&(d=Math.cos(R),g=Math.sin(R),v=i*d+s*g,y=n*d+a*g,h=l*g,u=c*g,s=i*-g+s*d,a=n*-g+a*d,l*=d,c*=d,i=v,n=y),1!==M&&(s*=M,a*=M,l*=M,c*=M),1!==D&&(i*=D,n*=D,h*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(p||E)&&(p&&(I+=s*-p,F+=a*-p,N+=l*-p+p),E&&(I+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,F+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset),m>I&&I>-m&&(I=w),m>F&&F>-m&&(F=w),m>N&&N>-m&&(N=0)),T=k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?w:e)+x+(m>r&&r>-m?w:r)+x+(m>o&&o>-m?w:o),T+=x+(m>_&&_>-m?w:_)+x+(m>i&&i>-m?w:i)+x+(m>n&&n>-m?w:n),O||A?(T+=x+(m>h&&h>-m?w:h)+x+(m>u&&u>-m?w:u)+x+(m>s&&s>-m?w:s),T+=x+(m>a&&a>-m?w:a)+x+(m>l&&l>-m?w:l)+x+(m>c&&c>-m?w:c)+x):T+=",0,0,0,0,1,0,",T+=I+x+F+x+N+x+(L?1+-N/L:1)+")",S[be]=T};l=Re.prototype,l.x=l.y=l.z=l.skewX=l.skewY=l.rotation=l.rotationX=l.rotationY=l.zOrigin=l.xPercent=l.yPercent=l.xOffset=l.yOffset=0,l.scaleX=l.scaleY=l.scaleZ=1,ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,s,n,o,h){if(s._lastParsedTransform===h)return n;s._lastParsedTransform=h;var l,_,u,c,f,p,m,d,g,v=t._gsTransform,y=s._transform=Ne(t,r,!0,h.parseTransform),T=t.style,x=1e-6,w=we.length,b=h,P={},k="transformOrigin";if("string"==typeof b.transform&&be)u=L.style,u[be]=b.transform,u.display="block",u.position="absolute",N.body.appendChild(L),l=Ne(L,null,!1),N.body.removeChild(L),null!=b.xPercent&&(l.xPercent=ne(b.xPercent,y.xPercent)),null!=b.yPercent&&(l.yPercent=ne(b.yPercent,y.yPercent));else if("object"==typeof b){if(l={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,y.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,y.scaleY),scaleZ:ne(b.scaleZ,y.scaleZ),x:ne(b.x,y.x),y:ne(b.y,y.y),z:ne(b.z,y.z),xPercent:ne(b.xPercent,y.xPercent),yPercent:ne(b.yPercent,y.yPercent),perspective:ne(b.transformPerspective,y.perspective)},m=b.directionalRotation,null!=m)if("object"==typeof m)for(u in m)b[u]=m[u];else b.rotation=m;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(l.x=0,l.xPercent=ne(b.x,y.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(l.y=0,l.yPercent=ne(b.y,y.yPercent)),l.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:y.rotation,y.rotation,"rotation",P),Se&&(l.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":y.rotationX||0,y.rotationX,"rotationX",P),l.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":y.rotationY||0,y.rotationY,"rotationY",P)),l.skewX=null==b.skewX?y.skewX:ae(b.skewX,y.skewX),l.skewY=null==b.skewY?y.skewY:ae(b.skewY,y.skewY),(_=l.skewY-y.skewY)&&(l.skewX+=_,l.rotation+=_)}for(Se&&null!=b.force3D&&(y.force3D=b.force3D,p=!0),y.skewType=b.skewType||y.skewType||a.defaultSkewType,f=y.force3D||y.z||y.rotationX||y.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,f||null==b.scale||(l.scaleZ=1);--w>-1;)i=we[w],c=l[i]-y[i],(c>x||-x>c||null!=b[i]||null!=F[i])&&(p=!0,n=new pe(y,i,y[i],c,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return c=b.transformOrigin,y.svg&&(c||b.svgOrigin)&&(d=y.xOffset,g=y.yOffset,Me(t,se(c),l,b.svgOrigin,b.smoothOrigin),n=me(y,"xOrigin",(v?y:l).xOrigin,l.xOrigin,n,k),n=me(y,"yOrigin",(v?y:l).yOrigin,l.yOrigin,n,k),(d!==y.xOffset||g!==y.yOffset)&&(n=me(y,"xOffset",v?d:y.xOffset,y.xOffset,n,k),n=me(y,"yOffset",v?g:y.yOffset,y.yOffset,n,k)),c=xe?null:"0px 0px"),(c||Se&&f&&y.zOrigin)&&(be?(p=!0,i=ke,c=(c||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(T,i,0,0,n,-1,k),n.b=T[i],n.plugin=o,Se?(u=y.zOrigin,c=c.split(" "),y.zOrigin=(c.length>2&&(0===u||"0px"!==c[2])?parseFloat(c[2]):u)||0,n.xs0=n.e=c[0]+" "+(c[1]||"50%")+" 0px",n=new pe(y,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=y.zOrigin):n.xs0=n.e=c):se(c+"",y)),p&&(s._transformType=y.svg&&xe||!f&&3!==this._transformType?2:3),n},prefix:!0}),ye("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ye("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,c,f,p,m,d,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=W(b[h])),u=_=Q(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),c=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),x=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(x/d)+"%"):"em"===g?(w=$(t,"borderLeft",1,"em"),u=T/w+"em",_=x/w+"em"):(u=T+"px",_=x+"px"),y&&(c=parseFloat(u)+p+g,l=parseFloat(_)+p+g)),a=de(P,b[h],u+" "+_,c+" "+l,!1,"0px",a);return a},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ye("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,c,f="background-position",p=r||Z(t,null),d=this.format((p?m?p.getPropertyValue(f+"-x")+" "+p.getPropertyValue(f+"-y"):p.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(R,""),c&&"none"!==c)){for(o=d.split(" "),h=g.split(" "),X.setAttribute("src",c),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-X.width:t.offsetHeight-X.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),ye("backgroundSize",{defaultValue:"0 0",formatter:se}),ye("perspective",{defaultValue:"0px",prefix:!0}),ye("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ye("transformStyle",{prefix:!0}),ye("backfaceVisibility",{prefix:!0}),ye("userSelect",{prefix:!0}),ye("margin",{parser:ce("marginTop,marginRight,marginBottom,marginLeft")}),ye("padding",{parser:ce("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ye("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>m?(h=t.currentStyle,l=8>m?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ye("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ye("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),ye("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(_e)||["#000"])[0]}}),ye("borderWidth",{parser:ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ye("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Xe=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(x,"opacity="+r))};ye("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),j?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Xe),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Be=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(k,"-$1").toLowerCase())):t.removeAttribute(e))},Ye=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Be(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ye("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,c,f,p=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ye,a.pr=-11,i=!0,a.b=p,_=K(t,r),u=t._gsClassPT){for(c={},f=u.data;f;)c[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),l=J(t,_,K(t),h,c),t.setAttribute("class",p),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)}});var je=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=h.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],h[i]&&(h[i].parse===o?r=!0:i="transformOrigin"===i?ke:h[i].p),Be(a,i);r&&(Be(a,be),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(ye("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=je,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ge=l.length;ge--;)Te(l[ge]);l=a.prototype,l._firstPT=l._lastParsedTransform=l._transform=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var l,f,m,d,g,v,y,T,x,b=t.style;if(u&&""===b.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(d=b.cssText,l=K(t,r),b.cssText=d+";"+e,l=J(t,l,K(t)).difs,!j&&w.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,b.cssText=d),this._firstPT=f=e.className?h.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(x=3===this._transformType,be?c&&(u=!0,""===b.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):b.zoom=1,m=f;m&&m._next;)m=m._next;T=new pe(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=be?Le:Ee,T.data=this._transform||Ne(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;f;){for(v=f._next,m=d;m&&m.pr>f.pr;)m=m._next;(f._prev=m?m._prev:g)?f._prev._next=f:d=f,(f._next=m)?m._prev=f:g=f,f=v}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,o,l,u,c,f,p,m,d,g,v=t.style;for(a in e)f=e[a],o=h[a],o?i=o.parse(t,f,a,this,i,n,e):(c=Q(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(f)?(d||(f=le(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=de(v,a,c,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(l=parseFloat(c),p=l||0===l?c.substr((l+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(l=ie(t,a,r),p="px"):"left"===a||"top"===a?(l=H(t,a,r),p="px"):(l="opacity"!==a?0:1,p="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(T,"")):(u=parseFloat(f),m=d?f.replace(T,""):""),""===m&&(m=a in s?s[a]:p),f=u||0===u?(g?u+l:u)+m:e[a],p!==m&&""!==m&&(u||0===u)&&l&&(l=$(t,a,l,p),"%"===m?(l/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(c=l+"%")):"em"===m?l/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+l+m)),g&&(u+=l),!l&&0!==l||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,u||l||0,0,i,-1,a,!1,0,c,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:c):q("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,l,u-l,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,c,f),i.xs0=m)):i=de(v,a,c,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;){if(2!==r.type)if(r.r&&-1!==r.type)if(e=Math.round(r.s+r.c),r.type){if(1===r.type){for(s=r.l,i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}}else r.t[r.p]=e+r.xs0;else r.t[r.p]=r.e;else r.setRatio(t);r=r._next}},l._enableTransforms=function(t){this._transform=this._transform||Ne(this._target,r,!0),this._transformType=this._transform.svg&&xe||!t&&3!==this._transformType?2:3};var Ue=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var s=this._firstPT=new pe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ue,s.data=this},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var qe=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)qe(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||qe(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,h=e.to(t,i,s),l=[h],_=[],u=[],c=[],f=e._internals.reservedProps;for(t=h._targets||h.target,qe(t,_,c),h.render(i,!0,!0),qe(t,u),h.render(0,!0,!0),h._enabled(!0),r=c.length;--r>-1;)if(n=J(c[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)f[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];l.push(e.fromTo(c[r],i,o,n))}return l},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),function(){var t=/(?:\d|\-|\+|=|#|\.)*/g,e=/[A-Za-z%]/g;_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.4.0",init:function(i,s){var r,n,a,o,h;if("function"!=typeof i.setAttribute)return!1;this._target=i,this._proxy={},this._start={},this._end={},this._suffix={};for(r in s)this._start[r]=this._proxy[r]=n=i.getAttribute(r)+"",this._end[r]=a=s[r]+"",this._suffix[r]=o=e.test(a)?a.replace(t,""):e.test(n)?n.replace(t,""):"",o&&(h=a.indexOf(o),-1!==h&&(a=a.substr(0,h))),this._addTween(this._proxy,r,parseFloat(n),a,r)||(this._suffix[r]=""),"="===a.charAt(1)&&(this._end[r]=this._firstPT.s+this._firstPT.c+o),this._overwriteProps.push(r);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start,n=r===this._proxy;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+(n?this._suffix[e]:""))}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=l[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},m=function(s,r,n,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,c,f,d=r.length,g=d;--d>-1;)(_=p[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),c=u.pop(),f=h(u.join("."))[c]=this.gsClass=n.apply(n,o),a&&(i[c]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),x=T.map={},w=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],x[n+"."+o]=x[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,w(new T(null,null,1,r),n,"easeOut",!0),w(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),w(new T(null,null,3,r),n,"easeInOut");x.linear=l.easing.Linear.easeIn,x.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,k=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},R=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],k=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=S(),f=e!==!1&&P,p=500,m=33,d="tick",g=function(t){var e,a,o=S()-R;o>p&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&l.dispatchEvent(d)};b.call(l),l.time=l.frame=0,l.tick=function(){g(!0)},l.lagSmoothing=function(t,e){p=t||1/_,m=Math.min(e,p,0)},l.sleep=function(){null!=r&&(f&&k?k(r):clearTimeout(r),s=c,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=S()-p+5),s=0===i?c:f&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),g(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),f=t,l.fps(i),void 0):f},l.fps(t),setTimeout(function(){f&&5>l.frame&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var O=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,U){o||a.wake();var i=this.vars.useFrames?j:U;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=O.ticker=new l.Ticker,n=O.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var A=function(){o&&S()-R>2e3&&a.wake(),setTimeout(A,2e3)};A(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||y)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&V())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&this.render(s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,!0,!0)),this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){O.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new O,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(O.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=G(n,this,!1),1===h&&this._siblings[r].length>1&&Z(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=G(e,this,!1),1===h&&this._siblings.length>1&&Z(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)B[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!E[i]||E[i]&&E[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new O,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.17.0",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],F={},N=D._internals={isArray:f,isSelector:M,lazyTweens:I},E=D._plugins={},L=N.tweenLookup={},X=0,B=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=O._rootFramesTimeline=new C,U=O._rootTimeline=new C,q=30,V=N.lazyRender=function(){var t,e=I.length;for(F={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};U._startTime=a.time,j._startTime=a.frame,U._active=j._active=!0,setTimeout(V,1),O._updateRoot=D.render=function(){var t,e,i;if(I.length&&V(),U.render((a.time-U._startTime)*U._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&V(),a.frame>=q){q=a.frame+(parseInt(D.autoSleep,10)||120);for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=U._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",O._updateRoot);var G=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+X++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},W=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},Z=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,c=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Q(e,0,p),0===Q(o,l,p)&&(c[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(c[f++]=o)));for(n=f;--n>-1;)if(o=c[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!W(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Q=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)B[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):x[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;F[e._gsTweenID]&&V(),this.vars.css||e.style&&e!==t&&e.nodeType&&E.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],B[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(E[n]&&(h=new E[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&Z(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_&&"isPause"!==this.data)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(l!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,c=this._easeType,f=this._easePower;(1===c||3===c&&u>=.5)&&(u=1-u),3===c&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===c?1-u:2===c?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u,c=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((f(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in l)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!W(this,i,e,u))return!1}for(n in l)(a=o[n])&&(c&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,h=!0),a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],O.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=G(s[i],this,!0);else this._siblings=G(this.target,this,!0)}return O.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((f(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=G(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var $=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=$.prototype},!0);if(n=$.prototype,$.version="1.10.1",$.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-Number(i):parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},$.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===$.API&&(E[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){$.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new $(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,$.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in p)p[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
(function(){"use strict";var t=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},e=[].slice;!function(t,e){return"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(n){return e(n,t)}):e(t.jQuery,t)}(this,function(n,o){var r,i,l,s,c,u,a,f,h,d,p,v,y,m,g,w;return r=n(o),f=t.call(o,"ontouchstart")>=0,s={horizontal:{},vertical:{}},c=1,a={},u="waypoints-context-id",p="resize.waypoints",v="scroll.waypoints",y=1,m="waypoints-waypoint-ids",g="waypoint",w="waypoints",i=function(){function t(t){var e=this;this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+c++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},t.data(u,this.id),a[this.id]=this,t.bind(v,function(){var t;return e.didScroll||f?void 0:(e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},o.setTimeout(t,n[w].settings.scrollThrottle))}),t.bind(p,function(){var t;return e.didResize?void 0:(e.didResize=!0,t=function(){return n[w]("refresh"),e.didResize=!1},o.setTimeout(t,n[w].settings.resizeThrottle))})}return t.prototype.doScroll=function(){var t,e=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!f||t.vertical.oldScroll&&t.vertical.newScroll||n[w]("refresh"),n.each(t,function(t,o){var r,i,l;return l=[],i=o.newScroll>o.oldScroll,r=i?o.forward:o.backward,n.each(e.waypoints[t],function(t,e){var n,r;return o.oldScroll<(n=e.offset)&&n<=o.newScroll?l.push(e):o.newScroll<(r=e.offset)&&r<=o.oldScroll?l.push(e):void 0}),l.sort(function(t,e){return t.offset-e.offset}),i||l.reverse(),n.each(l,function(t,e){return e.options.continuous||t===l.length-1?e.trigger([r]):void 0})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,o,r=this;return o=n.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:o?0:e.left,contextScroll:o?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:o?0:e.top,contextScroll:o?0:this.oldScroll.y,contextDimension:o?n[w]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},n.each(t,function(t,e){return n.each(r.waypoints[t],function(t,o){var r,i,l,s,c;return r=o.options.offset,l=o.offset,i=n.isWindow(o.element)?0:o.$element.offset()[e.offsetProp],n.isFunction(r)?r=r.apply(o.element):"string"==typeof r&&(r=parseFloat(r),o.options.offset.indexOf("%")>-1&&(r=Math.ceil(e.contextDimension*r/100))),o.offset=i-e.contextOffset+e.contextScroll-r,o.options.onlyOnScroll&&null!=l||!o.enabled?void 0:null!==l&&l<(s=e.oldScroll)&&s<=o.offset?o.trigger([e.backward]):null!==l&&l>(c=e.oldScroll)&&c>=o.offset?o.trigger([e.forward]):null===l&&e.oldScroll>=o.offset?o.trigger([e.forward]):void 0})})},t.prototype.checkEmpty=function(){return n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)?(this.$element.unbind([p,v].join(" ")),delete a[this.id]):void 0},t}(),l=function(){function t(t,e,o){var r,i;o=n.extend({},n.fn[g].defaults,o),"bottom-in-view"===o.offset&&(o.offset=function(){var t;return t=n[w]("viewportHeight"),n.isWindow(e.element)||(t=e.$element.height()),t-n(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=o.horizontal?"horizontal":"vertical",this.callback=o.handler,this.context=e,this.enabled=o.enabled,this.id="waypoints"+y++,this.offset=null,this.options=o,e.waypoints[this.axis][this.id]=this,s[this.axis][this.id]=this,r=null!=(i=t.data(m))?i:[],r.push(this.id),t.data(m,r)}return t.prototype.trigger=function(t){return this.enabled?(null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0):void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete s[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,o;return(o=n(t).data(m))?(e=n.extend({},s.horizontal,s.vertical),n.map(o,function(t){return e[t]})):[]},t}(),d={init:function(t,e){var o;return null==e&&(e={}),null==(o=e.handler)&&(e.handler=t),this.each(function(){var t,o,r,s;return t=n(this),r=null!=(s=e.context)?s:n.fn[g].defaults.context,n.isWindow(r)||(r=t.closest(r)),r=n(r),o=a[r.data(u)],o||(o=new i(r)),new l(t,o,e)}),n[w]("refresh"),this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){return e>0?t.push(n[e-1]):void 0})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){return e<n.length-1?t.push(n[e+1]):void 0})},_traverse:function(t,e,r){var i,l;return null==t&&(t="vertical"),null==e&&(e=o),l=h.aggregate(e),i=[],this.each(function(){var e;return e=n.inArray(this,l[t]),r(i,e,l[t])}),this.pushStack(i)},_invoke:function(t,e){return t.each(function(){var t;return t=l.getWaypointsByElement(this),n.each(t,function(t,n){return n[e](),!0})}),this}},n.fn[g]=function(){var t,o;return o=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],d[o]?d[o].apply(this,t):n.isFunction(o)?d.init.apply(this,arguments):n.isPlainObject(o)?d.init.apply(this,[null,o]):n.error(o?"The "+o+" method does not exist in jQuery Waypoints.":"jQuery Waypoints needs a callback function or handler option.")},n.fn[g].defaults={context:o,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=o.innerHeight)?t:r.height()},aggregate:function(t){var e,o,r;return e=s,t&&(e=null!=(r=a[n(t).data(u)])?r.waypoints:void 0),e?(o={horizontal:[],vertical:[]},n.each(o,function(t,r){return n.each(e[t],function(t,e){return r.push(e)}),r.sort(function(t,e){return t.offset-e.offset}),o[t]=n.map(r,function(t){return t.element}),o[t]=n.unique(o[t])}),o):[]},above:function(t){return null==t&&(t=o),h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=o),h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=o),h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=o),h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;return e=n.extend({},s.vertical,s.horizontal),n.each(e,function(e,n){return n[t](),!0})},_filter:function(t,e,o){var r,i;return(r=a[n(t).data(u)])?(i=[],n.each(r.waypoints[e],function(t,e){return o(r,e)?i.push(e):void 0}),i.sort(function(t,e){return t.offset-e.offset}),n.map(i,function(t){return t.element})):[]}},n[w]=function(){var t,n;return n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],h[n]?h[n].apply(null,t):h.aggregate.call(null,n)},n[w].settings={resizeThrottle:100,scrollThrottle:30},r.load(function(){return n[w]("refresh")})})}).call(this),function(t){"use strict";t.fn.countTo=function(e){e=t.extend({},t.fn.countTo.defaults,e||{});var n=Math.ceil(e.speed/e.refreshInterval),o=(e.to-e.from)/n;return t(this).each(function(){function r(){s+=o,l++,t(i).html(s.toFixed(e.decimals)),"function"==typeof e.onUpdate&&e.onUpdate.call(i,s),l>=n&&(clearInterval(c),s=e.to,"function"==typeof e.onComplete&&e.onComplete.call(i,s))}var i=this,l=0,s=e.from,c=setInterval(r,e.refreshInterval)})},t.fn.countTo.defaults={from:0,to:100,speed:1e3,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null}}(jQuery);

(function() {
    function O(a, b) {
        a.prototype = Ca(b.prototype);
        a.prototype.constructor = a;
        a.base = b.prototype
    }
    function Ca(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    function ta(a, b, c) {
        "millisecond" === c ? a.setMilliseconds(a.getMilliseconds() + 1 * b) : "second" === c ? a.setSeconds(a.getSeconds() + 1 * b) : "minute" === c ? a.setMinutes(a.getMinutes() + 1 * b) : "hour" === c ? a.setHours(a.getHours() + 1 * b) : "day" === c ? a.setDate(a.getDate() + 1 * b) : "week" === c ? a.setDate(a.getDate() + 7 * b) : "month" === c ? a.setMonth(a.getMonth() + 1 * b) : "year" === c && a.setFullYear(a.getFullYear() +
            1 * b);
        return a
    }
    function L(a, b) {
        var c = !1;
        0 > a && (c = !0, a *= -1);
        a = "" + a;
        for (b = b ? b : 1; a.length < b;) a = "0" + a;
        return c ? "-" + a : a
    }
    function $(a) {
        if (!a) return a;
        a = a.replace(/^\s\s*/, "");
        for (var b = /\s/, c = a.length; b.test(a.charAt(--c)););
        return a.slice(0, c + 1)
    }
    function Da(a) {
        a.roundRect = function(a, c, d, e, f, g, k, p) {
            k && (this.fillStyle = k);
            p && (this.strokeStyle = p);
            "undefined" === typeof f && (f = 5);
            this.lineWidth = g;
            this.beginPath();
            this.moveTo(a + f, c);
            this.lineTo(a + d - f, c);
            this.quadraticCurveTo(a + d, c, a + d, c + f);
            this.lineTo(a + d, c + e - f);
            this.quadraticCurveTo(a + d, c + e, a + d - f, c + e);
            this.lineTo(a + f, c + e);
            this.quadraticCurveTo(a, c + e, a, c + e - f);
            this.lineTo(a, c + f);
            this.quadraticCurveTo(a, c, a + f, c);
            this.closePath();
            k && this.fill();
            p && 0 < g && this.stroke()
        }
    }
    function ua(a, b) {
        return a - b
    }
    function va(a, b) {
        return a.x - b.x
    }
    function B(a) {
        var b = ((a & 16711680) >> 16).toString(16),
            c = ((a & 65280) >> 8).toString(16);
        a = ((a & 255) >> 0).toString(16);
        b = 2 > b.length ? "0" + b : b;
        c = 2 > c.length ? "0" + c : c;
        a = 2 > a.length ? "0" + a : a;
        return "#" + b + c + a
    }
    function Ea(a, b) {
        var c = this.length >>> 0,
            d = Number(b) ||
            0,
            d = 0 > d ? Math.ceil(d) : Math.floor(d);
        for (0 > d && (d += c); d < c; d++)
            if (d in this && this[d] === a) return d;
        return -1
    }
    function P(a) {
        return null === a || "undefined" === typeof a
    }
    function ea(a, b, c) {
        c = c || "normal";
        var d = a + "_" + b + "_" + c,
            e = wa[d];
        if (isNaN(e)) {
            try {
                a = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + a + "; font-size:" + b + "px; font-weight:" + c + ";";
                if (!U) {
                    var f = document.body;
                    U = document.createElement("span");
                    U.innerHTML = "";
                    var g = document.createTextNode("Mpgyi");
                    U.appendChild(g);
                    f.appendChild(U)
                }
                U.style.display = "";
                U.setAttribute("style", a);
                e = Math.round(U.offsetHeight);
                U.style.display = "none"
            } catch (k) {
                e = Math.ceil(1.1 * b)
            }
            e = Math.max(e, b);
            wa[d] = e
        }
        return e
    }
    function M(a, b) {
        var c = [];
        lineDashTypeMap = {
            solid: [],
            shortDash: [3, 1],
            shortDot: [1, 1],
            shortDashDot: [3, 1, 1, 1],
            shortDashDotDot: [3, 1, 1, 1, 1, 1],
            dot: [1, 2],
            dash: [4, 2],
            dashDot: [4, 2, 1, 2],
            longDash: [8, 2],
            longDashDot: [8, 2, 1, 2],
            longDashDotDot: [8, 2, 1, 2, 1, 2]
        };
        if (c = lineDashTypeMap[a || "solid"])
            for (var d = 0; d < c.length; d++) c[d] *= b;
        else c = [];
        return c
    }
    function F(a, b, c, d) {
        if (a.addEventListener) a.addEventListener(b, c, d || !1);
        else if (a.attachEvent) a.attachEvent("on" + b, function(b) {
            b = b || window.event;
            b.preventDefault = b.preventDefault || function() {
                b.returnValue = !1
            };
            b.stopPropagation = b.stopPropagation || function() {
                b.cancelBubble = !0
            };
            c.call(a, b)
        });
        else return !1
    }
    function xa(a, b, c) {
        a *= J;
        b *= J;
        a = c.getImageData(a, b, 2, 2).data;
        b = !0;
        for (c = 0; 4 > c; c++)
            if (a[c] !== a[c + 4] | a[c] !== a[c + 8] | a[c] !== a[c + 12]) {
                b = !1;
                break
            }
        return b ? a[0] << 16 | a[1] << 8 | a[2] : 0
    }
    function N(a,
        b, c) {
        return a in b ? b[a] : c[a]
    }
    function fa(a, b, c) {
        if (t && ya) {
            var d = a.getContext("2d");
            ga = d.webkitBackingStorePixelRatio || d.mozBackingStorePixelRatio || d.msBackingStorePixelRatio || d.oBackingStorePixelRatio || d.backingStorePixelRatio || 1;
            J = oa / ga;
            a.width = b * J;
            a.height = c * J;
            oa !== ga && (a.style.width = b + "px", a.style.height = c + "px", d.scale(J, J))
        } else a.width = b, a.height = c
    }
    function V(a, b) {
        var c = document.createElement("canvas");
        c.setAttribute("class", "canvasjs-chart-canvas");
        fa(c, a, b);
        t || "undefined" === typeof G_vmlCanvasManager ||
            G_vmlCanvasManager.initElement(c);
        return c
    }
    function za(a, b, c) {
        if (a && b && c) {
            c = c + "." + b;
            var d = "image/" + b;
            a = a.toDataURL(d);
            var e = !1,
                f = document.createElement("a");
            f.download = c;
            f.href = a;
            f.target = "_blank";
            if ("undefined" !== typeof Blob && new Blob) {
                for (var g = a.replace(/^data:[a-z/]*;base64,/, ""), g = atob(g), k = new ArrayBuffer(g.length), k = new Uint8Array(k), p = 0; p < g.length; p++) k[p] = g.charCodeAt(p);
                b = new Blob([k.buffer], {
                    type: "image/" + b
                });
                try {
                    window.navigator.msSaveBlob(b, c), e = !0
                } catch (h) {
                    f.dataset.downloadurl = [d, f.download,
                        f.href
                    ].join(":"), f.href = window.URL.createObjectURL(b)
                }
            }
            if (!e) try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick")
            } catch (l) {
                b = window.open(), b.document.write("<img src='" + a + "'></img><div>Please right click on the image and save it to your device</div>"), b.document.close()
            }
        }
    }
    function Q(a, b, c) {
        b.getAttribute("state") !== c && (b.setAttribute("state", c), b.setAttribute("type",
            "button"), b.style.position = "relative", b.style.margin = "0px 0px 0px 0px", b.style.padding = "3px 4px 0px 4px", b.style.cssFloat = "left", b.setAttribute("title", a._cultureInfo[c + "Text"]), b.innerHTML = "<img style='height:16px;' src='" + Fa[c].image + "' alt='" + a._cultureInfo[c + "Text"] + "' />")
    }
    function ha() {
        for (var a = null, b = 0; b < arguments.length; b++) a = arguments[b], a.style && (a.style.display = "inline")
    }
    function S() {
        for (var a = null, b = 0; b < arguments.length; b++)(a = arguments[b]) && a.style && (a.style.display = "none")
    }
    function G(a,
        b, c, d) {
        this._defaultsKey = a;
        this.parent = d;
        this._eventListeners = [];
        d = {};
        c && (Y[c] && Y[c][a]) && (d = Y[c][a]);
        this._options = b ? b : {};
        this.setOptions(this._options, d)
    }
    function u(a, b, c) {
        this._publicChartReference = c;
        b = b || {};
        u.base.constructor.call(this, "Chart", b, b.theme ? b.theme : "theme1");
        var d = this;
        this._containerId = a;
        this._objectsInitialized = !1;
        this.overlaidCanvasCtx = this.ctx = null;
        this._indexLabels = [];
        this._panTimerId = 0;
        this._lastTouchEventType = "";
        this._lastTouchData = null;
        this.isAnimating = !1;
        this.renderCount =
            0;
        this.panEnabled = this.disableToolTip = this.animatedRender = !1;
        this._defaultCursor = "default";
        this.plotArea = {
            canvas: null,
            ctx: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            width: 0,
            height: 0
        };
        this._dataInRenderedOrder = [];
        (this._container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this._container.innerHTML = "", b = a = 0, a = this._options.width ? this.width : 0 < this._container.clientWidth ? this._container.clientWidth : this.width, b = this._options.height ? this.height : 0 < this._container.clientHeight ?
            this._container.clientHeight : this.height, this.width = a, this.height = b, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this._selectedColorSet = "undefined" !== typeof W[this.colorSet] ? W[this.colorSet] : W.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", t || (this._canvasJSContainer.style.height =
                "0px"), this._container.appendChild(this._canvasJSContainer), this.canvas = V(a, b), this.canvas.style.position = "absolute", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Da(this.ctx), t ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = V(a, b), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx =
                    this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = V(a, b), this.overlaidCanvas.style.position = "absolute", this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", this._eventManager = new aa(this), F(window, "resize", function() {
                    d._updateSize() && d.render()
                }), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;",
                this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height
                }, F(this.overlaidCanvas, "click", function(a) {
                    d._mouseEventHandler(a)
                }), F(this.overlaidCanvas, "mousemove", function(a) {
                    d._mouseEventHandler(a)
                }), F(this.overlaidCanvas, "mouseup", function(a) {
                    d._mouseEventHandler(a)
                }), F(this.overlaidCanvas, "mousedown", function(a) {
                    d._mouseEventHandler(a);
                    S(d._dropdownMenu)
                }), F(this.overlaidCanvas, "mouseout", function(a) {
                    d._mouseEventHandler(a)
                }), F(this.overlaidCanvas, window.navigator.msPointerEnabled ?
                    "MSPointerDown" : "touchstart",
                    function(a) {
                        d._touchEventHandler(a)
                    }), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                    d._touchEventHandler(a)
                }), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                    d._touchEventHandler(a)
                }), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                    d._touchEventHandler(a)
                }), this._creditLink || (this._creditLink = document.createElement("a"), this._creditLink.setAttribute("class",
                    ""), this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (this.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), this._creditLink.setAttribute("tabIndex", -1), this._creditLink.setAttribute("target", "_blank")), this._toolTip = new R(this, this._options.toolTip, this.theme), this.axisY2 = this.axisY = this.axisX = this.data = null, this.sessionVariables = {
                    axisX: {},
                    axisY: {},
                    axisY2: {}
                })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
    }
    function ia(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            if (0 == d) c.push(a[0]);
            else {
                var e, f, g;
                g = d - 1;
                e = 0 === g ? 0 : g - 1;
                f = g === a.length - 1 ? g : g + 1;
                c[c.length] = {
                    x: a[g].x + (a[f].x - a[e].x) / b / 3,
                    y: a[g].y + (a[f].y - a[e].y) / b / 3
                };
                g = d;
                e = 0 === g ? 0 : g - 1;
                f = g === a.length - 1 ? g : g + 1;
                c[c.length] = {
                    x: a[g].x - (a[f].x - a[e].x) / b / 3,
                    y: a[g].y - (a[f].y - a[e].y) / b / 3
                };
                c[c.length] = a[d]
            }
        return c
    }
    function Aa(a, b) {
        if (null === a || "undefined" ===
            typeof a) return b;
        var c = parseFloat(a.toString()) * (0 <= a.toString().indexOf("%") ? b / 100 : 1);
        return !isNaN(c) && c <= b && 0 <= c ? c : b
    }
    function Z(a, b, c, d, e) {
        "undefined" === typeof e && (e = 0);
        this._padding = e;
        this._x1 = a;
        this._y1 = b;
        this._x2 = c;
        this._y2 = d;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }
    function H(a, b) {
        H.base.constructor.call(this, "TextBlock", b);
        this.ctx = a;
        this._isDirty = !0;
        this._wrappedText = null;
        this._lineHeight = ea(this.fontFamily, this.fontSize, this.fontWeight)
    }
    function ba(a, b) {
        ba.base.constructor.call(this, "Title", b, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }
    function ja(a, b) {
        ja.base.constructor.call(this, "Subtitle", b, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }
    function ka(a, b, c) {
        ka.base.constructor.call(this, "Legend", b, c);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.height = this.width = 0;
        this.orientation = null;
        this.dataSeries = [];
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        };
        "undefined" === typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = ea(this.fontFamily,
            this.fontSize, this.fontWeight);
        this.horizontalSpacing = this.fontSize
    }
    function pa(a, b) {
        pa.base.constructor.call(this, b);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx
    }
    function T(a, b, c, d, e) {
        T.base.constructor.call(this, "DataSeries", b, c);
        this.chart = a;
        this.canvas = a.canvas;
        this._ctx = a.canvas.ctx;
        this.index = d;
        this.noDataPointsInPlotArea = 0;
        this.id = e;
        this.chart._eventManager.objectMap[e] = {
            id: e,
            objectType: "dataSeries",
            dataSeriesIndex: d
        };
        this.dataPointIds = [];
        this.plotUnit = [];
        this.axisY = this.axisX =
            null;
        null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" === typeof this._options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
    }
    function C(a, b, c, d) {
        C.base.constructor.call(this, "Axis", b, a.theme);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = a.ctx;
        this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
        this.labels = [];
        this._labels = null;
        this.dataInfo = {
            min: Infinity,
            max: -Infinity,
            viewPortMin: Infinity,
            viewPortMax: -Infinity,
            minDiff: Infinity
        };
        "axisX" === c ? (this.sessionVariables = this.chart.sessionVariables[c], this._options.interval || (this.intervalType = null)) : this.sessionVariables = "left" === d || "top" === d ? this.chart.sessionVariables.axisY : this.chart.sessionVariables.axisY2;
        "undefined" === typeof this._options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
        "undefined" === typeof this._options.labelFontSize && (this.labelFontSize =
            this.chart.getAutoFontSize(this.labelFontSize));
        this.type = c;
        "axisX" !== c || b && "undefined" !== typeof b.gridThickness || (this.gridThickness = 0);
        this._position = d;
        this.lineCoordinates = {
            x1: null,
            y1: null,
            x2: null,
            y2: null,
            width: null
        };
        this.labelAngle = (this.labelAngle % 360 + 360) % 360;
        90 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 180 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 270 < this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
        if (this._options.stripLines && 0 < this._options.stripLines.length)
            for (this.stripLines = [], b = 0; b < this._options.stripLines.length; b++) this.stripLines.push(new la(this.chart, this._options.stripLines[b], a.theme, ++this.chart._eventManager.lastObjectId, this));
        this._titleTextBlock = null;
        this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this._options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
        this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum =
            null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this._options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
        this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
        null !== this.minimum && null !== this.viewportMinimum &&
            (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
        this.trackChanges("viewportMinimum");
        this.trackChanges("viewportMaximum")
    }
    function la(a, b, c, d, e) {
        la.base.constructor.call(this, "StripLine", b, c, e);
        this.id = d;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.label = this.label;
        this._thicknessType = "pixel";
        null !== this.startValue && null !== this.endValue && (this.value = ((this.startValue.getTime ?
            this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this.thickness = Math.max(this.endValue - this.startValue), this._thicknessType = "value")
    }
    function R(a, b, c) {
        R.base.constructor.call(this, "ToolTip", b, c);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._timerId = 0;
        this._prevY = this._prevX = NaN;
        this._initialize()
    }
    function aa(a) {
        this.chart = a;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas = V(this.chart.width, this.chart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
    }
    function ca(a) {
        var b;
        a && da[a] && (b = da[a]);
        ca.base.constructor.call(this, "CultureInfo", b)
    }
    function qa(a) {
        this.chart = a;
        this.ctx = this.chart.plotArea.ctx;
        this.animations = [];
        this.animationRequestId = null
    }
    var t = !!document.createElement("canvas").getContext,
        ma = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "theme1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditText: "",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                maxWidth: null,
                maxHeight: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: null,
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: null,
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic"
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !1,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: null,
                valueFormatString: null,
                margin: 2,
                stripLines: []
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelBackgroundColor: "#EEEEEE",
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: null,
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: null,
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                color: null,
                risingColor: "white",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                type: "column",
                xValueType: "number",
                axisYType: "primary",
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: null,
                legendMarkerBorderThickness: null,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: null,
                markerBorderThickness: null,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        da = {
            en: {}
        },
        W = {
            colorSet1: "#f54d5e #84a84e #ffbf65 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),
            colorSet2: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        Y = {
            theme1: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 33,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 26,
                    titleFontColor: "#666666",
                    titleFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "#BBBBBB",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "#BBBBBB",
                    lineThickness: 2,
                    lineColor: "#BBBBBB"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme2: {
                Chart: {
                    colorSet: "colorSet2"
                },
                Title: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 32,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: "impact, charcoal, arial black, sans-serif",
                    fontSize: 14,
                    fontColor: "#333333",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: t ? "monospace, sans-serif,arial black" : "arial",
                    titleFontWeight: "bold",
                    labelFontFamily: t ? "monospace, Courier New, Courier" : "arial",
                    labelFontSize: 16,
                    labelFontColor: "grey",
                    labelFontWeight: "bold",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineColor: "grey",
                    lineThickness: 0
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "arial"
                },
                DataSeries: {
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Courier New, Courier, monospace" : "arial",
                    indexLabelFontWeight: "bold",
                    indexLabelFontSize: 18,
                    indexLabelLineThickness: 1
                }
            },
            theme3: {
                Chart: {
                    colorSet: "colorSet1"
                },
                Title: {
                    fontFamily: t ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 32,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Subtitle: {
                    fontFamily: t ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                    fontSize: 16,
                    fontColor: "#3A3A3A",
                    fontWeight: "bold",
                    verticalAlign: "top",
                    margin: 5
                },
                Axis: {
                    titleFontSize: 22,
                    titleFontColor: "rgb(98,98,98)",
                    titleFontFamily: t ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
                    labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                    labelFontSize: 18,
                    labelFontColor: "grey",
                    tickColor: "grey",
                    tickThickness: 2,
                    gridThickness: 2,
                    gridColor: "grey",
                    lineThickness: 2,
                    lineColor: "grey"
                },
                Legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontFamily: t ? "monospace, sans-serif,arial black" : "calibri"
                },
                DataSeries: {
                    bevelEnabled: !0,
                    indexLabelFontColor: "grey",
                    indexLabelFontFamily: t ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
                    indexLabelFontSize: 18,
                    indexLabelLineColor: "lightgrey",
                    indexLabelLineThickness: 2
                }
            }
        },
        D = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        },
        wa = {},
        U = null,
        ra = function() {
            var a = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                b = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                c = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                d = "January February March April May June July August September October November December".split(" "),
                e = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                f = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                g = /[^-+\dA-Z]/g;
            return function(k, p, h) {
                var l = h ? h.days : b,
                    m = h ? h.months : d,
                    n = h ? h.shortDays : c,
                    q = h ? h.shortMonths : e;
                h = "";
                var r = !1;
                k = k && k.getTime ? k : k ? new Date(k) : new Date;
                if (isNaN(k)) throw SyntaxError("invalid date");
                "UTC:" === p.slice(0, 4) && (p = p.slice(4), r = !0);
                h = r ? "getUTC" : "get";
                var s = k[h + "Date"](),
                    w = k[h + "Day"](),
                    v = k[h + "Month"](),
                    x = k[h + "FullYear"](),
                    t = k[h + "Hours"](),
                    y = k[h + "Minutes"](),
                    z = k[h + "Seconds"](),
                    u = k[h + "Milliseconds"](),
                    A = r ? 0 : k.getTimezoneOffset();
                return h = p.replace(a, function(a) {
                    switch (a) {
                        case "D":
                            return s;
                        case "DD":
                            return L(s, 2);
                        case "DDD":
                            return n[w];
                        case "DDDD":
                            return l[w];
                        case "M":
                            return v + 1;
                        case "MM":
                            return L(v + 1, 2);
                        case "MMM":
                            return q[v];
                        case "MMMM":
                            return m[v];
                        case "Y":
                            return parseInt(String(x).slice(-2));
                        case "YY":
                            return L(String(x).slice(-2), 2);
                        case "YYY":
                            return L(String(x).slice(-3), 3);
                        case "YYYY":
                            return L(x, 4);
                        case "h":
                            return t % 12 || 12;
                        case "hh":
                            return L(t % 12 || 12, 2);
                        case "H":
                            return t;
                        case "HH":
                            return L(t, 2);
                        case "m":
                            return y;
                        case "mm":
                            return L(y, 2);
                        case "s":
                            return z;
                        case "ss":
                            return L(z, 2);
                        case "f":
                            return String(u).slice(0, 1);
                        case "ff":
                            return L(String(u).slice(0, 2), 2);
                        case "fff":
                            return L(String(u).slice(0, 3), 3);
                        case "t":
                            return 12 > t ? "a" : "p";
                        case "tt":
                            return 12 >
                                t ? "am" : "pm";
                        case "T":
                            return 12 > t ? "A" : "P";
                        case "TT":
                            return 12 > t ? "AM" : "PM";
                        case "K":
                            return r ? "UTC" : (String(k).match(f) || [""]).pop().replace(g, "");
                        case "z":
                            return (0 < A ? "-" : "+") + Math.floor(Math.abs(A) / 60);
                        case "zz":
                            return (0 < A ? "-" : "+") + L(Math.floor(Math.abs(A) / 60), 2);
                        case "zzz":
                            return (0 < A ? "-" : "+") + L(Math.floor(Math.abs(A) / 60), 2) + L(Math.abs(A) % 60, 2);
                        default:
                            return a.slice(1, a.length - 1)
                    }
                })
            }
        }(),
        X = function(a, b, c) {
            if (null === a) return "";
            a = Number(a);
            var d = 0 > a ? !0 : !1;
            d && (a *= -1);
            var e = c ? c.decimalSeparator : ".",
                f = c ?
                c.digitGroupSeparator : ",",
                g = "";
            b = String(b);
            var g = 1,
                k = c = "",
                p = -1,
                h = [],
                l = [],
                m = 0,
                n = 0,
                q = 0,
                r = !1,
                s = 0,
                k = b.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            b = null;
            for (var w = 0; k && w < k.length; w++)
                if (b = k[w], "." === b && 0 > p) p = w;
                else {
                    if ("%" === b) g *= 100;
                    else if ("\u2030" === b) {
                        g *= 1E3;
                        continue
                    } else if ("," === b[0] && "." === b[b.length - 1]) {
                        g /= Math.pow(1E3, b.length - 1);
                        p = w + b.length - 1;
                        continue
                    } else "E" !== b[0] && "e" !== b[0] || "0" !== b[b.length - 1] || (r = !0);
                    0 > p ? (h.push(b), "#" === b || "0" === b ? m++ : "," === b && q++) : (l.push(b), "#" !== b && "0" !==
                        b || n++)
                }
            r && (b = Math.floor(a), s = (0 === b ? "" : String(b)).length - m, g /= Math.pow(10, s));
            0 > p && (p = w);
            g = (a * g).toFixed(n);
            b = g.split(".");
            g = (b[0] + "").split("");
            a = (b[1] + "").split("");
            g && "0" === g[0] && g.shift();
            for (w = r = k = n = p = 0; 0 < h.length;)
                if (b = h.pop(), "#" === b || "0" === b)
                    if (p++, p === m) {
                        var v = g,
                            g = [];
                        if ("0" === b)
                            for (b = m - n - (v ? v.length : 0); 0 < b;) v.unshift("0"), b--;
                        for (; 0 < v.length;) c = v.pop() + c, w++, 0 === w % r && (k === q && 0 < v.length) && (c = f + c);
                        d && (c = "-" + c)
                    } else 0 < g.length ? (c = g.pop() + c, n++, w++) : "0" === b && (c = "0" + c, n++, w++), 0 === w % r && (k ===
                        q && 0 < g.length) && (c = f + c);
            else "E" !== b[0] && "e" !== b[0] || "0" !== b[b.length - 1] || !/[eE][+-]*[0]+/.test(b) ? "," === b ? (k++, r = w, w = 0, 0 < g.length && (c = f + c)) : c = 1 < b.length && ('"' === b[0] && '"' === b[b.length - 1] || "'" === b[0] && "'" === b[b.length - 1]) ? b.slice(1, b.length - 1) + c : b + c : (b = 0 > s ? b.replace("+", "").replace("-", "") : b.replace("-", ""), c += b.replace(/[0]+/, function(a) {
                return L(s, a.length)
            }));
            d = "";
            for (f = !1; 0 < l.length;) b = l.shift(), "#" === b || "0" === b ? 0 < a.length && 0 !== Number(a.join("")) ? (d += a.shift(), f = !0) : "0" === b && (d += "0", f = !0) : 1 < b.length &&
                ('"' === b[0] && '"' === b[b.length - 1] || "'" === b[0] && "'" === b[b.length - 1]) ? d += b.slice(1, b.length - 1) : "E" !== b[0] && "e" !== b[0] || "0" !== b[b.length - 1] || !/[eE][+-]*[0]+/.test(b) ? d += b : (b = 0 > s ? b.replace("+", "").replace("-", "") : b.replace("-", ""), d += b.replace(/[0]+/, function(a) {
                    return L(s, a.length)
                }));
            return c + ((f ? e : "") + d)
        },
        na = function(a) {
            var b = 0,
                c = 0;
            a = a || window.event;
            a.offsetX || 0 === a.offsetX ? (b = a.offsetX, c = a.offsetY) : a.layerX || 0 == a.layerX ? (b = a.layerX, c = a.layerY) : (b = a.pageX - a.target.offsetLeft, c = a.pageY - a.target.offsetTop);
            return {
                x: b,
                y: c
            }
        },
        ya = !0,
        oa = window.devicePixelRatio || 1,
        ga = 1,
        J = ya ? oa / ga : 1,
        Fa = {
            reset: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="
            },
            pan: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="
            },
            zoom: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="
            },
            menu: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"
            }
        };
    G.prototype.setOptions = function(a, b) {
        if (ma[this._defaultsKey]) {
            var c = ma[this._defaultsKey],
                d;
            for (d in c) c.hasOwnProperty(d) && (this[d] = a && d in a ? a[d] : b && d in
                b ? b[d] : c[d])
        }
    };
    G.prototype.updateOption = function(a) {
        var b = ma[this._defaultsKey],
            c = this._options.theme ? this._options.theme : this.chart && this.chart._options.theme ? this.chart._options.theme : "theme1",
            d = {},
            e = this[a];
        c && (Y[c] && Y[c][this._defaultsKey]) && (d = Y[c][this._defaultsKey]);
        a in b && (e = a in this._options ? this._options[a] : d && a in d ? d[a] : b[a]);
        if (e === this[a]) return !1;
        this[a] = e;
        return !0
    };
    G.prototype.trackChanges = function(a) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[a] =
            this._options[a]
    };
    G.prototype.isBeingTracked = function(a) {
        this._options._oldOptions || (this._options._oldOptions = {});
        return this._options._oldOptions[a] ? !0 : !1
    };
    G.prototype.hasOptionChanged = function(a) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[a] !== this._options[a]
    };
    G.prototype.addEventListener = function(a, b, c) {
        a && b && (this._eventListeners[a] = this._eventListeners[a] || [], this._eventListeners[a].push({
            context: c || this,
            eventHandler: b
        }))
    };
    G.prototype.removeEventListener =
        function(a, b) {
            if (a && b && this._eventListeners[a])
                for (var c = this._eventListeners[a], d = 0; d < c.length; d++)
                    if (c[d].eventHandler === b) {
                        c[d].splice(d, 1);
                        break
                    }
        };
    G.prototype.removeAllEventListeners = function() {
        this._eventListeners = []
    };
    G.prototype.dispatchEvent = function(a, b, c) {
        if (a && this._eventListeners[a]) {
            b = b || {};
            for (var d = this._eventListeners[a], e = 0; e < d.length; e++) d[e].eventHandler.call(d[e].context, b)
        }
        "function" === typeof this[a] && this[a].call(c || this.chart._publicChartReference, b)
    };
    O(u, G);
    u.prototype._updateOptions =
        function() {
            var a = this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof W[this.colorSet] ? W[this.colorSet] : W.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo = new ca(this._options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && t;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            this._options.zoomEnabled ? (this._zoomButton || (S(this._zoomButton = document.createElement("button")), Q(this, this._zoomButton, "pan"), this._toolBar.appendChild(this._zoomButton),
                F(this._zoomButton, "click", function() {
                    a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, Q(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, Q(a, a._zoomButton, "pan"));
                    a.render()
                })), this._resetButton || (S(this._resetButton = document.createElement("button")), Q(this, this._resetButton, "reset"), this._toolBar.appendChild(this._resetButton), F(this._resetButton, "click", function() {
                a._toolTip.hide();
                a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, Q(a, a._zoomButton, "pan"), a._defaultCursor =
                    "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                a.sessionVariables.axisX && (a.sessionVariables.axisX.newViewportMinimum = null, a.sessionVariables.axisX.newViewportMaximum = null);
                a.sessionVariables.axisY && (a.sessionVariables.axisY.newViewportMinimum = null, a.sessionVariables.axisY.newViewportMaximum = null);
                a.sessionVariables.axisY2 && (a.sessionVariables.axisY2.newViewportMinimum = null, a.sessionVariables.axisY2.newViewportMaximum = null);
                a.resetOverlayedCanvas();
                S(a._zoomButton,
                    a._resetButton);
                a._dispatchRangeEvent("rangeChanging", "reset");
                a.render();
                a._dispatchRangeEvent("rangeChanged", "reset")
            }), this.overlaidCanvas.style.cursor = a._defaultCursor), this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), ha(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))) : this.panEnabled = this.zoomEnabled = !1;
            this._menuButton ?
                this.exportEnabled ? ha(this._menuButton) : S(this._menuButton) : this.exportEnabled && t && (this._menuButton = document.createElement("button"), Q(this, this._menuButton, "menu"), this._toolBar.appendChild(this._menuButton), F(this._menuButton, "click", function() {
                    "none" !== a._dropdownMenu.style.display || a._dropDownCloseTime && 500 >= (new Date).getTime() - a._dropDownCloseTime.getTime() || (a._dropdownMenu.style.display = "block", a._menuButton.blur(), a._dropdownMenu.focus())
                }, !0));
            if (!this._dropdownMenu && this.exportEnabled &&
                t) {
                this._dropdownMenu = document.createElement("div");
                this._dropdownMenu.setAttribute("tabindex", -1);
                this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #000;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
                a._dropdownMenu.style.display = "none";
                this._toolBar.appendChild(this._dropdownMenu);
                F(this._dropdownMenu, "blur", function() {
                    S(a._dropdownMenu);
                    a._dropDownCloseTime = new Date
                }, !0);
                var b = document.createElement("div");
                b.style.cssText = "padding: 2px 15px 2px 10px";
                b.innerHTML = this._cultureInfo.saveJPGText;
                this._dropdownMenu.appendChild(b);
                F(b, "mouseover", function() {
                    this.style.backgroundColor = "#EEEEEE"
                }, !0);
                F(b, "mouseout", function() {
                    this.style.backgroundColor = "transparent"
                }, !0);
                F(b, "click", function() {
                    za(a.canvas,
                        "jpeg", a.exportFileName);
                    S(a._dropdownMenu)
                }, !0);
                b = document.createElement("div");
                b.style.cssText = "padding: 2px 15px 2px 10px";
                b.innerHTML = this._cultureInfo.savePNGText;
                this._dropdownMenu.appendChild(b);
                F(b, "mouseover", function() {
                    this.style.backgroundColor = "#EEEEEE"
                }, !0);
                F(b, "mouseout", function() {
                    this.style.backgroundColor = "transparent"
                }, !0);
                F(b, "click", function() {
                    za(a.canvas, "png", a.exportFileName);
                    S(a._dropdownMenu)
                }, !0)
            }
            "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? Q(a,
                a._zoomButton, "zoom") : Q(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && Q(a, a._resetButton, "reset"));
            if ("undefined" === typeof ma.Chart.creditHref) this.creditHref = "", this.creditText = "";
            else var c = this.updateOption("creditText"),
                d = this.updateOption("creditHref");
            if (0 === this.renderCount || c || d) this._creditLink.setAttribute("href", this.creditHref), this._creditLink.innerHTML = this.creditText;
            this.creditHref && this.creditText ? this._creditLink.parentElement ||
                this._canvasJSContainer.appendChild(this._creditLink) : this._creditLink.parentElement && this._canvasJSContainer.removeChild(this._creditLink);
            this._options.toolTip && this._toolTip._options !== this._options.toolTip && (this._toolTip._options = this._options.toolTip);
            for (var e in this._toolTip._options) this._toolTip._options.hasOwnProperty(e) && this._toolTip.updateOption(e)
        };
    u.prototype._updateSize = function() {
        var a = 0,
            b = 0;
        this._options.width ? a = this.width : this.width = a = 0 < this._container.clientWidth ? this._container.clientWidth :
            this.width;
        this._options.height ? b = this.height : this.height = b = 0 < this._container.clientHeight ? this._container.clientHeight : this.height;
        return this.canvas.width !== a * J || this.canvas.height !== b * J ? (fa(this.canvas, a, b), fa(this.overlaidCanvas, a, b), fa(this._eventManager.ghostCanvas, a, b), !0) : !1
    };
    u.prototype._initialize = function() {
        this._animator ? this._animator.cancelAllAnimations() : this._animator = new qa(this);
        this.removeAllEventListeners();
        this.disableToolTip = !1;
        this._axes = [];
        this.pieDoughnutClickHandler = null;
        this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this._updateOptions();
        this.animatedRender = t && this.animationEnabled && 0 === this.renderCount;
        this._updateSize();
        this.clearCanvas();
        this.ctx.beginPath();
        this.axisY2 = this.axisY = this.axisX = null;
        this._indexLabels = [];
        this._dataInRenderedOrder = [];
        this._events = [];
        this._eventManager && this._eventManager.reset();
        this.plotInfo = {
            axisPlacement: null,
            axisXValueType: null,
            plotTypes: []
        };
        this.layoutManager = new Z(0, 0, this.width, this.height,
            2);
        this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
        this.data = [];
        for (var a = 0, b = 0; b < this._options.data.length; b++)
            if (a++, !this._options.data[b].type || 0 <= u._supportedChartTypes.indexOf(this._options.data[b].type)) {
                var c = new T(this, this._options.data[b], this.theme, a - 1, ++this._eventManager.lastObjectId);
                null === c.name && (c.name = "DataSeries " + a);
                null === c.color ? 1 < this._options.data.length ? (c._colorSet = [this._selectedColorSet[c.index % this._selectedColorSet.length]], c.color = this._selectedColorSet[c.index %
                    this._selectedColorSet.length]) : c._colorSet = "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "candlestick" === c.type || "ohlc" === c.type ? [this._selectedColorSet[0]] : this._selectedColorSet : c._colorSet = [c.color];
                null === c.markerSize && (("line" === c.type || "stepLine" === c.type || "spline" === c.type) && c.dataPoints && c.dataPoints.length < this.width /
                    16 || "scatter" === c.type) && (c.markerSize = 8);
                "bubble" !== c.type && "scatter" !== c.type || !c.dataPoints || (c.dataPoints.some ? c.dataPoints.some(function(a) {
                    return a.x
                }) && c.dataPoints.sort(va) : c.dataPoints.sort(va));
                this.data.push(c);
                var d = c.axisPlacement,
                    e;
                "normal" === d ? "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement =
                    "normal") : "xySwapped" === d ? "normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" == d && ("normal" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? e = 'You cannot combine "' + c.type +
                    '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none"));
                if (e && window.console) {
                    window.console.log(e);
                    return
                }
            }
        this._objectsInitialized = !0
    };
    u._supportedChartTypes = function(a) {
        a.indexOf || (a.indexOf = Ea);
        return a
    }("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));
    u.prototype.render =
        function(a) {
            a && (this._options = a);
            this._initialize();
            var b = [];
            for (a = 0; a < this.data.length; a++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) this.data[a].axisYType && "primary" !== this.data[a].axisYType ? "secondary" === this.data[a].axisYType && (this.axisY2 || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2 = new C(this, this._options.axisY2, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2 = new C(this, this._options.axisY2,
                    "axisY", "top"))), this.data[a].axisY = this.axisY2) : (this.axisY || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY = new C(this, this._options.axisY, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY = new C(this, this._options.axisY, "axisY", "bottom"))), this.data[a].axisY = this.axisY), this.axisX || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX = new C(this, this._options.axisX, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement &&
                    this._axes.push(this.axisX = new C(this, this._options.axisX, "axisX", "left"))), this.data[a].axisX = this.axisX;
            this.axisY && this.axisY2 && (0 < this.axisY.gridThickness && "undefined" === typeof this.axisY2._options.gridThickness ? this.axisY2.gridThickness = 0 : 0 < this.axisY2.gridThickness && "undefined" === typeof this.axisY._options.gridThickness && (this.axisY.gridThickness = 0));
            var c = !1;
            if (0 < this._axes.length && (this.zoomEnabled || this.panEnabled))
                for (a = 0; a < this._axes.length; a++)
                    if (null !== this._axes[a].viewportMinimum ||
                        null !== this._axes[a].viewportMaximum) {
                        c = !0;
                        break
                    }
            c ? ha(this._zoomButton, this._resetButton) : (S(this._zoomButton, this._resetButton), this._options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
            this._processData();
            this._options.title && (this._title = new ba(this, this._options.title), this._title.dockInsidePlotArea ? b.push(this._title) : this._title.render());
            if (this._options.subtitles)
                for (a = 0; a < this._options.subtitles.length; a++) this.subtitles = [], c = new ja(this, this._options.subtitles[a]), this.subtitles.push(c),
                    c.dockInsidePlotArea ? b.push(c) : c.render();
            this.legend = new ka(this, this._options.legend, this.theme);
            for (a = 0; a < this.data.length; a++)(this.data[a].showInLegend || "pie" === this.data[a].type || "doughnut" === this.data[a].type) && this.legend.dataSeries.push(this.data[a]);
            this.legend.dockInsidePlotArea ? b.push(this.legend) : this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) C.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
            else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
            else return;
            for (a = 0; a < b.length; a++) b[a].render();
            var d = [];
            if (this.animatedRender) {
                var e = V(this.width, this.height);
                e.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
            }
            for (a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (b = this.plotInfo.plotTypes[a], c = 0; c < b.plotUnits.length; c++) {
                    var f = b.plotUnits[c],
                        g = null;
                    f.targetCanvas = null;
                    this.animatedRender && (f.targetCanvas = V(this.width, this.height), f.targetCanvasCtx = f.targetCanvas.getContext("2d"));
                    "line" === f.type ? g = this.renderLine(f) : "stepLine" === f.type ? g = this.renderStepLine(f) : "spline" === f.type ? g = this.renderSpline(f) : "column" === f.type ? g = this.renderColumn(f) : "bar" === f.type ? g = this.renderBar(f) : "area" === f.type ? g = this.renderArea(f) : "stepArea" === f.type ? g = this.renderStepArea(f) : "splineArea" === f.type ? g = this.renderSplineArea(f) : "stackedColumn" === f.type ? g = this.renderStackedColumn(f) : "stackedColumn100" === f.type ? g = this.renderStackedColumn100(f) : "stackedBar" === f.type ? g = this.renderStackedBar(f) : "stackedBar100" ===
                        f.type ? g = this.renderStackedBar100(f) : "stackedArea" === f.type ? g = this.renderStackedArea(f) : "stackedArea100" === f.type ? g = this.renderStackedArea100(f) : "bubble" === f.type ? g = g = this.renderBubble(f) : "scatter" === f.type ? g = this.renderScatter(f) : "pie" === f.type ? this.renderPie(f) : "doughnut" === f.type ? this.renderPie(f) : "candlestick" === f.type ? g = this.renderCandlestick(f) : "ohlc" === f.type ? g = this.renderCandlestick(f) : "rangeColumn" === f.type ? g = this.renderRangeColumn(f) : "rangeBar" === f.type ? g = this.renderRangeBar(f) : "rangeArea" ===
                        f.type ? g = this.renderRangeArea(f) : "rangeSplineArea" === f.type && (g = this.renderRangeSplineArea(f));
                    for (var k = 0; k < f.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[f.dataSeriesIndexes[k]]);
                    this.animatedRender && g && d.push(g)
                }
            this.animatedRender && 0 < this._indexLabels.length && (a = V(this.width, this.height).getContext("2d"), d.push(this.renderIndexLabels(a)));
            var p = this;
            0 < d.length ? (p.disableToolTip = !0, p._animator.animate(200, p.animationDuration, function(a) {
                p.ctx.clearRect(0, 0, p.width, p.height);
                p.ctx.drawImage(e, 0, 0, Math.floor(p.width * J), Math.floor(p.height * J), 0, 0, p.width, p.height);
                for (var c = 0; c < d.length; c++) g = d[c], 1 > a && "undefined" !== typeof g.startTimePercent ? a >= g.startTimePercent && g.animationCallback(g.easingFunction(a - g.startTimePercent, 0, 1, 1 - g.startTimePercent), g) : g.animationCallback(g.easingFunction(a, 0, 1, 1), g);
                p.dispatchEvent("dataAnimationIterationEnd", {
                    chart: p
                })
            }, function() {
                d = [];
                for (var a = 0; a < p.plotInfo.plotTypes.length; a++)
                    for (var c = p.plotInfo.plotTypes[a], b = 0; b < c.plotUnits.length; b++) c.plotUnits[b].targetCanvas =
                        null;
                e = null;
                p.disableToolTip = !1
            })) : (0 < p._indexLabels.length && p.renderIndexLabels(), p.dispatchEvent("dataAnimationIterationEnd", {
                chart: p
            }));
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || S(this._zoomButton, this._resetButton);
            this._toolTip._updateToolTip();
            this.renderCount++
        };
    u.prototype.attachPlotAreaEventHandlers = function() {
        this.attachEvent({
            context: this,
            chart: this,
            mousedown: this._plotAreaMouseDown,
            mouseup: this._plotAreaMouseUp,
            mousemove: this._plotAreaMouseMove,
            cursor: this.zoomEnabled ? "col-resize" : "move",
            cursor: this.panEnabled ? "move" : "default",
            capture: !0,
            bounds: this.plotArea
        })
    };
    u.prototype.categoriseDataSeries = function() {
        for (var a = "", b = 0; b < this.data.length; b++)
            if (a = this.data[b], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= u._supportedChartTypes.indexOf(a.type)) {
                for (var c = null, d = !1, e = null, f = !1, g = 0; g < this.plotInfo.plotTypes.length; g++)
                    if (this.plotInfo.plotTypes[g].type === a.type) {
                        d = !0;
                        c = this.plotInfo.plotTypes[g];
                        break
                    }
                d || (c = {
                    type: a.type,
                    totalDataSeries: 0,
                    plotUnits: []
                }, this.plotInfo.plotTypes.push(c));
                for (g = 0; g < c.plotUnits.length; g++)
                    if (c.plotUnits[g].axisYType === a.axisYType) {
                        f = !0;
                        e = c.plotUnits[g];
                        break
                    }
                f || (e = {
                    type: a.type,
                    previousDataSeriesCount: 0,
                    index: c.plotUnits.length,
                    plotType: c,
                    axisYType: a.axisYType,
                    axisY: "primary" === a.axisYType ? this.axisY : this.axisY2,
                    axisX: this.axisX,
                    dataSeriesIndexes: [],
                    yTotals: []
                }, c.plotUnits.push(e));
                c.totalDataSeries++;
                e.dataSeriesIndexes.push(b);
                a.plotUnit = e
            }
        for (b = 0; b < this.plotInfo.plotTypes.length; b++)
            for (c =
                this.plotInfo.plotTypes[b], g = a = 0; g < c.plotUnits.length; g++) c.plotUnits[g].previousDataSeriesCount = a, a += c.plotUnits[g].dataSeriesIndexes.length
    };
    u.prototype.assignIdToDataPoints = function() {
        for (var a = 0; a < this.data.length; a++) {
            var b = this.data[a];
            if (b.dataPoints)
                for (var c = b.dataPoints.length, d = 0; d < c; d++) b.dataPointIds[d] = ++this._eventManager.lastObjectId
        }
    };
    u.prototype._processData = function() {
        this.assignIdToDataPoints();
        this.categoriseDataSeries();
        for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var b =
                    this.plotInfo.plotTypes[a], c = 0; c < b.plotUnits.length; c++) {
                var d = b.plotUnits[c];
                "line" === d.type || "stepLine" === d.type || "spline" === d.type || "column" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "bar" === d.type || "bubble" === d.type || "scatter" === d.type ? this._processMultiseriesPlotUnit(d) : "stackedColumn" === d.type || "stackedBar" === d.type || "stackedArea" === d.type ? this._processStackedPlotUnit(d) : "stackedColumn100" === d.type || "stackedBar100" === d.type || "stackedArea100" === d.type ? this._processStacked100PlotUnit(d) :
                    "candlestick" !== d.type && "ohlc" !== d.type && "rangeColumn" !== d.type && "rangeBar" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type || this._processMultiYPlotUnit(d)
            }
    };
    u.prototype._processMultiseriesPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f = !1, g = 0; g < a.dataSeriesIndexes.length; g++) {
                var k = this.data[a.dataSeriesIndexes[g]],
                    p = 0,
                    h = !1,
                    l = !1;
                if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) var m = this.sessionVariables.axisX.newViewportMinimum ?
                    this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    n = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (k.dataPoints[p].x && k.dataPoints[p].x.getTime || "dateTime" === k.xValueType) f = !0;
                for (p = 0; p < k.dataPoints.length; p++) {
                    "undefined" === typeof k.dataPoints[p].x && (k.dataPoints[p].x = p);
                    k.dataPoints[p].x.getTime ? (f = !0, d = k.dataPoints[p].x.getTime()) : d = k.dataPoints[p].x;
                    e = k.dataPoints[p].y;
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    e < b.min && (b.min = e);
                    e > b.max && (b.max = e);
                    if (0 < p) {
                        var q = d - k.dataPoints[p - 1].x;
                        0 > q && (q *= -1);
                        c.minDiff > q && 0 !== q && (c.minDiff = q);
                        null !== e && null !== k.dataPoints[p - 1].y && (q = e - k.dataPoints[p - 1].y,
                            0 > q && (q *= -1), b.minDiff > q && 0 !== q && (b.minDiff = q))
                    }
                    if (!(d < m) || h) {
                        if (!h && (h = !0, 0 < p)) {
                            p -= 2;
                            continue
                        }
                        if (d > n && !l) l = !0;
                        else if (d > n && l) continue;
                        k.dataPoints[p].label && (a.axisX.labels[d] = k.dataPoints[p].label);
                        d < c.viewPortMin && (c.viewPortMin = d);
                        d > c.viewPortMax && (c.viewPortMax = d);
                        null !== e && (e < b.viewPortMin && (b.viewPortMin = e), e > b.viewPortMax && (b.viewPortMax = e))
                    }
                }
                this.plotInfo.axisXValueType = k.xValueType = f ? "dateTime" : "number"
            }
    };
    u.prototype._processStackedPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var b =
                    a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f = !1, g = [], k = [], p = Infinity, h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = this.data[a.dataSeriesIndexes[h]],
                    m = 0,
                    n = !1,
                    q = !1;
                if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var r = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    s =
                    this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (l.dataPoints[m].x && l.dataPoints[m].x.getTime || "dateTime" === l.xValueType) f = !0;
                for (m = 0; m < l.dataPoints.length; m++) {
                    "undefined" === typeof l.dataPoints[m].x && (l.dataPoints[m].x = m);
                    l.dataPoints[m].x.getTime ? (f = !0, d = l.dataPoints[m].x.getTime()) :
                        d = l.dataPoints[m].x;
                    P(l.dataPoints[m].y) ? e = 0 : (e = l.dataPoints[m].y, 0 === h && (p = Math.min(e, p)));
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    if (0 < m) {
                        var w = d - l.dataPoints[m - 1].x;
                        0 > w && (w *= -1);
                        c.minDiff > w && 0 !== w && (c.minDiff = w);
                        null !== e && null !== l.dataPoints[m - 1].y && (w = e - l.dataPoints[m - 1].y, 0 > w && (w *= -1), b.minDiff > w && 0 !== w && (b.minDiff = w))
                    }
                    if (!(d < r) || n) {
                        if (!n && (n = !0, 0 < m)) {
                            m -= 2;
                            continue
                        }
                        if (d > s && !q) q = !0;
                        else if (d > s && q) continue;
                        l.dataPoints[m].label && (a.axisX.labels[d] = l.dataPoints[m].label);
                        d < c.viewPortMin && (c.viewPortMin =
                            d);
                        d > c.viewPortMax && (c.viewPortMax = d);
                        null !== e && (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g[d] = g[d] ? g[d] + e : e : k[d] = k[d] ? k[d] + e : e)
                    }
                }
                this.plotInfo.axisXValueType = l.xValueType = f ? "dateTime" : "number"
            }
            for (m in g) g.hasOwnProperty(m) && !isNaN(m) && (a = g[m], a < b.min && (b.min = Math.min(a, p)), a > b.max && (b.max = a), m < c.viewPortMin || m > c.viewPortMax || (a < b.viewPortMin && (b.viewPortMin = Math.min(a, p)), a > b.viewPortMax && (b.viewPortMax = a)));
            for (m in k) k.hasOwnProperty(m) && !isNaN(m) && (a = k[m], a < b.min && (b.min = Math.min(a,
                p)), a > b.max && (b.max = a), m < c.viewPortMin || m > c.viewPortMax || (a < b.viewPortMin && (b.viewPortMin = Math.min(a, p)), a > b.viewPortMax && (b.viewPortMax = a)))
        }
    };
    u.prototype._processStacked100PlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f = !1, g = !1, k = !1, p = [], h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = this.data[a.dataSeriesIndexes[h]],
                    m = 0,
                    n = !1,
                    q = !1;
                if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var r = this.sessionVariables.axisX.newViewportMinimum ?
                    this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    s = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (l.dataPoints[m].x && l.dataPoints[m].x.getTime || "dateTime" === l.xValueType) f = !0;
                for (m = 0; m < l.dataPoints.length; m++) {
                    "undefined" === typeof l.dataPoints[m].x && (l.dataPoints[m].x = m);
                    l.dataPoints[m].x.getTime ? (f = !0, d = l.dataPoints[m].x.getTime()) : d = l.dataPoints[m].x;
                    e = P(l.dataPoints[m].y) ? null : l.dataPoints[m].y;
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    if (0 < m) {
                        var w = d - l.dataPoints[m - 1].x;
                        0 > w && (w *= -1);
                        c.minDiff > w && 0 !== w && (c.minDiff = w);
                        P(e) || null === l.dataPoints[m - 1].y || (w = e - l.dataPoints[m - 1].y, 0 > w && (w *= -1), b.minDiff >
                            w && 0 !== w && (b.minDiff = w))
                    }
                    if (!(d < r) || n) {
                        if (!n && (n = !0, 0 < m)) {
                            m -= 2;
                            continue
                        }
                        if (d > s && !q) q = !0;
                        else if (d > s && q) continue;
                        l.dataPoints[m].label && (a.axisX.labels[d] = l.dataPoints[m].label);
                        d < c.viewPortMin && (c.viewPortMin = d);
                        d > c.viewPortMax && (c.viewPortMax = d);
                        null !== e && (a.yTotals[d] = (a.yTotals[d] ? a.yTotals[d] : 0) + Math.abs(e), 0 <= e ? g = !0 : 0 > e && (k = !0), p[d] = p[d] ? p[d] + Math.abs(e) : Math.abs(e))
                    }
                }
                this.plotInfo.axisXValueType = l.xValueType = f ? "dateTime" : "number"
            }
            g && !k ? (b.max = P(b.viewPortMax) ? 99 : Math.max(b.viewPortMax, 99), b.min =
                P(b.viewPortMin) ? 1 : Math.min(b.viewPortMin, 1)) : g && k ? (b.max = P(b.viewPortMax) ? 99 : Math.max(b.viewPortMax, 99), b.min = P(b.viewPortMin) ? -99 : Math.min(b.viewPortMin, -99)) : !g && k && (b.max = P(b.viewPortMax) ? -1 : Math.max(b.viewPortMax, -1), b.min = P(b.viewPortMin) ? -99 : Math.min(b.viewPortMin, -99));
            b.viewPortMin = b.min;
            b.viewPortMax = b.max;
            a.dataPointYSums = p
        }
    };
    u.prototype._processMultiYPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var b = a.axisY.dataInfo, c = a.axisX.dataInfo, d, e, f, g, k = !1,
                    p = 0; p < a.dataSeriesIndexes.length; p++) {
                var h = this.data[a.dataSeriesIndexes[p]],
                    l = 0,
                    m = !1,
                    n = !1;
                if ("normal" === h.axisPlacement || "xySwapped" === h.axisPlacement) var q = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this._options.axisX && this._options.axisX.viewportMinimum ? this._options.axisX.viewportMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                    r = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum :
                    this._options.axisX && this._options.axisX.viewportMaximum ? this._options.axisX.viewportMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity;
                if (h.dataPoints[l].x && h.dataPoints[l].x.getTime || "dateTime" === h.xValueType) k = !0;
                for (l = 0; l < h.dataPoints.length; l++) {
                    "undefined" === typeof h.dataPoints[l].x && (h.dataPoints[l].x = l);
                    h.dataPoints[l].x.getTime ? (k = !0, d = h.dataPoints[l].x.getTime()) : d = h.dataPoints[l].x;
                    (e = h.dataPoints[l].y) && e.length && (f = Math.min.apply(null, e), g = Math.max.apply(null,
                        e));
                    d < c.min && (c.min = d);
                    d > c.max && (c.max = d);
                    f < b.min && (b.min = f);
                    g > b.max && (b.max = g);
                    if (0 < l) {
                        var s = d - h.dataPoints[l - 1].x;
                        0 > s && (s *= -1);
                        c.minDiff > s && 0 !== s && (c.minDiff = s);
                        null !== e[0] && null !== h.dataPoints[l - 1].y[0] && (s = e[0] - h.dataPoints[l - 1].y[0], 0 > s && (s *= -1), b.minDiff > s && 0 !== s && (b.minDiff = s))
                    }
                    if (!(d < q) || m) {
                        if (!m && (m = !0, 0 < l)) {
                            l -= 2;
                            continue
                        }
                        if (d > r && !n) n = !0;
                        else if (d > r && n) continue;
                        h.dataPoints[l].label && (a.axisX.labels[d] = h.dataPoints[l].label);
                        d < c.viewPortMin && (c.viewPortMin = d);
                        d > c.viewPortMax && (c.viewPortMax =
                            d);
                        null !== e && (f < b.viewPortMin && (b.viewPortMin = f), g > b.viewPortMax && (b.viewPortMax = g))
                    }
                }
                this.plotInfo.axisXValueType = h.xValueType = k ? "dateTime" : "number"
            }
    };
    u.prototype.getDataPointAtXY = function(a, b, c) {
        c = c || !1;
        for (var d = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var f = null;
            (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, b, c)) && d.push(f)
        }
        a = null;
        b = !1;
        for (c = 0; c < d.length; c++)
            if ("line" === d[c].dataSeries.type || "stepLine" === d[c].dataSeries.type || "area" === d[c].dataSeries.type || "stepArea" === d[c].dataSeries.type)
                if (e =
                    N("markerSize", d[c].dataPoint, d[c].dataSeries) || 8, d[c].distance <= e / 2) {
                    b = !0;
                    break
                }
        for (c = 0; c < d.length; c++) b && "line" !== d[c].dataSeries.type && "stepLine" !== d[c].dataSeries.type && "area" !== d[c].dataSeries.type && "stepArea" !== d[c].dataSeries.type || (a ? d[c].distance <= a.distance && (a = d[c]) : a = d[c]);
        return a
    };
    u.prototype.getObjectAtXY = function(a, b, c) {
        var d = null;
        if (c = this.getDataPointAtXY(a, b, c || !1)) d = c.dataSeries.dataPointIds[c.dataPointIndex];
        else if (t) d = xa(a, b, this._eventManager.ghostCtx);
        else
            for (c = 0; c < this.legend.items.length; c++) {
                var e =
                    this.legend.items[c];
                a >= e.x1 && (a <= e.x2 && b >= e.y1 && b <= e.y2) && (d = e.id)
            }
        return d
    };
    u.prototype.getAutoFontSize = function(a, b, c) {
        a /= 400;
        return Math.round(Math.min(this.width, this.height) * a)
    };
    u.prototype.resetOverlayedCanvas = function() {
        this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
    };
    u.prototype.clearCanvas = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
    };
    u.prototype.attachEvent =
        function(a) {
            this._events.push(a)
        };
    u.prototype._touchEventHandler = function(a) {
        if (a.changedTouches && this.interactivityEnabled) {
            var b = [],
                c = a.changedTouches,
                d = c ? c[0] : a,
                e = null;
            switch (a.type) {
                case "touchstart":
                case "MSPointerDown":
                    b = ["mousemove", "mousedown"];
                    this._lastTouchData = na(d);
                    this._lastTouchData.time = new Date;
                    break;
                case "touchmove":
                case "MSPointerMove":
                    b = ["mousemove"];
                    break;
                case "touchend":
                case "MSPointerUp":
                    b = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType ? ["mouseup",
                        "click"
                    ] : ["mouseup"];
                    break;
                default:
                    return
            }
            if (!(c && 1 < c.length)) {
                e = na(d);
                e.time = new Date;
                try {
                    var f = e.y - this._lastTouchData.y,
                        g = e.time - this._lastTouchData.time;
                    if (15 < Math.abs(f) && (this._lastTouchData.scroll || 200 > g)) {
                        this._lastTouchData.scroll = !0;
                        var k = window.parent || window;
                        k && k.scrollBy && k.scrollBy(0, -f)
                    }
                } catch (p) {}
                this._lastTouchEventType = a.type;
                if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                else
                    for (c = 0; c < b.length; c++) e = b[c], f = document.createEvent("MouseEvent"),
                        f.initMouseEvent(e, !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(f), a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault()
            }
        }
    };
    u.prototype._dispatchRangeEvent = function(a, b) {
        var c = {};
        c.chart = this._publicChartReference;
        c.type = a;
        c.trigger = b;
        var d = [];
        this.axisX && d.push("axisX");
        this.axisY && d.push("axisY");
        this.axisY2 && d.push("axisY2");
        for (var e = 0; e < d.length; e++) c[d[e]] = {
            viewportMinimum: this[d[e]].sessionVariables.newViewportMinimum,
            viewportMaximum: this[d[e]].sessionVariables.newViewportMaximum
        };
        this.dispatchEvent(a, c, this._publicChartReference)
    };
    u.prototype._mouseEventHandler = function(a) {
        if (this.interactivityEnabled)
            if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
            else {
                a.preventManipulation && a.preventManipulation();
                a.preventDefault && a.preventDefault();
                "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
                var b = na(a),
                    c = a.type,
                    d, e;
                a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
                if (!e) {
                    if (u.capturedEventParam) d =
                        u.capturedEventParam, "mouseup" === c && (u.capturedEventParam = null, d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", d.chart._mouseEventHandler, !1)), d.hasOwnProperty(c) && d[c].call(d.context, b.x, b.y);
                    else if (this._events) {
                        for (e = 0; e < this._events.length; e++)
                            if (this._events[e].hasOwnProperty(c)) {
                                d = this._events[e];
                                var f = d.bounds;
                                if (b.x >= f.x1 && b.x <= f.x2 && b.y >= f.y1 && b.y <= f.y2) {
                                    d[c].call(d.context, b.x, b.y);
                                    "mousedown" === c && !0 === d.capture ?
                                        (u.capturedEventParam = d, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.body.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === c && (d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                    break
                                } else d = null
                            }
                        a.target.style.cursor = d && d.cursor ? d.cursor : this._defaultCursor
                    }
                    this._toolTip && this._toolTip.enabled && (c = this.plotArea, (b.x < c.x1 || b.x > c.x2 || b.y < c.y1 || b.y > c.y2) &&
                        this._toolTip.hide());
                    this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
                }
            }
    };
    u.prototype._plotAreaMouseDown = function(a, b) {
        this.isDrag = !0;
        this.dragStartPoint = {
            x: a,
            y: b
        }
    };
    u.prototype._plotAreaMouseUp = function(a, b) {
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var c = b - this.dragStartPoint.y,
                d = a - this.dragStartPoint.x,
                e = 0 <= this.zoomType.indexOf("x"),
                f = 0 <= this.zoomType.indexOf("y"),
                g = !1;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement) var k = f,
                f = e,
                e = k;
            if (this.panEnabled || this.zoomEnabled) {
                if (this.panEnabled)
                    for (e = f = 0; e < this._axes.length; e++) c = this._axes[e], c.viewportMinimum < c.minimum ? (f = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + f, c.sessionVariables.newViewportMaximum = c.viewportMaximum + f, g = !0) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - f, c.sessionVariables.newViewportMaximum =
                        c.viewportMaximum - f, g = !0);
                else if ((!e || 2 < Math.abs(d)) && (!f || 2 < Math.abs(c)) && this.zoomEnabled) {
                    if (!this.dragStartPoint) return;
                    c = e ? this.dragStartPoint.x : this.plotArea.x1;
                    d = f ? this.dragStartPoint.y : this.plotArea.y1;
                    e = e ? a : this.plotArea.x2;
                    f = f ? b : this.plotArea.y2;
                    2 < Math.abs(c - e) && 2 < Math.abs(d - f) && this._zoomPanToSelectedRegion(c, d, e, f) && (g = !0)
                }
                g && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), g && (this.zoomEnabled && "none" ===
                    this._zoomButton.style.display) && (ha(this._zoomButton, this._resetButton), Q(this, this._zoomButton, "pan"), Q(this, this._resetButton, "reset")))
            }
        }
        this.isDrag = !1
    };
    u.prototype._plotAreaMouseMove = function(a, b) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0,
                d = 0,
                e = c = null,
                e = 0 <= this.zoomType.indexOf("x"),
                f = 0 <= this.zoomType.indexOf("y");
            "xySwapped" === this.plotInfo.axisPlacement && (c = f, f = e, e = c);
            c = this.dragStartPoint.x - a;
            d = this.dragStartPoint.y - b;
            2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled) ?
                this._toolTip.hide() : this.panEnabled || this.zoomEnabled || this._toolTip.mouseMoveHandler(a, b);
            (!e || 2 < Math.abs(c) || !f || 2 < Math.abs(d)) && (this.panEnabled || this.zoomEnabled) && (this.panEnabled ? (e = {
                x1: e ? this.plotArea.x1 + c : this.plotArea.x1,
                y1: f ? this.plotArea.y1 + d : this.plotArea.y1,
                x2: e ? this.plotArea.x2 + c : this.plotArea.x2,
                y2: f ? this.plotArea.y2 + d : this.plotArea.y2
            }, this._zoomPanToSelectedRegion(e.x1, e.y1, e.x2, e.y2, !0) && (this._dispatchRangeEvent("rangeChanging", "pan"), this.render(), this._dispatchRangeEvent("rangeChanged",
                "pan"), this.dragStartPoint.x = a, this.dragStartPoint.y = b)) : this.zoomEnabled && (this.resetOverlayedCanvas(), c = this.overlaidCanvasCtx.globalAlpha, this.overlaidCanvasCtx.globalAlpha = 0.7, this.overlaidCanvasCtx.fillStyle = "#A0ABB8", this.overlaidCanvasCtx.fillRect(e ? this.dragStartPoint.x : this.plotArea.x1, f ? this.dragStartPoint.y : this.plotArea.y1, e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, f ? b - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1), this.overlaidCanvasCtx.globalAlpha = c))
        } else this._toolTip.mouseMoveHandler(a,
            b)
    };
    u.prototype._zoomPanToSelectedRegion = function(a, b, c, d, e) {
        e = e || !1;
        var f = 0 <= this.zoomType.indexOf("x"),
            g = 0 <= this.zoomType.indexOf("y"),
            k = !1,
            p = [],
            h = [];
        this.axisX && f && p.push(this.axisX);
        this.axisY && g && p.push(this.axisY);
        this.axisY2 && g && p.push(this.axisY2);
        f = [];
        for (g = 0; g < p.length; g++) {
            var l = p[g],
                m = l.convertPixelToValue({
                    x: a,
                    y: b
                }),
                n = l.convertPixelToValue({
                    x: c,
                    y: d
                });
            if (m > n) var q = n,
                n = m,
                m = q;
            if (isFinite(l.dataInfo.minDiff))
                if (!(Math.abs(n - m) < 3 * Math.abs(l.dataInfo.minDiff) || m < l.minimum || n > l.maximum)) h.push(l),
                    f.push({
                        val1: m,
                        val2: n
                    }), k = !0;
                else if (!e) {
                k = !1;
                break
            }
        }
        if (k)
            for (g = 0; g < h.length; g++) l = h[g], a = f[g], l.setViewPortRange(a.val1, a.val2);
        return k
    };
    u.prototype.preparePlotArea = function() {
        var a = this.plotArea,
            b = this.axisY ? this.axisY : this.axisY2;
        !t && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
        this.axisX && b ? (a.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 : b.lineCoordinates.x1, a.y1 = this.axisX.lineCoordinates.y1 < b.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : b.lineCoordinates.y1,
            a.x2 = this.axisX.lineCoordinates.x2 > b.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : b.lineCoordinates.x2, a.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : b.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1) : (b = this.layoutManager.getFreeSpace(), a.x1 = b.x1, a.x2 = b.x2, a.y1 = b.y1, a.y2 = b.y2, a.width = b.width, a.height = b.height);
        t || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) &&
            a.ctx.translate(-a.x1, -a.y1));
        a.layoutManager = new Z(a.x1, a.y1, a.x2, a.y2, 2)
    };
    u.prototype.getPixelCoordinatesOnPlotArea = function(a, b) {
        return {
            x: this.axisX.getPixelCoordinatesOnAxis(a).x,
            y: this.axisY.getPixelCoordinatesOnAxis(b).y
        }
    };
    u.prototype.renderIndexLabels = function(a) {
        a = a || this.plotArea.ctx;
        for (var b = this.plotArea, c = 0, d = 0, e = 0, f = 0, g = 0, k = d = f = e = 0, p = 0; p < this._indexLabels.length; p++) {
            var h = this._indexLabels[p],
                g = h.chartType.toLowerCase(),
                l, m, n = N("indexLabelFontColor", h.dataPoint, h.dataSeries),
                k = N("indexLabelFontSize",
                    h.dataPoint, h.dataSeries);
            l = N("indexLabelFontFamily", h.dataPoint, h.dataSeries);
            m = N("indexLabelFontStyle", h.dataPoint, h.dataSeries);
            var f = N("indexLabelFontWeight", h.dataPoint, h.dataSeries),
                d = N("indexLabelBackgroundColor", h.dataPoint, h.dataSeries),
                e = N("indexLabelMaxWidth", h.dataPoint, h.dataSeries),
                q = N("indexLabelWrap", h.dataPoint, h.dataSeries),
                r = {
                    percent: null,
                    total: null
                },
                s = null;
            if (0 <= h.dataSeries.type.indexOf("stacked") || "pie" === h.dataSeries.type || "doughnut" === h.dataSeries.type) r = this.getPercentAndTotal(h.dataSeries,
                h.dataPoint);
            if (h.dataSeries.indexLabelFormatter || h.dataPoint.indexLabelFormatter) s = {
                chart: this._publicChartReference,
                dataSeries: h.dataSeries,
                dataPoint: h.dataPoint,
                index: h.indexKeyword,
                total: r.total,
                percent: r.percent
            };
            var w = h.dataPoint.indexLabelFormatter ? h.dataPoint.indexLabelFormatter(s) : h.dataPoint.indexLabel ? this.replaceKeywordsWithValue(h.dataPoint.indexLabel, h.dataPoint, h.dataSeries, null, h.indexKeyword) : h.dataSeries.indexLabelFormatter ? h.dataSeries.indexLabelFormatter(s) : h.dataSeries.indexLabel ?
                this.replaceKeywordsWithValue(h.dataSeries.indexLabel, h.dataPoint, h.dataSeries, null, h.indexKeyword) : null;
            if (null !== w && "" !== w) {
                var c = N("indexLabelPlacement", h.dataPoint, h.dataSeries),
                    r = N("indexLabelOrientation", h.dataPoint, h.dataSeries),
                    s = h.direction,
                    v = h.dataSeries.axisX,
                    x = h.dataSeries.axisY,
                    n = new H(a, {
                        x: 0,
                        y: 0,
                        maxWidth: e ? e : 0.5 * this.width,
                        maxHeight: q ? 5 * k : 1.5 * k,
                        angle: "horizontal" === r ? 0 : -90,
                        text: w,
                        padding: 0,
                        backgroundColor: d,
                        horizontalAlign: "left",
                        fontSize: k,
                        fontFamily: l,
                        fontWeight: f,
                        fontColor: n,
                        fontStyle: m,
                        textBaseline: "top"
                    });
                n.measureText();
                if (0 <= g.indexOf("line") || 0 <= g.indexOf("area") || 0 <= g.indexOf("bubble") || 0 <= g.indexOf("scatter")) {
                    if (h.dataPoint.x < v.viewportMinimum || h.dataPoint.x > v.viewportMaximum || h.dataPoint.y < x.viewportMinimum || h.dataPoint.y > x.viewportMaximum) continue
                } else if (0 <= g.indexOf("column")) {
                    if (h.dataPoint.x < v.viewportMinimum || h.dataPoint.x > v.viewportMaximum || h.bounds.y1 > b.y2 || h.bounds.y2 < b.y1) continue
                } else if (0 <= g.indexOf("bar")) {
                    if (h.dataPoint.x < v.viewportMinimum || h.dataPoint.x > v.viewportMaximum ||
                        h.bounds.x1 > b.x2 || h.bounds.x2 < b.x1) continue
                } else if (h.dataPoint.x < v.viewportMinimum || h.dataPoint.x > v.viewportMaximum) continue;
                e = f = 2;
                "horizontal" === r ? (d = n.width, k = n.height) : (k = n.width, d = n.height);
                if ("normal" === this.plotInfo.axisPlacement) {
                    if (0 <= g.indexOf("line") || 0 <= g.indexOf("area")) c = "auto", f = 4;
                    else if (0 <= g.indexOf("stacked")) "auto" === c && (c = "inside");
                    else if ("bubble" === g || "scatter" === g) c = "inside";
                    l = h.point.x - d / 2;
                    "inside" !== c ? (d = b.y1, e = b.y2, 0 < s ? (m = h.point.y - k - f, m < d && (m = "auto" === c ? Math.max(h.point.y,
                        d) + f : d + f)) : (m = h.point.y + f, m > e - k - f && (m = "auto" === c ? Math.min(h.point.y, e) - k - f : e - k - f))) : (d = Math.max(h.bounds.y1, b.y1), e = Math.min(h.bounds.y2, b.y2), c = 0 <= g.indexOf("range") ? 0 < s ? Math.max(h.bounds.y1, b.y1) + k / 2 + f : Math.min(h.bounds.y2, b.y2) - k / 2 - f : (Math.max(h.bounds.y1, b.y1) + Math.min(h.bounds.y2, b.y2)) / 2, 0 < s ? (m = Math.max(h.point.y, c) - k / 2, m < d && ("bubble" === g || "scatter" === g) && (m = Math.max(h.point.y - k - f, b.y1 + f))) : (m = Math.min(h.point.y, c) - k / 2, m > e - k - f && ("bubble" === g || "scatter" === g) && (m = Math.min(h.point.y + f, b.y2 - k - f))),
                        m = Math.min(m, e - k))
                } else 0 <= g.indexOf("line") || 0 <= g.indexOf("area") || 0 <= g.indexOf("scatter") ? (c = "auto", e = 4) : 0 <= g.indexOf("stacked") ? "auto" === c && (c = "inside") : "bubble" === g && (c = "inside"), m = h.point.y - k / 2, "inside" !== c ? (f = b.x1, g = b.x2, 0 > s ? (l = h.point.x - d - e, l < f && (l = "auto" === c ? Math.max(h.point.x, f) + e : f + e)) : (l = h.point.x + e, l > g - d - e && (l = "auto" === c ? Math.min(h.point.x, g) - d - e : g - d - e))) : (f = Math.max(h.bounds.x1, b.x1), Math.min(h.bounds.x2, b.x2), c = 0 <= g.indexOf("range") ? 0 > s ? Math.max(h.bounds.x1, b.x1) + d / 2 + e : Math.min(h.bounds.x2,
                    b.x2) - d / 2 - e : (Math.max(h.bounds.x1, b.x1) + Math.min(h.bounds.x2, b.x2)) / 2, l = 0 > s ? Math.max(h.point.x, c) - d / 2 : Math.min(h.point.x, c) - d / 2, l = Math.max(l, f));
                "vertical" === r && (m += k);
                n.x = l;
                n.y = m;
                n.render(!0)
            }
        }
        return {
            source: a,
            dest: this.plotArea.ctx,
            animationCallback: A.fadeInAnimation,
            easingFunction: A.easing.easeInQuad,
            animationBase: 0,
            startTimePercent: 0.7
        }
    };
    u.prototype.renderLine = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx;
            b.save();
            var d = this.plotArea;
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e],
                    g = this.data[f];
                b.lineWidth = g.lineThickness;
                var k = g.dataPoints;
                b.setLineDash && b.setLineDash(M(g.lineDashType, g.lineThickness));
                var p = g.id;
                this._eventManager.objectMap[p] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: f
                };
                p = B(p);
                c.strokeStyle = p;
                c.lineWidth = 0 < g.lineThickness ? Math.max(g.lineThickness, 4) : 0;
                p = g._colorSet[0];
                b.strokeStyle = p;
                var h = !0,
                    l = 0,
                    m,
                    n;
                b.beginPath();
                if (0 < k.length) {
                    for (var q = !1, l = 0; l < k.length; l++)
                        if (m = k[l].x.getTime ? k[l].x.getTime() : k[l].x, !(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof k[l].y) 0 < l && (b.stroke(), t && c.stroke()), q = !0;
                            else {
                                m = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (m - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                n = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (k[l].y - a.axisY.conversionParameters.minimum) +
                                    0.5 << 0;
                                var r = g.dataPointIds[l];
                                this._eventManager.objectMap[r] = {
                                    id: r,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: f,
                                    dataPointIndex: l,
                                    x1: m,
                                    y1: n
                                };
                                h || q ? (b.beginPath(), b.moveTo(m, n), t && (c.beginPath(), c.moveTo(m, n)), q = h = !1) : (b.lineTo(m, n), t && c.lineTo(m, n), 0 == l % 500 && (b.stroke(), b.beginPath(), b.moveTo(m, n), t && (c.stroke(), c.beginPath(), c.moveTo(m, n))));
                                if (0 < k[l].markerSize || 0 < g.markerSize) {
                                    var s = g.getMarkerProperties(l, m, n, b);
                                    d.push(s);
                                    r = B(r);
                                    t && d.push({
                                        x: m,
                                        y: n,
                                        ctx: c,
                                        type: s.type,
                                        size: s.size,
                                        color: r,
                                        borderColor: r,
                                        borderThickness: s.borderThickness
                                    })
                                }(k[l].indexLabel || g.indexLabel || k[l].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "line",
                                    dataPoint: k[l],
                                    dataSeries: g,
                                    point: {
                                        x: m,
                                        y: n
                                    },
                                    direction: 0 <= k[l].y ? 1 : -1,
                                    color: p
                                })
                            }
                    b.stroke();
                    t && c.stroke()
                }
            }
            K.drawMarkers(d);
            b.restore();
            b.beginPath();
            t && c.beginPath();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    u.prototype.renderStepLine = function(a) {
        var b = a.targetCanvasCtx ||
            this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = this._eventManager.ghostCtx;
            b.save();
            var d = this.plotArea;
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            for (var d = [], e = 0; e < a.dataSeriesIndexes.length; e++) {
                var f = a.dataSeriesIndexes[e],
                    g = this.data[f];
                b.lineWidth = g.lineThickness;
                var k = g.dataPoints;
                b.setLineDash && b.setLineDash(M(g.lineDashType, g.lineThickness));
                var p = g.id;
                this._eventManager.objectMap[p] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: f
                };
                p = B(p);
                c.strokeStyle = p;
                c.lineWidth =
                    0 < g.lineThickness ? Math.max(g.lineThickness, 4) : 0;
                p = g._colorSet[0];
                b.strokeStyle = p;
                var h = !0,
                    l = 0,
                    m, n;
                b.beginPath();
                if (0 < k.length) {
                    for (var q = !1, l = 0; l < k.length; l++)
                        if (m = k[l].getTime ? k[l].x.getTime() : k[l].x, !(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof k[l].y) 0 < l && (b.stroke(), t && c.stroke()), q = !0;
                            else {
                                var r = n;
                                m = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (m - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                n = a.axisY.conversionParameters.reference +
                                    a.axisY.conversionParameters.pixelPerUnit * (k[l].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var s = g.dataPointIds[l];
                                this._eventManager.objectMap[s] = {
                                    id: s,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: f,
                                    dataPointIndex: l,
                                    x1: m,
                                    y1: n
                                };
                                h || q ? (b.beginPath(), b.moveTo(m, n), t && (c.beginPath(), c.moveTo(m, n)), q = h = !1) : (b.lineTo(m, r), t && c.lineTo(m, r), b.lineTo(m, n), t && c.lineTo(m, n), 0 == l % 500 && (b.stroke(), b.beginPath(), b.moveTo(m, n), t && (c.stroke(), c.beginPath(), c.moveTo(m, n))));
                                if (0 < k[l].markerSize || 0 < g.markerSize) r = g.getMarkerProperties(l,
                                    m, n, b), d.push(r), s = B(s), t && d.push({
                                    x: m,
                                    y: n,
                                    ctx: c,
                                    type: r.type,
                                    size: r.size,
                                    color: s,
                                    borderColor: s,
                                    borderThickness: r.borderThickness
                                });
                                (k[l].indexLabel || g.indexLabel || k[l].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepLine",
                                    dataPoint: k[l],
                                    dataSeries: g,
                                    point: {
                                        x: m,
                                        y: n
                                    },
                                    direction: 0 <= k[l].y ? 1 : -1,
                                    color: p
                                })
                            }
                    b.stroke();
                    t && c.stroke()
                }
            }
            K.drawMarkers(d);
            b.restore();
            b.beginPath();
            t && c.beginPath();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    u.prototype.renderSpline = function(a) {
        function b(a) {
            a = ia(a, 2);
            if (0 < a.length) {
                c.beginPath();
                t && d.beginPath();
                c.moveTo(a[0].x, a[0].y);
                t && d.moveTo(a[0].x, a[0].y);
                for (var b = 0; b < a.length - 3; b += 3) c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), t && d.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), 0 < b && 0 === b % 3E3 && (c.stroke(), c.beginPath(), c.moveTo(a[b + 3].x, a[b + 3].y), t && (d.stroke(), d.beginPath(), d.moveTo(a[b + 3].x, a[b + 3].y)));
                c.stroke();
                t && d.stroke()
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var e = [], f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = a.dataSeriesIndexes[f],
                    k = this.data[g];
                c.lineWidth = k.lineThickness;
                var p = k.dataPoints;
                c.setLineDash && c.setLineDash(M(k.lineDashType, k.lineThickness));
                var h = k.id;
                this._eventManager.objectMap[h] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: g
                };
                h = B(h);
                d.strokeStyle = h;
                d.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                h = k._colorSet[0];
                c.strokeStyle = h;
                var l = 0,
                    m, n, q = [];
                c.beginPath();
                if (0 < p.length)
                    for (l = 0; l < p.length; l++)
                        if (m = p[l].getTime ? p[l].x.getTime() : p[l].x, !(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof p[l].y) 0 < l && (b(q), q = []);
                            else {
                                m = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (m - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                n = a.axisY.conversionParameters.reference +
                                    a.axisY.conversionParameters.pixelPerUnit * (p[l].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var r = k.dataPointIds[l];
                                this._eventManager.objectMap[r] = {
                                    id: r,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: g,
                                    dataPointIndex: l,
                                    x1: m,
                                    y1: n
                                };
                                q[q.length] = {
                                    x: m,
                                    y: n
                                };
                                if (0 < p[l].markerSize || 0 < k.markerSize) {
                                    var s = k.getMarkerProperties(l, m, n, c);
                                    e.push(s);
                                    r = B(r);
                                    t && e.push({
                                        x: m,
                                        y: n,
                                        ctx: d,
                                        type: s.type,
                                        size: s.size,
                                        color: r,
                                        borderColor: r,
                                        borderThickness: s.borderThickness
                                    })
                                }(p[l].indexLabel || k.indexLabel || p[l].indexLabelFormatter ||
                                    k.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "spline",
                                    dataPoint: p[l],
                                    dataSeries: k,
                                    point: {
                                        x: m,
                                        y: n
                                    },
                                    direction: 0 <= p[l].y ? 1 : -1,
                                    color: h
                                })
                            }
                b(q)
            }
            K.drawMarkers(e);
            c.restore();
            c.beginPath();
            t && d.beginPath();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    var I = function(a, b, c, d, e, f, g, k, p, h, l, m, n) {
        "undefined" === typeof n && (n = 1);
        g = g || 0;
        k = k || "black";
        var q = 15 < d - b && 15 < e - c ? 8 : 0.35 * Math.min(d - b, e - c);
        a.beginPath();
        a.moveTo(b, c);
        a.save();
        a.fillStyle = f;
        a.globalAlpha = n;
        a.fillRect(b, c, d - b, e - c);
        a.globalAlpha = 1;
        0 < g && (n = 0 === g % 2 ? 0 : 0.5, a.beginPath(), a.lineWidth = g, a.strokeStyle = k, a.moveTo(b, c), a.rect(b - n, c - n, d - b + 2 * n, e - c + 2 * n), a.stroke());
        a.restore();
        !0 === p && (a.save(), a.beginPath(), a.moveTo(b, c), a.lineTo(b + q, c + q), a.lineTo(d - q, c + q), a.lineTo(d, c), a.closePath(), g = a.createLinearGradient((d + b) / 2, c + q, (d + b) / 2, c), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === h && (a.save(), a.beginPath(),
            a.moveTo(b, e), a.lineTo(b + q, e - q), a.lineTo(d - q, e - q), a.lineTo(d, e), a.closePath(), g = a.createLinearGradient((d + b) / 2, e - q, (d + b) / 2, e), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === l && (a.save(), a.beginPath(), a.moveTo(b, c), a.lineTo(b + q, c + q), a.lineTo(b + q, e - q), a.lineTo(b, e), a.closePath(), g = a.createLinearGradient(b + q, (e + c) / 2, b, (e + c) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, a.fill(), a.restore());
        !0 === m && (a.save(),
            a.beginPath(), a.moveTo(d, c), a.lineTo(d - q, c + q), a.lineTo(d - q, e - q), a.lineTo(d, e), g = a.createLinearGradient(d - q, (e + c) / 2, d, (e + c) / 2), g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, g.addColorStop(0, f), g.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = g, a.fill(), a.closePath(), a.restore())
    };
    u.prototype.renderColumn = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, k, p = a.axisY.conversionParameters.reference +
                a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            l = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width /
                Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(l) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > h && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            l < e && (l = e);
            l > h && (l = h);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height),
                this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var h = a.dataSeriesIndexes[d],
                    m = this.data[h],
                    n = m.dataPoints;
                if (0 < n.length)
                    for (var q = 5 < l && m.bevelEnabled ? !0 : !1, e = 0; e < n.length; e++)
                        if (n[e].getTime ? k = n[e].x.getTime() : k = n[e].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (k - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference +
                                a.axisY.conversionParameters.pixelPerUnit * (n[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = f - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount + d) * l << 0;
                            var r = f + l << 0,
                                s;
                            0 <= n[e].y ? s = p : (s = g, g = p);
                            g > s && (s = g = s);
                            c = n[e].color ? n[e].color : m._colorSet[e % m._colorSet.length];
                            I(b, f, g, r, s, c, 0, null, q && 0 <= n[e].y, 0 > n[e].y && q, !1, !1, m.fillOpacity);
                            c = m.dataPointIds[e];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: e,
                                x1: f,
                                y1: g,
                                x2: r,
                                y2: s
                            };
                            c = B(c);
                            t && I(this._eventManager.ghostCtx,
                                f, g, r, s, c, 0, null, !1, !1, !1, !1);
                            (n[e].indexLabel || m.indexLabel || n[e].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "column",
                                dataPoint: n[e],
                                dataSeries: m,
                                point: {
                                    x: f + (r - f) / 2,
                                    y: 0 <= n[e].y ? g : s
                                },
                                direction: 0 <= n[e].y ? 1 : -1,
                                bounds: {
                                    x1: f,
                                    y1: Math.min(g, s),
                                    x2: r,
                                    y2: Math.max(g, s)
                                },
                                color: c
                            })
                        }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(p, a.axisY.boundingRect.y2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.yScaleAnimation,
                easingFunction: A.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    u.prototype.renderStackedColumn = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width <<
                0,
                l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            l = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(l) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && g > h && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            l < g && (l = g);
            l > h && (l = h);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var m = a.dataSeriesIndexes[h],
                    n = this.data[m],
                    q = n.dataPoints;
                if (0 < q.length) {
                    var r = 5 < l && n.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (g = 0; g < q.length; g++)
                        if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) &&
                            "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[g].y - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                                w = s + l << 0,
                                v;
                            if (0 <= q[g].y) {
                                var x = e[c] ? e[c] : 0;
                                k -= x;
                                v = p - x;
                                e[c] = x + (v - k)
                            } else x = f[c] ? f[c] : 0, v = k + x, k = p + x, f[c] = x + (v - k);
                            c = q[g].color ? q[g].color : n._colorSet[g % n._colorSet.length];
                            I(b, s, k, w, v, c, 0, null, r && 0 <= q[g].y, 0 > q[g].y && r, !1, !1, n.fillOpacity);
                            c = n.dataPointIds[g];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: g,
                                x1: s,
                                y1: k,
                                x2: w,
                                y2: v
                            };
                            c = B(c);
                            t && I(this._eventManager.ghostCtx, s, k, w, v, c, 0, null, !1, !1, !1, !1);
                            (q[g].indexLabel || n.indexLabel || q[g].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn",
                                dataPoint: q[g],
                                dataSeries: n,
                                point: {
                                    x: d,
                                    y: 0 <= q[g].y ? k : v
                                },
                                direction: 0 <= q[g].y ? 1 : -1,
                                bounds: {
                                    x1: s,
                                    y1: Math.min(k,
                                        v),
                                    x2: w,
                                    y2: Math.max(k, v)
                                },
                                color: c
                            })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(p, a.axisY.boundingRect.y2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.yScaleAnimation,
                easingFunction: A.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    u.prototype.renderStackedColumn100 = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                (0 - a.axisY.conversionParameters.minimum) << 0,
                g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0,
                l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            l = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(l) / a.plotType.plotUnits.length) <<
                0;
            this.dataPointMaxWidth && g > h && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            l < g && (l = g);
            l > h && (l = h);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var m = a.dataSeriesIndexes[h],
                    n = this.data[m],
                    q = n.dataPoints;
                if (0 < q.length)
                    for (var r = 5 < l && n.bevelEnabled ? !0 : !1, g = 0; g < q.length; g++)
                        if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * ((0 !== a.dataPointYSums[c] ? 100 * (q[g].y / a.dataPointYSums[c]) :
                                0) - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                                w = s + l << 0,
                                v;
                            if (0 <= q[g].y) {
                                var x = e[c] ? e[c] : 0;
                                k -= x;
                                v = p - x;
                                e[c] = x + (v - k)
                            } else x = f[c] ? f[c] : 0, v = k + x, k = p + x, f[c] = x + (v - k);
                            c = q[g].color ? q[g].color : n._colorSet[g % n._colorSet.length];
                            I(b, s, k, w, v, c, 0, null, r && 0 <= q[g].y, 0 > q[g].y && r, !1, !1, n.fillOpacity);
                            c = n.dataPointIds[g];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: g,
                                x1: s,
                                y1: k,
                                x2: w,
                                y2: v
                            };
                            c = B(c);
                            t && I(this._eventManager.ghostCtx,
                                s, k, w, v, c, 0, null, !1, !1, !1, !1);
                            (q[g].indexLabel || n.indexLabel || q[g].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedColumn100",
                                dataPoint: q[g],
                                dataSeries: n,
                                point: {
                                    x: d,
                                    y: 0 <= q[g].y ? k : v
                                },
                                direction: 0 <= q[g].y ? 1 : -1,
                                bounds: {
                                    x1: s,
                                    y1: Math.min(k, v),
                                    x2: w,
                                    y2: Math.max(k, v)
                                },
                                color: c
                            })
                        }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.min(p, a.axisY.boundingRect.y2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.yScaleAnimation,
                easingFunction: A.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    u.prototype.renderBar = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height,
                    0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            l = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(l) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > h && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.dataPointWidth ?
                this.dataPointWidth : -Infinity, e));
            l < e && (l = e);
            l > h && (l = h);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var h = a.dataSeriesIndexes[d],
                    m = this.data[h],
                    n = m.dataPoints;
                if (0 < n.length) {
                    var q = 5 < l && m.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (e = 0; e < n.length; e++)
                        if (n[e].getTime ? k = n[e].x.getTime() : k = n[e].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[e].y) {
                            g = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (k - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (n[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            g = g - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount + d) * l << 0;
                            var r = g + l << 0,
                                s;
                            0 <= n[e].y ? s = p : (s = f, f = p);
                            c = n[e].color ? n[e].color : m._colorSet[e %
                                m._colorSet.length];
                            I(b, s, g, f, r, c, 0, null, q, !1, !1, !1, m.fillOpacity);
                            c = m.dataPointIds[e];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: e,
                                x1: s,
                                y1: g,
                                x2: f,
                                y2: r
                            };
                            c = B(c);
                            t && I(this._eventManager.ghostCtx, s, g, f, r, c, 0, null, !1, !1, !1, !1);
                            (n[e].indexLabel || m.indexLabel || n[e].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "bar",
                                dataPoint: n[e],
                                dataSeries: m,
                                point: {
                                    x: 0 <= n[e].y ? f : s,
                                    y: g + (r - g) / 2
                                },
                                direction: 0 <= n[e].y ? 1 : -1,
                                bounds: {
                                    x1: Math.min(s,
                                        f),
                                    y1: g,
                                    x2: Math.max(s, f),
                                    y2: r
                                },
                                color: c
                            })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(p, a.axisX.boundingRect.x2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.xScaleAnimation,
                easingFunction: A.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    u.prototype.renderStackedBar = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                (0 - a.axisY.conversionParameters.minimum) << 0,
                g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0,
                l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            l = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(l) / a.plotType.plotUnits.length) <<
                0;
            this.dataPointMaxWidth && g > h && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            l < g && (l = g);
            l > h && (l = h);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var m = a.dataSeriesIndexes[h],
                    n = this.data[m],
                    q = n.dataPoints;
                if (0 < q.length) {
                    var r = 5 < l && n.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (g = 0; g < q.length; g++)
                        if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[g].y - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                                w = s + l << 0,
                                v;
                            if (0 <= q[g].y) {
                                var x = e[c] ? e[c] : 0;
                                v = p + x;
                                k += x;
                                e[c] = x + (k - v)
                            } else x = f[c] ? f[c] : 0, v = k - x, k = p - x, f[c] = x + (k - v);
                            c = q[g].color ? q[g].color : n._colorSet[g % n._colorSet.length];
                            I(b, v, s, k, w, c, 0, null, r, !1, !1, !1, n.fillOpacity);
                            c = n.dataPointIds[g];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: g,
                                x1: v,
                                y1: s,
                                x2: k,
                                y2: w
                            };
                            c = B(c);
                            t && I(this._eventManager.ghostCtx, v, s, k, w, c, 0, null, !1, !1, !1, !1);
                            (q[g].indexLabel || n.indexLabel ||
                                q[g].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar",
                                dataPoint: q[g],
                                dataSeries: n,
                                point: {
                                    x: 0 <= q[g].y ? k : v,
                                    y: d
                                },
                                direction: 0 <= q[g].y ? 1 : -1,
                                bounds: {
                                    x1: Math.min(v, k),
                                    y1: s,
                                    x2: Math.max(v, k),
                                    y2: w
                                },
                                color: c
                            })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(p, a.axisX.boundingRect.x2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.xScaleAnimation,
                easingFunction: A.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    u.prototype.renderStackedBar100 = function(a) {
        var b =
            a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = 0,
                k, p = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0,
                l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.viewportMaximum -
                a.axisX.viewportMinimum));
            l = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(l) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && g > h && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            l < g && (l = g);
            l > h && (l = h);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width,
                d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (h = 0; h < a.dataSeriesIndexes.length; h++) {
                var m = a.dataSeriesIndexes[h],
                    n = this.data[m],
                    q = n.dataPoints;
                if (0 < q.length) {
                    var r = 5 < l && n.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (g = 0; g < q.length; g++)
                        if (c = q[g].x.getTime ? q[g].x.getTime() : q[g].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                            d = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit *
                                (c - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * ((0 !== a.dataPointYSums[c] ? 100 * (q[g].y / a.dataPointYSums[c]) : 0) - a.axisY.conversionParameters.minimum);
                            var s = d - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                                w = s + l << 0,
                                v;
                            if (0 <= q[g].y) {
                                var x = e[c] ? e[c] : 0;
                                v = p + x;
                                k += x;
                                e[c] = x + (k - v)
                            } else x = f[c] ? f[c] : 0, v = k - x, k = p - x, f[c] = x + (k - v);
                            c = q[g].color ? q[g].color : n._colorSet[g % n._colorSet.length];
                            I(b, v, s, k, w, c, 0, null, r, !1, !1, !1, n.fillOpacity);
                            c =
                                n.dataPointIds[g];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: g,
                                x1: v,
                                y1: s,
                                x2: k,
                                y2: w
                            };
                            c = B(c);
                            t && I(this._eventManager.ghostCtx, v, s, k, w, c, 0, null, !1, !1, !1, !1);
                            (q[g].indexLabel || n.indexLabel || q[g].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedBar100",
                                dataPoint: q[g],
                                dataSeries: n,
                                point: {
                                    x: 0 <= q[g].y ? k : v,
                                    y: d
                                },
                                direction: 0 <= q[g].y ? 1 : -1,
                                bounds: {
                                    x1: Math.min(v, k),
                                    y1: s,
                                    x2: Math.max(v, k),
                                    y2: w
                                },
                                color: c
                            })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            a = Math.max(p, a.axisX.boundingRect.x2);
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.xScaleAnimation,
                easingFunction: A.easing.easeOutQuart,
                animationBase: a
            }
        }
    };
    u.prototype.renderArea = function(a) {
        function b() {
            x && (0 < h.lineThickness && c.stroke(), 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? v = w : 0 > a.axisY.viewportMaximum ? v = f.y1 : 0 < a.axisY.viewportMinimum && (v = e.y2), c.lineTo(q, v), c.lineTo(x.x, v), c.closePath(), c.globalAlpha = h.fillOpacity, c.fill(), c.globalAlpha = 1, t && (d.lineTo(q, v), d.lineTo(x.x,
                v), d.closePath(), d.fill()), c.beginPath(), c.moveTo(q, r), d.beginPath(), d.moveTo(q, r), x = {
                x: q,
                y: r
            })
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                k = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(k.x1, k.y1, k.width, k.height);
            c.clip();
            t && (d.beginPath(), d.rect(k.x1, k.y1, k.width, k.height), d.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var p = a.dataSeriesIndexes[k],
                    h = this.data[p],
                    l = h.dataPoints,
                    g = h.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = B(g);
                d.fillStyle = g;
                var g = [],
                    m = !0,
                    n = 0,
                    q, r, s, w = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0,
                    v, x = null;
                if (0 < l.length) {
                    var E = h._colorSet[n % h._colorSet.length];
                    c.fillStyle = E;
                    c.strokeStyle = E;
                    c.lineWidth = h.lineThickness;
                    c.setLineDash && c.setLineDash(M(h.lineDashType, h.lineThickness));
                    for (var y = !0; n < l.length; n++)
                        if (s = l[n].x.getTime ?
                            l[n].x.getTime() : l[n].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof l[n].y) b(), y = !0;
                            else {
                                q = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (s - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[n].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                m || y ? (c.beginPath(), c.moveTo(q, r), x = {
                                    x: q,
                                    y: r
                                }, t && (d.beginPath(), d.moveTo(q, r)), y = m = !1) : (c.lineTo(q, r),
                                    t && d.lineTo(q, r), 0 == n % 250 && b());
                                var z = h.dataPointIds[n];
                                this._eventManager.objectMap[z] = {
                                    id: z,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: n,
                                    x1: q,
                                    y1: r
                                };
                                0 !== l[n].markerSize && (0 < l[n].markerSize || 0 < h.markerSize) && (s = h.getMarkerProperties(n, q, r, c), g.push(s), z = B(z), t && g.push({
                                    x: q,
                                    y: r,
                                    ctx: d,
                                    type: s.type,
                                    size: s.size,
                                    color: z,
                                    borderColor: z,
                                    borderThickness: s.borderThickness
                                }));
                                (l[n].indexLabel || h.indexLabel || l[n].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "area",
                                    dataPoint: l[n],
                                    dataSeries: h,
                                    point: {
                                        x: q,
                                        y: r
                                    },
                                    direction: 0 <= l[n].y ? 1 : -1,
                                    color: E
                                })
                            }
                    b();
                    K.drawMarkers(g)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    u.prototype.renderSplineArea = function(a) {
        function b() {
            var b = ia(v, 2);
            if (0 < b.length) {
                c.beginPath();
                c.moveTo(b[0].x, b[0].y);
                t && (d.beginPath(), d.moveTo(b[0].x, b[0].y));
                for (var g = 0; g < b.length - 3; g += 3) c.bezierCurveTo(b[g + 1].x, b[g +
                    1].y, b[g + 2].x, b[g + 2].y, b[g + 3].x, b[g + 3].y), t && d.bezierCurveTo(b[g + 1].x, b[g + 1].y, b[g + 2].x, b[g + 2].y, b[g + 3].x, b[g + 3].y);
                0 < h.lineThickness && c.stroke();
                0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? s = r : 0 > a.axisY.viewportMaximum ? s = f.y1 : 0 < a.axisY.viewportMinimum && (s = e.y2);
                w = {
                    x: b[0].x,
                    y: b[0].y
                };
                c.lineTo(b[b.length - 1].x, s);
                c.lineTo(w.x, s);
                c.closePath();
                c.globalAlpha = h.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                t && (d.lineTo(b[b.length - 1].x, s), d.lineTo(w.x, s), d.closePath(), d.fill())
            }
        }
        var c = a.targetCanvasCtx ||
            this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                k = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(k.x1, k.y1, k.width, k.height);
            c.clip();
            t && (d.beginPath(), d.rect(k.x1, k.y1, k.width, k.height), d.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var p = a.dataSeriesIndexes[k],
                    h = this.data[p],
                    l = h.dataPoints,
                    g = h.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = B(g);
                d.fillStyle =
                    g;
                var g = [],
                    m = 0,
                    n, q, r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0,
                    s, w = null,
                    v = [];
                if (0 < l.length) {
                    color = h._colorSet[m % h._colorSet.length];
                    c.fillStyle = color;
                    c.strokeStyle = color;
                    c.lineWidth = h.lineThickness;
                    for (c.setLineDash && c.setLineDash(M(h.lineDashType, h.lineThickness)); m < l.length; m++)
                        if (n = l[m].x.getTime ? l[m].x.getTime() : l[m].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax))
                            if ("number" !== typeof l[m].y) 0 <
                                m && (b(), v = []);
                            else {
                                n = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (n - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[m].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var x = h.dataPointIds[m];
                                this._eventManager.objectMap[x] = {
                                    id: x,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: m,
                                    x1: n,
                                    y1: q
                                };
                                v[v.length] = {
                                    x: n,
                                    y: q
                                };
                                if (0 !== l[m].markerSize && (0 < l[m].markerSize || 0 < h.markerSize)) {
                                    var E =
                                        h.getMarkerProperties(m, n, q, c);
                                    g.push(E);
                                    x = B(x);
                                    t && g.push({
                                        x: n,
                                        y: q,
                                        ctx: d,
                                        type: E.type,
                                        size: E.size,
                                        color: x,
                                        borderColor: x,
                                        borderThickness: E.borderThickness
                                    })
                                }(l[m].indexLabel || h.indexLabel || l[m].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: l[m],
                                    dataSeries: h,
                                    point: {
                                        x: n,
                                        y: q
                                    },
                                    direction: 0 <= l[m].y ? 1 : -1,
                                    color: color
                                })
                            }
                    b();
                    K.drawMarkers(g)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    u.prototype.renderStepArea = function(a) {
        function b() {
            x && (0 < h.lineThickness && c.stroke(), 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? v = w : 0 > a.axisY.viewportMaximum ? v = f.y1 : 0 < a.axisY.viewportMinimum && (v = e.y2), c.lineTo(q, v), c.lineTo(x.x, v), c.closePath(), c.globalAlpha = h.fillOpacity, c.fill(), c.globalAlpha = 1, t && (d.lineTo(q, v), d.lineTo(x.x, v), d.closePath(), d.fill()), c.beginPath(), c.moveTo(q, r), d.beginPath(), d.moveTo(q, r), x = {
                x: q,
                y: r
            })
        }
        var c = a.targetCanvasCtx ||
            this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = a.axisX.lineCoordinates,
                f = a.axisY.lineCoordinates,
                g = [],
                k = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(k.x1, k.y1, k.width, k.height);
            c.clip();
            t && (d.beginPath(), d.rect(k.x1, k.y1, k.width, k.height), d.clip());
            for (k = 0; k < a.dataSeriesIndexes.length; k++) {
                var p = a.dataSeriesIndexes[k],
                    h = this.data[p],
                    l = h.dataPoints,
                    g = h.id;
                this._eventManager.objectMap[g] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p
                };
                g = B(g);
                d.fillStyle =
                    g;
                var g = [],
                    m = !0,
                    n = 0,
                    q, r, s, w = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) + 0.5 << 0,
                    v, x = null,
                    E = !1;
                if (0 < l.length) {
                    var y = h._colorSet[n % h._colorSet.length];
                    c.fillStyle = y;
                    c.strokeStyle = y;
                    c.lineWidth = h.lineThickness;
                    for (c.setLineDash && c.setLineDash(M(h.lineDashType, h.lineThickness)); n < l.length; n++)
                        if (s = l[n].x.getTime ? l[n].x.getTime() : l[n].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax)) {
                            var z = r;
                            "number" !== typeof l[n].y ?
                                (b(), E = !0) : (q = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (s - a.axisX.conversionParameters.minimum) + 0.5 << 0, r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (l[n].y - a.axisY.conversionParameters.minimum) + 0.5 << 0, m || E ? (c.beginPath(), c.moveTo(q, r), x = {
                                    x: q,
                                    y: r
                                }, t && (d.beginPath(), d.moveTo(q, r)), E = m = !1) : (c.lineTo(q, z), t && d.lineTo(q, z), c.lineTo(q, r), t && d.lineTo(q, r), 0 == n % 250 && b()), z = h.dataPointIds[n], this._eventManager.objectMap[z] = {
                                    id: z,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: n,
                                    x1: q,
                                    y1: r
                                }, 0 !== l[n].markerSize && (0 < l[n].markerSize || 0 < h.markerSize) && (s = h.getMarkerProperties(n, q, r, c), g.push(s), z = B(z), t && g.push({
                                    x: q,
                                    y: r,
                                    ctx: d,
                                    type: s.type,
                                    size: s.size,
                                    color: z,
                                    borderColor: z,
                                    borderThickness: s.borderThickness
                                })), (l[n].indexLabel || h.indexLabel || l[n].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stepArea",
                                    dataPoint: l[n],
                                    dataSeries: h,
                                    point: {
                                        x: q,
                                        y: r
                                    },
                                    direction: 0 <= l[n].y ? 1 : -1,
                                    color: y
                                }))
                        }
                    b();
                    K.drawMarkers(g)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    u.prototype.renderStackedArea = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = [],
                e = this.plotArea,
                f = [],
                g = [],
                k = 0,
                p, h, l, m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (0 - a.axisY.conversionParameters.minimum) << 0,
                n = this._eventManager.ghostCtx;
            t && n.beginPath();
            b.save();
            t && n.save();
            b.beginPath();
            b.rect(e.x1, e.y1, e.width, e.height);
            b.clip();
            t && (n.beginPath(), n.rect(e.x1, e.y1, e.width, e.height), n.clip());
            xValuePresent = [];
            for (e = 0; e < a.dataSeriesIndexes.length; e++) {
                var q = a.dataSeriesIndexes[e],
                    r = this.data[q],
                    s = r.dataPoints;
                r.dataPointIndexes = [];
                for (k = 0; k < s.length; k++) q = s[k].x.getTime ? s[k].x.getTime() : s[k].x, r.dataPointIndexes[q] = k, xValuePresent[q] || (g.push(q), xValuePresent[q] = !0);
                g.sort(ua)
            }
            for (e = 0; e < a.dataSeriesIndexes.length; e++) {
                var q = a.dataSeriesIndexes[e],
                    r = this.data[q],
                    s = r.dataPoints,
                    w = !0,
                    v = [],
                    k = r.id;
                this._eventManager.objectMap[k] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: q
                };
                k = B(k);
                n.fillStyle = k;
                if (0 < g.length) {
                    c = r._colorSet[0];
                    b.fillStyle = c;
                    b.strokeStyle = c;
                    b.lineWidth = r.lineThickness;
                    b.setLineDash && b.setLineDash(M(r.lineDashType, r.lineThickness));
                    for (k = 0; k < g.length; k++) {
                        l = g[k];
                        var x = null,
                            x = 0 <= r.dataPointIndexes[l] ? s[r.dataPointIndexes[l]] : {
                                x: l,
                                y: 0
                            };
                        if (!(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && "number" === typeof x.y) {
                            p = a.axisX.conversionParameters.reference +
                                a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (x.y - a.axisY.conversionParameters.minimum);
                            var E = f[l] ? f[l] : 0;
                            h -= E;
                            v.push({
                                x: p,
                                y: m - E
                            });
                            f[l] = m - h;
                            if (w) b.beginPath(), b.moveTo(p, h), t && (n.beginPath(), n.moveTo(p, h)), w = !1;
                            else if (b.lineTo(p, h), t && n.lineTo(p, h), 0 == k % 250) {
                                for (0 < r.lineThickness && b.stroke(); 0 < v.length;) {
                                    var y = v.pop();
                                    b.lineTo(y.x, y.y);
                                    t && n.lineTo(y.x, y.y)
                                }
                                b.closePath();
                                b.globalAlpha = r.fillOpacity;
                                b.fill();
                                b.globalAlpha = 1;
                                b.beginPath();
                                b.moveTo(p, h);
                                t && (n.closePath(), n.fill(), n.beginPath(), n.moveTo(p, h));
                                v.push({
                                    x: p,
                                    y: m - E
                                })
                            }
                            if (0 <= r.dataPointIndexes[l]) {
                                var z = r.dataPointIds[r.dataPointIndexes[l]];
                                this._eventManager.objectMap[z] = {
                                    id: z,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: r.dataPointIndexes[l],
                                    x1: p,
                                    y1: h
                                }
                            }
                            0 <= r.dataPointIndexes[l] && 0 !== x.markerSize && (0 < x.markerSize || 0 < r.markerSize) && (l = r.getMarkerProperties(k, p, h, b), d.push(l), markerColor = B(z), t && d.push({
                                x: p,
                                y: h,
                                ctx: n,
                                type: l.type,
                                size: l.size,
                                color: markerColor,
                                borderColor: markerColor,
                                borderThickness: l.borderThickness
                            }));
                            (x.indexLabel || r.indexLabel || x.indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedArea",
                                dataPoint: x,
                                dataSeries: r,
                                point: {
                                    x: p,
                                    y: h
                                },
                                direction: 0 <= s[k].y ? 1 : -1,
                                color: c
                            })
                        }
                    }
                    for (0 < r.lineThickness && b.stroke(); 0 < v.length;) y = v.pop(), b.lineTo(y.x, y.y), t && n.lineTo(y.x, y.y);
                    b.closePath();
                    b.globalAlpha = r.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    b.beginPath();
                    b.moveTo(p,
                        h);
                    t && (n.closePath(), n.fill(), n.beginPath(), n.moveTo(p, h))
                }
                delete r.dataPointIndexes
            }
            K.drawMarkers(d);
            b.restore();
            t && n.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    u.prototype.renderStackedArea100 = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = [],
                f = [],
                g = [],
                k = 0,
                p, h, l, m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                (0 - a.axisY.conversionParameters.minimum) << 0,
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0,
                q = a.axisX.dataInfo.minDiff,
                q = 0.9 * d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(q) << 0,
                r = this._eventManager.ghostCtx;
            b.save();
            t && r.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (r.beginPath(), r.rect(d.x1, d.y1, d.width, d.height), r.clip());
            xValuePresent = [];
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var s = a.dataSeriesIndexes[d],
                    w = this.data[s],
                    v =
                    w.dataPoints;
                w.dataPointIndexes = [];
                for (k = 0; k < v.length; k++) s = v[k].x.getTime ? v[k].x.getTime() : v[k].x, w.dataPointIndexes[s] = k, xValuePresent[s] || (g.push(s), xValuePresent[s] = !0);
                g.sort(ua)
            }
            for (d = 0; d < a.dataSeriesIndexes.length; d++) {
                var s = a.dataSeriesIndexes[d],
                    w = this.data[s],
                    v = w.dataPoints,
                    x = !0,
                    c = w.id;
                this._eventManager.objectMap[c] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: s
                };
                c = B(c);
                r.fillStyle = c;
                1 == v.length && (q = n);
                1 > q ? q = 1 : q > n && (q = n);
                var E = [];
                if (0 < g.length) {
                    c = w._colorSet[k % w._colorSet.length];
                    b.fillStyle =
                        c;
                    b.strokeStyle = c;
                    b.lineWidth = w.lineThickness;
                    b.setLineDash && b.setLineDash(M(w.lineDashType, w.lineThickness));
                    for (k = 0; k < g.length; k++) {
                        l = g[k];
                        var y = null,
                            y = 0 <= w.dataPointIndexes[l] ? v[w.dataPointIndexes[l]] : {
                                x: l,
                                y: 0
                            };
                        if (!(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && "number" === typeof y.y) {
                            h = 0 !== a.dataPointYSums[l] ? 100 * (y.y / a.dataPointYSums[l]) : 0;
                            p = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference +
                                a.axisY.conversionParameters.pixelPerUnit * (h - a.axisY.conversionParameters.minimum);
                            var z = f[l] ? f[l] : 0;
                            h -= z;
                            E.push({
                                x: p,
                                y: m - z
                            });
                            f[l] = m - h;
                            if (x) b.beginPath(), b.moveTo(p, h), t && (r.beginPath(), r.moveTo(p, h)), x = !1;
                            else if (b.lineTo(p, h), t && r.lineTo(p, h), 0 == k % 250) {
                                for (0 < w.lineThickness && b.stroke(); 0 < E.length;) {
                                    var u = E.pop();
                                    b.lineTo(u.x, u.y);
                                    t && r.lineTo(u.x, u.y)
                                }
                                b.closePath();
                                b.globalAlpha = w.fillOpacity;
                                b.fill();
                                b.globalAlpha = 1;
                                b.beginPath();
                                b.moveTo(p, h);
                                t && (r.closePath(), r.fill(), r.beginPath(), r.moveTo(p,
                                    h));
                                E.push({
                                    x: p,
                                    y: m - z
                                })
                            }
                            if (0 <= w.dataPointIndexes[l]) {
                                var D = w.dataPointIds[w.dataPointIndexes[l]];
                                this._eventManager.objectMap[D] = {
                                    id: D,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: s,
                                    dataPointIndex: w.dataPointIndexes[l],
                                    x1: p,
                                    y1: h
                                }
                            }
                            0 <= w.dataPointIndexes[l] && 0 !== y.markerSize && (0 < y.markerSize || 0 < w.markerSize) && (l = w.getMarkerProperties(k, p, h, b), e.push(l), markerColor = B(D), t && e.push({
                                x: p,
                                y: h,
                                ctx: r,
                                type: l.type,
                                size: l.size,
                                color: markerColor,
                                borderColor: markerColor,
                                borderThickness: l.borderThickness
                            }));
                            (y.indexLabel ||
                                w.indexLabel || y.indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "stackedArea100",
                                dataPoint: y,
                                dataSeries: w,
                                point: {
                                    x: p,
                                    y: h
                                },
                                direction: 0 <= v[k].y ? 1 : -1,
                                color: c
                            })
                        }
                    }
                    for (0 < w.lineThickness && b.stroke(); 0 < E.length;) u = E.pop(), b.lineTo(u.x, u.y), t && r.lineTo(u.x, u.y);
                    b.closePath();
                    b.globalAlpha = w.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    b.beginPath();
                    b.moveTo(p, h);
                    t && (r.closePath(), r.fill(), r.beginPath(), r.moveTo(p, h))
                }
                delete w.dataPointIndexes
            }
            K.drawMarkers(e);
            b.restore();
            t && r.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    u.prototype.renderBubble = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx,
            c = a.dataSeriesIndexes.length;
        if (!(0 >= c)) {
            var d = this.plotArea,
                e = 0,
                f, g, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0,
                e = a.axisX.dataInfo.minDiff,
                c = 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(e) / c) << 0;
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = -Infinity, h = Infinity, l = 0; l < a.dataSeriesIndexes.length; l++)
                for (var m = a.dataSeriesIndexes[l], n = this.data[m], q = n.dataPoints, r = 0, e = 0; e < q.length; e++) f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[e].z || (r = q[e].z, r > p && (p = r), r < h && (h = r));
            for (var s = 25 * Math.PI,
                    d = Math.max(Math.pow(0.25 * Math.min(d.height, d.width) / 2, 2) * Math.PI, s), l = 0; l < a.dataSeriesIndexes.length; l++)
                if (m = a.dataSeriesIndexes[l], n = this.data[m], q = n.dataPoints, 1 == q.length && (c = k), 1 > c ? c = 1 : c > k && (c = k), 0 < q.length)
                    for (b.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                        if (f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (f - a.axisX.conversionParameters.minimum) +
                                0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (q[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var r = q[e].z,
                                w = 2 * Math.max(Math.sqrt((p === h ? d / 2 : s + (d - s) / (p - h) * (r - h)) / Math.PI) << 0, 1),
                                r = n.getMarkerProperties(e, b);
                            r.size = w;
                            b.globalAlpha = n.fillOpacity;
                            K.drawMarker(f, g, b, r.type, r.size, r.color, r.borderColor, r.borderThickness);
                            b.globalAlpha = 1;
                            var v = n.dataPointIds[e];
                            this._eventManager.objectMap[v] = {
                                id: v,
                                objectType: "dataPoint",
                                dataSeriesIndex: m,
                                dataPointIndex: e,
                                x1: f,
                                y1: g,
                                size: w
                            };
                            w = B(v);
                            t && K.drawMarker(f, g, this._eventManager.ghostCtx, r.type, r.size, w, w, r.borderThickness);
                            (q[e].indexLabel || n.indexLabel || q[e].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                chartType: "bubble",
                                dataPoint: q[e],
                                dataSeries: n,
                                point: {
                                    x: f,
                                    y: g
                                },
                                direction: 1,
                                bounds: {
                                    x1: f - r.size / 2,
                                    y1: g - r.size / 2,
                                    x2: f + r.size / 2,
                                    y2: g + r.size / 2
                                },
                                color: null
                            })
                        }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.fadeInAnimation,
                easingFunction: A.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    u.prototype.renderScatter = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx,
            c = a.dataSeriesIndexes.length;
        if (!(0 >= c)) {
            var d = this.plotArea,
                e = 0,
                f, g, k = this.dataPointMaxWidth ? this.dataPointMaxWidth : 0.15 * this.width << 0,
                e = a.axisX.dataInfo.minDiff,
                c = 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(e) / c) << 0;
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1,
                d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                var h = a.dataSeriesIndexes[p],
                    l = this.data[h],
                    m = l.dataPoints;
                1 == m.length && (c = k);
                1 > c ? c = 1 : c > k && (c = k);
                if (0 < m.length) {
                    b.strokeStyle = "#4572A7 ";
                    Math.pow(0.3 * Math.min(d.height, d.width) / 2, 2);
                    for (var n = 0, q = 0, e = 0; e < m.length; e++)
                        if (f = m[e].getTime ? f = m[e].x.getTime() : f = m[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                            f = a.axisX.conversionParameters.reference +
                                a.axisX.conversionParameters.pixelPerUnit * (f - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var r = l.getMarkerProperties(e, f, g, b);
                            b.globalAlpha = l.fillOpacity;
                            K.drawMarker(r.x, r.y, r.ctx, r.type, r.size, r.color, r.borderColor, r.borderThickness);
                            b.globalAlpha = 1;
                            Math.sqrt((n - f) * (n - f) + (q - g) * (q - g)) < Math.min(r.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height) ||
                                (n = l.dataPointIds[e], this._eventManager.objectMap[n] = {
                                    id: n,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: h,
                                    dataPointIndex: e,
                                    x1: f,
                                    y1: g
                                }, n = B(n), t && K.drawMarker(r.x, r.y, this._eventManager.ghostCtx, r.type, r.size, n, n, r.borderThickness), (m[e].indexLabel || l.indexLabel || m[e].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "scatter",
                                    dataPoint: m[e],
                                    dataSeries: l,
                                    point: {
                                        x: f,
                                        y: g
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: f - r.size / 2,
                                        y1: g - r.size / 2,
                                        x2: f + r.size / 2,
                                        y2: g + r.size / 2
                                    },
                                    color: null
                                }), n = f, q = g)
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.fadeInAnimation,
                easingFunction: A.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    u.prototype.renderCandlestick = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx,
            c = this._eventManager.ghostCtx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null,
                d = this.plotArea,
                e = 0,
                f, g, k, p, h, l, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            f = this.dataPointMaxWidth ? this.dataPointMaxWidth :
                this.dataPointWidth ? this.dataPointWidth : 0.015 * this.width;
            var m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            m = this.dataPointWidth ? this.dataPointWidth : 0.7 * d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(m) << 0;
            this.dataPointMaxWidth && e > f && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < e) && (f = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity,
                e));
            m < e && (m = e);
            m > f && (m = f);
            b.save();
            t && c.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (c.rect(d.x1, d.y1, d.width, d.height), c.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                var q = a.dataSeriesIndexes[n],
                    r = this.data[q],
                    s = r.dataPoints;
                if (0 < s.length)
                    for (var w = 5 < m && r.bevelEnabled ? !0 : !1, e = 0; e < s.length; e++)
                        if (s[e].getTime ? l = s[e].x.getTime() : l = s[e].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && null !== s[e].y && s[e].y.length && "number" === typeof s[e].y[0] && "number" ===
                            typeof s[e].y[1] && "number" === typeof s[e].y[2] && "number" === typeof s[e].y[3]) {
                            f = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            k = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            p = a.axisY.conversionParameters.reference +
                                a.axisY.conversionParameters.pixelPerUnit * (s[e].y[2] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            h = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (s[e].y[3] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var v = f - m / 2 << 0,
                                x = v + m << 0,
                                d = s[e].color ? s[e].color : r._colorSet[0],
                                E = Math.round(Math.max(1, 0.15 * m)),
                                u = 0 === E % 2 ? 0 : 0.5,
                                z = r.dataPointIds[e];
                            this._eventManager.objectMap[z] = {
                                id: z,
                                objectType: "dataPoint",
                                dataSeriesIndex: q,
                                dataPointIndex: e,
                                x1: v,
                                y1: g,
                                x2: x,
                                y2: k,
                                x3: f,
                                y3: p,
                                x4: f,
                                y4: h,
                                borderThickness: E,
                                color: d
                            };
                            b.strokeStyle = d;
                            b.beginPath();
                            b.lineWidth = E;
                            c.lineWidth = Math.max(E, 4);
                            "candlestick" === r.type ? (b.moveTo(f - u, k), b.lineTo(f - u, Math.min(g, h)), b.stroke(), b.moveTo(f - u, Math.max(g, h)), b.lineTo(f - u, p), b.stroke(), I(b, v, Math.min(g, h), x, Math.max(g, h), s[e].y[0] <= s[e].y[3] ? r.risingColor : d, E, d, w, w, !1, !1, r.fillOpacity), t && (d = B(z), c.strokeStyle = d, c.moveTo(f - u, k), c.lineTo(f - u, Math.min(g, h)), c.stroke(), c.moveTo(f - u, Math.max(g, h)), c.lineTo(f - u, p), c.stroke(), I(c, v, Math.min(g, h), x, Math.max(g,
                                h), d, 0, null, !1, !1, !1, !1))) : "ohlc" === r.type && (b.moveTo(f - u, k), b.lineTo(f - u, p), b.stroke(), b.beginPath(), b.moveTo(f, g), b.lineTo(v, g), b.stroke(), b.beginPath(), b.moveTo(f, h), b.lineTo(x, h), b.stroke(), t && (d = B(z), c.strokeStyle = d, c.moveTo(f - u, k), c.lineTo(f - u, p), c.stroke(), c.beginPath(), c.moveTo(f, g), c.lineTo(v, g), c.stroke(), c.beginPath(), c.moveTo(f, h), c.lineTo(x, h), c.stroke()));
                            (s[e].indexLabel || r.indexLabel || s[e].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                                chartType: r.type,
                                dataPoint: s[e],
                                dataSeries: r,
                                point: {
                                    x: v + (x - v) / 2,
                                    y: k
                                },
                                direction: 1,
                                bounds: {
                                    x1: v,
                                    y1: Math.min(k, p),
                                    x2: x,
                                    y2: Math.max(k, p)
                                },
                                color: d
                            })
                        }
            }
            b.restore();
            t && c.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.fadeInAnimation,
                easingFunction: A.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    u.prototype.renderRangeColumn = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth :
                1;
            f = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var k = a.axisX.dataInfo.minDiff;
            isFinite(k) || (k = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            k = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(k) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > f && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth &&
                f < e) && (f = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            k < e && (k = e);
            k > f && (k = f);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                var h = a.dataSeriesIndexes[p],
                    l = this.data[h],
                    m = l.dataPoints;
                if (0 < m.length)
                    for (var n = 5 < k && l.bevelEnabled ? !0 : !1, e = 0; e < m.length; e++)
                        if (m[e].getTime ? g = m[e].x.getTime() :
                            g = m[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && null !== m[e].y && m[e].y.length && "number" === typeof m[e].y[0] && "number" === typeof m[e].y[1]) {
                            c = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (g - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            d = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (m[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit *
                                (m[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            var q = c - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + p) * k << 0,
                                r = q + k << 0,
                                c = m[e].color ? m[e].color : l._colorSet[e % l._colorSet.length];
                            if (d > f) {
                                var s = d,
                                    d = f;
                                f = s
                            }
                            s = l.dataPointIds[e];
                            this._eventManager.objectMap[s] = {
                                id: s,
                                objectType: "dataPoint",
                                dataSeriesIndex: h,
                                dataPointIndex: e,
                                x1: q,
                                y1: d,
                                x2: r,
                                y2: f
                            };
                            I(b, q, d, r, f, c, 0, c, n, n, !1, !1, l.fillOpacity);
                            c = B(s);
                            t && I(this._eventManager.ghostCtx, q, d, r, f, c, 0, null, !1, !1, !1, !1);
                            if (m[e].indexLabel || l.indexLabel ||
                                m[e].indexLabelFormatter || l.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: m[e],
                                dataSeries: l,
                                indexKeyword: 0,
                                point: {
                                    x: q + (r - q) / 2,
                                    y: m[e].y[1] >= m[e].y[0] ? f : d
                                },
                                direction: m[e].y[1] >= m[e].y[0] ? -1 : 1,
                                bounds: {
                                    x1: q,
                                    y1: Math.min(d, f),
                                    x2: r,
                                    y2: Math.max(d, f)
                                },
                                color: c
                            }), this._indexLabels.push({
                                chartType: "rangeColumn",
                                dataPoint: m[e],
                                dataSeries: l,
                                indexKeyword: 1,
                                point: {
                                    x: q + (r - q) / 2,
                                    y: m[e].y[1] >= m[e].y[0] ? d : f
                                },
                                direction: m[e].y[1] >= m[e].y[0] ? 1 : -1,
                                bounds: {
                                    x1: q,
                                    y1: Math.min(d, f),
                                    x2: r,
                                    y2: Math.max(d,
                                        f)
                                },
                                color: c
                            })
                        }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.fadeInAnimation,
                easingFunction: A.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    u.prototype.renderRangeBar = function(a) {
        var b = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var c = null,
                d = this.plotArea,
                e = 0,
                f, g, k, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
            f = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ?
                this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum));
            p = this.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height / Math.abs(a.axisX.viewportMaximum - a.axisX.viewportMinimum) * Math.abs(p) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && e > f && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth &&
                f < e) && (f = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            p < e && (p = e);
            p > f && (p = f);
            b.save();
            t && this._eventManager.ghostCtx.save();
            b.beginPath();
            b.rect(d.x1, d.y1, d.width, d.height);
            b.clip();
            t && (this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var h = 0; h < a.dataSeriesIndexes.length; h++) {
                var l = a.dataSeriesIndexes[h],
                    m = this.data[l],
                    n = m.dataPoints;
                if (0 < n.length) {
                    var q = 5 < p && m.bevelEnabled ? !0 : !1;
                    b.strokeStyle = "#4572A7 ";
                    for (e = 0; e < n.length; e++)
                        if (n[e].getTime ?
                            k = n[e].x.getTime() : k = n[e].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && null !== n[e].y && n[e].y.length && "number" === typeof n[e].y[0] && "number" === typeof n[e].y[1]) {
                            d = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (n[e].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            f = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (n[e].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                            g = a.axisX.conversionParameters.reference +
                                a.axisX.conversionParameters.pixelPerUnit * (k - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                            g = g - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + h) * p << 0;
                            var r = g + p << 0;
                            d > f && (c = d, d = f, f = c);
                            c = n[e].color ? n[e].color : m._colorSet[e % m._colorSet.length];
                            I(b, d, g, f, r, c, 0, null, q, !1, !1, !1, m.fillOpacity);
                            c = m.dataPointIds[e];
                            this._eventManager.objectMap[c] = {
                                id: c,
                                objectType: "dataPoint",
                                dataSeriesIndex: l,
                                dataPointIndex: e,
                                x1: d,
                                y1: g,
                                x2: f,
                                y2: r
                            };
                            c = B(c);
                            t && I(this._eventManager.ghostCtx, d, g, f, r, c, 0, null, !1, !1, !1, !1);
                            if (n[e].indexLabel || m.indexLabel || n[e].indexLabelFormatter || m.indexLabelFormatter) this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: n[e],
                                dataSeries: m,
                                indexKeyword: 0,
                                point: {
                                    x: n[e].y[1] >= n[e].y[0] ? d : f,
                                    y: g + (r - g) / 2
                                },
                                direction: n[e].y[1] >= n[e].y[0] ? -1 : 1,
                                bounds: {
                                    x1: Math.min(d, f),
                                    y1: g,
                                    x2: Math.max(d, f),
                                    y2: r
                                },
                                color: c
                            }), this._indexLabels.push({
                                chartType: "rangeBar",
                                dataPoint: n[e],
                                dataSeries: m,
                                indexKeyword: 1,
                                point: {
                                    x: n[e].y[1] >= n[e].y[0] ? f : d,
                                    y: g + (r - g) / 2
                                },
                                direction: n[e].y[1] >= n[e].y[0] ? 1 : -1,
                                bounds: {
                                    x1: Math.min(d,
                                        f),
                                    y1: g,
                                    x2: Math.max(d, f),
                                    y2: r
                                },
                                color: c
                            })
                        }
                }
            }
            b.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: b,
                dest: this.plotArea.ctx,
                animationCallback: A.fadeInAnimation,
                easingFunction: A.easing.easeInQuad,
                animationBase: 0
            }
        }
    };
    u.prototype.renderRangeArea = function(a) {
        function b() {
            if (w) {
                var a = null;
                0 < p.lineThickness && c.stroke();
                for (var b = g.length - 1; 0 <= b; b--) a = g[b], c.lineTo(a.x, a.y), d.lineTo(a.x, a.y);
                c.closePath();
                c.globalAlpha = p.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                d.fill();
                if (0 < p.lineThickness) {
                    c.beginPath();
                    c.moveTo(a.x, a.y);
                    for (b = 0; b < g.length; b++) a = g[b], c.lineTo(a.x, a.y);
                    c.stroke()
                }
                c.beginPath();
                c.moveTo(n, q);
                d.beginPath();
                d.moveTo(n, q);
                w = {
                    x: n,
                    y: q
                };
                g = [];
                g.push({
                    x: n,
                    y: r
                })
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = [],
                f = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(f.x1, f.y1, f.width, f.height);
            c.clip();
            t && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height), d.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g = [],
                    k = a.dataSeriesIndexes[f],
                    p = this.data[k],
                    h = p.dataPoints,
                    e = p.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: k
                };
                e = B(e);
                d.fillStyle = e;
                var e = [],
                    l = !0,
                    m = 0,
                    n, q, r, s, w = null;
                if (0 < h.length) {
                    var v = p._colorSet[m % p._colorSet.length];
                    c.fillStyle = v;
                    c.strokeStyle = v;
                    c.lineWidth = p.lineThickness;
                    c.setLineDash && c.setLineDash(M(p.lineDashType, p.lineThickness));
                    for (var x = !0; m < h.length; m++)
                        if (s = h[m].x.getTime ? h[m].x.getTime() : h[m].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax))
                            if (null !== h[m].y && h[m].y.length &&
                                "number" === typeof h[m].y[0] && "number" === typeof h[m].y[1]) {
                                n = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (s - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                q = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (h[m].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                r = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (h[m].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                l || x ? (c.beginPath(), c.moveTo(n, q),
                                    w = {
                                        x: n,
                                        y: q
                                    }, g = [], g.push({
                                        x: n,
                                        y: r
                                    }), t && (d.beginPath(), d.moveTo(n, q)), x = l = !1) : (c.lineTo(n, q), g.push({
                                    x: n,
                                    y: r
                                }), t && d.lineTo(n, q), 0 == m % 250 && b());
                                s = p.dataPointIds[m];
                                this._eventManager.objectMap[s] = {
                                    id: s,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: m,
                                    x1: n,
                                    y1: q,
                                    y2: r
                                };
                                if (0 !== h[m].markerSize && (0 < h[m].markerSize || 0 < p.markerSize)) {
                                    var u = p.getMarkerProperties(m, n, r, c);
                                    e.push(u);
                                    var y = B(s);
                                    t && e.push({
                                        x: n,
                                        y: r,
                                        ctx: d,
                                        type: u.type,
                                        size: u.size,
                                        color: y,
                                        borderColor: y,
                                        borderThickness: u.borderThickness
                                    });
                                    u =
                                        p.getMarkerProperties(m, n, q, c);
                                    e.push(u);
                                    y = B(s);
                                    t && e.push({
                                        x: n,
                                        y: q,
                                        ctx: d,
                                        type: u.type,
                                        size: u.size,
                                        color: y,
                                        borderColor: y,
                                        borderThickness: u.borderThickness
                                    })
                                }
                                if (h[m].indexLabel || p.indexLabel || h[m].indexLabelFormatter || p.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: h[m],
                                    dataSeries: p,
                                    indexKeyword: 0,
                                    point: {
                                        x: n,
                                        y: q
                                    },
                                    direction: h[m].y[0] <= h[m].y[1] ? -1 : 1,
                                    color: v
                                }), this._indexLabels.push({
                                    chartType: "rangeArea",
                                    dataPoint: h[m],
                                    dataSeries: p,
                                    indexKeyword: 1,
                                    point: {
                                        x: n,
                                        y: r
                                    },
                                    direction: h[m].y[0] <=
                                        h[m].y[1] ? 1 : -1,
                                    color: v
                                })
                            } else b(), x = !0;
                    b();
                    K.drawMarkers(e)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    u.prototype.renderRangeSplineArea = function(a) {
        function b() {
            var a = ia(q, 2);
            if (0 < a.length) {
                c.beginPath();
                c.moveTo(a[0].x, a[0].y);
                t && (d.beginPath(), d.moveTo(a[0].x, a[0].y));
                for (var b = 0; b < a.length - 3; b += 3) c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b +
                    3].y), t && d.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y);
                0 < k.lineThickness && c.stroke();
                a = ia(r, 2);
                c.lineTo(r[r.length - 1].x, r[r.length - 1].y);
                for (b = a.length - 1; 2 < b; b -= 3) c.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y), t && d.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y);
                c.closePath();
                c.globalAlpha = k.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                if (0 < k.lineThickness) {
                    c.beginPath();
                    c.moveTo(r[r.length - 1].x, r[r.length - 1].y);
                    for (b = a.length - 1; 2 < b; b -=
                        3) c.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y), t && d.bezierCurveTo(a[b - 1].x, a[b - 1].y, a[b - 2].x, a[b - 2].y, a[b - 3].x, a[b - 3].y);
                    c.stroke()
                }
                c.beginPath();
                t && (d.closePath(), d.fill())
            }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx,
                e = [],
                f = this.plotArea;
            c.save();
            t && d.save();
            c.beginPath();
            c.rect(f.x1, f.y1, f.width, f.height);
            c.clip();
            t && (d.beginPath(), d.rect(f.x1, f.y1, f.width, f.height), d.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
                var g =
                    a.dataSeriesIndexes[f],
                    k = this.data[g],
                    p = k.dataPoints,
                    e = k.id;
                this._eventManager.objectMap[e] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: g
                };
                e = B(e);
                d.fillStyle = e;
                var e = [],
                    h = 0,
                    l, m, n, q = [],
                    r = [];
                if (0 < p.length) {
                    color = k._colorSet[h % k._colorSet.length];
                    c.fillStyle = color;
                    c.strokeStyle = color;
                    c.lineWidth = k.lineThickness;
                    for (c.setLineDash && c.setLineDash(M(k.lineDashType, k.lineThickness)); h < p.length; h++)
                        if (l = p[h].x.getTime ? p[h].x.getTime() : p[h].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax))
                            if (null !==
                                p[h].y && p[h].y.length && "number" === typeof p[h].y[0] && "number" === typeof p[h].y[1]) {
                                l = a.axisX.conversionParameters.reference + a.axisX.conversionParameters.pixelPerUnit * (l - a.axisX.conversionParameters.minimum) + 0.5 << 0;
                                m = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[h].y[0] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                n = a.axisY.conversionParameters.reference + a.axisY.conversionParameters.pixelPerUnit * (p[h].y[1] - a.axisY.conversionParameters.minimum) + 0.5 << 0;
                                var s = k.dataPointIds[h];
                                this._eventManager.objectMap[s] = {
                                    id: s,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: g,
                                    dataPointIndex: h,
                                    x1: l,
                                    y1: m,
                                    y2: n
                                };
                                q[q.length] = {
                                    x: l,
                                    y: m
                                };
                                r[r.length] = {
                                    x: l,
                                    y: n
                                };
                                if (0 !== p[h].markerSize && (0 < p[h].markerSize || 0 < k.markerSize)) {
                                    var w = k.getMarkerProperties(h, l, m, c);
                                    e.push(w);
                                    var v = B(s);
                                    t && e.push({
                                        x: l,
                                        y: m,
                                        ctx: d,
                                        type: w.type,
                                        size: w.size,
                                        color: v,
                                        borderColor: v,
                                        borderThickness: w.borderThickness
                                    });
                                    w = k.getMarkerProperties(h, l, n, c);
                                    e.push(w);
                                    v = B(s);
                                    t && e.push({
                                        x: l,
                                        y: n,
                                        ctx: d,
                                        type: w.type,
                                        size: w.size,
                                        color: v,
                                        borderColor: v,
                                        borderThickness: w.borderThickness
                                    })
                                }
                                if (p[h].indexLabel || k.indexLabel || p[h].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: p[h],
                                    dataSeries: k,
                                    indexKeyword: 0,
                                    point: {
                                        x: l,
                                        y: m
                                    },
                                    direction: p[h].y[0] <= p[h].y[1] ? -1 : 1,
                                    color: color
                                }), this._indexLabels.push({
                                    chartType: "splineArea",
                                    dataPoint: p[h],
                                    dataSeries: k,
                                    indexKeyword: 1,
                                    point: {
                                        x: l,
                                        y: n
                                    },
                                    direction: p[h].y[0] <= p[h].y[1] ? 1 : -1,
                                    color: color
                                })
                            } else 0 < h && (b(), q = [], r = []);
                    b();
                    K.drawMarkers(e)
                }
            }
            c.restore();
            t && this._eventManager.ghostCtx.restore();
            return {
                source: c,
                dest: this.plotArea.ctx,
                animationCallback: A.xClipAnimation,
                easingFunction: A.easing.linear,
                animationBase: 0
            }
        }
    };
    var sa = function(a, b, c, d, e, f, g, k, p) {
        "undefined" === typeof k && (k = 1);
        if (!t) {
            var h = Number((g % (2 * Math.PI)).toFixed(8));
            Number((f % (2 * Math.PI)).toFixed(8)) === h && (g -= 1E-4)
        }
        a.save();
        a.globalAlpha = k;
        "pie" === e ? (a.beginPath(), a.moveTo(b.x, b.y), a.arc(b.x, b.y, c, f, g, !1), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(b.x, b.y, c, f,
            g, !1), a.arc(b.x, b.y, p * c, g, f, !0), a.closePath(), a.fillStyle = d, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
        a.globalAlpha = 1;
        a.restore()
    };
    u.prototype.renderPie = function(a) {
        function b() {
            if (h && l) {
                var a = 0,
                    b = 0,
                    c = 0,
                    d = 0;
                for (y = 0; y < l.length; y++) {
                    var e = l[y],
                        f = h.dataPointIds[y],
                        g = {
                            id: f,
                            objectType: "dataPoint",
                            dataPointIndex: y,
                            dataSeriesIndex: 0
                        };
                    q.push(g);
                    var k = {
                            percent: null,
                            total: null
                        },
                        m = null,
                        k = p.getPercentAndTotal(h, e);
                    if (h.indexLabelFormatter || e.indexLabelFormatter) m = {
                        chart: p._options,
                        dataSeries: h,
                        dataPoint: e,
                        total: k.total,
                        percent: k.percent
                    };
                    k = e.indexLabelFormatter ? e.indexLabelFormatter(m) : e.indexLabel ? p.replaceKeywordsWithValue(e.indexLabel, e, h, y) : h.indexLabelFormatter ? h.indexLabelFormatter(m) : h.indexLabel ? p.replaceKeywordsWithValue(h.indexLabel, e, h, y) : e.label ? e.label : "";
                    p._eventManager.objectMap[f] = g;
                    g.center = {
                        x: x.x,
                        y: x.y
                    };
                    g.y = e.y;
                    g.radius = z;
                    g.percentInnerRadius = D;
                    g.indexLabelText = k;
                    g.indexLabelPlacement = h.indexLabelPlacement;
                    g.indexLabelLineColor = e.indexLabelLineColor ? e.indexLabelLineColor : h.indexLabelLineColor ?
                        h.indexLabelLineColor : e.color ? e.color : h._colorSet[y % h._colorSet.length];
                    g.indexLabelLineThickness = P(e.indexLabelLineThickness) ? h.indexLabelLineThickness : e.indexLabelLineThickness;
                    g.indexLabelLineDashType = e.indexLabelLineDashType ? e.indexLabelLineDashType : h.indexLabelLineDashType;
                    g.indexLabelFontColor = e.indexLabelFontColor ? e.indexLabelFontColor : h.indexLabelFontColor;
                    g.indexLabelFontStyle = e.indexLabelFontStyle ? e.indexLabelFontStyle : h.indexLabelFontStyle;
                    g.indexLabelFontWeight = e.indexLabelFontWeight ?
                        e.indexLabelFontWeight : h.indexLabelFontWeight;
                    g.indexLabelFontSize = e.indexLabelFontSize ? e.indexLabelFontSize : h.indexLabelFontSize;
                    g.indexLabelFontFamily = e.indexLabelFontFamily ? e.indexLabelFontFamily : h.indexLabelFontFamily;
                    g.indexLabelBackgroundColor = e.indexLabelBackgroundColor ? e.indexLabelBackgroundColor : h.indexLabelBackgroundColor ? h.indexLabelBackgroundColor : null;
                    g.indexLabelMaxWidth = e.indexLabelMaxWidth ? e.indexLabelMaxWidth : h.indexLabelMaxWidth ? h.indexLabelMaxWidth : 0.33 * n.width;
                    g.indexLabelWrap =
                        "undefined" !== typeof e.indexLabelWrap ? e.indexLabelWrap : h.indexLabelWrap;
                    g.startAngle = 0 === y ? h.startAngle ? h.startAngle / 180 * Math.PI : 0 : q[y - 1].endAngle;
                    g.startAngle = (g.startAngle + 2 * Math.PI) % (2 * Math.PI);
                    g.endAngle = g.startAngle + 2 * Math.PI / u * Math.abs(e.y);
                    e = (g.endAngle + g.startAngle) / 2;
                    e = (e + 2 * Math.PI) % (2 * Math.PI);
                    g.midAngle = e;
                    if (g.midAngle > Math.PI / 2 - t && g.midAngle < Math.PI / 2 + t) {
                        if (0 === a || q[c].midAngle > g.midAngle) c = y;
                        a++
                    } else if (g.midAngle > 3 * Math.PI / 2 - t && g.midAngle < 3 * Math.PI / 2 + t) {
                        if (0 === b || q[d].midAngle > g.midAngle) d =
                            y;
                        b++
                    }
                    g.hemisphere = e > Math.PI / 2 && e <= 3 * Math.PI / 2 ? "left" : "right";
                    g.indexLabelTextBlock = new H(p.plotArea.ctx, {
                        fontSize: g.indexLabelFontSize,
                        fontFamily: g.indexLabelFontFamily,
                        fontColor: g.indexLabelFontColor,
                        fontStyle: g.indexLabelFontStyle,
                        fontWeight: g.indexLabelFontWeight,
                        horizontalAlign: "left",
                        backgroundColor: g.indexLabelBackgroundColor,
                        maxWidth: g.indexLabelMaxWidth,
                        maxHeight: g.indexLabelWrap ? 5 * g.indexLabelFontSize : 1.5 * g.indexLabelFontSize,
                        text: g.indexLabelText,
                        padding: 0,
                        textBaseline: "top"
                    });
                    g.indexLabelTextBlock.measureText()
                }
                f =
                    e = 0;
                k = !1;
                for (y = 0; y < l.length; y++) g = q[(c + y) % l.length], 1 < a && (g.midAngle > Math.PI / 2 - t && g.midAngle < Math.PI / 2 + t) && (e <= a / 2 && !k ? (g.hemisphere = "right", e++) : (g.hemisphere = "left", k = !0));
                k = !1;
                for (y = 0; y < l.length; y++) g = q[(d + y) % l.length], 1 < b && (g.midAngle > 3 * Math.PI / 2 - t && g.midAngle < 3 * Math.PI / 2 + t) && (f <= b / 2 && !k ? (g.hemisphere = "left", f++) : (g.hemisphere = "right", k = !0))
            }
        }
        function c(a) {
            var b = p.plotArea.ctx;
            b.clearRect(n.x1, n.y1, n.width, n.height);
            b.fillStyle = p.backgroundColor;
            b.fillRect(n.x1, n.y1, n.width, n.height);
            for (b = 0; b <
                l.length; b++) {
                var c = q[b].startAngle,
                    d = q[b].endAngle;
                if (d > c) {
                    var e = 0.07 * z * Math.cos(q[b].midAngle),
                        f = 0.07 * z * Math.sin(q[b].midAngle),
                        g = !1;
                    if (l[b].exploded) {
                        if (1E-9 < Math.abs(q[b].center.x - (x.x + e)) || 1E-9 < Math.abs(q[b].center.y - (x.y + f))) q[b].center.x = x.x + e * a, q[b].center.y = x.y + f * a, g = !0
                    } else if (0 < Math.abs(q[b].center.x - x.x) || 0 < Math.abs(q[b].center.y - x.y)) q[b].center.x = x.x + e * (1 - a), q[b].center.y = x.y + f * (1 - a), g = !0;
                    g && (e = {}, e.dataSeries = h, e.dataPoint = h.dataPoints[b], e.index = b, p._toolTip.highlightObjects([e]));
                    sa(p.plotArea.ctx, q[b].center, q[b].radius, l[b].color ? l[b].color : h._colorSet[b % h._colorSet.length], h.type, c, d, h.fillOpacity, q[b].percentInnerRadius)
                }
            }
            a = p.plotArea.ctx;
            a.save();
            a.fillStyle = "black";
            a.strokeStyle = "grey";
            a.textBaseline = "middle";
            a.lineJoin = "round";
            for (b = b = 0; b < l.length; b++) c = q[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height / 2, d = 0, d = "left" === c.hemisphere ? "inside" !== h.indexLabelPlacement ? -(c.indexLabelTextBlock.width + m) : -c.indexLabelTextBlock.width / 2 : "inside" !==
                h.indexLabelPlacement ? m : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (d = c.center.x + z * Math.cos(c.midAngle), e = c.center.y + z * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(M(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(),
                    a.moveTo(d, e), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -m : m), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
            a.save()
        }
        function d(a, b) {
            var c = 0,
                c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
            return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ?
                e - d : c - f
        }
        function e(a) {
            for (var b = null, c = 1; c < l.length; c++)
                if (b = (a + c + q.length) % q.length, q[b].hemisphere !== q[a].hemisphere) {
                    b = null;
                    break
                } else if (q[b].indexLabelText && b !== a && (0 > d(q[b], q[a]) || ("right" === q[a].hemisphere ? q[b].indexLabelTextBlock.y >= q[a].indexLabelTextBlock.y : q[b].indexLabelTextBlock.y <= q[a].indexLabelTextBlock.y))) break;
            else b = null;
            return b
        }
        function f(a, b, c) {
            c = (c || 0) + 1;
            if (1E3 < c) return 0;
            b = b || 0;
            var g = 0,
                h = x.y - 1 * indexLabelRadius,
                k = x.y + 1 * indexLabelRadius;
            if (0 <= a && a < l.length) {
                var m = q[a];
                if (0 >
                    b && m.indexLabelTextBlock.y < h || 0 < b && m.indexLabelTextBlock.y > k) return 0;
                var n = 0,
                    p = 0,
                    p = n = n = 0;
                0 > b ? m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 > h && m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 + b < h && (b = -(h - (m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 + b))) : m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 < h && m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 + b > k && (b = m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 + b - k);
                b = m.indexLabelTextBlock.y + b;
                h = 0;
                h = "right" ===
                    m.hemisphere ? x.x + Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(b - x.y, 2)) : x.x - Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(b - x.y, 2));
                p = x.x + z * Math.cos(m.midAngle);
                n = x.y + z * Math.sin(m.midAngle);
                n = Math.sqrt(Math.pow(h - p, 2) + Math.pow(b - n, 2));
                p = Math.acos(z / indexLabelRadius);
                n = Math.acos((indexLabelRadius * indexLabelRadius + z * z - n * n) / (2 * z * indexLabelRadius));
                b = n < p ? b - m.indexLabelTextBlock.y : 0;
                h = null;
                for (k = 1; k < l.length; k++)
                    if (h = (a - k + q.length) % q.length, q[h].hemisphere !== q[a].hemisphere) {
                        h = null;
                        break
                    } else if (q[h].indexLabelText &&
                    q[h].hemisphere === q[a].hemisphere && h !== a && (0 > d(q[h], q[a]) || ("right" === q[a].hemisphere ? q[h].indexLabelTextBlock.y <= q[a].indexLabelTextBlock.y : q[h].indexLabelTextBlock.y >= q[a].indexLabelTextBlock.y))) break;
                else h = null;
                p = h;
                n = e(a);
                k = h = 0;
                0 > b ? (k = "right" === m.hemisphere ? p : n, g = b, null !== k && (p = -b, b = m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 - (q[k].indexLabelTextBlock.y + q[k].indexLabelTextBlock.height / 2), b - p < r && (h = -p, k = f(k, h, c + 1), +k.toFixed(v) > +h.toFixed(v) && (g = b > r ? -(b - r) : -(p - (k - h)))))) : 0 < b && (k = "right" ===
                    m.hemisphere ? n : p, g = b, null !== k && (p = b, b = q[k].indexLabelTextBlock.y - q[k].indexLabelTextBlock.height / 2 - (m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2), b - p < r && (h = p, k = f(k, h, c + 1), +k.toFixed(v) < +h.toFixed(v) && (g = b > r ? b - r : p - (h - k)))));
                g && (c = m.indexLabelTextBlock.y + g, b = 0, b = "right" === m.hemisphere ? x.x + Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(c - x.y, 2)) : x.x - Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(c - x.y, 2)), m.midAngle > Math.PI / 2 - t && m.midAngle < Math.PI / 2 + t ? (h = (a - 1 + q.length) % q.length, h = q[h], a =
                    q[(a + 1 + q.length) % q.length], "left" === m.hemisphere && "right" === h.hemisphere && b > h.indexLabelTextBlock.x ? b = h.indexLabelTextBlock.x - 15 : "right" === m.hemisphere && ("left" === a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : m.midAngle > 3 * Math.PI / 2 - t && m.midAngle < 3 * Math.PI / 2 + t && (h = (a - 1 + q.length) % q.length, h = q[h], a = q[(a + 1 + q.length) % q.length], "right" === m.hemisphere && "left" === h.hemisphere && b < h.indexLabelTextBlock.x ? b = h.indexLabelTextBlock.x + 15 : "left" === m.hemisphere && ("right" === a.hemisphere &&
                    b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x - 15)), m.indexLabelTextBlock.y = c, m.indexLabelTextBlock.x = b, m.indexLabelAngle = Math.atan2(m.indexLabelTextBlock.y - x.y, m.indexLabelTextBlock.x - x.x))
            }
            return g
        }
        function g() {
            var a = p.plotArea.ctx;
            a.fillStyle = "grey";
            a.strokeStyle = "grey";
            a.font = "16px Arial";
            a.textBaseline = "middle";
            for (var b = a = 0, c = 0, g = !0, b = 0; 10 > b && (1 > b || 0 < c); b++) {
                if (h.radius || !h.radius && "undefined" !== typeof h.innerRadius && null !== h.innerRadius && z - c <= A) g = !1;
                g && (z -= c);
                c = 0;
                if ("inside" !== h.indexLabelPlacement) {
                    indexLabelRadius =
                        z * s;
                    for (a = 0; a < l.length; a++) {
                        var k = q[a];
                        k.indexLabelTextBlock.x = x.x + indexLabelRadius * Math.cos(k.midAngle);
                        k.indexLabelTextBlock.y = x.y + indexLabelRadius * Math.sin(k.midAngle);
                        k.indexLabelAngle = k.midAngle;
                        k.radius = z;
                        k.percentInnerRadius = D
                    }
                    for (var t, w, a = 0; a < l.length; a++) {
                        var k = q[a],
                            u = e(a);
                        if (null !== u) {
                            t = q[a];
                            w = q[u];
                            var y = 0,
                                y = d(t, w) - r;
                            if (0 > y) {
                                for (var B = w = 0, C = 0; C < l.length; C++) C !== a && q[C].hemisphere === k.hemisphere && (q[C].indexLabelTextBlock.y < k.indexLabelTextBlock.y ? w++ : B++);
                                w = y / (w + B || 1) * B;
                                var B = -1 * (y - w),
                                    E = C = 0;
                                "right" === k.hemisphere ? (C = f(a, w), B = -1 * (y - C), E = f(u, B), +E.toFixed(v) < +B.toFixed(v) && +C.toFixed(v) <= +w.toFixed(v) && f(a, -(B - E))) : (C = f(u, w), B = -1 * (y - C), E = f(a, B), +E.toFixed(v) < +B.toFixed(v) && +C.toFixed(v) <= +w.toFixed(v) && f(u, -(B - E)))
                            }
                        }
                    }
                } else
                    for (a = 0; a < l.length; a++) k = q[a], indexLabelRadius = "pie" === h.type ? 0.7 * z : 0.8 * z, u = x.x + indexLabelRadius * Math.cos(k.midAngle), w = x.y + indexLabelRadius * Math.sin(k.midAngle), k.indexLabelTextBlock.x = u, k.indexLabelTextBlock.y = w;
                for (a = 0; a < l.length; a++)
                    if (k = q[a], u = k.indexLabelTextBlock.measureText(),
                        0 !== u.height && 0 !== u.width) u = u = 0, "right" === k.hemisphere ? (u = n.x2 - (k.indexLabelTextBlock.x + k.indexLabelTextBlock.width + m), u *= -1) : u = n.x1 - (k.indexLabelTextBlock.x - k.indexLabelTextBlock.width - m), 0 < u && (!g && k.indexLabelText && (w = "right" === k.hemisphere ? n.x2 - k.indexLabelTextBlock.x : k.indexLabelTextBlock.x - n.x1, 0.3 * k.indexLabelTextBlock.maxWidth > w ? k.indexLabelText = "" : k.indexLabelTextBlock.maxWidth = 0.85 * w, 0.3 * k.indexLabelTextBlock.maxWidth < w && (k.indexLabelTextBlock.x -= "right" === k.hemisphere ? 2 : -2)), Math.abs(k.indexLabelTextBlock.y -
                        k.indexLabelTextBlock.height / 2 - x.y) < z || Math.abs(k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 - x.y) < z) && (u /= Math.abs(Math.cos(k.indexLabelAngle)), 9 < u && (u *= 0.3), u > c && (c = u)), u = u = 0, 0 < k.indexLabelAngle && k.indexLabelAngle < Math.PI ? (u = n.y2 - (k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 + 5), u *= -1) : u = n.y1 - (k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 - 5), 0 < u && (!g && k.indexLabelText && (w = 0 < k.indexLabelAngle && k.indexLabelAngle < Math.PI ? -1 : 1, 0 === f(a, u * w) && f(a, 2 * w)), Math.abs(k.indexLabelTextBlock.x -
                        x.x) < z && (u /= Math.abs(Math.sin(k.indexLabelAngle)), 9 < u && (u *= 0.3), u > c && (c = u)));
                var F = function(a, b, c) {
                    for (var d = [], e = 0; d.push(q[b]), b !== c; b = (b + 1 + l.length) % l.length);
                    d.sort(function(a, b) {
                        return a.y - b.y
                    });
                    for (b = 0; b < d.length; b++)
                        if (c = d[b], e < 0.7 * a) e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                        else break
                };
                (function() {
                    for (var a = -1, b = -1, c = 0, f = !1, g = 0; g < l.length; g++)
                        if (f = !1, t = q[g], t.indexLabelText) {
                            var h = e(g);
                            if (null !== h) {
                                var k = q[h];
                                y = 0;
                                y = d(t, k);
                                var n;
                                if (n = 0 > y) {
                                    n = t.indexLabelTextBlock.x;
                                    var p = t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2,
                                        r = t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2,
                                        s = k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2,
                                        w = k.indexLabelTextBlock.x + k.indexLabelTextBlock.width,
                                        v = k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2;
                                    n = t.indexLabelTextBlock.x + t.indexLabelTextBlock.width < k.indexLabelTextBlock.x - m || n > w + m || p > v + m || r < s - m ? !1 : !0
                                }
                                n ? (0 > a && (a = g), h !== a && (b = h, c += -y), 0 === g % Math.max(l.length /
                                    10, 3) && (f = !0)) : f = !0;
                                f && (0 < c && 0 <= a && 0 <= b) && (F(c, a, b), b = a = -1, c = 0)
                            }
                        }
                    0 < c && F(c, a, b)
                })()
            }
        }
        function k() {
            p.plotArea.layoutManager.reset();
            p._title && (p._title.dockInsidePlotArea || "center" === p._title.horizontalAlign && "center" === p._title.verticalAlign) && p._title.render();
            if (p.subtitles)
                for (var a = 0; a < p.subtitles.length; a++) {
                    var b = p.subtitles[a];
                    (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                }
            p.legend && (p.legend.dockInsidePlotArea || "center" === p.legend.horizontalAlign &&
                "center" === p.legend.verticalAlign) && p.legend.render()
        }
        var p = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
            var h = this.data[a.dataSeriesIndexes[0]],
                l = h.dataPoints,
                m = 10,
                n = this.plotArea,
                q = [],
                r = 2,
                s = 1.3,
                t = 20 / 180 * Math.PI,
                v = 6,
                x = {
                    x: (n.x2 + n.x1) / 2,
                    y: (n.y2 + n.y1) / 2
                },
                u = 0;
            a = !1;
            for (var y = 0; y < l.length; y++) u += Math.abs(l[y].y), !a && ("undefined" !== typeof l[y].indexLabel && null !== l[y].indexLabel && 0 < l[y].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof l[y].label && null !== l[y].label && 0 < l[y].label.toString().length) &&
                (a = !0);
            if (0 !== u) {
                a = a || "undefined" !== typeof h.indexLabel && null !== h.indexLabel && 0 < h.indexLabel.toString().length;
                var z = "inside" !== h.indexLabelPlacement && a ? 0.75 * Math.min(n.width, n.height) / 2 : 0.92 * Math.min(n.width, n.height) / 2;
                h.radius && (z = Aa(h.radius, z));
                var A = "undefined" !== typeof h.innerRadius && null !== h.innerRadius ? Aa(h.innerRadius, z) : 0.7 * z,
                    D = Math.min(A / z, (z - 1) / z);
                this.pieDoughnutClickHandler = function(a) {
                    p.isAnimating || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && p._animator.animate(0,
                        500,
                        function(a) {
                            c(a);
                            k()
                        }))
                };
                b();
                g();
                g();
                g();
                g();
                this.disableToolTip = !0;
                this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                    var b = p.plotArea.ctx;
                    b.clearRect(n.x1, n.y1, n.width, n.height);
                    b.fillStyle = p.backgroundColor;
                    b.fillRect(n.x1, n.y1, n.width, n.height);
                    a = q[0].startAngle + 2 * Math.PI * a;
                    for (b = 0; b < l.length; b++) {
                        var c = 0 === b ? q[b].startAngle : d,
                            d = c + (q[b].endAngle - q[b].startAngle),
                            e = !1;
                        d > a && (d = a, e = !0);
                        var f = l[b].color ? l[b].color : h._colorSet[b % h._colorSet.length];
                        d > c && sa(p.plotArea.ctx,
                            q[b].center, q[b].radius, f, h.type, c, d, h.fillOpacity, q[b].percentInnerRadius);
                        if (e) break
                    }
                    k()
                }, function() {
                    p.disableToolTip = !1;
                    p._animator.animate(0, p.animatedRender ? 500 : 0, function(a) {
                        c(a);
                        k()
                    })
                })
            }
        }
    };
    u.prototype.animationRequestId = null;
    u.prototype.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }();
    u.prototype.cancelRequestAnimFrame =
        window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    Z.prototype.registerSpace = function(a, b) {
        "top" === a ? this._topOccupied += b.height : "bottom" === a ? this._bottomOccupied += b.height : "left" === a ? this._leftOccupied += b.width : "right" === a && (this._rightOccupied += b.width)
    };
    Z.prototype.unRegisterSpace = function(a, b) {
        "top" === a ? this._topOccupied -= b.height : "bottom" === a ? this._bottomOccupied -=
            b.height : "left" === a ? this._leftOccupied -= b.width : "right" === a && (this._rightOccupied -= b.width)
    };
    Z.prototype.getFreeSpace = function() {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        }
    };
    Z.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    O(H, G);
    H.prototype.render = function(a) {
        a && this.ctx.save();
        var b = this.ctx.font;
        this.ctx.textBaseline = this.textBaseline;
        var c = 0;
        this._isDirty && this.measureText(this.ctx);
        this.ctx.translate(this.x, this.y + c);
        "middle" === this.textBaseline && (c = -this._lineHeight / 2);
        this.ctx.font = this._getFontString();
        this.ctx.rotate(Math.PI / 180 * this.angle);
        var d = 0,
            e = this.padding,
            f = null;
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, c, this.width, this.height, this.cornerRadius, this.borderThickness,
            this.backgroundColor, this.borderColor);
        this.ctx.fillStyle = this.fontColor;
        for (c = 0; c < this._wrappedText.lines.length; c++) f = this._wrappedText.lines[c], "right" === this.horizontalAlign ? d = this.width - f.width - this.padding : "left" === this.horizontalAlign ? d = this.padding : "center" === this.horizontalAlign && (d = (this.width - 2 * this.padding) / 2 - f.width / 2 + this.padding), this.ctx.fillText(f.text, d, e), e += f.height;
        this.ctx.font = b;
        a && this.ctx.restore()
    };
    H.prototype.setText = function(a) {
        this.text = a;
        this._isDirty = !0;
        this._wrappedText =
            null
    };
    H.prototype.measureText = function() {
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    };
    H.prototype._getLineWithWidth = function(a, b, c) {
        a = String(a);
        if (!a) return {
            text: "",
            width: 0
        };
        var d = c = 0,
            e = a.length - 1,
            f = Infinity;
        for (this.ctx.font = this._getFontString(); d <= e;) {
            var f = Math.floor((d + e) / 2),
                g = a.substr(0, f + 1);
            c = this.ctx.measureText(g).width;
            if (c < b) d = f + 1;
            else if (c > b) e = f - 1;
            else break
        }
        c > b && 1 < g.length &&
            (g = g.substr(0, g.length - 1), c = this.ctx.measureText(g).width);
        b = !0;
        if (g.length === a.length || " " === a[g.length]) b = !1;
        b && (a = g.split(" "), 1 < a.length && a.pop(), g = a.join(" "), c = this.ctx.measureText(g).width);
        return {
            text: g,
            width: c
        }
    };
    H.prototype._wrapText = function() {
        var a = new String($(String(this.text))),
            b = [],
            c = this.ctx.font,
            d = 0,
            e = 0;
        for (this.ctx.font = this._getFontString(); 0 < a.length;) {
            var f = this.maxHeight - 2 * this.padding,
                g = this._getLineWithWidth(a, this.maxWidth - 2 * this.padding, !1);
            g.height = this._lineHeight;
            b.push(g);
            e = Math.max(e, g.width);
            d += g.height;
            a = $(a.slice(g.text.length, a.length));
            f && d > f && (g = b.pop(), d -= g.height)
        }
        this._wrappedText = {
            lines: b,
            width: e,
            height: d
        };
        this.width = e + 2 * this.padding;
        this.height = d + 2 * this.padding;
        this.ctx.font = c
    };
    H.prototype._getFontString = function() {
        var a;
        a = "" + (this.fontStyle ? this.fontStyle + " " : "");
        a += this.fontWeight ? this.fontWeight + " " : "";
        a += this.fontSize ? this.fontSize + "px " : "";
        var b = this.fontFamily ? this.fontFamily + "" : "";
        !t && b && (b = b.split(",")[0], "'" !== b[0] && '"' !== b[0] && (b = "'" + b + "'"));
        return a += b
    };
    O(ba, G);
    ba.prototype.render = function() {
        if (this.text) {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                b = a.layoutManager.getFreeSpace(),
                c = b.x1,
                d = b.y1,
                e = 0,
                f = 0,
                g = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                k, p;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = b.width - 4 - g * ("center" === this.horizontalAlign ? 2 : 1)), f = 0.5 * b.height - this.margin - 2, e = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ||
                "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = b.height - 4), f = 0.5 * b.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = b.width - 4), f = 0.5 * b.height - 4));
            this.wrap || (f = Math.min(f, Math.max(1.5 * this.fontSize, this.fontSize + 2.5 * this.padding)));
            var f = new H(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: this.maxWidth,
                    maxHeight: f,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: "top"
                }),
                h = f.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (d = b.y1 + 2, p = "top") : "bottom" === this.verticalAlign && (d = b.y2 - 2 - h.height, p = "bottom"), "left" === this.horizontalAlign ? c = b.x1 + 2 : "center" === this.horizontalAlign ? c = b.x1 + b.width / 2 - h.width /
                2 : "right" === this.horizontalAlign && (c = b.x2 - 2 - h.width - g), k = this.horizontalAlign, this.width = h.width, this.height = h.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (c = b.x1 + 2, d = b.y2 - 2 - (this.maxWidth / 2 - h.width / 2), e = -90, p = "left", this.width = h.height, this.height = h.width) : "right" === this.horizontalAlign ? (c = b.x2 - 2, d = b.y1 + 2 + (this.maxWidth / 2 - h.width / 2), e = 90, p = "right", this.width = h.height, this.height = h.width) : "center" === this.horizontalAlign && (d = a.y1 + (a.height / 2 - h.height / 2), c = a.x1 + (a.width / 2 -
                h.width / 2), p = "center", this.width = h.width, this.height = h.height), k = "center");
            f.x = c;
            f.y = d;
            f.angle = e;
            f.horizontalAlign = k;
            f.render(!0);
            a.layoutManager.registerSpace(p, {
                width: this.width + ("left" === p || "right" === p ? this.margin + 2 : 0),
                height: this.height + ("top" === p || "bottom" === p ? this.margin + 2 : 0)
            });
            this.bounds = {
                x1: c,
                y1: d,
                x2: c + this.width,
                y2: d + this.height
            };
            this.ctx.textBaseline = "top"
        }
    };
    O(ja, G);
    ja.prototype.render = ba.prototype.render;
    O(ka, G);
    ka.prototype.render = function() {
        var a = this.dockInsidePlotArea ? this.chart.plotArea :
            this.chart,
            b = a.layoutManager.getFreeSpace(),
            c = null,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            k = [],
            p = [];
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", c = this.verticalAlign, f = null !== this.maxWidth ? this.maxWidth : 0.7 * b.width, g = null !== this.maxHeight ? this.maxHeight : 0.5 * b.height) : "center" === this.verticalAlign && (this.orientation = "vertical", c = this.horizontalAlign, f = null !== this.maxWidth ? this.maxWidth : 0.5 * b.width, g = null !== this.maxHeight ? this.maxHeight : 0.7 * b.height);
        for (var h = 0; h < this.dataSeries.length; h++) {
            var l =
                this.dataSeries[h];
            if ("pie" !== l.type && "doughnut" !== l.type && "funnel" !== l.type) {
                var m = l.legendMarkerType ? l.legendMarkerType : "line" !== l.type && "stepLine" !== l.type && "spline" !== l.type && "scatter" !== l.type && "bubble" !== l.type || !l.markerType ? T.getDefaultLegendMarker(l.type) : l.markerType,
                    n = l.legendText ? l.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                        chart: this.chart._publicChartReference,
                        legend: this._options,
                        dataSeries: l,
                        dataPoint: null
                    }) : l.name,
                    q = l.legendMarkerColor ? l.legendMarkerColor : l.markerColor ?
                    l.markerColor : l._colorSet[0],
                    r = l.markerSize || "line" !== l.type && "stepLine" !== l.type && "spline" !== l.type ? 0.6 * this.lineHeight : 0,
                    s = l.legendMarkerBorderColor ? l.legendMarkerBorderColor : l.markerBorderColor,
                    t = l.legendMarkerBorderThickness ? l.legendMarkerBorderThickness : l.markerBorderThickness ? Math.max(1, Math.round(0.2 * r)) : 0,
                    n = this.chart.replaceKeywordsWithValue(n, l.dataPoints[0], l, h),
                    m = {
                        markerType: m,
                        markerColor: q,
                        text: n,
                        textBlock: null,
                        chartType: l.type,
                        markerSize: r,
                        lineColor: l._colorSet[0],
                        dataSeriesIndex: l.index,
                        dataPointIndex: null,
                        markerBorderColor: s,
                        markerBorderThickness: t
                    };
                k.push(m)
            } else
                for (var v = 0; v < l.dataPoints.length; v++) {
                    var u = l.dataPoints[v],
                        m = u.legendMarkerType ? u.legendMarkerType : l.legendMarkerType ? l.legendMarkerType : T.getDefaultLegendMarker(l.type),
                        n = u.legendText ? u.legendText : l.legendText ? l.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                            chart: this.chart._publicChartReference,
                            legend: this._options,
                            dataSeries: l,
                            dataPoint: u
                        }) : u.name ? u.name : "DataPoint: " + (v + 1),
                        q = u.legendMarkerColor ? u.legendMarkerColor :
                        l.legendMarkerColor ? l.legendMarkerColor : u.color ? u.color : l.color ? l.color : l._colorSet[v % l._colorSet.length],
                        r = 0.6 * this.lineHeight,
                        s = u.legendMarkerBorderColor ? u.legendMarkerBorderColor : l.legendMarkerBorderColor ? l.legendMarkerBorderColor : u.markerBorderColor ? u.markerBorderColor : l.markerBorderColor,
                        t = u.legendMarkerBorderThickness ? u.legendMarkerBorderThickness : l.legendMarkerBorderThickness ? l.legendMarkerBorderThickness : u.markerBorderThickness || l.markerBorderThickness ? Math.max(1, Math.round(0.2 * r)) : 0,
                        n = this.chart.replaceKeywordsWithValue(n,
                            u, l, v),
                        m = {
                            markerType: m,
                            markerColor: q,
                            text: n,
                            textBlock: null,
                            chartType: l.type,
                            markerSize: r,
                            dataSeriesIndex: h,
                            dataPointIndex: v,
                            markerBorderColor: s,
                            markerBorderThickness: t
                        };
                    (u.showInLegend || l.showInLegend && !1 !== u.showInLegend) && k.push(m)
                }
        }!0 === this.reversed && k.reverse();
        if (0 < k.length) {
            l = null;
            v = n = u = 0;
            n = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, f) : Math.min(this.itemWidth, f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : f;
            r = 0 === r ? 0.6 * this.lineHeight :
                r;
            n -= r + 0.1 * this.horizontalSpacing;
            for (h = 0; h < k.length; h++) {
                m = k[h];
                if ("line" === m.chartType || "spline" === m.chartType || "stepLine" === m.chartType) n -= 2 * 0.1 * this.lineHeight;
                if (!(0 >= g || "undefined" === typeof g || 0 >= n || "undefined" === typeof n)) {
                    if ("horizontal" === this.orientation) {
                        m.textBlock = new H(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: n,
                            maxHeight: this.itemWrap ? g : this.lineHeight,
                            angle: 0,
                            text: m.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "top"
                        });
                        m.textBlock.measureText();
                        null !== this.itemWidth && (m.textBlock.width = this.itemWidth - (r + 0.1 * this.horizontalSpacing + ("line" === m.chartType || "spline" === m.chartType || "stepLine" === m.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                        if (!l || l.width + Math.round(m.textBlock.width + 0.1 * this.horizontalSpacing + r + (0 === l.width ? 0 : this.horizontalSpacing) + ("line" === m.chartType || "spline" === m.chartType || "stepLine" === m.chartType ? 2 * 0.1 * this.lineHeight : 0)) > f) l = {
                            items: [],
                            width: 0
                        }, p.push(l), this.height += v, v = 0;
                        v = Math.max(v,
                            m.textBlock.height)
                    } else m.textBlock = new H(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: n,
                        maxHeight: !0 === this.itemWrap ? g : 1.5 * this.fontSize,
                        angle: 0,
                        text: m.text,
                        horizontalAlign: "left",
                        fontSize: this.fontSize,
                        fontFamily: this.fontFamily,
                        fontWeight: this.fontWeight,
                        fontColor: this.fontColor,
                        fontStyle: this.fontStyle,
                        textBaseline: "top"
                    }), m.textBlock.measureText(), null !== this.itemWidth && (m.textBlock.width = this.itemWidth - (r + 0.1 * this.horizontalSpacing + ("line" === m.chartType || "spline" === m.chartType || "stepLine" === m.chartType ? 2 * 0.1 *
                        this.lineHeight : 0))), this.height <= g ? (l = {
                        items: [],
                        width: 0
                    }, p.push(l)) : (l = p[u], u = (u + 1) % p.length), this.height += m.textBlock.height;
                    m.textBlock.x = l.width;
                    m.textBlock.y = 0;
                    l.width += Math.round(m.textBlock.width + 0.1 * this.horizontalSpacing + r + (0 === l.width ? 0 : this.horizontalSpacing) + ("line" === m.chartType || "spline" === m.chartType || "stepLine" === m.chartType ? 2 * 0.1 * this.lineHeight : 0));
                    l.items.push(m);
                    this.width = Math.max(l.width, this.width)
                }
            }
            this.height = !1 === this.itemWrap ? p.length * this.lineHeight : this.height + v;
            this.height =
                Math.min(g, this.height);
            this.width = Math.min(f, this.width)
        }
        "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? b.x1 : "right" === this.horizontalAlign ? b.x2 - this.width : b.x1 + b.width / 2 - this.width / 2, d = b.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? b.x1 : "right" === this.horizontalAlign ? b.x2 - this.width : b.x1 + b.width / 2 - this.width / 2, d = b.y1 + b.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? b.x1 : "right" === this.horizontalAlign ? b.x2 - this.width : b.x1 +
            b.width / 2 - this.width / 2, d = b.y2 - this.height);
        this.items = k;
        for (h = 0; h < this.items.length; h++) m = k[h], m.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[m.id] = {
            id: m.id,
            objectType: "legendItem",
            legendItemIndex: h,
            dataSeriesIndex: m.dataSeriesIndex,
            dataPointIndex: m.dataPointIndex
        };
        for (h = b = 0; h < p.length; h++) {
            l = p[h];
            for (k = v = 0; k < l.items.length; k++) {
                m = l.items[k];
                n = m.textBlock.x + e + (0 === k ? 0.2 * r : this.horizontalSpacing);
                q = d + b;
                u = n;
                this.chart.data[m.dataSeriesIndex].visible || (this.ctx.globalAlpha =
                    0.5);
                this.ctx.save();
                this.ctx.rect(e, d, f, g);
                this.ctx.clip();
                if ("line" === m.chartType || "stepLine" === m.chartType || "spline" === m.chartType) this.ctx.strokeStyle = m.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(n - 0.1 * this.lineHeight, q + this.lineHeight / 2), this.ctx.lineTo(n + 0.7 * this.lineHeight, q + this.lineHeight / 2), this.ctx.stroke(), u -= 0.1 * this.lineHeight;
                K.drawMarker(n + r / 2, q + this.lineHeight / 2, this.ctx, m.markerType, m.markerSize, m.markerColor, m.markerBorderColor,
                    m.markerBorderThickness);
                m.textBlock.x = n + 0.1 * this.horizontalSpacing + r;
                if ("line" === m.chartType || "stepLine" === m.chartType || "spline" === m.chartType) m.textBlock.x += 0.1 * this.lineHeight;
                m.textBlock.y = q;
                m.textBlock.render(!0);
                this.ctx.restore();
                v = 0 < k ? Math.max(v, m.textBlock.height) : m.textBlock.height;
                this.chart.data[m.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                n = B(m.id);
                this.ghostCtx.fillStyle = n;
                this.ghostCtx.beginPath();
                this.ghostCtx.fillRect(u, m.textBlock.y, m.textBlock.x + m.textBlock.width - u, m.textBlock.height);
                m.x1 = this.chart._eventManager.objectMap[m.id].x1 = u;
                m.y1 = this.chart._eventManager.objectMap[m.id].y1 = m.textBlock.y;
                m.x2 = this.chart._eventManager.objectMap[m.id].x2 = m.textBlock.x + m.textBlock.width;
                m.y2 = this.chart._eventManager.objectMap[m.id].y2 = m.textBlock.y + m.textBlock.height
            }
            b += v
        }
        a.layoutManager.registerSpace(c, {
            width: this.width + 2 + 2,
            height: this.height + 5 + 5
        });
        this.bounds = {
            x1: e,
            y1: d,
            x2: e + this.width,
            y2: d + this.height
        }
    };
    O(pa, G);
    pa.prototype.render = function() {
        var a = this.chart.layoutManager.getFreeSpace();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(a.x1, a.y1, a.x2, a.y2)
    };
    O(T, G);
    T.prototype.getDefaultAxisPlacement = function() {
        var a = this.type;
        if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a) return "normal";
        if ("bar" ===
            a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
        if ("pie" === a || "doughnut" === a || "funnel" === a) return "none";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    T.getDefaultLegendMarker = function(a) {
        if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" ===
            a || "rangeSplineArea" === a) return "square";
        if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a || "funnel" === a) return "circle";
        if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a) return "triangle";
        window.console.log("Unknown Chart Type: " + a);
        return null
    };
    T.prototype.getDataPointAtX = function(a, b) {
        if (!this.dataPoints || 0 === this.dataPoints.length) return null;
        var c = {
                dataPoint: null,
                distance: Infinity,
                index: NaN
            },
            d = null,
            e = 0,
            f = 0,
            g = 1,
            k = Infinity,
            p = 0,
            h = 0,
            l = 0;
        "none" !== this.chart.plotInfo.axisPlacement &&
            (l = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, l = 0 < l ? Math.min(Math.max((this.dataPoints.length - 1) / l * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0);
        for (;;) {
            f = 0 < g ? l + e : l - e;
            if (0 <= f && f < this.dataPoints.length) {
                var d = this.dataPoints[f],
                    m = Math.abs(d.x - a);
                m < c.distance && (c.dataPoint = d, c.distance = m, c.index = f);
                d = Math.abs(d.x - a);
                d <= k ? k = d : 0 < g ? p++ : h++;
                if (1E3 < p && 1E3 < h) break
            } else if (0 > l - e && l + e >= this.dataPoints.length) break; - 1 === g ? (e++, g = 1) : g = -1
        }
        return b || c.dataPoint.x !== a ? b && null !==
            c.dataPoint ? c : null : c
    };
    T.prototype.getDataPointAtXY = function(a, b, c) {
        if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || b < this.chart.plotArea.y1 || b > this.chart.plotArea.y2) return null;
        c = c || !1;
        var d = [],
            e = 0,
            f = 0,
            g = 1,
            k = !1,
            p = Infinity,
            h = 0,
            l = 0,
            m = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (m = this.chart.axisX.getXValueAt({
            x: a,
            y: b
        }), f = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, m = 0 < f ? Math.min(Math.max((this.dataPoints.length - 1) / f * (m - this.dataPoints[0].x) >>
            0, 0), this.dataPoints.length) : 0);
        for (;;) {
            f = 0 < g ? m + e : m - e;
            if (0 <= f && f < this.dataPoints.length) {
                var n = this.chart._eventManager.objectMap[this.dataPointIds[f]],
                    q = this.dataPoints[f],
                    r = null;
                if (n) {
                    switch (this.type) {
                        case "column":
                        case "stackedColumn":
                        case "stackedColumn100":
                        case "bar":
                        case "stackedBar":
                        case "stackedBar100":
                        case "rangeColumn":
                        case "rangeBar":
                            a >= n.x1 && (a <= n.x2 && b >= n.y1 && b <= n.y2) && (d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(n.x1 - a), Math.abs(n.x2 - a), Math.abs(n.y1 -
                                    b), Math.abs(n.y2 - b))
                            }), k = !0);
                            break;
                        case "line":
                        case "stepLine":
                        case "spline":
                        case "area":
                        case "stepArea":
                        case "stackedArea":
                        case "stackedArea100":
                        case "splineArea":
                        case "scatter":
                            var s = N("markerSize", q, this) || 4,
                                t = c ? 20 : s,
                                r = Math.sqrt(Math.pow(n.x1 - a, 2) + Math.pow(n.y1 - b, 2));
                            r <= t && d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            });
                            f = Math.abs(n.x1 - a);
                            f <= p ? p = f : 0 < g ? h++ : l++;
                            r <= s / 2 && (k = !0);
                            break;
                        case "rangeArea":
                        case "rangeSplineArea":
                            s = N("markerSize", q, this) || 4;
                            t = c ? 20 : s;
                            r = Math.min(Math.sqrt(Math.pow(n.x1 -
                                a, 2) + Math.pow(n.y1 - b, 2)), Math.sqrt(Math.pow(n.x1 - a, 2) + Math.pow(n.y2 - b, 2)));
                            r <= t && d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            });
                            f = Math.abs(n.x1 - a);
                            f <= p ? p = f : 0 < g ? h++ : l++;
                            r <= s / 2 && (k = !0);
                            break;
                        case "bubble":
                            s = n.size;
                            r = Math.sqrt(Math.pow(n.x1 - a, 2) + Math.pow(n.y1 - b, 2));
                            r <= s / 2 && (d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: r
                            }), k = !0);
                            break;
                        case "pie":
                        case "doughnut":
                            s = n.center;
                            t = "doughnut" === this.type ? n.percentInnerRadius * n.radius : 0;
                            r = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y -
                                b, 2));
                            r < n.radius && r > t && (r = Math.atan2(b - s.y, a - s.x), 0 > r && (r += 2 * Math.PI), r = Number(((180 * (r / Math.PI) % 360 + 360) % 360).toFixed(12)), s = Number(((180 * (n.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), t = Number(((180 * (n.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === t && 1 < n.endAngle && (t = 360), s >= t && 0 !== q.y && (t += 360, r < s && (r += 360)), r > s && r < t && (d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: 0
                            }), k = !0));
                            break;
                        case "candlestick":
                            if (a >= n.x1 - n.borderThickness / 2 && a <= n.x2 + n.borderThickness / 2 && b >= n.y2 - n.borderThickness /
                                2 && b <= n.y3 + n.borderThickness / 2 || Math.abs(n.x2 - a + n.x1 - a) < n.borderThickness && b >= n.y1 && b <= n.y4) d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(n.x1 - a), Math.abs(n.x2 - a), Math.abs(n.y2 - b), Math.abs(n.y3 - b))
                            }), k = !0;
                            break;
                        case "ohlc":
                            if (Math.abs(n.x2 - a + n.x1 - a) < n.borderThickness && b >= n.y2 && b <= n.y3 || a >= n.x1 && a <= (n.x2 + n.x1) / 2 && b >= n.y1 - n.borderThickness / 2 && b <= n.y1 + n.borderThickness / 2 || a >= (n.x1 + n.x2) / 2 && a <= n.x2 && b >= n.y4 - n.borderThickness / 2 && b <= n.y4 + n.borderThickness / 2) d.push({
                                dataPoint: q,
                                dataPointIndex: f,
                                dataSeries: this,
                                distance: Math.min(Math.abs(n.x1 - a), Math.abs(n.x2 - a), Math.abs(n.y2 - b), Math.abs(n.y3 - b))
                            }), k = !0
                    }
                    if (k || 1E3 < h && 1E3 < l) break
                }
            } else if (0 > m - e && m + e >= this.dataPoints.length) break; - 1 === g ? (e++, g = 1) : g = -1
        }
        a = null;
        for (b = 0; b < d.length; b++) a ? d[b].distance <= a.distance && (a = d[b]) : a = d[b];
        return a
    };
    T.prototype.getMarkerProperties = function(a, b, c, d) {
        var e = this.dataPoints;
        return {
            x: b,
            y: c,
            ctx: d,
            type: e[a].markerType ? e[a].markerType : this.markerType,
            size: e[a].markerSize ? e[a].markerSize : this.markerSize,
            color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
            borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
            borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
        }
    };
    O(C, G);
    C.prototype.createLabels = function() {
        var a, b = 0,
            c, d = 0,
            e = 0,
            b = 0;
        if ("bottom" === this._position || "top" ===
            this._position) b = this.lineCoordinates.width / Math.abs(this.viewportMaximum - this.viewportMinimum) * this.interval, d = this.labelAutoFit ? "undefined" === typeof this._options.labelMaxWidth ? 0.9 * b >> 0 : this.labelMaxWidth : "undefined" === typeof this._options.labelMaxWidth ? 0.7 * this.chart.width >> 0 : this.labelMaxWidth, e = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 0.5 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
        else if ("left" === this._position || "right" === this._position) b = this.lineCoordinates.height / Math.abs(this.viewportMaximum -
            this.viewportMinimum) * this.interval, d = this.labelAutoFit ? "undefined" === typeof this._options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.labelMaxWidth : "undefined" === typeof this._options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.labelMaxWidth, e = "undefined" === typeof this._options.labelWrap || this.labelWrap ? 2 * b >> 0 : 1.5 * this.labelFontSize;
        if ("axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType)
            for (c = ta(new Date(this.viewportMaximum), this.interval, this.intervalType), b = this.intervalStartPosition; b <
                c; ta(b, this.interval, this.intervalType)) a = b.getTime(), a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart._publicChartReference,
                axis: this._options,
                value: b,
                label: this.labels[b] ? this.labels[b] : null
            }) : "axisX" === this.type && this.labels[a] ? this.labels[a] : ra(b, this.valueFormatString, this.chart._cultureInfo), a = new H(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: d,
                maxHeight: e,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            }), this._labels.push({
                position: b.getTime(),
                textBlock: a,
                effectiveHeight: null
            });
        else {
            c = this.viewportMaximum;
            if (this.labels && this.labels.length) {
                a = Math.ceil(this.interval);
                for (var f = Math.ceil(this.intervalStartPosition), g = !1, b = f; b < this.viewportMaximum; b += a)
                    if (this.labels[b]) g = !0;
                    else {
                        g = !1;
                        break
                    }
                g && (this.interval = a, this.intervalStartPosition = f)
            }
            for (b = this.intervalStartPosition; b <= c; b = parseFloat((b + this.interval).toFixed(14))) a =
                this.labelFormatter ? this.labelFormatter({
                    chart: this.chart._publicChartReference,
                    axis: this._options,
                    value: b,
                    label: this.labels[b] ? this.labels[b] : null
                }) : "axisX" === this.type && this.labels[b] ? this.labels[b] : X(b, this.valueFormatString, this.chart._cultureInfo), a = new H(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: d,
                    maxHeight: e,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: 0
                }), this._labels.push({
                    position: b,
                    textBlock: a,
                    effectiveHeight: null
                })
        }
        for (b = 0; b < this.stripLines.length; b++) c = this.stripLines[b], a = new H(this.ctx, {
            x: 0,
            y: 0,
            backgroundColor: c.labelBackgroundColor,
            maxWidth: d,
            maxHeight: e,
            angle: this.labelAngle,
            text: c.labelFormatter ? c.labelFormatter({
                chart: this.chart._publicChartReference,
                axis: this,
                stripLine: c
            }) : c.label,
            horizontalAlign: "left",
            fontSize: c.labelFontSize,
            fontFamily: c.labelFontFamily,
            fontWeight: c.labelFontWeight,
            fontColor: c._options.labelFontColor ||
                c.color,
            fontStyle: c.labelFontStyle,
            textBaseline: "middle",
            borderThickness: 0
        }), this._labels.push({
            position: c.value,
            textBlock: a,
            effectiveHeight: null,
            stripLine: c
        })
    };
    C.prototype.createLabelsAndCalculateWidth = function() {
        var a = 0;
        this._labels = [];
        if ("left" === this._position || "right" === this._position)
            for (this.createLabels(), i = 0; i < this._labels.length; i++) {
                var b = this._labels[i].textBlock.measureText(),
                    c = 0,
                    c = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height / 2 * Math.sin(Math.PI /
                        180 * Math.abs(this.labelAngle));
                a < c && (a = c);
                this._labels[i].effectiveWidth = c
            }
        return (this.title ? ea(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0) + a + this.tickLength + 5
    };
    C.prototype.createLabelsAndCalculateHeight = function() {
        var a = 0;
        this._labels = [];
        var b, c = 0;
        this.createLabels();
        if ("bottom" === this._position || "top" === this._position)
            for (c = 0; c < this._labels.length; c++) {
                b = this._labels[c].textBlock;
                b = b.measureText();
                var d = 0,
                    d = 0 === this.labelAngle ? b.height : b.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) +
                    b.height / 2 * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < d && (a = d);
                this._labels[c].effectiveHeight = d
            }
        return (this.title ? ea(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0) + a + this.tickLength + 5
    };
    C.setLayoutAndRender = function(a, b, c, d, e) {
        var f, g, k, p = a.chart,
            h = p.ctx;
        a.calculateAxisParameters();
        b && b.calculateAxisParameters();
        c && c.calculateAxisParameters();
        var l = b ? b.margin : 0;
        g = c ? c.margin : 0;
        if ("normal" === d) {
            a.lineCoordinates = {};
            var m = Math.ceil(b ? b.createLabelsAndCalculateWidth() : 0);
            f =
                Math.round(e.x1 + m + l);
            a.lineCoordinates.x1 = f;
            l = Math.ceil(c ? c.createLabelsAndCalculateWidth() : 0);
            k = Math.round(e.x2 - l - g > a.chart.width - 10 ? a.chart.width - 10 : e.x2 - l - g);
            a.lineCoordinates.x2 = k;
            a.lineCoordinates.width = Math.abs(k - f);
            var n = Math.ceil(a.createLabelsAndCalculateHeight());
            g = Math.round(e.y2 - n - a.margin);
            d = Math.round(e.y2 - a.margin);
            a.lineCoordinates.y1 = g;
            a.lineCoordinates.y2 = g;
            a.boundingRect = {
                x1: f,
                y1: g,
                x2: k,
                y2: d,
                width: k - f,
                height: d - g
            };
            b && (f = Math.round(e.x1 + b.margin), g = Math.round(10 > e.y1 ? 10 : e.y1), k = Math.round(e.x1 +
                m + b.margin), d = Math.round(e.y2 - n - a.margin), b.lineCoordinates = {
                x1: k,
                y1: g,
                x2: k,
                y2: d,
                height: Math.abs(d - g)
            }, b.boundingRect = {
                x1: f,
                y1: g,
                x2: k,
                y2: d,
                width: k - f,
                height: d - g
            });
            c && (f = Math.round(a.lineCoordinates.x2), g = Math.round(10 > e.y1 ? 10 : e.y1), k = Math.round(f + l), d = Math.round(e.y2 - n - a.margin), c.lineCoordinates = {
                x1: f,
                y1: g,
                x2: f,
                y2: d,
                height: Math.abs(d - g)
            }, c.boundingRect = {
                x1: f,
                y1: g,
                x2: k,
                y2: d,
                width: k - f,
                height: d - g
            });
            a.calculateValueToPixelConversionParameters();
            b && b.calculateValueToPixelConversionParameters();
            c && c.calculateValueToPixelConversionParameters();
            h.save();
            h.rect(5, a.boundingRect.y1, a.chart.width - 10, a.boundingRect.height);
            h.clip();
            a.renderLabelsTicksAndTitle();
            h.restore();
            b && b.renderLabelsTicksAndTitle();
            c && c.renderLabelsTicksAndTitle()
        } else {
            m = Math.ceil(a.createLabelsAndCalculateWidth());
            b && (b.lineCoordinates = {}, f = Math.round(e.x1 + m + a.margin), k = Math.round(e.x2 > b.chart.width - 10 ? b.chart.width - 10 : e.x2), b.lineCoordinates.x1 = f, b.lineCoordinates.x2 = k, b.lineCoordinates.width = Math.abs(k - f));
            c && (c.lineCoordinates = {}, f = Math.round(e.x1 + m + a.margin), k = Math.round(e.x2 >
                c.chart.width - 10 ? c.chart.width - 10 : e.x2), c.lineCoordinates.x1 = f, c.lineCoordinates.x2 = k, c.lineCoordinates.width = Math.abs(k - f));
            var n = Math.ceil(b ? b.createLabelsAndCalculateHeight() : 0),
                q = Math.ceil(c ? c.createLabelsAndCalculateHeight() : 0);
            b && (g = Math.round(e.y2 - n - b.margin), d = Math.round(e.y2 - l > b.chart.height - 10 ? b.chart.height - 10 : e.y2 - l), b.lineCoordinates.y1 = g, b.lineCoordinates.y2 = g, b.boundingRect = {
                x1: f,
                y1: g,
                x2: k,
                y2: d,
                width: k - f,
                height: n
            });
            c && (g = Math.round(e.y1 + c.margin), d = e.y1 + c.margin + q, c.lineCoordinates.y1 =
                d, c.lineCoordinates.y2 = d, c.boundingRect = {
                    x1: f,
                    y1: g,
                    x2: k,
                    y2: d,
                    width: k - f,
                    height: q
                });
            f = Math.round(e.x1 + a.margin);
            g = Math.round(c ? c.lineCoordinates.y2 : 10 > e.y1 ? 10 : e.y1);
            k = Math.round(e.x1 + m + a.margin);
            d = Math.round(b ? b.lineCoordinates.y1 : e.y2 - l > a.chart.height - 10 ? a.chart.height - 10 : e.y2 - l);
            a.lineCoordinates = {
                x1: k,
                y1: g,
                x2: k,
                y2: d,
                height: Math.abs(d - g)
            };
            a.boundingRect = {
                x1: f,
                y1: g,
                x2: k,
                y2: d,
                width: k - f,
                height: d - g
            };
            a.calculateValueToPixelConversionParameters();
            b && b.calculateValueToPixelConversionParameters();
            c && c.calculateValueToPixelConversionParameters();
            b && b.renderLabelsTicksAndTitle();
            c && c.renderLabelsTicksAndTitle();
            a.renderLabelsTicksAndTitle()
        }
        p.preparePlotArea();
        e = a.chart.plotArea;
        h.save();
        h.rect(e.x1, e.y1, Math.abs(e.x2 - e.x1), Math.abs(e.y2 - e.y1));
        h.clip();
        a.renderStripLinesOfThicknessType("value");
        b && b.renderStripLinesOfThicknessType("value");
        c && c.renderStripLinesOfThicknessType("value");
        a.renderInterlacedColors();
        b && b.renderInterlacedColors();
        c && c.renderInterlacedColors();
        h.restore();
        a.renderGrid();
        b && b.renderGrid();
        c && c.renderGrid();
        a.renderAxisLine();
        b && b.renderAxisLine();
        c && c.renderAxisLine();
        a.renderStripLinesOfThicknessType("pixel");
        b && b.renderStripLinesOfThicknessType("pixel");
        c && c.renderStripLinesOfThicknessType("pixel")
    };
    C.prototype.renderLabelsTicksAndTitle = function() {
        var a = !1,
            b = 0,
            c = 1,
            d = 0;
        0 !== this.labelAngle && 360 !== this.labelAngle && (c = 1.2);
        if ("undefined" === typeof this._options.interval) {
            if ("bottom" === this._position || "top" === this._position) {
                for (e = 0; e < this._labels.length; e++) f = this._labels[e], f.position < this.viewportMinimum || f.stripLine ||
                    (f = f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + f.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle), b += f);
                b > this.lineCoordinates.width * c && (a = !0)
            }
            if ("left" === this._position || "right" === this._position) {
                for (e = 0; e < this._labels.length; e++) f = this._labels[e], f.position < this.viewportMinimum || f.stripLine || (f = f.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), b += f);
                b > this.lineCoordinates.height * c && (a = !0)
            }
        }
        if ("bottom" === this._position) {
            for (var e =
                    0, f, e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.viewportMinimum || f.position > this.viewportMaximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth %
                        2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, b.y << 0), this.ctx.lineTo(c, b.y + this.tickLength << 0), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) 0 === f.textBlock.angle ? (b.x -= f.textBlock.width / 2, b.y += this.tickLength + f.textBlock.fontSize / 2) : (b.x -= 0 > this.labelAngle ? f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + Math.abs(0 > this.labelAngle ? f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), f.textBlock.x = b.x, f.textBlock.y = b.y, f.textBlock.render(!0)
                }
            this.title &&
                (this._titleTextBlock = new H(this.ctx, {
                        x: this.lineCoordinates.x1,
                        y: this.boundingRect.y2 - this.titleFontSize - 5,
                        maxWidth: this.lineCoordinates.width,
                        maxHeight: 1.5 * this.titleFontSize,
                        angle: 0,
                        text: this.title,
                        horizontalAlign: "center",
                        fontSize: this.titleFontSize,
                        fontFamily: this.titleFontFamily,
                        fontWeight: this.titleFontWeight,
                        fontColor: this.titleFontColor,
                        fontStyle: this.titleFontStyle,
                        textBaseline: "top"
                    }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width /
                    2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 3, this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.viewportMinimum || f.position > this.viewportMaximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine,
                        this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, b.y << 0), this.ctx.lineTo(c, b.y - this.tickLength << 0), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) 0 === f.textBlock.angle ? (b.x -= f.textBlock.width / 2, b.y -= this.tickLength + f.textBlock.height / 2) : (b.x -= 0 < this.labelAngle ? f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) :
                        0, b.y -= this.tickLength + Math.abs(0 < this.labelAngle ? f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5)), f.textBlock.x = b.x, f.textBlock.y = b.y, f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new H(this.ctx, {
                x: this.lineCoordinates.x1,
                y: this.boundingRect.y1 + 1,
                maxWidth: this.lineCoordinates.width,
                maxHeight: 1.5 * this.titleFontSize,
                angle: 0,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.render(!0))
        } else if ("left" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.viewportMinimum || f.position > this.viewportMaximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine &&
                        "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ? (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, c), this.ctx.lineTo(b.x - this.tickLength << 0, c), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) f.textBlock.x = b.x - f.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                        this.tickLength - 5, f.textBlock.y = 0 === this.labelAngle ? b.y : b.y - f.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new H(this.ctx, {
                x: this.boundingRect.x1 + 1,
                y: this.lineCoordinates.y2,
                maxWidth: this.lineCoordinates.height,
                maxHeight: 1.5 * this.titleFontSize,
                angle: -90,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        } else if ("right" === this._position) {
            for (e = 0; e < this._labels.length; e++)
                if (f = this._labels[e], !(f.position < this.viewportMinimum || f.position > this.viewportMaximum)) {
                    b = this.getPixelCoordinatesOnAxis(f.position);
                    if (this.tickThickness && !this._labels[e].stripLine || this._labels[e].stripLine && "pixel" === this._labels[e].stripLine._thicknessType) this._labels[e].stripLine ?
                        (c = this._labels[e].stripLine, this.ctx.lineWidth = c.thickness, this.ctx.strokeStyle = c.color) : (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor), c = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, c), this.ctx.lineTo(b.x + this.tickLength << 0, c), this.ctx.stroke();
                    if (!a || 0 === d++ % 2 || this._labels[e].stripLine) f.textBlock.x = b.x + this.tickLength + 5, f.textBlock.y = b.y, f.textBlock.render(!0)
                }
            this.title && (this._titleTextBlock = new H(this.ctx, {
                x: this.boundingRect.x2 -
                    1,
                y: this.lineCoordinates.y2,
                maxWidth: this.lineCoordinates.height,
                maxHeight: 1.5 * this.titleFontSize,
                angle: 90,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }), this._titleTextBlock.measureText(), this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this._titleTextBlock.render(!0))
        }
    };
    C.prototype.renderInterlacedColors =
        function() {
            var a = this.chart.plotArea.ctx,
                b, c, d = this.chart.plotArea,
                e = 0;
            b = !0;
            if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) this._labels[e].stripLine || (b ? (b = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 >= this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x, d.y1, Math.abs(c.x - b.x), Math.abs(d.y1 -
                    d.y2)), b = !1) : b = !0);
            else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) this._labels[e].stripLine || (b ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), b = e + 1 >= this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(d.x1, b.y, Math.abs(d.x1 - d.x2), Math.abs(b.y - c.y)), b = !1) : b = !0);
            a.beginPath()
        };
    C.prototype.renderStripLinesOfThicknessType =
        function(a) {
            if (this.stripLines && 0 < this.stripLines.length && a)
                for (var b = 0, b = 0; b < this.stripLines.length; b++) {
                    var c = this.stripLines[b];
                    c._thicknessType === a && ("pixel" === a && (c.value < this.viewportMinimum || c.value > this.viewportMaximum) || (c.showOnTop ? this.chart.addEventListener("dataAnimationIterationEnd", c.render, c) : c.render()))
                }
        };
    C.prototype.renderGrid = function() {
        if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var b, c = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle =
                this.gridColor;
            a.setLineDash && a.setLineDash(M(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
                for (d = 0; d < this._labels.length && !this._labels[d].stripLine; d++) this._labels[d].position < this.viewportMinimum || this._labels[d].position > this.viewportMaximum || (a.beginPath(), b = this.getPixelCoordinatesOnAxis(this._labels[d].position), b = 1 === a.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, a.moveTo(b, c.y1 << 0), a.lineTo(b, c.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" ===
                this._position)
                for (var d = 0; d < this._labels.length && !this._labels[d].stripLine; d++) 0 === d && "axisY" === this.type && this.chart.axisX && this.chart.axisX.lineThickness || (this._labels[d].position < this.viewportMinimum || this._labels[d].position > this.viewportMaximum) || (a.beginPath(), b = this.getPixelCoordinatesOnAxis(this._labels[d].position), b = 1 === a.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, a.moveTo(c.x1 << 0, b), a.lineTo(c.x2 << 0, b), a.stroke());
            a.restore()
        }
    };
    C.prototype.renderAxisLine = function() {
        var a = this.chart.ctx;
        a.save();
        if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
                a.lineWidth = this.lineThickness;
                a.strokeStyle = this.lineColor ? this.lineColor : "black";
                a.setLineDash && a.setLineDash(M(this.lineDashType, this.lineThickness));
                var b = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                a.beginPath();
                a.moveTo(this.lineCoordinates.x1, b);
                a.lineTo(this.lineCoordinates.x2, b);
                a.stroke()
            }
        } else "left" !== this._position && "right" !== this._position || !this.lineThickness || (a.lineWidth =
            this.lineThickness, a.strokeStyle = this.lineColor, a.setLineDash && a.setLineDash(M(this.lineDashType, this.lineThickness)), b = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0, a.beginPath(), a.moveTo(b, this.lineCoordinates.y1), a.lineTo(b, this.lineCoordinates.y2), a.stroke());
        a.restore()
    };
    C.prototype.getPixelCoordinatesOnAxis = function(a) {
        var b = {};
        if ("bottom" === this._position || "top" === this._position) {
            var c = this.conversionParameters.pixelPerUnit;
            b.x = this.conversionParameters.reference +
                c * (a - this.viewportMinimum);
            b.y = this.lineCoordinates.y1
        }
        if ("left" === this._position || "right" === this._position) c = -this.conversionParameters.pixelPerUnit, b.y = this.conversionParameters.reference - c * (a - this.viewportMinimum), b.x = this.lineCoordinates.x2;
        return b
    };
    C.prototype.convertPixelToValue = function(a) {
        if (!a) return null;
        var b = 0;
        return b = this.conversionParameters.minimum + (("left" === this._position || "right" === this._position ? a.y : a.x) - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit
    };
    C.prototype.setViewPortRange = function(a, b) {
        this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, b);
        this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, b)
    };
    C.prototype.getXValueAt = function(a) {
        if (!a) return null;
        var b = null;
        "left" === this._position ? b = (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - a.y) + this.chart.axisX.viewportMinimum : "bottom" === this._position && (b = (this.chart.axisX.viewportMaximum -
            this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.width * (a.x - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.viewportMinimum);
        return b
    };
    C.prototype.calculateValueToPixelConversionParameters = function(a) {
        this.reversed = !1;
        a = {
            pixelPerUnit: null,
            minimum: null,
            reference: null
        };
        var b = this.lineCoordinates.width,
            c = this.lineCoordinates.height;
        a.minimum = this.viewportMinimum;
        if ("bottom" === this._position || "top" === this._position) a.pixelPerUnit = (this.reversed ? -1 : 1) * b / Math.abs(this.viewportMaximum -
            this.viewportMinimum), a.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
        if ("left" === this._position || "right" === this._position) a.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(this.viewportMaximum - this.viewportMinimum), a.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
        this.conversionParameters = a
    };
    C.prototype.calculateAxisParameters = function() {
        var a = this.chart.layoutManager.getFreeSpace(),
            b = !1;
        "bottom" === this._position || "top" === this._position ? (this.maxWidth =
            a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
        var a = "axisX" === this.type ? 500 > this.maxWidth ? 8 : Math.max(6, Math.floor(this.maxWidth / 62)) : Math.max(Math.floor(this.maxWidth / 40), 2),
            c, d, e, f;
        f = 0;
        if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
        if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
        "axisX" === this.type ? (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin,
            d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 === d - c && (f = "undefined" === typeof this._options.interval ? 0.4 : this._options.interval, d += f, c -= f), Infinity !== this.dataInfo.minDiff ? e = this.dataInfo.minDiff : 1 < d - c ? e = 0.5 * Math.abs(d - c) : (e = 1, "dateTime" === this.chart.plotInfo.axisXValueType && (b = !0))) : "axisY" === this.type && (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(c) ||
            isFinite(d) ? isFinite(c) ? isFinite(d) || (d = c) : c = d : (d = "undefined" === typeof this._options.interval ? -Infinity : this._options.interval, c = 0), 0 === c && 0 === d ? (d += 9, c = 0) : 0 === d - c ? (f = Math.min(Math.abs(0.01 * Math.abs(d)), 5), d += f, c -= f) : c > d ? (f = Math.min(Math.abs(0.01 * Math.abs(d - c)), 5), 0 <= d ? c = d - f : d = c + f) : (f = Math.min(Math.abs(0.01 * Math.abs(d - c)), 0.05), 0 !== d && (d += f), 0 !== c && (c -= f)), e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < d - c ? 0.5 * Math.abs(d - c) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) &&
            0 < c && (c = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > d && (d = 0));
        f = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
        if ("axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType) {
            this.intervalType || (f / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : f / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : f / 5 <= a ? (this.interval = 5, this.intervalType =
                    "millisecond") : f / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : f / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : f / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : f / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : f / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : f / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : f / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : f / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : f / 500 <=
                a ? (this.interval = 500, this.intervalType = "millisecond") : f / (1 * D.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : f / (2 * D.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : f / (5 * D.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : f / (10 * D.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : f / (15 * D.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : f / (20 * D.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : f / (30 * D.secondDuration) <=
                a ? (this.interval = 30, this.intervalType = "second") : f / (1 * D.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : f / (2 * D.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : f / (5 * D.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : f / (10 * D.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : f / (15 * D.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : f / (20 * D.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : f / (30 * D.minuteDuration) <=
                a ? (this.interval = 30, this.intervalType = "minute") : f / (1 * D.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : f / (2 * D.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : f / (3 * D.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : f / (6 * D.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : f / (1 * D.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : f / (2 * D.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : f / (4 * D.dayDuration) <= a ? (this.interval = 4, this.intervalType =
                    "day") : f / (1 * D.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : f / (2 * D.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : f / (3 * D.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : f / (1 * D.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : f / (2 * D.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : f / (3 * D.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : f / (6 * D.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = f /
                    (1 * D.yearDuration) <= a ? 1 : f / (2 * D.yearDuration) <= a ? 2 : f / (4 * D.yearDuration) <= a ? 4 : Math.floor(C.getNiceNumber(f / (a - 1), !0) / D.yearDuration), this.intervalType = "year"));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = c - e / 2;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = d + e / 2;
            b ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" :
                "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
            this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
        } else {
            this.intervalType =
                "number";
            f = C.getNiceNumber(f, !1);
            this.interval = this._options && 0 < this._options.interval ? this._options.interval : C.getNiceNumber(f / (a - 1), !0);
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? c - e / 2 : Math.floor(c / this.interval) * this.interval;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? d + e / 2 : Math.ceil(d / this.interval) * this.interval;
            0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this._options.viewportMinimum ?
                this.viewportMaximum += 10 : 0 === this._options.viewportMaximum && (this.viewportMinimum -= 10), this._options && "undefined" === typeof this._options.interval && (this.interval = C.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
        }
        if (null === this.minimum || null === this.maximum)
            if ("axisX" === this.type ? (c = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === d - c && (f = "undefined" === typeof this._options.interval ? 0.4 : this._options.interval, d += f, c -= f),
                    e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < d - c ? 0.5 * Math.abs(d - c) : 1) : "axisY" === this.type && (c = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(c) || isFinite(d) ? 0 === c && 0 === d ? (d += 9, c = 0) : 0 === d - c ? (f = Math.min(Math.abs(0.01 * Math.abs(d)), 5), d += f, c -= f) : c > d ? (f = Math.min(Math.abs(0.01 * Math.abs(d - c)), 5), 0 <= d ? c = d - f : d = c + f) : (f = Math.min(Math.abs(0.01 * Math.abs(d - c)), 0.05), 0 !== d && (d += f), 0 !== c && (c -= f)) : (d = "undefined" === typeof this._options.interval ?
                    -Infinity : this._options.interval, c = 0), e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < d - c ? 0.5 * Math.abs(d - c) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < c && (c = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > d && (d = 0)), "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType) {
                if (null === this.minimum || isNaN(this.minimum)) this.minimum = c - e / 2;
                if (null === this.maximum || isNaN(this.maximum)) this.maximum = d + e / 2
            } else this.intervalType = "number", null ===
                this.minimum && (this.minimum = "axisX" === this.type ? c - e / 2 : Math.floor(c / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? d + e / 2 : Math.ceil(d / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity :
                    this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this._options.minimum ? this.maximum += 10 : 0 === this._options.maximum && (this.minimum -= 10));
        this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
        this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
        this.intervalStartPosition = "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum +
            0.2 * this.interval) / this.interval) * this.interval;
        if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", f = Math.abs(this.viewportMaximum - this.viewportMinimum), 1 > f)) {
            b = Math.floor(Math.abs(Math.log(f) / Math.LN10)) + 2;
            if (isNaN(b) || !isFinite(b)) b = 2;
            if (2 < b)
                for (c = 0; c < b - 2; c++) this.valueFormatString += "#"
        }
    };
    C.getNiceNumber = function(a, b) {
        var c = Math.floor(Math.log(a) / Math.LN10),
            d = a / Math.pow(10, c);
        return Number(((b ? 1.5 > d ? 1 : 3 > d ? 2 : 7 > d ? 5 : 10 : 1 >= d ? 1 : 2 >= d ? 2 : 5 >= d ? 5 : 10) * Math.pow(10, c)).toFixed(20))
    };
    C.prototype.getLabelStartPoint =
        function() {
            var a = D[this.intervalType + "Duration"] * this.interval,
                a = new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !== this.intervalType)
                if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
                else if ("minute" === this.intervalType) {
                if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("hour" === this.intervalType) {
                if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() +
                    1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("day" === this.intervalType) {
                if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("week" === this.intervalType) {
                if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("month" ===
                this.intervalType) {
                if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
            return a
        };
    O(la,
        G);
    la.prototype.render = function() {
        this.ctx.save();
        var a = this.parent.getPixelCoordinatesOnAxis(this.value),
            b = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness);
        if (0 < b) {
            var c = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var d = this.ctx.globalAlpha;
            this.ctx.globalAlpha = c;
            B(this.id);
            var e, f, g, k;
            this.ctx.lineWidth = b;
            this.ctx.setLineDash && this.ctx.setLineDash(M(this.lineDashType, b));
            if ("bottom" ===
                this.parent._position || "top" === this.parent._position) e = f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, g = this.chart.plotArea.y1, k = this.chart.plotArea.y2;
            else if ("left" === this.parent._position || "right" === this.parent._position) g = k = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, f = this.chart.plotArea.x2;
            this.ctx.moveTo(e, g);
            this.ctx.lineTo(f, k);
            this.ctx.stroke();
            this.ctx.globalAlpha = d
        }
        this.ctx.restore()
    };
    O(R, G);
    R.prototype._initialize = function() {
        if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.display = "none";
            var a;
            a = '<div style=" width: auto;height: auto;min-width: 50px;';
            a += "line-height: auto;";
            a += "margin: 0px 0px 0px 0px;";
            a += "padding: 5px;";
            a += "font-family: Calibri, Arial, Georgia, serif;";
            a += "font-weight: normal;";
            a += "font-style: " +
                (t ? "italic;" : "normal;");
            a += "font-size: 14px;";
            a += "color: #000000;";
            a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
            a += "text-align: left;";
            a += "border: 2px solid gray;";
            a += t ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
            a += "text-indent: 0px;";
            a += "white-space: nowrap;";
            a += "border-radius: 5px;";
            a += "-moz-user-select:none;";
            a += "-khtml-user-select: none;";
            a += "-webkit-user-select: none;";
            a += "-ms-user-select: none;";
            a += "user-select: none;";
            t || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
            a += '} "> Sample Tooltip</div>';
            this.container.innerHTML = a;
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container)
        }
    };
    R.prototype.mouseMoveHandler = function(a, b) {
        this._lastUpdated && 40 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this._updateToolTip(a, b))
    };
    R.prototype._updateToolTip = function(a, b) {
        if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" ===
                typeof b) {
                if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                a = this._prevX;
                b = this._prevY
            } else this._prevX = a, this._prevY = b;
            var c = null,
                d = null,
                e = [],
                f = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                f = "xySwapped" === this.chart.plotInfo.axisPlacement ? (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - b) + this.chart.axisX.viewportMinimum : (this.chart.axisX.viewportMaximum - this.chart.axisX.viewportMinimum) /
                    this.chart.axisX.lineCoordinates.width * (a - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.viewportMinimum;
                d = [];
                for (c = 0; c < this.chart.data.length; c++) {
                    var g = this.chart.data[c].getDataPointAtX(f, !0);
                    g && 0 <= g.index && (g.dataSeries = this.chart.data[c], null !== g.dataPoint.y && d.push(g))
                }
                if (0 === d.length) return;
                d.sort(function(a, b) {
                    return a.distance - b.distance
                });
                f = d[0];
                for (c = 0; c < d.length; c++) d[c].dataPoint.x.valueOf() === f.dataPoint.x.valueOf() && e.push(d[c]);
                d = null
            } else {
                if (g = this.chart.getDataPointAtXY(a,
                        b, !0)) this.currentDataPointIndex = g.dataPointIndex, this.currentSeriesIndex = g.dataSeries.index;
                else if (t)
                    if (g = xa(a, b, this.chart._eventManager.ghostCtx), 0 < g && "undefined" !== typeof this.chart._eventManager.objectMap[g]) {
                        eventObject = this.chart._eventManager.objectMap[g];
                        if ("legendItem" === eventObject.objectType) return;
                        this.currentSeriesIndex = eventObject.dataSeriesIndex;
                        this.currentDataPointIndex = 0 <= eventObject.dataPointIndex ? eventObject.dataPointIndex : -1
                    } else this.currentDataPointIndex = -1;
                else this.currentDataPointIndex = -1;
                if (0 <= this.currentSeriesIndex) {
                    d = this.chart.data[this.currentSeriesIndex];
                    g = {};
                    if (0 <= this.currentDataPointIndex) c = d.dataPoints[this.currentDataPointIndex], g.dataSeries = d, g.dataPoint = c, g.index = this.currentDataPointIndex, g.distance = Math.abs(c.x - f);
                    else {
                        if (!this.enabled || "line" !== d.type && "stepLine" !== d.type && "spline" !== d.type && "area" !== d.type && "stepArea" !== d.type && "splineArea" !== d.type && "stackedArea" !== d.type && "stackedArea100" !== d.type && "rangeArea" !== d.type && "rangeSplineArea" !== d.type && "candlestick" !==
                            d.type && "ohlc" !== d.type) return;
                        f = d.axisX.conversionParameters.minimum + (a - d.axisX.conversionParameters.reference) / d.axisX.conversionParameters.pixelPerUnit;
                        g = d.getDataPointAtX(f, !0);
                        g.dataSeries = d;
                        this.currentDataPointIndex = g.index;
                        c = g.dataPoint
                    }
                    if (!P(g.dataPoint.y))
                        if (g.dataSeries.axisY)
                            if (0 < g.dataPoint.y.length) {
                                for (c = f = 0; c < g.dataPoint.y.length; c++) g.dataPoint.y[c] < g.dataSeries.axisY.viewportMinimum ? f-- : g.dataPoint.y[c] > g.dataSeries.axisY.viewportMaximum && f++;
                                f < g.dataPoint.y.length && f > -g.dataPoint.y.length &&
                                    e.push(g)
                            } else "column" === d.type || "bar" === d.type ? 0 > g.dataPoint.y ? 0 > g.dataSeries.axisY.viewportMinimum && g.dataSeries.axisY.viewportMaximum >= g.dataPoint.y && e.push(g) : g.dataSeries.axisY.viewportMinimum <= g.dataPoint.y && 0 <= g.dataSeries.axisY.viewportMaximum && e.push(g) : "bubble" === d.type ? (f = this.chart._eventManager.objectMap[d.dataPointIds[g.index]].size / 2, g.dataPoint.y >= g.dataSeries.axisY.viewportMinimum - f && g.dataPoint.y <= g.dataSeries.axisY.viewportMaximum + f && e.push(g)) : (0 <= g.dataSeries.type.indexOf("100") ||
                                "stackedColumn" === d.type || "stackedBar" === d.type || g.dataPoint.y >= g.dataSeries.axisY.viewportMinimum && g.dataPoint.y <= g.dataSeries.axisY.viewportMaximum) && e.push(g);
                    else e.push(g)
                }
            }
            if (0 < e.length && (this.highlightObjects(e), this.enabled))
                if (f = "", f = this.getToolTipInnerHTML({
                        entries: e
                    }), null !== f) {
                    this.contentDiv.innerHTML = f;
                    this.contentDiv.innerHTML = f;
                    f = !1;
                    "none" === this.container.style.display && (f = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor :
                            t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : e[0].dataPoint.color ? e[0].dataPoint.color : e[0].dataSeries.color ? e[0].dataSeries.color : e[0].dataSeries._colorSet[e[0].index % e[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius ||
                            0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle :
                            t ? "italic" : "normal"
                    } catch (k) {}
                    "pie" === e[0].dataSeries.type || "doughnut" === e[0].dataSeries.type || "funnel" === e[0].dataSeries.type || "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? toolTipLeft = a - 10 - this.container.clientWidth : (toolTipLeft = e[0].dataSeries.axisX.conversionParameters.reference + e[0].dataSeries.axisX.conversionParameters.pixelPerUnit * (e[0].dataPoint.x - e[0].dataSeries.axisX.conversionParameters.minimum) -
                        this.container.clientWidth << 0, toolTipLeft -= 10);
                    0 > toolTipLeft && (toolTipLeft += this.container.clientWidth + 20);
                    toolTipLeft + this.container.clientWidth > Math.max(this.chart._container.clientWidth, this.chart.width) && (toolTipLeft = Math.max(0, Math.max(this.chart._container.clientWidth, this.chart.width) - this.container.clientWidth));
                    toolTipLeft += "px";
                    e = 1 !== e.length || this.shared || "line" !== e[0].dataSeries.type && "stepLine" !== e[0].dataSeries.type && "spline" !== e[0].dataSeries.type && "area" !== e[0].dataSeries.type && "stepArea" !==
                        e[0].dataSeries.type && "splineArea" !== e[0].dataSeries.type && "stackedArea" !== e[0].dataSeries.type && "stackedArea100" !== e[0].dataSeries.type ? "bar" === e[0].dataSeries.type || "rangeBar" === e[0].dataSeries.type || "stackedBar" === e[0].dataSeries.type || "stackedBar100" === e[0].dataSeries.type ? e[0].dataSeries.axisX.conversionParameters.reference + e[0].dataSeries.axisX.conversionParameters.pixelPerUnit * (e[0].dataPoint.x - e[0].dataSeries.axisX.viewportMinimum) + 0.5 << 0 : b : e[0].dataSeries.axisY.conversionParameters.reference +
                        e[0].dataSeries.axisY.conversionParameters.pixelPerUnit * (e[0].dataPoint.y - e[0].dataSeries.axisY.viewportMinimum) + 0.5 << 0;
                    e = -e + 10;
                    0 < e + this.container.clientHeight + 5 && (e -= e + this.container.clientHeight + 5 - 0);
                    this.container.style.left = toolTipLeft;
                    this.container.style.bottom = e + "px";
                    !this.animationEnabled || f ? this.disableAnimation() : this.enableAnimation()
                } else this.hide(!1)
        }
    };
    R.prototype.highlightObjects = function(a) {
        var b = this.chart.overlaidCanvasCtx;
        this.chart.resetOverlayedCanvas();
        b.clearRect(0, 0, this.chart.width,
            this.chart.height);
        b.save();
        var c = this.chart.plotArea,
            d = 0;
        b.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
        b.clip();
        for (c = 0; c < a.length; c++) {
            var e = a[c];
            if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                var d = this.chart.data[e.dataSeriesIndex],
                    f = d.dataPoints[e.dataPointIndex],
                    g = e.dataPointIndex;
                !1 === f.highlightEnabled || !0 !== d.highlightEnabled && !0 !== f.highlightEnabled || ("line" === d.type || "stepLine" === d.type || "spline" === d.type || "scatter" === d.type ||
                    "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "stackedArea" === d.type || "stackedArea100" === d.type || "rangeArea" === d.type || "rangeSplineArea" === d.type ? (f = d.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), K.drawMarkers([f]), "undefined" !== typeof e.y2 && (f = d.getMarkerProperties(g, e.x1, e.y2, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size <<
                        0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), K.drawMarkers([f]))) : "bubble" === d.type ? (f = d.getMarkerProperties(g, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = e.size, f.color = "white", f.borderColor = "white", b.globalAlpha = 0.3, K.drawMarkers([f]), b.globalAlpha = 1) : "column" === d.type || "stackedColumn" === d.type || "stackedColumn100" === d.type || "bar" === d.type || "rangeBar" === d.type || "stackedBar" === d.type || "stackedBar100" === d.type || "rangeColumn" === d.type ? I(b,
                        e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === d.type || "doughnut" === d.type ? sa(b, e.center, e.radius, "white", d.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "candlestick" === d.type ? (b.globalAlpha = 1, b.strokeStyle = e.color, b.lineWidth = 2 * e.borderThickness, d = 0 === b.lineWidth % 2 ? 0 : 0.5, b.beginPath(), b.moveTo(e.x3 - d, e.y2), b.lineTo(e.x3 - d, Math.min(e.y1, e.y4)), b.stroke(), b.beginPath(), b.moveTo(e.x3 - d, Math.max(e.y1, e.y4)), b.lineTo(e.x3 - d, e.y3), b.stroke(), I(b, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1,
                        e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), b.globalAlpha = 1) : "ohlc" === d.type && (b.globalAlpha = 1, b.strokeStyle = e.color, b.lineWidth = 2 * e.borderThickness, d = 0 === b.lineWidth % 2 ? 0 : 0.5, b.beginPath(), b.moveTo(e.x3 - d, e.y2), b.lineTo(e.x3 - d, e.y3), b.stroke(), b.beginPath(), b.moveTo(e.x3, e.y1), b.lineTo(e.x1, e.y1), b.stroke(), b.beginPath(), b.moveTo(e.x3, e.y4), b.lineTo(e.x2, e.y4), b.stroke(), b.globalAlpha = 1))
            }
        }
        b.restore();
        b.globalAlpha = 1;
        b.beginPath()
    };
    R.prototype.getToolTipInnerHTML = function(a) {
        a = a.entries;
        for (var b = null, c = null, d = null, e = 0, f = "", g = !0, k = 0; k < a.length; k++)
            if (a[k].dataSeries.toolTipContent || a[k].dataPoint.toolTipContent) {
                g = !1;
                break
            }
        if (g && (this.content && "function" === typeof this.content || this.contentFormatter)) a = {
            chart: this.chart._publicChartReference,
            toolTip: this._options,
            entries: a
        }, b = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
        else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var p = "", k = 0; k < a.length; k++)
                if (c = a[k].dataSeries, d = a[k].dataPoint, e = a[k].index,
                    f = "", 0 === k && (g && !this.content) && (p += "undefined" !== typeof this.chart.axisX.labels[d.x] ? this.chart.axisX.labels[d.x] : "{x}", p += "</br>", p = this.chart.replaceKeywordsWithValue(p, d, c, e)), null !== d.toolTipContent && ("undefined" !== typeof d.toolTipContent || null !== c._options.toolTipContent)) {
                    if ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" ===
                        c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}";
                    else if ("bubble" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" +
                        (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
                    else if ("rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type) f += d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";
                    else if ("candlestick" === c.type || "ohlc" === c.type) f += d.toolTipContent ?
                        d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
                    null === b && (b = "");
                    !0 === this.reversed ? (b = this.chart.replaceKeywordsWithValue(f, d, c, e) + b, k < a.length - 1 && (b = "</br>" + b)) : (b += this.chart.replaceKeywordsWithValue(f, d, c, e), k < a.length - 1 && (b += "</br>"))
                }
            null !==
                b && (b = p + b)
        } else {
            c = a[0].dataSeries;
            d = a[0].dataPoint;
            e = a[0].index;
            if (null === d.toolTipContent || "undefined" === typeof d.toolTipContent && null === c._options.toolTipContent) return null;
            if ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type) f =
                d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}";
            else if ("bubble" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
            else if ("pie" === c.type || "doughnut" === c.type || "funnel" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.name ? "{name}:</span>&nbsp;&nbsp;" : d.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}";
            else if ("rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ?
                c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";
            else if ("candlestick" === c.type || "ohlc" === c.type) f = d.toolTipContent ? d.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.fontColor ? "" : "'color:{color};'") + "\"'>" + (d.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
            null === b && (b = "");
            b += this.chart.replaceKeywordsWithValue(f, d, c, e)
        }
        return b
    };
    R.prototype.enableAnimation = function() {
        this.container.style.WebkitTransition || (this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out", this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
    };
    R.prototype.disableAnimation = function() {
        this.container.style.WebkitTransition &&
            (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
    };
    R.prototype.hide = function(a) {
        this.enabled && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
    };
    u.prototype.getPercentAndTotal = function(a, b) {
        var c = null,
            d = null,
            e = null;
        if (0 <= a.type.indexOf("stacked")) d = 0, c = b.x.getTime ? b.x.getTime() : b.x, c in a.plotUnit.yTotals &&
            (d = a.plotUnit.yTotals[c], e = isNaN(b.y) ? 0 : 0 === d ? 0 : 100 * (b.y / d));
        else if ("pie" === a.type || "doughnut" === a.type) {
            for (i = d = 0; i < a.dataPoints.length; i++) isNaN(a.dataPoints[i].y) || (d += a.dataPoints[i].y);
            e = isNaN(b.y) ? 0 : 100 * (b.y / d)
        }
        return {
            percent: e,
            total: d
        }
    };
    u.prototype.replaceKeywordsWithValue = function(a, b, c, d, e) {
        var f = this;
        e = "undefined" === typeof e ? 0 : e;
        if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var g = "#percent",
                k = "#total",
                p = this.getPercentAndTotal(c,
                    b),
                k = isNaN(p.total) ? k : p.total,
                g = isNaN(p.percent) ? g : p.percent;
            do {
                p = "";
                if (c.percentFormatString) p = c.percentFormatString;
                else {
                    var p = "#,##0.",
                        h = Math.max(Math.ceil(Math.log(1 / Math.abs(g)) / Math.LN10), 2);
                    if (isNaN(h) || !isFinite(h)) h = 2;
                    for (var l = 0; l < h; l++) p += "#"
                }
                a = a.replace("#percent", X(g, p, f._cultureInfo));
                a = a.replace("#total", X(k, c.yValueFormatString ? c.yValueFormatString : "#,##0.########"))
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
        }
        return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
            if ('"' ===
                a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
            a = $(a.slice(1, a.length - 1));
            a = a.replace("#index", e);
            var g = null;
            try {
                var h = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                h && 0 < h.length && (g = $(h[2]), a = $(h[1]))
            } catch (k) {}
            h = null;
            if ("color" === a) return b.color ? b.color : c.color ? c.color : c._colorSet[d % c._colorSet.length];
            if (b.hasOwnProperty(a)) h = b;
            else if (c.hasOwnProperty(a)) h = c;
            else return "";
            h = h[a];
            null !== g && (h = h[g]);
            return "x" === a ? "dateTime" === f.plotInfo.axisXValueType || "dateTime" ===
                c.xValueType || b.x && b.x.getTime ? ra(h, b.xValueFormatString ? b.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : f.axisX && f.axisX.autoValueFormatString ? f.axisX.autoValueFormatString : "DD MMM YY", f._cultureInfo) : X(h, b.xValueFormatString ? b.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : "#,##0.########", f._cultureInfo) : "y" === a ? X(h, b.yValueFormatString ? b.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : "#,##0.########", f._cultureInfo) : "z" === a ? X(h, b.zValueFormatString ? b.zValueFormatString :
                    c.zValueFormatString ? c.zValueFormatString : "#,##0.########", f._cultureInfo) : h
        })
    };
    aa.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.eventObjects = [];
        t && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
    };
    aa.prototype.getNewObjectTrackingId = function() {
        return ++this.lastObjectId
    };
    aa.prototype.mouseEventHandler = function(a) {
        if ("mousemove" === a.type || "click" === a.type) {
            var b = [],
                c = na(a),
                d = null;
            if ((d = this.chart.getObjectAtXY(c.x, c.y, !1)) && "undefined" !== typeof this.objectMap[d])
                if (d = this.objectMap[d], "dataPoint" === d.objectType) {
                    var e = this.chart.data[d.dataSeriesIndex],
                        f = e.dataPoints[d.dataPointIndex],
                        g = d.dataPointIndex;
                    d.eventParameter = {
                        x: c.x,
                        y: c.y,
                        dataPoint: f,
                        dataSeries: e._options,
                        dataPointIndex: g,
                        dataSeriesIndex: e.index,
                        chart: this.chart._publicChartReference
                    };
                    d.eventContext = {
                        context: f,
                        userContext: f,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    b.push(d);
                    d = this.objectMap[e.id];
                    d.eventParameter = {
                        x: c.x,
                        y: c.y,
                        dataPoint: f,
                        dataSeries: e._options,
                        dataPointIndex: g,
                        dataSeriesIndex: e.index,
                        chart: this.chart._publicChartReference
                    };
                    d.eventContext = {
                        context: e,
                        userContext: e._options,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    b.push(this.objectMap[e.id])
                } else "legendItem" === d.objectType && (e = this.chart.data[d.dataSeriesIndex], f = null !== d.dataPointIndex ? e.dataPoints[d.dataPointIndex] : null, d.eventParameter = {
                    x: c.x,
                    y: c.y,
                    dataSeries: e._options,
                    dataPoint: f,
                    dataPointIndex: d.dataPointIndex,
                    dataSeriesIndex: d.dataSeriesIndex,
                    chart: this.chart._publicChartReference
                }, d.eventContext = {
                    context: this.chart.legend,
                    userContext: this.chart.legend._options,
                    mouseover: "itemmouseover",
                    mousemove: "itemmousemove",
                    mouseout: "itemmouseout",
                    click: "itemclick"
                }, b.push(d));
            e = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
                f = !0;
                for (d = 0; d < b.length; d++)
                    if (b[d].id === this.mouseoveredObjectMaps[c].id) {
                        f = !1;
                        break
                    }
                f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout",
                    a) : e.push(this.mouseoveredObjectMaps[c])
            }
            this.mouseoveredObjectMaps = e;
            for (c = 0; c < b.length; c++) {
                e = !1;
                for (d = 0; d < this.mouseoveredObjectMaps.length; d++)
                    if (b[c].id === this.mouseoveredObjectMaps[d].id) {
                        e = !0;
                        break
                    }
                e || (this.fireEvent(b[c], "mouseover", a), this.mouseoveredObjectMaps.push(b[c]));
                "click" === a.type ? this.fireEvent(b[c], "click", a) : "mousemove" === a.type && this.fireEvent(b[c], "mousemove", a)
            }
        }
    };
    aa.prototype.fireEvent = function(a, b, c) {
        if (a && b) {
            var d = a.eventParameter,
                e = a.eventContext,
                f = a.eventContext.userContext;
            f && (e && f[e[b]]) && f[e[b]].call(f, d);
            "mouseout" !== b ? f.cursor && f.cursor !== c.target.style.cursor && (c.target.style.cursor = f.cursor) : (c.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === b && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], d)
        }
    };
    O(ca, G);
    qa.prototype.animate = function(a, b, c, d, e) {
        var f = this;
        this.chart.isAnimating = !0;
        e = e || A.easing.linear;
        c && this.animations.push({
            startTime: (new Date).getTime() +
                (a ? a : 0),
            duration: b,
            animationCallback: c,
            onComplete: d
        });
        for (a = []; 0 < this.animations.length;)
            if (b = this.animations.shift(), c = (new Date).getTime(), d = 0, b.startTime <= c && (d = e(Math.min(c - b.startTime, b.duration), 0, 1, b.duration), d = Math.min(d, 1), isNaN(d) || !isFinite(d)) && (d = 1), 1 > d && a.push(b), b.animationCallback(d), 1 <= d && b.onComplete) b.onComplete();
        this.animations = a;
        0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            f.animate.call(f)
        }) : this.chart.isAnimating = !1
    };
    qa.prototype.cancelAllAnimations = function() {
        this.animations = [];
        this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this.animationRequestId = null;
        this.chart.isAnimating = !1
    };
    var A = {
            yScaleAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas,
                        e = b.animationBase;
                    c.drawImage(d, 0, 0, d.width, d.height, 0, e - e * a, c.canvas.width / J, a * c.canvas.height / J)
                }
            },
            xScaleAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas,
                        e = b.animationBase;
                    c.drawImage(d, 0, 0,
                        d.width, d.height, e - e * a, 0, a * c.canvas.width / J, c.canvas.height / J)
                }
            },
            xClipAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas;
                    c.save();
                    0 < a && c.drawImage(d, 0, 0, d.width * a, d.height, 0, 0, d.width * a / J, d.height / J);
                    c.restore()
                }
            },
            fadeInAnimation: function(a, b) {
                if (0 !== a) {
                    var c = b.dest,
                        d = b.source.canvas;
                    c.save();
                    c.globalAlpha = a;
                    c.drawImage(d, 0, 0, d.width, d.height, 0, 0, c.canvas.width / J, c.canvas.height / J);
                    c.restore()
                }
            },
            easing: {
                linear: function(a, b, c, d) {
                    return c * a / d + b
                },
                easeOutQuad: function(a, b, c, d) {
                    return -c *
                        (a /= d) * (a - 2) + b
                },
                easeOutQuart: function(a, b, c, d) {
                    return -c * ((a = a / d - 1) * a * a * a - 1) + b
                },
                easeInQuad: function(a, b, c, d) {
                    return c * (a /= d) * a + b
                },
                easeInQuart: function(a, b, c, d) {
                    return c * (a /= d) * a * a * a + b
                }
            }
        },
        K = {
            drawMarker: function(a, b, c, d, e, f, g, k) {
                if (c) {
                    var p = 1;
                    c.fillStyle = f ? f : "#000000";
                    c.strokeStyle = g ? g : "#000000";
                    c.lineWidth = k ? k : 0;
                    "circle" === d ? (c.moveTo(a, b), c.beginPath(), c.arc(a, b, e / 2, 0, 2 * Math.PI, !1), f && c.fill(), k && (g ? c.stroke() : (p = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p))) :
                        "square" === d ? (c.beginPath(), c.rect(a - e / 2, b - e / 2, e, e), f && c.fill(), k && (g ? c.stroke() : (p = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p))) : "triangle" === d ? (c.beginPath(), c.moveTo(a - e / 2, b + e / 2), c.lineTo(a + e / 2, b + e / 2), c.lineTo(a, b - e / 2), c.closePath(), f && c.fill(), k && (g ? c.stroke() : (p = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p)), c.beginPath()) : "cross" === d && (c.strokeStyle = f, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, b - e / 2), c.lineTo(a + e /
                            2, b + e / 2), c.stroke(), c.moveTo(a + e / 2, b - e / 2), c.lineTo(a - e / 2, b + e / 2), c.stroke())
                }
            },
            drawMarkers: function(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    K.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness)
                }
            }
        },
        Ba = {
            Chart: function(a, b) {
                var c = new u(a, b, this);
                this.render = function() {
                    c.render(this.options)
                };
                this.options = c._options
            },
            addColorSet: function(a, b) {
                W[a] = b
            },
            addCultureInfo: function(a, b) {
                da[a] = b
            },
            formatNumber: function(a, b, c) {
                c = c || "en";
                if (da[c]) return X(a, b || "#,##0.##", new ca(c));
                throw "Unknown Culture Name";
            },
            formatDate: function(a, b, c) {
                c = c || "en";
                if (da[c]) return ra(a, b || "DD MMM YYYY", new ca(c));
                throw "Unknown Culture Name";
            }
        };
    Ba.Chart.version = "v1.8.0 GA";
    window.CanvasJS = Ba
})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.
  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }
    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }
    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }
    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }
    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }
    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }
    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }
    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }
    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }
    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }
    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }
    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }
    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }
    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }
    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }
    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }
    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }
    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }
    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }
    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }
    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }
    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b])
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = {
            butt: "flat",
            round: "round"
        },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() {
        this.currentPath_ = []
    };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = {
                x: null,
                y: null
            }, d = {
                x: null,
                y: null
            }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x) c.x = f.x;
                if (null == d.x || f.x > d.x) d.x = f.x;
                if (null == c.y || f.y < c.y) c.y = f.y;
                if (null == d.y || f.y > d.y) d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() {
        this.stroke(!0)
    };
    d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function(a,
        b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();
/* ------------------------------------------------------------------------ 
		   PIECHART
		------------------------------------------------------------------------ */
		window.onload = function () {
			var chart = new CanvasJS.Chart("chartContainer",
			{
			animationEnabled: true,
			theme: "theme5",
			legend:{
			  fontSize: 14
			 },
			data: [
			{        
				type: "doughnut",
				startAngle:0,
				showInLegend:true,
				toolTipContent: "{y} %", 					
				dataPoints: [
				{  y: 33.3, legendText: "Red"},
				{  y: 33.3, legendText: "Green"},
				{  y: 33.3, legendText: "Yellow"}
				]
			}
			]
		});
		var chart2 = new CanvasJS.Chart("chartContainer2",
			{
			animationEnabled: true,
			theme: "theme5",
			legend:{
			  fontSize: 14
			 },
			data: [
			{        
				type: "doughnut",
				startAngle:0,
				showInLegend:true,
				toolTipContent: "{y} %", 					
				dataPoints: [
				{  y: 50, legendText: "Red"},
				{  y: 50, legendText: "Green"}
				]
			}
			]
		});
		var chart3 = new CanvasJS.Chart("chartContainer3",
			{
			animationEnabled: true,
			theme: "theme5",
			legend:{
			  fontSize: 14
			 },
			data: [
			{        
				type: "doughnut",
				startAngle:0,
				showInLegend:true,
				toolTipContent: "{y} %", 					
				dataPoints: [
				{  y: 90, legendText: "Red"},
				{  y: 10, legendText: "Green"}
				]
			}
			]
		});
		var chart4 = new CanvasJS.Chart("chartContainer4",
			{
			animationEnabled: true,
			theme: "theme5",
			legend:{
			  fontSize: 14
			 },
			data: [
			{        
				type: "doughnut",
				startAngle:0,
				showInLegend:true,
				toolTipContent: "{y} %", 					
				dataPoints: [
				{  y: 33.3, legendText: "Red"},
				{  y: 33.3, legendText: "Green"},
				{  y: 33.3, legendText: "Yellow"}
				]
			}
			]
		});
		var chart5 = new CanvasJS.Chart("chartContainer5",
		{
			animationEnabled: true,
			theme: "theme5",
			legend:{
			  fontSize: 14,
			  padding:20,
			 },
			data: [
			{        
				type: "doughnut",
				startAngle:0,
				showInLegend:true,
				toolTipContent: "{y} %", 					
				dataPoints: [
				{  y: 33.3, legendText: "Red"},
				{  y: 33.3, legendText: "Green"},
				{  y: 33.3, legendText: "Yellow"}
				]
			}
			]
		});
		chart.render();
		chart2.render();
		chart3.render();
		chart4.render();
		chart5.render();
	};
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e,s){var n,o,a,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,o=n.name,e.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']")[0],!!a&&i(a)):!1):(/input|select|textarea|button|object/.test(r)?!e.disabled:"a"===r?e.href||s:s)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}function s(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=o(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function o(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",a)}function a(){t.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function r(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function h(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(i){return e(i,!isNaN(t.attr(i,"tabindex")))},tabbable:function(i){var s=t.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&e(i,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var i,s,n=t(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;n<o.length;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}};var l=0,u=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r,h={},l=e.split(".")[0];return e=e.split(".")[1],n=l+"-"+e,s||(s=i,i=t.Widget),t.expr[":"][n.toLowerCase()]=function(e){return!!t.data(e,n)},t[l]=t[l]||{},o=t[l][e],a=t[l][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new a(t,e)},t.extend(a,o,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),r=new i,r.options=t.widget.extend({},r.options),t.each(s,function(e,s){return t.isFunction(s)?void(h[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},n=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}()):void(h[e]=s)}),a.prototype=t.widget.extend(r,{widgetEventPrefix:o?r.widgetEventPrefix||e:e},h,{constructor:a,namespace:l,widgetName:e,widgetFullName:n}),o?(t.each(o._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,a,i._proto)}),delete o._childConstructors):i._childConstructors.push(a),t.widget.bridge(e,a),a},t.widget.extend=function(e){for(var i,s,n=u.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=u.call(arguments,1),r=this;return n=!o&&a.length?t.widget.extend.apply(null,[n].concat(a)):n,this.each(o?function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+n+"'")}:function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))}),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}});var c=(t.widget,!1);t(document).mouseup(function(){c=!1});t.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!c){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),c=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),c=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}});!function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var n,o,a=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=t.extend({},n);var p,m,g,v,_,b,y=t(n.of),w=t.position.getWithinInfo(n.within),x=t.position.getScrollInfo(w),k=(n.collision||"flip").split(" "),C={};return b=s(y),y[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,_=t.extend({},v),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",t=c.exec(i[0]),e=c.exec(i[1]),C[this]=[t?t[0]:0,e?e[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?_.left+=m:"center"===n.at[0]&&(_.left+=m/2),"bottom"===n.at[1]?_.top+=g:"center"===n.at[1]&&(_.top+=g/2),p=e(C.at,m,g),_.left+=p[0],_.top+=p[1],this.each(function(){var s,l,u=t(this),c=u.outerWidth(),d=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=c+f+i(this,"marginRight")+x.width,I=d+b+i(this,"marginBottom")+x.height,T=t.extend({},_),P=e(C.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?T.left-=c:"center"===n.my[0]&&(T.left-=c/2),"bottom"===n.my[1]?T.top-=d:"center"===n.my[1]&&(T.top-=d/2),T.left+=P[0],T.top+=P[1],o||(T.left=h(T.left),T.top=h(T.top)),s={marginLeft:f,marginTop:b},t.each(["left","top"],function(e,i){t.ui.position[k[e]]&&t.ui.position[k[e]][i](T,{targetWidth:m,targetHeight:g,elemWidth:c,elemHeight:d,collisionPosition:s,collisionWidth:D,collisionHeight:I,offset:[p[0]+P[0],p[1]+P[1]],my:n.my,at:n.at,within:w,elem:u})}),n.using&&(l=function(t){var e=v.left-T.left,i=e+m-c,s=v.top-T.top,o=s+g-d,h={target:{element:y,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:T.left,top:T.top,width:c,height:d},horizontal:0>i?"left":e>0?"right":"center",vertical:0>o?"top":s>0?"bottom":"middle"};c>m&&r(e+i)<m&&(h.horizontal="center"),d>g&&r(s+o)<g&&(h.vertical="middle"),h.important=a(r(e),r(i))>a(r(s),r(o))?"horizontal":"vertical",n.using.call(this,t,h)}),u.offset(t.extend(T,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-o-n;e.collisionWidth>o?h>0&&0>=l?(i=t.left+h+e.collisionWidth-o-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+o-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-o-n;e.collisionHeight>o?h>0&&0>=l?(i=t.top+h+e.collisionHeight-o-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+o-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,u=l-h,c=l+e.collisionWidth-a-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>u?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||i<r(u))&&(t.left+=d+p+f)):c>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||r(s)<c)&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,u=l-h,c=l+e.collisionHeight-a-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>u?(s=t.top+p+f+m+e.collisionHeight-a-o,t.top+p+f+m>u&&(0>s||s<r(u))&&(t.top+=p+f+m)):c>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>c&&(i>0||r(i)<c)&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,r=document.getElementsByTagName("body")[0],h=document.createElement("div");e=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(h),i=r||document.documentElement,i.insertBefore(e,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=t(h).offset().left,o=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}();t.ui.position,t.widget("ui.accordion",{version:"1.11.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?void this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void("disabled"===t&&(this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e))))},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),o.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){e=Math.max(e,t(this).css("height","").height())}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n[0]===s[0],a=o&&i.collapsible,r=a?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:a?t():n,newPanel:r};e.preventDefault(),o&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=a?!1:this.headers.index(n),this.active=o?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),o||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.length&&(!e.length||t.index()<e.index()),l=this.options.animate||{},u=h&&l.down||l,c=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||l.easing,o=o||u.duration||l.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:o,easing:n,complete:c,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?r+=i.now:"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}})):e.animate(this.hideProps,o,n,c):t.animate(this.showProps,o,n,c)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.11.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",n=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(t):this.select(t))},refresh:function(){var e,i,s=this,n=this.options.icons.submenu,o=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),o.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.parent(),s=t("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),e=o.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);s._isDivider(e)&&e.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?void(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s-n<0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(e)},previousPage:function(e){var i,s,n;return this.active?void(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first()))):void this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=new RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).text()))})}});t.widget("ui.autocomplete",{version:"1.11.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o?!0:a?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,void(i=!0);e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,void((!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault());if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,void t.preventDefault()):void this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),void this._change(t))}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)})):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,void(s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion))))},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").text(i.label).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e):void this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=new RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}});var d,p=(t.ui.autocomplete,"ui-button ui-widget ui-state-default ui-corner-all"),f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},g=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"'][type=radio]"):t("[name='"+i+"'][type=radio]",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.11.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var e=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===d&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||t(this).removeClass(n)}).bind("click"+this.eventNamespace,function(t){i.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){e.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;t(this).addClass("ui-state-active"),e.buttonElement.attr("aria-pressed","true");var s=e.element[0];g(s).not(s).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(t(this).addClass("ui-state-active"),d=this,void e.document.one("mouseup",function(){d=null}))}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:void t(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(e){return i.disabled?!1:void((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"))}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),void(e&&this.buttonElement.removeClass("checkbox"===this.type||"radio"===this.type?"ui-state-focus":"ui-state-focus ui-state-active"))):void this._resetButton()},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?g(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return void(this.options.label&&this.element.val(this.options.label));var e=this.buttonElement.removeClass(f),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,o=[];s.primary||s.secondary?(this.options.text&&o.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(o.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):o.push("ui-button-text-only"),e.addClass(o.join(" "))}}),t.widget("ui.buttonset",{version:"1.11.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}});t.ui.button;t.extend(t.ui,{datepicker:{version:"1.11.2"}});var v;t.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return r(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?o(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;n<t.length;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var a,h,l,u,c,d=this._dialogInst;return d||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),r(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+c]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;e<this._disabledInputs.length;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,a,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),void(l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),a=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==a&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,a)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l))))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,n,o,a,h,l,u;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(i,"beforeShow"),o=n?n.apply(e,[e,i]):{},o!==!1&&(r(i.settings,o),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),a=!1,t(e).parents().each(function(){return a|="fixed"===t(this).css("position"),!a}),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),h=t.datepicker._checkOffset(i,h,a),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":a?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=t.datepicker._get(i,"showAnim"),u=t.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?i.dpDiv.show(l,t.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,v=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],o=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&a.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",o*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?i.toString():i+"",""===i)return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),c=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,_=-1,b=!1,y=function(t){var i=n+1<e.length&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=new RegExp("^\\d{"+n+","+s+"}"),a=i.substring(h).match(o);if(!a)throw"Missing number at position "+h;return h+=a[0].length,parseInt(a[0],10)},x=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],h+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;n<e.length;n++)if(b)"'"!==e.charAt(n)||y("'")?k():b=!1;else switch(e.charAt(n)){case"d":v=w("d");break;case"D":x("D",c,d);break;case"o":_=w("o");break;case"m":g=w("m");break;case"M":g=x("M",p,f);break;case"y":m=w("y");break;case"@":r=new Date(w("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":y("'")?k():b=!0;break;default:k()}if(h<i.length&&(a=i.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),_>-1)for(g=1,v=_;;){if(o=this._getDaysInMonth(m,g-1),o>=v)break;g++,v-=o}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=s+1<t.length&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;s.length<i;)s="0"+s;return s},u=function(t,e,i,s){return h(t)?s[e]:i[e]},c="",d=!1;if(e)for(s=0;s<t.length;s++)if(d)"'"!==t.charAt(s)||h("'")?c+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":c+=l("d",e.getDate(),2);break;case"D":c+=u("D",e.getDay(),n,o);break;case"o":c+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":c+=l("m",e.getMonth()+1,2);break;case"M":c+=u("M",e.getMonth(),a,r);break;case"y":c+=h("y")?e.getFullYear():(e.getYear()%100<10?"0":"")+e.getYear()%100;break;case"@":c+=e.getTime();break;case"!":c+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?c+="'":d=!0;break;default:c+=t.charAt(s)}return c},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=e+1<t.length&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;e<t.length;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"===a.toString()?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,u,c,d,p,f,m,g,v,_,b,y,w,x,k,C,D,I,T,P,M,S,z,H,A,N,E,W,O,F,R,L=new Date,Y=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:Y,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":h)+"</div>":"",u=parseInt(this._get(t,"firstDay"),10),u=isNaN(u)?0:u,c=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",x=0;x<U[0];x++){for(k="",this.maxRows=4,C=0;C<U[1];C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",$){if(T+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(B?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(B?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===x?B?o:s:"")+(/all|right/.test(I)&&0===x?B?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,x>0||C>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead><tr>",P=c?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+u)%7,P+="<th scope='col'"+((w+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+d[M]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),z=(this._getFirstDayOfMonth(te,Z)-u+7)%7,H=Math.ceil((z+S)/7),A=$&&this.maxRows>H?this.maxRows:H,this.maxRows=A,N=this._daylightSavingAdjust(new Date(te,Z,1-z)),E=0;A>E;E++){for(T+="<tr>",W=c?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(N)+"</td>":"",w=0;7>w;w++)O=g?g.apply(t.input?t.input[0]:null,[N]):[!0,""],F=N.getMonth()!==Z,R=F&&!_||!O[0]||Q&&Q>N||J&&N>J,W+="<td class='"+((w+u+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(N.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===N.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!v?"":" "+O[1]+(N.getTime()===G.getTime()?" "+this._currentClass:"")+(N.getTime()===Y.getTime()?" ui-datepicker-today":""))+"'"+(F&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+N.getMonth()+"' data-year='"+N.getFullYear()+"'")+">"+(F&&!v?"&#xa0;":R?"<span class='ui-state-default'>"+N.getDate()+"</span>":"<a class='ui-state-default"+(N.getTime()===Y.getTime()?" ui-state-highlight":"")+(N.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+N.getDate()+"</a>")+"</td>",N.setDate(N.getDate()+1),N=this._daylightSavingAdjust(N);T+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+($?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=T}y+=k}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,u,c,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!g)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||u<=n.getMonth())&&(y+="<option value='"+u+"'"+(u===e?" selected='selected'":"")+">"+r[u]+"</option>");y+="</select>"}if(_||(b+=y+(!o&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(c=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(c[0]),m=Math.max(f,p(c[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||e.getFullYear()<=r)},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new n,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.11.2";t.datepicker;t.widget("ui.draggable",t.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(e){var i=this.options;return this._blurActiveElement(e),this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=this.document[0];if(this.handleElement.is(e.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&t(i.activeElement).blur()}catch(s){}},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._normalizeRightBottom(),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.focus(),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===n.containment?void(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):n.containment.constructor===Array?void(this.containment=n.containment):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],void(s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i))):void(this.containment=null)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,h,l,u,c,d,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,_=i.offset.top,b=_+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,u=s.snapElements[d].top-s.margins.top,c=u+s.snapElements[d].height,h-m>v||g>l+m||u-m>b||_>c+m||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=Math.abs(u-b)<=m,o=Math.abs(c-_)<=m,a=Math.abs(h-v)<=m,r=Math.abs(l-g)<=m,n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=Math.abs(u-_)<=m,o=Math.abs(c-b)<=m,a=Math.abs(h-g)<=m,r=Math.abs(l-v)<=m,n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}});t.ui.draggable;t.widget("ui.resizable",t.ui.mouse,{version:"1.11.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseInt(t,10)||0},_isNumber:function(t){return!isNaN(parseInt(t,10))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i,s,n,o,a=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;i<e.length;i++)s=t.trim(e[i]),o="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),a._handles.show())}).mouseleave(function(){r.disabled||a.resizing||(t(this).addClass("ui-resizable-autohide"),a._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),a.addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),h?(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,o=s?0:u.sizeDiff.width,a={width:u.helper.width()-o,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),i<o.maxWidth&&(o.maxWidth=i),n<o.maxHeight&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&u&&(t.top=h-e.minHeight),n&&u&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseInt(s[e],10)||0,i[e]+=parseInt(n[e],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable("instance"),l=h.options,u=h.element,c=l.containment,d=c instanceof t?c.get(0):/parent/.test(c)?u.parent().get(0):c;d&&(h.containerElement=t(d),/document/.test(c)||c===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=h._num(e.css("padding"+s))}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,"left")?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,h=a.containerOffset,l=a.position,u=a._aspectRatio||e.shiftKey,c={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-c.left),u&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),u&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-c.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-c.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,u&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,u&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),o={},a=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(a,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(o[e]=i||null)}),e.css(o)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,c=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/u)*u,p=o.width+c,f=o.height+d,m=s.maxWidth&&s.maxWidth<p,g=s.maxHeight&&s.maxHeight<f,v=s.minWidth&&s.minWidth>p,_=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),_&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-c):((0>=f-u||0>=p-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=a.top-d):(f=u-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-c):(p=u-e.height,i.size.width=p,i.position.left=a.left+o.width-p))}});t.ui.resizable,t.widget("ui.dialog",{version:"1.11.2",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",e)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&t(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",e)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e);if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.focus()}),e.preventDefault()):(this._delay(function(){s.focus()}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?void this.uiDialog.removeClass("ui-dialog-buttons"):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},o={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(o).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(r>=0?"+":"")+r,of:i.window},t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),h=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" top"+(h>=0?"+":"")+h,of:i.window},t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}});t.widget("ui.droppable",{version:"1.11.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?void(e=arguments[0]):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;e<t.length;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,u=i.offset.top,c=l+i.proportions().width,d=u+i.proportions().height;switch(s){case"fit":return o>=l&&c>=r&&a>=u&&d>=h;case"intersect":return l<o+e.helperProportions.width/2&&r-e.helperProportions.width/2<c&&u<a+e.helperProportions.height/2&&h-e.helperProportions.height/2<d;case"pointer":return t(n.pageY,u,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case"touch":return(a>=u&&d>=a||h>=u&&d>=h||u>a&&h>d)&&(o>=l&&c>=o||r>=l&&c>=r||l>o&&r>c);default:return!1}}}(),t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;s<o.length;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;n<r.length;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=t.ui.intersect(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}};var _=(t.ui.droppable,"ui-effects-"),b=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=c[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:s.max<t?s.max:t)}function s(e){var i=l(),s=i._rgba=[];return e=e.toLowerCase(),f(h,function(t,n){var o,a=n.re.exec(e),r=a&&n.parse(a),h=n.space||"rgba";return r?(o=i[h](r),i[u[h].cache]=o[u[h].cache],s=i._rgba=o._rgba,!1):void 0}),s.length?("0,0,0,0"===s.join()&&t.extend(s,o.transparent),i):o[e]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+(e-t)*i*6:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var c=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(u.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(u,function(t,e){n[e.cache]&&(c[e.cache]=n[e.cache].slice())}):f(u,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!c[o]&&s.to){if("alpha"===t||null==n[t])return;c[o]=s.to(c._rgba)}c[o][e.idx]=i(n[t],e,!0)}),c[o]&&t.inArray(null,c[o].slice(0,3))<0&&(c[o][3]=1,s.from&&(c._rgba=s.from(c[o])))}),this):void 0},is:function(t){var e=l(t),i=!0,s=this;return f(u,function(t,n){var o,a=e[n.cache];return a&&(o=s[n.cache]||n.to&&n.to(s._rgba)||[],f(n.props,function(t,e){return null!=a[e.idx]?i=a[e.idx]===o[e.idx]:void 0})),i}),i},_space:function(){var t=[],e=this;return f(u,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=u[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],u=c[n.type]||{};null!==l&&(null===a?h[o]=l:(u.mod&&(l-a>u.mod/2?a+=u.mod:a-l>u.mod/2&&(a-=u.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,u=r+h,c=.5*u;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=c?l/u:l/(2-u),[Math.round(e)%360,i,c,null==a?1:a]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(u,function(s,n){var o=n.props,a=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),c="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=c["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),u?(n=l(u(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===a?u:("function"===a&&(n=n.call(this,u),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=u+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(b.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),l=l.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.11.2",save:function(t,e){for(var i=0;i<e.length;i++)null!==e[i]&&t.data(_+e[i],t[0].style[e[i]])},restore:function(t,e){var i,s;for(s=0;s<e.length;s++)null!==e[s]&&(i=t.data(_+e[s]),void 0===i&&(i=""),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){t.isFunction(o)&&o.call(n[0]),t.isFunction(e)&&e()}var n=t(this),o=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):a.call(n[0],s,i)}var s=e.apply(this,arguments),n=s.mode,o=s.queue,a=t.effects.effect[s.effect];return t.fx.off||!a?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):o===!1?this.each(i):this.queue(o||"fx",i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();t.effects,t.effects.effect.blind=function(e,i){var s,n,o,a=t(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=t.effects.setMode(a,e.mode||"hide"),c=e.direction||"up",d=r.test(c),p=d?"height":"width",f=d?"top":"left",m=h.test(c),g={},v="show"===u;a.parent().is(".ui-effects-wrapper")?t.effects.save(a.parent(),l):t.effects.save(a,l),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n=s[p](),o=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(a.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),g[f]=v?o:n+o),v&&(s.css(p,0),m||s.css(f,o+n)),s.animate(g,{duration:e.duration,easing:e.easing,queue:!1,complete:function(){"hide"===u&&a.hide(),t.effects.restore(a,l),t.effects.removeWrapper(a),i()}})},t.effects.effect.bounce=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"effect"),l="hide"===h,u="show"===h,c=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(u||l?1:0),m=e.duration/f,g=e.easing,v="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,b=a.queue(),y=b.length;for((u||l)&&r.push("opacity"),t.effects.save(a,r),a.show(),t.effects.createWrapper(a),d||(d=a["top"===v?"outerHeight":"outerWidth"]()/3),u&&(o={opacity:1},o[v]=0,a.css("opacity",0).css(v,_?2*-d:2*d).animate(o,m,g)),l&&(d/=Math.pow(2,p-1)),o={},o[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,a.animate(n,m,g).animate(o,m,g),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,a.animate(n,m,g)),a.queue(function(){l&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),a.dequeue()},t.effects.effect.clip=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"hide"),l="show"===h,u=e.direction||"vertical",c="vertical"===u,d=c?"height":"width",p=c?"top":"left",f={};t.effects.save(a,r),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n="IMG"===a[0].tagName?s:a,o=n[d](),l&&(n.css(d,0),n.css(p,o/2)),f[d]=l?o:0,f[p]=l?0:o/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})},t.effects.effect.drop=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","opacity","height","width"],a=t.effects.setMode(n,e.mode||"hide"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",c={opacity:r?1:0};t.effects.save(n,o),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),c[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(c,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})},t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===c*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),m||p.hide(),i()}var o,a,r,h,l,u,c=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=c,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/c),b=[];for(o=0;c>o;o++)for(h=g.top+o*_,u=o-(c-1)/2,a=0;d>a;a++)r=g.left+a*v,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*v,top:-o*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(m?l*v:0),top:h+(m?u*_:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*_),opacity:m?1:0},e.duration||500,e.easing,s)},t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})},t.effects.effect.fold=function(e,i){var s,n,o=t(this),a=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(o,e.mode||"hide"),h="show"===r,l="hide"===r,u=e.size||15,c=/([0-9]+)%/.exec(u),d=!!e.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],m=e.duration/2,g={},v={};t.effects.save(o,a),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],c&&(u=parseInt(c[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,e.easing).animate(v,m,e.easing,function(){l&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()})},t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],o=t.effects.setMode(s,e.mode||"show"),a={backgroundColor:s.css("backgroundColor")};"hide"===o&&(a.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,n),i()}})},t.effects.effect.size=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(a,e.mode||"effect"),f=e.restore||"effect"!==p,m=e.scale||"both",g=e.origin||["middle","center"],v=a.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&a.show(),s={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},"toggle"===e.mode&&"show"===p?(a.from=e.to||b,a.to=e.from||s):(a.from=e.from||("show"===p?b:s),a.to=e.to||("hide"===p?b:s)),o={from:{y:a.from.height/s.height,x:a.from.width/s.width},to:{y:a.to.height/s.height,x:a.to.width/s.width}},("box"===m||"both"===m)&&(o.from.y!==o.to.y&&(_=_.concat(c),a.from=t.effects.setTransition(a,c,o.from.y,a.from),a.to=t.effects.setTransition(a,c,o.to.y,a.to)),o.from.x!==o.to.x&&(_=_.concat(d),a.from=t.effects.setTransition(a,d,o.from.x,a.from),a.to=t.effects.setTransition(a,d,o.to.x,a.to))),("content"===m||"both"===m)&&o.from.y!==o.to.y&&(_=_.concat(u).concat(l),a.from=t.effects.setTransition(a,u,o.from.y,a.from),a.to=t.effects.setTransition(a,u,o.to.y,a.to)),t.effects.save(a,_),a.show(),t.effects.createWrapper(a),a.css("overflow","hidden").css(a.from),g&&(n=t.effects.getBaseline(g,s),a.from.top=(s.outerHeight-a.outerHeight())*n.y,a.from.left=(s.outerWidth-a.outerWidth())*n.x,a.to.top=(s.outerHeight-a.to.outerHeight)*n.y,a.to.left=(s.outerWidth-a.to.outerWidth)*n.x),a.css(a.from),("content"===m||"both"===m)&&(c=c.concat(["marginTop","marginBottom"]).concat(u),d=d.concat(["marginLeft","marginRight"]),l=r.concat(c).concat(d),a.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,l),i.from={height:s.height*o.from.y,width:s.width*o.from.x,outerHeight:s.outerHeight*o.from.y,outerWidth:s.outerWidth*o.from.x},i.to={height:s.height*o.to.y,width:s.width*o.to.x,outerHeight:s.height*o.to.y,outerWidth:s.width*o.to.x},o.from.y!==o.to.y&&(i.from=t.effects.setTransition(i,c,o.from.y,i.from),i.to=t.effects.setTransition(i,c,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=t.effects.setTransition(i,d,o.from.x,i.from),i.to=t.effects.setTransition(i,d,o.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,l)})})),a.animate(a.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===a.to.opacity&&a.css("opacity",a.from.opacity),"hide"===p&&a.hide(),t.effects.restore(a,_),f||("static"===v?a.css({position:"relative",top:a.to.top,left:a.to.left}):t.each(["top","left"],function(t,e){a.css(e,function(e,i){var s=parseInt(i,10),n=t?a.to.left:a.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(a),i()}})},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),o=t.effects.setMode(s,e.mode||"effect"),a=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===o?0:100),r=e.direction||"both",h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?a/100:1,x:"vertical"!==r?a/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==o&&(n.origin=h||["middle","center"],n.restore=!0),n.from=e.from||("show"===o?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===o&&(n.from.opacity=0,n.to.opacity=1),"hide"===o&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),o="hide"===n,a=parseInt(e.percent,10)||150,r=a/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:o?a:100,from:o?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.pulsate=function(e,i){var s,n=t(this),o=t.effects.setMode(n,e.mode||"show"),a="show"===o,r="hide"===o,h=a||"hide"===o,l=2*(e.times||5)+(h?1:0),u=e.duration/l,c=0,d=n.queue(),p=d.length;for((a||!n.is(":visible"))&&(n.css("opacity",0).show(),c=1),s=1;l>s;s++)n.animate({opacity:c},u,e.easing),c=1-c;n.animate({opacity:c},u,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()},t.effects.effect.shake=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",h=e.distance||20,l=e.times||3,u=2*l+1,c=Math.round(e.duration/u),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),_=v.length;for(t.effects.save(n,o),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,m[d]=(p?"+=":"-=")+2*h,g[d]=(p?"-=":"+=")+2*h,n.animate(f,c,e.easing),s=1;l>s;s++)n.animate(m,c,e.easing).animate(g,c,e.easing);n.animate(m,c,e.easing).animate(f,c/2,e.easing).queue(function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,u+1))),n.dequeue()},t.effects.effect.slide=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","width","height"],a=t.effects.setMode(n,e.mode||"show"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,c={};t.effects.save(n,o),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),c[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(c,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})},t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},c=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:c.top-r,left:c.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(u,e.duration,e.easing,function(){d.remove(),i()})},t.widget("ui.progressbar",{version:"1.11.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),void this._refreshValue())},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.11.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e=t(i.options.filter,i.element[0]),e.addClass("ui-selectee"),e.each(function(){var e=t(this),i=e.offset();t.data(this,"selectable-item",{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||i.right<o||i.top>h||i.bottom<a):"fit"===n.tolerance&&(l=i.left>o&&i.right<r&&i.top>a&&i.bottom<h),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",{version:"1.11.2",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var t=this.element.uniqueId().attr("id");this.ids={element:t,button:t+"-button",menu:t+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var e=this,i=this.element.attr("tabindex");this.label=t("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:i||this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),t("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=t("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){e.menuItems||e._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var t,e=this.element.find("option");e.length&&(this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){o.optgroup!==n&&(t("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:o.optgroup}).appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex);e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this._setText(this.buttonText,t.label),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){"icons"===t&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button),this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"disabled"===t&&(this.menuInstance.option("disabled",e),this.button.toggleClass("ui-state-disabled",e).attr("aria-disabled",e),this.element.prop("disabled",e),e?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===t&&this._resizeButton()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;t||(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(e){var i=[];e.each(function(e,s){var n=t(s),o=n.parent("optgroup");i.push({element:n,index:e,value:n.attr("value"),label:n.text(),optgroup:o.attr("label")||"",disabled:o.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),t.widget("ui.slider",t.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,o.addClass("ui-state-active").focus(),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,o;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,o=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),o!==!1&&this.values(e,i))):i!==this.value()&&(o=this._trigger("slide",t,{handle:this.handles[e],value:i}),o!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;o<s.length;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!i),this._super(e,i),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;s<i.length;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(t<=this._valueMin())return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=(this.options.max-this._valueMin())%this.options.step;this.max=this.options.max-t},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=(h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())*100,u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?(s-n)/(o-n)*100:0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(e.target).addClass("ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),t.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s&&(!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n))?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,u=this.offset.click.left,c="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+u>o&&a>e+u,p=c&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:o<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<a&&r<s+this.helperProportions.height/2&&n-this.helperProportions.height/2<h},_intersectsWithPointer:function(t){var e="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),s=e&&i,n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return s?this.floating?o&&"right"===o||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;i<e.length;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,u=this.items,c=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(c.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=c.length-1;i>=0;i--)for(a=c[i][1],r=c[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),u.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(e){var i,s,n,o,a,r,h,l,u,c,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,u=d.floating||this._isFloating(this.currentItem),a=u?"left":"top",r=u?"width":"height",c=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[c]-h>this.items[s][r]/2&&(l=!0),Math.abs(e[c]-h)<n&&(n=Math.abs(e[c]-h),o=this.items[s],this.direction=l?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return void(this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1));o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;s<n.length;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.11.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",t)))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:void this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&t<s.min?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,void this.element.val(this._format(i))}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),this.buttons.button(e?"disable":"enable"))},_setOptions:h(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:h(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:h(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:h(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?void h(this._value).call(this,t):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.widget("ui.tabs",{version:"1.11.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;e=e.cloneNode(!1),i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),void this._activate(s);case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),void this._activate(s===this.options.active?!1:s);default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,e){return"active"===t?void this._activate(e):"disabled"===t?void this._setupDisabled(e):(this._super(t,e),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),void("heightStyle"===t&&this._setupHeightStyle(e)))},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=h.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),u={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,u)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,u))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setupDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setupDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){a.html(t),s._trigger("load",i,r)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.widget("",{version:"1.11.2",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),void(this.options[e]=i)):(this._super(e,i),void("content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)})))},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}),void(i&&this._open(e,t,i)))},_open:function(e,i,s){function n(t){u.of=t,a.is(":hidden")||a.position(u)}var o,a,r,h,l,u=t.extend({},this.options.position);if(s){if(o=this._find(i))return void o.tooltip.find(".ui-tooltip-content").html(s);i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(l=s.clone(),l.removeAttr("id").find("[id]").removeAttr("id")):l=s,t("<div>").html(l).appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(u.of),clearInterval(h))},t.fx.interval)),this._trigger("open",e,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}},i[0]!==this.element[0]&&(r.remove=function(){this._removeTooltip(a)}),e&&"mouseover"!==e.type||(r.mouseleave="close"),e&&"focusin"!==e.type||(r.focusout="close"),this._on(!0,i,r)}},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);o&&(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)))},_tooltip:function(e){var i=t("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return t("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});
/*! jQuery UI - v1.9.2 - 2012-11-23 */
(function(){"use strict";$('.detalle').hide();$('#detallever').on('click',function(e){$('.detalle').show();$('#detallever').hide();});jQuery(window).load(function(){jQuery('#loader').delay(350).fadeOut('slow');jQuery('body').delay(350).css({'overflow':'visible'});});jQuery(window).scroll(function(){var scroll=jQuery(window).scrollTop();if(scroll>=250){jQuery("body.fixed-header").addClass("smallHeader");if(scroll>=350){jQuery("body.fixed-header").addClass("active");}}
else{jQuery("body.fixed-header").removeClass("smallHeader active");}});var $window=$(window,'.cd-testimonials-all .cd-testimonials-all-wrapper');var scrollTime=0.6;var scrollDistance=355;$window.on("mousewheel DOMMouseScroll",function(event){event.preventDefault();var delta=event.originalEvent.wheelDelta/125||-event.originalEvent.detail/3;var scrollTop=$window.scrollTop();var finalScroll=scrollTop-parseInt(delta*scrollDistance);TweenMax.to($window,scrollTime,{scrollTo:{y:finalScroll,autoKill:true},ease:Power1.easeOut,autoKill:true,overwrite:5});});var itemcount=0;$('.pluss-item').on("click",function(){itemcount++;$(this).parent().find('.total-items').val(itemcount);});$('.less-item').on("click",function(){itemcount--;$(this).parent().find('.total-items').val(itemcount);});jQuery("#add-review-btn").on("click",function(){jQuery("#add-review-form").slideDown();});jQuery("#review-form-close").on("click",function(){jQuery("#add-review-form").slideUp();});jQuery(".main-nav li a").on("click",function(){jQuery(this).parent("li").find(".dropdown-menu").slideToggle();jQuery(this).find("i").toggleClass("fa-caret-down fa-caret-up");});jQuery("#review-form-close").on("click",function(){jQuery("#add-review-form").slideUp();});jQuery('.scroll').each(function(){var $this=jQuery(this),target=this.hash;jQuery(this).on("click",function(e){e.preventDefault();if($this.length>0){if($this.attr('href')=='#'){}else{jQuery('html, body').animate({scrollTop:(jQuery(target).offset().top)- -1},1000);}}});});$('.cd-see-all').on('click',function(){$('.cd-testimonials-all').addClass('is-visible');$('body').css('overflow','hidden');});$('.cd-testimonials-all .close-btn').on('click',function(){$('.cd-testimonials-all').removeClass('is-visible');$('body').css('overflow-y','scroll');});$(document).keyup(function(event){if(event.which=='27'){$('.cd-testimonials-all').removeClass('is-visible');}});$('.cd-testimonials-all-wrapper').children('ul').masonry({itemSelector:'.cd-testimonials-item'});var $window2=$('.cd-testimonials-all .cd-testimonials-all-wrapper');var scrollTime=0.6;var scrollDistance=355;$window2.on("mousewheel DOMMouseScroll",function(event){event.preventDefault();var delta=event.originalEvent.wheelDelta/125||-event.originalEvent.detail/3;var scrollTop=$window2.scrollTop();var finalScroll=scrollTop-parseInt(delta*scrollDistance);TweenMax.to($window2,scrollTime,{scrollTo:{y:finalScroll,autoKill:true},ease:Power1.easeOut,autoKill:true,overwrite:5});});jQuery('.single-item-carousel').owlCarousel({items:1,animateOut:'fadeOut',navText:['','']})
jQuery('.two-items-carousel').owlCarousel({nav:true,navText:['',''],responsive:{0:{items:1},768:{items:1},979:{items:2},1199:{items:2}}})
jQuery('.three-items-carousel').owlCarousel({nav:true,navText:['',''],responsive:{0:{items:1},768:{items:2},979:{items:2},1199:{items:3}}})
jQuery('.fancybox').fancybox({maxWidth:600,maxHeight:800,fitToView:false,width:'100%',height:'70%',autoSize:false,autoHeight:true,closeClick:false,openEffect:'none',closeEffect:'none'});jQuery('.fancybox-media').fancybox({openEffect:'none',closeEffect:'none',helpers:{media:{}}});jQuery("#product-detail-slider").responsiveSlides({maxwidth:1000,timeout:3E3,pager:true,speed:700});jQuery('.verticalTab').easyResponsiveTabs({type:'vertical',width:'auto',fit:true});jQuery('.toggle-heading').on('click',function(){jQuery(this).find('i').toggleClass('fa-minus fa-plus');});jQuery('.search-trigger').on('click',function(){jQuery('.search-container').fadeIn();});jQuery('.header-search-close').on('click',function(){jQuery('.search-container').fadeOut();});jQuery('.animate-it').appear();jQuery(document.body).on('appear','.animate-it',function(e,$affected){var fadeDelayAttr;var fadeDelay;jQuery(this).each(function(){if(jQuery(this).data("delay")){fadeDelayAttr=jQuery(this).data("delay")
fadeDelay=fadeDelayAttr;}else{fadeDelay=0;}
jQuery(this).delay(fadeDelay).queue(function(){jQuery(this).addClass('animated').clearQueue();});})});$(window).load(function(){var $container=$('#cases-container');$container.isotope({filter:'*',animationOptions:{duration:750,easing:'linear',queue:false,}});$('.cases-filter-nav li a').on("click",function(){var selector=$(this).attr('data-filter');$container.isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:false,}});return false;});var $optionSets=$('.cases-filter-nav'),$optionLinks=$optionSets.find('a');$optionLinks.on("click",function(){var $this=$(this);if($this.hasClass('selected')){return false;}
var $optionSet=$this.parents('.cases-filter-nav');$optionSet.find('.selected').removeClass('selected');$this.addClass('selected');});});jQuery("#slider-range").slider({range:true,min:24781,max:50000,values:[28781,45000],slide:function(event,ui){jQuery("#amount").val("$"+ui.values[0]+" - $"+ui.values[1]);},stop:function(event,ui){jQuery("#sort_price_max").val(ui.values[1]);jQuery("#sort_price_min").val(ui.values[0]);}});jQuery("#amount").val("$"+jQuery("#slider-range").slider("values",0)+" - $"+jQuery("#slider-range").slider("values",1));})(jQuery);function checkcontact(input)
{var pattern1=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;if(pattern1.test(input))
{return true;}
else{return false;}}
function validateSubscription(){var footer_name=document.getElementById("subscribe_name");var footer_email_address=document.getElementById("subscribe_email");if(footer_name.value==""){footer_name.className="input error";return false;}
else if(footer_email_address.value==""){footer_email_address.className="input error";return false;}
else if(checkcontact(footer_email_address.value)==false){footer_email_address.className="input error";return false;}
else{$.ajax({type:"POST",url:'process.php',data:$("#subscribe_form").serialize(),success:function(msg)
{if(msg=='success')
{footer_name.className="input";footer_name.value="";footer_email_address.className="input";footer_email_address.value="";$("#subscribe_form").hide();document.getElementById("subscribe_success").style.display="block";document.getElementById("subscribe_success").innerHTML="Thank You! We'll contact you shortly.";}else{document.getElementById("subscribe_error").style.display="block";document.getElementById("subscribe_error").innerHTML="Oops! Something went wrong while proceeding.";}}});}}
function removeChecks(){var footer_name=document.getElementById("subscribe_name");var footer_email_address=document.getElementById("subscribe_email");if(footer_name.value!=""){footer_name.className="input";}
if(footer_email_address.value!=""&&checkcontact(footer_email_address.value)==true){footer_email_address.className="input";}}
function validateContact(){var errors="";var contact_name=document.getElementById("contact_name");var contact_email_address=document.getElementById("contact_email");var contact_phone=document.getElementById("contact_phone");if(contact_name.value==""){errors+='Please provide your name.';}
else if(contact_email_address.value==""){errors+='Please provide an email address.';}
else if(checkcontact(contact_email_address.value)==false){errors+='Please provide a valid email address.';}
else if(contact_phone.value==""){errors+='Please provide a Phone No.';}
if(errors)
{document.getElementById("error").style.display="block";document.getElementById("error").innerHTML=errors;return false;}
else{$.ajax({type:"POST",url:'process.php',data:$("#contact_form").serialize(),success:function(msg)
{if(msg=='success')
{document.getElementById("error").style.display="none";document.getElementById("contact_name").value="";document.getElementById("contact_email").value="";document.getElementById("contact_phone").value="";document.getElementById("message").value="";$("#contact_form").hide();document.getElementById("success").style.display="block";document.getElementById("success").innerHTML="Thank You! We'll contact you shortly.";}else{document.getElementById("error").style.display="block";document.getElementById("error").innerHTML="Oops! Something went wrong while proceeding.";}}});}};
(function(){"use strict";var slidesWrapper=$('.cd-hero-slider');if(slidesWrapper.length>0){var primaryNav=$('.cd-primary-nav'),sliderNav=$('.cd-slider-nav'),navigationMarker=$('.cd-marker'),slidesNumber=slidesWrapper.children('li').length,visibleSlidePosition=0,autoPlayId,autoPlayDelay=5000000;uploadVideo(slidesWrapper);setAutoplay(slidesWrapper,slidesNumber,autoPlayDelay);primaryNav.on('click',function(event){if($(event.target).is('.cd-primary-nav'))$(this).children('ul').toggleClass('is-visible');});sliderNav.on('click','li',function(event){event.preventDefault();var selectedItem=$(this);if(!selectedItem.hasClass('selected')){var selectedPosition=selectedItem.index(),activePosition=slidesWrapper.find('li.selected').index();if(activePosition<selectedPosition){nextSlide(slidesWrapper.find('.selected'),slidesWrapper,sliderNav,selectedPosition);}else{prevSlide(slidesWrapper.find('.selected'),slidesWrapper,sliderNav,selectedPosition);}
visibleSlidePosition=selectedPosition;updateSliderNavigation(sliderNav,selectedPosition);updateNavigationMarker(navigationMarker,selectedPosition+1);setAutoplay(slidesWrapper,slidesNumber,autoPlayDelay);}});}
function nextSlide(visibleSlide,container,pagination,n){visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){visibleSlide.removeClass('is-moving');});container.children('li').eq(n).addClass('selected from-right').prevAll().addClass('move-left');checkVideo(visibleSlide,container,n);}
function prevSlide(visibleSlide,container,pagination,n){visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){visibleSlide.removeClass('is-moving');});container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');checkVideo(visibleSlide,container,n);}
function updateSliderNavigation(pagination,n){var navigationDot=pagination.find('.selected');navigationDot.removeClass('selected');pagination.find('li').eq(n).addClass('selected');}
function setAutoplay(wrapper,length,delay){if(wrapper.hasClass('autoplay')){clearInterval(autoPlayId);autoPlayId=window.setInterval(function(){autoplaySlider(length)},delay);}}
function autoplaySlider(length){if(visibleSlidePosition<length-1){nextSlide(slidesWrapper.find('.selected'),slidesWrapper,sliderNav,visibleSlidePosition+1);visibleSlidePosition+=1;}else{prevSlide(slidesWrapper.find('.selected'),slidesWrapper,sliderNav,0);visibleSlidePosition=0;}
updateNavigationMarker(navigationMarker,visibleSlidePosition+1);updateSliderNavigation(sliderNav,visibleSlidePosition);}
function uploadVideo(container){container.find('.cd-bg-video-wrapper').each(function(){var videoWrapper=$(this);if(videoWrapper.is(':visible')){var videoUrl=videoWrapper.data('video'),video=$('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');video.appendTo(videoWrapper);if(videoWrapper.parent('.cd-bg-video.selected').length>0)video.get(0).play();}});}
function checkVideo(hiddenSlide,container,n){var hiddenVideo=hiddenSlide.find('video');if(hiddenVideo.length>0)hiddenVideo.get(0).pause();var visibleVideo=container.children('li').eq(n).find('video');if(visibleVideo.length>0)visibleVideo.get(0).play();}
function updateNavigationMarker(marker,n){marker.removeClassPrefix('item').addClass('item-'+n);}
$.fn.removeClassPrefix=function(prefix){this.each(function(i,el){var classes=el.className.split(" ").filter(function(c){return c.lastIndexOf(prefix,0)!==0;});el.className=$.trim(classes.join(" "));});return this;};})(jQuery);