module.exports = function (req, res, next) {
    if (!req.user) {
        req.flash('error', 'You must be Logged in to view')
        res.redirect('/auth/login')
    } else {
        next()
    }
}