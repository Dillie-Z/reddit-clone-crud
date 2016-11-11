'use strict'
const knex = require('../db/knex');

function getGenreWithPostsAndComments(req, res) {
    var genrePosts = [];
  
    var dbGenre = paramsGenre.toLowerCase();
    // console.log('params genre',paramsGenre);
    knex('posts')
      .where({genre:dbGenre})
      .then(posts => {
          knex('comments')
              .then((comments) => {
                  posts.forEach((post) => {
                    post.postComments = [];
                    comments.forEach((comment) => {
                          if (comment.post_id == post.id) {
                              post.postComments.push(comment)
                          }
                      })
                      genrePosts.push(post);
                  })
                  console.log('genre',genrePosts);
                  res.render('genre', {
                      genrePosts,
                      paramsGenre,
                      dbGenre
                  })
              })
              .catch((err)=>{
                return err
              })
      })
}

module.exports = {
  getGenreWithPostsAndComments
}
