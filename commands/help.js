//Help command
module.exports= {

    name: 'help',
    description: "Prints available commands",
    execute(message){


        console.log('help select');
        //TODO: add more functions when adding more features
        message.channel.send(
        `Core Functions:
        +random: Sends chat a random food item you should get.
        +options: Sends chat a bunch of predetermined options you can get.
        +user: Sends chat your data & usage stats.
        +help: you in here dummy

        Data Functions:
        +add [Food/Drink/Place] <ItemHere>: Adds specified item to total food options list. (i.e. "+add food pizza")
            
        Later features:
        +vote: Democracy (to be added later if I'm not lazy)
        +choose: Picks between options the user sets.
        +preference: Sets your preference for food.
        +list: Sends chat all available options (might scrap for overcrowding reasons).
        
        
        Future reworks:
            +options: Will only send 5 random items from total list
            +random: Can filter by food, drink, or place`);


        
       
    }

}