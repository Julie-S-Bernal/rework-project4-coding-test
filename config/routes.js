const router = require('express').Router();

const travels  = require('../controllers/travels');
const users =  require('../controllers/users');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/travels')
  .get(travels.index)
  .post(secureRoute, travels.create);

router.route('/travels/:id')
  .get(travels.show)
  .put(travels.update)
  .delete(travels.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// router.route('/users/:id')
//   .get(secureRoute, users.show);

router.route('/users/:id')
  .get(users.show);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
