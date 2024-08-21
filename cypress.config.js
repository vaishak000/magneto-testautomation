const { defineConfig } = require('cypress');
const fs = require('fs');
const { faker } = require('@faker-js/faker');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());

      on('task', {
        generateUserData() {
          const userData = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(10, true, /\w/, 'A1!')
          };

          fs.writeFileSync('cypress/fixtures/userData.json', JSON.stringify(userData, null, 2));

          return null;
        }
      });
    },
    specPattern: "**/*.feature",
    baseUrl: 'https://magento.softwaretestingboard.com'
  }
});






















