const profileModel = require('../profileSchema.js');

module.exports = async(client, discord, member)=>{

    let profile = await profileModel.create({
        userID : member.id,
        serverID : member.guild.id,
        roles: member.roles,
        preference: member.preference

    })
    profile.save();
}