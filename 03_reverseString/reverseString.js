const reverseString = function(s) {
    r = "";
    for (i=s.length - 1; i >= 0; i--) {
        r += s.at(i);
    }
    return r;
};

// Do not edit below this line
module.exports = reverseString;
