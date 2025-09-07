import {Page, Locator, expect} from '@playwright/test';

export class ResultsPage {
constructor (private readonly page:Page){ }
//The code below has been copied from Home Page 
async  open(): Promise<void> {
    await this.page.goto('https://www.argos.co.uk/search/laptop/?clickOrigin=searchbar:home:term:laptop');

}
//The code below has been created by me
resultHeader(): Locator {
    return this.page.locator('h1');
}

// The code below has been generated using ChatGPT with minor edits
  private locateLaptop(): Locator {
    return this.page.locator('[data-test="component-product-card"]')
  .filter({ has: this.page.locator('a[href*="/product/8539669"]') })
  .first();
  }
 //The code below has been created by me
  private productTitle(): Locator {
    return this.locateLaptop().locator('[data-test="component-product-card-title"]').filter({ hasText: 'Lenovo IdeaPad Slim 3 15.6in N100 4GB 128GB Laptop' });
  }
//The code below has been created by me
 locateContinueToBasket(): Locator {
    return this.page.locator('[data-test="component-att-button-basket"]')
  }

//The code below has been created by me
  waitForModal(): Locator {
       return this.page.locator('[data-test="component-att-modal"]');
};


  
// The code below has been generated using ChatGPT with minor edits
async addProductToBasket(product : string): Promise<void> {
    const title = await this.productTitle().textContent();
    if (product === title) {
        const card = this.locateLaptop();
        await card.scrollIntoViewIfNeeded();
        const trolleyButton = card.locator('[data-test="component-att-button"]');
        await trolleyButton.click();
    } else {
        throw new Error(`Product with title "${product}" not found on the results page.`);
    }
}


async ContinueToBasket(): Promise<void> {
 
    await this.waitForModal().waitFor({ state: 'visible', timeout: 15000 });
    //const continueButton = dialog.locator('[data-test="component-att-button-basket"]');
    const continueButton = this.locateContinueToBasket();


    await continueButton.click();
};
  }