'use strict';

const _ = require('lodash')

const AppContext = require('./app-context');

const appContext = new AppContext();

Object.seal(appContext);

module.exports = appContext;
