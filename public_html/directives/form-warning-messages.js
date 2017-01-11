angular.module("myApp")
        .directive("formWarning", function() {
    return {
        require: '^form',
        restrict : "E",
        scope: {
             elementName: '@'
        },
        link: function (scope, iElement, iAttrs, formCtrl) {
              scope.formObject = formCtrl
        },
        templateUrl : "templates/validation-message.html"
    };
});