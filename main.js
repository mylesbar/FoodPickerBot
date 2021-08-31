//main js file

/**
 * Startup and Discord API Setup
 */

//requires
//const config = require("./config.json");
const Discord = require("discord.js");
const mongoose = require("mongoose");
const express = require('express');

const app = express();



const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"]
});

const prefix = process.env.PREFIX;
const fs = require("fs");
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
const MONGODB_SRV = process.env.MONGODB_SRV;


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



client.commands = new Discord.Collection();
client.events = new Discord.Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// ['command_handler','event_handler'].forEach(handler => {
//     require(`./handlers/${handler}`)(client,Discord);
// })

client.once("ready", () => {
  console.log("Foodpicker bot is online");
});

/**
 * Variables & Date/Time
 */

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
today = mm + "/" + dd + "/" + yyyy;

var uses = 0;
var testArray = [
  "pizza",
  "burger",
  "ramen",
  "chinese takeout",
  "popeyes",
  "checkers",
  "halal",
  "bdubs",
  "cook your own food dummy",
  "quesadillas",
];
console.log(`Food: ${testArray}`);

/**
 * Message Handler
 */
client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split("/ +/");
  const command = args.shift().toLowerCase();

  uses++;
  console.log(`uses: ${uses}`);

  // switch(command){
  //     case command==='ping':
  //         console.log('ping successful');
  //         message.channel.send('pong');
  //         break;
  //     case command==='random':
  //         console.log('switch in random');
  //         var food = testArray[Math.floor(Math.random()*testArray.length)];
  //         message.channel.send(`You should get ${food}`);
  //         break;
  // }

  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "random") {
    client.commands.get("random").execute(message, args, testArray);
  } else if (command === "options") {
    client.commands.get("options").execute(message, args, testArray);
  } else if (command === "help") {
    client.commands.get("help").execute(message, args);
  } else {
    console.log("default");
  }
});

//Token omitted to separate file

client.login(process.env.DISCORD_TOKEN);