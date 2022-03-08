var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

function createTaskHander(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("Input[name='task-name']").value;
    var taskTypeInput = document.querySelector("Select[name='task-type']").value;

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHander);