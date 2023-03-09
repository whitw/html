const puppeteer = require("puppeteer");
const main = async() => {
  //브라우저 만들기
  const browser = await puppeteer.launch({
    //기본값 headless:true
    //false로 생성하면 브라우저 창을 강제로 띄운다.
    headless: true,
  });
  //브라우저에 페이지 만들기
  const page = await browser.newPage();
  //페이지에서 주소로 이동하기
  await page.goto("https://www.naver.com");

  //스크린샷 찍기
  await page.screenshot({
    path: "screenshot.jpg",
    fullPage: true,
  });

  //pdf 따기
  await page.pdf({
    path: "test.pdf",
    format: 'A4',
  });

  //브라우저 종료
  await browser.close();
};

main();