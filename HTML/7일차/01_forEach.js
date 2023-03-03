const arr = [1,2,3,4]

arr.forEach((value)=>{
  console.log(value);
}); 
//값을 리턴하지는 않는다.

const log = (value) => {console.log(value);};
arr.forEach(log);

for(let i = 0;i < arr.length;i++){
  console.log(arr[i]);
}