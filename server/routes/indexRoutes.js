var indexController = require(require('path').join(__dirname, '..', 'controllers', 'indexController'));
var router = require('express').Router();

router.get('/', indexController.renderIndexPage);

module.exports = router;