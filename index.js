//main js file

/**
 * Startup
 */
const Discord = require('discord.js');
const client = new Discord.Client( {intents: ["GUILDS", "GUILD_MESSAGES"]});
client.once('ready', () =>{ 
    console.log('Foodpicker bot is online');
} );

/**
 * Variables & Date/Time
 */

 var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
 var yyyy = today.getFullYear();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 today = mm + '/' + dd + '/' + yyyy;

var uses = 0;

var testArray = ["pizza","burger","ramen","chinese takeout","popeyes","checkers","halal","bdubs","cook your own food dummy","quesadillas"];
console.log(`Food: ${testArray}`);

function randomGet(){
    return testArray[Math.floor(Math.random()*testArray.length)];
}

/**
 * Message Handler
 */
 const prefix ='+';
client.on('messageCreate', message =>{

    if( !message.content.startsWith(prefix) || message.author.bot) return;

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

    if(command === 'ping'){
        console.log('ping successful');
        message.channel.send('pong');

    }else if(command==='random'){

        console.log('random select');
        var food = randomGet();
        message.channel.send(`You should get ${food}`);
        
    }else if(command==='options'){
        console.log('options select');
        message.channel.send(`Here are your options: ${testArray}`);

    }else if(command==='help'){

        console.log('help select');
        message.channel.send(
        `Functions:
        +random: Sends chat a random food item you should get.
        +options: Sends chat a bunch of options you can get.
        +vote: Democracy (to be added later if I'm not lazy)
        +help: you in here dummy`);

    }else{
        console.log('default');
    }


    
});
//Token omitted to separate file
client.login('');


