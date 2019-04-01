'use strict';

const Context = require('../../context');

function utilShortUUID () {

    return '9f999928-b0f7-4d0e-ad25-7cd942615c1f'
}

class GetReqContext extends Context {

    constructor () {
        super();
    }

    /**
     * @returns {string} -
     */
    get requestId () {
        
        return this._get('requestId', utilShortUUID);
    }

    set requestId (value) {

        this._set('requestId', value);
    }

    /**
     * @return {{name: string}}
     */
    get user () {
        
        return this._get('user');
    }

    set user (value) {
        
        this._set('user', value)
    }
}

module.exports.GetReqContext = GetReqContext;
module.exports.factoryReqContext = function factoryReqContext () {

    const ctx = new GetReqContext();

    Object.seal(ctx);

    return ctx;
};
