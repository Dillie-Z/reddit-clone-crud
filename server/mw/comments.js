'use strict'
const knex = require('../db/knex');


function createComment(req, res) {
    knex('posts')
        .where({
            id: req.params.id
        })
        .first()
        .then((post) => {
            if (!post) {
                res.redirect('/');
            }
            var newComment = {
                author: req.user.firstName,
                comment: req.body.text,
                user_id: req.user.id,
                post_id: req.params.id
            }
            knex('comments')
                .insert(newComment, '*')
                .then(() => {
                    res.redirect('/');
                });
        })
        .catch((err) => {
            return err;
        });
}

function editComment(req, res) {
    knex('comments')
        .where({
            'id': req.params.id
        })
        .first()
        .then((comments) => {
            console.log('edit comment fired');
            if (comments.user_id !== req.user.id) {
                console.log('need to be the right user to edit this');
                res.json('You are not the right User');
            }
            const {
                text
            } = req.body;
            if (text) {
                comments.comment = req.body.text
            }
            var editedComment = comments;
            // delete editedComment.id
            knex('comments')
                .update(editedComment, '*')
                .where({
                    'id': req.params.id
                })
                .then(() => {
                    res.json('comment edited');
                })
        })
        .catch((err) => {
            return err
        })
}

function deleteComment(req, res) {
    knex('comments')
        .where({
            'id': req.params.id
        })
        .first()
        .then((comments) => {
            if (!comments) {
                res.redirect('/')
            }
            if(comments.user_id !== req.user.id)[
              res.redirect('/')
            ]
            return knex('comments')
                .del()
                .where({
                    'id': req.params.id
                })
        })
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            return err
        })
}

module.exports = {
  createComment,
  editComment,
  deleteComment
}
