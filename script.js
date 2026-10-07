const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");
const progress = document.getElementById("progress");


// ADD TASK
addBtn.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";

    // COMPLETE TASK
    completeBtn.addEventListener("click", function () {

        li.classList.toggle("completed");

        updateProgress();

    });

    // DELETE TASK
    deleteBtn.addEventListener("click", function () {

        li.remove();

        updateProgress();

    });

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    updateProgress();

});


// UPDATE TASK PROGRESS
function updateProgress() {

    const tasks = document.querySelectorAll("#taskList li");

    const completedTasks = document.querySelectorAll("#taskList li.completed");

    progress.textContent =
        `${completedTasks.length} of ${tasks.length} tasks completed`;

}


// CLEAR ALL TASKS
clearAllBtn.addEventListener("click", function () {

    taskList.innerHTML = "";

    updateProgress();

});


// DATE, DAY AND TIME
const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

function updateDateTime() {

    const now = new Date();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    dayElement.textContent = days[now.getDay()];

    dateElement.textContent =
        `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    timeElement.textContent =
        now.toLocaleTimeString();
}


// START DATE AND TIME
updateDateTime();

setInterval(updateDateTime, 1000);


// INITIAL TASK COUNT
updateProgress();