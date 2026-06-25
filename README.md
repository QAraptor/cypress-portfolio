# cypress-portfolio

# Cypress Portfolio Automation Framework

> UI + POM Architecture + Global Page Access + Fixtures + Custom Commands  
> Built to mirror real enterprise QA automation standards.

## 🚀 Overview

This project is a **scalable Cypress + TypeScript UI test automation framework**, designed to demonstrate:

- Clean Page Object Model (POM) structure
- Global page abstraction (`cp`) for human-readable tests
- Data-driven testing using Fixtures (`fx`)
- Custom Cypress commands
- Enterprise-ready architecture that is easy to extend & maintain

This framework automates real user flows on:  
**https://www.automationexercise.com**

---

## 🏗 Folder Structure

cypress/
│
├── e2e/ # Test specs
│ └── auth/
│ └── register_user.cy.ts
│
├── fixtures/ # Test data
│ ├── users.json
│ └── index.ts # Aggregates data → global fx
│
├── pages/ # Page Object Models (POM)
│ ├── HomePage.ts
│ ├── LoginPage.ts
│ └── index.ts # Aggregates POMs → global cp
│
└── support/
├── commands.ts # Custom Cypress commands
├── e2e.ts # Runtime setup (defines globals)
└── globals.d.ts # Type definitions for globals

---

## 🌍 Global Architecture

| Global Name | Purpose                                        | Example Usage                |
| ----------- | ---------------------------------------------- | ---------------------------- |
| `cp`        | Central object containing **all Page Objects** | `cp.loginPage.submitLogin()` |
| `fx`        | Central object containing **all fixture data** | `fx.users.valid.email`       |

✅ Eliminates repeated imports  
✅ Gives clean, readable tests  
✅ Ensures full IDE autocomplete

---

## 🧱 Page Object Example

```ts
// cypress/pages/HomePage.ts
export class HomePage {
  elements = {
    loginEmail: "input[data-qa='login-email']",
    password: "input[placeholder='Password']",
}
 enterSignupName(name: string): void {
    testUtils.enterText(this.elements.signupName, name);
  }
  enterSignupEmail(email: string): void {
    testUtils.enterText(this.elements.signupEmail, email);

}
}
export const homePage = new HomePage();
Page Object Barrel (Global Access)
ts

// cypress/pages/index.ts
import { HomePage, homePage } from './HomePage';
import { LoginPage, loginPage } from './LoginPage';

export const cp = {
  homePage,
  loginPage,
};
📦 Fixtures (Data Layer)
json

// cypress/fixtures/users.json
{
  "valid": {
    "name": "TestUser_01",
    "email": "testuser01@example.com",
    "password": "Password123!"
  }
}
Fixture Barrel
ts

// cypress/fixtures/index.ts
import users from './users.json';
export const fx = { users };
🔗 Global Runtime Setup
ts

// cypress/support/e2e.ts
import './commands';
import { cp } from '../pages';
import { fx } from '../fixtures';

(globalThis as any).cp = cp;
(globalThis as any).fx = fx;
TypeScript Awareness
ts

// cypress/support/globals.d.ts
declare global {
  var cp: typeof import('../pages').cp;
  var fx: typeof import('../fixtures').fx;
}
export {};
✅ Example Test (Readable Like a Test Case)
ts

// cypress/e2e/auth/register_user.cy.ts
describe('Register User', () => {
  beforeEach(() => cy.visit('/'));

  it('Registers a user successfully', () => {
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToSignup();
    cp.loginPage.verifySignup();
    cp.loginPage.enterSignupName(fx.users.valid.name);
    cp.loginPage.enterSignupEmail(fx.users.valid.email);
    cp.loginPage.submitSignup();
  });
});


🏃 Running Tests
Open Cypress UI
bash
Copy code
npx cypress open
Run in CLI (Headless)
bash
Copy code
npx cypress run

Reporting
HTML test reports are generated using Mochawesome with inlined assets for easy local viewing.

npm run report:generate
npm run report:merge
npm run test:report

💼 Hiring Manager Notes
This repository demonstrates:

Ability to design maintainable automation architecture

Understanding of separation of concerns (tests vs page logic vs data)

Professional test readability

Enterprise tooling readiness

This project is designed to reflect real-world QA automation practices, including reusable page objects, fixture-driven test data, API validation, and reporting.

⭐ If Reviewing This Repo
I welcome feedback from:

Senior SDETs / Staff QA

QA Leads / Automation Architects

Hiring managers

My goal: Demonstrate clear thinking, clean structure, and maintainable automation design.

```
