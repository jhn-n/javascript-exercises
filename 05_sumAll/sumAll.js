const sumAll = function(x,y) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || x<=0 || y<=0) {
        return "ERROR";
    }
    if (x>y) {
        let temp = y;
        y = x;
        x = temp;
    }

    let z = 0;
    for (let i=x; i<=y; i++) {
        z += i;
    }
    return z;
};

// Do not edit below this line
module.exports = sumAll;
