/// <reference types="cypress" />

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// cypress lacks support for some method in `cypress open` mode (not same chrome version as in `cypress run`)
// import "babel-polyfill"; // ⚠️ @TODO

// A cypress plugin to add a tab command (in beta version)
// - https://github.com/Bkucera/cypress-plugin-tab
// - https://github.com/cypress-io/cypress/issues/299#issuecomment-469792368
// Import command from cypress-testing-library
// Import commands.js using ES2015 syntax:
import './commands';

import '@testing-library/cypress/add-commands';
// Alternatively you can use CommonJS syntax:
// require('./commands')
