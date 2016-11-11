app
    .service('mainService', mainService)
    .service('userService', userService)
    .service('genreService', genreService)
    .service('profileService', profileService)
    .service('navService', navService);

function navService() {
    this.sortBy = (sort, index) => {
        var currentSort = sort[index];
        return currentSort;
    };

}

function mainService($resource) {
    // this.getPosts = function() {
      console.log('get posts mainservice fired');
        return $resource('/api/posts')
    // }
}

function userService($resource) {
    this.signUp = () => {
        return $resource('/api/signup', null, {
            'post': {
                method: 'POST'
            }
        });
    };
    this.login = () => {
        return $resource('/api/login', null, {
            'post': {
                method: 'POST'
            }
        });
    };
    this.logout = () => {
        return $resource('/api/logout', null, {
            'get': {
                method: 'GET'
            }
        });
    };
}

function genreService($resource,$location) {

    this.viewComments = (comment) => {
        if (comment.commentsVisible === false) {
            comment.commentsVisible = true;
        } else {
            comment.commentsVisible = false;
        }
    };
    this.genres = () => {
        return $resource('/genres/:genre', {
            genre: 'genre'
        }, {
            'query': {
                method: 'GET',
                isArray: true
            }
        });
    };
    this.posts = () => {
        return $resource('/api/posts', null, {
            'post': {
                method: 'POST'
            }
        });
    };
    this.postEdit = () => {
        return $resource('/api/posts/edit/:id', {
            id: 'id'
        }, {
            'post': {
                method: 'POST'
            }
        });
    };
    this.postDelete = () => {
        return $resource('/api/posts/delete/:id', {
            id: 'id'
        }, {
            'delete': {
                method: 'GET'
            }
        });
    };
    this.comments = () => {
        return $resource('/api/comments/:id', {
            id: 'id'
        }, {
            'post': {
                method: 'POST'
            }
        });
    };
    this.commentEdit = () => {
        return $resource('/api/comments/edit/:id', {
            id: 'id'
        }, {
            'post': {
                method: 'POST'
            }
        });
    };
    this.commentDelete = () => {
        return $resource('/api/comments/delete/:id', {
            id: 'id'
        }, {
            'delete': {
                method: 'GET'
            }
        });
    };
    this.favorite = () => {
        return $resource('/favorites/:id', {
            id: 'id'
        }, {
            'get': {
                method: 'GET'
            },
            'post': {
                method: 'POST'
            }
        });
    };
    this.favoriteDelete = () => {
        return $resource('/favorites/delete/:id', {
            id: 'id'
        }, {
            'delete': {
                method: 'GET'
            }
        });
    };
}

function profileService($resource) {
    this.profile = () => {
        return $resource('/profile/:id', null, {
            'query': {
                method: 'GET'
            }
        });
    };
}

navService.$inject = [];
mainService.$inject = ['$resource'];
userService.$inject = ['$resource'];
genreService.$inject = ['$resource'];
profileService.$inject = ['$resource'];
