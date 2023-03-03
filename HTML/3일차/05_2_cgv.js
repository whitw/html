/*
  1등 영화 제목/ 예매율/ 개봉일자 출력
  2등 영화 정보 변경
    영화 제목: 삼겹살과 그대라면
    예매율: 1등 예매율 - 5%
    개봉일: 1985.07.07
  3등 영화와 1등 영화의
    이미지, 타이틀 SWAP
*/

const firstMovie = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents"
);
const thirdMovie = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents"
);
const firstTitle = firstMovie.querySelector(".title");
const thirdTitle = thirdMovie.querySelector(".title");
const firstScore = firstMovie.querySelector(".score>.percent>span");
const firstDate = firstMovie.querySelector(".txt-info>strong");

console.log("first date:" + firstDate.textContent.trim().split("\n")[0]);
console.log("first title:" + firstTitle.textContent);
console.log("first score:" + firstScore.textContent.split("%")[0]);

const secondMovie = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents"
);
secondMovie.querySelector(".title").textContent = "삼겹살과 그대라면";
secondMovie.querySelector(".score>.percent>span").textContent =
  Number(firstScore.textContent.split("%")[0]) - 5 + "%";
secondMovie.querySelector(".txt-info>strong").textContent = "1985.07.07 개봉";

const firstImg = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a > span > img"
);
const thirdImg = document.querySelector(
  "#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a > span > img"
);
let temp = firstImg.src;
firstImg.src = thirdImg.src;
thirdImg.src = temp;


temp = firstTitle.textContent;
firstTitle.textContent = thirdTitle.textContent;
thirdTitle.textContent = temp;