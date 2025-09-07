import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../../features/support/world';
import { BasketPage } from '../../pages/basketPage';
import { ResultsPage } from '../../pages/resultsPage';
import { Console } from 'console';


//The code below has been created by me
Given('I am on the basket page', async function (this: CustomWorld) {
    await this.result.open();
    await this.consent.acceptCookies();
    await this.result.addProductToBasket('Lenovo IdeaPad Slim 3 15.6in N100 4GB 128GB Laptop');
    const modal = this.result.waitForModal(); 

    await expect(modal).toBeVisible({timeout:15000});
    const continueBtn = this.result.locateContinueToBasket();

    await expect(continueBtn).toBeVisible({timeout:15000});
    await expect(continueBtn).toHaveAttribute('href', /\/basket/,{timeout:15000});  
    await Promise.all([
        this.page.waitForURL(/\/basket(?:$|\?)/, { timeout: 15000 }),
        continueBtn.click()
        ]);
});

//The code below has been created by me
When('I update the product quantity to {string}', async function (this: CustomWorld, quantity: string) {
    await this.basket.updateQuantity(quantity);
}); 

//The code has mainly been generated using Github Coplit  with minor edits
Then('I should see {string} in the product quantity field', async function (this: CustomWorld, quantity: string) {
    const quantityField = await this.basket.locateQuantity();

    await expect(quantityField).toBeVisible({ timeout: 10000 });
    await expect(quantityField).toHaveValue(quantity, { timeout: 10000 })
    
    const [totalPrice, unitPrice] = await this.basket.getPrices();
     const  subTotal = await this.basket.parsePriceToPence(totalPrice);
     const unit = await this.basket.parsePriceToPence(unitPrice);


console.log('Total price:', subTotal);
console.log('Unit price:', unit);
console.log('Calcuated price: ' + unit * parseInt(quantity));
   await expect(subTotal).toEqual(unit* parseInt(quantity));
 
});
