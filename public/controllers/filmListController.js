angular.module('nak-node-seminar').controller('FilmListController', ['$scope', 'Film', function ($scope, Film) {
    'use strict';

    Film.query().$promise.then(function (films) {
        $scope.films = films;
    });
}]);