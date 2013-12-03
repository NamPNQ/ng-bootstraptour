angular.module('ui.bootstrap.tour',[]);
angular.module("ui.bootstrap.tour")
    .controller("TourController", ["$scope", function ($scope) {
    }])
    .directive('tour', [function() {
        return {
            restrict: 'EA',
            controller: 'TourController',
            require: 'tour',
            scope: {
                options: '='
            }
        };
    }])