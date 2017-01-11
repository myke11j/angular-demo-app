angular.module("myApp")
        .directive("tableHeader", function (){
            return {
                restrict: "E",
                scope: {
                    src: '='
                },
               templateUrl: "templates/table-header.html"
            };
        });