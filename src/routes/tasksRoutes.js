const express = require('express');
const Task = require('../model/Tasks')
const router = express.Router();
const TaskController = require('../controller/taskController');
const taskMidlleware = require('../midllewares/taskMidlleware');

router.get('/tasks', TaskController.getTasks);

router.post('/tasks', TaskController.postTask);

router.put('/tasks/:id', taskMidlleware.validateId, TaskController.updateTask);


module.exports = router;