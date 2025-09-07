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

## Getting started

### 1) Install dependencies & browsers

- npm install
- npx playwright install --with-deps


### 2) Run tests

- npm run bdd
- npx cucumber-js --tags @focus



