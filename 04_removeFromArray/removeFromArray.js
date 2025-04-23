const removeFromArray = function (array, ...args) {
    let ans = []
    for (let item of array) {
        let includeItem = true;
        for (let arg of args) {
            if (item === arg) {
                includeItem = false;
                break;
            }
        }
        if (includeItem) ans.push(item);
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
