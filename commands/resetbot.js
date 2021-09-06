const botModel = require("../models/botSchema");

module.exports = async(message, args)=>{
    console.log(message);
    let botData;
    try{

    botData = await botModel.findOne({userID: "bot"});
    if(botData){
        console.log(`removing document from bot collection`);
        botModel.remove( {} )
    }else{
        console.log(`no bot found`);
    }

    }catch(err){console.log(err);};

    let profile = await profileModel.create({
        bot_ID: "bot",
    })

}