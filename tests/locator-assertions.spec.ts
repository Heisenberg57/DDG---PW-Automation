import { test,expect,Page } from "@playwright/test";
import{ PlaywrightPage } from "../pages/PlayWrightPage";


test('Search Test',async({page})=>{
    await page.goto('https://duckduckgo.com/');
    await page.getByLabel('Search with DuckDuckGo').fill('Playwright');
    await page.getByRole('button',{name:'Search',exact:true}).click();
    await expect(page).toHaveURL(/q=Playwright/);
    await expect(page.locator('.react-results--main')).toContainText('playwright.dev');
});

test('Check get Started button visibility',async({page})=>{
    await page.goto('https://playwright.dev/');
    const getStartedButton = page.getByRole('link',{name:'Get started'});
    await expect(getStartedButton).toBeVisible();
    await getStartedButton.click();
    await expect(page).toHaveURL(/docs\/intro/);

});


test('Get Started Using POM',async({page})=>{
    const pwpage =new PlaywrightPage(page);
    await pwpage.goto();
    await pwpage.assertGetStartedButtonVisible();
    await pwpage.clickGetStarted(); 
    await pwpage.assertOnIntroPage();

});




test('Negative Assertions',async({page})=>{
    await page.goto('https://playwright.dev/');
    //await expect(page).not.toHaveURL(/google/);
    await expect(page.locator('body')).not.toContainText('Google');
    await page.getByRole('button',{name:'Search'}).click();
    const searchField = page.getByPlaceholder('Search');
    await expect(searchField).toBeVisible();
    await expect(await searchField.inputValue()).toBe('');

});