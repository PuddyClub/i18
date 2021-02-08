class i18 {

    // Constructor
    constructor() { return require('./constructor').apply(this, arguments); }

    // Get Lang File
    setLang() { return require('./setLang').apply(this, arguments); }

    // Get Lang File
    getFile() { return require('./getFile').apply(this, arguments); }

    // Get Lang List
    getLangList() { return this.list; }

    // Get Lang List
    getDefaultLang() { return this.defaultLang; }

    // Get Selected Lang
    getSelectedLang() { return require('./getSelectedLang').apply(this, arguments); }

    // Get User Lang
    getUserLang() { return require('./getUserLang').apply(this, arguments); }

}

module.exports = i18;