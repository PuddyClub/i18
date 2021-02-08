module.exports = function (data) {

    // Lodash Module
    const _ = require('lodash');

    // Obj Type
    const objType = require('@tinypudding/puddy-lib/get/objType');

    const tinyCfg = _.defaultsDeep({}, data, {

        // Default Lang
        defaultLang: 'en',

        // Vars Session Names
        varsSession: {
            sessionLang: 'sessionLang',
            userLang: 'userLang',
            nowLang: 'nowLang'
        },

        // Loader
        loader: function (local, lang) {
            console.log('Test File Load from: "./' + this.config.defaultLang + '/' + local + '.json"');
            return {};
        },

        // Lang List
        list: []

    });

    // Set Config
    if (typeof tinyCfg.loader === "function") {
        this.loader = tinyCfg.loader;
    }

    if(typeof tinyCfg.varsSession === "string") {
        this.varsSession = tinyCfg.varsSession;
    }

    if (typeof tinyCfg.loader === "string") {
        this.defaultLang = tinyCfg.defaultLang;
    }

    if (Array.isArray(tinyCfg.list)) {
        this.list = tinyCfg.list;
    }

    // Complete
    return this;

};