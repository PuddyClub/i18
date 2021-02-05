class i18 {

    // Constructor
    constructor() { return require('./files/constructor').apply(this, arguments); }

    // Get Lang File
    getFile() { return require('./files/getFile').apply(this, arguments); }

}

module.exports = i18;