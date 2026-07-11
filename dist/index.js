"use strict";var e=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var t=e(function(d,b){
var q=require('@stdlib/assert-is-number/dist').isPrimitive;function m(i){return q(i)&&i>=0&&i<=1}b.exports=m
});var s=e(function(l,c){
var O=require('@stdlib/assert-is-number/dist').isObject;function P(i){return O(i)&&i.valueOf()>=0&&i.valueOf()<=1}c.exports=P
});var a=e(function(R,n){
var f=t(),j=s();function p(i){return f(i)||j(i)}n.exports=p
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),x=t(),y=s();o(u,"isPrimitive",x);o(u,"isObject",y);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
