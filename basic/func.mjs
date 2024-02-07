import { odd, even } from "./var.mjs";

function checkOddOrEven(num) {
  if (num % 2) {
    return odd;
  } else {
    return even;
  }
}

export default checkOddOrEven; // checkOddOrEven 함수를 모듈로 만들어 다른 파일에서 사용할 수 있게 함