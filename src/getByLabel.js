const {chromium, firefox, webkit} = require('playwright');
const {expect} = require("playwright/test");

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: {
            width: 640,
            height: 360,
        }
    });

    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    console.log(await page.getByRole('heading', {name: 'ToDo List'}).isVisible());
    await page.getByLabel('新規タスク').fill('カレーを作る');
    await page.getByRole('button', {'name': '追加'}).click();
    await page.locator('#todos').screenshot({path: __filename.split('.').shift() + '.png'});

    await browser.close();
})();
