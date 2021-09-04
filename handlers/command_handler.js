
require('../config.json');
const fs = require('fs');

const debug = true;

if(debug){


module.exports=(client,Discord)=>{
     const command_files=fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'))

     for(const file of command_files){
         const command = require(`../commands/${file}`)
         if(command.name){
             client.commands.set(command.name, command);
         }else{
             console.log('continued');
             continue;
         }
     }
}







// /**
//  * Message Handler
//  */
//  const prefix =config.prefix;
// client.on('messageCreate', message =>{

//     if( !message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split("/ +/");
//     const command = args.shift().toLowerCase();

//     uses++;
//     console.log(`uses: ${uses}`);
    
//     // switch(command){
//     //     case command==='ping':
//     //         console.log('ping successful');
//     //         message.channel.send('pong');
//     //         break;
//     //     case command==='random':
//     //         console.log('switch in random');
//     //         var food = testArray[Math.floor(Math.random()*testArray.length)];
//     //         message.channel.send(`You should get ${food}`);
//     //         break;
//     // }

//     if(command === 'ping'){
//         console.log('ping successful');
//         message.channel.send('pong');

//     }else if(command==='random'){

//         console.log('random select');
//         var food = randomGet();
//         message.channel.send(`You should get ${food}`);
        
//     }else if(command==='options'){
//         console.log('options select');
//         var strOut = '';
//         testArray.forEach(element => strOut+=element + ", ");
//         // console.log(`before ${strOut}`);
//         // strOut = strOut.slice(0,-2);
//         // console.log(`after ${strOut}`);

//         message.channel.send(`Here are your options: ${strOut.slice(0,-2)}`);

//     }else if(command==='help'){

//         console.log('help select');
//         message.channel.send(
//         `Functions:
//         +random: Sends chat a random food item you should get.
//         +options: Sends chat a bunch of options you can get.
//         +vote: Democracy (to be added later if I'm not lazy)
//         +help: you in here dummy`);

//     }else{
//         console.log('default');
//     }
// });

}else{console.log('command handler not in debug mode');}