'use strict';

/**
 * @ngdoc overview
 * @name searchEngineApp
 * @description
 * # searchEngineApp
 *
 * Main module of the application.
 */
angular
    .module('searchEngineApp', [
        'ui.router',
        'ui.bootstrap',
        'ngMaterial',
        'restangular',
        'ngMap'
    ])
    .config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function ($stateProvider, $urlRouterProvider, RestangularProvider) {

        // http://search.trabel.me:5000/travels/search/tokio
        RestangularProvider.setBaseUrl('http://search.trabel.me:5000');

        //RestangularProvider.setJsonp(true);
        RestangularProvider.setDefaultRequestParams('Access-Control-Allow-Origin', '*');

        $urlRouterProvider.otherwise('/travels');

        $stateProvider
            .state('main', {
                resolve : {
                    travelsList : function (Travel) {
                        return Travel.getList();
                    },
                    joinedList : function(Travel, $location, $rootScope){
                        var userId = _.get($location.search(), 'user_id');
                        $rootScope.userId = userId ? '?user_id=' + parseInt(userId) : '';
                        return userId ? Travel.getUserList(parseInt(userId)) : [];
                    }
                },
                url     : '/travels?param1',
                views : {
                    'search'  : {
                        templateUrl  : 'views/main.html',
                        controller   : 'MainCtrl'
                    },
                    'results' : {
                        templateUrl : 'views/search_results.html',
                        controller  : 'SearchResultsCtrl',
                        controllerAs : 'SearchResultsCtrl'
                    }
                }
            });
    }]);
