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

    function Travel(data){

        // defaults
        this.setFields({});

        if(data){
            this.setFields(data);
        }
        Restangular.restangularizeElement(this, "travels");
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
            var self = this;
            this.attributes.forEach(function(attr){
                if(data[attr] !== undefined){
                    self[attr] = data[attr];
                }
            });
        }
    }

    Travel.getList = function(query){
        if(_.isEmpty(query)){
            query = "";
        }
        
        return Restangular.one("travels").one("search").all(query).getList().then(function(data){
            return data.map(function(travel){
                return new Travel(travel);
            });
        });
    }
    
    Travel.getUserList = function(user_id){
       
        return Restangular.one("travels").one("user", user_id).getList().then(function(data){
            return data.map(function(travel){
                return new Travel(travel);
            });
        });
    }

    return Travel;

  });
