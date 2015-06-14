/**
 * Created by KevinK on 14.06.15.
 */
angular.module('nak-node-seminar').directive('addfilmLightbox', [function () {
    'use strict';

    return {
        restrict: 'A',
        transclude: false,
        templateUrl: '/views/addfilmLightboxView.html',
        controller: 'addfilmLightboxController'
    };
}]);