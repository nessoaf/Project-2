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

const methodOverride = require('method-override')

app.use(methodOverride('_method'))
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

//create new instrance of class Sequelize Store
const sessionStore = new SequelizeStore({
    db: db.sequelize,
    expiration: 1000 * 60 * 30
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: true
}))

sessionStore.sync()

//TODO: init and link flash messages and passport and session
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use((req, res, next) => {
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;

    next();
})

app.get('/', (req, res) => {
        res.redirect('/page/1') //this will redicet to line 93
    })
    //profile
app.get('/profile', isLoggedIn, (req, res) => {
        db.deck.findAll()
            .then((deck => {
                res.render('profile', { deck: deck })
            })).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
    })
    //display card info from the deck selected area
app.get('/profile/:deck', isLoggedIn, (req, res) => {
    db.deck.findOne({
        where: {
            name: req.params.deck
        },
        include: [db.card]
    }).then((deck) => {
        db.cardsdecks.findAll({
            where: {
                deckId: deck.id
            }
        }).then(cardsdecks => {
            console.log(deck.cards[0].cards)
            res.render('profile/deck', { deck: deck, card: deck.cards, cardsdecks: cardsdecks })
        })
    })
})



// GET main index of the site
app.get('/page/:id', (req, res) => { // : catches the 
    var mtgURL = `https://api.magicthegathering.io/v1/cards?page=${req.params.id}` //req.params.`id` is req is an object params.id is asking for the obj defied as id to be substitued for this obj 
        //api call
    axios.get(mtgURL).then(apiResponse => {
        var mtg = apiResponse.data;
        // res.send(mtg)
        res.render('index', { mtg: mtg })
    }).catch(err => {
        console.log("FIRE")
        console.log(err)
        res.send('error')
    })
})


//search bar
app.get('/search', (req, res) => {
        var mtgURL = `https://api.magicthegathering.io/v1/cards?name=${req.query.name}`
        axios.get(mtgURL).then(apiResponse => {
            var mtg = apiResponse.data;
            console.log(`hit me here
            `)
            // res.send(mtg)
            res.render('index', { mtg: mtg })
        }).catch(err => {
            console.log("FIRE")
            console.log(err)
            res.send('error')
        })
    })
    //importer all routes from the MTG controllers
app.use('/mtg', require('./controllers/mtg'))
    // include auth controller
app.use('/auth', require('./controllers/auth'))



var server = app.listen(port, console.log('Here i am!'))

module.exports = server