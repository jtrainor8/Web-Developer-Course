const experss = require('express');
const router = experss.Router();

router.get('/', (req, res) => {
    res.send('ALL DOGS')
})
router.post('/', (req, res) => {
    res.send('CREATING A DOG')
})
router.get('/:id', (req, res) => {
    res.send('VISITING ONE DOG')
})
router.get('/:id/edit', (req, res) => {
    res.send('EDITING ONE DOG')
})

module.exports = router;