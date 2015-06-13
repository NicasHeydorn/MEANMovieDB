module.exports = (function () {
    'use strict';

    function renderIndexPage(req, res, next) {
        res.render('index', {title: 'Cheesr'});
    }

    return {
        renderIndexPage: renderIndexPage
    };
})();