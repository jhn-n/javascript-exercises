const fibonacci = function (n) {
    if (n < 0) { return "OOPS"; }
    if (n == 0) { return 0; }
    if (n == 1) { return 1; }
    let a = 0,
        b = 1;
    for (i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
