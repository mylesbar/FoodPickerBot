//Help command
module.exports = {
  name: "help",
  description: "Prints available commands",
  execute(message) {
    console.log("help select");
    //TODO: add more functions when adding more features
    message.channel.send(
      `Core Functions:
        +random: Sends chat a random food/drink item you should get ๐๐บ
        +options: Sends chat 5 random options from the database for you to choose ๐
        +user: Sends chat your data & usage stats ๐
        +updates: Sends chat future update plans ๐
        +help: You in here dummy ๐คจ
        +choose: Chooses an item from a comma-separated list of foods you send it (e.g. +choose pizza, ramen, burger)

        Data Functions:
            +add [Food/Drink/Place] <ItemHere> : Adds specified item to total food options list. (i.e. "+add food pizza")`
    );
  },
};
