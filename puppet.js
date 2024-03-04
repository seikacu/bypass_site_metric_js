const puppeteer = require("puppeteer-extra");
const sleep = require("sleep-promise");

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

async function start_browser(mode_set) {
  // puppeteer usage as normal
  let browser_path = "/usr/bin/chromium";
  puppeteer
    .launch({
      executablePath: browser_path,
      headless: false,
    })
    .then(async (browser) => {
      console.log("Running tests..");
      const page = await browser.newPage();
      // await page.goto('https://bot.sannysoft.com')
      await page.goto("https://browserleaks.com/canvas");
      // await page.goto('https://2ip.ru/')
      // await page.waitForTimeout(5000);
      await sleep(5000);
      await page.screenshot({ path: "testresult.png", fullPage: true });
      await browser.close();
      console.log(`All done. ✨`);
    });
}

module.exports = {
  start: start_browser,
};
