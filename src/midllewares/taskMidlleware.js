const Task = require('../model/Tasks');
const { validate } = require('uuid');

module.exports = {
    async validateId(request, response, next) {
        try {
            const { id } = request.params

            if (!validate(id)) {
                return response.status(400).json({ error: "Invalid Id" })
            }

            const task = await Task.findById(id);

            response.task = task;

            if (!task) {
                return response.status(404).json({ error: "Task not found." })
            }

            next()
        } catch (error) {
            console.error(error.stack)

            return response.status(500).json({ error: error.message })
        }
    },
}