'use strict';

const _ = require('lodash')

class Context {

    constructor () {
        this._dependencies = new Map();
        this._singletons = new Map();
    }

    _singleton (constructor, ...rest) {
        if (this._singletons.has(constructor)) return this._singletons.get(constructor);

        const instance =  Reflect.construct(constructor, [this, ...rest]);
        this._singletons.set(constructor, instance)

        return instance;
    }

    _get (name, defaultValue) {
        if (this._dependencies.has(name)) return this._dependencies.get(name);

        if (defaultValue) {
            const valueInit = _.isFunction(defaultValue) ? defaultValue() : defaultValue
            this._dependencies.set(name, valueInit)
        }

        this._required(name);

        return this._dependencies.get(name)
    }

    _set (name, value) {
        this._noRewrite(name);

        this._dependencies.set(name, value)

        return null
    }

    _has (name) {
        
        return this._dependencies.has(name)
    }

    _noRewrite (name) {
        if (this._dependencies.has(name)) {
            throw new Error('non rewriteble value');
        }
    }

    _required (name) {
        if (!this._dependencies.has(name)) {
            throw new Error('not init yet');
        }
    }

    _default (defaultValue, name) {
        if (this._dependencies.has(name)) return this._dependencies.get(name);

        this._dependencies.set(name, defaultValue)

        return this._dependencies.get(name);
    }

    _freeze (name) {
        if (!this._dependencies.has(name)) return null;

        const value = this._dependencies.get(name);

        Object.freeze(value);
    }

    _seal (name) {
        if (!this._dependencies.has(name)) return null;

        const value = this._dependencies.get(name);

        Object.seal(value);
    }
}

module.exports = Context;
