const express = require('express');
const router = express.Router();
const passport = require('passport');
const userModel = require('../database/models/usermodel');
const isUnauthenticated = require('../middlewares/isUnauthenticated');
const isAuthenticated = require('../middlewares/isAuthenticated');


require("../authentication/localauth");
require("../authentication/googleauth");


//! Authentication routes
router.get('/login', isUnauthenticated, (req, res, next) =>{
  const error = req.flash("error")
  res.render('auth/login', {error})
})
router.get('/profile', isAuthenticated, (req, res, next) =>{
  let user = req.session.passport.user
  res.render('profile', {
    user
  })
})
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' , successRedirect: '/profile',  failureFlash: true, failureMessage: true }),
  function(req, res) {
    res.redirect('/');
  });

  router.get('/signup', isUnauthenticated, function(req, res, next) {
    res.render('auth/signup');
  });

  router.post('/signup', (req, res, next)=>{
    const data = new userModel({
      username: req.body.username,
      email: req.body.email,
      f
    })
  
    userModel.register(data, req.body.password)
    .then(function(){
      passport.authenticate("local")(req, res, function(){
        res.redirect('/profile')
      })
    })
  })

  router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


  router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

module.exports = router;