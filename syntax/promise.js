// promise 객체의 활용법

// ES2015부터는 자바스크립트와 노드의 API들이 콜백 대신 프로미스 기반으로 재구성

const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});

// 다른 코드가 들어갈 수 있음

promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error); // 실패(reject)한 경우 실행
    })
    .finally(() => {
        console.log('무조건'); // 끝나고 무조건 실행
    });

// then이나 catch에서 다시 다른 then이나 catch를 붙일 수 있음

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error(error);
    });

// 프로미스 여러 개를 한 번에 실행할 수 있음

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result); // ['성공1', '성공2']
    })
    .catch((error) => {
        console.error(error);
    }); // 프로미스 중 하나라도 성공하면 실행됨

// 프로미스 여러 개를 순차적으로 실행할 수 있음

const promise3 = Promise.resolve('성공3');
const promise4 = Promise.reject('실패4');
const promise5 = Promise.resolve('성공5');
Promise.allSettled([promise3, promise4, promise])
    .then((result) => {
        console.log(result);
/* 
[
  { status: 'fulfilled', value: '성공3' },
  { status: 'rejected', reason: '실패4' },
  { status: 'fulfilled', value: '성공5' }
] 
*/
    })
    .catch((error) => {
        console.error(error);
    }); // 모든 프로미스가 끝나야 실행됨