# underskore
[Underscore.js](http://underscorejs.org/) and a little more

+ **delta**  `_.delta(object, source)`
    Returns an object with the values from `object` that are different from the corresponding values in `source`.

    ``` javascript
    var o1 = {a: 1, b: 2, c: 2},
        o2 = {a: 2, b: 1, c: 2};

    _.delta(o1, o2);
    => {a: 1, b: 2}
