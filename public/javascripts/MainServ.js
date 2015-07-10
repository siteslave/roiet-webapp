// Main Service

angular.module('app.service.MainServ', [])
.factory('MainServ', function ($q, $http) {

        return {

            getService: function (startDate, endDate) {

                var q = $q.defer();

                var options = {
                    url: '/get-service',
                    method: 'POST',
                    data: {
                        startDate: startDate,
                        endDate: endDate
                    }
                };

                $http(options)
                    .success(function (data) {
                        // Success
                        q.resolve(data);
                    })
                    .error(function (data, status) {
                        // Error
                        q.reject(err);
                    });

                return q.promise;

            }

        }

    })