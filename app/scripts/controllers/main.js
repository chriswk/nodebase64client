'use strict';

/**
 * @ngdoc function
 * @name base64App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the base64App
 */
angular.module('base64App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.encodeString = function ()  {
        $http.get("http://localhost:8080/encode?q=" +$scope.raw.toString())
            .success(function(data, status, headers, config) {
                console.log(data);
                $scope.encoded = data;
            });
    }
    $scope.decodeString = function () {
       $http.get('http://localhost:8080/decode?q=' +$scope.encoded.toString())
            .success(function(data, status, headers, config) {
                $scope.raw = data;
            });
    }


  });
