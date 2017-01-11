'use strict';   

angular.module('myApp').controller('loginCtrl', [ "$scope", "$location", "$rootScope", "$timeout", "loadloginCtrl", function($scope, $location, $rootScope, $timeout, loadloginCtrl) {

       $scope.loadPage = true;
       $scope.pageText = {
           title: "Welocome to"
       };
       $scope.loginFlag ;
       $rootScope.registerFlag ;
       $rootScope.forgotEmailFlag ;
      
       $scope.init = function() {
           $timeout(function() {
               $scope.loadPage = false;
           }, 1000);

       }
       
       $scope.loginTry = function(formValidity) {
           console.log(formValidity);
           if(formValidity) {
               $location.path("dashboard");
           }
       };
       
       $scope.init();
       
}]);

