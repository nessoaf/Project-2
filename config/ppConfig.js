// inport libraries
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy
const db = require('../models')

// serialize user
passport.serializeUser(function (user, cb) {
    cb(null, user.id)
})

//deserialized version
passport.deserializeUser(function (id, cb) {
    db.user.findByPk(id).then(user => {
        cb(null, user)
    }).catch(cb)
})

//config local variables
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, cb) {
    db.user.findOne({ where: { email }}).then(function (user) {
        if (!user || !user.validPassword(password)) {
            cb(null, false)
        } else {
            cb(null, user)
        }
    }).catch(cb)
}))
//passport local config

module.exports = passport