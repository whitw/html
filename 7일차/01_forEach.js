const arr = [1,2,3,4]

arr.forEach((value)=>{
  console.log(value);
}); 

const log = (value) => {console.log(value);};
arr.forEach(log);

for(let i = 0;i < arr.length;i++){
  console.log(arr[i]);
}