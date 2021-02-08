module.exports = function (type, value, csrfToken) {
    return new Promise(function (resolve, reject) {

        fetch(`{{setLangURL}}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type: type, value: value, csrfToken: csrfToken })
        })
            .then(() => {
                resolve();
                return;
            })
            .catch(err => {
                reject(err);
                return;
            });

        // Complete
        return;

    });

};