# AutomationUITests (Playwright + Cucumber + TypeScript)

End-to-end UI tests for a retail-style shopping flow using **TypeScript**, **Playwright**, and **Cucumber (BDD)**.

Scenarios covered (starter):
- Search for a product
- Validate search results
- Add a product to basket
- Update quantity to **3**

## Tech stack
- Node 18+
- TypeScript
- Playwright (Chromium by default)
- @cucumber/cucumber (Gherkin)
- @cucumber/html-formatter (HTML report)
- ts-node, dotenv

- ## Project structure
- features/ # .feature files (Gherkin)
- features/support/ # hooks, world, env setup
tests/steps/ # step definitions (.ts)

## Getting started

### 1) Install dependencies and browsers

npm i -D playwright @cucumber/cucumber @cucumber/html-formatter \
  typescript ts-node @types/node dotenv cross-env

### 2) Run Tests

npx cucumber-js --tags @focus
npm run bdd


