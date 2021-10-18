const Tasks = require('../model/Tasks')
const { v4: uuid } = require('uuid');
const res = require('express/lib/response');

module.exports = {
    async getTasks(request, response) {
        try {
            const tasks = await Tasks.find();
            return response.status(200).json({ tasks })
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    },

    async postTask(request, response) {
        const { id, name, description } = request.body;
        if (!name || !description) {
            return response.status(400).json({ error: 'missing name or description.' })
        }

        const task = new Tasks({
            _id: uuid(),
            name,
            description
        })
        try {
            await task.save();

            return response.status(201).json({ message: 'task added successfully' })
        } catch (error) {
            return response.status(400).json({ error: error.message })

        }
    },

    async updateTask(request, response) {
        const { name, description } = request.body;
        if (!name && !description) {
            return response.status(400).json({ error: "You must inform a new name or a new description" })
        }

        if (name) {
            request.task.name = name;
        }
        if (description) {
            request.task.description = description;
        }

        try {
            await response.video.save();
            return response.status(200).json({ message: 'task updated successfully' })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }


    }
} 