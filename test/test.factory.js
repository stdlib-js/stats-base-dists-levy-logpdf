/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var positiveMean = require( './fixtures/julia/positive_mean.json' );
var negativeMean = require( './fixtures/julia/negative_mean.json' );
var largeVariance = require( './fixtures/julia/large_variance.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var logpdf = factory( 0.0, 1.0 );
	t.equal( typeof logpdf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( 0.0, 1.0 );
	y = logpdf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( NaN, 1.0 );
	y = logpdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( 1.0, NaN );
	y = logpdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( NaN, NaN );
	y = logpdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( NaN, NaN );
	y = logpdf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a finite `mu` and `c`, the function returns a function which returns `-infinity` when provided `+infinity` for `x`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( 0.0, 1.0 );
	y = logpdf( PINF );
	t.equal( y, NINF, 'returns -infinity' );

	t.end();
});

tape( 'if provided a finite `mu` and `c`, the function returns a function which returns `-infinity` when provided `x <= μ`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( 0.0, 1.0 );

	y = logpdf( 0.0 );
	t.equal( y, NINF, 'returns -infinity' );

	y = logpdf( -2.0 );
	t.equal( y, NINF, 'returns -infinity' );

	y = logpdf( NINF );
	t.equal( y, NINF, 'returns -infinity' );

	t.end();
});

tape( 'if provided a nonpositive `c`, the created function always returns `NaN`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( 0.0, 0.0 );

	y = logpdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( 0.0, -1.0 );

	y = logpdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( 0.0, NINF );
	y = logpdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( PINF, NINF );
	y = logpdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( NINF, NINF );
	y = logpdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( NaN, NINF );
	y = logpdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function evaluates the logpdf for `x` given positive `mu`', function test( t ) {
	var expected;
	var logpdf;
	var delta;
	var tol;
	var mu;
	var c;
	var x;
	var y;
	var i;

	expected = positiveMean.expected;
	x = positiveMean.x;
	mu = positiveMean.mu;
	c = positiveMean.c;
	for ( i = 0; i < x.length; i++ ) {
		logpdf = factory( mu[i], c[i] );
		y = logpdf( x[i] );
		if ( expected[i] !== null && !(expected[i] === 0.0 && y < EPS ) ) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'x: '+x[i]+', mu: '+mu[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 3.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});

tape( 'the created function evaluates the logpdf for `x` given negative `mu`', function test( t ) {
	var expected;
	var logpdf;
	var delta;
	var tol;
	var mu;
	var c;
	var x;
	var y;
	var i;

	expected = negativeMean.expected;
	x = negativeMean.x;
	mu = negativeMean.mu;
	c = negativeMean.c;
	for ( i = 0; i < x.length; i++ ) {
		logpdf = factory( mu[i], c[i] );
		y = logpdf( x[i] );
		if ( expected[i] !== null && !(expected[i] === 0.0 && y < EPS ) ) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'x: '+x[i]+', mu: '+mu[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 3.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});

tape( 'the created function evaluates the logpdf for `x` given large variance ( = large `c`)', function test( t ) {
	var expected;
	var logpdf;
	var delta;
	var tol;
	var mu;
	var c;
	var x;
	var y;
	var i;

	expected = largeVariance.expected;
	x = largeVariance.x;
	mu = largeVariance.mu;
	c = largeVariance.c;
	for ( i = 0; i < x.length; i++ ) {
		logpdf = factory( mu[i], c[i] );
		y = logpdf( x[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'x: '+x[i]+', mu: '+mu[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 2.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});
