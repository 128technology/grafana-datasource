/* eslint-disable no-undef */

import prunk from 'prunk';
import chai from 'chai';

// Mock Grafana modules that are not available outside of the core project
// Required for loading module.js
prunk.mock('./css/query-editor.css!', 'no css, dude.');
prunk.mock('app/plugins/sdk', {
  QueryCtrl: null,
});

// Setup Chai
chai.should();
global.assert = chai.assert;
global.expect = chai.expect;
