const express = require('express');
const router = express.Router();
const auth = require('../server/mw/auth');
const route = require('../server/mw/comments');



router.post('/:id', auth.isLoggedIn, (req, res, next) => {
    route.createComment(req, res);
});

router.post('/edit/:id', auth.isLoggedIn, (req, res, next) => {
    route.editComment(req, res);
});

router.get('/delete/:id', auth.isLoggedIn, (req, res, next) => {
    route.deleteComment(req, res);
});

module.exports = router;
