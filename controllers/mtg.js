//Requires pt2
var express = require('express');
var router = express.Router();
const axios = require('axios'); // this is always needed wherever called
const db = require('../models');


//GET ROUTE - This pulls 'all(however much alphabetically)' and renders them on mtg index
router.get('/', (req, res) => {
    db.mtg.findAll().then(mtg => {
        res.render('mtg/index', { mtg: mtg })
    }).catch(err => {
        console.log("FIRE")
        console.log(err)
        res.send('error')
    })
})

// POST ROUTE
router.post('/', (req, res) => {
    db.mtg.findOrCreate({
        where: {
            name: req.body.name
        }
    }).then(() => {
        res.redirect('/mtg')
    }).catch(err => {
        console.log("FIRE")
        console.log(err)
        res.send('error')
    })
})

router.get('/:name', (req,res) =>{
    var mtgURL = `https://api.magicthegathering.io/v1/cards/${req.params.name}`
    axios.get(mtgURL).then(response => {
        var mtg = response.data
        res.render('mtg/show', {mtg: mtg})
    })
})


module.exports = router