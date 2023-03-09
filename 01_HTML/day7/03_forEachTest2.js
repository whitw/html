const arr = [-5, 3, 4, 2, -7, -2, 7];
const pplus = [];
const mminus = [];

arr.forEach((item)=>{
  if(item >= 0){
    pplus.push(item)
  }
  else{
    mminus.push(item);
  }
});
console.log(pplus);
console.log(mminus);