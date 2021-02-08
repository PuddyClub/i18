class expressTimezone {

    // Constructor
    constructor(app, data) {

        // Insert App
        this.app = app;

        // Lodash Module
        const _ = require('lodash');
        this.data = _.defaultsDeep({}, data, {

            // Vars Session Names
            varsSession: {
                sessionLang: 'sessionLang',
                userLang: 'userLang',
                nowLang: 'nowLang'
            },

            // URLs
            urls: {
                setLang: '/setLang'
            },

        });

        // Prepare Module
        const apiPrepare = require('./api');
        this.module = new apiPrepare(this.data.cfg);

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
            const userLang = tinyThis.module.getUserLang({
                session: req.session[tinyCfg.varsSession.sessionLang],
                user: req.session[tinyCfg.varsSession.userLang]
            });

            // Set Session
            req.session[tinyCfg.varsSession.sessionLang] = userLang.session;
            req.session[tinyCfg.varsSession.userLang] = userLang.user;
            req.session[tinyCfg.varsSession.nowLang] = userLang.now;

            // Complete
            next();
            return;

        };
    }

    // Start Module
    start() {

        // Get This
        const tinyThis = this;

        // Set Cookie
        this.app.post(this.data.urls.setLang, async function (req, res) {

            // Complete
            return;

        });

    }

};

module.exports = expressTimezone;