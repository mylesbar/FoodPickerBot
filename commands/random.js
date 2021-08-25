//Random command

module.exports= {

    name: 'random',
    description: "Prints out a random food item",
    execute(message, args,arrayIn){
        console.log('random select');
        var food = randomGet(arrayIn);
        message.channel.send(`You should get ${food}`);

        
       
    }

}

function randomGet(testArray){
    return testArray[Math.floor(Math.random()*testArray.length)];
}