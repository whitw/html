/*
const a;
a = 1; //error

const a = 1;
a = 2; //error

const a = 1;
const a = 2; //error
*/

const a = 1;
console.log(a);

let b = 1;
b = 2;
console.log(b);
//for문에서 쓰기 좋겠다.

console.log(typeof 1);
//number
console.log(typeof 3.4);
//number

console.log(typeof "a");
//string, "s"소문자 주의, "" 사용.
console.log(typeof "abc");
//string

console.log(typeof true);
//boolean, "tf" 소문자 주의.
console.log(typeof false);
//boolean

console.log(typeof null);
//object

console.log(typeof undefined);
//undefined

console.log(typeof [1, 'a', true]);
const arr = [1, 'a', true];

console.log(arr[0]); // 1
console.log(arr[1]); //'a'
console.log(arr[4]); //undefined ...??

