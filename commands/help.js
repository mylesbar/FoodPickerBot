//Help command
module.exports = {
  name: "help",
  description: "Prints available commands",
  execute(message) {
    console.log("help select");
    //TODO: add more functions when adding more features
    message.channel.send(
      `Core Functions:
        +random: Sends chat a random food/drink item you should get 🍔🍺
        +options: Sends chat 5 random options from the database for you to choose 🔍
        +user: Sends chat your data & usage stats 📊
        +updates: Sends chat future update plans 📓
        +help: You in here dummy 🤨

        Data Functions:
            +add [Food/Drink/Place] <ItemHere> : Adds specified item to total food options list. (i.e. "+add food pizza")`
    );
  },
};
