import {Page, Locator, expect} from '@playwright/test';

export class HomePage {
constructor (private readonly page:Page){ }

//The code has has been created by me and Github Copliot
private get searchBar(): Locator {
    return this.page.locator('#searchTerm');
}

//The code has has been created by me and Github Copliot
async searchInput(query: string) {
    await this.searchBar.fill(query);
    await this.searchBar.press('Enter');
}

//The code below has been generated using ChatGPT 
async  open(): Promise<void> {
    await this.page.goto('/');
}

}