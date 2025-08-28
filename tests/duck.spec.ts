// duckduckgo.spec.ts
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test('Search Test using fixture', async ({ duck, page }) => {
  await duck.search("Playwright");
  await expect(page).toHaveURL(/q=Playwright/);
  await expect(page.locator('.react-results--main')).toContainText("playwright.dev");
});

test('TodoApp should add new task',async({todo,page})=>{
  await todo.addTask('Learn Playwright Fixtures');
   await expect(page.locator(".view label")).toHaveText(["Learn Playwright Fixtures"]);
})
