const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var simplecrypt = require('simplecrypt');
var sc = simplecrypt();

const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String }
    }
);


userSchema.statics.hashPassword = async (password) => {
    try {
        return sc.encrypt(password);
    } catch(e) {
        throw e
    }
}

userSchema.methods.comparePassword = function(password) {
    return (sc.encrypt(password) === this.password);
}

const User = mongoose.model('user', userSchema);

module.exports = User;
