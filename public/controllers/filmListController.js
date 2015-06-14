angular.module('nak-node-seminar').controller('FilmListController', ['$scope', 'Film', 'Genre', 'Actor', function ($scope, Film, Genre, Actor) {
    'use strict';

    Film.query().$promise.then(function (films) {
        $scope.films = films;
        /*.sort(function(a, b, key) {
        if ($scope.hasOwnProperty('sortBy')) {
            key = $scope.sortBy;
        } else {
            key = 'title';
        };
        return (a[key] > b[key]) - (a[key] < b[key]);
    });*/
    });

    Genre.query().$promise.then(function (genres) {
        $scope.genres = genres.sort();
    });

    Actor.query().$promise.then(function (actors) {
        $scope.actors = actors.sort();
    });

}]);