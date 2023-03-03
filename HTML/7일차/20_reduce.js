const datas = [1,2,3,4,5];
const accResult = datas.reduce((acc, cur) => {
	console.log(acc, cur);
	return acc + cur;
}, 7);
console.log(accResult);

const studentInfo = [
  {
    name:"jony",
    age: 30,
  },
  {
    name:"sylvie",
    age: 30,
  },
  {
    name:"nana",
    age: 1,
  },
]

const names = studentInfo.map((student)=>{
  return student.name;
});
const names2 = studentInfo.reduce((acc, student)=>{
  acc.push(student.name);
  return acc;
}, []);
console.log(names2);

const age30 = studentInfo.reduce((acc, student)=>{
  if(student.age === 30){
    acc.push(student.name);
  }
  return acc;
}, [])
console.log(age30);