angular.module("myApp.city")
        .controller("modalCtrl", ["$scope", "$uibModalInstance", "$log", "$rootScope","$http", function ($scope, $uibModalInstance, $log, $rootScope, $http) {

        
        
        $scope.cityFields = {};
        
        $scope.countries = [
                 
                ];
                
        $scope.states = [
            
                ];
        $scope.city ;  
        $scope.cloneCity;
        $scope.selectedCountry;
        
        
                $scope.init = function() {
                    
                    $http.get('json/country.json').success(function (data) {
                        $.each(data.countries, function (index, element) {
                            $scope.countries.push(element);
                        });
                    });  
                    
                    $uibModalInstance.opened.then(function() {
                        if($rootScope.updateCityObj != undefined) {
                            $scope.name = $rootScope.updateCityObj.name;
                            $scope.pincode = $rootScope.updateCityObj.pincode;
                            $http.get('json/country.json').success(function (data) {
                                $.each(data.countries, function (index, element) {
                                    if(element.name == $rootScope.updateCityObj.country) {
                                        $scope.selectedCountry = element;
                                        $http.get('json/state-' + element.id + '.json').success(function (response) {
                                            $.each(response.states, function (indexState, elementState) {
                                                 $scope.states.push(elementState);
                                                if(elementState.name == $rootScope.updateCityObj.state) {
                                                    $scope.selectedState = elementState;
                                                }
                                            });
                                        }); 
                                    }
                                });
                            }); 
                        }
                    });
                    
                };
                
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
                
                $scope.addStates = function (country) {
                    $scope.states = [];
                    $http.get('json/state-'+country.id+'.json').success(function (response) {
                        $.each(response.states, function (index, element) {
                            $scope.states.push(element);
                        });
                    });  
                };
                
                $scope.addCity = function() {
                    if ($rootScope.updateCityObj != undefined) {
                        $rootScope.updateCityObj.name = $scope.name;
                        $rootScope.updateCityObj.pincode = $scope.pincode;
                        $rootScope.updateCityObj.country = $scope.selectedCountry.name;
                        $rootScope.updateCityObj.state = $scope.selectedState.name;
                    } else {
                        $scope.cityFields.name = $scope.name;
                        $scope.cityFields.pincode = $scope.pincode;
                        $scope.cityFields.country = $scope.selectedCountry.name;
                        $scope.cityFields.state = $scope.selectedState.name;
                        $scope.cloneCity = angular.copy($scope.cityFields);
                        $rootScope.cityData.push($scope.cloneCity);
                    }
                    $uibModalInstance.dismiss('cancel');
                };
                
                $scope.init()

            }]);