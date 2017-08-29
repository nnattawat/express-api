var express = require('express');
var router = express.Router();
const usersController = require('./../../controllers').users;
const tasksController = require('./../../controllers').tasks;

/* GET users listing. */

router.get('/', usersController.index);
router.get('/:userId', usersController.show);
router.post('/', usersController.create);

router.get('/:userId/tasks/', tasksController.index);
router.get('/:userId/tasks/:taskId', tasksController.show);
router.post('/:userId/tasks/', tasksController.create);

module.exports = router;
