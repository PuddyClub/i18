// Prepare Modules
const express = require('express');
const nunjucks = require('nunjucks');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');

// Prepare Express
const app = express();

// Cookie Session
app.use(cookieSession({
    keys: ['00000000000', '00000000000']
}));

// Body Parser
app.use(bodyParser.json());
const bodyParseN = bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
});

// Nunjucks
nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app
});

app.set('view engine', 'nunjucks');

// Static Files
const maxAge = '2592000000';
app.use(express.static(path.join(__dirname, '/public'), {
    maxAge: maxAge // uses milliseconds per docs
}));

// Timezone Module
const i18 = require('../index');
const i18Express = new i18(app, {

    // Vars Session Names
    cfg: {

        // Vars Sessions
        varsSession: {
            sessionLang: 'sessionLang',
            userLang: 'userLang',
            nowLang: 'nowLang'
        },

        // Lang List
        list: [
            { value: 'en', name: 'English' },
            { value: 'pt-br', name: 'Português Brasil' }
        ]

    },

    // Get CSRF Token
    getCsrfToken: function (req, res) {
        return new Promise(function (resolve) {
            bodyParseN(req, res, () => {

                // Return csrfToken
                resolve({
                    now: '',
                    server: ''
                });

                // Complete
                return;

            });
            return;
        });
    },

    // Get Is User
    getIsUser: function (req) {
        return false;
    },

    // URLs
    urls: {
        setLang: '/setLang'
    },

});

app.use(i18Express.insert());

// Homepage
app.all('/', bodyParseN, (req, res) => {

    // Console Result
    console.group(new Date().toString());

    // Req
    console.log(req.i18);

    console.groupEnd();

    // Render Page
    return res.render('test', { i18List: req.i18.getSelectedLang(), i18ClientRequest: req.i18.getClientWeb() });

});

// Start Timezone Module
i18Express.start();

app.listen(5000, function () {
    console.log('http://localhost:5000');
});

