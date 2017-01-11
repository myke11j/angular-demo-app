'use strict';

angular.module('myApp').controller('accordianCtrl', [ "$scope","$http","loadAccoridonCtrl",  function($scope, $http, loadAccoridonCtrl) {
        
$scope.titleArray = [];
$scope.titleDescription ;
$scope.init = function() {
           $http.get('json/main.json').success(function (data){
		$.each(data, function(index, element) {
                    $scope.titleArray = element;
                });
	   });

};

$scope.readDescription = function(titleId) {
            $http.get('json/title-' + titleId +'.json').success(function (data) {
                $scope.titleDescription = data.title_description;
            });
};

$scope.init();       
}]);
