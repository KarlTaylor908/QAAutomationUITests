import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, type Browser } from 'playwright';
import { CustomWorld } from './world';

//Code below has been generated using ChatGPT 
let browser: Browser;
setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  browser = await chromium.launch({ 
     channel: 'chrome',
     args: ['--start-maximized'],
    headless: false }
  );
    
  
});

Before(async function (this: CustomWorld) {
  this.context = await browser.newContext({
  baseURL: 'https://www.argos.co.uk/',
     viewport: null,
    serviceWorkers: 'block',       
    locale: 'en-GB',
    timezoneId: 'Europe/London'
});
this.page = await this.context.newPage();
});

    AfterAll(async () => {
    await browser.close();
    });

After(async function (this: CustomWorld) {
    await this.context?.close();
});