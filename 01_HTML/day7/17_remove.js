let bucketLists = [
  {id: 3, text: '여행가기', done: false},
  {id: 2, text: '치킨 먹기', done: true},
  {id: 1, text: '코딩 하기', done: false},
];

function removeList(id){
  return bucketLists.filter((item)=>{
    return item.id !== id;
  });
}
const newBucketList = removeList(2);
//원본은 가능한 한 남기는 방식으로
console.log(newBucketList);