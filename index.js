//my code
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markCompleted: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};

// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskComplete.push(false);
//   taskDescription.push(description)
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log(task1.title)
task1.markCompleted();

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
