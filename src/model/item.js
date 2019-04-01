'use strict';

/** 
 * @typedef {import('../app-context')} AppContext
 **/

class Item {

    /**
     * 
     * @param {AppContext} ctx -
     */
    constructor (ctx, options = {}) {

        this._logger = ctx.logger;
        this._basket = ctx.basket;

        this._name = options.name;
    }

    getType (value) {
        
        return value.type;
    }
}

module.exports = Item;
