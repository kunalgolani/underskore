# underskore
[Underscore.js](http://underscorejs.org/) and a little more

+ **delta**  `_.delta(initial, final)`
    Returns an object with the values from `final` that are different from the corresponding values in `initial`.

    ``` javascript
    var initial = {a: 1, b: 2, c: 2},
        final = {a: 2, b: 1, c: 2};

    _.delta(initial, final);
    => {a: 2, b: 1}
