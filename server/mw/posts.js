'use strict'
const knex = require('../db/knex');

function createPost(req, res) {
    var newPost = {
        imgUrl:req.body.imgUrl,
        genre: req.body.genre,
        title: req.body.title,
        post: req.body.post,
        author:req.user.firstName,
        user_id: req.user.id
    }
    // console.log('new Post', newPost);
    knex('posts')
        .insert(newPost, '*')
        .then((post) => {
            // console.log('the created post', post);
            res.json('post posted')
        })
        .catch((err) => {
            return err;
        })
}

function editPost(req, res) {
    // console.log(req.body);
    knex('posts')
        .where({
            'id': req.params.id
        })
        .first()
        .then((posts) => {
          if (posts.user_id !== req.user.id) {
            res.redirect('#/')
          }
            const {
                title,
                post,
                votes
            } = req.body;
            var post_id = posts.id;
            if (title) {
                posts.title = title;
            }
            if (post) {
                posts.post = post;
            }
            if (votes) {
                posts.votes = votes;
            }
            var editedPost = posts;
            // delete editedPost.id;
            knex('posts')
                .update(editedPost, '*')
                .where({
                    'id': req.params.id
                })
                .then(() => {
                    res.json('funstuff')
                })
        })
        .catch((err) => {
            return err
        })
}

function deletePost(req, res) {
    console.log('delete lists function called');
    knex('posts')
        .where({
            'id': req.params.id
        })
        .first()
        .then((post) => {
          if (!post) {
                res.redirect('#/')
          }
          if (post.user_id !== req.user.id){
            res.redirect('#/')
          }
          return knex('posts')
              .del()
              .where({
                  'id': req.params.id
              })
        })
        .then(() => {
            res.json('funstuff')
        })
        .catch((err) => {
            return err
        })
}

function getPosts(req, res) {
    var genrePosts = [];
    // var paramsGenre = req.params.genre;
    // var dbGenre = paramsGenre.toLowerCase();
    // console.log("in get posts")
    // res.json({"hello": "world"})
    // console.log('params genre',paramsGenre);
    knex('posts')
      .then(posts => {
          knex('comments')
              .then((comments) => {
                  posts.forEach((post) => {
                    post.allComments = [];
                    comments.forEach((comment) => {
                          if (comment.post_id == post.id) {
                              post.allComments.push(comment)
                          }
                      })
                      genrePosts.push(post);
                  })
                  // console.log('genre',genrePosts);
                  res.json(genrePosts);
              })
              .catch((err)=>{
                // console.log("knex command err", err);
                return err
              })
      })
}
module.exports = {
    createPost,
    editPost,
    deletePost,
    getPosts
}
