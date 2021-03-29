module.exports = function (data) {

    // Lodash Module
    const _ = require('lodash');

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

        // URLs
        urls: {
            setLang: '/setLang'
        },

        // Lang List
        list: []

    });

    // Set Config
    if (typeof tinyCfg.loader === "function") {
        this.loader = tinyCfg.loader;
    }

    // Vars Session
    this.varsSession = tinyCfg.varsSession;

    // Default Lang
    if (typeof tinyCfg.defaultLang === "string") {
        this.defaultLang = tinyCfg.defaultLang;
    }

    if (Array.isArray(tinyCfg.list)) {
        this.list = tinyCfg.list;
    }

    // URLs
    this.urls = tinyCfg.urls;

    // Complete
    return this;

};