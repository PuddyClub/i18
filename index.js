class expressI18 {

    // Constructor
    constructor(app, data = {}) {

        // Insert App
        this.app = app;

        // Lodash Module
        const _ = require('lodash');
        this.data = _.defaultsDeep({}, data, {

            // Vars Session Names
            cfg: {

                varsSession: {
                    sessionLang: 'sessionLang',
                    userLang: 'userLang',
                    nowLang: 'nowLang'
                },

                // URLs
                urls: {
                    setLang: '/setLang'
                },

            },

            // Get CSRF Token
            getCsrfToken: function (req, res) {
                return {
                    now: '',
                    server: ''
                };
            }

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
    insert(checkIsUser) {
        const tinyThis = this;
        return async (req, res, next) => {

            // Is User
            let isUser = false;

            // Check Is User
            if (typeof checkIsUser === "function") { isUser = await checkIsUser(req, res); }
            else if (typeof checkIsUser === "boolean") { isUser = checkIsUser; }

            // Get User Lang
            const userLang = tinyThis.module.getUserLang({
                session: req.session[tinyThis.data.cfg.varsSession.sessionLang],
                user: req.session[tinyThis.data.cfg.varsSession.userLang],
                isUser: isUser
            });

            // Set Session
            req.session[tinyThis.data.cfg.varsSession.sessionLang] = userLang.session;
            req.session[tinyThis.data.cfg.varsSession.userLang] = userLang.user;
            req.session[tinyThis.data.cfg.varsSession.nowLang] = userLang.now;

            // Module
            req.i18 = tinyThis.module;
            req.i18IsUser = userLang.isUser;

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
        this.app.post(this.data.cfg.urls.setLang, async function (req, res) {

            // Send Request
            const csrfToken = await tinyThis.data.getCsrfToken(req, res);
            req.i18.setLang.apply(req.i18, [req, res, csrfToken]);

            // Complete
            return;

        });

    }

};

module.exports = expressI18;