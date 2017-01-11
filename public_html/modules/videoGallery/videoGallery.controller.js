angular.module("myApp.videoGallery")
        .controller("videoGalleryCtrl", ["$scope", "$rootScope", "$location", "$http", "$uibModal", "$log", "$sce", "videoList", function($scope, $rootScope, $location, $http, $uibModal, $log, $sce, videoList) {
                var vm = this;
                vm.init = init;
                vm.open = open;
                vm.trustSrc = trustSrc;
                vm.prvImage = prvImage;
                vm.nxtImage = nxtImage;
        
                vm.title = "Welcome to your video gallery"
                vm.videoData = [
                ];
                vm.videoFlag = false;
                vm.firstElement;
                vm.lastElement;
                
                function init() {
                    $.each(videoList.data, function (index, element) {
                        vm.firstElement = element[0];
                        vm.lastElement = element[element.length - 1];
                        $.each(element, function (indexChild, elementChild) {
                            vm.videoData.push(elementChild);
                        });
                    });
                    
                    if($rootScope.previousState != undefined) {
                        vm.prevState = $rootScope.previousState;
                    } else {
                        vm.prevState = "#";
                    }
                }
                
                function open(video) {
                    vm.videoObj = video;
                    vm.videoFlag = true;
                }
                
                function trustSrc(src) {
                    return $sce.trustAsResourceUrl(src);
                }
                
                function prvImage(image) {
                     $.each(vm.videoData, function (index, element) {
                            if(element.id == image.id) {
                                vm.open(vm.videoData[index - 1]);
                            }
                        });
                }
                
                function nxtImage(image) {
                     $.each(vm.videoData, function (index, element) {
                            if(element.id == image.id) {
                                vm.open(vm.videoData[index + 1]);
                            }
                        });
                }
                 
                init();
            }
        ]);