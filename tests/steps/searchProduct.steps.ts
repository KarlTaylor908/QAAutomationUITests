//import { test } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../../features/support/world';

//The code has mainly been generated using ChatGPT and Github Coplit  with minor edits
Given('I am on the homepage', async function (this: CustomWorld) {
  await this.home.open();
});
When('I accept cookies', async function (this: CustomWorld) {
  await this.consent.acceptCookies();
});

When('I search for {string}', async function (this: CustomWorld, searchTerm: string) {
  await this.home.searchInput(searchTerm);
}); 
Then('I should see a {string} heading', async function (this: CustomWorld, header: string) {
   await expect(this.result.resultHeader()).toContainText(header,{ignoreCase: true});
   

});

