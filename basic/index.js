const { odd, even } = require('./var'); // require 함수를 사용하여 var.js 파일을 불러옴
const checkNumber = require('./func'); // require 함수를 사용하여 func.js 파일을 불러옴

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수면
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10)); // even
console.log(checkStringOddOrEven('hello')); // odd