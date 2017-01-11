angular.module("myApp")
        .directive('imageonload', function () {
            return {
                
                restrict: 'A',
                link: function (scope, element, attrs) {
                    
                    element.on('load', function () {
                        scope.imageLoadFlag = true;
                        console.log("image is loaded");
                    });
                    element.on('error', function () {
                        console.log('image could not be loaded');
                    });
                }
            };
        });