"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=v(function(f,u){
var E=require('@stdlib/assert-contains/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),P=require('@stdlib/regexp-basename-posix/dist'),R=require('@stdlib/regexp-basename-windows/dist'),w=require('@stdlib/assert-is-windows/dist'),a=["posix","win32"];function X(r){if(arguments.length>0&&!E(a,r))throw new Error(q('0s77p',a.join('", "'),r));return r==="win32"||w?R():P()}u.exports=X
});var n=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),t=require('@stdlib/regexp-basename-posix/dist').REGEXP,o=require('@stdlib/regexp-basename-windows/dist').REGEXP,G=require('@stdlib/assert-is-windows/dist'),i=s(),I=G?o:t;n(i,"REGEXP",I);n(i,"REGEXP_POSIX",t);n(i,"REGEXP_WIN32",o);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
