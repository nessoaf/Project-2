//Requires
require('dotenv')
const express = require('express')
const axios = require('axios')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public'))

// GET main index of the site
app.get('/', (req, res) => {
    var mtgUrl = `https://api.magicthegathering.io/v1/cards`
    //api call
    axios.get(mtg).then(apiResponse => {
        var mtg = apiResponse.data.results;
        res.render('index', { mtg: mtg})
    })
})

//importer all routes from the MTG controllers
app.use('/mtg', require('./controllers/mtg'))

var server = app.listen(port, console.log('Here i am! 😂🤣'))

module.exports = server