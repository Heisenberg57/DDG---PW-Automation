import { test, expect } from "@playwright/test";

test.describe('DuckDuckGo Search' , () => {

    test('Search Playwright',async({page}) => {
        await page.goto('https://duckduckgo.com/');
        await page.getByLabel('Search with DuckDuckGo').fill('Playwright');
        await page.getByRole('button',{name:'Search'}).click();
        await expect(page).toHaveURL(/q=Playwright/);
    });

    test('Search GitHub', async ({ page }) => {
        await page.goto('https://duckduckgo.com/');
        await page.getByLabel('Search with DuckDuckGo').fill('GitHub');
        await page.getByRole('button', { name: 'Search' ,exact:true}).click();
        await expect(page).toHaveURL(/q=GitHub/);
      });

      test('SearchResult validation',async({page})=>{
        await page.goto('https://duckduckgo.com/');
        await page.getByLabel('Search with DuckDuckGo').fill('Playwright');
        await page.getByRole('button',{name:'Search',exact:true}).click();
        const links = page.locator('a');
        await expect(links).toHaveCount(101);
        await expect(page).toHaveTitle(/Playwright/);

      })

  });