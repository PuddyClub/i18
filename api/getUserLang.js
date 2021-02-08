module.exports = function (data) {

    // First Result
    let tinyResult = {
        now: this.defaultLang,
        user: this.defaultLang,
        session: this.defaultLang
    };

    // User Session
    if (typeof data.user === "string") {
        tinyResult.now = data.user.replace(/\//g, '').replace(/\\/g, '');
        tinyResult.user = tinyResult.now;
    } else if (typeof data.session === "string") {
        tinyResult.now = data.session.replace(/\//g, '').replace(/\\/g, '');
        tinyResult.session = tinyResult.now;
    }

    // Is User
    if (data.isUser && (data.isUser === "on" || data.isUser === "true" || data.isUser === true)) {
        tinyResult.isUser = true;
        this.isUser = true;
    } else {
        tinyResult.isUser = false;
        this.isUser = false;
    }

    // User Lang
    this.userLang = tinyResult.now;

    // Complete
    return tinyResult;

};