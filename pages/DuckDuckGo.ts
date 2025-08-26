import {Page,Locator} from '@playwright/test';

export class DuckDuckGoPage{
    readonly page:Page;
    readonly searchbox:Locator;
    readonly searchbutton:Locator;

    constructor(page:Page){
        this.page=page;
        this.searchbox=page.getByLabel('Search with DuckDuckGo');
        this.searchbutton = page.getByRole('button',{name:'Search',exact:true});
    }

    async goto(){
        await this.page.goto('https://duckduckgo.com/');
    }

    async search(text:string){
        await this.searchbox.fill(text);
        await this.searchbutton.click();
    }
}