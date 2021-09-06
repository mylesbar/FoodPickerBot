//Options command

//TODO: read from DB
module.exports= {

    name: 'options',
    description: "lists options",
    execute(message, aux,arrayIn, args,){
        var testArray = arrayIn;
        var strOut = '';
        testArray.forEach(element => strOut+=element + ", ");

        message.channel.send(`Here are your options: ${strOut.slice(0,-2)}`);
        
    }

}