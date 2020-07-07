//Requires
require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;
const mtg = require('mtgsdk')
const helmet = require('helmet')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('./config/ppConfig')
const db = require('./models')
const isLoggedIn = require('./middleware/isLoggedIn')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'))
app.use(helmet())
//TODO: init and link flash messages and passport and session
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use((req, res, next) => {
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;

    next();
})

app.get('/', (req,res) => {
    res.redirect('/page/1') //this will redicet to line 22
})

app.get('/profile', isLoggedIn, (req, res) => { 
    res.render('profile') 
})


// GET main index of the site
app.get('/page/:id', (req, res) => { // : catches the 
    var mtgURL = `https://api.magicthegathering.io/v1/cards?page=${req.params.id}` //req.params.`id` is req is an object params.id is asking for the obj defied as id to be substitued for this obj 
    //api call
    axios.get(mtgURL).then(apiResponse => {
        var mtg = apiResponse.data;
        // res.send(mtg)
        res.render('index', { mtg: mtg})
    }).catch(err => {
        console.log("FIRE")
        console.log(err)
        res.send('error')
    })
})

//importer all routes from the MTG controllers
app.use('/mtg', require('./controllers/mtg'))
// include wuht controller
app.use('/auth', require('./controllers/auth'))

var server = app.listen(port, console.log('Here i am! 😂🤣'))

module.exports = server