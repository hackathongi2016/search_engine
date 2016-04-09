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
        'ngMaterial'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/travels');

        $stateProvider
            .state('main', {
                resolve : {
                    travelsList : function () {
                        return [
                            {
                                tra_id             : 1,
                                tra_origin         : 'Lyon',
                                tra_destination    : 'Girona',
                                tra_num_days       : 15,
                                tra_budget_min     : 150.23,
                                tra_budget_max     : 200.50,
                                tra_date           : '2016-05-20',
                                tra_lat            : 2.234,
                                tra_long           : 1.123,
                                tra_planning_limit : '2016-05-04',
                                tra_persons_min    : 2,
                                tra_persons_max    : 4,
                                tra_description    : 'descripció lyon a girona',
                                tra_usr_id         : 1
                            },
                            {
                                tra_id             : 2,
                                tra_origin         : 'Girona',
                                tra_destination    : 'Granada',
                                tra_num_days       : 10,
                                tra_budget_min     : 150.23,
                                tra_budget_max     : 200.50,
                                tra_date           : '2016-05-25    ',
                                tra_lat            : 2.234,
                                tra_long           : 1.123,
                                tra_planning_limit : '2016-05-05',
                                tra_persons_min    : 2,
                                tra_persons_max    : 4,
                                tra_description    : 'descripció girona a granada',
                                tra_usr_id         : 1
                            },
                            {
                                tra_id             : 3,
                                tra_origin         : 'Roma',
                                tra_destination    : 'París',
                                tra_num_days       : 15,
                                tra_budget_min     : 150.23,
                                tra_budget_max     : 200.50,
                                tra_date           : '2016-05-18',
                                tra_lat            : 2.234,
                                tra_long           : 1.123,
                                tra_planning_limit : '2016-05-03',
                                tra_persons_min    : 2,
                                tra_persons_max    : 4,
                                tra_description    : 'descripció roma a parís',
                                tra_usr_id         : 1
                            }
                        ];
                    }
                },
                url     : '/travels',

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

        $locationProvider.html5Mode(true);
    }]);
