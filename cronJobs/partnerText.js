/*
 * NextDactyl - Discord Bot
 * Copyright (c) 2025 Next Developments
 *
 * This project is licensed under the GNU Affero General Public License v3.0.
 * See LICENSE for more information.
 */

const {Client} = require("discord.js");
const {LogManager} = require("../classes/logManager");
const logManager = new LogManager();
var CronJob = require("cron").CronJob;

module.exports = {
  customId: "partnerText",
  /**
   *
   * Sends the Partner Text in a specified Channel every x hours
   *
   * @@param {Client} client
   */
  async execute(client) {
    //Every Day at midnight
    var job = new CronJob(
      "0 0 * * *",
      async function () {
        await client.channels.fetch(process.env.PARTNER_CHANNEL)

        await client.channels.cache.get(process.env.PARTNER_CHANNEL).send({ embeds: [
          {
            title: '',
            description: process.env.PARTNER_TEXT.replaceAll('"', ''),
            color: 6750054,
          }
        ]}).then(message => {
          message.crosspost()
        })
  
        await logManager.logString("Crosspost Message has been sent.")
      },
      null,
      true,
      "Europe/Amsterdam"
    );
    //Start Cronjob
    job.start();
  },
};
