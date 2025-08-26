import {test,expect} from '@playwright/test';

test('basic google test',async({page})=>{
    await page.goto('/');
    await expect(page).toHaveTitle(/Google/);
});
