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

    function getGenres(req,res,next) {
        Film.distinct("genres").exec(function (err, genres) {
            if (err) {
                next(err);
            } else {
                res.send(genres);
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
        insert: insert,
        getGenres: getGenres
    };
})();