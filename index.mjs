// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e,{REGEXP as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-basename-posix@esm/index.mjs";export{REGEXP as REGEXP_POSIX}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-basename-posix@esm/index.mjs";import n,{REGEXP as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-basename-windows@esm/index.mjs";export{REGEXP as REGEXP_WIN32}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-basename-windows@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var m=["posix","win32"];function p(s){if(arguments.length>0&&!d(m,s))throw new Error(o('invalid argument. Must be one of the following: "%s". Value: `%s`.',m.join('", "'),s));return"win32"===s||r?n():e()}s(p,"REGEXP",r?i:t),s(p,"REGEXP_POSIX",t),s(p,"REGEXP_WIN32",i);export{p as default};
//# sourceMappingURL=index.mjs.map
