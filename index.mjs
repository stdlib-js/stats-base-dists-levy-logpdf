// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two-pi@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function d(t,r,d){var m;return s(t)||s(r)||s(d)||d<=0?NaN:t<=r?i:(m=t-r,.5*(n(d)-e-d/m-3*n(m)))}function m(t,d){return s(t)||s(d)||d<=0?r(NaN):function(r){var m;if(s(r))return NaN;if(r<=t)return i;return m=r-t,.5*(n(d)-e-d/m-3*n(m))}}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
