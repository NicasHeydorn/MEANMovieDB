var User = require('mongoose').model('User');

module.exports = (function () {
    'use strict';

    function insert(req, res, next) {
        new User(req.body).save(function(err, user) {
            if (err) {
                next(err);
            } else {
                res.send(user);
            }
        });
    };

    function find(req, res, next) {
        User.find().exec(function (err, users) {
            if (err) {
                next(err);
            } else {
                res.send(users);
            }
        });
    }

    return {
        find: find,
        insert: insert
    };
})();