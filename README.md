# Learning Cypress JS

The code in this repo is intended to be a basic and quick introduction to UI end to end testing automation with Cypress.

## Instructions

- Clone repo.
- Run `npm install`.

## Where to start

- **/cypress.config.js** file contains basic Cypress configuration.

- The directory **/cypress/e2e** contains basic files with samples and explanation about how to work with inputs, modals, date pickers, etc.

## Usage

```bash
# Runs Cypress in a browser (runs 'npx cypress open'):
npm run test

# Runs Cypress in headless mode (runs 'npx cypress run'):
npm run test:headless
```

## More info

- When you run Cypress in headless mode, test's results will be recorded in videos that will be saved in .mp4 format on the directory **/cypress/videos**.

- If a test fails, Cypress take screenshots and save them in the directory **/cypress/screenshots**.

In the following Notion page you can find more info about Cypress, including a link to the documentation, link to the Cypress' docker hub profile, and links to a couple of courses about tests automation with Cypress.

[https://rdgonzu.notion.site/Cypress-a1c5ab0d634d40df8986e42703beab26](https://rdgonzu.notion.site/Cypress-a1c5ab0d634d40df8986e42703beab26)
