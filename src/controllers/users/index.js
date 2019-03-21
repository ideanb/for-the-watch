const express = require('express');
const getTopActiveUsers = require('./topActiveUsers');
const findUser = require('./find');

const router = express.Router();

router.get('/topActiveUsers', getTopActiveUsers);
router.get('/users', findUser);

module.exports = router;
