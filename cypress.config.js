const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      // implement node event listeners here.
      on('task', {
        // To print logs while executing tests in headless mode.
        log(message) {
          // eslint-disable-next-line no-console
          console.log(message)
          return null
        },
      })
    },

    // To avoid including it everytime you use cy.visit().
    baseUrl: 'https://demoqa.com',

    // To configure viewport's dimensions.
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
})
