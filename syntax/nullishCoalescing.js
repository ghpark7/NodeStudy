// 널 병합 연산자의 사용법

const a = 0;
const b = a || 3; // || 연산자는 falsy 값이면 뒤의 값을 반환
console.log(b); // 3

const c = 0;
const d = c ?? 3; // ?? 연산자는 null과 undefined일 경우에만 뒤의 값을 반환
console.log(d); // 0

const e = null;
const f = e ?? 3;
console.log(f); // 3

const g = undefined;
const h = g ?? 3;
console.log(h); // 3