'use strict';


const { factoryReqContext } = require('./get-request-context')

/** 
 * @typedef {import('../../app-context')} AppContext
 **/


class GetBasketRouter {

    /**
     * 
     * @param {AppContext} ctx -
     */
    constructor (ctx) {
        this._user = ctx.user

        console.log(this._user.isModerator());

        this._getBasketController = {
            handler: () => {}
        };
    }

    get (request, response) {
        const ctx = factoryReqContext();
        // console.log(ctx.requestId)
        ctx.requestId = 'c366f859-3244-40e3-8dc0-be3fa5a54245';
        ctx.user = {
            name: 'user1',
        };

        ctx.user.type = 'type1'

        console.log(ctx.user, ctx.requestId)

        return this._getBasketController.handler(ctx, request, response);
    }
}

module.exports = GetBasketRouter;
