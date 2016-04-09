'use strict';

/**
 * @ngdoc function
 * @name searchEngineApp.controller:ResultsListCtrl
 * @description
 * # ResultsListCtrl
 * Controller of the searchEngineApp
 */
angular.module('searchEngineApp')
    .controller('ResultsListCtrl', function ($scope, $location) {
        $scope.userId = parseInt(_.get($location.search(), 'user_id'));
    });
