import { test as base } from "@playwright/test";
import { DuckDuckGoPage } from "../pages/DuckDuckGo";

type MyFixtures = {
    duck: DuckDuckGoPage;           
}

export const test = base.extend<MyFixtures>({
   duck:async({page},use)=>{
        const duck = new DuckDuckGoPage(page);
        await duck.goto();
        await use(duck);
   },
});