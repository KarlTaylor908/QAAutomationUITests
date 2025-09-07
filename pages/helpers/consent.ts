import { Page, Locator, expect } from '@playwright/test';

export class Consent {
constructor (private readonly page:Page){ }

//The code has has been created by me and Github Copliot
public get  cookieButton(): Locator {
    return this.page.getByRole('button', { name: 'Continue and accept' });
}

//The code below has been generated using ChatGPT 
async acceptCookies() {
   
   try {
        await expect (this.cookieButton).toBeVisible({timeout:5000});
         await this.cookieButton.click();
        
   }
    catch  {}
   
}

}

