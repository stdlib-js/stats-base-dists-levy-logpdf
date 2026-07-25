"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=v(function(P,o){
var a=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ln-two-pi/dist'),y=require('@stdlib/constants-float64-ninf/dist');function I(e,r,i){var t;return a(e)||a(r)||a(i)||i<=0?NaN:e<=r?y:(t=e-r,.5*(f(i)-p-i/t-3*f(t)))}o.exports=I
});var c=v(function(T,N){
var _=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-ln/dist'),d=require('@stdlib/constants-float64-ln-two-pi/dist'),F=require('@stdlib/constants-float64-ninf/dist');function O(e,r){if(u(e)||u(r)||r<=0)return _(NaN);return i;function i(t){var n;return u(t)?NaN:t<=e?F:(n=t-e,.5*(q(r)-d-r/n-3*q(n)))}}N.exports=O
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=s(),z=c();g(l,"factory",z);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
