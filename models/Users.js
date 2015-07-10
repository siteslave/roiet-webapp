
var Q = require('q');

exports.getService = function (db, startDate, endDate) {

    var q = Q.defer();

    db('ovst as o')
        .select('o.hn', 'o.vstdate', 'p.pname',
        'p.fname', 'p.lname', 'o.vn')
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

exports.getDiag = function (db, vn) {

    var q = Q.defer();

    var sql = 'select icd.code, icd.name ' +
        'from ovstdiag as d ' +
        'left join icd101 as icd on d.icd10=icd.code ' +
        'where d.vn=?';

    db.raw(sql, [vn])
        .then(function (rows) {
            // success
            q.resolve(rows[0]);
        })
        .catch(function (err) {
            // error
            q.reject(err);
        });

    return q.promise;

};