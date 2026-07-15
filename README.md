### 📝 **`README.md`**

# ⚙️ NextDactyl – Discord Bot for Pterodactyl

![GitHub License](https://img.shields.io/github/license/NextDevelopments/NextDactyl?style=for-the-badge)
![Node.js Version](https://img.shields.io/badge/Node.js-20.x-green?style=for-the-badge)
![Discord.js](https://img.shields.io/badge/discord.js-v14-blue?style=for-the-badge)
![NextDevelopments](https://img.shields.io/badge/Made%20by-Next%20Developments-9cf?style=for-the-badge)

---

## 🧠 Overview

**NextDactyl** is an advanced, open-source Discord bot built for seamless integration with the **Pterodactyl Panel API**.  
It allows users to **create, manage, and monitor servers and accounts directly from Discord** — fast, secure, and elegant.

> 🛠️ Developed by **Next Developments**  
> 🌐 Designed for **Pterodactyl-based hosting panels**

---

## 🚀 Features

- 💰 **Virtual Coin System** – earn, spend, and manage your balance  
- 🛒 **Server Shop** – purchase servers with coins  
- 🕹️ **Mini-Games** – earn coins through fun Discord games  
- ⚙️ **Server Management** – start, stop, and manage your servers directly  
- 📊 **User Leaderboards** – track top players and richest users  
- 🧾 **Giftcode System** – generate and redeem rewards  
- 🗃️ **Admin Tools** – manage coins, servers, and user accounts  
- 🌍 **Multi-language Support** – `de-DE`, `en-US`, `pl-PL`, `es-ES`, `nl-NL`, `fr-FR`

---

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/NextDevelopments/NextDactyl.git
cd NextDactyl
````

### 2️⃣ Configure Environment Variables

Create a file named `config.env` and fill in the required settings:

```env
BOT_TOKEN="your_discord_bot_token"
BOT_CLIENT_ID="your_discord_client_id"
BOT_SINGLE_SERVER_ID="your_server_id"

PTERODACTYL_API_KEY="ptla_..."
PTERODACTYL_ACCOUNT_API_KEY="ptlc_..."
PTERODACTYL_API_URL="https://panel.example.com"

DELETION_OFFSET=2
PRICE_OFFSET=0.5
ADMIN_LIST=[123456789012345678]

FOOTER_TEXT="v.1  | 2025 |  Next Developments"
DEFAULT_LANGUAGE="en-US"
PORT="53134"
SECRET="Next"
```

> 🧩 **Tip:**
> Use valid Pterodactyl **Application** and **Client** API keys.
> The `ptla_` key is for administrative actions, and `ptlc_` for user-based actions.

---

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Bot

```bash
node bot.js
```

---

## 🧬 Status Rotation

NextDactyl automatically updates its Discord presence with:

* 🖥️ Current panel name
* 👥 Active customer count
* 🧱 Total server count

---

## 🌐 Supported Languages

| Language     | Locale  | Example  |
| ------------ | ------- | -------- |
| 🇩🇪 German  | `de-DE` | Standard |
| 🇺🇸 English | `en-US` | Default  |
| 🇵🇱 Polish  | `pl-PL` | Optional |
| 🇪🇸 Spanish | `es-ES` | Optional |
| 🇳🇱 Dutch   | `nl-NL` | Optional |
| 🇫🇷 French  | `fr-FR` | Optional |

---

## 🧰 Technologies Used

* [Node.js](https://nodejs.org/) – Backend runtime
* [Discord.js v14](https://discord.js.org/) – Bot framework
* [Axios](https://axios-http.com/) – API communication
* [Quick.db](https://www.npmjs.com/package/quick.db) – Persistent storage
* [@napi-rs/canvas](https://www.npmjs.com/package/@napi-rs/canvas) – Dynamic images

---

## 🤝 Contributing

Contributions are **welcome**!
To contribute:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

Please keep your code clean and follow ESLint conventions.

---

## 🧾 License

```
NextDactyl - Discord Bot
Copyright (c) 2025 Next Developments

This project is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

You are free to:
  ✅ Use, copy, and modify this software
  ✅ Host public or private instances
  ✅ Share modifications under the same license

You are **not permitted** to:
  ❌ Re-license or sell the software under another name
  ❌ Remove attribution to Next Developments
  ❌ Distribute closed-source forks

For full license text, see the LICENSE file.
```

---

## 📢 Credits

Developed with ❤️ by **Next Developments**

> “Innovation through simplicity.”

Join our community:

* 🌍 Website: [https://next-systems.de](https://cp.next-systems.de)
* 🧭 Discord: [Next Developments](https://discord.gg/nextde)
* 🌍 BuiltByBit: [Resource](https://builtbybit.com/resources/nextdactyl-discord-bot.79865/)
* 🛠️ Powered by the [Pterodactyl Project](https://pterodactyl.io/)

---

## 🧩 Disclaimer

This bot is **not affiliated with or endorsed by Pterodactyl Software**.
NextDactyl is an independent, community-driven integration designed for open use.

### 📄 **`LICENSE`**
```
NextDactyl - Discord Bot
Copyright (c) 2025 Next Developments
All rights reserved.

Licensed under the GNU Affero General Public License v3.0 (AGPLv3)

You may copy, distribute, and modify this software as long as you track changes/dates in source files.  
Any modifications must remain under the same license (AGPLv3).  
The name “NextDactyl” and “Next Developments” are protected marks and may not be used for derivative branding.

For the full license text, visit:
https://www.gnu.org/licenses/agpl-3.0.html
````
