const express = require('express');
const router = express.Router();

const auth = require('../server/mw/auth');
const route = require('../server/mw/profile')

router.get('/',auth.isLoggedIn,(req,res,next)=>{
  route.getProfile(req,res);
});

module.exports = router;
