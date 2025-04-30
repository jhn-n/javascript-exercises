const palindromes = function (s) {
    a = s.toLowerCase().split("").filter(c => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'));
    return a.join("") === a.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
