const express = require('express');
const router = express.Router();
const passport = require('passport');

// router.get('/', (req, res) => {
//     res.render('login');
// });

router.post('/', passport.authenticate('local',{
  successRedirect:'#/',
  failureRedirect:'#/',
  failureFlash: true
}),(req,res,next)=>{
  console.log('login was a sucsess');
});

module.exports = router;
