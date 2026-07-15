/*
 * NextDactyl - Discord Bot
 * Copyright (c) 2025 Next Developments
 *
 * This project is licensed under the GNU Affero General Public License v3.0.
 * See LICENSE for more information.
 */

// ──────────────── Core Requirements ────────────────
const dotenv = require('dotenv');
const axios = require('axios');
const { GlobalFonts } = require('@napi-rs/canvas');
const { join } = require('node:path');

// ──────────────── Startup & Status Handler ────────────────

// suppress all console output from other libs before they load
console.log = console.info = console.warn = console.error = () => {}; // disables all 3rd-party logs

// Logging util – stays active even after obfuscation
const PREFIX = '[Next Developments]';
function ND_write(msg) {
  process.stdout.write(`${PREFIX} ${msg}\n`);
}

// Early startup messages
ND_write(`Boot initiated — PID: ${process.pid}`);
ND_write('Loading environment and starting services...');

// Heartbeat so Daemons like Pterodactyl see the process as alive
const _heartbeatInterval = 15 * 1000; // 15 s
setInterval(() => {
  process.stdout.write(`${PREFIX} heartbeat ${new Date().toISOString()}\n`);
}, _heartbeatInterval);

// ──────────────── Pterodactyl Integration ────────────────

// Try to derive the panel name automatically
async function getPanelName() {
  try {
    const res = await axios.get(process.env.PTERODACTYL_API_URL, {
      headers: { Accept: 'text/html' },
      timeout: 5000,
    });
    const match = res.data?.match(/<title>(.*?)<\/title>/i);
    if (match && match[1]) return match[1].trim();
    return new URL(process.env.PTERODACTYL_API_URL).hostname;
  } catch {
    return 'Dashboard';
  }
}

// List servers using Application API (Next Systems uses ptla_ as admin)
async function getAllPterodactylServers() {
  try {
    const res = await axios.get(`${process.env.PTERODACTYL_API_URL}/api/application/servers`, {
      headers: {
        Authorization: `Bearer ${process.env.PTERODACTYL_API_KEY}`,
        Accept: 'application/json',
      },
    });
    return res.data?.data || [];
  } catch (e) {
    ND_write(`Error fetching server list: ${e.message}`);
    return [];
  }
}

// Server count via Application API
async function getServerCount() {
  try {
    const res = await axios.get(`${process.env.PTERODACTYL_API_URL}/api/application/servers`, {
      headers: {
        Authorization: `Bearer ${process.env.PTERODACTYL_ACCOUNT_API_KEY}`,
        Accept: 'application/json',
      },
    });
    return Array.isArray(res.data?.data) ? res.data.data.length : 0;
  } catch (e) {
    ND_write(`Error fetching server count: ${e.message}`);
    return 0;
  }
}

// Count distinct users with servers
function collectUsersWithServers(servers) {
  const ids = new Set();
  for (const s of servers) {
    const u = s.attributes?.user;
    if (u) ids.add(u);
  }
  return Array.from(ids);
}

// Main rotating presence updater
async function updateStatus(client) {
  const panelName = await getPanelName();
  ND_write(`Detected panel name: ${panelName}`);

  while (true) {
    try {
      const servers = await getAllPterodactylServers();
      const users = collectUsersWithServers(servers);
      const serverCount = await getServerCount();

      await client.user.setPresence({
        activities: [{ name: `on ${panelName}!`, type: 0 }], // PLAYING
        status: 'dnd',
      });
      await new Promise(r => setTimeout(r, 60_000));

      await client.user.setPresence({
        activities: [{ name: `with over ${users.length} customers`, type: 3 }], // WATCHING
        status: 'dnd',
      });
      await new Promise(r => setTimeout(r, 60_000));

      await client.user.setPresence({
        activities: [{ name: `over ${serverCount} servers`, type: 3 }], // WATCHING
        status: 'dnd',
      });
      await new Promise(r => setTimeout(r, 60_000));
    } catch (err) {
      ND_write(`updateStatus error: ${err.message || err}`);
      await new Promise(r => setTimeout(r, 60_000));
    }
  }
}

// Hook called from client.once('ready')
global.ND_onReady = function (client) {
  ND_write('Bot successfully started.');
  updateStatus(client);
};

// ──────────────── Environment / Discord Init ────────────────

// Load .env
dotenv.config({ path: './config.env' });

const { GatewayIntentBits, Partials, Collection } = require('discord.js');
const { ManagerClient } = require('./managers/manager');

const client = new ManagerClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [
    Partials.Channel,
    Partials.User,
    Partials.GuildMember,
    Partials.ThreadMember,
  ],
});

const token = process.env.BOT_TOKEN;

// Load global fonts
GlobalFonts.registerFromPath(join(__dirname, 'fonts', 'impact.ttf'), 'impact');

// Create collections
client.commands = new Collection();
client.events = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.analogCommands = new Collection();
client.cronJobs = new Collection();

// Load Events
client.loadEvents();

// Hook ready event
client.once('ready', () => ND_onReady(client));

// Login
client.login(token);
