const express = require('express');
const router = express.Router();

const genre = require('../routes/genres');
const posts = require('../routes/posts');
const comments = require('../routes/comments');
const favorites = require('../routes/favorites');
const signup = require('../routes/signup');
const login = require('../routes/login');
const logout = require('../routes/logout');
const profile = require('../routes/profile');


// console.log('index fired');

router.use('/genres',genre);
router.use('/posts',posts);
router.use('/comments',comments);
router.use('/favorites',favorites);
router.use('/signup',signup);
router.use('/login',login);
router.use('/logout',logout);
router.use('/profile',profile);


module.exports = router;
