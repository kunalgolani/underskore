# underskore

[![GitHub version][github-img]][github-url]
[![NPM Version][npm-img]][npm-url]
[![Coverage Status][coveralls-img]][coveralls-url]

[![Deps][deps-img]][deps-url]
[![Dev Deps][devDeps-img]][deps-url]
[![Peer Deps][peerDeps-img]][deps-url]

[![NPM Downloads][downloads-img]][npm-url]
[![GitHub stars][stars-img]][github-url]
[![GitHub forks][forks-img]][github-url]
[![GitHub issues][issues-img]][github-url]

[Underscore.js](http://underscorejs.org/) and a little more

+ **delta**  `_.delta(object, reference)`
    Returns an object with the values from `object` that are different from the corresponding values in `reference`.

    ``` javascript
    var reference = {a: 1, b: 2, c: 2},
        object = {a: 2, b: 1, c: 2};

    _.delta(object, reference);
    => {a: 2, b: 1}
    ```

After installing dev dependencies, you can run tests with `npm test` and generate coverage reports with `npm run coverage`.

Feel free to fork, extend and contribute. :)

[npm-img]: http://img.shields.io/npm/v/underskore.svg
[downloads-img]: http://img.shields.io/npm/dm/underskore.svg
[npm-url]: https://www.npmjs.org/package/underskore
[github-img]: https://badge.fury.io/gh/kunalgolani%2Funderskore.svg
[stars-img]: https://img.shields.io/github/stars/kunalgolani/underskore.svg
[forks-img]: https://img.shields.io/github/forks/kunalgolani/underskore.svg
[issues-img]: https://img.shields.io/github/issues-raw/kunalgolani/underskore.svg
[github-url]: https://github.com/kunalgolani/underskore
[coveralls-img]: https://coveralls.io/repos/kunalgolani/underskore/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/kunalgolani/underskore?branch=master
[deps-img]: https://img.shields.io/david/kunalgolani/underskore.svg
[devDeps-img]: https://img.shields.io/david/dev/kunalgolani/underskore.svg
[peerDeps-img]: https://img.shields.io/david/peer/kunalgolani/underskore.svg
[deps-url]: https://github.com/kunalgolani/underskore/blob/master/package.json