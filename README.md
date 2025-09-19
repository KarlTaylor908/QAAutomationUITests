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
Failed Test where quantity should be 3.
<img width="449" height="163" alt="image" src="https://github.com/user-attachments/assets/4aebe737-a658-4ced-8193-d6d681f48eee" />
Passed Test where qauantity is 3.
<img width="453" height="164" alt="image" src="https://github.com/user-attachments/assets/533b3fea-2ffe-496c-80ac-1f6a5189e1ce" />


## Instructions on Use

### 1) Install dependencies & browsers

- npm install
- npx playwright install --with-deps


### 2) Run tests in the Command Palette (Ctrl+Shift+P)

- npm run bdd
- npx cucumber-js --tags @focus



