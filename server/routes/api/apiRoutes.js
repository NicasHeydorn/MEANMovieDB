var router = require('express').Router();

router.use('/films', require(require('path').join(__dirname, 'filmRoutes')));
router.use('/users', require(require('path').join(__dirname, 'userRoutes')));

module.exports = router;