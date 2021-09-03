//main js file

/**
 * Startup and Discord API Setup
 */

//requires
const config = require("./config.json");
const Discord = require("discord.js");
const mongoose = require("mongoose");


const localCopy = true;

var prefix;
var MONGODB_SRV;
var DISCORD_TOKEN;

if (localCopy === true) {
  //local or rasPi config
  prefix = config.PREFIX;
  MONGODB_SRV = config.MONGODB_SRV;
  DISCORD_TOKEN = config.DISCORD_TOKEN;
} else {
  //heroku config
  prefix = process.env.PREFIX;
  MONGODB_SRV = process.env.MONGODB_SRV;
  DISCORD_TOKEN = process.env.DISCORD_TOKEN;
}

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

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

const fs = require("fs");
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});


/**
 * Variables & Date/Time
 */

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
today = mm + "/" + dd + "/" + yyyy;



//Token omitted to separate file

client.login(config.DISCORD_TOKEN);