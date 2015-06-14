module.exports = (function () {
    'use strict';

    function renderIndexPage(req, res, next) {
        res.render('index', {title: 'MEANMovieDB'});
    }

    return {
        renderIndexPage: renderIndexPage
    };
})();