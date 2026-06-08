"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(P,o){
var a=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ln-two-pi/dist'),y=require('@stdlib/constants-float64-ninf/dist');function I(e,r,t){var i;return a(e)||a(r)||a(t)||t<=0?NaN:e<=r?y:(i=e-r,.5*(f(t)-p-t/i-3*f(i)))}o.exports=I
});var c=v(function(T,N){
var _=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-ln/dist'),d=require('@stdlib/constants-float64-ln-two-pi/dist'),F=require('@stdlib/constants-float64-ninf/dist');function O(e,r){if(u(e)||u(r)||r<=0)return _(NaN);return t;function t(i){var n;return u(i)?NaN:i<=e?F:(n=i-e,.5*(q(r)-d-r/n-3*q(n)))}}N.exports=O
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=s(),z=c();g(l,"factory",z);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
