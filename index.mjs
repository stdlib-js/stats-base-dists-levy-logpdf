// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two-pi@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var d=s,m=n,o=e,a=r;var l=i,f=s,j=n,p=e,c=r;var h=function(t,s,n){var e;return d(t)||d(s)||d(n)||n<=0?NaN:t<=s?a:(e=t-s,.5*(m(n)-o-n/e-3*m(e)))},u=function(t,s){return f(t)||f(s)||s<=0?l(NaN):function(n){var e;if(f(n))return NaN;if(n<=t)return c;return e=n-t,.5*(j(s)-p-s/e-3*j(e))}};t(h,"factory",u);var v=h;export{v as default,u as factory};
//# sourceMappingURL=index.mjs.map
