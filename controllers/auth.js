const express = require('express')
const router = express.Router()
const db = require('../models')

//import middleware
const flash = require('connect-flash')
//update this i guess cuz reasons
const passport = require('../config/ppConfig')

// register get rounte
router.get('/register', (req, res) => {
    res.render('auth/register')
})
//register post route
router.post('/register', (req, res, next) => {
    db.user.findOrCreate({
        where: {
            email: req.body.email
        }, defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(function ([user, created]) {
        // if user was created 
        if (created) {
            console.log('user created')
            passport.authenticate('local', {
                successRedirect: '/profile',
                successFlash: 'Thanks for signing up!'
            })(req, res, next)
        } else {
            console.log('user already exists. ❌')
            req.flash('error', 'Email already Exists for user. Please use another or sign in')
            res.redirect('/auth/register')
        }
    }).catch(err => {
        console.log(`error found.\n  Message: ${err.message}. Please review = ${err}`)
        req.flash('error', err.message)
        res.redirect('/auth/register')
    })
})

//login get
router.get('/login', (req, res) => {
    res.render('auth/login')
})

//todo pass next param to function
router.post('/login', (req, res, next) => {
    passport.authenticate('local', function (error, user, info) {
        // if no user
        if (!user) {
            req.flash('error', 'invalid username or password')
            return res.redirect('/auth/login')
        }
        if (error) {
            return next(error);
        }
        req.login(user, function (error) {
            if (error) next(error);
            req.flash('success', `You're Logged in!`)
            req.session.save(() => {
                return res.redirect('/profile')
            })
        })
    })(req, res, next)
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    successFlash: 'Welcome to our app!',
    failureFlash: 'Invalid username or password'
}))

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
})

//login post
module.exports = router