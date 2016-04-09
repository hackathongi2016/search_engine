'use strict';

/**
 * @ngdoc function
 * @name searchEngineApp.controller:SearchResultsCtrl
 * @description
 * # SearchResultsCtrl
 * Controller of the searchEngineApp
 */
angular.module('searchEngineApp')
    .controller('SearchResultsCtrl', function ($scope, $location, travelsList) {

        $scope.userId = parseInt(_.get($location.search(), 'user_id'));

        this.travelsList = travelsList;
        this.urls = {
            new    : '/travels/new?user_id=1',
            detail : '/travels/1?user_id=1',
            login  : '/login'
        };
    });
