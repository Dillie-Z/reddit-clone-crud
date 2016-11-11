app
    .controller('main', main)
    .controller('genre', genre)
    .controller('profile', profile)
    .controller('nav', nav);

function nav($location, navService, userService, $rootScope) {
    var vc = this;
    var rs = $rootScope;
    //search
    rs.reverse = true;
    rs.search = "";
    //sortby and ASC/DSC
    rs.sortValues = ['votes', 'date', 'title'];
    rs.currentSort = rs.sortValues[0];
    rs.sortBy = function(index) {
        rs.currentSort = rs.sortValues[index];
    };
    rs.ascDsc = function() {
            if (rs.reverse === true) {
                rs.reverse = false;
            } else {
                rs.reverse = true;
            }
        }
        //filter
    rs.filterStatus = false;
    rs.genreFilterValues = ['general', 'science', 'tech', 'life'];
    rs.currentFilter = rs.genreFilterValues[0];
    //new post form
    rs.newPostFormVisible = false;
    rs.newPostForm = function() {
        rs.newPost = {};
        if (rs.newPostFormVisible === false) {
            rs.newPostFormVisible = true;
        } else {
            rs.newPostFormVisible = false;
        }
    };
    //sign up
    rs.signUpVisible = false;
    rs.signUpForm = function() {
        if (rs.signUpVisible === false) {
            rs.signUpVisible = true;
        } else {
            rs.signUpVisible = false;
        }
    };
    // login
    rs.loginVisible = false;
    rs.loginForm = function() {
        if (rs.loginVisible === false) {
            rs.loginVisible = true;
        } else {
            rs.loginVisible = false;
        }
    };
    rs.logoutUser = function() {
        userService.logout().get();
    };
}

function main($location, mainService, genreService, userService, posts, $rootScope) {
    var mc = this;
    var rs = $rootScope;
    // console.log('main controller fired');
    console.log(posts, 'posts');
    mc.posts = posts;

    rs.signUpUser = (user) => {
        userService.signUp().post(user);
        rs.signUpVisible = false;
    };

    rs.loginUser = (user) => {
        userService.login().post(user);
        rs.loginVisible = false;
    };

    mc.viewCommentsForm = function(post) {
        if (post.commentsFormVisible === false) {
            post.commentsFormVisible = true;
        } else {
            post.commentsFormVisible = false;
        }
    };
    mc.viewComments = function(post) {
        if (post.commentsVisible === false) {
            post.commentsVisible = true;
        } else {
            post.commentsVisible = false;
        }
    };
    mc.addPost = (post) => {
        post.date = moment().calendar();
        genreService.posts().post(post);
        rs.newPostFormVisible = false;
        // mc.posts = mainService.getPosts().query();
        // $location.path('#/')
    };
    mc.addComment = (post, comment) => {
        genreService.comments().post({
            id: post.id
        }, comment);
    };
    mc.editPost = (post, editedPost) => {
        genreService.postEdit().post({
            id: post.id
        }, editedPost);
        post.postEditFormVisible = false;
    };
    mc.deletePost = (post) => {
        genreService.postDelete().delete({
            id: post.id
        });
    };
    mc.editComment = (comment, editedComment) => {
        genreService.commentEdit().post({
            id: comment.id
        }, editedComment);
        comment.commentsEditFormVisible = false;
    };
    //delete comments
    mc.deleteComment = (comment) => {
        genreService.commentDelete().delete({
            id: comment.id
        });
    };
    mc.upVote = (post) => {
        post.votes++;
        genreService.postEdit().post({
            id: post.id
        }, post);
    };
    mc.downVote = (post) => {
        post.votes--;
        genreService.postEdit().post({
            id: post.id
        }, post);
    };
    mc.viewCommentsEditForm = function(comment) {
        if (comment.commentsEditFormVisible === false) {
            comment.commentsEditFormVisible = true;
        } else {
            comment.commentsEditFormVisible = false;
        }
    };
    mc.viewPostEditForm = function(post) {
        if (post.postEditFormVisible === false) {
            post.postEditFormVisible = true;
        } else {
            post.postEditFormVisible = false;
        }
    };
}

function genre($location, $routeParams, genreService, genre) {
    var gc = this;
    //new post
    gc.genre = [];
    gc.genre = genre;

    gc.newPost = {};
    gc.newComment = {};

    gc.addPost = (post) => {
        post.date = moment().calendar();
        genreService.posts.post(post);
    };
    //edit post
    gc.editPost = (post) => {
        genreService.posts.edit({
            id: post.id
        }, post);
    };
    //delete post
    gc.deletePost = (postId) => {
        genreService.postDelete.delete({
            id: postId
        });
    };
    //new comments
    gc.addComment = (postId, comment) => {
        genreService.comments.post({
            id: postId
        }, comment);
    };
    //edit comments
    gc.editComment = (comment) => {
        genreService.comments.edit({
            id: comment.id
        }, comment);
    };
    //delete comments
    gc.deleteComment = (commentId) => {
        genreService.commentDelete.delete({
            id: commentId
        });
    };
    //view comments
    gc.view = (comment) => {
        gerneService.viewComments(comment);
    };
    //up/down vote
    gc.upVote = (post) => {
        post.votes++;
        genreService.posts.edit({
            id: post.id
        }, post);
    };
    gc.downVote = (post) => {
        post.votes--;
        genreService.posts.edit({
            id: post.id
        }, post);
    };
    //add favorite
    gc.addFavorite = (post) => {
        // gc.favorite = {}
        genreService.favorite.post({
            id: post.id
        });
    };
    //remove favorite
    gc.removeFavorite = (post) => {
        genreService.favoriteDelete.delete({
            id: post.id
        });
    };

}

function profile($location, profileService, profile) {
    var pc = this;
    pc.profile = [];
    pc.profile = profile;
}

nav.$inject = ['$location', 'navService', 'userService', '$rootScope'];
main.$inject = ['$location', 'mainService', 'genreService', 'userService', 'posts', '$rootScope'];
genre.$inject = ['$location', '$routeParams', 'genreService', 'genre'];
profile.$inject = ['$location', 'profileService', 'profile'];
