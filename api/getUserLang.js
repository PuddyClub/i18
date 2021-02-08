module.exports = function (data) {

    // First Result
    let tinyResult = {
        now: this.defaultLang,
        user: this.defaultLang,
        session: this.defaultLang
    };



    // Is User
    if (data.isUser && (data.isUser === "on" || data.isUser === "true" || data.isUser === true)) {

        // Set Is User Value
        tinyResult.isUser = true;
        this.isUser = true;

        // User Session
        if (typeof data.user === "string") {
            tinyResult.now = data.user.replace(/\//g, '').replace(/\\/g, '');
            tinyResult.user = tinyResult.now;
        } else if (typeof data.session === "string") {
            tinyResult.now = data.session.replace(/\//g, '').replace(/\\/g, '');
            tinyResult.user = tinyResult.now;
        }

    }

    // Nope
    else {

        // Set Is User Value
        tinyResult.isUser = false;
        this.isUser = false;

        // User Session
        if (typeof data.session === "string") {
            tinyResult.now = data.session.replace(/\//g, '').replace(/\\/g, '');
            tinyResult.session = tinyResult.now;
        }

    }

    // User Lang
    this.userLang = tinyResult.now;

    // Complete
    return tinyResult;

};