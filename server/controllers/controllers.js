import { Task } from "../models/models.js"

export class Controller {
    
    async getAll (req, res) {
        try {
            const tasks = await Task.find();
            return res.json(tasks);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async create (req, res) {
        try {
            const data = req.body;
            const task = await Task.create(data);
            return res.status(201).json(task);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async editOne (req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const task = await Task.findById(id);

            if (!task) {
            throw new Error('Task not found');
            }

            Object.keys(data).forEach(key => {
            task[key] = data[key];
            });

            await task.save();
            return res.status(200).json(task);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async delete (req, res) {
        try {
            const { id } = req.params;
            const deleted = await Task.findByIdAndDelete(id);
            if (deleted) {
                return res.status(204).send("Task deleted");
            }
            throw new Error('Task not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
}
