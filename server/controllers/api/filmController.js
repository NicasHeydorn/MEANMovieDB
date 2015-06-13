var Film = require('mongoose').model('Film');

module.exports = (function () {
    'use strict';

    function find(req, res, next) {
        Film.find().exec(function (err, films) {
            if (err) {
                next(err);
            } else {
                res.send(films);
            }
        });
    }

    function insert(req, res, next) {
        new Film(req.body).save(function(err, film) {
            if (err) {
                next(err);
            } else {
                res.send(film);
            }
        });
    };

    return {
        find: find,
        insert: insert
    };
})();