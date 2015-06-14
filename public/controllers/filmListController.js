angular.module('nak-node-seminar').controller('FilmListController', ['$scope', 'Film', 'Genre', function ($scope, Film, Genre) {
    'use strict';

    Film.query().$promise.then(function (films) {
        $scope.films = films;
    });

    Genre.query().$promise.then(function (genres) {
        $scope.genres = genres;
    });

}]);