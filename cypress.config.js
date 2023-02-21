const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com',
    specPattern: 'cypress/integration/examples/**/*.js',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
