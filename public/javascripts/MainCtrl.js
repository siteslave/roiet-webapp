angular.module('app.controller.MainCtrl', [])
    .controller('MainCtrl', function ($scope, MainServ, LxProgressService) {

        $scope.show = function () {

            LxProgressService.linear.show('#5fa2db', '#progress');

            var startDate = moment($scope.startDate).format('YYYY-MM-DD');
            var endDate = moment($scope.endDate).format('YYYY-MM-DD');

            MainServ.getService(startDate, endDate)
                .then(function (data) {

                    if (data.ok) { // true
                        $scope.patient = data.rows;
                        LxProgressService.linear.hide();
                    } else {
                        // false
                        alert('Server error!');
                        console.log(data.msg);
                        LxProgressService.linear.hide();
                    }

                }, function (err) {
                    console.log(err);
                    alert('Connection error');
                    LxProgressService.linear.hide();
                })
        }

    });