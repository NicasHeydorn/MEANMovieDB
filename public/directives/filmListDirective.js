angular.module('nak-node-seminar').directive('filmList', [function () {
    'use strict';

    return {
        restrict: 'A',
        transclude: false,
        templateUrl: '/views/filmListView.html',
        controller: 'FilmListController'
    };
}]);