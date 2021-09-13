// Chosoe Command

/**
 * Pseudo-code: 
 *  command format: +options [item 1],[item 2],[item 3],[item 4].....[item n]
 * 
 *  command: +options 
 *          Bot: list your options separated by a comma.
 *          read reply message
 * 
 *  No options are stored in db.
 * 
 * read aux from message
 * 
 */

const itemModel =  require ("../models/itemSchema");
const profileModel = require("../models/profileSchema");
const botModel = require("../models/botSchema");
const config = require("../config.json");

module.exports = {

    name: "choose",
    description: "Prints out a selection from user-set options. User set options are not stored in the database",

    async execute(message, aux, args){

        prefix = config.PREFIX;
        console.log("Choose option selected");


        msg = message;
        console.log(`message: ${msg}`);

        msg = message.content.slice(prefix.length).split("/ +/");
        console.log(`slice: ${msg}`);
        msg = msg.shift();
        console.log(`shift: ${msg}`);
        // console.log(typeof aux);
        // console.log(aux);

        // concat = aux.join('');
        // console.log(`concat: ${concat}`);

        
        // concat = concat.split(',');
        // console.log(concat);
        // console.log(`concat split: ${concat}`);
        //let splitter = aux.split(",");




    }

};