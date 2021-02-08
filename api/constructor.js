module.exports = function (data) {

    // Lodash Module
    const _ = require('lodash');

    // Obj Type
    const objType = require('@tinypudding/puddy-lib/get/objType');

    const tinyCfg = _.defaultsDeep({}, data, {

        // Default Lang
        defaultLang: 'en',

        // Loader
        loader: function (local, lang) {
            console.log('Test File Load from: "./' + this.config.defaultLang + '/' + local + '.json"');
            return {};
        },

        list: {}

    });

    // Set Config
    if (typeof tinyCfg.loader === "function") {
        this.loader = tinyCfg.loader;
    }

    if (typeof tinyCfg.loader === "string") {
        this.defaultLang = tinyCfg.defaultLang;
    }

    if (objType(tinyCfg.list, 'object')) {
        this.list = tinyCfg.list;
    }

    // Complete
    return this;

};