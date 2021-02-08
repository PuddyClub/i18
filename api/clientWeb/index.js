// Base Data
let baseData = null;

module.exports = function () {

    // Template
    if(!baseData) { baseData = require('./base').toString();}
    return baseData.replace('{{setLangURL}}', this.urls.setLang);

};