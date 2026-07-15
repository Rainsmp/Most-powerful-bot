/*
 * NextDactyl - Discord Bot
 * Copyright (c) 2025 Next Developments
 *
 * This project is licensed under the GNU Affero General Public License v3.0.
 * See LICENSE for more information.
 */

const express = require("express")
const port = process.env.PORT
const app = express()

const auth = require("./routers/auth")
const refresh = require("./routers/refresh")

module.exports = {
    customId: "dashboard",

    async execute(client, panel, boosterManager, cacheManager, economyManager, logManager, databaseInterface, t) {
        app.use(express.static(__dirname + "/dashboard/"))
        app.use('/auth', auth);
        app.use('/refresh', refresh)

        app.listen(port, () => console.log(`Dashboard running on localhost with port ${port}`));
    }
}