const arr = [4,3,5,1,6,5]
//홀수세기
let cnt = 0;
arr.forEach((item)=>{
  if(item % 2 === 1){
    cnt++;
  }
});
console.log(cnt);