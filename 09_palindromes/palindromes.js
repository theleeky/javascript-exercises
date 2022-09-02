const palindromes = function (str) {
    let rawStr = str.split('').filter((char) => /[a-zA-Z]/.test(char)).join('');
    if (rawStr.toLowerCase() === rawStr.split("").reverse().join("").toLowerCase()) {
        return true;
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
