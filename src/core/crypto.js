const crypto = require('crypto');

class Crypto {
    constructor() {
        this.crypto = crypto;
    }

    static async hash(password) {
        return new Promise((resolve, reject) => {
            const salt = crypto.randomBytes(16).toString('hex');

            console.log(salt);
            crypto.scrypt(password, salt, 64, (err, derivedKey) => {
                if (err) reject(err);
                resolve(salt + ':' + derivedKey.toString('hex'));
            })
        });
    }
}

module.exports = Crypto;