var userController = require(require('path').join(__dirname, '..', '..', 'controllers', 'api', 'userController'));
var router = require('express').Router();

router.get('/', userController.find);
router.post('/', userController.insert);

module.exports = router;