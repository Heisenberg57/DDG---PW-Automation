import {Page, Locator} from '@playwright/test';

export class TodoPage{
    readonly page:Page;
    readonly newTodo:Locator;

    constructor(page:Page){
        this.page=page;
        this.newTodo = page.getByPlaceholder("What needs to be done?");
    }

    async goto(){
        await this.page.goto("https://demo.playwright.dev/todomvc/");
    }

    async addTask(task:string){
        await this.newTodo.fill(task);
        await this.newTodo.press("Enter");
    }

}