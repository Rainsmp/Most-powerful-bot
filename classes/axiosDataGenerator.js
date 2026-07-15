/*
 * NextDactyl - Discord Bot
 * Copyright (c) 2025 Next Developments
 *
 * This project is licensed under the GNU Affero General Public License v3.0.
 * See LICENSE for more information.
 */

class AxiosDataGenerator {
  /**
   * Generates a matching Axios Config
   *
   * @param {*} authKey
   */
  constructor(authKey) {
    this.generateConfig = function () {
      return {
        headers: {
          Authorization: `Bearer ${authKey}`,
          "Content-Type": `application/json`,
          Accept: `application/json`,
        },
      };
    };
  }
}

module.exports = {
  AxiosDataGenerator,
};
