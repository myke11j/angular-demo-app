angular.module("myApp.imageGallery")
        .controller("imageGalleryCtrl", ["$scope", "$rootScope", "$location", "$http","imageList" , function($scope, $rootScope, $location, $http, imageList) {
                var vm = this;
        
                vm.init = init;
                vm.open = open;
                vm.prvImage = prvImage;
                vm.nxtImage = nxtImage;
        
                vm.title = "Welcome to your image gallery"
                vm.imageData = [];
                vm.imageFlag = false;
                vm.firstElement;
                vm.lastElement;
                
                function init() {
                    
                    $.each(imageList.data, function (index, element) {
                        vm.firstElement = element[0];
                        vm.lastElement = element[element.length - 1];
                        $.each(element, function (indexChild, elementChild) {
                            vm.imageData.push(elementChild);
                        });
                    });
                    vm.prevState = $rootScope.previousState;
                }
                
                function open(image) {
                    vm.imageObj = image;
                    vm.imageFlag = true;
                }
                
                function prvImage(image) {
                     $.each(vm.imageData, function (index, element) {
                            if(element.id == image.id) {
                                vm.open(vm.imageData[index - 1]);
                            }
                        });
                }
                
                function nxtImage(image) {
                     $.each(vm.imageData, function (index, element) {
                            if(element.id == image.id) {
                                vm.open(vm.imageData[index + 1]);
                            }
                        });
                }
                 
                vm.init();
            }
        ]);