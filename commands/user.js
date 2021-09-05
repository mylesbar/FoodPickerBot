//const profileModel = require("../models/profileSchema");
module.exports = {
  name: "user",
  description: "Prints user data in chat",

  execute(message, profileData, args, cmd, client, discord) {
    //console.log(`profile data: ${profileData}`);
    message.channel.send(`Your data: 
        Name: ${message.author}
        ID: ${profileData.userID}
        Preference: ${profileData.preference}
        Total Bot uses: ${profileData.total_uses}
        User command uses: ${profileData.user_uses}
        Random command uses: ${profileData.random_uses}
        Help command uses: ${profileData.help_uses}
        Option command uses: ${profileData.options_uses}
        Number of additions: ${profileData.additions}

        `);
  },
};
