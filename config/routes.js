const router = require('express').Router();

const travels  = require('../controllers/travels');
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

router.all('/*', (req, res) => res.notFound());

module.exports = router;
