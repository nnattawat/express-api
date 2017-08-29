const models = require('../models');

let tasksController = {}

tasksController.index = (req, res) => {
  let {userId} = req.params;
  return models.Task
  .findAll({
    where: {
      userId: userId
    }
  })
  .then(tasks => res.status(200).send(tasks))
  .catch(error => res.status(400).send(error));
}

tasksController.show = (req, res) => {
  let {userId, taskId} = req.params;
  return models.Task
  .find({
    where: {
      id: taskId,
      userId: userId
    }
  })
  .then(task => {
    if (!task) {
      return res.status(404).send({
        message: 'Not Found',
      });
    }
    res.status(200).send(task)
  })
  .catch(error => res.status(400).send(error));
}

tasksController.create = (req, res) => {
  let {title} = req.body;
  let {userId} = req.params;
  return models.Task
  .create({
    title: title,
    userId: userId
  })
  .then(task => res.status(201).send(task))
  .catch(error => res.status(400).send(error));
}

module.exports = tasksController;
