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