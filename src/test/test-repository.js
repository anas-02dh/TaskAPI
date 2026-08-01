const taskRepository = require('../repositories/task.repositories');


console.log("list all tasks : ");
console.log(taskRepository.findAll());

console.log("\n find task by id : 1 :");
console.log(taskRepository.findById(1));

console.log("\n create task :");

const newTask = {
  id: 9,
  name: "playing football game",
  done: false
};

console.log(taskRepository.create(newTask));

console.log("\n update task:");

console.log(
  taskRepository.update(3, {
    done : true
  })
);

console.log("\n delete task 3:");

console.log(taskRepository.delete(3));

console.log("\n all tasks after delete:");

console.log(taskRepository.findAll());