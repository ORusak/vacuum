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
        // console.log(this._item)
    }

    add (value) {

        const type = this._item.getType(value);

        return type;
    }
}

module.exports = Basket;
