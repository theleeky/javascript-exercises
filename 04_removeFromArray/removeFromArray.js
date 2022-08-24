const removeFromArray = function(array, ...num) {
    for (let i = 0; i < num.length; i ++) {
        if (array.indexOf(num[i]) === -1){
            continue;
        } else {
            array.splice(array.indexOf(num[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


// loop through numbers
// check if number is in the array
// if 