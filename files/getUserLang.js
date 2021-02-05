module.exports = function (data) {

    // First Result
    let tinyResult = {
        now: this.defaultLang,
        user: this.defaultLang,
        session: this.defaultLang
    };

    // User Session
    if (typeof data.user === "string") {
        tinyResult.now = data.user;
        tinyResult.user = data.user;
    } else if (typeof data.session === "string") {
        tinyResult.now = data.session;
        tinyResult.session = data.session;
    }

    // User Lang
    this.userLang = tinyResult.now;

    // Complete
    return tinyResult;

};