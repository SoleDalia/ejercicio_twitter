const passport = require('passport');
const LocalStrategy = require("passport-local");
const bcrypt = require('bcryptjs');
const { User } = require('../db/connection');

module.exports = function initializePassport(app) {

    app.use(passport.session());

    passport.use(
        new LocalStrategy(
            {
                usernameField: "usernameOrEmail",
            },
            async function (usernameOrEmail, password, done) {
                try {
                    const user = await User.findOne({
                        $or: [
                            { username: usernameOrEmail },
                            { email: usernameOrEmail }
                        ]
                    });
                    if (!user) {
                        return done(null, false);
                    }

                    if (!(await bcrypt.compare(password, user.password))) {
                        return done(null, false);
                    }
                    return done(null, user);
                } catch (err) {
                    return done(err);
                }
            },
        ),
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(async function (id, done) {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
}