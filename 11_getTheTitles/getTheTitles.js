const getTheTitles = function(array) {
    let output = [];
    for (let i = 0; i < array.length; i++){
        output[i] = array[i].title;
    }
    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
