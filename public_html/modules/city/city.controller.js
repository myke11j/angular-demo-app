angular.module("myApp.city")
        .controller("cityCtrl", ["$scope", "$location", "$uibModal", "$log", "$rootScope", function ($scope, $location, $uibModal, $log, $rootScope) {
                var vm = this;
        
                $rootScope.cityData = [ 
            
                 ];
                
                vm.headers = [
                    {
                        "id" : 1,
                        "field" : "name",
                        "label" : "city name"
                    },
                    {
                        "id" : 2,
                        "field" : "state",
                        "label" : "state name"
                    },
                    {
                        "id" : 3,
                        "field" : "country",
                        "label" : "country name"
                    },
                    {
                        "id" : 4,
                        "field" : "pincode",
                        "label" : "pincode"
                    }
                ];
        
                vm.open = open;
                vm.deleteCity = deleteCity;
                vm.updateCity = updateCity;
                vm.sortType = 'name';
                vm.sortReverse = false;

                function open(city) {
                    $rootScope.updateCityObj = city;
                    $uibModal.open({
                        templateUrl: 'modules/city/template/myModalContent.html',
                        controller: 'modalCtrl',
                        controllerUrl: 'modules/city/template/modalCtrl.js'
                    });

                }

                function deleteCity(city) {
                    var index = $rootScope.cityData.indexOf(city);
                    $rootScope.cityData.splice(index, 1);
                }

                function updateCity(city) {
                    this.open(city);
                }
            }]);
        
        
