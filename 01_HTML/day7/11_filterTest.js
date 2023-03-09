const bucketList = [
  {
    id: 1,
    text: "여행 가기",
    done: false,
  },
  {
    id: 2,
    text: "치킨 먹기",
    done: true,
  },
  {
    id: 3,
    text: "코딩 하기",
    done: true,
  },
  {
    id: 4,
    text: "요리 하기",
    done: false,
  }
];

console.log(bucketList.filter(li=>li.done===false));

const arr = [1,2,3,4,5,6,7,8,9,10];
const arr1 = arr.filter(li=>li%2 === 1);
const arr2 = arr.filter(li=>li>3 && li < 9);
console.log(arr1);
console.log(arr2);