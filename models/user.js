var request = require('request'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var userSchema = mongoose.Schema({
    name: String,

    accCreationDate: { type: Date, default: Date.now },
    FacebookAccount: { type: Schema.Types.ObjectId, ref: 'facebookAccount' }
});


var User = mongoose.model('User', userSchema);
