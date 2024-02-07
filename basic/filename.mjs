// ES 모듈에서는 __filename, __dirname을 사용할 수 없다.

console.log(import.meta.url); // 현재 파일의 경로 (URL 형식)
console.log('__filename은 에러');
console.log(__filename);