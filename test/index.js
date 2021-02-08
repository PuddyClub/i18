    // i18 test
    const i18 = require('../api/index');
    const lang = new i18({
        defaultLang: 'en',
        loader: function (local, lang) {
            console.log('Test File Load from: "./' + lang + '/' + local + '.json"');
            return {};
        }
    });

    
    console.log(lang.getFile('test'));
    console.log(lang.getFile('test', 'pt-br'));