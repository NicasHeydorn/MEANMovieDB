angular.module('nak-node-seminar').controller('FilmListController', 
        ['$scope', 'Film', 'Genre', 'Actor', function ($scope, Film, Genre, Actor) {
    'use strict';

    Film.query().$promise.then(function (films) {
        films.forEach(function(item) {
            item.actors = item.actors.sort();
        });
        $scope.films = films;
    });

    Genre.query().$promise.then(function (genres) {
        $scope.genres = genres.sort();
    });

    Actor.query().$promise.then(function (actors) {
        $scope.actors = actors.sort();
    });

    $scope.saveFilm = function() {
        console.log($scope.filmToAdd);
        Film.save({title: $scope.filmToAdd.title, 
            year: $scope.filmToAdd.year, 
            cover: $scope.filmToAdd.cover, 
            actors: $scope.filmToAdd.actors, 
            genres: $scope.filmToAdd.genres, 
            plot: $scope.filmToAdd.plot}).$promise.then(function() {
                Film.query().$promise.then(function (films) {
                    films.forEach(function(item) {
                        item.actors = item.actors.sort();
                    });
                    $scope.films = films;
                });
        });
    };

}]);