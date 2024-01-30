// 옵셔널 체이닝 연산자의 사용법

// 옵셔널 체이닝 연산자는 null이나 undefined의 속성을 조회하는 경우 에러가 발생하는 것을 막음

const a = {};
a.b; // a는 객체이므로 문제 없음

const c = null;
try {
  c.d; // c는 null이므로 에러 발생
} catch (e) {
  console.log(e); // TypeError: Cannot read properties of null (reading 'd')
}
c?.d; // 문제 없음

try {
    c.f();
} catch (e) {
    console.log(e); // TypeError: Cannot read properties of null (reading 'f')
}
c?.f(); // 문제 없음

try {
    c[0];
} catch (e) {
    console.log(e); // TypeError: Cannot read properties of null (reading '0')
}
c?.[0]; // 문제 없음