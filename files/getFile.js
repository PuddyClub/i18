module.exports = function (local, lang) {

    // Obj Type
    const objType = require('@tinypudding/puddy-lib/get/objType');

    // Prepare Result
    const result = {};

    // Default Lang
    let defaultLang = {};
    try {
        defaultLang = this.loader.apply(this, [local, this.defaultLang]);
    } catch (err) {
        defaultLang = {};
    }

    // The Lang
    let theLang = {};
    if (lang && lang !== this.defaultLang) {
        try {
            theLang = this.loader.apply(this, [local, lang]);
        } catch (err) {
            theLang = {};
        }
    }

    // Get Default Language
    if (objType(defaultLang, 'object')) {
        for (const item in defaultLang) {
            if (typeof defaultLang[item] === "string") {
                result[item] = defaultLang[item];
            }
        }
    }

    // Get Selected Language
    if (objType(theLang, 'object')) {
        for (const item in theLang) {
            if (typeof theLang[item] === "string") {
                result[item] = theLang[item];
            }
        }
    }

    // Complete
    return result;

};
