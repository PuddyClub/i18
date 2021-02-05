class i18 {

    // Constructor
    constructor() { return require('./files/constructor').apply(this, arguments); }

    // Get Lang File
    getFile() { return require('./files/getFile').apply(this, arguments); }

    // Get Lang List
    getLangList() { return this.list; }

    // Get Lang List
    getDefaultLang() { return this.defaultLang; }

    // Get Selected Lang
    getSelectedLang() { return require('./files/getSelectedLang').apply(this, arguments); }

    // Get User Lang
    getUserLang() { return require('./files/getUserLang').apply(this, arguments); }

}

module.exports = i18;