const { odd, even } = require('./var'); // require 함수를 사용하여 var.js 파일을 불러옴

function checkOddOrEven(num) {
    if (num % 2) { // 홀수면
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven; // checkOddOrEven 함수를 모듈로 만들어 다른 파일에서 사용할 수 있게 함