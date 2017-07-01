const twitter = require('../controllers/twatts');
const router = require('express').Router();

router.post('/status', twitter.postStatus);
router.get('/:search', twitter.searchTwitt);
router.get('/', twitter.trends);
router.get('/:name', twitter.searchTrends);

module.exports = router;
