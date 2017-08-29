const User = require('../models').User;

let usersController = {}

usersController.index = (req, res) => {
  return User
  .all()
  .then(users => res.status(200).send(users))
  .catch(error => res.status(400).send(error));
}

usersController.show = (req, res) => {
  return User
  .findById(req.params.userId)
  .then(user => {
    if (!user) {
      return res.status(404).send({
        message: 'Not Found',
      });
    }
    res.status(200).send(user)
  })
  .catch(error => res.status(400).send(error));
}

usersController.create = (req, res) => {
  return User
  .create({
    username: req.body.username,
  })
  .then(user => res.status(201).send(user))
  .catch(error => res.status(400).send(error));
}

module.exports = usersController;
