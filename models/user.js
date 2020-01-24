var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10;

var UserWatchList = new Schema({
    indexName: { type: String, required: true, index: { unique: true } },
    lastActiveDate: Date,
    priceData: [{
        type: Number
    }],
    macdData: [{
        type: Number
    }],
    adxData: [{
        type: Number
    }]
})

var UserSchema = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    name: { type: String, required: false },
    userSettings: {
        fastSMA: {type:Number, required:false},
        slowSMA: {type:Number, required:false},
        fastWeight: {type:Number, required:false},
        slowWeight: {type:Number, required:false},
        fastToSlowWeight: {type:Number, required:false},
        MACDWeight: {type:Number, required:false},
        ADXWeight: {type:Number, required:false}
    },
    watchList: [UserWatchList],
    child: UserWatchList
});


UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);