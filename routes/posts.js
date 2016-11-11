const express = require('express');
const router = express.Router();
const auth = require('../server/mw/auth');
const route = require('../server/mw/posts');


router.get('/',(req,res,next)=>{
  route.getPosts(req,res);
});

router.post('/',auth.isLoggedIn,(req,res,next)=>{
  route.createPost(req,res);
});

router.post('/edit/:id',auth.isLoggedIn,(req,res,next)=>{
  route.editPost(req,res);
});

router.get('/delete/:id',auth.isLoggedIn,(req,res,next)=>{
  route.deletePost(req,res);
});

module.exports = router;
