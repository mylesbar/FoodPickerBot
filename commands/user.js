module.exports = {
    name: "user",
    description: "Prints user data in chat",

    execute(message, args, cmd,client,discord,profileData){
        
        message.channel.send(`Your data: 
        Name: ${profileData.userID}
        Preference: ${profileData.preference}
        Total Bot uses: ${profileData.total_uses}`);

    }

}