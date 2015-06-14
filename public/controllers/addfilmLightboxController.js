/**
 * Created by KevinK on 14.06.15.
 */
angular.module('nak-node-seminar').controller('addfilmLightboxController', ['$scope', 'Film', function ($scope, Film) {
    'use strict';

    Film.query().$promise.then(function (films) {
        $scope.films = films;
    });
}]);