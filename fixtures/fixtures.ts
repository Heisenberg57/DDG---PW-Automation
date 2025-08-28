import { test as base } from "@playwright/test";
import { DuckDuckGoPage } from "../pages/DuckDuckGo";
import { TodoPage } from "../pages/TodoPage";

type MyFixtures = {
    duck: DuckDuckGoPage; 
    todo: TodoPage;        
}

export const test = base.extend<MyFixtures>({
   duck:async({page},use)=>{
        const duck = new DuckDuckGoPage(page);
        await duck.goto();
        await use(duck);
   },

   todo:async({page},use)=>{
        const todo = new TodoPage(page);
        await todo.goto();
        await use(todo);
        }
   });

