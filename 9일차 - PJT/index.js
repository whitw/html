const imageAPI = "https://picsum.photos/1280/720";
const mainContainer = document.querySelector('.main-container');
const timer = document.querySelector('.timer');
const memoInput = document.querySelector('.memo-input');
const memo = document.querySelector('.memo');

async function setRenderBackground(){
  //axios로 이미지를 가져옴
  //blob -> 이미지, 사운드, 비디오 등 멀티미디어 데이터를 다룰 때 사용
  const result = await axios.get(imageAPI, {
    responseType: "blob"
  });
  //URL.createObjectURL -> 임시 URL을 만든다(페이지 내에서만 유효)
  const imageURL = URL.createObjectURL(result.data);
  mainContainer.style.backgroundImage = `url('${imageURL}')`;

  /*
  근데 그냥 이렇게도 된다고 한다.
  mainContainer.style.backgroundImage = `url('${imageAPI}')`
  */
}


function setTime() {
  const date = new Date();
  let  hourStr = String(date.getHours())
  let minStr = String(date.getMinutes())
  let secStr = String(date.getSeconds())
  if(hourStr.length === 1){
    hourStr = '0' + hourStr;
  }
  if(minStr.length === 1){
    minStr = '0' + minStr;
  }
  if(secStr.length === 1){
    secStr = '0' + secStr;
  }
  timer.textContent = `${hourStr}:${minStr}:${secStr}`
}

function setMemo(){
  const storedWorkTodo = localStorage.getItem('workToDo');
  if(storedWorkTodo){
    memo.textContent = storedWorkTodo;
  }
  memoInput.addEventListener('keyup', (event)=>{
    //event.code 입력시 작성한 키보드 조회
    //console.log(event.code); 지금 누른 키
    //console.log(event.target); 이벤트가 발생한 DOM
    //console.log(event.target.value); 이벤트가 발생한 DOM의 value
    if(event.code === 'Enter'){
      if(!!event.target.value){
        memo.textContent = event.target.value;
        event.target.value = '';
        //메모가 날아가지 않도록 저장하고 싶다.
        //백엔드는 DB에 저장해서 가져오는 작업
        //브라우저에도 localStorage라는 간단한 저장소 개념이 있다.
        //개발자 도구 > 애플리케이션 > 로컬 스토리지에서 확인이 가능.
        localStorage.setItem('workToDo', memo.textContent);
      }
    }
  })
}

function allRender(){
  setRenderBackground();
  setTime();
  setMemo();
  setInterval(setRenderBackground, 10000);
  setInterval(setTime, 1000);
}
allRender();