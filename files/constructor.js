module.exports = function (data) {

    // Lodash Module
    const _ = require('lodash');

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
    this.loader = tinyCfg.loader;
    this.defaultLang = tinyCfg.defaultLang;
    this.list = tinyCfg.list;

    // Complete
    return this;

};