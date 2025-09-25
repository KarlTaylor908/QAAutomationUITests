import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../../features/support/world';
import { BasketPage } from '../../pages/basketPage';

//The code has mainly been generated using ChatGPT and Github Coplit  with minor edits
Given('I am on the search results page', async function (this: CustomWorld) {
  await this.result.open();
  await this.consent.acceptCookies();
});

//The code has mainly been generated using ChatGPT and Github Coplit  with minor edits
When('I add the {string} to the basket', async function (this: CustomWorld, product: string) {
 
  await this.result.addProductToBasket(product);

  const modal = this.result.waitForModal(); 

const continueBtn = this.result.locateContinueToBasket();

   await expect(continueBtn).toBeVisible({timeout:15000});
   await expect(continueBtn).toHaveAttribute('href', /\/basket/,{timeout:15000});

//Had problems with the click so used the code below suggested by ChatGPT. Was clicking the continue button before the URL changed.
//This waits for the URL to change to the basket page after clicking the continue button 
await Promise.all([
  this.page.waitForURL(/\/basket(?:$|\?)/, { timeout: 15000 }),
  continueBtn.click()
]);
});

//Code has mainly been generated using ChatGPT and Github Coplit  with minor edits
Then('I should see the {string} in the basket', async function (this: CustomWorld, product: string) {
 const headerText = await this.basket.basketHeader().textContent();
 expect(headerText?.trim()).toBe('Your trolley (1 item)');

 const productTitle = await this.basket.getProductTitle().textContent();
 expect(productTitle?.trim()).toContain(product);

 const productPrice = await this.basket.getProductPrice().textContent();
 expect(productPrice?.trim()).toBe('£279.00');
}
);
