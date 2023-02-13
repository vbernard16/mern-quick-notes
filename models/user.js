const bcrypt = require('bcrypt')
SALT_ROUNDS = 10

const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    // again, getting rid of the password field anytime the password is converted to or from JSON. Best practice for authentication
    toJSON: {
        transform: function(doc, user){
            delete user.password
            return user
        }
    }
})

// .pre is a mongoose middleware that hashes the user's password and saves it before the document is added to the 
// collection. This happens anytime the password is changed
userSchema.pre('save', async function(next){
    // 'this' is the instance of the user doc
    if(!this.isModified('password')) return next()
    // updating the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})

// mongoose models should be responsible for password hashing instead of an external controller elsewhere

module.exports = mongoose.model('User', userSchema)