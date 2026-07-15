/*
 * NextDactyl - Discord Bot
 * Copyright (c) 2025 Next Developments
 *
 * This project is licensed under the GNU Affero General Public License v3.0.
 * See LICENSE for more information.
 */

const crypto = require('crypto');

class Password {
    /**
     * Generates secure passwords
     */
    constructor() {
        this.generatePassword = async function (length = 16) {

            if (typeof length !== 'number' || length <= 0) return "";

            let password = "";

            let characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?/|~`";

            for(let i = 0; i < length; i++) {
                const idx = crypto.randomInt(0, characterSet.length);
                password += characterSet.charAt(idx)
            }

            return password
        }
    }
}

module.exports = {
    Password
}