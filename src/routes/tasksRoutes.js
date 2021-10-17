const express = require('express');
const Task = require('../model/Tasks')
const router = express.Router();
const TaskCOntroller = require('../controller/taskController')

router.get('/', (req, res) => {
    res.send('so por deus');
});

router.get('/tasks', TaskCOntroller.getTasks)

module.exports = router;