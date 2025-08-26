import {Page,Locator,expect} from '@playwright/test';

export class PlaywrightPage{
    readonly page:Page;
    readonly getStartedButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.getStartedButton=page.getByRole('link',{name:'Get started'});
    }

    async goto(){
        await this.page.goto('https://playwright.dev/');
    }

    async clickGetStarted(){
        // const isvis = this.getStartedButton.isVisible();
        // if(await isvis){
        //     await this.getStartedButton.click();
        // }
        
        await this.getStartedButton.click();
    }

    async assertGetStartedButtonVisible(){
        await expect(this.getStartedButton).toBeVisible();
    }
    
    async assertOnIntroPage(){
        await expect(this.page).toHaveURL(/docs\/intro/);
    }

}