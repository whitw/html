const toggleButton = document.querySelector(".toggle-button");
const bodyBackground = document.querySelector("body");
const headerNav = document.querySelectorAll(".header-nav-a");
const bookmarkWrapper = document.querySelector(".bookmark-wrapper");
const searchInput = document.querySelector("#search-input");
const imgIconWrappers = document.querySelectorAll(".img-icon-wrapper");
const bookmarkTexts = document.querySelectorAll(".bookmark-text");

toggleButton.addEventListener("click", (evt) => {
  toggleButton.classList.toggle("toggle-button-darkmode");
  bodyBackground.classList.toggle("body-background-darkmode");
  for(let i = 0;i < headerNav.length;i++){
    headerNav[i].classList.toggle("text-darkmode");
  }
  if(toggleButton.classList.contains("toggle-button-darkmode")){
    toggleButton.textContent = "일반 모드";
  }
  else{
    toggleButton.textContent = "다크 모드";

  }
  for(let i = 0;i < imgIconWrappers.length;i++){
    imgIconWrappers[i].classList.toggle("img-icon-wrapper-darkmode");
  }
  for(let i = 0;i < bookmarkTexts.length;i++){
    bookmarkTexts[i].classList.toggle("text-darkmode");
  }

});

searchInput.addEventListener('keyup', function(e){
  if(e.code === 'Enter'){
    if(e.target.value === ""){
      alert("검색어를 입력하지 않으셨습니다!");
      return;
    }
    //이동하기
    const googleSearch = "https://www.google.com/search?q=";
    //location.href = 
    location.href = googleSearch + e.target.value;
    //새 창으로 열기
    //window.open(googleSearch + e.target.value);
    //<a href="" target="_blank"> 도 가능.
  }
});