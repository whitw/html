const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.filter(i=>i%2==0).map(i=>i*10));
console.log(arr.reduce((prev, cur) =>{
  if(cur % 2 === 0){
    prev.push(cur);
    return prev;
  }
}, []));