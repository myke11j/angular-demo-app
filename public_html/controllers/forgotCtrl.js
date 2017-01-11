'use strict';   

angular.module('myApp').controller('forgotCtrl', [ "$scope", "$location", "$rootScope", "loadForgotCtrl", function($scope, $location, $rootScope, loadForgotCtrl) {
       $rootScope.registerFlag = false;
       $scope.forgotEmail = function(forgotFormValidity) {
           if(forgotFormValidity) {
                $rootScope.forgotEmailFlag = true;
                $location.path("/");
           }
       }
}]);

