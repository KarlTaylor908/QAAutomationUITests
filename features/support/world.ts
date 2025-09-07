import type { Browser, BrowserContext, Page } from 'playwright';
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { HomePage } from '../../pages/homePage';
import { Consent } from '../../pages/helpers/consent';
import { ResultsPage } from '../../pages/resultsPage';
import { BasketPage } from '../../pages/basketPage';



//Code below has been generated using ChatGPT 
export class CustomWorld extends World {

browser!: Browser;
context!: BrowserContext;
page!: Page;

private  _home?:HomePage;
private _consent?:Consent;
private _result?:ResultsPage;
private _basket?:BasketPage;


get home(){return this._home ?? new HomePage (this.page);}
get result(){return this._result ?? new ResultsPage (this.page);}
get consent(){return this._consent ?? new Consent (this.page);}
get basket(){return this._basket ?? new BasketPage (this.page);}



constructor(options: IWorldOptions) {
super(options);

}
}
setWorldConstructor(CustomWorld);