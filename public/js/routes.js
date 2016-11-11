app
  .config(config)

function config ($routeProvider, $resourceProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/main.html',
            controller: 'main',
            controllerAs: 'mc',
            resolve:{
              posts: getAllPosts
            }
        })
        .when('/genre/:genre', {
            templateUrl: '../views/genre.html',
            controller: 'genre',
            controllerAs: 'gc',
            resolve:{
              genre: getGenre
            }
        })
        .when('/profile/:id', {
            templateUrl: '../views/profile.html',
            controller: 'profile',
            controllerAs: 'pc',
            resolve:{
              profile: getProfile
            }
        })
        .otherwise({
          redirectTo:'/'
        });

    $resourceProvider.defaults.stripTrailingSlashes = false;
}

function getAllPosts(mainService) {
  var allPosts = mainService.query();
  return allPosts;
}

function getGenre($routeParams, genreService) {
  return genreService.genres.query({genre:$routeParams.gerne});
}

function getProfile(profileService){
  return profileService.profile.query({id:req.user.id});
}

config.$inject = ['$routeProvider','$resourceProvider'];
getAllPosts.$inject = ['mainService'];
getGenre.$inject = ['$routeParams','genreService'];
getProfile.$inject = ['profileService'];
