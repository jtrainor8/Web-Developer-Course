const experss = require('express');
const router = experss.Router();

router.get('/', (req, res) => {
    res.send('ALL SHELTERS')
})
router.post('/', (req, res) => {
    res.send('CREATING A SHELTER')
})
router.get('/:id', (req, res) => {
    res.send('VISITING ONE SHELTER')
})
router.get('/:id/edit', (req, res) => {
    res.send('EDITING ONE SHELTER')
})

module.exports = router;
