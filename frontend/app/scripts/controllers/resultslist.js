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
        var userId = _.get($location.search(), 'user_id');

        $scope.userId = userId ? '?user_id=' + parseInt(userId) : '';
    });
