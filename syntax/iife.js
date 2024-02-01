// 즉시실행함수 활용법

// 1-1. 기본 사용법
(function() {
    var a = 3;
    var b = 5;
    return a * b;
})();

// 1-2. 화살표 함수로 변환
(() => {
    const a = 3;
    const b = 5;
    return a * b;
})();

// 2-1. 함수 이름 붙이기
const result = (function() {
    const a = 3;
    const b = 5;
    return a * b;
})();
console.log(result); // 15

// 2-2. 화살표 함수로 변환
const result2 = (() => {
    const a = 3;
    const b = 5;
    return a * b;
})();
console.log(result2); // 15

// 3-1. 즉시 실행함수를 사용한 클로저
const add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    };
})();
console.log(add()); // 1
console.log(add()); // 2
//console.log(counter); // ReferenceError: counter is not defined

// 3-2. 화살표 함수로 변환
const add2 = (() => {
    let counter = 0;
    return () => {
        return ++counter;
    };
})();
console.log(add2()); // 1
console.log(add2()); // 2
//console.log(counter); // ReferenceError: counter is not defined

// 4-1. 즉시 실행함수를 사용한 초기화
const person = (function() {
    let name = 'geonhwi';
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        },
    };
})();
console.log(person.getName()); // geonhwi
person.setName('lyn');
console.log(person.getName()); // lyn

// 4-2. 화살표 함수로 변환
const person2 = (() => {
    let name = 'geonhwi';
    return {
        getName: () => {
            return name;
        },
        setName: newName => {
            name = newName;
        },
    };
})();
console.log(person2.getName()); // geonhwi
person2.setName('lyn');
console.log(person2.getName()); // lyn

// 5-1. 즉시 실행함수를 사용한 모듈화
const module2 = (function() {
    let privateVariable = 'private';
    return {
        publicVariable: 'public',
        getPrivateVariable: function() {
            return privateVariable;
        },
        setPrivateVariable: function(value) {
            privateVariable = value;
        },
    };
})();
console.log(module2.publicVariable); // public
console.log(module2.getPrivateVariable()); // private
module2.setPrivateVariable('changed');
console.log(module2.getPrivateVariable()); // changed
module2.publicVariable = 'changed';
console.log(module2.publicVariable); // changed

// 5-2. 화살표 함수로 변환
const module3 = (() => {
    let privateVariable = 'private';
    return {
        publicVariable: 'public',
        getPrivateVariable: () => {
            return privateVariable;
        },
        setPrivateVariable: value => {
            privateVariable = value;
        },
    };
})();
console.log(module3.publicVariable); // public
console.log(module3.getPrivateVariable()); // private
module3.setPrivateVariable('changed');
console.log(module3.getPrivateVariable()); // changed
module3.publicVariable = 'changed';
console.log(module3.publicVariable); // changed