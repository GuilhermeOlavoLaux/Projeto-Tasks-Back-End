const Tasks = require('../model/Tasks')
const { response } = require('express')

module.exports = {
    async getTasks(req, response) {
        try {
            const tasks = await Tasks.find();
            return response.status(200).json({ tasks })
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
}