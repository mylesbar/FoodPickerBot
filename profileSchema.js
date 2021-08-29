const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userDetails: {
        userID: { type: String, require: true, unique:true},
        serverID: {type:String, require: true},
        roles: { type:[String], require: true},
        preference: {type: String, require: false}
    },
    use_data:{

        total_uses: {type: Number},
        random_uses: {type: Number},
        help_uses: {type: Number},
        options_uses: {type: Number},
        additions: {type: Number}
    }
})