'use strict';   

angular.module('myApp').controller('registerCtrl', [ "$scope", "$location", "$rootScope", "loadRegisterCtrl", function($scope, $location, $rootScope, loadRegisterCtrl) {
       $rootScope.forgotEmailFlag = false;
       
       $scope.register = function(registerFormValidity) {
           if(registerFormValidity) {
               $rootScope.registerFlag = true;
               $location.path("/");
           }
       }
      
}]);

