const { Router } = require('express');

const router = Router();
const controllerAuth = require('./controller');

router.post('/login', controllerAuth.login);
router.post('/register', controllerAuth.register);
module.exports = router;
