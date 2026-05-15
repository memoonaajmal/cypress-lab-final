# Cypress Lab Final

## Project Description

This project contains End-to-End (E2E) testing using the Cypress framework on the SauceDemo website.

Website Tested:
https://www.saucedemo.com

---

# Task 1 — UI Test Suite (Functional Testing)

## Test Files

### login.cy.js
Contains:
- Valid Login Test
- Invalid Login Test

### navigation.cy.js
Contains:
- Open Product Page Test
- Visit Multiple Pages Test

### form.cy.js
Contains:
- Checkout Form Submission Test

### bonus.cy.js
Contains:
- Visibility Test
- Dropdown Selection Test
- Logout Test

---

# Task 2 — Assertions, Aliases & Custom Commands

## Task 2 Test Files

### assertions.cy.js
Contains:
- be.visible Assertion Test
- have.text Assertion Test
- have.attr Assertion Test
- Negative Assertion Test

### alias.cy.js
Contains:
- Alias Practice Test using .as()

### customCommand.cy.js
Contains:
- Custom Login Command Test

---

# Task 2 Features Covered

- Assertions
- Negative Assertions
- Aliases
- Custom Commands
- beforeEach() Hook

---

# Technologies Used

- Cypress
- JavaScript
- Node.js

---

# Prerequisites

Before running the project, install:

- Node.js
- npm

Download Node.js from:
https://nodejs.org

---

# How to Run the Tests

## Step 1 — Clone Repository

```bash
git clone https://github.com/memoonaajmal/cypress-lab-final.git
```

---

## Step 2 — Open Project Folder

```bash
cd cypress-lab-final
```

---

## Step 3 — Install Dependencies

```bash
npm install
```

---

## Step 4 — Open Cypress

```bash
npx cypress open
```

---

# How to Run Task 1 Tests

After Cypress opens:

1. Select E2E Testing
2. Choose browser
3. Run any of these files:
   - login.cy.js
   - navigation.cy.js
   - form.cy.js
   - bonus.cy.js

The tests will run automatically.

---

# How to Run Task 2 Tests

After Cypress opens:

1. Select E2E Testing
2. Choose browser
3. Run the following files individually:
   - assertions.cy.js
   - alias.cy.js
   - customCommand.cy.js

All tests should pass successfully and display green checkmarks.

---

# Custom Command

A reusable custom login command was created in:

```bash
cypress/support/commands.js
```

This command is used to avoid repeating login steps in multiple test cases.

---

# Expected Result

All test cases should pass successfully and show green checkmarks in Cypress.

---


# Author

Memoona Ajmal
