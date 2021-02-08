class expressI18 {

    // Constructor
    constructor(app, data = {}, getCsrfToken = function (req, res) {
        return {
            now: '',
            server: ''
        };
    }) {

        // Insert App
        this.app = app;
        this.getCsrfToken = getCsrfToken;

        // Lodash Module
        const _ = require('lodash');
        this.data = _.defaultsDeep({}, data, {

            // Vars Session Names
            cfg: {
                varsSession: {
                    sessionLang: 'sessionLang',
                    userLang: 'userLang',
                    nowLang: 'nowLang'
                }
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
                session: req.session[tinyThis.data.cfg.varsSession.sessionLang],
                user: req.session[tinyThis.data.cfg.varsSession.userLang]
            });

            // Set Session
            req.session[tinyThis.data.cfg.varsSession.sessionLang] = userLang.session;
            req.session[tinyThis.data.cfg.varsSession.userLang] = userLang.user;
            req.session[tinyThis.data.cfg.varsSession.nowLang] = userLang.now;

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

module.exports = expressI18;