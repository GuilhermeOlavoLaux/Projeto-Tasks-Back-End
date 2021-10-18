const express = require('express');
const Task = require('../model/Tasks')
const router = express.Router();
const TaskController = require('../controller/taskController');

router.get('/', (req, res) => {
    res.send('teste');
});

router.get('/tasks', TaskController.getTasks);

router.post('/tasks', TaskController.postTask);

module.exports = router;