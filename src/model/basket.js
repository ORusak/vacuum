'use strict';

/**
 * @typedef {import('../app-context')} AppContext
 */

class Basket {

    /**
     * 
     * @param {AppContext} ctx -
     */
    constructor (ctx) {

        this._logger = ctx.logger;
        this._item = ctx.item;
    }

    add (value) {

        const type = this._item.getType();

        return null;
    }
}

module.exports = Basket;
