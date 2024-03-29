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
var proxyquire = require( 'proxyquire' );
var reBasename = require( './../lib' );


// VARIABLES //

proxyquire = proxyquire.noPreserveCache();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reBasename, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to main export is a platform-dependent regular expression for POSIX or Windows paths', function test( t ) {
	t.strictEqual( reBasename.REGEXP instanceof RegExp, true, '`REGEXP` export is a regular expression' );
	t.end();
});

tape( 'attached to main export is a regular expression for POSIX paths', function test( t ) {
	t.strictEqual( reBasename.REGEXP_POSIX instanceof RegExp, true, '`REGEXP_POSIX` export is a regular expression' );
	t.end();
});

tape( 'attached to main export is a regular expression for Windows paths', function test( t ) {
	t.strictEqual( reBasename.REGEXP_WIN32 instanceof RegExp, true, '`REGEXP_WIN32` export is a regular expression' );
	t.end();
});

tape( 'the `REGEXP` property is a POSIX specific regular expression if on a POSIX platform', function test( t ) {
	var main;

	main = proxyquire( './../lib', {
		'@stdlib/assert-is-windows': false,
		'./main.js': function noop() {}
	});

	t.strictEqual( main.REGEXP.toString(), main.REGEXP_POSIX.toString(), '`REGEXP` property is `posix` regexp: '+reBasename.REGEXP.toString() );
	t.end();
});

tape( 'the `REGEXP` property is a Windows specific regular expression if on a Windows platform', function test( t ) {
	var main;

	main = proxyquire( './../lib', {
		'@stdlib/assert-is-windows': true,
		'./main.js': function noop() {}
	});

	t.strictEqual( main.REGEXP.toString(), main.REGEXP_WIN32.toString(), '`REGEXP` property is `win32` regexp: '+reBasename.REGEXP.toString() );
	t.end();
});

tape( 'the `REGEXP_POSIX` regular expression captures the last part of a POSIX path', function test( t ) {
	var expected;
	var values;
	var base;
	var i;

	values = [
		'index.js',
		'/foo/bar/home.html'
	];

	expected = [
		'index.js',
		'home.html'
	];

	for ( i = 0; i < values.length; i++ ) {
		base = reBasename.REGEXP_POSIX.exec( values[ i ] )[ 1 ];
		t.strictEqual( base, expected[ i ], values[ i ] );
	}
	t.end();
});

tape( 'the `REGEXP_WIN32` regular expression captures the last part of a Windows path', function test( t ) {
	var expected;
	var values;
	var base;
	var i;

	values = [
		'index.js',
		'C:\\foo\\bar\\home.html'
	];

	expected = [
		'index.js',
		'home.html'
	];

	for ( i = 0; i < values.length; i++ ) {
		base = reBasename.REGEXP_WIN32.exec( values[ i ] )[ 1 ];
		t.strictEqual( base, expected[ i ], values[ i ] );
	}
	t.end();
});
