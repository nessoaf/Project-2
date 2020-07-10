//Requires pt2
var express = require('express');
var router = express.Router();
const axios = require('axios'); // this is always needed wherever called
const db = require('../models');
const mtg = require('mtgsdk')
const isLoggedIn = require('../middleware/isLoggedIn')


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

// router.get('/test', (req, res) => {
//     db.deck.findByPk({
//         include: [db.card]
//     }).then(deck => {
//         res.send(deck)
//     })
// })

// POST ROUTE
router.post('/', isLoggedIn, (req, res) => {
    switch (req.body.name.toLowerCase()) {
        case 'commander':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
            }).catch(err => {
                console.log("FIRE")
                console.log(err)
                res.send('error')
            })
            break;
        case 'brawl':
            db.deck.findOrCreate({
                where: {
                    name: req.body.name,
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
                    userId: req.user.id//this is to check for user
                }
            }).then(([deck, created]) => { //you have access to the deck from above and are able to now add the card to said deck
                db.card.findOrCreate({
                    where: {
                        name: req.body.cardName, //see shw ejs input for clarification 
                    },
                    defaults: { type: req.body.type, imageUrl: req.body.imageUrl }
                }).then(([card, create]) => {
                    db.cardsdecks.findOrCreate({
                        where: {
                            deckId: deck.id,
                            cardId: card.id,
                        }, defaults: {
                            amount: 1
                        }
                    }).then(([association, created]) => {
                        if (!created) {
                            association.amount++
                            association.save() //update stuff
                        }
                        res.redirect('/profile')
                    })
                })
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
        var color = response.data.card.colors[0]
        let backcolor
        switch (color) {
            case 'Green':
                backcolor = "url(/img/green.png)"
                break;
            case 'Blue':
                backcolor = "url(/img/blue.png)"
                break;
            case 'White':
                backcolor = "url(/img/white.png)"
                break;
            case 'Black':
                backcolor = "url(/img/black.png)"
                break;
            case 'Red':
                backcolor = "url(/img/red.png)"
        }
        console.log(backcolor)
        res.render('mtg/show', { card: card, backcolor })
    }).catch(err => {
        console.log("FIRE")
        console.log(err)
        res.send('error')
    })
})

router.get('/:name', (req, res) => {
    var mtgURL = `https://api.magicthegathering.io/v1/cards/?name=${req.params.name}`
    axios.get(mtgURL).then(response => {
        var card = response.data
        var color = response.data.card.colors[0]
        let backcolor
        switch (color) {
            case 'Green':
                backcolor = "url(/img/green.png)"
                break;
            case 'Blue':
                backcolor = "url(/img/blue.png)"
                break;
            case 'White':
                backcolor = "url(/img/white.png)"
                break;
            case 'Black':
                backcolor = "url(/img/black.png)"
                break;
            case 'Red':
                backcolor = "url(/img/red.png)"
        }
        console.log(backcolor)
        res.render('mtg/show', { card: card, backcolor })
    }).catch(err => {
        console.log("FIRE")
        console.log(err)
        res.send('error')
    })
})


//delete cards
router.delete('/delete/:id', (req, res) => {
    db.cardsdecks.findOne({
        where: {
            cardId: req.params.id
        }
    }).then(card => {
        if(card.amount > 1) {
            card.update(
            { amount: card.amount - 1 })
        } else {card.destroy()}
        res.redirect('/profile')
    }).catch(err => {
        console.log("FIRE")
        console.log(err)
        res.send('error')
    })
})

module.exports = router 