const twitter = require('../controllers/twatts');
const router = require('express').Router();

router.post('/status', twitter.postStatus);

module.exports = router;
