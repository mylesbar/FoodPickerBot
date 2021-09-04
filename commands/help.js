//Help command
module.exports= {

    name: 'help',
    description: "Prints available commands",
    execute(message){


        console.log('help select');
        //TODO: add more functions when adding more features
        message.channel.send(
        `Functions:
        +random: Sends chat a random food item you should get.
        +options: Sends chat a bunch of predetermined options you can get.
        +set options:
        +vote: Democracy (to be added later if I'm not lazy)
        +help: you in here dummy`);


        
       
    }

}