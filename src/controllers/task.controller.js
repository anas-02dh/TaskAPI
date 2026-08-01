const taskService = require("../services/task.service");

class TaskController {

  async getAllTasks(req, res) {
    try {
      const tasks = await taskService.getAllTasks();

      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async getTaskById(req, res) {
    try {
      const id = Number(req.params.id);

      if (Number.isNaN(id)) {
        return res.status(400).json({
          message: "Invalid task ID"
        });
      }

      const task = await taskService.getTaskById(id);

      res.status(200).json(task);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }

  async createTask(req, res) {
    try {
      const { name } = req.body;

      const task = await taskService.createTask(name);

      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  async updateTask(req, res) {
    try {
      const id = Number(req.params.id);

      if (Number.isNaN(id)) {
        return res.status(400).json({
          message: "Invalid task ID"
        });
      }

      const { name, done } = req.body;

      const updatedTask = await taskService.updateTask(
        id,
        name,
        done
      );

      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }

  async deleteTask(req, res) {
    try {
      const id = Number(req.params.id);

      if (Number.isNaN(id)) {
        return res.status(400).json({
          message: "Invalid task ID"
        });
      }

      await taskService.deleteTask(id);

      res.status(204).send();
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
}

module.exports = new TaskController();