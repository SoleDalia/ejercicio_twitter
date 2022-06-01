//Si está autenticado
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

//Si no esta autenticado
function isNotLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/home');
}

module.exports = {
    isLoggedIn,
    isNotLoggedIn
};