'use strict';

const _ = require('lodash')

const Context = require('./context');
const Basket = require('./model/basket');
const Item = require('./model/item');
const Logger = {};
const User = {

    isModerator () {
        return false
    }
}

const configOptions = {};

class AppContext extends Context {

    constructor () {
        super();
    }

    get logger () {

        return Logger;
    }
    
    /**
     * 
     * @returns {Basket} -
     */
    get basket () {
        
        return this._singleton(Basket);
    }

    /**
     * 
     * @returns {Item} -
     */
    get item () {
        const handler = {
            get: (obj, prop) => {
                obj
                prop
                if (this._has('item')) {
                    const item = this._get('item')

                    return item[prop];
                }

                this._set('item', this._singleton(Item, [this, configOptions]));
                const item = this._get('item')
                
                return item[prop];
            }
        }

        return new Proxy({}, handler);

        // return this._singleton(Item, configOptions);
    }

    /**
     * 
     * @returns {Item} -
     */
    itemFactory (options) {
        
        return new Item(this, options);
    }

    get user () {
        const handler = {
            get: (obj, prop) => {
                
                return User[prop]
            }
        }

        return new Proxy({}, handler);
    }
}

module.exports = AppContext;
