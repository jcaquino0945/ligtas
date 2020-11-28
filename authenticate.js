var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Admin = require('./models/admin');

passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());