const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await(puppeteer.launch({
    headless:true,
  }))
  const page = await browser.newPage();
  await page.goto("https://google.co.kr");
  await page.evaluate(()=>{
    document.querySelector(".gLFyf").value = "치킨";
    document.querySelector(".gNO89b").click();
  });
  await page.waitForSelector(".B4GxFc");
  await page.screenshot({
    path: "chicken.jpg",
    fullPage: true,
  });
  await browser.close();
};

main();