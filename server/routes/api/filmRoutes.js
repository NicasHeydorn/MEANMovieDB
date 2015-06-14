var filmController = require(require('path').join(__dirname, '..', '..', 'controllers', 'api', 'filmController'));
var router = require('express').Router();

router.get('/', filmController.find);
router.post('/', filmController.insert);
router.get('/genres', filmController.getGenres);
router.get('/actors', filmController.getActors);

module.exports = router;