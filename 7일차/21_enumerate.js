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

const newStudentInfo = studentInfo.map((student, idx) => {
  console.log(student, idx);
  return student.name;
});

console.log(newStudentInfo);