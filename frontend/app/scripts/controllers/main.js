'use strict';

/**
 * @ngdoc function
 * @name searchEngineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchEngineApp
 */
angular.module('searchEngineApp')
    .controller('MainCtrl', function ($rootScope, $scope, $window, $q, $log, Travel, $location, travelsList) {

        $rootScope.travelsList = travelsList;

    var self = this;
    $scope.ctrl = self;
    self.simulateQuery = false;
    self.isDisabled    = false;
    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;
    self.newState = newState;

    function newState(state) {
      alert("Sorry! You'll need to create a Constituion for " + state + " first!");
    }
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        return Travel.getList(query).then(function(travels){
            $rootScope.travelsList = travels;
            return travels;
        });
    }
    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
        // change the path
        $window.location.href  = ('http://travel.trabel.me/#/travels/'+ item.tra_id + $scope.userId);
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      return travelsList;
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }

  });
