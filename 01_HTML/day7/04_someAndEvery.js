const array = [1,2,3,4,5];

//하나의 flag와 for문으로 할 수 있는 것들을 helper로

//some: 하나만 조건을 만족해도 true
const result1 = array.some(item => item < 0);
const result2 = array.some(item => item > 4);
//every: 모두가 조건을 만족해야 true
const result3 = array.every(item);
