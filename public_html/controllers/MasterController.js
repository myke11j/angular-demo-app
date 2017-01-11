'use strict';   

angular.module('myApp').controller('masterCtrl', [ "$scope", "$location", "$rootScope", "$timeout", '$http', function($scope, $location, $rootScope, $timeout, $http) {

       $scope.loadPage = true;
       $rootScope.activePage;
       $scope.init = function() {
            $scope.loadPage = false;
       }
       
        $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
        //save the previous state in a rootScope variable so that it's accessible from everywhere
        $rootScope.previousState = from;
        $scope.routeChanges = true;
            $timeout(function () {
                $scope.routeChanges = false;
            }, 1000);
            
        $http.get('json/myApp-paths.json').success(function (response){
		$.each(response.paths, function(index, element) {
                   if($location.path() == element.path) {
                      $rootScope.activePage = element.path;
                   }
                });
	   });
        });
       

       $scope.init();
}]);



