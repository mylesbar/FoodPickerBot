const config = require("../../config.json");

var uses = 0;

//before db
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

module.exports = async (Discord, client, message) => {
  const prefix = config.PREFIX;

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split("/ +/");
  const command = args.shift().toLowerCase();

  uses++;
  console.log(`uses: ${uses}`);

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
};
