const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../database/models/usermodel')

passport.use( new LocalStrategy(User.authenticate()) );
module.exports = passport