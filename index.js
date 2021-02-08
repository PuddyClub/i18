class expressTimezone {

    // Constructor
    constructor(app, data) {

        // Insert App
        this.app = app;

        // Lodash Module
        const _ = require('lodash');
        this.cfg = _.defaultsDeep({}, data, {
            varNames: {
                sessionLang: 'sessionLang',
                userLang: 'userLang',
                nowLang: 'nowLang'
            }
        });

        // Prepare Module
        this.module = require('./files');

        // Complete
        return this;

    }

    // Get Module
    getModule() { return this.module; }

    // Insert Express
    insert() {
        const tinyThis = this;
        return (req, res, next) => {

            // Get User Lang
            const userLang = tinyThis.i18.getUserLang({
                session: req.session[tinyCfg.varNames.sessionLang],
                user: req.session[tinyCfg.varNames.userLang]
            });

            // Set Session
            req.session[tinyCfg.varNames.sessionLang] = userLang.session;
            req.session[tinyCfg.varNames.userLang] = userLang.user;
            req.session[tinyCfg.varNames.nowLang] = userLang.now;

            // Complete
            next();
            return;

        };
    }

};

module.exports = expressTimezone;