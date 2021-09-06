
require('../config.json');
const fs = require('fs');

//debug mode for cloud hosting (maybe?)
const debug = true;




module.exports=(client,Discord)=>{
     const command_files=fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'))

     for(const file of command_files){
         const command = require(`../commands/${file}`)
         if(command.name){
             client.commands.set(command.name, command);
             console.log(`set: ${command.name}`);
         }else{
             console.log('continued');
             continue;
         }
     }
}


