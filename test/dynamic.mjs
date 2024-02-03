/*
const a = false;

if (a) {
    import './func.mjs';
}

console.log('성공');
*/

// mjs의 경우 다이내믹 임포트를 이와 같이 적용시키면 import가 항상 최상단에 위치해야 하므로 에러 발생


const a = true;

if (a) {
    const m1 = await import('./func.mjs');
    console.log(m1);
    const m2 = await import('./var.mjs');
    console.log(m2);
}

// import() 함수는 Promise를 반환한다. 따라서 top level await를 사용하여 해당 모듈이 불러와지길 기다릴 수 있다.
// mjs의 경우는 이와 같은 방식으로 다이내믹 임포트를 사용할 수 있다.