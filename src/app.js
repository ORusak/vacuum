'use strict';

const appCtx = require('./app-context-instance')
const RouterGetBasket = require('./routers/basket/get')

class App {

    constructor () {

        this._ctx = appCtx;
        this._routers = [
            new RouterGetBasket(appCtx),
        ]
    }
}

module.exports = App;
