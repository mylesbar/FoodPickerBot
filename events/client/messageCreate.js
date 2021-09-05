const { CommandStartedEvent } = require("mongodb");
const config = require("../../config.json");
const profileModel = require("../../models/profileSchema");

console.log(`-----------------------------------------`);
console.log('Start:');
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
  "tacos"
];

console.log(`Food array: ${testArray}`);

module.exports = async (Discord, client, message) => {
  const prefix = config.PREFIX;

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //create user in collection if not already in db
  let profileData;
  try {
    console.log(`Sender ID: ${message.author}`);
    profileData = await profileModel.findOne({ userID: message.author.id });
    //console.log(`loaded profile data: ${profileData}`);
    if (!profileData) {
      console.log('Creating new entry');
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        preference: "none set",
      });
      profile.save();
    }else{console.log(`user found: ${profileData.userID}`);}
  } catch (err) {
    console.log(err);
  }

  //message reading
  const args = message.content.slice(prefix.length).split("/ +/");
  const command = args.shift().toLowerCase();

  //increment Total use counter
  uses++;
  console.log(`uses: ${uses}`);

  //command switcher
  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "random") {
    client.commands.get("random").execute(message, args, testArray);
  } else if (command === "options") {
    client.commands.get("options").execute(message, args, testArray);
  } else if (command === "help") {
    client.commands.get("help").execute(message, args);
  } else if(command ==="user"){
    client.commands.get("user").execute(message, profileData, args);
  } else{
    console.log("default");
  }

  console.log(`-----------------------------------------`);
};
