//Requires pt2
var express = require('express');
var router = express.Router();
const axios = require('axios'); // this is always needed wherever called
const db = require('../models');
const mtg = require('mtgsdk')


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
    switch (name) {
        case 'brawl':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'commander':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'duel':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'future':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'frontier':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'legacy':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'modern':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'pauper':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'penny':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'pioneer':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'standard':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'vintage':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    type: req.body.type
                }
            }).then(() => {
                res.redirect('/mtg')
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;

    }
})

router.get('/:id', (req, res) => {
    var mtgURL = `https://api.magicthegathering.io/v1/cards/${req.params.id}`
    axios.get(mtgURL).then(response => {
        var card = response.data
        res.render('mtg/show', { card: card })
    }).catch(err => {
        console.log("FIRE")
        console.log(err)
        res.send('error')
    })
})


module.exports = router 