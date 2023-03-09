const puppeteer = require("puppeteer");

const main = async() => {
  const browser = await puppeteer.launch({
    headless:true,
  })
  const page = await browser.newPage();
  await page.goto("https://news.daum.net/digital#1");
  const data = await page.evaluate(()=>{
    const articles = document.querySelectorAll('.list_newsmajor .link_txt');
    return Array.from(articles).map(a => a.textContent);
  });
  console.log(data);
  browser.close();
}

main();