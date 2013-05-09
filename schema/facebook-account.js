var request = require('request'),
    when = require('when'),
    mongoose = require('mongoose');

var FBAccountSchema = mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    gender: String,
    link: String,
    verified: String,
    picture: {
        data:{
            url: String,
            is_silhouette: String
        }
    }

});

FBAccountSchema.methods.getAccountDetails = function (token) {
    var deferred = when.defer();
    request('https://graph.facebook.com/me?access_token=' + token + '&fields=id,first_name,last_name,gender,link,installed,verified,picture,currency', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var fbAccDetails = JSON.parse(body);
            deferred.resolve(fbAccDetails);
        } else {
            deferred.reject();
        }
    });
    return deferred.promise;
};

var FBAccount = mongoose.model('facebookAccount', FBAccountSchema);
