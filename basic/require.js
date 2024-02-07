require('./var');

console.log(require); // require 함수의 정보
console.log(require.cache); // 불러온 파일들의 캐시 정보
console.log(require.main); // 노드 실행 시 첫 모듈의 정보
console.log(require.main === module); // true
console.log(require.main.filename); // 노드 실행 시 첫 모듈의 파일명
console.log(require.extensions); // 모듈 파일명 확장자 목록