const express = require('express');

const users = require('./users');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello I am an API 👋'
  });
});

router.use('/', users);

module.exports = router;
