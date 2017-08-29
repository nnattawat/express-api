let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to the API!',
}));

module.exports = router;
