var app = angular
    .module('searchEngine', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url : '/',

                views : {
                    'search'  : {
                        templateUrl  : 'search_engine.html',
                        controller   : 'SearchEngineController',
                        controllerAs : 'SearchEngineCtrl'
                    },
                    'results' : {
                        templateUrl : 'partials/search_results.html',
                        controller  : 'SearchResultsController'
                    }
                }
            });
    }]);