const express = require('express');
const router = express.Router();

// @route GET api/proffile
// @desc Test route
// @access Public

router.get('/', (req, res) => res.send('Proffile route'));
module.exports = router;
