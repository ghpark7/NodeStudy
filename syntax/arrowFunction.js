// 화살표 함수 사용법

const x = 1;
const y = 2;
const z = false;

// 이하 함수는 모두 같은 의미
function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y; // 중괄호 생략 가능

const add4 = (x, y) => (x + y); // 보기 좋게 소괄호 사용 가능

// 이하 함수는 모두 같은 의미
function not1(z) {
    return !z;
}

const not2 = z => !z; // 매개변수가 하나일 때는 괄호 생략 가능

console.log(add1(x, y)); // 3
console.log(add2(x, y)); // 3
console.log(add3(x, y)); // 3
console.log(add4(x, y)); // 3
console.log(not1(z)); // true 
console.log(not2(z)); // true

// this 바인딩 방식
const relationship1 = {
    name: 'geonhwi',
    friends: ['lyn', 'juhwan', 'seongho'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship1.logFriends(); // geonhwi lyn, geonhwi juhwan, geonhwi seongho