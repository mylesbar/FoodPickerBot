//Help command
module.exports= {

    name: 'help',
    description: "Prints available commands",
    execute(message){


        console.log('help select');
        message.channel.send(
        `Functions:
        +random: Sends chat a random food item you should get.
        +options: Sends chat a bunch of options you can get.
        +vote: Democracy (to be added later if I'm not lazy)
        +help: you in here dummy`);


        
       
    }

}