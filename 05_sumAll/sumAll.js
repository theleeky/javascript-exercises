const sumAll = function(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        return "ERROR"
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } 

    const lower = (num1 > num2) ? num2 : num1;
    const upper = (num1 > num2) ? num1 : num2;
    let final = 0;
    
    for (let i = lower; i <= upper; i++) {
        final += i;
    }

    return final
}

// Do not edit below this line
module.exports = sumAll;
