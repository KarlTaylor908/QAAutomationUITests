# Automation UI Tests (TypeScript · Playwright · Cucumber)

End-to-end UI tests for a retail-style shopping flow using **TypeScript**, **Playwright**, and **Cucumber (BDD)**.

## Scenarios covered (starter)
- Search for a product  
- Validate search results  
- Add a product to basket  
- Update quantity to **3**
- Validate subtotal

## Tech stack
- Node 18+
- TypeScript, ts-node, @types/node
- Playwright (Chromium by default)
- @cucumber/cucumber (Gherkin)
- @cucumber/html-formatter (HTML report)
- dotenv, cross-env

## Project structure
- features/ # .feature files (Gherkin)
- features/support/ # hooks, world, env setup
- tests/steps/ # step definitions (.ts)

## Examples of Test Cases
- Given basket page → update quantity to '3' → assert '2'** (intentionally wrong) to show failure output.
<img width="449" height="163" alt="image" src="https://github.com/user-attachments/assets/4aebe737-a658-4ced-8193-d6d681f48eee" />

- Passing example — quantity updated to 3
<img width="453" height="164" alt="image" src="https://github.com/user-attachments/assets/533b3fea-2ffe-496c-80ac-1f6a5189e1ce" />

## Project Tree

QAAutomationUITests/
├─ features/
│  ├─ addProduct.feature
│  ├─ increaseQuantity.feature
│  ├─ searchProduct.feature
│  └─ support/
│     ├─ hooks.ts
│     └─ world.ts
├─ features/step-definitions/
│  ├─ addProduct.steps.ts
│  ├─ increaseQuantity.steps.ts
│  └─ searchProduct.steps.ts
├─ pages/
│  ├─ BasketPage.ts
│  ├─ HomePage.ts
│  └─ ResultsPage.ts
├─ helpers/
│  └─ consent.ts
├─ playwright.config.ts
├─ cucumber.js
├─ package.json
├─ package-lock.json
└─ README.md

## Instructions on Use

### 1) Install dependencies & browsers

- npm install
- npx playwright install --with-deps


### 2) Run tests in the Command Palette (Ctrl+Shift+P)

- npm run bdd
- npx cucumber-js --tags @focus



