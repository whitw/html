/*
  1등 영화 제목/ 예매율/ 개봉일자 출력
  2등 영화 정보 변경
    영화 제목: 삼겹살과 그대라면
    예매율: 1등 예매율 - 5%
    개봉일: 1985.07.07
  3등 영화와 1등 영화의
    이미지, 타이틀 SWAP
*/
const titleQuery = ".title";
const scoreQuery = ".score>.percent>span";
const dateQuery  = '.txt-info>strong';
const imgQuery   = '.thumb-image>img';

function getTitleString(DOM){
  return DOM.querySelector(titleQuery).textContent;
}

function getScoreString(DOM){
  return DOM.querySelector(scoreQuery).textContent.split('%')[0];
}

function getDateString(DOM){
  return DOM.querySelector(dateQuery).textContent.trim().split(' ')[0];
}
const movies = document.querySelectorAll('.sect-movie-chart>ol>li');

console.log("first date:" + getDateString(movies[0]));
console.log("first title:" + getTitleString(movies[0]));
console.log("first score:" + getScoreString(movies[0]));

movies[1].querySelector(titleQuery).textContent = "삼겹살과 그대라면";
movies[1].querySelector(scoreQuery).textContent = Number(getScoreString(movies[0]) - 5) + "%";
movies[1].querySelector(dateQuery).textContent = "1985.07.07 개봉";

const img = [movies[0].querySelector(imgQuery), movies[2].querySelector(imgQuery)];
let temp = img[0].src;
img[0].src = img[1].src;
img[1].src = temp;

const title = [movies[0].querySelector(titleQuery), movies[2].querySelector(titleQuery)];
temp = title[0].textContent;
title[0].textContent = title[1].textContent;
title[1].textContent = temp;
