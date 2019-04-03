'use strict';

const test = require('ava');
const should = require('should');

const App = require('../src/app');

test('run', t => {

    const app = new App();

    should.ok(app);
});

test('run', t => {
    const app = new App()
    const ctx = app._ctx

    t.throws(() => {
        ctx['new_value'] = 1;
    });
    
    t.throws(() => {
        ctx.logger = 1;
    });

    should.ok(app);
});

test('run', t => {
    const app = new App()
    const [ router ] = app._routers

    router.get()
    
    should.ok(app);
});

test.only('cross ref', t => {
    const app = new App()
    const [ router ] = app._routers
    const ctx = app._ctx

    const basket = ctx.basket;

    const type = basket.add({
        type: 'food'
    })

    console.log(type)
    
    should.ok(app);
});
