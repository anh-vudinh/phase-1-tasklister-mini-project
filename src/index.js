// document.addEventListener("DOMContentLoaded", () => {

// });
const submitForm = document.getElementById("create-task-form")
const submitInput = document.getElementById("new-task-description")
const tasksDisplay = document.getElementById("tasks")
submitForm.addEventListener("submit", appendNewTasks)
console.log(submitForm)
console.log(submitInput)
// As a user, I should be able to type a task into the input field.

// As a user, I should be able to click some form of a submit button.

// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

function appendNewTasks(event){
  event.preventDefault();
  const tasks = document.createElement("LI")
  tasks.textContent = submitInput.value
  tasksDisplay.append(tasks)
  event.target.reset();
}