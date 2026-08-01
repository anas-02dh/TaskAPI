const taskRepository = require("../repositories/task.repositories");

class TaskService {

  async getAllTasks() {
    return await taskRepository.findAll();
  }

  async getTaskById(id) {
    const task = await taskRepository.findById(id);

    if (!task) {
      throw new Error("Task not found");
    }

    return task;
  }

  async createTask(name) {
    if (!name || name.trim() === "") {
      throw new Error("Task name is required");
    }

    return await taskRepository.create(name.trim());
  }

  async updateTask(id, name, done) {
    const existingTask = await taskRepository.findById(id);

    if (!existingTask) {
      throw new Error("Task not found");
    }

    if (name !== undefined && name.trim() === "") {
      throw new Error("Task name cannot be empty");
    }

    const updatedTask = {
      name,
      done
    };

    return await taskRepository.update(id, updatedTask);
  }

  async deleteTask(id) {
    const existingTask = await taskRepository.findById(id);

    if (!existingTask) {
      throw new Error("Task not found");
    }

    return await taskRepository.delete(id);
  }
}

module.exports = new TaskService();