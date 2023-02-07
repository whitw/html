const students = [
  {
    name: "김도훈",
    age: 26,
    address: "경남 창원시"
  },
  {
    name: "김기홍",
    age: 27,
    address: "광주광역시"
  },
  {
    name: "김택우",
    age: 30,
    address: "인천광역시"
  }
]

console.log("forEach (student)=>student")
students.forEach(student=>{
  console.log(student);
});

console.log("map (student)=>student")
students.map((student)=>{
  console.log(student);
})
//결과 배열을 볼 필요가 없다면 둘은 동일한 역할을 한다.
//근데 배열을 볼 필요가 없다면 map을 쓸 필요도 없다.
//결과 배열을 만들고 싶다면 => map
//순회하며 작업만 하고 싶다면 => forEach
console.log("names")
const names = students.map((student)=>{
  return student.name;
});
console.log(names);
//또한 원형 배열을 절대 변경시키지 않는다.
//immutability를 지킬 수 있음.

const agelt30names = students.filter(student=>student.age < 30).map(student=>student.name);
console.log("age lt 30 names");
console.log(agelt30names);