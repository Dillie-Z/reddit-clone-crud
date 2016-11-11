const express = require('express');
const router = express.Router();
const route = require('../server/mw/genre');

router.get('/:genre',(req,res,next)=>{
  route.getGenreWithPostsAndComments(req, res);
});

module.exports = router;
