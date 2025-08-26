import {test,expect} from '@playwright/test';
import { DuckDuckGoPage } from '../pages/DuckDuckGo';

test('basic duckduckgosearch test',async({page})=>{
    await page.goto('https://duckduckgo.com/');
    await page.getByLabel('Search with DuckDuckGo').fill('Playwright');
    await page.getByRole('button',{name:'Search',exact:true}).click();
    await expect(page.locator('.react-results--main')).toContainText('playwright.dev');
});

test('duckducgo using POM',async({page})=>{
    const duckduck = new DuckDuckGoPage(page);
    await duckduck.goto();
    await duckduck.search('Playwright');
    await expect(page).toHaveURL(/q=Playwright/);
    await expect(page.locator('.react-results--main')).toContainText('playwright.dev');

})