const reverseString = function(string) {
    const array = string.split("");
    let newString = "";
    for (let i = 0; i < array.length; i++) {
        newString += array[(array.length - i)-1];
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
