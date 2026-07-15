/*
 * NextDactyl - Discord Bot
 * Copyright (c) 2025 Next Developments
 *
 * This project is licensed under the GNU Affero General Public License v3.0.
 * See LICENSE for more information.
 */

const Discord = require("discord.js");
const { performance } = require("perf_hooks");
const { prependOnceListener } = require("process");
const { DataBaseInterface } = require("./../classes/dataBaseInterface")
const { EconomyManager } = require("./../classes/economyManager")
const database = new DataBaseInterface()
const economyManager = new EconomyManager()

module.exports = {
  name: "messageCreate",
  once: false,
  /**
   *
   * @param {Discord.Message} message
   * @param {Discord.Client} client
   */
  async execute(message, client) {
    //ADD 1 COIN TO USER
    let analogCommand = client.analogCommands.get("currencyGiver");
    await analogCommand.execute(message, client, database, economyManager);

    analogCommand = client.analogCommands.get("countingGame");
    await analogCommand.execute(message, client, database, economyManager);

    //RELOAD COMMAND
    if (message.content.includes("pdm reload")) {
      let analogCommand = client.analogCommands.get("reload");
      await analogCommand.execute(message, client);
    }

    //EVAL COMMAND
    if (message.content.includes("pdm eval ?")) {
      let analogCommand = client.analogCommands.get("eval");
      await analogCommand.execute(message, client);
    }

    //Joke
    if (message.content.includes("pdm delete ?")) {
      let analogCommand = client.analogCommands.get("joke");
      await analogCommand.execute(message, client);
    }

    //BAN
    if (message.content.includes("pdm ban ?")) {
      let analogCommand = client.analogCommands.get("ban");
      await analogCommand.execute(message, client);
    }
  },
};
