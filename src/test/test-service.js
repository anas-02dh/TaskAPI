const taskService = require("../services/task.service");


console.log("ALL TASKS:");
  console.log(taskService.getAllTasks());

  console.log("\nCREATE TASK:");

  const newTask = taskService.createTask("playing football game");

  console.log(newTask);

  console.log("\nGET TASK:");

  console.log(taskService.getTaskById(newTask.id));

  console.log("\nUPDATE TASK:");

  const updatedTask = taskService.updateTask(
    newTask.id,
    "playing fifa",
    true
  );

  console.log(updatedTask);

  console.log("\nDELETE TASK:");

  taskService.deleteTask(newTask.id);

  console.log("Task deleted successfully");


  console.log("ALL TASKS:");
  console.log(taskService.getAllTasks());