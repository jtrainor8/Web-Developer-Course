const experss = require('express');
const router = experss.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('sorry not an admin')
})

router.get('/topsecret', (req, res) => {
    res.send('this is top secret')
})
router.get('/deleteeverything', (req, res) => {
    res.send('okay deleted it all')
})

module.exports = router;