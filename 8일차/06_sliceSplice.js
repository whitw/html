const names = ["jony", "sylvie", "nana"]

//slice
const newNames = names.slice(1, 2);
  //names[1:2]
console.log(newNames);
newNames[0] += 't';
console.log(newNames);
console.log(names); //원본은 훼손되지 않음. 복사본.
//splice

const newNames2 = names.splice(1, 2);
console.log(newNames2);
console.log(names);
//원본배열을 손상시킴
//마지막 인덱스 포함