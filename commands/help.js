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
        +help: you in here dummy
        +user: Sends chat your data & usage stats.

        Data Functions:
        +add [Food/Drink] [FoodItemHere]: Adds specified item to total food options list. (i.e. "+add food pizza")
            
        Later features:
        +vote: Democracy (to be added later if I'm not lazy)
        +choose: Picks between options the user sets.
        +preference: Sets your preference for food.
        +list: Sends chat all available options.
        
        
        Future options rework: 5 random items from total list`);


        
       
    }

}