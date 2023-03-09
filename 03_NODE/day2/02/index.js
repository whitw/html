const puppeteer = require("puppeteer");
const main = async() => {
  //브라우저 만들기
  const browser = await puppeteer.launch({
    //기본값 headless:true
    //false로 생성하면 브라우저 창을 강제로 띄운다.
    headless: false,
  });
  //브라우저에 페이지 만들기
  const page = await browser.newPage();
  //페이지에서 주소로 이동하기
  await page.goto("https://comic.naver.com/webtoon?tab=mon&week=mon");
  await page.waitForSelector("#content .item img");
  const data = await page.evaluate(() => {
    const webtoonList = document.querySelectorAll("#content .item img");
    //배열처럼 생겼지만 배열은 아님. 유사 배열
    const results = Array.from(webtoonList).map(li=>li.getAttribute('alt'));
    return results;
  });

  console.log(data);
};

main();

