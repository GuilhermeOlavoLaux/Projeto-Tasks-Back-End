const uuid = require("uuid");
const Task = require('../model/Tasks');

module.exports = {
    async validateId(request, response, next) {
        const { id } = request.params

        if (!uuid.validate(id)) {
            return response.status(400).json({ error: "Invalid Id" })
        }
        try {
            const task = await Task.findById(id);
            response.task = task;
            if (!task) {
                return response.status(404).json({ error: "Task not found." })
            }
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

        next()
    },
}