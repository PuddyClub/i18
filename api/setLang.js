module.exports = async function (req, res, isUser = false, csrfToken = {
    server: '',
    now: ''
}) {

    // Yes
    if (req.method === "POST" && req.body && typeof req.body.value === "string") {

        // Check Code
        if (csrfToken.now !== csrfToken.server) {
            res.status(401); res.json({ code: 401, text: 'CSRFToken!' });
            return;
        }

        // Set Timezone
        if (req.body.type === "lang") {

            // Fix Value
            req.body.value = req.body.value.substring(0, 100);

            // Exist Value
            if (this.list.find(lang => lang.value === req.body.value)) {

                // No User
                if(!isUser) {
                    req.session[this.varsSession.sessionLang] = req.body.value;
                }

                // Yep
                else {
                    req.session[this.varsSession.userLang] = req.body.value;
                }
            
            }

        }

        // Result
        return res.json({ success: true });

    }

    // Nope
    else {

        // Result
        res.status(400);
        return res.json({ success: false, error: 'Invalid request!', code: 400 });

    }

};