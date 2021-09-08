//upadtes command
module.exports = {
  name: "updates",
  description: "Prints future updates",
  execute(message) {
    console.log("update select");
    //TODO: add more functions when adding more features
    message.channel.send(
      `Later features:
            +vote: Democracy (to be added later if I'm not lazy)
            +choose: Picks between options the user sets.
            +preference: Sets your preference for food.
            +list: Sends chat all available options (might scrap for overcrowding reasons).
        
        
        Future reworks:
            +options: Will only send 5 random items from total list
            +random: Can filter by food, drink, or place
            +help: replace chat message with embed for ✨presentation✨`
    );
  },
};
