"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=v(function(c,u){
var E=require('@stdlib/array-base-assert-contains/dist').factory,q=require('@stdlib/error-tools-fmtprodmsg/dist'),P=require('@stdlib/regexp-basename-posix/dist'),R=require('@stdlib/regexp-basename-windows/dist'),f=require('@stdlib/assert-is-windows/dist'),n=["posix","win32"],w=E(n);function X(r){if(arguments.length>0&&!w(r))throw new Error(q('0s77p',n.join('", "'),r));return r==="win32"||f?R():P()}u.exports=X
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/regexp-basename-posix/dist').REGEXP,o=require('@stdlib/regexp-basename-windows/dist').REGEXP,G=require('@stdlib/assert-is-windows/dist'),i=t(),I=G?o:s;a(i,"REGEXP",I);a(i,"REGEXP_POSIX",s);a(i,"REGEXP_WIN32",o);module.exports=i;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
