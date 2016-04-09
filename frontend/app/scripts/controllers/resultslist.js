'use strict';

/**
 * @ngdoc function
 * @name searchEngineApp.controller:ResultsListCtrl
 * @description
 * # ResultsListCtrl
 * Controller of the searchEngineApp
 */
angular.module('searchEngineApp')
    .controller('ResultsListCtrl', function ($scope) {
        $scope.urls = {
            new    : '/travels/new?user_id=1',
            detail : '/travels/1?user_id=1',
            login  : '/login'
        };
    });
