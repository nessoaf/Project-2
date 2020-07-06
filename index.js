//Requires
require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;
const mtg = require('mtgsdk')

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'))


app.get('/', (req,res) => {
    res.redirect('/page/1') //this will redicet to line 22
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

var server = app.listen(port, console.log('Here i am! 😂🤣'))

module.exports = server