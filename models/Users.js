
var Q = require('q');

exports.getService = function (db, startDate, endDate) {

    var q = Q.defer();

    db('ovst as o')
        .select('o.hn', 'o.vstdate', 'p.pname',
        'p.fname', 'p.lname')
        .innerJoin('patient as p', 'p.hn', 'o.hn')
        .whereBetween('o.vstdate', [startDate, endDate])

        .then(function (rows) {
            // success
            q.resolve(rows);
        })
        .catch(function (err) {
            // error
            q.reject(err);
        });

    return q.promise;

};