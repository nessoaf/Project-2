require('dotenv').config()
const Express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// require all middleware
const helmet = require('helmet')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('./config/ppConfig')
const db = require('./models')
const isLoggedIn = require('./middleware/isLoggedIn')

const express = require('express')
var request = require('request')
var cors = require('cors')
var querystring = require('querystring')
var cookieParser = require('cookie-parser')

var client_id = process.env.CLIENT_ID
var client_secret = process.env.CLIENT_SECRET
var redirect_uri = process.env.REDIRECT_URI

// generates random string containing numbers and letters

// @param {number}
// @return {string}

var generateRandomString = function(length) {
    var text = ""
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

var stateKey = 'spotify_auth_state'

// var app = express();

// session library to store session date 
const SequelizeStore = require('connect-session-sequelize')(session.Store)

// APP setup
const app = Express()
app.use(Express.urlencoded({extended: false}))
app.use(Express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(require('morgan')('dev'))
app.use(helmet())
app.use('/auth', require('./controllers/auth'))
