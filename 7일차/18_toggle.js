let bucketLists = [
  {id: 3, text: '여행가기', done: false},
  {id: 2, text: '치킨 먹기', done: true},
  {id: 1, text: '코딩 하기', done: false},
];

/*
function toggle(id){
  return bucketLists.map((item)=>{
    if(item.id === id){
      const newItem = structuredClone(item);
      //수정해야 할 때는 복사하는 습관 들이기
      newItem.done = !item.done;
      return newItem;
    }
    return item;
  })
}

틀린 코드: 반환값을 수정하면 원본도 수정되는 경우가 있음.
*/

/*
const toggle = (id) => {
  const newBucketLists = structuredClone(bucketLists);
  const ret = newBucketLists.filter((el) => el.id === id);
  if (ret[0].done) {
    ret[0].done = false;
  } else {
    ret[0].done = true;
  }
  return newBucketLists;
};
교수님 코드
*/

const toggle = (id) => {
  const newBucketLists = structuredClone(bucketLists);
  return newBucketLists.map((item)=>{
    if(item.id === id){
      item.done = !item.done;
    }
    return item;
  })
}

const newBucketLists = toggle(2);
console.log(newBucketLists);
