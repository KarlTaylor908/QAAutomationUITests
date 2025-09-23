import {Page, Locator, expect} from '@playwright/test';

export class BasketPage {
constructor (private readonly page:Page){ }


//The code below has been created by me
   getProductTitle(): Locator {
    return this.page.locator('[data-test=product-title]').first();};

//The code below has been created by me
basketHeader(): Locator {
    return this.page.getByRole('heading',{level: 1}  )
};

//The code below has been created by me
locateQuantity(): Locator {
    return this.page.locator('select[data-e2e="product-quantity"]')
};

//The code below has been created by me
async updateQuantity(quantity: string): Promise<void> {
    const quantityselector = this.locateQuantity();
    await quantityselector.waitFor({ state: 'visible', timeout: 15000 });
    await this.locateQuantity().selectOption(String(quantity ));
    try { await quantityselector.press('Tab'); } catch {}

}
async waitForQuantityUpdate(quantity: string): Promise<void> {
    await this.page.waitForSelector('select[data-e2e="product-quantity"] option:checked[value="${String(quantity)}"]', {timeout: 15000 });
}
//The code below has been created by me
getProductPrice(): Locator {
    return this.page.locator('[data-e2e="product-line-price"]');
};

//The code below has been created by me
getUnitPrice(): Locator {
    return this.page.locator('[data-e2e="product-unit-price"]');
};

//The code below was created by Chat GPT with edits
//This is my example of where I have refined AI Code.
 async parsePriceToPence(priceText :string): Promise<number> {
    const clean = priceText.trim().replace('£','').replace(',','').replace(' ', '');
    const [poundsPart, pencePart =''] = clean.split('.');
    const pounds =Number(poundsPart || '0');
    const pence = Number((pencePart + '00').slice(0,2));
    return pounds * 100 + pence;
};

//The code below was created by Chat GPT with edits
//This is my example of where I have refined AI Code.
async getPrices(): Promise<[string, string]> {

 const [totalText, unitText] = await Promise.all([
    this.getProductPrice().innerText(),   // e.g. "£537.00"
    this.getUnitPrice().innerText(),]);

  return [totalText, unitText];
}
};


