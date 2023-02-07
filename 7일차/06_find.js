const array = [1,2,3,4,5];
const inventory = [
  {name:'A', quantity:1},
  {name:'B', quantity:2},
  {name:'C', quantity:3},
]

//find -> 해당 값을 가져옴
//여러개가 조건에 맞다면 첫 값만
console.log(array.find(element=>element > 4));
console.log(inventory.find(li=>li.name==='B'));


//findIndex -> 해당 idx를 가져옴
console.log(inventory.findIndex(li=>li.name==='A'));
