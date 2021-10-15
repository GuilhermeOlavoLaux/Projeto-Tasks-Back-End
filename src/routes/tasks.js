const express = require('express');
const Task = require('../model/Tasks')
const router = express.Router();


router.get('/', (req, res) => {
    res.send('so por deus');
});

module.exports = router;