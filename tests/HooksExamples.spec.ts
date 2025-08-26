import {test,expect,Page } from "@playwright/test";
import { DuckDuckGoPage } from "../pages/DuckDuckGo";

test.beforeEach(async({page})=>{
    await page.goto('https://duckduckgo.com/');
});

test.afterEach(async({page})=>{
    console.log('✅ Test finished!')
});

test('Search Test',async({page})=>{
    const duckduck = new DuckDuckGoPage(page);
    await duckduck.goto();
    await duckduck.search('Playwright');
    await expect(page).toHaveURL(/q=Playwright/);
    await expect(page.locator('.react-results--main')).toContainText('playwright.dev');
});

test('Homepage title',async({page})=>{
    await expect(page).toHaveTitle(/DuckDuckGo/);

});



