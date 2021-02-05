class i18 {

    // Constructor
    constructor() { return require('./files/constructor').apply(this, arguments); }

    // Get Lang File
    getFile() { return require('./files/getFile').apply(this, arguments); }

    // Get Lang List
    getLangList() { return require('./files/getLangList').apply(this, arguments); }

    // Get Selected Lang
    getSelectedLang() { return require('./files/getSelectedLang').apply(this, arguments); }

}

module.exports = i18;