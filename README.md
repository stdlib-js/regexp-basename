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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reBasename

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Regular expression][regexp] to capture the last part of a path.

<section class="installation">

## Installation

```bash
npm install @stdlib/regexp-basename
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

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

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp-basename-posix`][@stdlib/regexp/basename-posix]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture the last part of a POSIX path.</span>
-   <span class="package-name">[`@stdlib/regexp-basename-windows`][@stdlib/regexp/basename-windows]</span><span class="delimiter">: </span><span class="description">return a regular expression to capture the last part of a Windows path.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-basename.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-basename

[test-image]: https://github.com/stdlib-js/regexp-basename/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/regexp-basename/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-basename/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-basename?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-basename.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-basename/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-basename/tree/deno
[deno-readme]: https://github.com/stdlib-js/regexp-basename/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/regexp-basename/tree/umd
[umd-readme]: https://github.com/stdlib-js/regexp-basename/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/regexp-basename/tree/esm
[esm-readme]: https://github.com/stdlib-js/regexp-basename/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/regexp-basename/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-basename/main/LICENSE

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

[@stdlib/assert/is-windows]: https://github.com/stdlib-js/assert-is-windows

<!-- <related-links> -->

[@stdlib/regexp/basename-posix]: https://github.com/stdlib-js/regexp-basename-posix

[@stdlib/regexp/basename-windows]: https://github.com/stdlib-js/regexp-basename-windows

<!-- </related-links> -->

</section>

<!-- /.links -->
