function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const number = Math.floor(Math.random() * (max - min) + min)
    console.log(number)
}
getRandomInt(4,20)

Math.floor() 
//returns the largest integer less than or equal to a given number. It's not rounding the number. If there is a floating point it will always output something less than. 

console.log(Math.floor(45.95))

function decimalAdjust(type, value, exp) { // typeof returns string of type. +Unary operator that will try to convert the operand into a number. 
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value)
    }
    value = +value //turning value into a number
    exp = +exp //turning exponent into a number
    if (isNaN(value) /*checking to see value is a number*/ || !(typeof exp === 'number' && exp % 1 === 0)) {
        return Nan
    }
}