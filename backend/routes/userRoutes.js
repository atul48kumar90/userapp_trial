const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'get users'})
})

router.post('/', (req, res) => {
    res.status(200).json({message: 'add users'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `update user ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `delete user ${req.params.id}`})
})

module.exports = router;
