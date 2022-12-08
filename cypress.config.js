const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: { runMode: 1, openMode: 0,},
  viewportHeight: 900,
  viewportWidth: 1440,
  numTestsKeptInMemory: 10000,
  defaultCommandTimeout: 15000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  pageLoadTimeout: 60000,
  trashAssetsBeforeRuns: false,
  watchForFileChanges: false,
  chromeWebSecurity : false,
  video: true,

  e2e: {
    baseUrl : "https://www.useholo.com/en/mortgage-products-services",
  },
});
