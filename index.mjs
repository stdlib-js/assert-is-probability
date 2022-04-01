// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";var t=r.isPrimitive;var i=function(e){return t(e)&&e>=0&&e<=1},n=r.isObject;var s=function(e){return n(e)&&e.valueOf()>=0&&e.valueOf()<=1},a=i,m=s;var u=e,d=function(e){return a(e)||m(e)},o=i,v=s;u(d,"isPrimitive",o),u(d,"isObject",v);var l=d;export{l as default,v as isObject,o as isPrimitive};
//# sourceMappingURL=index.mjs.map
