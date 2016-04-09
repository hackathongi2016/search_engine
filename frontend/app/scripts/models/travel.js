'use strict';

/**
 * @ngdoc service
 * @name searchEngineApp.travel
 * @description
 * # travel
 * Factory in the searchEngineApp.
 */
angular.module('searchEngineApp')
  .factory('Travel', function (Restangular, $timeout, $q) {
    
    function Travel(){
        
        this.setFields({
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
        }); 
        Restangular.restangularizeElement(this);
    }
    
    Travel.prototype = {
        attributes: [
            'tra_id',
            'tra_origin',
            'tra_destination',
            'tra_num_days',
            'tra_lat',
            'tra_lat',
            'tra_date',
            'tra_long',
            'tra_budget_max',
            'tra_budget_min',
            'tra_planning_limit', 
            'tra_persons_min', 
            'tra_persons_max', 
            'tra_description', 
            'tra_usr_id'],
        setFields: function(data){
            this.attributes.forEach(function(attr){
                if(data !== undefined){
                    this[attr] = data[attr]
                }
            });
        }
    }
    
    Travel.getList = function(){
        //return Restangular.all("travels")
        var tmpTravels = [
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
        var deferred = $q.defer();
        $timeout(function () { deferred.resolve( tmpTravels ); }, Math.random() * 1000, false);
        return deferred.promise;
    }
      
    return Travel;
      
  });
