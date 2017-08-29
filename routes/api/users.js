var express = require('express');
var router = express.Router();
const usersController = require('./../../controllers').users;

/* GET users listing. */

router.get('/', usersController.index);
router.get('/:userId', usersController.show);
router.post('/', usersController.create);

module.exports = router;
