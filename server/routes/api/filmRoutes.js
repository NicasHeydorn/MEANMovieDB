var filmController = require(require('path').join(__dirname, '..', '..', 'controllers', 'api', 'filmController'));
var router = require('express').Router();

router.get('/', filmController.find);
router.post('/', filmController.insert);

module.exports = router;