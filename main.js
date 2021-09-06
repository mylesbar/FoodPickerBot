//main js file

/**
 * Startup and Discord API Setup
 */

//requires
const config = require("./config.json");
const Discord = require("discord.js");
const mongoose = require("mongoose");

const localCopy = true;
const fs = require("fs");
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

var prefix;
var MONGODB_SRV;
var DISCORD_TOKEN;

prefix = config.PREFIX;
MONGODB_SRV = config.MONGODB_SRV;
DISCORD_TOKEN = config.DISCORD_TOKEN;

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

mongoose
  .connect(MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log(err);
  });

["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

//Token omitted to separate file
client.login(config.DISCORD_TOKEN);
