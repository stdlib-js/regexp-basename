<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Basename

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Regular expression][regexp] to capture the last part of a path.

<section class="installation">

## Installation

```bash
npm install @stdlib/regexp-basename
```

</section>

<section class="usage">

## Usage

```javascript
var reBasename = require( '@stdlib/regexp-basename' );
```

#### reBasename( \[platform] )

Returns a [regular expression][regexp] to capture the last part of a path.

```javascript
var RE = reBasename();
// returns <RegExp>

RE = reBasename( 'posix' );
// returns <RegExp>

var base = RE.exec( '/foo/bar/index.js' )[ 1 ];
// returns 'index.js'

RE = reBasename( 'win32' );
// returns <RegExp>

base = RE.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns 'index.js'
```

#### reBasename.REGEXP

[Regular expression][regexp] to capture the last part of a path.

```javascript
var bool = ( reBasename.REGEXP.toString() === reBasename().toString() );
// returns true
```

#### reBasename.REGEXP_POSIX

[Regular expression][@stdlib/regexp/basename-posix] to capture the last part of a [POSIX][posix] path. 

```javascript
var base = reBasename.REGEXP_POSIX.exec( '/foo/bar/index.js' )[ 1 ];
// returns 'index.js'
```

#### reBasename.REGEXP_WIN32

[Regular expression][@stdlib/regexp/basename-windows] to capture the last part of a Windows path. 

```javascript
var base = reBasename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns 'index.js'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The as `REGEXP` exported [regular expression][regexp] is [platform][@stdlib/assert/is-windows]-dependent. If the current process is running on Windows, `REGEXP === REGEXP_WIN32`; otherwise, `REGEXP === REGEXP_POSIX`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reBasename = require( '@stdlib/regexp-basename' );
var RE_BASENAME = reBasename();

// Assuming a POSIX platform...
var base = RE_BASENAME.exec( '/foo/bar/index.js' )[ 1 ];
// returns 'index.js'

base = reBasename.REGEXP_POSIX.exec( '/foo/bar/home.html' )[ 1 ];
// returns 'home.html'

base = reBasename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
// returns 'home.html'
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-basename.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-basename

[test-image]: https://github.com/stdlib-js/regexp-basename/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/regexp-basename/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-basename/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-basename?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-basename
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-basename/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-basename/main/LICENSE

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows

[@stdlib/regexp/basename-posix]: https://github.com/stdlib-js/regexp-basename-posix

[@stdlib/regexp/basename-windows]: https://github.com/stdlib-js/regexp-basename-windows

</section>

<!-- /.links -->