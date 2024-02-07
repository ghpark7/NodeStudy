const a = false;

if (a) {
    require('./func');
}

console.log('성공')

// 이 경우 a 가 false 이므로 require('./func') 가 실행되지 않는다. 따라서 '성공'이 출력된다.
// 이처럼 조건부로 모듈을 불러오는 것을 다이내믹 임포트라 한다. 다이내믹 임포트는 import 구문을 사용하는 것이 아니라 require 함수를 사용한다.