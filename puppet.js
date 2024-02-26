const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function start_browser() {
    // puppeteer usage as normal
    browser_path = '/usr/bin/chromium'
    puppeteer.launch({
        // executablePath: browser_path,
        headless: false
    }).then(async browser => {
        console.log('Running tests..')
        const page = await browser.newPage()
        // await page.goto('https://bot.sannysoft.com')
        await page.goto('https://browserleaks.com/canvas')
        // await page.goto('https://2ip.ru/')
        await page.waitForTimeout(5000)
        await page.screenshot({ path: 'testresult.png', fullPage: true })
        await browser.close()
        console.log(`All done, check the screenshot. ✨`)
    })
}

module.exports = {
    'start': start_browser
}
