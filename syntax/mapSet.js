// Map

const m = new Map();

m.set('a', 'b'); // set(key, value)로 Map에 속성 추가
m.set(3, 'c'); // 문자열이 아닌 값을 키로 사용 가능
const d = {};
m.set(d, 'e'); // 객체도 키로 사용 가능

m.get('d'); // get(key)로 Map의 속성 값 가져오기
console.log(m.get(d)); // e

m.size; // size로 Map의 속성 개수 가져오기
console.log(m.size); // 3

for (const [key, value] of m) {
  console.log(key, value); // 'a', 'b', 3, 'c', {}, 'e'
} // 속성 간의 순서도 보장

m.forEach((value, key) => {
  console.log(key, value); // 'a', 'b', 3, 'c', {}, 'e'
}); // forEach도 사용 가능

m.has(d); // has(key)로 Map에 특정 속성이 있는지 확인
console.log(m.has(d)); // true

m.delete(d); // delete(key)로 Map의 속성 삭제
m.clear(); // clear()로 Map의 모든 속성 삭제
console.log(m.size); // 0

// Set

const s = new Set();

s.add(false); // add(value)로 Set에 속성 추가
s.add(1);
s.add('1');
s.add(1); // 중복된 값은 추가되지 않음
s.add(2);

console.log(s.size); // 중복된 값은 추가되지 않으므로 4

s.has(1); // has(value)로 Set에 특정 속성이 있는지 확인
console.log(s.has(1)); // true

for (const value of s) {
  console.log(value); // false, 1, '1', 2
} // 속성 간의 순서도 보장

s.forEach((value) => {
  console.log(value); // false, 1, '1', 2
}); // forEach도 사용 가능

s.delete(1); // delete(value)로 Set의 속성 삭제
s.clear(); // clear()로 Set의 모든 속성 삭제
console.log(s.size); // 0


// 기존 배열에서 중복을 제거하기 위한 수단으로 Set을 사용할 수 있음

const arr = [1, 3, 2, 7, 2, 6, 3, 5];

const ns = new Set(arr); // 배열을 Set으로 변환
const result = Array.from(ns); // Set을 배열로 변환
console.log(result); // 1, 3, 2, 7, 6, 5