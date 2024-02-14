// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,b=/(\..*[^0])0*e/;function y(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,m,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,h,"e-0$1"),e.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,S=isNaN,j=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,o,a,s,l,f,p;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if(c(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function N(e){var r,t;if(!V(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var $=Object.prototype,A=$.toString,F=$.__defineGetter__,R=$.__defineSetter__,G=$.__lookupGetter__,X=$.__lookupSetter__;var L=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||X.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};function M(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(){return/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}var C=/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;function z(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/}M(Z,"REGEXP",C);var W=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/;function D(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}M(z,"REGEXP",W);var U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Y(){throw new Error("setTimeout has not been defined")}function q(){throw new Error("clearTimeout has not been defined")}var B=Y,H=q;function J(e){if(B===setTimeout)return setTimeout(e,0);if((B===Y||!B)&&setTimeout)return B=setTimeout,setTimeout(e,0);try{return B(e,0)}catch(r){try{return B.call(null,e,0)}catch(r){return B.call(this,e,0)}}}"function"==typeof U.setTimeout&&(B=setTimeout),"function"==typeof U.clearTimeout&&(H=clearTimeout);var K,Q=[],ee=!1,re=-1;function te(){ee&&K&&(ee=!1,K.length?Q=K.concat(Q):re=-1,Q.length&&ne())}function ne(){if(!ee){var e=J(te);ee=!0;for(var r=Q.length;r;){for(K=Q,Q=[];++re<r;)K&&K[re].run();re=-1,r=Q.length}K=null,ee=!1,function(e){if(H===clearTimeout)return clearTimeout(e);if((H===q||!H)&&clearTimeout)return H=clearTimeout,clearTimeout(e);try{H(e)}catch(r){try{return H.call(null,e)}catch(r){return H.call(this,e)}}}(e)}}function ie(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Q.push(new oe(e,r)),1!==Q.length||ee||J(ne)}function oe(e,r){this.fun=e,this.array=r}oe.prototype.run=function(){this.fun.apply(null,this.array)};var ae={},ue=[],ce={},se={},le={};function fe(){}var pe=fe,ge=fe,he=fe,de=fe,ve=fe,we=fe,me=fe;function be(e){throw new Error("process.binding is not supported")}function ye(){return"/"}function Ee(e){throw new Error("process.chdir is not supported")}function _e(){return 0}var Te=U.performance||{},Se=Te.now||Te.mozNow||Te.msNow||Te.oNow||Te.webkitNow||function(){return(new Date).getTime()};function je(e){var r=.001*Se.call(Te),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var ke=new Date;function Oe(){return(new Date-ke)/1e3}var Pe={nextTick:ie,title:"browser",browser:true,env:ae,argv:ue,version:"",versions:ce,on:pe,addListener:ge,once:he,off:de,removeListener:ve,removeAllListeners:we,emit:me,binding:be,cwd:ye,chdir:Ee,umask:_e,hrtime:je,platform:"browser",release:se,config:le,uptime:Oe},xe="win32"===D(Object.freeze({__proto__:null,addListener:ge,argv:ue,binding:be,browser:true,chdir:Ee,config:le,cwd:ye,default:Pe,emit:me,env:ae,hrtime:je,nextTick:ie,off:de,on:pe,once:he,platform:"browser",release:se,removeAllListeners:we,removeListener:ve,title:"browser",umask:_e,uptime:Oe,version:"",versions:ce})).platform,Ie=Math.floor;function Ve(e){return Ie(e)===e}function Ne(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ve(e.length)&&e.length>=0&&e.length<=9007199254740991}function $e(e){return"number"==typeof e}var Ae="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Fe(){return Ae&&"symbol"==typeof Symbol.toStringTag}var Re=Object.prototype.toString;var Ge=Object.prototype.hasOwnProperty;var Xe="function"==typeof Symbol?Symbol:void 0,Le="function"==typeof Xe?Xe.toStringTag:"";var Me=Fe()?function(e){var r,t,n,i,o;if(null==e)return Re.call(e);t=e[Le],o=Le,r=null!=(i=e)&&Ge.call(i,o);try{e[Le]=void 0}catch(r){return Re.call(e)}return n=Re.call(e),r?e[Le]=t:delete e[Le],n}:function(e){return Re.call(e)},Ze=Number,Ce=Ze.prototype.toString;var ze=Fe();function We(e){return"object"==typeof e&&(e instanceof Ze||(ze?function(e){try{return Ce.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Me(e)))}function De(e){return $e(e)||We(e)}M(De,"isPrimitive",$e),M(De,"isObject",We);var Ue=Number.POSITIVE_INFINITY,Ye=Ze.NEGATIVE_INFINITY;function qe(e){return e<Ue&&e>Ye&&Ve(e)}function Be(e){return $e(e)&&qe(e)}function He(e){return We(e)&&qe(e.valueOf())}function Je(e){return Be(e)||He(e)}function Ke(e){return"string"==typeof e}M(Je,"isPrimitive",Be),M(Je,"isObject",He);var Qe=String.prototype.valueOf;var er=Fe();function rr(e){return"object"==typeof e&&(e instanceof String||(er?function(e){try{return Qe.call(e),!0}catch(e){return!1}}(e):"[object String]"===Me(e)))}function tr(e){return Ke(e)||rr(e)}function nr(e){return e!=e}function ir(e){return $e(e)&&nr(e)}function or(e){return We(e)&&nr(e.valueOf())}function ar(e){return ir(e)||or(e)}function ur(e,r,t){var n,i,o;if(!Ne(e)&&!Ke(e))throw new TypeError(N("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!Be(t))throw new TypeError(N("invalid argument. Third argument must be an integer. Value: `%s`.",t));(i=t)<0&&(i=0)}else i=0;if(Ke(e)){if(!Ke(r))throw new TypeError(N("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,i)}if(n=e.length,ir(r)){for(o=i;o<n;o++)if(ir(e[o]))return!0;return!1}for(o=i;o<n;o++)if(e[o]===r)return!0;return!1}M(tr,"isPrimitive",Ke),M(tr,"isObject",rr),M(ar,"isPrimitive",ir),M(ar,"isObject",or);var cr=["posix","win32"];function sr(e){if(arguments.length>0&&!ur(cr,e))throw new Error(N('invalid argument. Must be one of the following: "%s". Value: `%s`.',cr.join('", "'),e));return"win32"===e||xe?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(?:\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)((?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/}var lr=xe?W:C;M(sr,"REGEXP",lr),M(sr,"REGEXP_POSIX",C),M(sr,"REGEXP_WIN32",W);export{lr as REGEXP,C as REGEXP_POSIX,W as REGEXP_WIN32,sr as default};
//# sourceMappingURL=mod.js.map
