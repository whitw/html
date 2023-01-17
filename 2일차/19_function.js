function addOne(n) {
  console.log("hi");
  return n + 1;
}

console.log(addOne(3));

console.log(addTwo(3));
function addTwo(n) {
  return n + 2;
}
//선언이 실행보다 뒤에 올 수도 있음.
//그러나 쓰지 마라.

function numToString(n) {
  return String(n);
}

function stringToNum(s) {
  return Number(s);
}

console.log(typeof numToString(42));
console.log(typeof stringToNum("42"));

const sampleFunc = function () {
  //이름없는 함수; lambda expression
  return 1;
};
const result = sampleFunc;
console.log(result());
//함수 표현식. 어라 데자뷰

console.log(typeof sampleFunc);
