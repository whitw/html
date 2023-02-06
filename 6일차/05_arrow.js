//함수 표현식
const a = function(){
  console.log("aa");
}

const b = () => console.log("bb");

const c = () => {
  console.log("cc");
};

const add = (a, b)=>{return a+b};

const add2 = (a, b)=>a+b; //return 생략 가능

a();
b();
c();
console.log(add(3, 4));
console.log(add(7, 12));