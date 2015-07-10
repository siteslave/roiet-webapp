angular.module('app.controller.MainCtrl', [])
    .controller('MainCtrl', function ($scope, MainServ) {
        $scope.show = function () {
            var startDate = moment($scope.startDate).format('YYYY-MM-DD');
            var endDate = moment($scope.endDate).format('YYYY-MM-DD');

            MainServ.getService(startDate, endDate)
                .then(function (data) {

                    if (data.ok) { // true
                        $scope.patient = data.rows;
                    } else {
                        // false
                        alert('Server error!');
                        console.log(data.msg);
                    }

                }, function (err) {
                    console.log(err);
                    alert('Connection error');
                })
        }

    });