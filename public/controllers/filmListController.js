angular.module('nak-node-seminar').controller('FilmListController', ['$scope', 'Film', function ($scope, Film) {
    'use strict';

    Film.query().$promise.then(function (films) {
        $scope.films = films;
    });

}]);

angular.module('nak-node-seminar').controller('FilmListController', ['$scope', 'Genre', function ($scope, Genre) {
    'use strict';

    Genre.query().$promise.then(function (genres) {
        $scope.genres = genres;
    });

}]);