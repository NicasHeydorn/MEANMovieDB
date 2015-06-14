angular.module('nak-node-seminar').controller('FilmListController', ['$scope', 'Film', 'Genre', 'Actor', function ($scope, Film, Genre, Actor) {
    'use strict';

    Film.query().$promise.then(function (films) {
        $scope.films = films;
    });

    Genre.query().$promise.then(function (genres) {
        $scope.genres = genres;
    });

    Actor.query().$promise.then(function (actors) {
        $scope.actors = actors;
    });

}]);