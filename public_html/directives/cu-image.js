angular.module("myApp")
        .directive("cuImage", function () {
            return {
                restrict: "E",
                scope: {
                    colSize: '@',
                    imageSrc: '@'
                },
                link: function (scope, iElement, iAttrs) {

                },
                template: '<img class=\"cuImage\" src = \"{{imageSrc}}\" height=150  width = 150/>'
            };
        });