const person = {
  name:"이자룡",
  dateOfBirth:1993,
  familyMembers:["아빠", "엄마", "할머니"],
  job:"싸피 강사",
  isMarried:true,
};

console.log(person.name);
person.name = "랄랄라";
console.log(person.name);

const arr = [1,2,3];
arr.push(6);
console.log(arr);//[1,2,3,6]

person.hometown = "경남 함양군";
console.log(person.hometown); //경남 함양군

/*
const arr = [1,2,3];
arr = [4,5,6]; //에러 발생
//아예 객체를 새로 바꾸는건 허용되지 않음. 내용물 편집은 가능.
*/