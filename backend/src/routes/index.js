const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/deceased', require('./deceased'));
router.use('/booking', require('./booking'));
router.use('/service', require('./service'));
router.use('/invoice', require('./invoice'));
router.use('/notification', require('./notification'));

module.exports = router;