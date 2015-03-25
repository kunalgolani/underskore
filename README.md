# underskore

[![Coverage Status](https://coveralls.io/repos/kunalgolani/underskore/badge.svg?branch=master)](https://coveralls.io/r/kunalgolani/underskore?branch=master)

[Underscore.js](http://underscorejs.org/) and a little more

+ **delta**  `_.delta(object, reference)`
    Returns an object with the values from `object` that are different from the corresponding values in `reference`.

    ``` javascript
    var reference = {a: 1, b: 2, c: 2},
        object = {a: 2, b: 1, c: 2};

    _.delta(object, reference);
    => {a: 2, b: 1}
    ```

Feel free to fork, extend and contribute. :)