angular.module('app.filter.toThaiDate', [])
    .filter('toThaiDate', function () {
        return function (date) {
            var moment = require('moment');

            var strDate = moment(date).get('date');
            var strMonth = moment(date).get('month') + 1;
            var strYear = parseInt(moment(date).get('year')) + 543;


            return [strDate, strMonth, strYear].join('/');

        }
    })