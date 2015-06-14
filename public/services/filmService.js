angular.module('nak-node-seminar').service('Film', ['$resource', function ($resource) {
    'use strict';

    return $resource('/api/films');
}]);

angular.module('nak-node-seminar').service('Genre', ['$resource', function ($resource) {
    'use strict';

    return $resource('/api/films/genres');
}]);