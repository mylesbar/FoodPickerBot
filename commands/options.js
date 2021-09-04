//Options command


module.exports= {

    name: 'options',
    description: "lists options",
    execute(message, args,arrayIn){
        var testArray = arrayIn;
        var strOut = '';
        testArray.forEach(element => strOut+=element + ", ");
        // console.log(`before ${strOut}`);
        // strOut = strOut.slice(0,-2);
        // console.log(`after ${strOut}`);

        message.channel.send(`Here are your options: ${strOut.slice(0,-2)}`);
        
    }

}