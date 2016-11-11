'use strict'
const knex = require('../db/knex');

function getProfile(req, res) {
    var userPosts = []
    knex('posts')
      .where('posts.user_id', req.user.id)
      .then(posts => {
          knex('comments')
              .where('comments.user_id', req.user.id)
              .then(comments => {
                  posts.forEach(post => {
                    post.postComments = [];
                    comments.forEach(comment => {
                          if (comment.post_id == post.id) {
                              post.postComments.push(comment)
                          }
                      })
                      userPosts.push(post);
                  })
                  // res.render('profile', {
                  //     userPosts
                  // })
              })
              .catch(err=>{
                return err
              })
      })
}

module.exports = {
  getProfile
}
