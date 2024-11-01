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

var reBasename = require( './../lib' );
var RE_BASENAME = reBasename();

// Assuming a POSIX platform...
var base = RE_BASENAME.exec( '/foo/bar/index.js' )[ 1 ];
console.log( base );
// => 'index.js'

base = reBasename.REGEXP_POSIX.exec( '/foo/bar/home.html' )[ 1 ];
console.log( base );
// => 'home.html'

base = reBasename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
console.log( base );
// => 'home.html'
