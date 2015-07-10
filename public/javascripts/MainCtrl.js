angular.module('app.controller.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
        $scope.show = function () {
            var startDate = moment($scope.startDate).format('YYYY-MM-DD');
            var endDate = moment($scope.endDate).format('YYYY-MM-DD');
        }

    });