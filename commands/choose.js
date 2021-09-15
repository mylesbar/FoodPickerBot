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

const itemModel = require("../models/itemSchema");
const profileModel = require("../models/profileSchema");
const botModel = require("../models/botSchema");
const config = require("../config.json");

module.exports = {

    name: "choose",
    description: "Prints out a selection from user-set options. User set options are not stored in the database",

    async execute(message, aux, args) {

        prefix = config.PREFIX;
        console.log("Choose option selected");
        let result;

        if (aux) {
            console.log(typeof aux);
            console.log(aux);
            concat = aux.join('');
            console.log(`concat: ${concat}`);
            concat = concat.split(',');
            console.log(concat);

            /**
             * TODO:
             *  Loop Through Array, eliminate any commas, pick random option
             */

            for (i = 0; i < concat.length; i++) {
                concat[i] = concat[i].replace(',', '');
            }
            console.log(`concat replace commas:`);
            console.log(concat);

            result = concat[Math.floor(Math.random() * concat.length)];
            console.log(`result`);
            console.log(result);

            message.channel.send(`Your should get: ${result}`);


        } else {

            /**
             * No inital options given:
             *      Wait for reply.
             *          if reply === "cancel" => quit
             *      Split Args into array indices and choose random
             */
            console.log(`no aux`);
            // try {
            //     let filter = m => m.author.id === message.author.id
            //     message.channel.send(`List your choices separated by a comma (i.e. Pizza, Sushi, Burger)`).then(async () => {
            //         message.channel.awaitMessages(filter, {
            //             max: 1,
            //             time: 30000,
            //             errors: ['time']
            //         })
            //             .then(message => {
            //                 message = message.first()
            //                 if (message.content.toUpperCase() == 'YES') {
            //                     message.channel.send(`YES`)
            //                 } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            //                     message.channel.send(`NO`)
            //                 } else {
            //                     message.channel.send(`Terminated: Invalid Response`)
            //                 }
            //             })
            //             .catch(collected => {
            //                 message.channel.send('Timeout');
            //             });
            //     })
            // } catch (err) { console.log(err); }
        }
    }

};