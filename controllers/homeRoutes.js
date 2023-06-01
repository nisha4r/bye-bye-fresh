const router = require('express').Router();
const { User } = require('../models/User');
const authentication = require('../utils/authentication');
router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data

      // Serialize data so the template can read it
     
  
      // Pass serialized data and session flag into template
      res.render('homepage', {        
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Use authentication middleware to prevent access to route
router.get('/profile', authentication, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
module.exports = router;