'use strict';

/**
 * @ngdoc function
 * @name searchEngineApp.controller:SearchResultsCtrl
 * @description
 * # SearchResultsCtrl
 * Controller of the searchEngineApp
 */
angular.module('searchEngineApp')
    .controller('SearchResultsCtrl', function (travelsList) {
        this.travelsList = travelsList;
        this.urls = {
            new    : '/travels/new?user_id=1',
            detail : '/travels/1?user_id=1',
            login  : '/login'
        };
    });
